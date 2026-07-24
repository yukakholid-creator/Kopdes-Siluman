import React, { useState } from 'react';
import { COOPERATIVE_DATA } from '../data/mockData';
import { X, UserPlus, CheckCircle2, MessageCircle, AlertCircle } from 'lucide-react';

interface MemberRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MemberRegistrationModal: React.FC<MemberRegistrationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    nik: '',
    address: '',
    whatsapp: '',
    businessType: 'mebel',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = encodeURIComponent(
      `Halo Pengurus Koperasi Desa Merah Putih Desa Siluman,\n\nSaya ingin mendaftar menjadi Anggota Baru Koperasi:\n👤 *Nama*: ${formData.name}\n🆔 *NIK*: ${formData.nik}\n📍 *Alamat*: ${formData.address}\n📱 *WhatsApp*: ${formData.whatsapp}\n🔨 *Jenis Usaha/Pekerjaan*: ${formData.businessType}\n📝 *Catatan*: ${formData.notes || '-'}\n\nMohon petunjuk proses verifikasi administrasi dan simpanan pokoknya. Terima kasih!`
    );

    window.open(`https://wa.me/${COOPERATIVE_DATA.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fade-in">
      <div className="bg-white dark:bg-slate-900 w-full max-w-xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-3.5 rounded-2xl bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400">
            <UserPlus className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white">
              Pendaftaran Anggota Online
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Formulir Pendaftaran Koperasi Desa Merah Putih Desa Siluman
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Pendaftaran Berhasil Dikirim!
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto mb-6">
              Aplikasi pendaftaran Anda telah dialihkan ke WhatsApp Resmi Koperasi. Pengurus kami akan memverifikasi NIK dan dokumen Anda segera.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-3 bg-red-600 text-white font-bold text-xs rounded-xl shadow-md"
            >
              Tutup Formulir
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Nama Lengkap (Sesuai KTP):
              </label>
              <input
                type="text"
                required
                placeholder="Contoh: Ahmad Subagja"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  NIK (16 Digit):
                </label>
                <input
                  type="text"
                  required
                  maxLength={16}
                  placeholder="3213000000000000"
                  value={formData.nik}
                  onChange={(e) => setFormData({ ...formData, nik: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  No. WhatsApp Aktif:
                </label>
                <input
                  type="tel"
                  required
                  placeholder="08212234XXXX"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Sektor Usaha / Pekerjaan Utama:
              </label>
              <select
                value={formData.businessType}
                onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="Pengrajin Mebel Kayu">Pengrajin Mebel Kayu Jati/Mahoni</option>
                <option value="Pengrajin Sofa & Upholstery">Pengrajin Sofa & Upholstery</option>
                <option value="Pengrajin Kusen & Pintu">Pengrajin Kusen, Pintu & Jendela</option>
                <option value="Petani Padi / Sawah">Petani Padi & Ketahanan Pangan</option>
                <option value="Pelaku UMKM Kuliner/Kriya">Pelaku UMKM Kuliner / Kriya</option>
                <option value="Warga Desa / Umum">Warga Desa Siluman (Umum)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Alamat Lengkap RT/RW di Desa Siluman:
              </label>
              <textarea
                rows={2}
                required
                placeholder="Jl. Raya Siluman RT 04 / RW 02..."
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-[11px] text-amber-800 dark:text-amber-300 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>
                Simpanan Pokok & Simpanan Wajib disetorkan saat verifikasi berkas di Kantor Koperasi Desa Siluman.
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-extrabold rounded-2xl shadow-xl shadow-red-600/30 flex items-center justify-center gap-2 transition-all active:scale-95 text-xs sm:text-sm"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Kirim Pendaftaran via WhatsApp</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
