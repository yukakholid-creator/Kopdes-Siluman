import React, { useState, useEffect } from 'react';
import { PRODUCTS, ARTICLES } from './data/mockData';
import { Product, Article } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { VillageProfile } from './components/VillageProfile';
import { PotensiSection } from './components/PotensiSection';
import { ProductCatalog } from './components/ProductCatalog';
import { ArticlesSection } from './components/ArticlesSection';
import { GallerySection } from './components/GallerySection';
import { StatsCounter } from './components/StatsCounter';
import { Testimonials } from './components/Testimonials';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { MemberRegistrationModal } from './components/MemberRegistrationModal';
import { ArchitectureModal } from './components/ArchitectureModal';
import { SeoTechModal } from './components/SeoTechModal';
import { AdminLoginModal } from './components/AdminLoginModal';
import { AdminDashboardModal } from './components/AdminDashboardModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BackToTop } from './components/BackToTop';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [activeSection, setActiveSection] = useState<string>('hero');
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [archModalOpen, setArchModalOpen] = useState(false);
  const [seoModalOpen, setSeoModalOpen] = useState(false);

  // Admin state & Modals
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem('admin_logged_in') === 'true';
  });
  const [adminLoginModalOpen, setAdminLoginModalOpen] = useState(false);
  const [adminDashboardModalOpen, setAdminDashboardModalOpen] = useState(false);

  // Dynamic products and articles state
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  const [articles, setArticles] = useState<Article[]>(ARTICLES);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const handleAdminLoginSuccess = () => {
    setIsAdminLoggedIn(true);
    localStorage.setItem('admin_logged_in', 'true');
    setAdminDashboardModalOpen(true);
  };

  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false);
    localStorage.removeItem('admin_logged_in');
    setAdminDashboardModalOpen(false);
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans antialiased selection:bg-red-500 selection:text-white transition-colors duration-300">
      {/* Navbar & Header */}
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenRegisterModal={() => setRegisterModalOpen(true)}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenArchModal={() => setArchModalOpen(true)}
        isAdminLoggedIn={isAdminLoggedIn}
        onOpenAdminLoginModal={() => setAdminLoginModalOpen(true)}
        onOpenAdminDashboardModal={() => setAdminDashboardModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Section 1: Hero */}
        <Hero
          onNavigate={scrollToSection}
          onOpenRegister={() => setRegisterModalOpen(true)}
        />

        {/* Section 2: Tentang Koperasi */}
        <AboutSection />

        {/* Section 3: Profil Desa Siluman */}
        <VillageProfile />

        {/* Section 4: Potensi Desa */}
        <PotensiSection />

        {/* Section 5: Produk Unggulan */}
        <ProductCatalog customProducts={products} />

        {/* Section 6: Artikel & Berita */}
        <ArticlesSection customArticles={articles} />

        {/* Section 7: Galeri Dokumentasi */}
        <GallerySection />

        {/* Section 8: Statistik & Counter */}
        <StatsCounter />

        {/* Section 9: Testimoni */}
        <Testimonials />

        {/* Section 10: Call to Action */}
        <CtaSection
          onOpenRegisterModal={() => setRegisterModalOpen(true)}
          onNavigateToContact={() => scrollToSection('kontak')}
        />
      </main>

      {/* Section 11: Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenArchModal={() => setArchModalOpen(true)}
        onOpenSeoModal={() => setSeoModalOpen(true)}
      />

      {/* Interactive Modals */}
      <MemberRegistrationModal
        isOpen={registerModalOpen}
        onClose={() => setRegisterModalOpen(false)}
      />

      <ArchitectureModal
        isOpen={archModalOpen}
        onClose={() => setArchModalOpen(false)}
      />

      <SeoTechModal
        isOpen={seoModalOpen}
        onClose={() => setSeoModalOpen(false)}
      />

      <AdminLoginModal
        isOpen={adminLoginModalOpen}
        onClose={() => setAdminLoginModalOpen(false)}
        onLoginSuccess={handleAdminLoginSuccess}
      />

      <AdminDashboardModal
        isOpen={adminDashboardModalOpen}
        onClose={() => setAdminDashboardModalOpen(false)}
        onLogout={handleAdminLogout}
        products={products}
        setProducts={setProducts}
        articles={articles}
        setArticles={setArticles}
      />

      {/* Floating Widgets */}
      <FloatingWhatsApp />
      <BackToTop />
    </div>
  );
}
