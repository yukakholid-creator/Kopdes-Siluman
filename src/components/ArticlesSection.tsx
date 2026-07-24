import React, { useState, useMemo } from 'react';
import { ARTICLES } from '../data/mockData';
import { Article, ArticleCategory } from '../types';
import {
  Newspaper,
  Calendar,
  Clock,
  User,
  Share2,
  X,
  ChevronRight,
  Tag,
  MessageCircle,
  Copy,
  Check,
} from 'lucide-react';

export const ArticlesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('semua');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [copied, setCopied] = useState(false);

  const categories = [
    { id: 'semua', label: 'Semua Artikel' },
    { id: 'ekonomi', label: 'Ekonomi Desa' },
    { id: 'pertanian', label: 'Pertanian' },
    { id: 'edukasi', label: 'Edukasi' },
    { id: 'pengumuman', label: 'Pengumuman' },
  ];

  const filteredArticles = useMemo(() => {
    if (selectedCategory === 'semua') return ARTICLES;
    return ARTICLES.filter((art) => art.category === selectedCategory);
  }, [selectedCategory]);

  const handleShare = (article: Article) => {
    if (navigator.share) {
      navigator
        .share({
          title: article.title,
          text: article.summary,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="artikel" className="py-20 bg-slate-50 dark:bg-slate-900/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 text-xs font-extrabold uppercase tracking-widest mb-3">
            <Newspaper className="w-4 h-4" />
            <span>Kabar & Edukasi Desa</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Artikel & Berita Koperasi
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Informasi kegiatan koperasi, inovasi industri mebel/sofa, kabar panen tani, serta pengumuman resmi bagi anggota.
          </p>
        </div>

        {/* Category Pills Filter */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2 scrollbar-none">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-200/80 dark:bg-slate-800 gap-1">
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

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="group bg-white dark:bg-slate-800 rounded-3xl border border-slate-200/80 dark:border-slate-700 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Featured Image */}
                <div className="relative aspect-16/9 overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-red-600 text-white text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                    {article.categoryLabel}
                  </span>
                </div>

                {/* Article Info */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-red-500" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-emerald-500" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-3 line-clamp-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed mb-4">
                    {article.summary}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6 pt-0">
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="w-full py-3 rounded-2xl bg-slate-100 dark:bg-slate-700/60 hover:bg-red-600 hover:text-white dark:hover:bg-red-600 text-slate-800 dark:text-slate-200 font-extrabold text-xs flex items-center justify-center gap-2 transition-all group-hover:shadow-md"
                >
                  <span>Baca Selengkapnya</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Article Detail Modal Reader */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-slate-900 w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/60 text-white hover:bg-slate-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-21/9 bg-slate-100 dark:bg-slate-800 relative">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 sm:p-10">
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-4">
                <span className="px-3 py-1 rounded-full bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 font-bold">
                  {selectedArticle.categoryLabel}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> {selectedArticle.date}
                </span>
                <span className="flex items-center gap-1">
                  <User className="w-3.5 h-3.5" /> Oleh: {selectedArticle.author}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
                {selectedArticle.title}
              </h2>

              <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 mb-8 whitespace-pre-line">
                {selectedArticle.content}
              </div>

              {/* Tags & Share */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <Tag className="w-4 h-4 text-slate-400" />
                  {selectedArticle.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => handleShare(selectedArticle)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-md transition-all"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
                  <span>{copied ? 'Tersalin!' : 'Bagikan Artikel'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
