PANDUAN LENGKAP: Bikin Website Full Animasi dengan 4 Tool

Claude Code + Motion for React + UI UX Pro Max + 21st.dev

Video sumber menjelaskan stack empat tool untuk membuat website profesional yang penuh animasi. Panduan ini memperluas video tersebut menjadi alur kerja yang bisa langsung dipraktikkan: mulai dari menyiapkan project, memasang setiap tool, memberi arahan ke Claude, mengambil komponen, menambahkan animasi, sampai mengecek hasil akhirnya.

Target hasil: satu website React yang responsive, punya design system yang konsisten, memakai komponen yang bisa dirawat, dan bergerak halus tanpa terasa ramai atau generik.

1. Memahami fungsi empat tool
   Claude Code adalah builder utama. Ia membaca project, membuat dan mengubah file, memasang dependency, menjalankan test, serta memperbaiki error dari terminal.
   Motion for React, sebelumnya dikenal luas sebagai Framer Motion, menangani animasi masuk, hover, scroll, pergantian state, dan transisi antarkomponen.
   UI UX Pro Max memberi Claude referensi dan aturan desain agar hasilnya punya hierarki, tipografi, warna, spacing, serta pola UI yang lebih terarah.
   21st.dev menjadi sumber komponen React/Tailwind buatan komunitas yang dapat dicari, dipelajari, dipasang, lalu disesuaikan oleh Claude.
   Alurnya sederhana: UI UX Pro Max membantu menetapkan bahasa desain, 21st.dev menyediakan bahan komponen, Motion memberi gerak, dan Claude Code merakit semuanya menjadi website utuh.

2. Catatan penting soal klaim “gratis”
   Motion dan versi dasar UI UX Pro Max tersedia sebagai tool open-source atau gratis untuk dipakai.
   21st.dev mempunyai katalog dan jalur penggunaan gratis, tetapi batas pencarian, instalasi, atau kredit AI dapat berubah sesuai paket.
   Claude Code bukan selalu gratis. Aksesnya memerlukan paket Claude yang kompatibel atau pemakaian API berbayar, tergantung akun dan metode login.
   Karena Vite dan Claude Code mengikuti versi Node.js terbaru, gunakan Node.js 22 LTS agar setup lebih aman untuk project baru.
3. Persiapan awal
   Yang perlu tersedia
   Komputer macOS, Windows dengan WSL/Git Bash, atau Linux.
   Node.js 22 LTS dan npm.
   Git.
   Editor seperti VS Code.
   Akun Claude yang bisa memakai Claude Code.
   Cek environment
   Jalankan perintah berikut di terminal:

node -v

npm -v

git --version

Kalau salah satu belum terdeteksi, selesaikan instalasinya dulu sebelum membuat project.

4. Buat project React dengan Vite
   Panduan ini memakai React + TypeScript karena kompatibel dengan Motion dan mayoritas komponen di 21st.dev.

npm create vite@latest website-animasi -- --template react-ts

cd website-animasi

npm install

npm run dev

Buka alamat lokal yang muncul di terminal. Kalau halaman bawaan Vite tampil, fondasi project sudah benar. Hentikan server dengan Ctrl+C sebelum melanjutkan bila terminal tersebut ingin dipakai lagi.

5. Install dan jalankan Claude Code
   Install Claude Code secara global lewat npm:

npm install -g @anthropic-ai/claude-code

Verifikasi instalasi:

claude --version

claude doctor

Masuk ke folder project lalu jalankan Claude:

cd website-animasi

claude

Ikuti proses login yang muncul. Setelah Claude aktif, mulai dengan meminta audit singkat agar ia memahami struktur project sebelum mengedit file.

Baca project ini. Jelaskan struktur, dependency yang sudah ada, dan rencana paling aman untuk membangun landing page React yang responsive. Jangan edit file dulu.

6. Pasang Motion for React
   Di root project, jalankan:

npm install motion

Import yang benar untuk React adalah:

import { motion } from "motion/react"

Contoh komponen animasi paling sederhana:

import { motion } from "motion/react"

export function AnimatedCard() {

return (

    <motion.div

      initial={{ opacity: 0, y: 20 }}

      animate={{ opacity: 1, y: 0 }}

      transition={{ duration: 0.45 }}

    >

      Konten kartu

    </motion.div>

)

}

Minta Claude memakai Motion hanya pada elemen yang membantu fokus: hero, kartu fitur, pergantian section, feedback tombol, dan elemen penting. Tidak semua teks perlu dianimasikan.

7. Pasang UI UX Pro Max
   Cara yang direkomendasikan oleh repository saat ini adalah memakai CLI resminya:

npm install -g ui-ux-pro-max-cli

uipro init --ai claude

Pastikan Python 3 tersedia karena fitur pencarian design system membutuhkannya:

python3 --version

Tutup lalu buka ulang Claude Code dari root project supaya skill baru terbaca. Setelah itu gunakan prompt seperti ini:

Gunakan UI UX Pro Max untuk membuat design system landing page SaaS. Tentukan warna, tipografi, spacing, radius, grid, style tombol, kartu, form, dan aturan responsive. Simpan sebagai sumber desain project sebelum menulis UI.

Jangan langsung meminta “buat website yang keren”. Beri konteks produk, target pengguna, tujuan halaman, tone, contoh rasa visual, dan hal yang harus dihindari. Semakin jelas batasannya, semakin kecil hasilnya terasa generik.

8. Ambil komponen dari 21st.dev
   Cara paling sederhana, sesuai alur video
   Buka 21st.dev dan cari komponen yang sesuai, misalnya animated hero, navbar, pricing, testimonial, atau CTA.
   Buka preview dan cek framework, dependency, responsive behavior, serta lisensinya.
   Salin kode atau perintah instalasi yang diberikan.
   Tempelkan ke Claude Code bersama konteks lokasi komponen dan design system project.
   Minta Claude mengadaptasi komponen, bukan menyalinnya mentah-mentah.
   Integrasi lewat CLI atau skill 21st
   Kalau ingin Claude dapat mencari komponen langsung dari agent, gunakan jalur resmi berikut:

npm i -g @21st-dev/cli

21st login

npx @21st-dev/cli install-skill

21st search "animated hero"

Batas gratis dan kredit AI di 21st.dev dapat berubah. Selalu lihat informasi paket terbaru sebelum mengandalkan alur ini untuk produksi.

9. Prompt master siap pakai
   Salin prompt berikut ke Claude Code setelah semua tool terpasang:

Bikin landing page React + TypeScript untuk [NAMA PRODUK].

Target pengguna: [SIAPA]. Tujuan utama: [DAFTAR/BOOKING/BELI].

Gunakan UI UX Pro Max untuk menetapkan design system sebelum implementasi.

Struktur halaman: navbar, hero, social proof, masalah, solusi, fitur, cara kerja, testimonial, FAQ, dan CTA akhir.

Cari komponen 21st.dev yang paling cocok bila integrasinya tersedia. Kalau tidak, gunakan komponen yang saya tempel dan adaptasikan ke design system.

Gunakan Motion for React untuk entrance, hover, scroll reveal, dan pergantian state yang penting.

Batasi animasi pada transform dan opacity bila memungkinkan. Jaga ritme, jangan membuat semua elemen bergerak sekaligus.

Website harus responsive, keyboard-friendly, punya kontras yang jelas, menghormati prefers-reduced-motion, dan tidak mengalami horizontal overflow.

Kerjakan bertahap: audit project, tulis rencana, implementasi struktur, pasang komponen, tambah motion, lalu jalankan lint/build dan laporkan hasilnya.

10. Urutan kerja yang paling aman
    Tentukan tujuan halaman dan satu CTA utama.
    Minta UI UX Pro Max membuat design system.
    Setujui struktur section sebelum Claude menulis seluruh halaman.
    Ambil hanya komponen 21st.dev yang benar-benar dibutuhkan.
    Pasang konten asli; jangan biarkan placeholder lorem ipsum.
    Tambahkan Motion setelah layout statis sudah rapi.
    Uji mobile, tablet, dan desktop.
    Jalankan build final dan perbaiki semua error sebelum deploy.
11. Aturan motion supaya tetap premium
    Pakai satu pola entrance yang konsisten, misalnya fade + translate kecil.
    Gunakan stagger pendek untuk kelompok kartu; hindari jeda panjang yang memperlambat pembaca.
    Hover cukup memberi feedback kecil melalui scale, warna, shadow, atau pergeseran beberapa pixel.
    Hindari animasi layout yang membuat teks atau tombol meloncat.
    Gunakan AnimatePresence hanya ketika elemen benar-benar masuk atau keluar dari DOM.
    Sediakan versi minim gerak untuk pengguna yang mengaktifkan reduced motion.
    Kalau dua animasi saling berebut perhatian, hapus salah satunya.
12. Checklist QA sebelum dianggap selesai
    npm run dev berjalan tanpa error di terminal atau console browser.
    npm run build selesai sukses.
    Tampilan diperiksa minimal pada lebar 360 px, 768 px, dan 1440 px.
    Tidak ada horizontal scroll yang tidak disengaja.
    Semua tombol dan link dapat dijangkau dengan keyboard.
    Heading berurutan dan hanya ada satu tujuan utama per section.
    Animasi tidak menutupi konten, menggeser layout, atau memperlambat interaksi.
    Konten, harga, testimonial, dan klaim sudah diganti dengan data asli.
    Claude melaporkan file yang diubah, dependency yang ditambah, dan test yang dijalankan.
    Prompt QA yang bisa dipakai:

Audit hasil akhir seperti senior frontend engineer. Jalankan build, cari error console, cek responsive layout, accessibility dasar, reduced motion, overflow, dependency yang tidak terpakai, dan animasi yang berlebihan. Perbaiki temuan yang aman, lalu laporkan hasil test dan file yang berubah.

13. Troubleshooting cepat
    Perintah claude tidak ditemukan
    Tutup dan buka terminal baru, cek PATH, lalu jalankan kembali claude --version dan claude doctor. Hindari instalasi npm dengan sudo.

Import Motion error
Pastikan package motion sudah terpasang dan import React memakai motion/react, bukan path lama yang tidak sesuai dengan setup project.

UI UX Pro Max tidak terbaca
Jalankan uipro init --ai claude dari root project, pastikan folder skill terbentuk, lalu restart sesi Claude Code.

Komponen 21st.dev rusak setelah ditempel
Cek dependency, versi React, Tailwind, shadcn/ui, alias import, dan file CSS global. Minta Claude menjelaskan kebutuhan komponen sebelum mengubah banyak file.

Desain masih terasa generik
Tambahkan konteks audiens, gaya visual, referensi rasa, batas warna, aturan tipografi, density, dan daftar hal yang dilarang. Minta Claude mengikuti design system yang sudah disetujui, bukan membuat gaya baru per section.

Animasi terasa berat
Kurangi animasi serentak, prioritaskan transform dan opacity, pendekkan durasi, hilangkan blur besar, dan cek apakah komponen bergerak saat berada di luar viewport.

14. Ringkasan workflow
    Buat project React.
    Jalankan Claude Code dari root project.
    Pasang Motion.
    Pasang UI UX Pro Max dan buat design system.
    Pilih atau cari komponen di 21st.dev.
    Minta Claude menyesuaikan komponen dengan konten dan sistem desain.
    Tambahkan animasi secara selektif.
    Jalankan QA, build, lalu deploy.
    Sumber resmi
    Anthropic: Setup Claude Code
    Vite: Getting Started
    Motion: React Installation
    GitHub: UI UX Pro Max Skill
    21st.dev: Use 21st in Your Agent
    Lanjutkan ke Auto Funnel DIGIFANA
    Website yang bagus baru satu bagian. Kalau lu mau lanjut dari halaman menjadi sistem yang menangkap lead, menyimpan data, mengirim follow-up, dan berjalan otomatis, pelajari Auto Funnel DIGIFANA. Di dalamnya, alur dari landing page sampai automation end-to-end dibongkar step-by-step.
