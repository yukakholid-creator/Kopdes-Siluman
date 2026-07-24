import React, { useState } from 'react';
import { MIGRATION_DATABASE_SCHEMA } from '../data/mockData';
import {
  Code2,
  Database,
  Layers,
  Server,
  X,
  CheckCircle2,
  Smartphone,
  ShieldAlert,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

interface ArchitectureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'database' | 'api' | 'roadmap'>('database');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="bg-slate-900 text-slate-100 w-full max-w-4xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-700 relative max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3.5 rounded-2xl bg-emerald-500/20 text-emerald-400">
            <Code2 className="w-7 h-7" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase text-emerald-400 tracking-wider">
              Arsitektur System & Migration Roadmap
            </span>
            <h3 className="text-2xl font-black text-white">
              Cakupan Relasional Database & REST API Specs
            </h3>
          </div>
        </div>

        {/* Subtab Buttons */}
        <div className="flex gap-2 mb-6 border-b border-slate-800 pb-3">
          <button
            onClick={() => setActiveSubTab('database')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeSubTab === 'database'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Database className="w-4 h-4 inline mr-1.5" />
            <span>Skema Database (Next.js/Laravel)</span>
          </button>

          <button
            onClick={() => setActiveSubTab('api')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeSubTab === 'api'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Server className="w-4 h-4 inline mr-1.5" />
            <span>Rekomendasi REST API</span>
          </button>

          <button
            onClick={() => setActiveSubTab('roadmap')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeSubTab === 'roadmap'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-4 h-4 inline mr-1.5" />
            <span>Rekomendasi Fitur Lanjutan</span>
          </button>
        </div>

        {/* Tab 1: Database Schema */}
        {activeSubTab === 'database' && (
          <div className="space-y-6 animate-fade-in">
            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300">
              <strong className="text-emerald-400">Overview Arsitektur Data:</strong> Data entity Koperasi Desa Merah Putih Desa Siluman siap dikoneksikan dengan ORM Prisma / Drizzle (Next.js + Supabase PostgreSQL) atau Eloquent ORM (Laravel 11 + MySQL 8).
            </div>

            <div className="space-y-4">
              {MIGRATION_DATABASE_SCHEMA.entities.map((ent, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-extrabold text-emerald-400 font-mono">
                      Table: {ent.tableName}
                    </span>
                    <span className="text-[10px] text-slate-400 px-2 py-0.5 rounded bg-slate-800">
                      Entity Relational Model
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mb-3">{ent.description}</p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono bg-slate-900 p-3 rounded-xl">
                    {ent.fields.map((f, i) => (
                      <div key={i} className="border-b border-slate-800 pb-1">
                        <span className="text-white font-bold block">{f.name}</span>
                        <span className="text-emerald-400">{f.type}</span>
                        <span className="text-slate-500 block text-[9px]">{f.key}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: REST API Routes */}
        {activeSubTab === 'api' && (
          <div className="space-y-4 animate-fade-in">
            <p className="text-xs text-slate-300">
              Spesifikasi Endpoint API Standar JSON:API untuk mengintegrasikan Mobile App PWA dan Dashboard Pengurus Koperasi.
            </p>

            <div className="space-y-2">
              {MIGRATION_DATABASE_SCHEMA.apiEndpoints.map((ep, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`px-2 py-1 rounded text-[10px] font-bold ${
                        ep.method === 'GET'
                          ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                          : 'bg-blue-950 text-blue-400 border border-blue-800'
                      }`}
                    >
                      {ep.method}
                    </span>
                    <span className="text-slate-200 font-bold">{ep.endpoint}</span>
                  </div>
                  <span className="text-slate-400 text-[11px]">{ep.desc}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Roadmap Lanjutan */}
        {activeSubTab === 'roadmap' && (
          <div className="space-y-4 animate-fade-in">
            <h4 className="text-sm font-bold text-white mb-2">
              Rekomendasi Pengembangan Fitur Lanjutan (Phase 2 & 3):
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
                <div className="font-extrabold text-emerald-400 mb-1">1. Login Admin & Dashboard Pengurus</div>
                <p className="text-slate-300">Autentikasi role-based (Ketua, Bendahara, Admin Mebel, Admin Tani) untuk kelola inventaris.</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
                <div className="font-extrabold text-emerald-400 mb-1">2. Manajemen Anggota & Simpanan</div>
                <p className="text-slate-300">Buku simpanan pokok, simpanan wajib, dan perhitungan SHU tahunan terintegrasi.</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
                <div className="font-extrabold text-emerald-400 mb-1">3. Integrasi Pembayaran QRIS & Gateway</div>
                <p className="text-slate-300">Dukungan pembayaran QRIS Midtrans/Xendit untuk pemesanan mebel dan beras online.</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
                <div className="font-extrabold text-emerald-400 mb-1">4. WhatsApp API & PWA Notification</div>
                <p className="text-slate-300">Notifikasi otomatis resi pemesanan mebel dan pengingat SHU via WhatsApp Gateway.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
