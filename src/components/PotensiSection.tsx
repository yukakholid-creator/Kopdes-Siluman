import React, { useState } from 'react';
import { POTENSI_DESA } from '../data/mockData';
import { VillagePotensi } from '../types';
import {
  Sprout,
  Hammer,
  Armchair,
  DoorClosed,
  ShoppingBag,
  Users,
  Building2,
  ChevronRight,
  X,
  Sparkles,
  Check,
} from 'lucide-react';

export const PotensiSection: React.FC = () => {
  const [selectedPotensi, setSelectedPotensi] = useState<VillagePotensi | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sprout':
        return <Sprout className="w-7 h-7 text-emerald-600" />;
      case 'Hammer':
        return <Hammer className="w-7 h-7 text-amber-600" />;
      case 'Armchair':
        return <Armchair className="w-7 h-7 text-red-600" />;
      case 'DoorClosed':
        return <DoorClosed className="w-7 h-7 text-blue-600" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-7 h-7 text-purple-600" />;
      case 'Users':
        return <Users className="w-7 h-7 text-indigo-600" />;
      case 'Building2':
        return <Building2 className="w-7 h-7 text-teal-600" />;
      default:
        return <Sparkles className="w-7 h-7 text-red-600" />;
    }
  };

  return (
    <section id="potensi" className="py-20 bg-slate-50 dark:bg-slate-900/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 dark:bg-red-950 text-red-800 dark:text-red-300 text-xs font-extrabold uppercase tracking-widest mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Sektor Unggulan Desa</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            7 Potensi Utama Desa Siluman
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Sinergi keahlian pertukangan kayu, pengrajin sofa, pertanian padi, serta modal sosial gotong royong warga desa.
          </p>
        </div>

        {/* Potential Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {POTENSI_DESA.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPotensi(item)}
              className="group cursor-pointer bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-700/60 inline-block mb-4 group-hover:scale-110 transition-transform">
                  {getIcon(item.iconName)}
                </div>

                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-3">
                  {item.shortDesc}
                </p>
              </div>

              <div>
                <div className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-700/40 text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-4 inline-block">
                  {item.stats}
                </div>

                <div className="flex items-center text-xs font-extrabold text-red-600 dark:text-red-400 group-hover:translate-x-1 transition-transform">
                  <span>Selengkapnya</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedPotensi && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedPotensi(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-4">
              <div className="p-4 rounded-2xl bg-red-100 dark:bg-red-950">
                {getIcon(selectedPotensi.iconName)}
              </div>
              <div>
                <span className="text-xs font-bold uppercase text-red-600 dark:text-red-400">
                  Potensi Sektor
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  {selectedPotensi.title}
                </h3>
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
              {selectedPotensi.fullDesc}
            </p>

            <div className="mb-6">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                Keunggulan Utama:
              </h4>
              <div className="space-y-2">
                {selectedPotensi.highlights.map((hl, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 text-xs text-slate-600 dark:text-slate-300 font-semibold flex justify-between items-center">
              <span>Metrik Kapasitas:</span>
              <span className="text-red-600 dark:text-red-400 font-extrabold">{selectedPotensi.stats}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
