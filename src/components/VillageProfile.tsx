import React from 'react';
import { COOPERATIVE_DATA, VILLAGE_STATS } from '../data/mockData';
import {
  MapPin,
  Maximize2,
  Users,
  Briefcase,
  Trees,
  Navigation,
  Sparkles,
  ExternalLink,
} from 'lucide-react';

export const VillageProfile: React.FC = () => {
  return (
    <section id="profil" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-extrabold uppercase tracking-widest mb-3">
            <Trees className="w-4 h-4" />
            <span>Kondisi Geografis & Demografi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Profil Desa Siluman Subang
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Mengenal lebih dekat geografis, demografi, serta potensi alam Desa Siluman di Kecamatan Pabuaran, Kabupaten Subang, Jawa Barat.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Geografis */}
          <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 shadow-xs hover:border-red-400 dark:hover:border-red-500 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              Letak Geografis
            </div>
            <div className="text-base font-extrabold text-slate-900 dark:text-white">
              {VILLAGE_STATS.geographic}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              Kec. Pabuaran, Kabupaten Subang - Jawa Barat
            </p>
          </div>

          {/* Luas Wilayah */}
          <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 shadow-xs hover:border-emerald-400 dark:hover:border-emerald-500 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
              <Maximize2 className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              Luas Wilayah
            </div>
            <div className="text-xl font-extrabold text-slate-900 dark:text-white">
              {VILLAGE_STATS.areaSize}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              {VILLAGE_STATS.agriculturalArea}
            </p>
          </div>

          {/* Demografi Penduduk */}
          <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 shadow-xs hover:border-blue-400 dark:hover:border-blue-500 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
              <Users className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              Jumlah Penduduk
            </div>
            <div className="text-xl font-extrabold text-slate-900 dark:text-white">
              {VILLAGE_STATS.population}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              Terdiri atas 6 Dusun / RW produktif
            </p>
          </div>

          {/* Mata Pencaharian */}
          <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 shadow-xs hover:border-amber-400 dark:hover:border-amber-500 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4">
              <Briefcase className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              Pencaharian Utama
            </div>
            <div className="text-sm font-extrabold text-slate-900 dark:text-white">
              {VILLAGE_STATS.mainOccupations}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              {VILLAGE_STATS.craftsCenter}
            </p>
          </div>
        </div>

        {/* Map & Location Embed Container */}
        <div className="bg-slate-900 text-white rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12">
          {/* Info Side */}
          <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold mb-4">
                <Navigation className="w-3.5 h-3.5" />
                <span>Peta Lokasi Google Maps</span>
              </div>

              <h3 className="text-2xl font-extrabold mb-3">
                Lokasi Koperasi & Kantor Desa Siluman
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Desa Siluman dapat diakses dengan mudah melalui jalur arteri Kalijati-Pabuaran. Berjarak sekitar 15 menit dari Gerbang Tol Kalijati (Cipali), memudahkan akses pengiriman mebel, sofa, dan hasil panen.
              </p>

              <div className="space-y-3 text-xs text-slate-300 mb-8">
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-red-400 shrink-0">Alamat:</span>
                  <span>{COOPERATIVE_DATA.address}, Desa Siluman, Kec. Pabuaran, Kab. Subang</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-red-400 shrink-0">Akses Armada:</span>
                  <span>Dapat dilalui Truk Fuso, Engkel, Pick Up, dan Bus Pariwisata</span>
                </div>
              </div>
            </div>

            <a
              href={COOPERATIVE_DATA.mapDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-6 py-3.5 rounded-2xl shadow-lg transition-all"
            >
              <span>Buka Google Maps Rute</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Embedded Google Maps iFrame */}
          <div className="lg:col-span-7 min-h-[350px] relative">
            <iframe
              title="Peta Desa Siluman Subang"
              src={COOPERATIVE_DATA.mapEmbedUrl}
              className="w-full h-full min-h-[350px] border-0 filter saturate-120"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
