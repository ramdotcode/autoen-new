import { Bot, Building2, Cpu, Network, Radio, ShieldCheck } from 'lucide-react'
import type { Dictionary } from './types'

export const id: Dictionary = {
  meta: {
    title: 'Autoen Industri Teknologi — Solusi Otomasi & IoT',
    description:
      'Autoen Industri Teknologi (AITEK) menghadirkan solusi otomasi industri, IoT dan smart city untuk mendukung transformasi bisnis di era Industri 4.0.',
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
  },

  nav: [
    { label: 'Tentang', href: '#about' },
    { label: 'Layanan', href: '#services' },
    { label: 'Proses', href: '#process' },
    { label: 'Nilai', href: '#values' },
  ],
  navCta: 'Hubungi kami',

  hero: {
    eyebrow: 'Otomasi · IoT · Industri Cerdas',
    titleLines: ['Mari wujudkan', 'transformasi bisnis', 'lewat solusi cerdas.'],
    highlight: 'solusi cerdas.',
    subtitle:
      'Otomasi, IoT dan sistem cerdas yang dirancang untuk industri Indonesia — dikerjakan oleh tim profesional berpengalaman.',
    primaryCta: 'Mulai proyek',
    secondaryCta: 'Lihat layanan',
    scroll: 'Gulir',
  },

  manifesto: {
    eyebrow: 'Visi kami',
    text: 'Menjadi perusahaan teknologi terdepan yang menghadirkan solusi cerdas berbasis otomasi dan IoT, mendukung transformasi digital serta keberlanjutan industri di era Industri 4.0.',
  },

  stats: [
    { value: 232, suffix: '+', label: 'Klien puas' },
    { value: 521, suffix: '+', label: 'Proyek diselesaikan' },
    { value: 1463, suffix: '+', label: 'Jam dukungan' },
    { value: 15, suffix: '', label: 'Insinyur & spesialis' },
  ],

  approach: {
    eyebrow: 'Yang paling kami utamakan',
    title: 'Solusi cerdas untuk masa depan yang terhubung.',
    text: 'Kami tim profesional berpengalaman yang merancang, mengintegrasikan dan mendukung sistem otomasi serta IoT — dari asesmen pertama hingga bertahun-tahun setelah sistem berjalan.',
    imageAlt: 'Tim insinyur Autoen mendiskusikan alur kerja IoT dan otomasi',
    items: [
      {
        image: '/img/values-5.png',
        title: 'Berfokus pada pelanggan',
        text: 'Kualitas berawal dan berakhir pada pelanggan. Setiap sistem yang kami bangun berangkat dari kondisi operasional Anda.',
      },
      {
        image: '/img/values-6.png',
        title: 'Solusi cerdas, hasil maksimal',
        text: 'Kami mengejar hasil terbesar dengan usaha, waktu dan biaya seminimal mungkin — efisiensi yang dirancang sejak awal.',
      },
      {
        image: '/img/values-4.png',
        title: 'Inovasi & teknologi terkini',
        text: 'Kami memanfaatkan otomasi canggih, AI dan IoT untuk meningkatkan kecepatan, akurasi dan efisiensi operasional Anda.',
      },
      {
        image: '/img/values-7.png',
        title: 'Dukungan purnajual',
        text: 'Dukungan kami dirancang dengan satu tujuan: kepuasan dan keberhasilan jangka panjang setiap pelanggan.',
      },
    ],
  },

  services: {
    eyebrow: 'Layanan',
    title: 'Semua yang dibutuhkan untuk operasi yang lebih cerdas.',
    text: 'Enam kemampuan, satu mitra yang bertanggung jawab penuh — dari sensor di lantai produksi sampai perangkat lunak yang mengubah datanya menjadi keputusan.',
    items: [
      {
        icon: Radio,
        title: 'Solusi IoT untuk Industri',
        text: 'Jaringan sensor, edge gateway dan dasbor yang mengubah data mesin menjadi visibilitas real-time di seluruh pabrik dan aset.',
        tags: ['Sensor', 'Edge gateway', 'Dasbor'],
      },
      {
        icon: Cpu,
        title: 'Otomasi Industri',
        text: 'Rekayasa PLC, SCADA dan sistem kontrol yang menjaga produksi tetap andal, konsisten dan berjalan tanpa gangguan.',
        tags: ['PLC / SCADA', 'Panel kontrol', 'Retrofit'],
      },
      {
        icon: Building2,
        title: 'Solusi Smart City',
        text: 'Infrastruktur terhubung untuk penerangan, utilitas, lalu lintas dan pemantauan lingkungan — terintegrasi dalam satu platform operasional.',
        tags: ['Penerangan pintar', 'Utilitas', 'Pemantauan'],
      },
      {
        icon: Network,
        title: 'Integrasi & Konsultasi IoT',
        text: 'Dari asesmen hingga arsitektur, kami mengintegrasikan perangkat lama dengan platform modern dan menyusun peta jalan sesuai anggaran Anda.',
        tags: ['Asesmen', 'Arsitektur', 'Peta jalan'],
      },
      {
        icon: ShieldCheck,
        title: 'Keamanan & Keandalan IoT',
        text: 'Desain sistem tahan serangan siber, provisioning perangkat yang aman dan redundansi agar data serta operasi Anda tetap terlindungi.',
        tags: ['Hardening', 'Provisioning', 'Redundansi'],
      },
      {
        icon: Bot,
        title: 'Layanan Mesin & Robotika',
        text: 'Robotic process automation, integrasi mesin dan perangkat lunak khusus yang memangkas pekerjaan berulang dan menaikkan output.',
        tags: ['RPA', 'Integrasi mesin', 'Perangkat lunak khusus'],
      },
    ],
    marquee: [
      'IoT Industri',
      'PLC & SCADA',
      'Smart City',
      'Robotika',
      'Edge Computing',
      'Predictive Maintenance',
      'Perangkat Lunak Khusus',
      'Ketahanan Siber',
    ],
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
        title: 'Pendekatan kami',
        text: 'Asesmen terstruktur mengubah masalah menjadi rancangan solusi yang jelas.',
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
    title: 'Mitra untuk seluruh transformasi, bukan sekadar pemasangan.',
    imageAlt: 'Ilustrasi sistem industri yang terhubung dan aman',
    items: [
      {
        title: 'Solusi teknologi terintegrasi',
        text: 'Meningkatkan efisiensi, produktivitas dan konektivitas lintas industri.',
      },
      { title: 'Inovasi berkelanjutan', text: 'Memanfaatkan otomasi, AI dan IoT untuk terus selangkah di depan.' },
      { title: 'Sistem aman & andal', text: 'Teknologi yang disesuaikan dan tahan serangan siber, siap Anda andalkan.' },
      { title: 'Mitra transformasi digital', text: 'Konsultasi, integrasi dan dukungan jangka panjang.' },
      { title: 'Kolaborasi yang tepercaya', text: 'Dibangun di atas integritas, transparansi dan kepuasan klien.' },
    ],
  },

  coreValues: {
    eyebrow: 'Nilai utama',
    title: 'Yang kami pegang di setiap proyek.',
    text: 'Nilai-nilai ini mendorong kami menghadirkan teknologi yang membawa pertumbuhan nyata bagi klien dan mitra.',
    valuePrefix: 'Nilai',
    items: [
      {
        title: 'Inovasi',
        text: 'Kami terus menciptakan solusi baru dan menerapkan teknologi terkini pada setiap produk dan layanan, berkembang bersama pasar yang terus berubah.',
      },
      {
        title: 'Keandalan',
        text: 'Kami membangun sistem yang dapat diandalkan agar klien mencapai efisiensi operasional maksimal tanpa gangguan.',
      },
      {
        title: 'Keamanan',
        text: 'Data dan operasi adalah hal penting. Kami mengutamakan keamanan di setiap lapisan dan melindungi infrastruktur dari ancaman siber.',
      },
      {
        title: 'Efisiensi',
        text: 'Kami menaikkan produktivitas dan menekan pemborosan melalui otomasi serta teknologi mutakhir yang mengoptimalkan setiap proses.',
      },
      {
        title: 'Integritas',
        text: 'Kami bertindak jujur, transparan dan bertanggung jawab dalam setiap hubungan dengan klien dan mitra.',
      },
    ],
  },

  contact: {
    eyebrow: 'Kontak',
    title: 'Siap menyelesaikan tantangan Anda bersama Autoen?',
    text: 'Ceritakan kondisi operasional Anda. Kami akan kembali dengan asesmen awal dan langkah berikutnya.',
    hours: 'Senin – Jumat, 09.00 – 17.00 WIB',
    labels: { address: 'Alamat', phone: 'Telepon', email: 'Email', hours: 'Jam operasional' },
    form: {
      name: 'Nama',
      namePlaceholder: 'Nama Anda',
      email: 'Email bisnis',
      emailPlaceholder: 'anda@perusahaan.com',
      company: 'Perusahaan',
      companyPlaceholder: 'Perusahaan atau instansi',
      message: 'Pesan',
      messagePlaceholder: 'Apa yang ingin Anda tingkatkan?',
      submit: 'Kirim pesan',
      hint: 'Membuka aplikasi email Anda — tidak ada data yang disimpan di situs ini.',
      sentHint: 'Aplikasi email Anda akan terbuka dengan pesan yang sudah disiapkan.',
    },
    mailSubject: (name, company) => `Permintaan proyek dari ${name}${company ? ` — ${company}` : ''}`,
  },

  footer: {
    workWithUs: {
      title: 'Bekerja sama',
      text: 'Kami bermitra dengan manufaktur, utilitas dan pengelola kota untuk membangun sistem otomasi dan IoT yang tahan lama.',
    },
    demo: {
      title: 'Minta demo',
      text: 'Lihat bagaimana dasbor IoT, retrofit PLC atau alur kerja RPA bekerja pada proses Anda sendiri.',
    },
    navigate: 'Navigasi',
    reachUs: 'Hubungi',
    contact: 'Kontak',
    rights: 'Seluruh hak cipta dilindungi.',
    tagline: 'Solusi otomasi & IoT untuk Industri 4.0',
  },
}
