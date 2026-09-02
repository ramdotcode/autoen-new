import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'motion/react'

/**
 * A lightweight 2D-canvas "IoT globe": a rotating sphere of nodes with
 * connection arcs and pulses travelling along them. No WebGL dependency.
 */
type Node = { x: number; y: number; z: number }
type Link = { a: number; b: number; phase: number; speed: number }

function fibonacciSphere(count: number): Node[] {
  const pts: Node[] = []
  const golden = Math.PI * (3 - Math.sqrt(5))
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2
    const r = Math.sqrt(1 - y * y)
    const theta = golden * i
    pts.push({ x: Math.cos(theta) * r, y, z: Math.sin(theta) * r })
  }
  return pts
}

function seededRandom(seed: number) {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

export function NetworkGlobe({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const nodes = fibonacciSphere(420)
    const rand = seededRandom(42)
    const links: Link[] = []
    // pick node pairs that are reasonably far apart for nicer arcs
    while (links.length < 36) {
      const a = Math.floor(rand() * nodes.length)
      const b = Math.floor(rand() * nodes.length)
      if (a === b) continue
      const d =
        nodes[a].x * nodes[b].x + nodes[a].y * nodes[b].y + nodes[a].z * nodes[b].z
      if (d > 0.75 || d < -0.2) continue
      links.push({ a, b, phase: rand(), speed: 0.12 + rand() * 0.18 })
    }

    let raf = 0
    let running = true
    let width = 0
    let height = 0
    let dpr = 1
    let angle = 0
    let last = performance.now()
    const tilt = 0.42

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const project = (n: Node, rot: number) => {
      // rotate around Y then tilt around X
      const cosR = Math.cos(rot)
      const sinR = Math.sin(rot)
      const x1 = n.x * cosR - n.z * sinR
      const z1 = n.x * sinR + n.z * cosR
      const y1 = n.y
      const cosT = Math.cos(tilt)
      const sinT = Math.sin(tilt)
      const y2 = y1 * cosT - z1 * sinT
      const z2 = y1 * sinT + z1 * cosT
      return { x: x1, y: y2, z: z2 }
    }

    const slerp = (p: Node, q: Node, t: number): Node => {
      const dot = Math.max(-1, Math.min(1, p.x * q.x + p.y * q.y + p.z * q.z))
      const omega = Math.acos(dot)
      const so = Math.sin(omega) || 1e-6
      const wa = Math.sin((1 - t) * omega) / so
      const wb = Math.sin(t * omega) / so
      // lift the arc slightly above the surface
      const lift = 1 + 0.18 * Math.sin(Math.PI * t)
      return {
        x: (wa * p.x + wb * q.x) * lift,
        y: (wa * p.y + wb * q.y) * lift,
        z: (wa * p.z + wb * q.z) * lift,
      }
    }

    const draw = (now: number) => {
      if (!running) return
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now
      if (!reduce) angle += dt * 0.12

      ctx.clearRect(0, 0, width, height)
      const cx = width / 2
      const cy = height / 2
      const R = Math.min(width, height) * 0.4
      const persp = 3.2

      // soft atmosphere
      const glow = ctx.createRadialGradient(cx, cy, R * 0.6, cx, cy, R * 1.35)
      glow.addColorStop(0, 'rgba(59,130,246,0.10)')
      glow.addColorStop(1, 'rgba(59,130,246,0)')
      ctx.fillStyle = glow
      ctx.fillRect(0, 0, width, height)

      const toScreen = (p: Node) => {
        const s = persp / (persp - p.z)
        return { sx: cx + p.x * R * s, sy: cy - p.y * R * s, s, z: p.z }
      }

      // arcs
      for (const link of links) {
        const steps = 28
        ctx.beginPath()
        let visible = false
        for (let i = 0; i <= steps; i++) {
          const t = i / steps
          const p = project(slerp(nodes[link.a], nodes[link.b], t), angle)
          const { sx, sy, z } = toScreen(p)
          if (z > -0.15) visible = true
          if (i === 0) ctx.moveTo(sx, sy)
          else ctx.lineTo(sx, sy)
        }
        if (!visible) continue
        ctx.strokeStyle = 'rgba(96,165,250,0.18)'
        ctx.lineWidth = 1
        ctx.stroke()

        // pulse along arc
        if (!reduce) link.phase = (link.phase + dt * link.speed) % 1
        const pp = project(slerp(nodes[link.a], nodes[link.b], link.phase), angle)
        const { sx, sy, z, s } = toScreen(pp)
        if (z > -0.1) {
          const a = 0.35 + 0.65 * ((z + 1) / 2)
          ctx.beginPath()
          ctx.arc(sx, sy, 1.8 * s, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(224,65,63,${a.toFixed(3)})`
          ctx.fill()
        }
      }

      // nodes (back to front)
      const projected = nodes.map((n) => toScreen(project(n, angle)))
      projected.sort((p, q) => p.z - q.z)
      for (const p of projected) {
        const depth = (p.z + 1) / 2 // 0 back, 1 front
        const alpha = 0.08 + depth * 0.7
        const size = 0.7 + depth * 1.3
        ctx.beginPath()
        ctx.arc(p.sx, p.sy, size * p.s, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(147,197,253,${alpha.toFixed(3)})`
        ctx.fill()
      }

      // horizon ring
      ctx.beginPath()
      ctx.ellipse(cx, cy, R * 1.02, R * 1.02 * Math.cos(tilt) * 0.98, 0, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(255,255,255,0.05)'
      ctx.lineWidth = 1
      ctx.stroke()

      if (reduce) {
        running = false
        return
      }
      raf = requestAnimationFrame(draw)
    }

    resize()
    const ro = new ResizeObserver(() => {
      resize()
      if (reduce) {
        running = true
        draw(performance.now())
      }
    })
    ro.observe(canvas)

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (!running) {
          running = true
          last = performance.now()
          raf = requestAnimationFrame(draw)
        }
      } else {
        running = false
        cancelAnimationFrame(raf)
      }
    })
    io.observe(canvas)

    raf = requestAnimationFrame(draw)
    return () => {
      running = false
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
    }
  }, [reduce])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}
