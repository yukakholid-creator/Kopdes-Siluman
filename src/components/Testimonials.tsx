import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Quote, Star, ChevronLeft, ChevronRight, UserCheck } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 text-xs font-extrabold uppercase tracking-widest mb-3">
            <UserCheck className="w-4 h-4" />
            <span>Suara Anggota & Mitra</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Testimoni & Pengalaman Nyata
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Kisah keberhasilan pengrajin mebel, petani padi, serta pembeli yang tumbuh bersama Koperasi Desa Merah Putih.
          </p>
        </div>

        {/* Testimonial Card Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white dark:bg-slate-800 p-8 sm:p-12 rounded-3xl border border-slate-200/80 dark:border-slate-700 shadow-xl relative">
            <Quote className="w-16 h-16 text-red-500/10 dark:text-red-500/20 absolute top-6 right-6 pointer-events-none" />

            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              {/* Avatar */}
              <div className="shrink-0 text-center">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-red-500/20 shadow-md mx-auto"
                />
                <span className="inline-block mt-3 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 text-[11px] font-bold">
                  {current.category}
                </span>
              </div>

              {/* Quote Content */}
              <div className="flex-1 text-center md:text-left">
                {/* Rating Stars */}
                <div className="flex items-center justify-center md:justify-start gap-1 mb-3 text-amber-400">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 italic leading-relaxed mb-6">
                  "{current.quote}"
                </p>

                <div>
                  <h3 className="text-lg font-black text-slate-900 dark:text-white">
                    {current.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {current.role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    currentIndex === idx
                      ? 'w-8 bg-red-600'
                      : 'w-2.5 bg-slate-300 dark:bg-slate-700'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-xs"
                aria-label="Sebelumnya"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-xs"
                aria-label="Berikutnya"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
