import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Kembali ke atas"
      className="fixed bottom-24 right-6 z-40 p-3.5 rounded-full bg-slate-900/90 dark:bg-white/90 text-white dark:text-slate-900 shadow-xl border border-white/20 hover:scale-110 active:scale-95 transition-all duration-300"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
