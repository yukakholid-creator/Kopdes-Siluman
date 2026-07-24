import React, { useState, useMemo } from 'react';
import { PRODUCTS, COOPERATIVE_DATA } from '../data/mockData';
import { Product, ProductCategory } from '../types';
import {
  Search,
  Filter,
  ShoppingBag,
  MessageCircle,
  Eye,
  X,
  CheckCircle,
  Flame,
  ChevronRight,
  ShieldCheck,
  Tag,
  SlidersHorizontal,
} from 'lucide-react';

export const ProductCatalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories: { id: ProductCategory; label: string; count: number }[] = [
    { id: 'semua', label: 'Semua Produk', count: PRODUCTS.length },
    {
      id: 'furniture',
      label: 'A. Furniture & Mebel',
      count: PRODUCTS.filter((p) => p.category === 'furniture').length,
    },
    {
      id: 'sofa',
      label: 'B. Sofa & Upholstery',
      count: PRODUCTS.filter((p) => p.category === 'sofa').length,
    },
    {
      id: 'kusen',
      label: 'C. Kusen & Pintu',
      count: PRODUCTS.filter((p) => p.category === 'kusen').length,
    },
    {
      id: 'pertanian',
      label: 'D. Pertanian & Beras',
      count: PRODUCTS.filter((p) => p.category === 'pertanian').length,
    },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesCategory =
        selectedCategory === 'semua' || p.category === selectedCategory;
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.subcategory.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleWhatsAppOrder = (product: Product) => {
    const message = encodeURIComponent(
      `Halo Koperasi Desa Merah Putih Desa Siluman,\n\nSaya tertarik dan ingin memesan produk unggulan:\n📌 *${product.name}*\n🏷️ Harga: ${product.formattedPrice}\n📁 Kategori: ${product.subcategory}\n\nMohon informasi ketersediaan, estimasi pengiriman, dan mekanisme pembayarannya. Terima kasih!`
    );
    window.open(`https://wa.me/${COOPERATIVE_DATA.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <section id="produk" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 text-xs font-extrabold uppercase tracking-widest mb-3">
            <ShoppingBag className="w-4 h-4" />
            <span>Katalog Produk Unggulan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Produk Hasil Karya Warga Desa Siluman
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            Mebel kayu jati/mahoni, sofa custom, kusen presisi, hingga beras premium diproduksi dengan standar kualitas tinggi dan jaminan harga langsung pengrajin.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-slate-50 dark:bg-slate-800/80 p-4 sm:p-6 rounded-3xl border border-slate-200/80 dark:border-slate-700 mb-10 shadow-xs">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari mebel, sofa, kusen, beras..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 dark:text-white"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className="ml-1.5 opacity-70">({cat.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 dark:bg-slate-800/40 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700">
            <ShoppingBag className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <p className="text-base font-bold text-slate-700 dark:text-slate-300">
              Tidak ada produk yang cocok dengan pencarian "{searchQuery}"
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('semua');
              }}
              className="mt-3 text-xs font-bold text-red-600 hover:underline"
            >
              Reset Filter Pencarian
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white dark:bg-slate-800 rounded-3xl border border-slate-200/80 dark:border-slate-700 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Product Image & Badges */}
                <div className="relative aspect-4/3 overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                    <span className="px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-extrabold uppercase tracking-wider">
                      {product.subcategory}
                    </span>
                    {product.isPopular && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500 text-white text-[10px] font-bold shadow-xs">
                        <Flame className="w-3 h-3" /> Popular
                      </span>
                    )}
                  </div>

                  <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-emerald-600 dark:text-emerald-400 text-[11px] font-bold shadow-xs">
                    {product.stockStatus}
                  </span>
                </div>

                {/* Product Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900 dark:text-white line-clamp-2 mb-1 group-hover:text-red-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-4">
                      {product.description}
                    </p>
                  </div>

                  {/* Price & Action Buttons */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-700">
                    <div className="mb-3">
                      <span className="text-[11px] text-slate-400 block font-medium">Harga Resmi</span>
                      <span className="text-lg font-black text-red-600 dark:text-red-400">
                        {product.formattedPrice}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-700/60 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Detail</span>
                      </button>

                      <button
                        onClick={() => handleWhatsAppOrder(product)}
                        className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/20 transition-all active:scale-95"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Pesan WA</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-slate-900 w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/60 text-white hover:bg-slate-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-6 aspect-square bg-slate-100 dark:bg-slate-800 relative">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 text-xs font-bold mb-3">
                    {selectedProduct.subcategory}
                  </div>

                  <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">
                    {selectedProduct.name}
                  </h3>

                  <div className="text-2xl font-black text-red-600 dark:text-red-400 mb-4">
                    {selectedProduct.formattedPrice}
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {selectedProduct.description}
                  </p>

                  {/* Specifications table */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold uppercase text-slate-400 mb-2">Spesifikasi Detail:</h4>
                    <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-3 text-xs space-y-2">
                      {Object.entries(selectedProduct.specifications).map(([key, val]) => (
                        <div key={key} className="flex justify-between border-b border-slate-200/50 dark:border-slate-700 pb-1.5 last:border-0 last:pb-0">
                          <span className="font-semibold text-slate-500 dark:text-slate-400">{key}</span>
                          <span className="font-bold text-slate-800 dark:text-slate-200 text-right">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => {
                      const prod = selectedProduct;
                      setSelectedProduct(null);
                      handleWhatsAppOrder(prod);
                    }}
                    className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-2xl shadow-xl shadow-emerald-600/30 flex items-center justify-center gap-2 transition-all active:scale-95"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Pesan Langsung via WhatsApp</span>
                  </button>
                  <p className="text-[11px] text-center text-slate-400 mt-2">
                    Bisa pesan custom ukuran, warna fabric, dan pengiriman ke seluruh Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
