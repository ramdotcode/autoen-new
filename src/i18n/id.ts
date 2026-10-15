import { Bot, Building2, Cog, Cpu, MonitorCog, Radio } from 'lucide-react'
import type { Dictionary } from './types'

export const id: Dictionary = {
  meta: {
    title: 'Autoen Industri Teknologi | Solusi Otomasi & IoT',
    description:
      'Otomasi, robotik, dan IoT untuk pabrik di Indonesia. Kami bantu menekan downtime dan memantau produksi dari mana saja.',
  },
  skipToContent: 'Lompat ke konten',
  languageName: 'Bahasa Indonesia',

  a11y: {
    home: 'beranda',
    primaryNav: 'Utama',
    mobileNav: 'Seluler',
    openMenu: 'Buka menu',
    closeMenu: 'Tutup menu',
    languageSwitcher: 'Bahasa',
    vision: 'Visi kami',
    statistics: 'Statistik perusahaan',
    capabilities: 'Kemampuan',
    process: 'Proses kami',
    coreValues: 'Nilai utama',
    team: 'Struktur perusahaan',
    clients: 'Perusahaan yang sudah bekerja sama',
    portfolioFilter: 'Saring proyek',
  },

  nav: [
    { label: 'Beranda', to: '/' },
    { label: 'Profil', to: '/profile' },
    { label: 'Produk', to: '/products' },
    { label: 'Portfolio', to: '/portfolio' },
  ],
  navCta: 'Hubungi kami',

  pages: {
    home: 'Beranda',
    intro: {
      profile: {
        title: 'Profil perusahaan',
        text: 'Siapa kami, apa yang kami kejar, dan orang-orang yang mengerjakannya.',
      },
      products: {
        title: 'Produk & layanan',
        text: 'Konsultan IT, mesin, robotik, IoT, dan otomasi, plus cara kami mengerjakannya dari awal sampai selesai.',
      },
      portfolio: {
        title: 'Portfolio',
        text: 'Proyek yang sudah selesai, yang sedang berjalan, dan perusahaan yang pernah bekerja sama dengan kami.',
      },
      contact: {
        title: 'Hubungi kami',
        text: 'Isi nama, kontak, dan pertanyaan Anda. Kami akan membalas di jam kerja.',
      },
    },
    explore: {
      eyebrow: 'Jelajahi',
      title: 'Kenali Autoen lebih dekat.',
      items: [
        { to: '/profile', title: 'Profil', text: 'Visi, misi, dan struktur tim kami.' },
        { to: '/products', title: 'Produk', text: 'Konsultan IT, mesin, robotik, IoT, dan lainnya.' },
        { to: '/portfolio', title: 'Portfolio', text: 'Proyek yang sudah dan sedang kami kerjakan.' },
      ],
    },
    notFound: {
      title: 'Halaman tidak ditemukan.',
      text: 'Alamat yang Anda buka mungkin salah ketik atau halamannya sudah dipindah.',
      back: 'Kembali ke beranda',
    },
  },
  menuContact: 'Kantor & kontak',

  hero: {
    eyebrow: 'Otomasi · IoT · Industri Cerdas',
    titleLines: ['Kerja manual berkurang,', 'produksi tetap jalan.', 'Itu tugas kami.'],
    highlight: 'Itu tugas kami.',
    subtitle:
      'Kami bantu pabrik menekan downtime dan memantau produksi dari mana saja, lewat otomasi, robotik, dan IoT.',
    primaryCta: 'Mulai proyek',
    secondaryCta: 'Lihat produk',
    scroll: 'Gulir',
  },

  manifesto: {
    eyebrow: 'Visi kami',
    text: 'Menjadi perusahaan otomasi yang dipercaya pabrik dan kota di Indonesia untuk sistem yang andal dan mudah dirawat.',
  },

  profile: {
    eyebrow: 'Profil perusahaan',
    title: 'Mitra teknik untuk industri Indonesia.',
    paragraphs: [
      'Autoen Industri Teknologi (AITEK) adalah perusahaan teknik yang menangani otomasi industri, mesin, robotik, dan IoT untuk pabrik dan kota di Indonesia.',
    ],
    facts: [
      { label: 'Kantor', value: 'Bekasi Utara, Kota Bekasi' },
      { label: 'Bidang', value: 'Otomasi · Mesin · Robotik · IoT' },
      { label: 'Klien', value: 'Industri & pengelola kota' },
    ],
    missionTitle: 'Misi kami',
    mission: [
      'Memahami masalah langsung di lokasi sebelum menawarkan solusi.',
      'Memilih teknologi yang sesuai dengan kebutuhan dan anggaran klien.',
      'Menyelesaikan pekerjaan sampai sistem berjalan stabil dan bisa dioperasikan tim klien.',
      'Mendampingi klien setelah proyek selesai, bukan hanya sampai serah terima.',
    ],
  },

  team: {
    eyebrow: 'Struktur perusahaan',
    title: 'Orang-orang di balik setiap proyek.',
    text: 'Tim yang Anda temui di rapat pertama adalah tim yang sama yang nanti turun ke lokasi.',
    namePending: 'Nama menyusul',
  },

  portfolio: {
    eyebrow: 'Portfolio',
    title: 'Proyek yang sudah dan sedang kami kerjakan.',
    text: 'Sebagian pekerjaan kami untuk pabrik, utilitas, dan kota. Ingin tahu detailnya atau punya kebutuhan serupa? Tinggal tanya.',
    filters: { all: 'Semua', done: 'Selesai', ongoing: 'Sedang dikerjakan' },
    status: { done: 'Selesai', ongoing: 'Berjalan' },
    clientPending: 'Nama klien menyusul',
    sample: 'Contoh',
    clientsTitle: 'Perusahaan yang sudah bekerja sama dengan kami',
    clientSlot: 'Logo klien',
    cta: 'Diskusikan proyek serupa',
  },

  stats: [
    { value: 232, suffix: '+', label: 'Klien puas' },
    { value: 521, suffix: '+', label: 'Proyek diselesaikan' },
    { value: 1463, suffix: '+', label: 'Jam dukungan' },
    { value: 15, suffix: '', label: 'Insinyur & spesialis' },
  ],

  services: {
    eyebrow: 'Produk',
    title: 'Yang bisa kami kerjakan untuk Anda.',
    text: 'Dari konsultasi di atas meja sampai mesin dan robot yang berdiri di lantai pabrik. Semuanya ditangani satu tim.',
    items: [
      {
        icon: MonitorCog,
        title: 'Konsultan IT',
        text: 'Kami bantu petakan sistem yang sudah ada, cari mana yang bikin lambat, lalu susun rencana digitalisasi yang masuk akal untuk anggaran Anda.',
        tags: ['Audit sistem', 'Arsitektur', 'Peta jalan'],
      },
      {
        icon: Cog,
        title: 'Mesin Industri',
        text: 'Desain dan pembuatan mesin khusus, atau peremajaan mesin lama supaya lebih cepat, lebih aman, dan lebih mudah dirawat.',
        tags: ['Mesin khusus', 'Retrofit', 'Panel kontrol'],
      },
      {
        icon: Bot,
        title: 'Robotik',
        text: 'Lengan robot untuk pekerjaan yang berulang dan berat, seperti ambil-taruh, palletizing, dan pengelasan. Ada juga otomasi proses di sisi perangkat lunak.',
        tags: ['Robot lengan', 'Palletizing', 'RPA'],
      },
      {
        icon: Radio,
        title: 'IoT',
        text: 'Sensor, gateway, dan dasbor yang menunjukkan kondisi mesin dan aset Anda secara langsung, dari mana saja, dengan keamanan yang dijaga.',
        tags: ['Sensor', 'Dasbor', 'Keamanan data'],
      },
      {
        icon: Cpu,
        title: 'Otomasi PLC & SCADA',
        text: 'Pemrograman PLC, HMI, dan SCADA supaya produksi berjalan konsisten dan bisa dipantau dari satu ruang kontrol.',
        tags: ['PLC', 'HMI', 'SCADA'],
      },
      {
        icon: Building2,
        title: 'Smart City',
        text: 'Penerangan jalan, utilitas air, dan pemantauan lingkungan yang terhubung dan bisa dikelola dari satu platform.',
        tags: ['Penerangan pintar', 'Utilitas', 'Pemantauan'],
      },
    ],
    marquee: [
      'Konsultan IT',
      'Mesin Industri',
      'Robotik',
      'IoT',
      'PLC & SCADA',
      'Smart City',
      'Retrofit',
      'Predictive Maintenance',
    ],
    ask: 'Tanya produk ini',
  },

  process: {
    eyebrow: 'Cara kami bekerja',
    title: 'Jalur yang jelas dari masalah sampai sistem berjalan.',
    text: 'Setiap kerja sama melewati lima tahap, sehingga Anda selalu tahu apa langkah berikutnya dan siapa yang bertanggung jawab.',
    steps: [
      {
        step: '01',
        title: 'Identifikasi masalah',
        text: 'Kami memetakan hambatan yang menahan laju operasional Anda.',
        items: ['Proses tidak efisien', 'Biaya tenaga kerja tinggi', 'Kualitas tidak konsisten', 'Tantangan pengelolaan data'],
      },
      {
        step: '02',
        title: 'Survei & perancangan',
        text: 'Tim kami datang ke lokasi, melihat prosesnya langsung, lalu menyusun rancangan solusi bersama Anda.',
        items: ['Asesmen masalah', 'Perancangan solusi'],
      },
      {
        step: '03',
        title: 'Usulan solusi',
        text: 'Kami mengusulkan kombinasi teknologi yang memberi hasil terbesar dengan biaya terkecil.',
        items: [
          'Robotic process automation',
          'Peningkatan sistem otomasi',
          'Solusi IoT industri',
          'Perangkat lunak khusus',
        ],
      },
      {
        step: '04',
        title: 'Implementasi',
        text: 'Tim insinyur kami memasang, mengintegrasikan dan meng-commissioning sistem di lokasi Anda.',
        items: ['Instalasi & integrasi', 'Commissioning', 'Pengujian & serah terima'],
      },
      {
        step: '05',
        title: 'Dukungan purnajual',
        text: 'Kami tetap mendampingi setelah sistem berjalan agar performanya terjaga.',
        items: ['Dukungan teknis', 'Layanan pemeliharaan', 'Pelatihan & materi', 'Cakupan garansi'],
      },
    ],
  },

  whyUs: {
    eyebrow: 'Kenapa Autoen',
    title: 'Kenapa klien memilih Autoen.',
    imageAlt: 'Ilustrasi sistem industri yang terhubung dan aman',
    items: [
      {
        title: 'Satu tim dari awal sampai akhir.',
        text: 'Tim yang survei, merancang, dan memasang adalah tim yang sama, jadi Anda tidak perlu menjelaskan ulang ke orang baru.',
      },
      {
        title: 'Solusi sesuai kebutuhan.',
        text: 'Kalau mesin lama Anda masih layak diperbaiki, kami sampaikan. Tidak semua masalah harus diselesaikan dengan sistem baru.',
      },
      {
        title: 'Pendampingan setelah serah terima.',
        text: 'Kami tetap bisa dihubungi setelah proyek selesai, dan tim kami yang turun kalau ada kendala.',
      },
      {
        title: 'Hasil yang bisa dilihat.',
        text: 'Proyek yang sudah dan sedang kami kerjakan bisa Anda lihat di halaman Portfolio.',
      },
    ],
  },

  coreValues: {
    eyebrow: 'Nilai utama',
    title: 'Yang kami pegang di setiap proyek.',
    valuePrefix: 'Nilai',
    items: [
      { title: 'Inovasi', text: 'Teknologi baru kami pakai kalau terbukti lebih baik, bukan sekadar karena baru.' },
      { title: 'Keandalan', text: 'Sistem diuji sampai stabil sebelum diserahkan.' },
      { title: 'Keamanan', text: 'Akses ke mesin dan data Anda hanya untuk orang yang berwenang.' },
      { title: 'Efisiensi', text: 'Secukupnya, tidak berlebihan. Satu sensor kalau memang cukup satu.' },
      { title: 'Integritas', text: 'Kendala dan keterlambatan kami sampaikan lebih dulu.' },
    ],
  },

  contact: {
    hours: 'Senin – Jumat, 09.00 – 17.00 WIB',
    labels: { address: 'Alamat', phone: 'Telepon', email: 'Email', hours: 'Jam operasional' },
    form: {
      name: 'Nama',
      namePlaceholder: 'Nama Anda',
      contact: 'Kontak',
      contactPlaceholder: 'No. WhatsApp atau email',
      topic: 'Topik',
      clearTopic: 'Hapus topik',
      message: 'Komentar atau pertanyaan',
      messagePlaceholder: 'Ceritakan sedikit kebutuhan Anda',
      submit: 'Kirim pesan',
      hint: 'Membuka aplikasi email Anda. Tidak ada data yang disimpan di situs ini.',
      sentHint: 'Aplikasi email Anda akan terbuka dengan pesan yang sudah disiapkan.',
    },
    mailSubject: (name, topic) => `Pesan dari ${name}${topic ? ` (${topic})` : ''}`,
  },

  footer: {
    workWithUs: {
      title: 'Bekerja sama',
      text: 'Kami bekerja sama dengan pabrik, pengelola utilitas, dan pemerintah kota.',
    },
    demo: {
      title: 'Minta demo',
      text: 'Lihat contoh dasbor IoT atau sistem otomasi yang sudah berjalan sebelum memutuskan.',
      topic: 'Minta demo',
    },
    navigate: 'Navigasi',
    reachUs: 'Hubungi',
    contact: 'Kontak',
    rights: 'Seluruh hak cipta dilindungi.',
    tagline: 'Otomasi, mesin, robotik, dan IoT untuk industri',
  },
}
