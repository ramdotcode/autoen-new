# Catatan: data yang belum pasti

Daftar isi website yang masih **placeholder / draft** dan perlu dikonfirmasi ke
Autoen sebelum di-deploy. Begitu datanya masuk, centang di sini.

Di website, data contoh ditandai badge **"Contoh"**, dan nama yang belum ada
tampil sebagai **"Nama menyusul"**, jadi kelihatan jelas mana yang belum final.

## 1. Profil, visi & misi
File: `src/i18n/id.ts` dan `src/i18n/en.ts` → `manifesto` (visi) dan `profile`
(profil + misi).

- [ ] Teks profil, visi, dan misi masih **draft tulisan kami**. Sengaja dibuat
      pakai bahasa sehari-hari, bukan bahasa korporat. Minta Autoen baca & koreksi
      supaya isinya benar-benar suara mereka.
- [ ] Tahun berdiri perusahaan (belum ada, jadi belum ditampilkan).
- [ ] Klaim di profil yang perlu dicek: tim insinyur sendiri yang turun ke lokasi,
      klien dari industri & pengelola kota.

## 2. Struktur perusahaan (orang-orangnya)
File: `src/data/team.ts`

**Disembunyikan dulu dari web (2026-10-15)** sampai nama asli ada. Untuk
menampilkan lagi: tambahkan `<Team />` di `src/pages/ProfilePage.tsx`.

- [ ] Nama tiap orang (semua masih kosong → "Nama menyusul").
- [ ] Jabatan. Susunan sekarang cuma tebakan umum: Direktur Utama → Direktur
      Teknik & Manajer Keuangan/Admin → Lead Otomasi, Lead IoT, Software Engineer,
      Teknisi Lapangan. Ganti sesuai struktur asli.
- [ ] Foto tiap orang (opsional). Taruh di `public/img/team/` lalu isi `photo`.
- [ ] Foto tim di situs lama (`../Autoen/assets/img/team`) itu gambar bawaan
      template, **bukan orang Autoen**, jadi jangan dipakai.

## 3. Klien (perusahaan yang sudah kerja sama)
File: `src/data/clients.ts`, logo di `public/img/clients/`

**2026-10-15:** halaman Portfolio digabung ke Profil dan cuma berisi logo klien.
Proyek-proyek contoh sudah dihapus. Link lama `/portfolio` otomatis diarahkan
ke bagian klien di halaman Profil.

- [x] **Mayora**: logo putih dari situs resminya (mayora.com/img/mayora_logo_white.svg).
- [x] **PT Indolakto**: logo "PT. INDOLAKTO" dari owner, diubah jadi putih
      transparan. File aslinya kecil (447 px), jadi kalau ada versi lebih besar
      atau SVG, sebaiknya diganti.
- [x] **ABB**: ABB_logo.svg dari Wikimedia Commons, warnanya diubah jadi putih.
- [x] **BWI Aviation**: logo dari owner (sudah transparan), diubah jadi putih.
- [ ] Kalau owner punya file logo resmi dari klien, sebaiknya pakai yang itu.
- [ ] Logo klien lain → taruh di `public/img/clients/`, lalu tambahkan di `clients.ts`.
      Pakai versi putih/terang supaya kelihatan di latar gelap.
- [ ] Logo klien di situs lama (`../Autoen/assets/img/clients`) itu bawaan
      template, bukan klien asli.
- [ ] Poin "Dipercaya perusahaan besar" di Beranda menyebut Mayora dan Indolakto
      (ABB belum disebut). Ubah juga kalau daftar klien berubah.

## 4. Produk
File: `src/i18n/id.ts` dan `en.ts` → `services`

- [ ] Daftar produk sekarang: Konsultan IT, Mesin Industri, Robotik, IoT,
      Otomasi PLC & SCADA, Smart City. Di catatan aslinya tertulis "messing",
      kami artikan **mesin**. Cek lagi kalau maksudnya lain.
- [ ] Apakah ada produk/merek spesifik (misalnya robot ABB, merek PLC tertentu)
      yang mau ditonjolkan.

## 5. Identitas
File: `src/data/content.ts`

- [x] Alamat: Jl. KH. Muchtar Tabrani No. 53, Bekasi Utara (dikonfirmasi 2026-10-15).
      Kode pos belum ada, bisa ditambahkan di `content.ts`.
- [ ] Email diambil dari situs lama, pastikan masih berlaku.
- [x] Nomor HP: +62 817-9999-390 (dikonfirmasi 2026-10-15).
- [ ] Nomor +62 817-9999-390 ini WhatsApp atau bukan? Kalau iya, form kontak
      bisa ditambah tombol "Kirim via WhatsApp".
- [ ] Jam operasional (Senin–Jumat 09.00–17.00), cek lagi.
- [ ] Link sosial media (Instagram, LinkedIn, dll). Di situs lama kosong.

## 6. Lain-lain (dari sebelumnya)
- [ ] Angka statistik (232 klien, 521 proyek, 1463 jam, 15 staf) dibawa dari
      situs lama, belum diverifikasi.
- [ ] Form kontak masih membuka aplikasi email pengunjung (`mailto:`), belum
      tersimpan ke server/database. Perlu diputuskan: email service (Formspree,
      Resend, dll), Google Sheet, atau WhatsApp.

## 7. Teks yang bahasanya kurang manusiawi
Hasil cek 2026-10-15. Semua ada di `src/i18n/id.ts` (versi Inggris di `en.ts`
isinya sama, jadi ikut diganti). Nama di kurung = key di file tersebut.

**Tingkat:** 🔴 kaku banget / kayak tulisan AI · 🟡 agak kaku · 🟢 udah oke

### Ciri yang bikin kaku (hindari waktu nulis ulang)
- **Kata jargon tanpa isi:** "solusi cerdas", "transformasi bisnis",
  "Industri 4.0", "masa depan yang terhubung", "teknologi terkini/mutakhir",
  "inovasi berkelanjutan", "pertumbuhan nyata", "efisiensi operasional
  maksimal". Bisa ditempel ke perusahaan mana pun.
- **Pola tiga serangkai:** "efisiensi, produktivitas dan konektivitas",
  "jujur, transparan dan bertanggung jawab", "kecepatan, akurasi dan efisiensi".
- **Terjemahan mentah dari Inggris:** "Kualitas berawal dan berakhir pada
  pelanggan", "Dibangun di atas integritas", "Dukungan kami dirancang dengan
  satu tujuan".
- **Klaim tanpa bukti:** "tim profesional berpengalaman", "tahan serangan
  siber", "selangkah di depan". Lebih kuat kalau diganti fakta: berapa tahun,
  mesin apa, pabrik siapa, contoh kasus.
- **Subjek abstrak:** "Asesmen terstruktur mengubah masalah menjadi..."
  (yang ngerjain siapa?).

### Beranda (`/`)
| | Bagian | Kalimat sekarang | Masalahnya |
|---|---|---|---|
| 🔴 | Judul hero (`hero.titleLines`) | "Mari wujudkan transformasi bisnis lewat solusi cerdas." | Slogan generik, padahal ini kalimat pertama yang dibaca orang |
| 🔴 | Sub hero (`hero.subtitle`) | "Otomasi, IoT dan sistem cerdas yang dirancang untuk industri Indonesia, dikerjakan oleh tim profesional berpengalaman." | Klise "tim profesional berpengalaman" |
| 🔴 | Judul nilai (`approach.title`) | "Solusi cerdas untuk masa depan yang terhubung." | Jargon murni |
| 🟡 | Teks nilai (`approach.text`) | "Kami tim profesional berpengalaman yang merancang, mengintegrasikan dan mendukung..." | Daftar kata kerja ala brosur |
| 🔴 | Kartu 1 (`approach.items`) | "Kualitas berawal dan berakhir pada pelanggan." | Terjemahan mentah |
| 🟡 | Kartu 2 | "Kami mengejar hasil terbesar dengan usaha, waktu dan biaya seminimal mungkin." | Kaku, tiga serangkai |
| 🔴 | Kartu 3 | "Kami memanfaatkan otomasi canggih, AI dan IoT untuk meningkatkan kecepatan, akurasi dan efisiensi operasional Anda." | Jargon + tiga serangkai dobel |
| 🔴 | Kartu 4 | "Dukungan kami dirancang dengan satu tujuan: kepuasan dan keberhasilan jangka panjang setiap pelanggan." | Kalimat iklan generik |
| 🟡 | Judul Kenapa Autoen (`whyUs.title`) | "Mitra untuk seluruh transformasi, bukan sekadar pemasangan." | Idenya bagus, kata "transformasi" bikin kaku |
| 🔴 | 5 poin Kenapa Autoen (`whyUs.items`) | "Meningkatkan efisiensi, produktivitas dan konektivitas lintas industri." / "...untuk terus selangkah di depan." / "...siap Anda andalkan." / "Dibangun di atas integritas, transparansi dan kepuasan klien." | **Bagian paling AI di seluruh situs.** Semua jargon, nggak ada subjek, nggak ada contoh |
| 🟡 | Label statistik (`stats`) | "Klien puas", "Jam dukungan" | Klise kecil, dan angkanya belum diverifikasi |
| 🟢 | Visi (`manifesto`), Jelajahi (`pages.explore`) | | Udah pakai bahasa obrolan |

### Profil (`/profile`)
| | Bagian | Kalimat sekarang | Masalahnya |
|---|---|---|---|
| 🟢 | Profil, misi, tim (`profile`, `team`) | | Udah ditulis ulang, tinggal dicek isinya bener atau nggak |
| 🔴 | Intro nilai utama (`coreValues.text`) | "Nilai-nilai ini mendorong kami menghadirkan teknologi yang membawa pertumbuhan nyata bagi klien dan mitra." | Jargon |
| 🔴 | Inovasi | "Kami terus menciptakan solusi baru dan menerapkan teknologi terkini pada setiap produk dan layanan, berkembang bersama pasar yang terus berubah." | Panjang, kosong |
| 🔴 | Keandalan | "...agar klien mencapai efisiensi operasional maksimal tanpa gangguan." | Jargon |
| 🔴 | Keamanan | "Data dan operasi adalah hal penting. Kami mengutamakan keamanan di setiap lapisan..." | Terjemahan mentah |
| 🔴 | Efisiensi | "...melalui otomasi serta teknologi mutakhir yang mengoptimalkan setiap proses." | Jargon |
| 🟡 | Integritas | "Kami bertindak jujur, transparan dan bertanggung jawab dalam setiap hubungan..." | Tiga serangkai, tapi masih wajar |

### Produk (`/products`)
| | Bagian | Kalimat sekarang | Masalahnya |
|---|---|---|---|
| 🟢 | Kartu produk (`services.items`) | | Udah ditulis ulang |
| 🟡 | Kartu IoT | "...dari mana saja, dengan keamanan yang dijaga." | Ujungnya kaku |
| 🟡 | Kartu Smart City | "...yang terhubung dan bisa dikelola dari satu platform." | Agak brosur |
| 🟡 | Tahap 01 (`process.steps`) | "Kami memetakan hambatan yang menahan laju operasional Anda." | Agak kaku |
| 🔴 | Tahap 02 | Judul "Pendekatan kami" + "Asesmen terstruktur mengubah masalah menjadi rancangan solusi yang jelas." | Judul nggak jelas, subjek abstrak |
| 🟡 | Tahap 03 | "Kami mengusulkan kombinasi teknologi yang memberi hasil terbesar dengan biaya terkecil." | Klaim generik |
| 🟡 | Tahap 04 | "...memasang, mengintegrasikan dan meng-commissioning sistem..." | Campur Inggris yang dipaksa |
| 🟡 | Poin tahap 01 & 03 | "Tantangan pengelolaan data", "Peningkatan sistem otomasi", "Solusi IoT industri" | Kata benda generik |

### Portfolio & Kontak
- 🟢 Teks portfolio dan form kontak udah oke.
- Ringkasan 6 proyek contoh (`src/data/portfolio.ts`) nanti diganti proyek asli.

### Footer & Google
| | Bagian | Kalimat sekarang | Masalahnya |
|---|---|---|---|
| 🟡 | Kartu Bekerja sama (`footer.workWithUs`) | "...untuk membangun sistem otomasi dan IoT yang tahan lama." | Agak brosur |
| 🟡 | Kartu Minta demo (`footer.demo`) | "Lihat bagaimana dasbor IoT, retrofit PLC atau alur kerja RPA bekerja pada proses Anda sendiri." | Susunan kalimat ala Inggris |
| 🟡 | Tagline footer (`footer.tagline`) | "Solusi otomasi & IoT untuk Industri 4.0" | Jargon |
| 🟡 | Deskripsi di Google (`meta.description`) | "...menghadirkan solusi otomasi industri, IoT dan smart city untuk mendukung transformasi bisnis di era Industri 4.0." | Jargon. Ini yang muncul di hasil pencarian |

### Saran waktu nulis ulang
- [ ] **Gabungkan 3 section yang isinya mirip:** "Yang paling kami utamakan"
      (Beranda), "Kenapa Autoen" (Beranda), dan "Nilai utama" (Profil) sama-sama
      ngomongin pelanggan, inovasi, keandalan, keamanan, efisiensi. Cukup jadi
      satu, isinya 3–4 poin yang ada contoh nyatanya.
- [ ] Prioritas ganti: judul hero → 5 poin Kenapa Autoen → Nilai utama →
      kartu "Yang paling kami utamakan" → tahap proses → footer & meta.

## 8. Saran pengganti untuk yang 🔴 (belum dipasang ke web)
Pilih salah satu opsi atau campur. Kalimat bertanda **[cek]** berisi klaim yang
harus benar dulu di Autoen sebelum dipakai.

### Judul hero (`hero.titleLines` + `hero.highlight`)
Judulnya dipecah jadi 3 baris. Bagian yang **ditebalkan** dapat warna gradasi.
- **A.** Mesin, robot, dan sistem / yang bikin pabrik Anda / **jalan lebih lancar.**
- **B.** Dari panel PLC / sampai lengan robot, / **kami yang kerjakan.**
- **C.** Pabrik Anda bisa / bekerja lebih pintar. / **Kami bantu dari nol.**

### Sub hero (`hero.subtitle`)
- **A.** Kami merancang dan memasang otomasi, robot, dan IoT untuk pabrik dan kota di Indonesia. Kantornya di Bekasi Utara.
- **B.** Satu tim untuk urusan otomasi, robot, dan IoT di tempat Anda. Kami datang ke lokasi, mengerjakan sampai jalan, dan tetap bisa dihubungi setelahnya.

### Kenapa Autoen (`whyUs`)
Saran: 5 poin jadi 4 poin, masing-masing ada contohnya.
- Judul: **A.** "Bukan cuma pasang, lalu pergi." · **B.** "Kenapa klien kerja bareng kami."
- **Satu tim dari awal sampai akhir.** Yang survei, yang merancang, dan yang memasang adalah orang yang sama. Anda tidak perlu menjelaskan ulang ke orang baru. **[cek]**
- **Tidak menjual yang tidak perlu.** Kalau mesin lama Anda masih bisa diperbaiki, kami bilang. Tidak semua masalah harus diselesaikan dengan sistem baru.
- **Masih ada setelah serah terima.** Kalau ada yang bermasalah setelah proyek selesai, cukup telepon. Kami yang datang. **[cek]**
- **Hasilnya bisa dilihat.** Proyek yang sudah dan sedang kami kerjakan ada di halaman Portfolio.

### Nilai utama (`coreValues`)
- Intro: **A.** "Lima hal yang kami pegang, dan seperti apa wujudnya di lapangan." · **B.** "Bukan sekadar tulisan di dinding kantor. Ini yang kami lakukan di setiap proyek."
- **Inovasi:** Kami terus belajar alat dan teknologi baru, tapi baru memakainya kalau memang lebih baik untuk Anda.
- **Keandalan:** Sistem kami uji sampai stabil sebelum diserahkan. Produksi Anda tidak boleh berhenti gara-gara kami.
- **Keamanan:** Akses ke mesin dan data Anda hanya untuk orang yang memang perlu. Password bawaan perangkat selalu kami ganti. **[cek]**
- **Efisiensi:** Kalau satu sensor sudah cukup, kami tidak akan memasang sepuluh.
- **Integritas:** Kalau ada yang salah atau telat, kami kabari duluan. Tidak menunggu Anda bertanya.

### Yang paling kami utamakan (`approach`)
Isinya mirip Kenapa Autoen. Kalau dua section digabung, bagian ini bisa dihapus.
- Judul: **A.** "Yang paling kami jaga di setiap proyek." · **B.** "Cara kami memperlakukan setiap klien."
- **Kartu 1 (Berfokus pada pelanggan):** Kami mulai dari cara kerja di tempat Anda, bukan dari katalog produk.
- **Kartu 3 (Inovasi & teknologi):** Robot, sensor, dan AI kami pakai kalau memang menghemat waktu atau tenaga Anda. Bukan sekadar supaya kelihatan canggih.
- **Kartu 4 (Dukungan purnajual):** Setelah sistem jalan, kami tetap bisa ditelepon. Kalau ada yang rusak, teknisi kami yang datang. **[cek]**

### Tahap 02 di Proses (`process.steps[1]`)
- Judul: **A.** "Survei & rancang" · **B.** "Cek lokasi"
- **A.** Tim kami datang ke lokasi, melihat prosesnya langsung, lalu menggambar rancangan solusinya bersama Anda.
- **B.** Kami ngobrol dengan operator dan melihat mesinnya sendiri. Dari situ kami susun rancangan yang bisa Anda periksa dulu sebelum ada biaya apa pun. **[cek: survei gratis atau tidak]**

## 9. Pilihan final
Teks yang sudah dipilih. Yang dicentang sudah dipasang di branch `development`
(versi ID dan EN), belum di `main`.

- [x] **Judul hero** (`hero.titleLines`, `hero.highlight` = "Itu tugas kami."):
      Kerja manual berkurang, / produksi tetap jalan. / Itu tugas kami.
- [x] **Sub hero** (`hero.subtitle`): Kami bantu pabrik menekan downtime dan
      memantau produksi dari mana saja, lewat otomasi, robotik, dan IoT.
- [x] **Kenapa Autoen, judul** (`whyUs.title`): Kenapa klien memilih Autoen.
- [x] **Kenapa Autoen, poin** (`whyUs.items`, 5 poin jadi 4, gaya profesional):
  1. **Satu tim dari awal sampai akhir.** Tim yang survei, merancang, dan
     memasang adalah tim yang sama, jadi Anda tidak perlu menjelaskan ulang ke
     orang baru. **[cek]**
  2. **Solusi sesuai kebutuhan.** Kalau mesin lama Anda masih layak diperbaiki,
     kami sampaikan. Tidak semua masalah harus diselesaikan dengan sistem baru.
  3. **Pendampingan setelah serah terima.** Kami tetap bisa dihubungi setelah
     proyek selesai, dan tim kami yang turun kalau ada kendala. **[cek]**
  4. **Hasil yang bisa dilihat.** Proyek yang sudah dan sedang kami kerjakan
     bisa Anda lihat di halaman Portfolio.
- [x] **Nilai utama, isi** (`coreValues.items`, versi pendek):
  - Inovasi: Teknologi baru kami pakai kalau terbukti lebih baik, bukan sekadar karena baru.
  - Keandalan: Sistem diuji sampai stabil sebelum diserahkan.
  - Keamanan: Akses ke mesin dan data Anda hanya untuk orang yang berwenang.
  - Efisiensi: Secukupnya, tidak berlebihan. Satu sensor kalau memang cukup satu.
  - Integritas: Kendala dan keterlambatan kami sampaikan lebih dulu.
- [x] **Nilai utama, pembuka** (`coreValues.text`): dihapus, langsung ke daftar nilai.
- [x] **"Yang paling kami utamakan"** (`approach`): section dihapus dari Beranda
      karena isinya sama dengan "Kenapa klien memilih Autoen".
- [x] **Tahap 02 Proses**: "Survei & perancangan". Tim kami datang ke lokasi,
      melihat prosesnya langsung, lalu menyusun rancangan solusi bersama Anda.
- [x] **Footer, Bekerja sama**: Kami bekerja sama dengan pabrik, pengelola
      utilitas, dan pemerintah kota. **[cek: memang pernah dengan pemerintah kota?]**
- [x] **Footer, Minta demo**: Lihat contoh dasbor IoT atau sistem otomasi yang
      sudah berjalan sebelum memutuskan. **[cek: ada contoh yang bisa didemokan?]**
- [x] **Footer, tagline**: Otomasi, mesin, robotik, dan IoT untuk industri.
- [x] **Deskripsi Google** (`meta.description`): Otomasi, robotik, dan IoT untuk
      pabrik di Indonesia. Kami bantu menekan downtime dan memantau produksi dari
      mana saja.

- [x] **Visi** (`manifesto.text`): Menjadi perusahaan otomasi yang dipercaya
      pabrik dan kota di Indonesia untuk sistem yang andal dan mudah dirawat.
- [x] **Misi** (`profile.mission`, versi profesional):
  1. Memahami masalah langsung di lokasi sebelum menawarkan solusi.
  2. Memilih teknologi yang sesuai dengan kebutuhan dan anggaran klien.
  3. Menyelesaikan pekerjaan sampai sistem berjalan stabil dan bisa dioperasikan tim klien.
  4. Mendampingi klien setelah proyek selesai, bukan hanya sampai serah terima.

- [x] **Profil perusahaan** (`profile.title`, `profile.paragraphs`): judul "Mitra
      teknik untuk industri Indonesia." + satu paragraf tanpa lokasi: Autoen
      Industri Teknologi (AITEK) adalah perusahaan teknik yang menangani otomasi
      industri, mesin, robotik, dan IoT untuk pabrik dan kota di Indonesia.

Semua teks 🔴 dari bagian 7 sudah diganti. Sisa yang 🟡 (kartu IoT & Smart
City, tahap 01/03/04 Proses, label statistik) masih teks lama.
