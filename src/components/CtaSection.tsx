import React from 'react';
import { UserPlus, PhoneCall, Sparkles, ArrowRight } from 'lucide-react';

interface CtaSectionProps {
  onOpenRegisterModal: () => void;
  onNavigateToContact: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  onOpenRegisterModal,
  onNavigateToContact,
}) => {
  return (
    <section className="py-20 bg-gradient-to-br from-red-600 via-red-700 to-red-900 text-white relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/20 rounded-full filter blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md text-xs font-extrabold uppercase tracking-widest mb-6">
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>Keanggotaan Terbuka</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight max-w-4xl mx-auto leading-tight mb-6">
          Mari Bergabung Bersama Koperasi Desa Merah Putih
        </h2>

        <p className="text-base sm:text-xl text-red-100 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Raih akses kemudahan modal simpan pinjam, jaminan pemasaran mebel & sofa kayu, serta kepastian harga hasil tani di Desa Siluman Pabuaran Subang.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
          <button
            onClick={onOpenRegisterModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white hover:bg-slate-100 text-red-700 font-extrabold text-base px-8 py-4 rounded-2xl shadow-2xl hover:shadow-white/20 transition-all duration-300 active:scale-95 group"
          >
            <UserPlus className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Daftar Menjadi Anggota</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onNavigateToContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-red-950/40 hover:bg-red-950/60 backdrop-blur-md text-white border border-white/30 font-bold text-base px-8 py-4 rounded-2xl transition-all duration-300 active:scale-95"
          >
            <PhoneCall className="w-5 h-5 text-emerald-400" />
            <span>Hubungi Kami</span>
          </button>
        </div>
      </div>
    </section>
  );
};
