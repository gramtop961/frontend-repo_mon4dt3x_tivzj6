import React from 'react';
import { Sparkles, Wand2, Film, Image as ImageIcon } from 'lucide-react';

const HeaderHero = ({ onUploadClick }) => {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-pink-50" />
      <div className="relative max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="flex items-center gap-2 text-indigo-600 mb-4">
          <Sparkles className="w-5 h-5" />
          <span className="text-sm font-medium">Studio Editing All-in-One</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          Edit Video & Foto dengan Mudah, Cepat, dan Kuat
        </h1>
        <p className="mt-3 md:mt-4 text-slate-600 max-w-2xl">
          Terapkan filter, atur warna, dan pratinjau hasil secara instan. Dirancang untuk kreator yang
          menginginkan kontrol lengkap tanpa ribet.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            onClick={onUploadClick}
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 text-white px-5 py-2.5 shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <Wand2 className="w-5 h-5" /> Mulai Edit
          </button>
          <div className="flex items-center gap-2 text-slate-500">
            <span className="inline-flex items-center gap-1 text-sm"><ImageIcon className="w-4 h-4" /> Foto</span>
            <span className="text-slate-300">•</span>
            <span className="inline-flex items-center gap-1 text-sm"><Film className="w-4 h-4" /> Video</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderHero;
