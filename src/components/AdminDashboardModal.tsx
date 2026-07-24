import React, { useState } from 'react';
import {
  COOPERATIVE_DATA,
  ORG_STRUCTURE,
} from '../data/mockData';
import { Product, Article } from '../types';
import {
  X,
  LayoutDashboard,
  Package,
  FileText,
  Users,
  LogOut,
  Plus,
  Trash2,
  Check,
  Phone,
  UserCheck,
  ShieldAlert,
  Edit,
  Sparkles,
} from 'lucide-react';

interface AdminDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  articles: Article[];
  setArticles: React.Dispatch<React.SetStateAction<Article[]>>;
}

interface MemberApplication {
  id: string;
  name: string;
  nik: string;
  phone: string;
  businessType: string;
  address: string;
  date: string;
  status: 'Terverifikasi' | 'Menunggu Verifikasi';
}

export const AdminDashboardModal: React.FC<AdminDashboardModalProps> = ({
  isOpen,
  onClose,
  onLogout,
  products,
  setProducts,
  articles,
  setArticles,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'members' | 'products' | 'articles' | 'org'>(
    'overview'
  );

  // Sample Member Applications State
  const [members, setMembers] = useState<MemberApplication[]>([
    {
      id: 'MBR-001',
      name: 'Ahmad Subagja',
      nik: '3213041208850001',
      phone: '081234567890',
      businessType: 'Pengrajin Mebel Kayu Jati',
      address: 'RT 02 / RW 01 Desa Siluman',
      date: '22 Juli 2026',
      status: 'Terverifikasi',
    },
    {
      id: 'MBR-002',
      name: 'Budi Santoso',
      nik: '3213042211900003',
      phone: '085224516254',
      businessType: 'Pengrajin Sofa & Upholstery',
      address: 'RT 04 / RW 02 Desa Siluman',
      date: '23 Juli 2026',
      status: 'Menunggu Verifikasi',
    },
    {
      id: 'MBR-003',
      name: 'Siti Rahmawati',
      nik: '3213045504930002',
      phone: '081398765432',
      businessType: 'Petani Padi & Ketahanan Pangan',
      address: 'RT 01 / RW 03 Desa Siluman',
      date: '24 Juli 2026',
      status: 'Menunggu Verifikasi',
    },
  ]);

  // New Product Modal State
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: 'mebel' as const,
    price: '',
    rawPrice: 1000000,
    description: '',
    material: 'Kayu Jati/Mahoni',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
  });

  // New Article Modal State
  const [showAddArticle, setShowAddArticle] = useState(false);
  const [newArticle, setNewArticle] = useState({
    title: '',
    categoryLabel: 'Kegiatan Desa',
    author: 'Admin KDKMP',
    excerpt: '',
    content: '',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
  });

  if (!isOpen) return null;

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const created: Product = {
      id: `prod-${Date.now()}`,
      name: newProduct.name,
      category: 'furniture',
      subcategory: newProduct.category === 'mebel' ? 'Mebel & Kusen' : 'Sofa & Upholstery',
      price: Number(newProduct.rawPrice),
      formattedPrice: newProduct.price,
      description: newProduct.description,
      specifications: { Material: newProduct.material },
      isPopular: true,
      stockStatus: 'Tersedia',
      image: newProduct.image,
    };
    setProducts([created, ...products]);
    setShowAddProduct(false);
    setNewProduct({
      name: '',
      category: 'mebel',
      price: '',
      rawPrice: 1000000,
      description: '',
      material: 'Kayu Jati/Mahoni',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
    });
  };

  const handleDeleteProduct = (id: string) => {
    if (confirm('Yakin ingin menghapus produk ini dari katalog?')) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  const handleAddArticle = (e: React.FormEvent) => {
    e.preventDefault();
    const created: Article = {
      id: `art-${Date.now()}`,
      title: newArticle.title,
      slug: `berita-${Date.now()}`,
      category: 'kegiatan',
      categoryLabel: newArticle.categoryLabel,
      author: newArticle.author,
      date: '24 Juli 2026',
      summary: newArticle.excerpt,
      content: newArticle.content || newArticle.excerpt,
      image: newArticle.image,
      readTime: '3 min',
      tags: ['Desa Siluman', 'Koperasi', 'UMKM'],
    };
    setArticles([created, ...articles]);
    setShowAddArticle(false);
  };

  const handleDeleteArticle = (id: string) => {
    if (confirm('Yakin ingin menghapus artikel ini?')) {
      setArticles(articles.filter((a) => a.id !== id));
    }
  };

  const toggleMemberStatus = (id: string) => {
    setMembers(
      members.map((m) =>
        m.id === id
          ? {
              ...m,
              status: m.status === 'Terverifikasi' ? 'Menunggu Verifikasi' : 'Terverifikasi',
            }
          : m
      )
    );
  };

  const kdkmpManager = ORG_STRUCTURE.find((o) => o.role === 'Manajer KDKMP');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className="bg-slate-900 border border-slate-800 text-slate-100 w-full max-w-5xl rounded-3xl p-6 sm:p-8 shadow-2xl relative max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-red-600/20 text-red-500 border border-red-500/30">
              <LayoutDashboard className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                  Dashboard Administrasi
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 text-[10px] font-bold border border-emerald-800">
                  Online
                </span>
              </div>
              <h3 className="text-2xl font-black text-white">
                KDKMP Desa Siluman - Subang
              </h3>
            </div>
          </div>

          <button
            onClick={onLogout}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-950/60 hover:bg-red-900/80 text-red-300 border border-red-800 text-xs font-bold transition-all"
          >
            <LogOut className="w-4 h-4" />
            <span>Keluar Admin</span>
          </button>
        </div>

        {/* Dashboard Tabs */}
        <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-800 pb-3">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'overview'
                ? 'bg-red-600 text-white shadow-md'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Ringkasan</span>
          </button>

          <button
            onClick={() => setActiveTab('members')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'members'
                ? 'bg-red-600 text-white shadow-md'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Pendaftaran Anggota ({members.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('products')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'products'
                ? 'bg-red-600 text-white shadow-md'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>Katalog Produk ({products.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('articles')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'articles'
                ? 'bg-red-600 text-white shadow-md'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Berita & Artikel ({articles.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('org')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'org'
                ? 'bg-red-600 text-white shadow-md'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <UserCheck className="w-4 h-4" />
            <span>Pengurus KDKMP</span>
          </button>
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-6 animate-fade-in">
            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700">
                <div className="text-xs text-slate-400 mb-1">Manajer KDKMP Aktif</div>
                <div className="text-base font-extrabold text-amber-400">
                  {kdkmpManager ? kdkmpManager.name : 'Idham Kholid, M.Pd'}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  Koperasi Desa Merah Putih
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700">
                <div className="text-xs text-slate-400 mb-1">No. Kontak WA Resmi</div>
                <div className="text-base font-extrabold text-emerald-400 font-mono">
                  {COOPERATIVE_DATA.phone}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">Layanan Anggota</div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700">
                <div className="text-xs text-slate-400 mb-1">Total Produk Mebel/Sofa</div>
                <div className="text-2xl font-black text-white">{products.length} Items</div>
                <div className="text-[11px] text-emerald-400 mt-1">Siap dipesan online</div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700">
                <div className="text-xs text-slate-400 mb-1">Pendaftaran Baru</div>
                <div className="text-2xl font-black text-white">{members.length} Pendaftar</div>
                <div className="text-[11px] text-amber-400 mt-1">Perlu Verifikasi</div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800">
              <h4 className="text-sm font-extrabold text-white mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                Tindakan Cepat Administrasi:
              </h4>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => {
                    setActiveTab('products');
                    setShowAddProduct(true);
                  }}
                  className="px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Tambah Produk Baru
                </button>

                <button
                  onClick={() => {
                    setActiveTab('articles');
                    setShowAddArticle(true);
                  }}
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Tambah Berita Desa
                </button>

                <button
                  onClick={() => setActiveTab('members')}
                  className="px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold flex items-center gap-2"
                >
                  <Users className="w-4 h-4" />
                  Lihat Pendaftar Anggota
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Pendaftaran Anggota */}
        {activeTab === 'members' && (
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center justify-between">
              <p className="text-xs text-slate-400">
                Daftar warga Desa Siluman yang mengajukan keanggotaan online.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-950 text-slate-400 font-bold uppercase tracking-wider border-b border-slate-800">
                  <tr>
                    <th className="p-3">ID / Tanggal</th>
                    <th className="p-3">Nama Sesuai KTP</th>
                    <th className="p-3">NIK</th>
                    <th className="p-3">No. WhatsApp</th>
                    <th className="p-3">Sektor Usaha</th>
                    <th className="p-3">Status</th>
                    <th className="p-3 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {members.map((m) => (
                    <tr key={m.id} className="hover:bg-slate-800/50">
                      <td className="p-3 font-mono text-slate-400">
                        {m.id}
                        <div className="text-[10px] text-slate-500">{m.date}</div>
                      </td>
                      <td className="p-3 font-bold text-white">{m.name}</td>
                      <td className="p-3 font-mono text-slate-300">{m.nik}</td>
                      <td className="p-3">
                        <a
                          href={`https://wa.me/62${m.phone.replace(/^0/, '')}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-emerald-400 font-bold hover:underline flex items-center gap-1"
                        >
                          <Phone className="w-3 h-3" />
                          {m.phone}
                        </a>
                      </td>
                      <td className="p-3 text-slate-300">{m.businessType}</td>
                      <td className="p-3">
                        <span
                          className={`px-2 py-1 rounded-full text-[10px] font-bold ${
                            m.status === 'Terverifikasi'
                              ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                              : 'bg-amber-950 text-amber-400 border border-amber-800'
                          }`}
                        >
                          {m.status}
                        </span>
                      </td>
                      <td className="p-3 text-right">
                        <button
                          onClick={() => toggleMemberStatus(m.id)}
                          className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] font-bold"
                        >
                          {m.status === 'Terverifikasi' ? 'Batalkan' : 'Verifikasi'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Kelola Produk */}
        {activeTab === 'products' && (
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-white">Daftar Produk Katalog</h4>
              <button
                onClick={() => setShowAddProduct(true)}
                className="px-3.5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                Tambah Produk
              </button>
            </div>

            {/* Add Product Form Modal */}
            {showAddProduct && (
              <form
                onSubmit={handleAddProduct}
                className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3"
              >
                <h5 className="text-xs font-bold uppercase text-red-400">
                  Form Tambah Produk Baru
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block text-slate-400 mb-1">Nama Produk:</label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Kursi Tamu Jati Ukir"
                      value={newProduct.name}
                      onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">Kategori:</label>
                    <select
                      value={newProduct.category}
                      onChange={(e) =>
                        setNewProduct({
                          ...newProduct,
                          category: e.target.value as 'mebel' | 'sofa' | 'tani',
                        })
                      }
                      className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white"
                    >
                      <option value="mebel">Mebel & Kusen Kayu</option>
                      <option value="sofa">Sofa & Upholstery</option>
                      <option value="tani">Hasil Pertanian (Beras)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">Harga Tampilan (Text):</label>
                    <input
                      type="text"
                      required
                      placeholder="Rp 3.500.000 / Set"
                      value={newProduct.price}
                      onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">Material Utama:</label>
                    <input
                      type="text"
                      required
                      placeholder="Kayu Jati Jepara / Mahoni"
                      value={newProduct.material}
                      onChange={(e) => setNewProduct({ ...newProduct, material: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-slate-400 mb-1">Deskripsi Ringkas:</label>
                    <textarea
                      rows={2}
                      required
                      placeholder="Deskripsi bahan, finishing, dan garansi..."
                      value={newProduct.description}
                      onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAddProduct(false)}
                    className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-red-600 text-white text-xs font-bold"
                  >
                    Simpan Produk
                  </button>
                </div>
              </form>
            )}

            {/* Product List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {products.map((p) => (
                <div
                  key={p.id}
                  className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-12 h-12 rounded-xl object-cover shrink-0"
                    />
                    <div className="truncate">
                      <div className="font-bold text-white truncate">{p.name}</div>
                      <div className="text-red-400 font-bold">{p.formattedPrice}</div>
                      <div className="text-[10px] text-slate-500">{p.subcategory}</div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDeleteProduct(p.id)}
                    className="p-2 rounded-xl bg-red-950 text-red-400 hover:bg-red-900 transition-colors"
                    title="Hapus Produk"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Kelola Artikel */}
        {activeTab === 'articles' && (
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-white">Daftar Berita Desa Siluman</h4>
              <button
                onClick={() => setShowAddArticle(true)}
                className="px-3.5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                Tambah Berita
              </button>
            </div>

            {showAddArticle && (
              <form
                onSubmit={handleAddArticle}
                className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 text-xs"
              >
                <h5 className="font-bold uppercase text-red-400">Tambah Berita / Artikel Baru</h5>
                <div>
                  <label className="block text-slate-400 mb-1">Judul Berita:</label>
                  <input
                    type="text"
                    required
                    placeholder="Judul Berita..."
                    value={newArticle.title}
                    onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">Ringkasan Berita:</label>
                  <textarea
                    rows={2}
                    required
                    placeholder="Ringkasan..."
                    value={newArticle.excerpt}
                    onChange={(e) => setNewArticle({ ...newArticle, excerpt: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white"
                  />
                </div>
                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAddArticle(false)}
                    className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-red-600 text-white font-bold"
                  >
                    Simpan Berita
                  </button>
                </div>
              </form>
            )}

            <div className="space-y-2">
              {articles.map((art) => (
                <div
                  key={art.id}
                  className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3 text-xs"
                >
                  <div>
                    <div className="font-bold text-white">{art.title}</div>
                    <div className="text-[11px] text-slate-400">
                      {art.date} • Oleh {art.author} ({art.categoryLabel})
                    </div>
                  </div>

                  <button
                    onClick={() => handleDeleteArticle(art.id)}
                    className="p-2 rounded-xl bg-red-950 text-red-400 hover:bg-red-900"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 5: Informasi Pengurus */}
        {activeTab === 'org' && (
          <div className="space-y-4 animate-fade-in text-xs">
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <h4 className="text-sm font-extrabold text-amber-400">
                Manajer KDKMP Desa Siluman Terdaftar:
              </h4>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-base font-black text-white">Idham Kholid, M.Pd</div>
                  <div className="text-emerald-400 font-bold">
                    Manajer KDKMP Desa Siluman
                  </div>
                  <div className="text-slate-500 text-[11px]">Periode: 2023 - 2028</div>
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 font-bold">
                  Jabatan Aktif
                </span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <h4 className="text-sm font-extrabold text-emerald-400">
                Nomor Kontak Person Resmi (WhatsApp):
              </h4>
              <div className="p-3 rounded-xl bg-slate-900 font-mono text-sm text-white font-bold">
                085224516254 (+62 852-2451-6254)
              </div>
              <p className="text-[11px] text-slate-400">
                Kontak ini terhubung langsung ke layanan pelanggan Koperasi Desa Merah Putih Desa Siluman.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
