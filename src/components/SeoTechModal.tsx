import React, { useState } from 'react';
import { COOPERATIVE_DATA } from '../data/mockData';
import { FileCode, Globe, X, Check, Copy } from 'lucide-react';

interface SeoTechModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SeoTechModal: React.FC<SeoTechModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'jsonld' | 'sitemap' | 'robots'>('jsonld');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'Cooperative',
    name: COOPERATIVE_DATA.name,
    alternateName: COOPERATIVE_DATA.shortName,
    description:
      'Koperasi Desa Merah Putih Desa Siluman - Produsen Mebel Kayu Jati/Mahoni, Sofa Custom, Kusen Presisi, dan Penghasil Beras Premium Subang.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: COOPERATIVE_DATA.address,
      addressLocality: COOPERATIVE_DATA.village,
      addressRegion: 'Jawa Barat',
      postalCode: COOPERATIVE_DATA.postalCode,
      addressCountry: 'ID',
    },
    telephone: COOPERATIVE_DATA.phone,
    email: COOPERATIVE_DATA.email,
    url: window.location.href,
  };

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${window.location.origin}/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${window.location.origin}/#tentang</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${window.location.origin}/#produk</loc>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${window.location.origin}/#artikel</loc>
    <priority>0.7</priority>
  </url>
</urlset>`;

  const robotsTxt = `User-agent: *
Allow: /
Sitemap: ${window.location.origin}/sitemap.xml`;

  const getActiveCode = () => {
    if (activeTab === 'jsonld') return JSON.stringify(jsonLdSchema, null, 2);
    if (activeTab === 'sitemap') return sitemapXml;
    return robotsTxt;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getActiveCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="bg-slate-900 text-slate-100 w-full max-w-3xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-700 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-3.5 rounded-2xl bg-amber-500/20 text-amber-400">
            <Globe className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-black text-white">
              SEO & Structured Technical Assets
            </h3>
            <p className="text-xs text-slate-400">
              Prinjauan Schema.org JSON-LD, Sitemap.xml, dan Robots.txt Koperasi
            </p>
          </div>
        </div>

        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setActiveTab('jsonld')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'jsonld'
                ? 'bg-amber-500 text-slate-950 font-extrabold'
                : 'bg-slate-800 text-slate-400'
            }`}
          >
            Schema.org JSON-LD
          </button>
          <button
            onClick={() => setActiveTab('sitemap')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'sitemap'
                ? 'bg-amber-500 text-slate-950 font-extrabold'
                : 'bg-slate-800 text-slate-400'
            }`}
          >
            Sitemap.xml
          </button>
          <button
            onClick={() => setActiveTab('robots')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'robots'
                ? 'bg-amber-500 text-slate-950 font-extrabold'
                : 'bg-slate-800 text-slate-400'
            }`}
          >
            Robots.txt
          </button>
        </div>

        <div className="relative bg-slate-950 p-4 rounded-2xl border border-slate-800 font-mono text-xs text-emerald-400 overflow-x-auto max-h-96">
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white flex items-center gap-1.5 text-[11px]"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Tersalin!' : 'Salin Kode'}</span>
          </button>
          <pre>{getActiveCode()}</pre>
        </div>
      </div>
    </div>
  );
};
