import React, { useState } from 'react';
import { COOPERATIVE_DATA } from '../data/mockData';
import { MessageCircle, X, Send, ShieldCheck } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      customMsg ||
        'Halo Koperasi Desa Merah Putih Desa Siluman, saya ingin bertanya seputar produk mebel/sofa atau pendaftaran anggota.'
    );
    window.open(`https://wa.me/${COOPERATIVE_DATA.whatsapp}?text=${text}`, '_blank');
    setOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Floating Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group"
          aria-label="Chat WhatsApp Admin Koperasi"
        >
          <MessageCircle className="w-7 h-7 animate-pulse" />
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-600 border-2 border-white animate-ping" />
        </button>
      )}

      {/* Expanded Quick Chat Window */}
      {open && (
        <div className="w-80 sm:w-88 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-white">
                K
              </div>
              <div>
                <h4 className="text-sm font-extrabold leading-tight">Admin Koperasi Desa</h4>
                <span className="text-[10px] text-emerald-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                  Online • Siap Melayani
                </span>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-1.5 rounded-full hover:bg-emerald-800/50 text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-slate-50 dark:bg-slate-850 space-y-3 text-xs">
            <div className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs text-slate-700 dark:text-slate-300">
              👋 Sampurasun! Selamat datang di Layanan WhatsApp Koperasi Merah Putih Desa Siluman Subang.
              <div className="mt-1 font-semibold text-emerald-600">Ada yang bisa kami bantu?</div>
            </div>

            <form onSubmit={handleSend} className="space-y-2">
              <textarea
                rows={3}
                placeholder="Tuliskan pertanyaan atau pesanan Anda..."
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />

              <button
                type="submit"
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-md transition-all text-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Kirim Pesan WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
