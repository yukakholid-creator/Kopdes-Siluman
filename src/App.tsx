import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

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
        <ProductCatalog />

        {/* Section 6: Artikel & Berita */}
        <ArticlesSection />

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

      {/* Floating Widgets */}
      <FloatingWhatsApp />
      <BackToTop />
    </div>
  );
}
