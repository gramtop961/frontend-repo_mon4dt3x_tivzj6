import React from 'react';
import { RotateCcw, SlidersHorizontal } from 'lucide-react';

const Slider = ({ label, min, max, step = 1, value, onChange, unit = '' }) => (
  <div className="flex items-center gap-4">
    <div className="w-28 text-sm text-slate-600">{label}</div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="flex-1 accent-indigo-600"
    />
    <div className="w-16 text-right text-sm font-medium text-slate-800">{value}{unit}</div>
  </div>
);

const Toolbar = ({ filters, setFilters, onReset }) => {
  const update = (key) => (val) => setFilters((prev) => ({ ...prev, [key]: val }));

  return (
    <div className="bg-white/70 rounded-xl p-4 shadow-sm border border-slate-200">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-slate-700 font-semibold">
          <SlidersHorizontal className="w-4 h-4" /> Penyesuaian
        </div>
        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700"
        >
          <RotateCcw className="w-4 h-4" /> Reset
        </button>
      </div>
      <div className="space-y-3">
        <Slider label="Kecerahan" min={50} max={150} value={filters.brightness} onChange={update('brightness')} unit="%" />
        <Slider label="Kontras" min={50} max={150} value={filters.contrast} onChange={update('contrast')} unit="%" />
        <Slider label="Saturasi" min={0} max={200} value={filters.saturate} onChange={update('saturate')} unit="%" />
        <Slider label="Abu-abu" min={0} max={100} value={filters.grayscale} onChange={update('grayscale')} unit="%" />
        <Slider label="Blur" min={0} max={10} step={0.1} value={filters.blur} onChange={update('blur')} unit="px" />
        <Slider label="Rotasi" min={-180} max={180} value={filters.rotate} onChange={update('rotate')} unit="°" />
        <Slider label="Perbesaran" min={50} max={200} value={filters.scale} onChange={update('scale')} unit="%" />
      </div>
    </div>
  );
};

export default Toolbar;
