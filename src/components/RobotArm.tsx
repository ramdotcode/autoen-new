import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'motion/react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js'
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js'

/**
 * Hero visual: a 4-axis palletizing robot that stacks boxes from a conveyor
 * onto a pallet. While the mouse moves, the arm reaches toward the cursor;
 * after a short rest it goes back to work.
 */

// Arm geometry in metres (shoulder height, link lengths, wrist offsets, tool length).
const G = { jh: 0.8, h0: 1.45, a1: 0.3, L2: 1.28, L3: 1.35, a4: 0.26, d4: 0.247, tool: 0.36 }
// Pivot points of the parallelogram links, in the model's own z-up frame.
const K = {
  C0: [-0.2, 0, 0.8],
  S2: [-0.1172, 0, 2.2485],
  P3: [0.6447, 0, 2.3692],
  A0: [0.34, 0, 1.0822],
} as const

type Vec3 = readonly number[]
type Q = { t1: number; al: number; be: number; t4: number }
type Pose = { x: number; y: number; z: number; yaw: number }

const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v))
const lerp = (a: number, b: number, t: number) => a + (b - a) * t
const wrap = (a: number) => Math.atan2(Math.sin(a), Math.cos(a))
const ease = (t: number) => t * t * t * (t * (t * 6 - 15) + 10)

/** Tool-tip pose (bottom of the gripper) → joint angles. Base sits at the origin. */
function ik({ x, y, z, yaw }: Pose): Q {
  const t1 = Math.atan2(z, x)
  const rw = Math.hypot(x, z) - G.a1 - G.a4
  const yw = y + G.tool + G.d4 - G.h0
  const c = clamp((rw * rw + yw * yw - G.L2 * G.L2 - G.L3 * G.L3) / (2 * G.L2 * G.L3), -1, 1)
  const q3 = Math.acos(c)
  const al = Math.atan2(yw, rw) + Math.atan2(G.L3 * Math.sin(q3), G.L2 + G.L3 * Math.cos(q3))
  return { t1, al, be: al - q3, t4: wrap(yaw - t1) }
}

function fk(q: Q): Pose {
  const r = G.a1 + G.L2 * Math.cos(q.al) + G.L3 * Math.cos(q.be) + G.a4
  const y = G.h0 + G.L2 * Math.sin(q.al) + G.L3 * Math.sin(q.be) - G.d4 - G.tool
  return { x: r * Math.cos(q.t1), y, z: r * Math.sin(q.t1), yaw: q.t1 + q.t4 }
}

const M4 = () => new THREE.Matrix4()
const Tr = (x: number, y: number, z: number) => M4().makeTranslation(x, y, z)
const Ry = (a: number) => M4().makeRotationY(a)
const Rz = (a: number) => M4().makeRotationZ(a)
const about = (p: Vec3, R: THREE.Matrix4) =>
  Tr(p[0], p[1], p[2]).multiply(R).multiply(Tr(-p[0], -p[1], -p[2]))
const ang = (v: Vec3) => Math.atan2(v[2], v[0])
const sub = (a: Vec3, b: Vec3) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]]
const add = (a: Vec3, b: Vec3) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]]
const rotXZ = (p: Vec3, c: Vec3, b: number) => {
  const dx = p[0] - c[0]
  const dz = p[2] - c[2]
  return [c[0] + dx * Math.cos(b) + dz * Math.sin(b), p[1], c[2] - dx * Math.sin(b) + dz * Math.cos(b)]
}

type Rig = { links: Record<string, THREE.Object3D>; home: Record<string, THREE.Matrix4> }

/** Poses every link of the model, including the passive parallelogram bars. */
function poseRig(rig: Rig, q: Q) {
  const set = (name: string, m: THREE.Matrix4) => {
    const n = rig.links[name]
    if (!n) return
    n.matrix.copy(m).multiply(rig.home[name])
    n.matrixWorldNeedsUpdate = true
  }
  const h = G.jh
  const L1 = Rz(-q.t1)
  const b2 = Math.PI / 2 - q.al
  const b3 = -q.be
  const J2 = [G.a1, 0, h]
  const E0 = [G.a1, 0, h + G.L2]
  const E = [G.a1 + G.L2 * Math.cos(q.al), 0, h + G.L2 * Math.sin(q.al)]
  const dE = sub(E, E0)
  set('Link1', L1)
  set('Link2', L1.clone().multiply(about(J2, Ry(b2))))
  set('Link3', L1.clone().multiply(Tr(E[0], E[1], E[2])).multiply(Ry(b3)).multiply(Tr(-E0[0], -E0[1], -E0[2])))
  const W0 = [G.a1 + G.L3, 0, h + G.L2]
  const W = [E[0] + G.L3 * Math.cos(q.be), 0, E[2] + G.L3 * Math.sin(q.be)]
  const dW = sub(W, W0)
  const wr = L1.clone().multiply(Tr(dW[0], dW[1], dW[2]))
  set('Link4', wr)
  set('Link6', wr.clone().multiply(about([G.a1 + G.L3 + G.a4, 0, 0], Rz(-q.t4))))
  set('LinkD2', L1.clone().multiply(about(J2, Ry(b3))))
  const C = rotXZ(K.C0, J2, b3)
  set('LinkD1', L1.clone().multiply(Tr(C[0], C[1], C[2])).multiply(Ry(b2)).multiply(Tr(-K.C0[0], -K.C0[1], -K.C0[2])))
  set('LinkS1', L1.clone().multiply(Tr(dE[0], dE[1], dE[2])))
  const B0 = [K.S2[0], 0, K.S2[2] - G.L2]
  set('LinkS2', L1.clone().multiply(about(B0, Ry(b2))))
  const P3 = add(K.P3, dE)
  set('LinkS3', L1.clone().multiply(Tr(P3[0], P3[1], P3[2])).multiply(Ry(b3)).multiply(Tr(-K.P3[0], -K.P3[1], -K.P3[2])))
  set('LinkS4', L1.clone().multiply(Tr(E[0], E[1], E[2])).multiply(Ry(ang(sub(K.A0, E0)) - ang(sub(K.A0, E)))).multiply(Tr(-E0[0], -E0[1], -E0[2])))
  set('LinkS5', L1.clone().multiply(about(K.A0, Ry(ang(sub(E0, K.A0)) - ang(sub(E, K.A0))))))
}

// Cell layout. Angles are azimuths around the robot base (atan2(z, x)).
const PEDESTAL = G.h0 - G.jh
const BOX = { l: 0.4, w: 0.3, h: 0.26 }
const CONV = { az: -1.55, top: 0.7, pick: 2.05, from: 1.75, to: 4.4, spawn: 4.05, speed: 0.55 }
const PAL = { az: 0.5, r: 2.0, top: 0.14, layers: 2 }
const SLOTS = PAL.layers * 9
const CAM = { az: 0.2, dist: 10, height: 4.2, look: new THREE.Vector3(0.75, 1.05, 0.2) }

const conveyorPose = (r: number): Pose => ({
  x: r * Math.cos(CONV.az),
  y: CONV.top + BOX.h,
  z: r * Math.sin(CONV.az),
  yaw: CONV.az,
})

/** Tip pose for pallet slot i (top face of the placed box). */
function slotPose(i: number): Pose {
  const layer = Math.floor(i / 9)
  const k = i % 9
  const u = 0.4 - Math.floor(k / 3) * 0.4
  const v = (layer % 2 ? 0.3 : -0.3) * (1 - (k % 3))
  const c = Math.cos(PAL.az)
  const s = Math.sin(PAL.az)
  return {
    x: PAL.r * c + u * c - v * s,
    y: PAL.top + (layer + 1) * BOX.h,
    z: PAL.r * s + u * s + v * c,
    yaw: PAL.az,
  }
}

const above = (p: Pose, dy: number): Pose => ({ ...p, y: p.y + dy })

type Task = (dt: number) => boolean

export default function RobotArm({ className = '' }: { className?: string }) {
  const hostRef = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return

    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' })
    } catch {
      return
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75))
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.05
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.domElement.style.width = '100%'
    renderer.domElement.style.height = '100%'
    renderer.domElement.style.display = 'block'
    host.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const pmrem = new THREE.PMREMGenerator(renderer)
    const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04)
    scene.environment = envRT.texture
    scene.environmentIntensity = 0.35

    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 60)

    // Lights: neutral key, brand-blue rim from behind, a faint red kicker.
    scene.add(new THREE.HemisphereLight(0xb8c6ff, 0x0a0d14, 0.55))
    const key = new THREE.DirectionalLight(0xffffff, 2.4)
    key.position.set(5, 9, 6)
    key.castShadow = true
    key.shadow.mapSize.set(1024, 1024)
    key.shadow.camera.left = -5
    key.shadow.camera.right = 5
    key.shadow.camera.top = 5
    key.shadow.camera.bottom = -5
    key.shadow.camera.near = 1
    key.shadow.camera.far = 25
    key.shadow.bias = -0.0005
    key.shadow.radius = 4
    scene.add(key)
    const rim = new THREE.DirectionalLight(0x3b82f6, 4)
    rim.position.set(-6, 5, -5)
    scene.add(rim)
    const kicker = new THREE.PointLight(0xe0413f, 6, 9, 2)
    kicker.position.set(-1.5, 0.6, 3)
    scene.add(kicker)

    // Floor: fading engineering grid plus a shadow catcher.
    const gridTex = (() => {
      const size = 1024
      const cv = document.createElement('canvas')
      cv.width = cv.height = size
      const g = cv.getContext('2d')!
      const step = size / 28
      g.strokeStyle = 'rgba(148,180,255,0.22)'
      g.lineWidth = 1.5
      for (let i = 0; i <= 28; i++) {
        g.beginPath()
        g.moveTo(i * step, 0)
        g.lineTo(i * step, size)
        g.moveTo(0, i * step)
        g.lineTo(size, i * step)
        g.stroke()
      }
      g.globalCompositeOperation = 'destination-in'
      const fade = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
      fade.addColorStop(0, 'rgba(0,0,0,1)')
      fade.addColorStop(0.55, 'rgba(0,0,0,0.5)')
      fade.addColorStop(1, 'rgba(0,0,0,0)')
      g.fillStyle = fade
      g.fillRect(0, 0, size, size)
      const t = new THREE.CanvasTexture(cv)
      t.colorSpace = THREE.SRGBColorSpace
      t.anisotropy = 4
      return t
    })()
    const floorGeo = new THREE.PlaneGeometry(14, 14)
    const grid = new THREE.Mesh(floorGeo, new THREE.MeshBasicMaterial({ map: gridTex, transparent: true, depthWrite: false }))
    grid.rotation.x = -Math.PI / 2
    grid.position.set(1, 0, 0.3)
    scene.add(grid)
    const shadowCatcher = new THREE.Mesh(floorGeo, new THREE.ShadowMaterial({ opacity: 0.45 }))
    shadowCatcher.rotation.x = -Math.PI / 2
    shadowCatcher.position.copy(grid.position)
    shadowCatcher.position.y = 0.001
    shadowCatcher.receiveShadow = true
    scene.add(shadowCatcher)

    // Shared materials.
    const steel = new THREE.MeshStandardMaterial({ color: 0x161b26, metalness: 0.55, roughness: 0.45 })
    const frameEdge = new THREE.LineBasicMaterial({ color: 0x60a5fa, transparent: true, opacity: 0.22 })
    const boxMat = new THREE.MeshStandardMaterial({ color: 0x1d2433, metalness: 0.15, roughness: 0.55 })
    const boxEdge = new THREE.LineBasicMaterial({ color: 0x60a5fa, transparent: true, opacity: 0.7 })
    const stackMat = boxMat.clone()
    const stackEdge = boxEdge.clone()
    stackEdge.opacity = 0.5

    const block = (w: number, h: number, d: number, mat: THREE.Material, edge: THREE.LineBasicMaterial | null, parent: THREE.Object3D, x: number, y: number, z: number) => {
      const geo = new THREE.BoxGeometry(w, h, d)
      const m = new THREE.Mesh(geo, mat)
      m.position.set(x, y, z)
      m.castShadow = true
      m.receiveShadow = true
      if (edge) m.add(new THREE.LineSegments(new THREE.EdgesGeometry(geo), edge))
      parent.add(m)
      return m
    }

    block(0.95, PEDESTAL, 0.95, steel, frameEdge, scene, 0, PEDESTAL / 2, 0)

    // Conveyor: frame, legs and rollers, running radially toward the robot.
    const conveyor = new THREE.Group()
    conveyor.rotation.y = -CONV.az
    scene.add(conveyor)
    const convLen = CONV.to - CONV.from
    const convMid = (CONV.from + CONV.to) / 2
    ;[-0.29, 0.29].forEach((side) => block(convLen, 0.12, 0.05, steel, frameEdge, conveyor, convMid, CONV.top - 0.04, side))
    for (let r = CONV.from + 0.15; r < CONV.to; r += 0.9) {
      ;[-0.27, 0.27].forEach((side) => block(0.05, CONV.top - 0.1, 0.05, steel, null, conveyor, r, (CONV.top - 0.1) / 2, side))
    }
    const rollerGeo = new THREE.CylinderGeometry(0.03, 0.03, 0.54, 12)
    rollerGeo.rotateX(Math.PI / 2)
    const rollerCount = Math.floor(convLen / 0.12)
    const rollers = new THREE.InstancedMesh(rollerGeo, new THREE.MeshStandardMaterial({ color: 0x3a4252, metalness: 0.8, roughness: 0.3 }), rollerCount)
    const tmp = new THREE.Object3D()
    for (let i = 0; i < rollerCount; i++) {
      tmp.position.set(CONV.from + 0.06 + i * 0.12, CONV.top - 0.03, 0)
      tmp.updateMatrix()
      rollers.setMatrixAt(i, tmp.matrix)
    }
    rollers.receiveShadow = true
    conveyor.add(rollers)

    // Pallet: deck boards on three runners.
    const pallet = new THREE.Group()
    pallet.position.set(PAL.r * Math.cos(PAL.az), 0, PAL.r * Math.sin(PAL.az))
    pallet.rotation.y = -PAL.az
    scene.add(pallet)
    const wood = new THREE.MeshStandardMaterial({ color: 0x2a3142, roughness: 0.8 })
    ;[-0.4, 0, 0.4].forEach((v) => block(1.2, 0.1, 0.12, wood, frameEdge, pallet, 0, 0.05, v * 1.1))
    for (let i = 0; i < 7; i++) block(0.14, 0.04, 1.0, wood, frameEdge, pallet, -0.53 + i * (1.06 / 6), PAL.top - 0.02, 0)

    // Gripper hangs from the flange; its tip is the IK target.
    const gripper = new THREE.Group()
    scene.add(gripper)
    const ledMat = new THREE.MeshStandardMaterial({ color: 0x60a5fa, emissive: 0x3b82f6, emissiveIntensity: 1.2 })
    block(0.16, 0.06, 0.16, steel, null, gripper, 0, -0.03, 0)
    block(0.11, 0.2, 0.11, steel, frameEdge, gripper, 0, -0.16, 0)
    block(0.46, 0.05, 0.34, steel, frameEdge, gripper, 0, -0.285, 0)
    block(0.42, 0.012, 0.3, ledMat, null, gripper, 0, -0.316, 0)
    block(0.44, 0.035, 0.32, new THREE.MeshStandardMaterial({ color: 0x0c0f16, roughness: 0.9 }), null, gripper, 0, -G.tool + 0.0175, 0)

    const boxGeo = new THREE.BoxGeometry(BOX.l, BOX.h, BOX.w)
    const boxEdgeGeo = new THREE.EdgesGeometry(boxGeo)
    const makeBox = () => {
      const m = new THREE.Mesh(boxGeo, boxMat)
      m.castShadow = true
      m.receiveShadow = true
      m.add(new THREE.LineSegments(boxEdgeGeo, boxEdge))
      return m
    }
    const setBoxLook = (m: THREE.Mesh, body: THREE.Material, edge: THREE.Material) => {
      m.material = body
      ;(m.children[0] as THREE.LineSegments).material = edge
    }

    // ---- Cell state -------------------------------------------------------
    const robot = new THREE.Group()
    robot.position.y = PEDESTAL
    scene.add(robot)
    let rig: Rig | null = null

    let q = ik(above(conveyorPose(CONV.pick), 0.5))
    const conv: { mesh: THREE.Mesh; r: number; age: number }[] = []
    let held: THREE.Mesh | null = null
    const stack: THREE.Mesh[] = []
    let slot = 0
    let fade = -1
    let gripGlow = 0

    const spawnBox = (r: number, age = 0) => {
      const mesh = makeBox()
      conv.push({ mesh, r, age })
      scene.add(mesh)
    }
    const placeBox = (mesh: THREE.Mesh, i: number) => {
      const p = slotPose(i)
      mesh.position.set(p.x, p.y - BOX.h / 2, p.z)
      mesh.rotation.set(0, -p.yaw, 0)
      mesh.scale.setScalar(1)
      setBoxLook(mesh, stackMat, stackEdge)
      scene.add(mesh)
      stack.push(mesh)
    }

    // ---- Motion tasks -----------------------------------------------------
    let tasks: Task[] = []
    const later = (make: () => Task): Task => {
      let t: Task | null = null
      return (dt) => (t ??= make())(dt)
    }
    // One blended pick-and-place move, the way a palletizer program runs it:
    // a vertical lift, a swing around the base at a safe height, then a
    // vertical set-down, with the phases overlapping so the corners round off.
    // Interpolating azimuth/reach/height keeps the tool on an arc around the
    // base, so the arm never pulls in across its own body.
    const transfer = (target: () => Pose): Task =>
      later(() => {
        const p0 = fk(q)
        const p1 = target()
        const az0 = Math.atan2(p0.z, p0.x)
        const daz = wrap(Math.atan2(p1.z, p1.x) - az0)
        const r0 = Math.hypot(p0.x, p0.z)
        const r1 = Math.hypot(p1.x, p1.z)
        const dyaw = wrap(p1.yaw - p0.yaw)
        const top = Math.max(p0.y, p1.y)
        const yc = Math.max(top, clamp(top + 0.4, 1.4, 2.1))
        const dur = 0.9 + Math.abs(daz) * 0.45 + Math.abs(r1 - r0) * 0.4 + (2 * yc - p0.y - p1.y) * 0.35
        let t = 0
        return (dt) => {
          t = Math.min(1, t + dt / dur)
          const h = ease(clamp((t - 0.16) / 0.68, 0, 1))
          const y =
            t < 0.5
              ? lerp(p0.y, yc, ease(clamp(t / 0.34, 0, 1)))
              : lerp(yc, p1.y, ease(clamp((t - 0.66) / 0.34, 0, 1)))
          const az = az0 + daz * h
          const r = lerp(r0, r1, h)
          q = ik({ x: r * Math.cos(az), y, z: r * Math.sin(az), yaw: p0.yaw + dyaw * h })
          return t >= 1
        }
      })
    const waitUntil = (ok: () => boolean): Task => () => ok()
    const dwell = (sec: number, then: () => void): Task => {
      let t = 0
      return (dt) => {
        t += dt
        if (t < sec) return false
        then()
        return true
      }
    }
    const run = (fn: () => void): Task => () => (fn(), true)

    const placeTasks = (): Task[] => {
      const i = slot
      return [
        waitUntil(() => fade < 0),
        transfer(() => slotPose(i)),
        dwell(0.2, () => {
          if (held) placeBox(held, i)
          held = null
          slot++
          gripGlow = 1
          if (slot >= SLOTS) {
            slot = 0
            fade = 0
          }
        }),
        run(() => (tasks = pickTasks())),
      ]
    }
    const pickTasks = (): Task[] => [
      waitUntil(() => conv.length > 0 && conv[0].r <= CONV.pick + 1e-3 && conv[0].age > 0.4),
      transfer(() => conveyorPose(CONV.pick)),
      dwell(0.2, () => {
        const front = conv.shift()
        if (!front) return
        held = front.mesh
        held.position.set(0, -G.tool - BOX.h / 2, 0)
        held.rotation.set(0, 0, 0)
        held.scale.setScalar(1)
        gripper.add(held)
        gripGlow = 1
      }),
      run(() => (tasks = placeTasks())),
    ]
    const resume = () => {
      tasks = held ? placeTasks() : pickTasks()
    }

    // Seed the cell so the first frame already looks busy.
    for (let i = 0; i < 5; i++) placeBox(makeBox(), slot++)
    spawnBox(CONV.pick, 1)
    spawnBox(CONV.pick + BOX.l + 0.06, 1)
    spawnBox(CONV.pick + 2 * (BOX.l + 0.06), 1)
    resume()

    // ---- Cursor follow ----------------------------------------------------
    const raycaster = new THREE.Raycaster()
    const ndc = new THREE.Vector2()
    const plane = new THREE.Plane()
    const hit = new THREE.Vector3()
    let followUntil = 0
    let following = false
    let aim: Pose | null = null
    let parallax = 0
    let parallaxTarget = 0

    const onPointer = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return
      parallaxTarget = (e.clientX / window.innerWidth) * 2 - 1
      const rect = renderer.domElement.getBoundingClientRect()
      if (!rect.width || !rect.height) return
      ndc.set(((e.clientX - rect.left) / rect.width) * 2 - 1, -((e.clientY - rect.top) / rect.height) * 2 + 1)
      raycaster.setFromCamera(ndc, camera)
      // A vertical plane between the robot and the camera catches the cursor ray.
      const toCam = new THREE.Vector3(camera.position.x, 0, camera.position.z).normalize()
      plane.setFromNormalAndCoplanarPoint(toCam, toCam.clone().multiplyScalar(1.9))
      if (!raycaster.ray.intersectPlane(plane, hit)) return
      const camAz = Math.atan2(toCam.z, toCam.x)
      const az = camAz + clamp(wrap(Math.atan2(hit.z, hit.x) - camAz), -1.35, 1.35)
      const r = clamp(Math.hypot(hit.x, hit.z), 1.9, 2.5)
      aim = { x: r * Math.cos(az), y: clamp(hit.y, 1.3, 2.2), z: r * Math.sin(az), yaw: az }
      followUntil = performance.now() + 1700
    }

    // ---- Frame loop -------------------------------------------------------
    const updateCell = (dt: number, now: number) => {
      // Conveyor: boxes slide toward the pick point and queue up.
      for (let i = 0; i < conv.length; i++) {
        const b = conv[i]
        const stop = i === 0 ? CONV.pick : conv[i - 1].r + BOX.l + 0.06
        b.r = Math.max(stop, b.r - CONV.speed * dt)
        b.age += dt
        const p = conveyorPose(b.r)
        b.mesh.position.set(p.x, CONV.top + BOX.h / 2, p.z)
        b.mesh.rotation.set(0, -CONV.az, 0)
        b.mesh.scale.setScalar(ease(Math.min(1, b.age / 0.4)))
      }
      const last = conv[conv.length - 1]
      if (conv.length < 4 && (!last || last.r < CONV.spawn - BOX.l - 0.35)) spawnBox(CONV.spawn)

      // Full pallet: fade the stack out, then start a fresh one.
      if (fade >= 0) {
        fade += dt
        const o = Math.max(0, 1 - fade / 0.9)
        stackMat.transparent = true
        stackMat.opacity = o
        stackEdge.opacity = 0.5 * o
        if (fade >= 0.9) {
          stack.splice(0).forEach((m) => scene.remove(m))
          stackMat.opacity = 1
          stackMat.transparent = false
          stackEdge.opacity = 0.5
          fade = -1
        }
      }

      // Arm: follow the cursor while it moves, otherwise keep palletizing.
      const wantFollow = !!aim && now < followUntil
      if (wantFollow && !following) {
        following = true
      } else if (!wantFollow && following) {
        following = false
        resume()
      }
      if (following && aim) {
        // Chase the cursor in joint space so the arm swings around its base
        // instead of cutting a straight line past it (which folds the arm).
        const goal = ik(aim)
        const k = 1 - Math.exp(-dt * 4)
        const step = (d: number, vmax: number) => clamp(d * k, -vmax * dt, vmax * dt)
        q = {
          t1: q.t1 + step(wrap(goal.t1 - q.t1), 1.8),
          al: q.al + step(goal.al - q.al, 1.2),
          be: q.be + step(goal.be - q.be, 1.2),
          t4: q.t4 + step(wrap(goal.t4 - q.t4), 3),
        }
      } else if (tasks.length) {
        // A task may swap in the next cycle's list; only drop it if it is still first.
        const current = tasks[0]
        if (current(dt) && tasks[0] === current) tasks.shift()
      }

      gripGlow = Math.max(0, gripGlow - dt * 2.2)
      ledMat.emissiveIntensity = 1.2 + gripGlow * 3
      parallax = lerp(parallax, parallaxTarget, 1 - Math.exp(-dt * 2))
    }

    const placeCamera = () => {
      const az = CAM.az - parallax * 0.08
      const aspect = camera.aspect
      const dist = CAM.dist * Math.max(1, 0.95 / aspect)
      camera.position.set(Math.cos(az) * dist, CAM.height, Math.sin(az) * dist)
      camera.lookAt(CAM.look)
    }

    const draw = () => {
      if (rig) poseRig(rig, q)
      const tip = fk(q)
      gripper.position.set(tip.x, tip.y + G.tool, tip.z)
      gripper.rotation.y = -tip.yaw
      placeCamera()
      renderer.render(scene, camera)
    }

    const resize = () => {
      const { width, height } = host.getBoundingClientRect()
      if (!width || !height) return
      renderer.setSize(width, height, false)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      if (reduce) draw()
    }

    let raf = 0
    let running = false
    let last = performance.now()
    const tick = (now: number) => {
      if (!running) return
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now
      updateCell(dt, now)
      draw()
      raf = requestAnimationFrame(tick)
    }
    const start = () => {
      if (running || reduce) return
      running = true
      last = performance.now()
      raf = requestAnimationFrame(tick)
    }
    const stop = () => {
      running = false
      cancelAnimationFrame(raf)
    }

    let disposed = false
    const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder)
    loader.load(`${import.meta.env.BASE_URL}models/robot-arm.glb`, (gltf) => {
      if (disposed) return
      const body = new THREE.MeshStandardMaterial({ color: 0xdfe3ea, metalness: 0.25, roughness: 0.38 })
      const mid = new THREE.MeshStandardMaterial({ color: 0x3a4150, metalness: 0.6, roughness: 0.4 })
      const dark = new THREE.MeshStandardMaterial({ color: 0x1b2029, metalness: 0.5, roughness: 0.5 })
      gltf.scene.traverse((o) => {
        const mesh = o as THREE.Mesh
        if (!mesh.isMesh) return
        const c = (mesh.material as THREE.MeshStandardMaterial).color
        mesh.material = c.r > 0.5 ? body : c.r < 0.12 ? dark : mid
        mesh.castShadow = true
        mesh.receiveShadow = true
      })
      const root = gltf.scene.children[0]
      const links: Rig['links'] = {}
      const home: Rig['home'] = {}
      root.children.forEach((n) => {
        if (!/^Link/.test(n.name)) return
        n.updateMatrix()
        links[n.name] = n
        home[n.name] = n.matrix.clone()
        n.matrixAutoUpdate = false
      })
      rig = { links, home }
      robot.add(gltf.scene)
      draw()
      setReady(true)
    })

    if (reduce) {
      // A still frame: mid-cycle above the pallet.
      q = ik(above(slotPose(slot), 0.45))
      held = makeBox()
      gripper.add(held)
      held.position.set(0, -G.tool - BOX.h / 2, 0)
    }

    const ro = new ResizeObserver(resize)
    ro.observe(host)
    resize()
    const io = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()))
    io.observe(host)
    if (!reduce) window.addEventListener('pointermove', onPointer, { passive: true })

    return () => {
      disposed = true
      stop()
      ro.disconnect()
      io.disconnect()
      window.removeEventListener('pointermove', onPointer)
      scene.traverse((o) => {
        const m = o as THREE.Mesh
        m.geometry?.dispose()
        const mat = m.material as THREE.Material | THREE.Material[] | undefined
        if (Array.isArray(mat)) mat.forEach((x) => x.dispose())
        else mat?.dispose()
      })
      gridTex.dispose()
      envRT.dispose()
      pmrem.dispose()
      renderer.dispose()
      renderer.domElement.remove()
    }
  }, [reduce])

  return (
    <div
      ref={hostRef}
      className={`${className} transition-opacity duration-1000 ${ready ? 'opacity-100' : 'opacity-0'}`}
      aria-hidden="true"
    />
  )
}
