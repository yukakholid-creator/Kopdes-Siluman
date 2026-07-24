import {
  CooperativeInfo,
  Product,
  Article,
  GalleryItem,
  VillagePotensi,
  OrgMember,
  Testimonial,
} from '../types';

export const COOPERATIVE_DATA: CooperativeInfo = {
  name: 'Koperasi Desa Merah Putih Desa Siluman',
  shortName: 'Koperasi Merah Putih Siluman',
  slogan: 'Bersama Membangun Ekonomi Desa yang Mandiri',
  established: '2023',
  legalNumber: 'AHU-0012894.AH.01.26.TAHUN 2023',
  legalDate: '14 Agustus 2023',
  nib: '9120304918231',
  address: 'Jl. Raya Desa Siluman No. 01, RT 04 / RW 02',
  village: 'Siluman',
  district: 'Pabuaran',
  regency: 'Subang',
  province: 'Jawa Barat',
  postalCode: '41251',
  phone: '+62 821-2234-8900',
  whatsapp: '6282122348900',
  email: 'koperasi.merahputih.siluman@gmail.com',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.783688123!2d107.5912!3d-6.4251!2m3!1f00!2f00!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e693158ef630001%3A0x10293810293!2sDesa%20Siluman%2C%20Kec.%20Pabuaran%2C%20Kabupaten%20Subang%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid',
  mapDirectUrl: 'https://maps.google.com/?q=Desa+Siluman+Pabuaran+Subang',
  operatingHours: 'Senin - Sabtu: 08.00 - 16.00 WIB',
  socials: {
    facebook: 'https://facebook.com/koperasisiluman',
    instagram: 'https://instagram.com/kopdes_merahputih_siluman',
    youtube: 'https://youtube.com/@KoperasiDesaSiluman',
  },
};

export const VILLAGE_STATS = {
  geographic: 'Dataran Rendah Subang Utara (Ketinggian ± 35 mdpl)',
  areaSize: '654,2 Hektar',
  population: '8.450 Jiwa (2.410 KK)',
  mainOccupations: 'Petani, Pengrajin Mebel/Sofa, Buruh Industri, UMKM',
  agriculturalArea: '± 420 Ha Lahan Persawahan Produktif',
  craftsCenter: '220+ Unit Usaha Mebel & Sofa Aktif',
};

export const ORG_STRUCTURE: OrgMember[] = [
  {
    role: 'Pembina & Pelindung',
    name: 'Kepala Desa Siluman',
    position: 'Kepala Desa / Penasihat Utama',
    period: '2023 - Sekarang',
  },
  {
    role: 'Pengawas Utama',
    name: 'H. Suherman, S.P.',
    position: 'Ketua Dewan Pengawas',
    period: '2023 - 2028',
  },
  {
    role: 'Ketua Koperasi',
    name: 'Ahmad Subagja, S.E.',
    position: 'Ketua Umum Koperasi',
    period: '2023 - 2028',
  },
  {
    role: 'Sekretaris',
    name: 'Siti Nurjanah, S.Pd.',
    position: 'Sekretaris & Administrasi',
    period: '2023 - 2028',
  },
  {
    role: 'Bendahara',
    name: 'Dede Kurniawan, A.Md.',
    position: 'Bendahara & Keuangan',
    period: '2023 - 2028',
  },
  {
    role: 'Manajer Unit Usaha Mebel',
    name: 'Asep Ridwan',
    position: 'Kepala Divisi Mebel & Sofa',
    period: '2023 - 2028',
  },
  {
    role: 'Manajer Unit Pertanian',
    name: 'Dadan Hamdani',
    position: 'Kepala Divisi Pertanian & Pangan',
    period: '2023 - 2028',
  },
];

export const POTENSI_DESA: VillagePotensi[] = [
  {
    id: 'pertanian',
    title: 'Pertanian & Ketahanan Pangan',
    iconName: 'Sprout',
    shortDesc: 'Penghasil Padi Berkualitas Tinggi dengan Luas Persawahan >400 Ha',
    fullDesc:
      'Desa Siluman memiliki hamparan sawah irigasi teknis yang subur. Menghasilkan beras wangi & gabah kering giling mutu premium yang dipasarkan ke berbagai wilayah Jawa Barat dan Jakarta.',
    stats: '420 Ha Sawah | 2.500 Ton Padi/Tahun',
    highlights: ['Beras Ciherang & Inpari', 'Irigasi Teknis Terpadu', 'Kelompok Tani Merah Putih'],
  },
  {
    id: 'mebel',
    title: 'Industri Mebel Kayu',
    iconName: 'Hammer',
    shortDesc: 'Sentra Kerajinan Mebel Kayu Jati & Mahoni Garansi Kokoh',
    fullDesc:
      'Pusat pengrajin mebel berpengalaman puluhan tahun. Memproduksi lemari, meja makan, tempat tidur, dan ornamen ukir kayu khas Subang dengan standar ekspor.',
    stats: '85+ Pengrajin | Custom Order Available',
    highlights: ['Kayu Jati Perhutani', 'Konstruksi Mortise & Tenon', 'Finishing Melamine Premium'],
  },
  {
    id: 'sofa',
    title: 'Industri Sofa & Upholstery',
    iconName: 'Armchair',
    shortDesc: 'Produsen Sofa Minimalis, Sudut, & Sofa Tamu Kualitas Pabrikan',
    fullDesc:
      'Desa Siluman terkenal sebagai sentra pembuatan sofa ternama di Subang. Rangka kayu solid, busa Inoac density tinggi, serta kain oscar/velvet pilihan.',
    stats: '60+ Workshop | 300+ Unit Sofa/Bulan',
    highlights: ['Busa High Resilience', 'Rangka Kayu Garansi 3 Tahun', 'Bebas Pilih Warna & Fabric'],
  },
  {
    id: 'kusen',
    title: 'Industri Kusen & Konstruksi',
    iconName: 'DoorClosed',
    shortDesc: 'Spesialis Kusen, Pintu Utama, & Jendela Kayu Presisi',
    fullDesc:
      'Menyediakan material kusen kayu jati, kamper, dan mahoni oven. Diproses dengan mesin presisi tinggi untuk bangunan rumah tinggal hingga proyek perumahan.',
    stats: '40+ Workshop Kusen Presisi',
    highlights: ['Kayu Oven Kering Total', 'Ukuran Custom Presisi', 'Pintu Panel & Minimalis'],
  },
  {
    id: 'umkm',
    title: 'UMKM Kuliner & Kerajinan',
    iconName: 'ShoppingBag',
    shortDesc: 'Produk Olahan Pangan Lokal & Kerajinan Tangan Kreatif',
    fullDesc:
      'UMKM binaan koperasi memproduksi camilan khas Subang, olahan nanas, keripik, hingga produk kriya olahan limbah kayu yang bernilai estetika tinggi.',
    stats: '75+ UMKM Binaan Aktif',
    highlights: ['Olahan Nanas Subang', 'Keripik Singkong & Pisang', 'Souvenir Kayu Unik'],
  },
  {
    id: 'sdm',
    title: 'SDM & Tenaga Kerja Terampil',
    iconName: 'Users',
    shortDesc: 'Ratusan Pengrajin & Petani Ahli Lintas Generasi',
    fullDesc:
      'Keahlian bertukang kayu dan bertani diwariskan secara turun temurun, menghasilkan tenaga kerja highly-skilled yang teliti dan berdedikasi tinggi.',
    stats: '1.200+ Tenaga Kerja Terampil',
    highlights: ['Sertifikasi Pelatihan Kayu', 'Regenerasi Pemuda Desa', 'Etos Kerja Gotong Royong'],
  },
  {
    id: 'infrastruktur',
    title: 'Infrastruktur & Aksesibilitas',
    iconName: 'Building2',
    shortDesc: 'Akses Jalan Utama Kabupaten & Dekat Gerbang Tol Kalijati',
    fullDesc:
      'Terhubung dengan jalur distribusi strategis Pantura dan Tol Cipali (Kalijati / Subang), memudahkan pengiriman barang antar kota maupun antar provinsi.',
    stats: '15 Menit dari Gerbang Tol Kalijati',
    highlights: ['Akses Truk Fuso & Engkel', 'Jaringan Listrik & Fiber Optic', 'Gudang Logistik Koperasi'],
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Set Meja Makan Kayu Jati Minimalis (6 Kursi)',
    category: 'furniture',
    subcategory: 'Meubel',
    price: 3850000,
    formattedPrice: 'Rp 3.850.000',
    image:
      'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=800&q=80',
    description:
      'Set meja makan keluarga bahan kayu jati pilihan hasil ukiran pengrajin Desa Siluman. Finishing natural polyurethane yang tahan gores dan anti rayap.',
    specifications: {
      Material: 'Kayu Jati Pilihan',
      'Ukuran Meja': '160 cm x 90 cm x 75 cm',
      Jumlah: '1 Meja + 6 Kursi',
      Finishing: 'Natural Teak Oil / Clear Gloss',
    },
    isPopular: true,
    stockStatus: 'Tersedia',
  },
  {
    id: 'prod-2',
    name: 'Lemari Pakaian 3 Pintu Ukir Jepara Jati',
    category: 'furniture',
    subcategory: 'Lemari',
    price: 4500000,
    formattedPrice: 'Rp 4.500.000',
    image:
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80',
    description:
      'Lemari pakaian 3 pintu dilengkapi cermin tengah dan gantungan baju stainless. Rangka sangat kokoh dengan aksen ukiran khas pengrajin Desa Siluman.',
    specifications: {
      Material: 'Kayu Jati Solid',
      Dimensi: '160 cm x 55 cm x 210 cm',
      Fitur: 'Cermin Rias, Kunci Pengaman, Rak Bertingkat',
    },
    isPopular: true,
    stockStatus: 'Tersedia',
  },
  {
    id: 'prod-3',
    name: 'Sofa L-Sudut Minimalis Modern "Siluman Comfort"',
    category: 'sofa',
    subcategory: 'Sofa Sudut',
    price: 3200000,
    formattedPrice: 'Rp 3.200.000',
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
    description:
      'Sofa sudut bentuk L yang empuk dan elegan untuk ruang tamu. Menggunakan busa Super Yellow Inoac density tinggi yang tidak mudah kempes.',
    specifications: {
      Rangka: 'Kayu Mahoni Oven Anti Rayap',
      Busa: 'Inoac Density D23',
      Cover: 'Kain Canvas Premium / Oscar Synthetic',
      Bonus: '3 Bantal Peluk Custom',
    },
    isPopular: true,
    stockStatus: 'Tersedia',
  },
  {
    id: 'prod-4',
    name: 'Sofa Tamu Chesterfield 3+2+1 Luxury Red',
    category: 'sofa',
    subcategory: 'Sofa Tamu',
    price: 5800000,
    formattedPrice: 'Rp 5.800.000',
    image:
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80',
    description:
      'Set sofa tamu klasik Chesterfield berbahan kulit oscar super lembut. Memberikan kesan mewah dan hangat untuk ruang tamu rumah Anda.',
    specifications: {
      Konfigurasi: '3 Seater + 2 Seater + 1 Seater + Meja Kaca',
      Bahan: 'Oscar Leatherette Import & Rangka Kayu Jati',
      Garansi: 'Garansi Rangka 2 Tahun',
    },
    isPopular: false,
    stockStatus: 'Pre-Order',
  },
  {
    id: 'prod-5',
    name: 'Sofa Retro Minimalis 2 Seater Scandinavian',
    category: 'sofa',
    subcategory: 'Sofa Minimalis',
    price: 2100000,
    formattedPrice: 'Rp 2.100.000',
    image:
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
    description:
      'Sofa compact gaya Scandinavian cocok untuk ruang santai, apartemen, atau kantor. Kaki kayu mahoni solid tirus retro.',
    specifications: {
      Dimensi: '150 cm x 75 cm x 80 cm',
      Kain: 'Polyester Fabric Anti Noda',
      Warna: 'Pilihan Abu-abu, Hijau Botol, Cream, Merah',
    },
    isPopular: false,
    stockStatus: 'Tersedia',
  },
  {
    id: 'prod-6',
    name: 'Pintu Kayu Jati Ukir Minimalis Utama',
    category: 'kusen',
    subcategory: 'Pintu',
    price: 1850000,
    formattedPrice: 'Rp 1.850.000',
    image:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    description:
      'Daun pintu utama kayu jati oven serat lurus presisi. Tahan terhadap cuaca panas dan hujan tanpa susut melengkung.',
    specifications: {
      Ukuran: '80 cm x 210 cm (Tebal 3.8 cm)',
      Bahan: 'Kayu Jati Jawa Barat',
      Proses: 'Kering Oven MC <12%',
    },
    isPopular: true,
    stockStatus: 'Tersedia',
  },
  {
    id: 'prod-7',
    name: 'Set Kusen & Jendela Kaca Minimalis Mahoni',
    category: 'kusen',
    subcategory: 'Jendela',
    price: 850000,
    formattedPrice: 'Rp 850.000',
    image:
      'https://images.unsplash.com/photo-1503708928676-1cb796a0891e?auto=format&fit=crop&w=800&q=80',
    description:
      'Kusen jendela ganda berbahan kayu mahoni lengkap dengan daun jendela dan profil lis modern. Siap pasang untuk rumah impian.',
    specifications: {
      'Dimensi Kusen': '120 cm x 140 cm (Profil 6/12)',
      Kaca: 'Kaca Riben / Bening 5mm',
      Material: 'Mahoni Oven Kering',
    },
    isPopular: false,
    stockStatus: 'Tersedia',
  },
  {
    id: 'prod-8',
    name: 'Kusen Kayu Kamper Samarinda Oven Presisi',
    category: 'kusen',
    subcategory: 'Kusen Kayu',
    price: 195000,
    unit: 'per meter lari',
    formattedPrice: 'Rp 195.000 / m',
    image:
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
    description:
      'Bahan kusen balok 6x12 cm kayu kamper super oven. Tekstur serat padat dan tidak disukai rayap, ideal untuk konstruksi bertingkat.',
    specifications: {
      'Ukuran Balok': '6 cm x 12 cm',
      Panjang: 'Sesuaikan Pesanan (Custom)',
      Grade: 'Grade A Oven',
    },
    isPopular: false,
    stockStatus: 'Tersedia',
  },
  {
    id: 'prod-9',
    name: 'Beras Premium Merah Putih Desa Siluman (5 Kg)',
    category: 'pertanian',
    subcategory: 'Beras',
    price: 72500,
    unit: 'karung 5 kg',
    formattedPrice: 'Rp 72.500 / 5kg',
    image:
      'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80',
    description:
      'Beras putih pulen segar dipanen langsung dari persawahan Desa Siluman Pabuaran Subang. Tanpa pemutih, tanpa pengawet, higienis.',
    specifications: {
      Varietas: 'Ciherang / Inpari 32',
      Kualitas: 'Beras Premium Utuh 95%',
      Kemas: 'Karung Laminasi 5 Kg Koperasi',
    },
    isPopular: true,
    stockStatus: 'Tersedia',
  },
  {
    id: 'prod-10',
    name: 'Gabah Kering Giling (GKG) Super Kualitas Penggilingan',
    category: 'pertanian',
    subcategory: 'Gabah',
    price: 8200,
    unit: 'per kg',
    formattedPrice: 'Rp 8.200 / kg',
    image:
      'https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?auto=format&fit=crop&w=800&q=80',
    description:
      'Gabah kering giling kadar air 13-14% hasil panen kelompok tani Desa Siluman. Sangat diminati oleh pabrik penggilingan padi besar.',
    specifications: {
      'Kadar Air': '13.5%',
      Rendemen: 'Beras Giling > 65%',
      'Minimal Order': '100 Kg',
    },
    isPopular: false,
    stockStatus: 'Tersedia',
  },
  {
    id: 'prod-11',
    name: 'Kursi Santai Teras Kayu Jati Lipat (Relax Chair)',
    category: 'furniture',
    subcategory: 'Kursi',
    price: 650000,
    formattedPrice: 'Rp 650.000',
    image:
      'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?auto=format&fit=crop&w=800&q=80',
    description:
      'Kursi lipat santai kayu jati cocok untuk teras rumah atau taman. Praktis disimpannya dan nyaman diduduki.',
    specifications: {
      Material: 'Full Kayu Jati',
      Konstruksi: 'Lipat Praktis & Hardware Anti Karat',
    },
    isPopular: false,
    stockStatus: 'Tersedia',
  },
  {
    id: 'prod-12',
    name: 'Meja Kerja / Belajar Kayu Solid Minimalis',
    category: 'furniture',
    subcategory: 'Meja',
    price: 1250000,
    formattedPrice: 'Rp 1.250.000',
    image:
      'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80',
    description:
      'Meja kerja minimalis dengan 2 laci penyimpanan. Desain bersih cocok untuk WFH atau meja belajar anak sekolah.',
    specifications: {
      Ukuran: '120 cm x 60 cm x 75 cm',
      Rangka: 'Kayu Mahoni Solid & Top Kayu Jati',
    },
    isPopular: false,
    stockStatus: 'Tersedia',
  },
];

export const ARTICLES: Article[] = [
  {
    id: 'art-1',
    title: 'Koperasi Desa Merah Putih Siluman Resmikan Sentra Ekspor Mebel Kayu',
    slug: 'koperasi-resmikan-sentra-ekspor-mebel',
    summary:
      'Langkah besar Koperasi Desa Siluman dalam menyatukan puluhan pengrajin mebel kayu untuk menembus pasar nasional dan mancanegara.',
    content: `
Desa Siluman, Kecamatan Pabuaran, Subang — Koperasi Desa Merah Putih Desa Siluman secara resmi meluncurkan program kolektif pemasaran mebel dan sofa kayu. Inisiatif ini menyatukan lebih dari 80 pengrajin lokal di bawah satu naungan badan hukum koperasi.

Melalui standarisasi mutu kayu, pengeringan oven terpadu, dan sertifikasi legalitas kayu (SVLK), produk mebel dan sofa karya warga Desa Siluman kini memiliki daya saing tinggi.

"Sebelum adanya koperasi, pengrajin berjalan sendiri-sendiri dan sering terkendala modal serta akses pasar. Kini lewat Koperasi Merah Putih, kami melayani pesanan skala besar dengan jaminan kualitas," ujar Ahmad Subagja, Ketua Koperasi Desa Merah Putih.

Peluncuran ini juga dihadiri oleh pihak Dinas Koperasi dan UMKM Kabupaten Subang yang memberikan apresiasi tinggi terhadap kemandirian ekonomi Desa Siluman.
    `,
    category: 'ekonomi',
    categoryLabel: 'Ekonomi Desa',
    author: 'Tim Redaksi Koperasi',
    date: '20 Juli 2026',
    readTime: '3 Menit',
    image:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    tags: ['Mebel Subang', 'Koperasi Merah Putih', 'UMKM Desa Siluman', 'Ekonomi Kerakyatan'],
  },
  {
    id: 'art-2',
    title: 'Panen Raya Padi Organik Kelompok Tani Merah Putih Desa Siluman',
    slug: 'panen-raya-padi-organik-desa-siluman',
    summary:
      'Hasil panen padi musim ini meningkat 18% berkat penerapan pupuk organik binaan koperasi dan sistem irigasi teknis modern.',
    content: `
Kecamatan Pabuaran, Subang — Para petani anggota Koperasi Desa Merah Putih Desa Siluman merayakan Panen Raya Padi musim ini dengan hasil memuaskan. Total panen mencapai lebih dari 2.500 ton gabah kering dari luas lahan 420 hektar.

Keberhasilan ini didorong oleh pendampingan berkala penggunaan pupuk organik cair buatan kelompok tani setempat, serta penyediaan bibit padi unggul varietas Inpari 32 melalui simpan pinjam saprodi koperasi.

Beras hasil panen warga langsung diserap oleh Koperasi dengan harga diatas HET pemerintah, sehingga memberikan keuntungan yang adil dan layak bagi para petani lokal.
    `,
    category: 'pertanian',
    categoryLabel: 'Pertanian',
    author: 'Dadan Hamdani',
    date: '12 Juli 2026',
    readTime: '4 Menit',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    tags: ['Panen Raya', 'Beras Subang', 'Petani Siluman', 'Ketahanan Pangan'],
  },
  {
    id: 'art-3',
    title: 'Pelatihan Digital Marketing & Katalog Online untuk Pengrajin Sofa Siluman',
    slug: 'pelatihan-digital-marketing-pengrajin-sofa',
    summary:
      'Pengrajin sofa Desa Siluman dilatih membuat foto katalog profesional dan melayani pesanan online secara langsung via WhatsApp dan website.',
    content: `
Desa Siluman — Guna memperluas jangkauan pembeli hingga luar daerah Jabodetabek dan Jawa Barat, Koperasi Desa Merah Putih menyelenggarakan Pelatihan Fotografi Produk dan Digital Marketing.

Puluhan pemuda dan pengrajin sofa tampak antusias mempelajari teknik pencahayaan produk sofa, pembuatan deskripsi spesifikasi yang detail, serta merespon pesan calon pembeli secara santun dan cepat.

Dengan adanya portal website katalog microsite ini, pembeli dari manapun dapat memesan sofa custom langsung dari pengrajin tanpa perantara tengkulak.
    `,
    category: 'edukasi',
    categoryLabel: 'Edukasi & Pelatihan',
    author: 'Siti Nurjanah',
    date: '02 Juli 2026',
    readTime: '3 Menit',
    image:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    tags: ['Digital Marketing', 'Pengrajin Sofa', 'Pemberdayaan Desa', 'Pelatihan'],
  },
  {
    id: 'art-4',
    title: 'Pengumuman Rapat Anggota Tahunan (RAT) & Pembagian SHU Koperasi 2026',
    slug: 'pengumuman-rat-dan-pembagian-shu',
    summary:
      'Undangan resmi kepada seluruh anggota Koperasi Desa Merah Putih Desa Siluman untuk hadir pada RAT dan penerimaan Sisa Hasil Usaha.',
    content: `
Diberitahukan kepada seluruh anggota Koperasi Desa Merah Putih Desa Siluman bahwa Rapat Anggota Tahunan (RAT) Tahun Buku 2025/2026 akan dilaksanakan pada:

Hari/Tanggal: Sabtu, 15 Agustus 2026
Waktu: 08.30 WIB - Selesai
Tempat: Balai Desa Siluman, Kec. Pabuaran, Subang.

Agenda utama meliputi Laporan Pertanggungjawaban Pengurus, Penetapan Rencana Kerja 2027, serta Distribusi Sisa Hasil Usaha (SHU) kepada seluruh anggota aktif.
    `,
    category: 'pengumuman',
    categoryLabel: 'Pengumuman',
    author: 'Pengurus Koperasi',
    date: '25 Juni 2026',
    readTime: '2 Menit',
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    tags: ['RAT 2026', 'SHU Koperasi', 'Pengumuman Resmi', 'Anggota Koperasi'],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Aktivitas Pengrajin Kayu Mebel Desa Siluman',
    category: 'industri',
    image:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    description: 'Pengrajin sedang merakit rangka meja jati dengan ketelitian tinggi.',
    date: 'Mei 2026',
  },
  {
    id: 'gal-2',
    title: 'Hamparan Sawah Subur Desa Siluman Pabuaran',
    category: 'pertanian',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    description: 'Panorama pesawahan seluas 420 Ha yang menjadi pilar pangan desa.',
    date: 'Juni 2026',
  },
  {
    id: 'gal-3',
    title: 'Proses Pembuatan Sofa Minimalis Custom',
    category: 'produk',
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
    description: 'Pemasangan busa & kain upholstery kualitas ekspor pada sofa sudut.',
    date: 'Juli 2026',
  },
  {
    id: 'gal-4',
    title: 'Musyawarah Anggota & Pengurus Koperasi',
    category: 'kegiatan',
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
    description: 'Kebersamaan pengurus dan warga dalam merencanakan program kerja.',
    date: 'April 2026',
  },
  {
    id: 'gal-5',
    title: 'Produksi Kusen Kayu Presisi Oven',
    category: 'industri',
    image:
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
    description: 'Bahan kayu kamper & jati yang diproses dengan mesin profil kayu modern.',
    date: 'Maret 2026',
  },
  {
    id: 'gal-6',
    title: 'Kantor & Gedung Koperasi Desa Merah Putih',
    category: 'desa',
    image:
      'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80',
    description: 'Pusat pelayanan administrasi dan galeri display produk warga desa.',
    date: 'Januari 2026',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Mbah Parto (62 th)',
    role: 'Pengrajin Mebel Jati Desa Siluman',
    category: 'Pengrajin',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote:
      'Dulu bertukang kayu sendiri pasarnya terbatas sekitar Pabuaran saja. Sejak ada Koperasi Merah Putih, mebel kayu saya bisa dipesan hingga ke Bandung dan Jakarta. Permodalan bahan kayu juga sangat terbantu!',
  },
  {
    id: 'test-2',
    name: 'Pak H. Karsim (55 th)',
    role: 'Ketua Kelompok Tani Sawah Makmur',
    category: 'Petani',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote:
      'Penyerapan hasil panen padi oleh Koperasi Desa sangat transparan dan harganya layak. Petani tidak takut lagi dipermainkan oleh tengkulak nakal pas panen raya.',
  },
  {
    id: 'test-3',
    name: 'Ibu Ratna Dewi (38 th)',
    role: 'Pemilik Workshop Sofa "Siluman Indah"',
    category: 'UMKM Sofa',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote:
      'Sangat bangga jadi bagian Koperasi Merah Putih. Lewat pelatihan digital dan katalog online ini, pesanan sofa minimalis kami naik pesat tiap bulannya!',
  },
  {
    id: 'test-4',
    name: 'Ir. Budi Santoso',
    role: 'Kontraktor Perumahan Subang',
    category: 'Pelanggan Mitra',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote:
      'Kami langganan memesan kusen dan pintu kayu dari Koperasi Desa Siluman untuk proyek perumahan di Subang & Karawang. Kualitas kayunya oven kering presisi dan pengirimannya selalu tepat waktu.',
  },
];

export const MIGRATION_DATABASE_SCHEMA = {
  architectureOverview:
    'Rancangan arsitektur sistem Koperasi Desa Merah Putih Desa Siluman disiapkan untuk skalabilitas tinggi dari Frontend Microsite SPA menjadi Full-Stack Enterprise Platform menggunakan Next.js + Supabase (PostgreSQL) atau Laravel 11 + MySQL 8.',
  entities: [
    {
      tableName: 'koperasi_profile',
      description: 'Menyimpan profil utama, legalitas, alamat, dan kontak koperasi',
      fields: [
        { name: 'id', type: 'UUID / BIGINT', key: 'PRIMARY KEY' },
        { name: 'nama_koperasi', type: 'VARCHAR(150)', key: 'NOT NULL' },
        { name: 'nomor_badan_hukum', type: 'VARCHAR(100)', key: 'UNIQUE' },
        { name: 'slogan', type: 'VARCHAR(255)', key: 'NULL' },
        { name: 'alamat_lengkap', type: 'TEXT', key: 'NOT NULL' },
        { name: 'telepon_whatsapp', type: 'VARCHAR(30)', key: 'NOT NULL' },
        { name: 'email', type: 'VARCHAR(100)', key: 'NOT NULL' },
        { name: 'updated_at', type: 'TIMESTAMP', key: 'CURRENT_TIMESTAMP' },
      ],
    },
    {
      tableName: 'members (anggota)',
      description: 'Data keanggotaan koperasi, status simpanan, dan verifikasi NIK',
      fields: [
        { name: 'id', type: 'UUID / BIGINT', key: 'PRIMARY KEY' },
        { name: 'no_anggota', type: 'VARCHAR(50)', key: 'UNIQUE INDEX' },
        { name: 'nik', type: 'VARCHAR(16)', key: 'UNIQUE' },
        { name: 'nama_lengkap', type: 'VARCHAR(100)', key: 'NOT NULL' },
        { name: 'jenis_usaha', type: 'ENUM(mebel, sofa, kusen, tani, umkm)', key: 'NOT NULL' },
        { name: 'no_whatsapp', type: 'VARCHAR(20)', key: 'NOT NULL' },
        { name: 'status_keanggotaan', type: 'ENUM(pending, aktif, nonaktif)', key: 'DEFAULT pending' },
        { name: 'total_simpanan_pokok', type: 'DECIMAL(12,2)', key: 'DEFAULT 0.00' },
        { name: 'created_at', type: 'TIMESTAMP', key: 'NOT NULL' },
      ],
    },
    {
      tableName: 'products (produk)',
      description: 'Katalog produk unggulan mebel, sofa, kusen, dan komoditas pertanian',
      fields: [
        { name: 'id', type: 'UUID / BIGINT', key: 'PRIMARY KEY' },
        { name: 'member_id', type: 'UUID / BIGINT', key: 'FOREIGN KEY (members.id)' },
        { name: 'name', type: 'VARCHAR(150)', key: 'NOT NULL' },
        { name: 'slug', type: 'VARCHAR(180)', key: 'UNIQUE INDEX' },
        { name: 'category', type: 'ENUM(furniture, sofa, kusen, pertanian)', key: 'INDEX' },
        { name: 'price', type: 'DECIMAL(12,2)', key: 'NOT NULL' },
        { name: 'stock_status', type: 'VARCHAR(30)', key: 'DEFAULT Tersedia' },
        { name: 'image_url', type: 'TEXT', key: 'NOT NULL' },
        { name: 'specifications_json', type: 'JSONB / JSON', key: 'NULL' },
        { name: 'is_featured', type: 'BOOLEAN', key: 'DEFAULT FALSE' },
      ],
    },
    {
      tableName: 'articles (artikel_berita)',
      description: 'Publikasi berita desa, pengumuman RAT, dan edukasi usaha',
      fields: [
        { name: 'id', type: 'UUID / BIGINT', key: 'PRIMARY KEY' },
        { name: 'title', type: 'VARCHAR(200)', key: 'NOT NULL' },
        { name: 'slug', type: 'VARCHAR(220)', key: 'UNIQUE' },
        { name: 'content', type: 'LONGTEXT / TEXT', key: 'NOT NULL' },
        { name: 'category', type: 'VARCHAR(50)', key: 'INDEX' },
        { name: 'author', type: 'VARCHAR(100)', key: 'NOT NULL' },
        { name: 'published_at', type: 'TIMESTAMP', key: 'INDEX' },
      ],
    },
    {
      tableName: 'village_potentials (potensi_desa)',
      description: 'Data statistik & sektor unggulan Desa Siluman',
      fields: [
        { name: 'id', type: 'VARCHAR(50)', key: 'PRIMARY KEY' },
        { name: 'title', type: 'VARCHAR(100)', key: 'NOT NULL' },
        { name: 'short_desc', type: 'TEXT', key: 'NOT NULL' },
        { name: 'full_desc', type: 'LONGTEXT', key: 'NOT NULL' },
        { name: 'stats_metric', type: 'VARCHAR(100)', key: 'NOT NULL' },
      ],
    },
    {
      tableName: 'gallery_items (galeri)',
      description: 'Dokumentasi foto kegiatan, produk, dan potensi desa',
      fields: [
        { name: 'id', type: 'UUID / BIGINT', key: 'PRIMARY KEY' },
        { name: 'title', type: 'VARCHAR(150)', key: 'NOT NULL' },
        { name: 'category', type: 'VARCHAR(50)', key: 'INDEX' },
        { name: 'image_url', type: 'TEXT', key: 'NOT NULL' },
        { name: 'description', type: 'TEXT', key: 'NULL' },
      ],
    },
  ],
  apiEndpoints: [
    { method: 'GET', endpoint: '/api/v1/profile', desc: 'Mendapatkan data informasi & legalitas Koperasi' },
    { method: 'GET', endpoint: '/api/v1/products', desc: 'Mendapatkan daftar produk dengan filter kategori, pencarian & paginasi' },
    { method: 'GET', endpoint: '/api/v1/products/:slug', desc: 'Mendapatkan detail spesifikasi produk' },
    { method: 'POST', endpoint: '/api/v1/members/register', desc: 'Pendaftaran anggota online baru' },
    { method: 'GET', endpoint: '/api/v1/articles', desc: 'Daftar berita & artikel desa' },
    { method: 'POST', endpoint: '/api/v1/orders/whatsapp-draft', desc: 'Generate pesan draf pesanan WhatsApp resmi' },
  ],
};
