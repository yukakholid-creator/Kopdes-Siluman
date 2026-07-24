import React from 'react';
import { Logo } from './Logo';
import { COOPERATIVE_DATA } from '../data/mockData';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  ShieldCheck,
  Code2,
  FileText,
  ChevronRight,
  Heart,
} from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenArchModal: () => void;
  onOpenSeoModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenArchModal,
  onOpenSeoModal,
}) => {
  return (
    <footer id="kontak" className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand & Address Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <Logo size="md" variant="white" />
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Koperasi Desa Merah Putih Desa Siluman adalah lembaga ekonomi desa terpadu untuk pengrajin mebel, manufaktur sofa, industri kusen, dan kelompok tani di Pabuaran, Subang, Jawa Barat.
            </p>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs space-y-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>{COOPERATIVE_DATA.address}, Desa Siluman, Kec. Pabuaran, Subang - 41251</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Badan Hukum: {COOPERATIVE_DATA.legalNumber}</span>
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-extrabold uppercase text-white tracking-wider">
              Navigasi Halaman
            </h3>
            <ul className="space-y-2 text-xs">
              {[
                { id: 'hero', label: 'Beranda' },
                { id: 'tentang', label: 'Tentang Koperasi' },
                { id: 'profil', label: 'Profil Desa Siluman' },
                { id: 'potensi', label: 'Potensi Sektor Desa' },
                { id: 'produk', label: 'Katalog Produk Mebel/Sofa' },
                { id: 'artikel', label: 'Artikel & Berita Desa' },
                { id: 'galeri', label: 'Galeri Foto' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="flex items-center gap-1.5 hover:text-red-400 transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-sm font-extrabold uppercase text-white tracking-wider">
              Kontak & Operasional
            </h3>

            <div className="space-y-3 text-xs">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-slate-900 text-emerald-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500">Telepon / WhatsApp:</div>
                  <a
                    href={`https://wa.me/${COOPERATIVE_DATA.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-white hover:text-emerald-400 transition-colors"
                  >
                    {COOPERATIVE_DATA.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-slate-900 text-red-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500">Email Resmi:</div>
                  <a
                    href={`mailto:${COOPERATIVE_DATA.email}`}
                    className="font-bold text-white hover:text-red-400 transition-colors"
                  >
                    {COOPERATIVE_DATA.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-slate-900 text-amber-400">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500">Jam Operasional Kantor:</div>
                  <div className="font-bold text-white">{COOPERATIVE_DATA.operatingHours}</div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <div className="text-xs font-bold text-slate-400 mb-2">Ikuti Media Sosial:</div>
              <div className="flex items-center gap-2">
                <a
                  href={COOPERATIVE_DATA.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-slate-300 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={COOPERATIVE_DATA.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-pink-600 text-slate-300 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={COOPERATIVE_DATA.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-red-600 text-slate-300 hover:text-white transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Developer & Architecture Tools Bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-800/60 text-xs">
          <div className="flex items-center gap-3 text-slate-400">
            <Code2 className="w-4 h-4 text-emerald-400" />
            <span>Kesiapan Enterprise / Full-Stack CMS Migration:</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenArchModal}
              className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-slate-800 font-bold hover:border-emerald-500 transition-all flex items-center gap-1.5"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Skema Database & REST API</span>
            </button>

            <button
              onClick={onOpenSeoModal}
              className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-400 border border-slate-800 font-bold hover:border-amber-500 transition-all flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>SEO, Sitemap & Robots.txt</span>
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {COOPERATIVE_DATA.name}. Hak Cipta Dilindungi Undang-Undang.
          </div>
          <div className="flex items-center gap-1">
            <span>Dikembangkan untuk Warga Desa Siluman Pabuaran Subang</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
          </div>
        </div>
      </div>
    </footer>
  );
};
