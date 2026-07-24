import React, { useState, useMemo } from 'react';
import { GALLERY_ITEMS } from '../data/mockData';
import { GalleryItem, GalleryCategory } from '../types';
import { Image, Maximize2, X, ChevronLeft, ChevronRight, Tag } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('semua');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories: { id: GalleryCategory; label: string }[] = [
    { id: 'semua', label: 'Semua Foto' },
    { id: 'kegiatan', label: 'Kegiatan Koperasi' },
    { id: 'produk', label: 'Produk' },
    { id: 'desa', label: 'Keindahan Desa' },
    { id: 'pertanian', label: 'Pertanian' },
    { id: 'industri', label: 'Industri Mebel/Sofa' },
  ];

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'semua') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="galeri" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-extrabold uppercase tracking-widest mb-3">
            <Image className="w-4 h-4" />
            <span>Dokumentasi Visual</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Galeri Desa & Kegiatan Koperasi
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Potret aktivitas gotong royong pengrajin, panen padi, hingga workshop mebel dan sofa di Desa Siluman.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800 gap-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative cursor-pointer aspect-4/3 rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-xs hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                <span className="text-[10px] uppercase font-bold text-red-400 tracking-wider mb-1">
                  {item.category} • {item.date}
                </span>
                <h3 className="text-base font-extrabold mb-1">{item.title}</h3>
                <p className="text-xs text-slate-300 line-clamp-2">{item.description}</p>
                <div className="mt-3 flex items-center gap-1 text-xs font-bold text-emerald-400">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Perbesar Foto</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fade-in">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 z-10 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev/Next Navigation Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <div className="max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>
            <div className="p-6 text-white bg-slate-900">
              <div className="flex items-center gap-2 text-xs text-red-400 font-bold mb-1">
                <Tag className="w-3.5 h-3.5" />
                <span>{currentItem.category} • {currentItem.date}</span>
              </div>
              <h3 className="text-xl font-black mb-2">{currentItem.title}</h3>
              <p className="text-xs text-slate-300">{currentItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
