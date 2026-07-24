import React, { useState } from 'react';
import { COOPERATIVE_DATA, ORG_STRUCTURE } from '../data/mockData';
import {
  History,
  Target,
  Compass,
  FileCheck2,
  Users,
  Award,
  ChevronRight,
  ShieldCheck,
  Building2,
  CheckCircle,
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profil' | 'struktur' | 'legalitas'>('profil');

  return (
    <section id="tentang" className="py-20 bg-slate-50 dark:bg-slate-900/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 dark:bg-red-950/80 text-red-700 dark:text-red-300 text-xs font-extrabold uppercase tracking-widest mb-3">
            <Building2 className="w-4 h-4" />
            <span>Profil Lembaga</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Tentang Koperasi Desa Merah Putih
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Menyelami sejarah, komitmen legalitas, serta susunan pengurus wadah ekonomi gotong royong Desa Siluman, Kec. Pabuaran - Subang.
          </p>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-200/80 dark:bg-slate-800 border border-slate-300/50 dark:border-slate-700">
            <button
              onClick={() => setActiveTab('profil')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'profil'
                  ? 'bg-white dark:bg-slate-900 text-red-600 dark:text-red-400 shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <History className="w-4 h-4" />
              <span>Sejarah & Visi Misi</span>
            </button>

            <button
              onClick={() => setActiveTab('struktur')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'struktur'
                  ? 'bg-white dark:bg-slate-900 text-red-600 dark:text-red-400 shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Struktur Organisasi</span>
            </button>

            <button
              onClick={() => setActiveTab('legalitas')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'legalitas'
                  ? 'bg-white dark:bg-slate-900 text-red-600 dark:text-red-400 shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <FileCheck2 className="w-4 h-4" />
              <span>Legalitas & Izin</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Sejarah, Visi, Misi, Tujuan */}
        {activeTab === 'profil' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fade-in">
            {/* Sejarah & Story */}
            <div className="lg:col-span-7 bg-white dark:bg-slate-800/80 p-8 rounded-3xl shadow-sm border border-slate-200/80 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400">
                  <History className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  Sejarah Pendirian Koperasi
                </h3>
              </div>

              <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
                <p>
                  Desa Siluman di Kecamatan Pabuaran, Subang sejak bertahun-tahun terkenal dengan keahlian turun temurun masyarakatnya dalam mengolah kayu jati, mahoni, serta memproduksi sofa dan kusen bangunan. Selain sektor mebel, Desa Siluman dikaruniai ratusan hektar lahan sawah produktif.
                </p>
                <p>
                  Melihat besarnya potensi tersebut namun terbatasnya permodalan dan saluran pemasaran mandiri warga, maka pada tahun {COOPERATIVE_DATA.established}, didirikanlah <strong>{COOPERATIVE_DATA.name}</strong> atas inisiatif pemerintah desa dan tokoh masyarakat lokal.
                </p>
                <p>
                  Koperasi ini hadir sebagai konsolidator ekonomi desa: menyerap hasil panen padi petani, menjamin ketersediaan kayu berkualitas untuk pengrajin mebel/sofa, serta mempromosikan produk unggulan secara digital ke pasar nasional.
                </p>
              </div>

              {/* Goals list */}
              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700">
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-emerald-600" />
                  Tujuan Utama Koperasi:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Meningkatkan kesejahteraan anggota & warga desa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Menciptakan standarisasi kualitas mebel & sofa Siluman</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Menjamin kepastian harga pasokan beras & gabah petani</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Akses permodalan simpan pinjam usaha mikro desa</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Visi & Misi Card */}
            <div className="lg:col-span-5 space-y-6">
              {/* Visi */}
              <div className="bg-gradient-to-br from-red-600 to-red-800 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Compass className="w-32 h-32 text-white" />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-white/20 text-white">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-extrabold uppercase tracking-wider text-red-100">
                    Visi Koperasi
                  </h4>
                </div>
                <p className="text-base sm:text-lg font-bold leading-snug">
                  "Menjadi Koperasi Desa Unggulan di Subang yang Mandiri, Berdaya Saing Tinggi, dan Menjadi Pilar Utama Kemakmuran Warga Desa Siluman."
                </p>
              </div>

              {/* Misi */}
              <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-200/80 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                    <Target className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    Misi Koperasi
                  </h4>
                </div>
                <ol className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400 font-extrabold text-xs shrink-0">
                      1
                    </span>
                    <span>Mengembangkan unit usaha mebel, sofa, kusen, dan pertanian secara profesional berbasis teknologi digital.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400 font-extrabold text-xs shrink-0">
                      2
                    </span>
                    <span>Memberikan pendampingan teknis dan kemudahan modal usaha bagi seluruh pengrajin dan petani anggota.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400 font-extrabold text-xs shrink-0">
                      3
                    </span>
                    <span>Membangun jejaring kemitraan pemasaran dengan pengembang perumahan, toko furniture, dan instansi.</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Struktur Organisasi */}
        {activeTab === 'struktur' && (
          <div className="animate-fade-in space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                Susunan Pengurus & Pengawas
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Masa Bakti Periode {COOPERATIVE_DATA.established} - 2028
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ORG_STRUCTURE.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200/80 dark:border-slate-700 hover:shadow-md transition-shadow flex items-start gap-4"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-red-700 text-white font-extrabold text-xl flex items-center justify-center shadow-md shrink-0">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 text-[11px] font-bold mb-1">
                      {item.role}
                    </span>
                    <h4 className="text-base font-extrabold text-slate-900 dark:text-white">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {item.position}
                    </p>
                    <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-2">
                      Masa Kerja: {item.period}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Legalitas & Izin Usaha */}
        {activeTab === 'legalitas' && (
          <div className="animate-fade-in max-w-4xl mx-auto bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-200/80 dark:border-slate-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                  Komitmen Legalitas Resmi
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  Terdaftar resmi di Kementerian Hukum dan HAM serta Dinas Koperasi & UMKM
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700">
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
                  Nomor Akta Pengesahan Badan Hukum (AHU)
                </div>
                <div className="text-base font-extrabold text-red-600 dark:text-red-400 font-mono">
                  {COOPERATIVE_DATA.legalNumber}
                </div>
                <div className="text-[11px] text-slate-400 mt-2">
                  Diterbitkan tanggal {COOPERATIVE_DATA.legalDate}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700">
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
                  Nomor Induk Berusaha (NIB)
                </div>
                <div className="text-base font-extrabold text-slate-900 dark:text-white font-mono">
                  {COOPERATIVE_DATA.nib}
                </div>
                <div className="text-[11px] text-slate-400 mt-2">
                  Klasifikasi KBLI Usaha Mebel, Perdagangan & Pertanian
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-300 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong>Jaminan Keamanan Transaksi & Kemitraan:</strong> Seluruh transaksi usaha, simpan pinjam, dan kontrak kerja sama pemesanan mebel/sofa dengan Koperasi Desa Merah Putih dilindungi oleh payung hukum resmi.
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
