import React from 'react';
import { Logo } from './Logo';
import { COOPERATIVE_DATA } from '../data/mockData';
import {
  ShoppingBag,
  Info,
  MapPin,
  CheckCircle2,
  Users,
  Award,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onOpenRegister: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenRegister }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-red-950 text-white overflow-hidden"
    >
      {/* Background Panorama Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=80"
          alt="Panorama Desa Siluman Pabuaran Subang"
          className="w-full h-full object-cover object-center opacity-25 filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent" />
        <div className="absolute inset-0 bg-radial from-red-600/10 via-transparent to-black/60" />
      </div>

      {/* Decorative Floating Blobs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-red-600/20 rounded-full filter blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-600/15 rounded-full filter blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Location & Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium mb-6 shadow-lg animate-fade-in">
          <MapPin className="w-4 h-4 text-red-400" />
          <span>Desa Siluman, Kec. Pabuaran, Kab. Subang - Jawa Barat</span>
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        </div>

        {/* Logo Badge Card */}
        <div className="mb-6 flex justify-center">
          <div className="p-4 sm:p-6 rounded-3xl bg-white/95 dark:bg-slate-900/90 backdrop-blur-xl shadow-2xl border border-white/30 transform hover:scale-105 transition-transform duration-300">
            <Logo size="lg" variant="full" />
          </div>
        </div>

        {/* Title & Slogan */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight mb-4">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-white to-red-200">
            {COOPERATIVE_DATA.name}
          </span>
        </h1>

        <p className="text-lg sm:text-2xl font-semibold text-emerald-300 max-w-2xl mx-auto mb-8 italic">
          "{COOPERATIVE_DATA.slogan}"
        </p>

        <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
          Wadah gotong royong ekonomi warga Desa Siluman Pabuaran Subang. Menghubungkan potensi industri kayu mebel, sofa custom, kusen presisi, dan pertanian padi langsung dari pengrajin & petani ke konsumen nasional.
        </p>

        {/* Main CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto mb-14">
          <button
            onClick={() => onNavigate('produk')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-extrabold text-base px-8 py-4 rounded-2xl shadow-xl shadow-red-600/30 hover:shadow-red-600/50 transition-all duration-300 active:scale-95 group"
          >
            <ShoppingBag className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span>Lihat Produk Unggulan</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => onNavigate('tentang')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-bold text-base px-8 py-4 rounded-2xl transition-all duration-300 active:scale-95"
          >
            <Info className="w-5 h-5 text-red-400" />
            <span>Tentang Kami</span>
          </button>
        </div>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-8 border-t border-white/10 text-left">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-red-500/20 text-red-400">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">Legalitas</div>
              <div className="text-sm font-bold text-white">Resmi AHU Kemenkumham</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">Kualitas</div>
              <div className="text-sm font-bold text-white">Garansi Kayu Solid</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">Anggota</div>
              <div className="text-sm font-bold text-white">350+ Pengrajin & Petani</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-slate-400 font-medium">Layanan</div>
              <div className="text-sm font-bold text-white">Pesan Custom via WA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
