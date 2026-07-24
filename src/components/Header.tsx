import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import {
  Menu,
  X,
  Moon,
  Sun,
  UserPlus,
  PhoneCall,
  ChevronRight,
  Home,
  Sparkles,
} from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  onOpenRegisterModal: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  onOpenArchModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  darkMode,
  setDarkMode,
  onOpenRegisterModal,
  activeSection,
  setActiveSection,
  onOpenArchModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'tentang', label: 'Tentang' },
    { id: 'profil', label: 'Profil Desa' },
    { id: 'potensi', label: 'Potensi' },
    { id: 'produk', label: 'Produk' },
    { id: 'artikel', label: 'Artikel' },
    { id: 'galeri', label: 'Galeri' },
    { id: 'kontak', label: 'Kontak' },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md py-2.5'
          : 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm py-4 border-b border-slate-100 dark:border-slate-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <div
            onClick={() => scrollToSection('hero')}
            className="cursor-pointer flex items-center gap-2 group"
          >
            <Logo size="sm" variant={darkMode ? 'white' : 'full'} />
            <div className="hidden sm:block">
              <span className="block text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                Microsite Resmi
              </span>
              <span className="block text-sm font-extrabold text-slate-800 dark:text-slate-100 group-hover:text-red-600 transition-colors">
                Koperasi Merah Putih Siluman
              </span>
            </div>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 shadow-xs'
                      : 'text-slate-600 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Tools (Dark Mode, Architecture Roadmap, Register) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Tech Architecture Roadmap Modal Button */}
            <button
              onClick={onOpenArchModal}
              title="Arsitektur & Skema Database Migration (Next.js & Supabase)"
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-600 transition-colors relative group"
            >
              <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-400 animate-pulse" />
              <span className="absolute -bottom-8 right-0 bg-slate-900 text-white text-[10px] px-2 py-0.5 rounded shadow whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                Skema Database & API
              </span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label="Toggle Dark Mode"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>

            {/* Register Member CTA Button */}
            <button
              onClick={onOpenRegisterModal}
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
            >
              <UserPlus className="w-4 h-4" />
              <span>Daftar Anggota</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Buka Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Breadcrumbs Bar */}
      <div className="bg-slate-50 dark:bg-slate-950/80 border-t border-b border-slate-200/60 dark:border-slate-800 py-1 px-4 sm:px-6 lg:px-8 text-xs text-slate-500 dark:text-slate-400">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-none">
          <Home className="w-3.5 h-3.5 text-red-600" />
          <span>Koperasi Merah Putih</span>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="capitalize font-semibold text-slate-800 dark:text-slate-200">
            {activeSection === 'hero'
              ? 'Beranda'
              : activeSection === 'profil'
              ? 'Profil Desa Siluman Subang'
              : activeSection}
          </span>
          <span className="ml-auto text-[11px] text-slate-400 hidden md:inline">
            📍 Desa Siluman, Kec. Pabuaran, Subang - Jawa Barat
          </span>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[110px] bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-2xl p-5 transition-all">
          <nav className="grid grid-cols-2 gap-2 mb-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-2 p-3 rounded-xl text-left text-sm font-semibold ${
                  activeSection === item.id
                    ? 'bg-red-50 dark:bg-red-950/80 text-red-600 dark:text-red-400 font-bold'
                    : 'bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-200'
                }`}
              >
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegisterModal();
              }}
              className="w-full py-3 bg-red-600 text-white font-bold rounded-xl text-center text-sm flex items-center justify-center gap-2 shadow-md"
            >
              <UserPlus className="w-4 h-4" />
              Daftar Menjadi Anggota Online
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
