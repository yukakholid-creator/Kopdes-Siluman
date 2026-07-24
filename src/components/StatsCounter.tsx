import React, { useState, useEffect, useRef } from 'react';
import { Users, ShoppingBag, Store, Handshake, Newspaper, TrendingUp } from 'lucide-react';

export const StatsCounter: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      id: 'anggota',
      label: 'Jumlah Anggota',
      target: 350,
      suffix: '+',
      desc: 'Petani & Pengrajin Mebel/Sofa Aktif',
      icon: Users,
      color: 'from-red-500 to-red-700',
    },
    {
      id: 'produk',
      label: 'Katalog Produk',
      target: 48,
      suffix: '+',
      desc: 'Sofa, Mebel, Kusen & Beras',
      icon: ShoppingBag,
      color: 'from-emerald-500 to-emerald-700',
    },
    {
      id: 'umkm',
      label: 'UMKM Binaan',
      target: 75,
      suffix: '+',
      desc: 'Workshop Kayu & Olahan Pangan',
      icon: Store,
      color: 'from-amber-500 to-amber-700',
    },
    {
      id: 'mitra',
      label: 'Mitra Strategis',
      target: 18,
      suffix: '+',
      desc: 'Penyalur, Toko & Kontraktor',
      icon: Handshake,
      color: 'from-blue-500 to-blue-700',
    },
    {
      id: 'artikel',
      label: 'Publikasi Artikel',
      target: 24,
      suffix: '+',
      desc: 'Kabar Desa & Edukasi Usaha',
      icon: Newspaper,
      color: 'from-purple-500 to-purple-700',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-red-950 text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Pencapaian & Dampak Ekonomi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black">
            Capaian Koperasi Desa Merah Putih
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {stats.map((item) => (
            <CounterCard key={item.id} item={item} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface CounterCardProps {
  item: {
    label: string;
    target: number;
    suffix: string;
    desc: string;
    icon: React.ElementType;
    color: string;
  };
  isVisible: boolean;
}

const CounterCard: React.FC<CounterCardProps> = ({ item, isVisible }) => {
  const [count, setCount] = useState(0);
  const Icon = item.icon;

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = item.target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= item.target) {
        setCount(item.target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, item.target]);

  return (
    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center flex flex-col items-center justify-between hover:border-white/30 transition-all">
      <div className={`p-3 rounded-2xl bg-gradient-to-br ${item.color} shadow-lg mb-3`}>
        <Icon className="w-6 h-6 text-white" />
      </div>

      <div>
        <div className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-1">
          {count}
          {item.suffix}
        </div>
        <div className="text-xs font-extrabold text-slate-200 mb-1">{item.label}</div>
        <div className="text-[10px] text-slate-400 font-medium leading-tight">{item.desc}</div>
      </div>
    </div>
  );
};
