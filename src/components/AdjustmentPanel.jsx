import React from 'react';
import { RotateCcw } from 'lucide-react';

const Slider = ({ label, min, max, step = 1, value, onChange, unit = '' }) => (
  <div className="space-y-2">
    <div className="flex items-center justify-between text-sm">
      <span className="text-slate-700 font-medium">{label}</span>
      <span className="text-slate-500">{value}{unit}</span>
    </div>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full accent-indigo-600"
    />
  </div>
);

const AdjustmentPanel = ({ values, onChange, onReset }) => {
  const { brightness, contrast, saturation, blur, sepia } = values;

  return (
    <div className="bg-white/80 backdrop-blur border border-slate-200 rounded-xl p-4 shadow-sm space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-slate-900 font-semibold">Penyesuaian</h3>
        <button
          onClick={onReset}
          className="inline-flex items-center gap-1 text-sm text-slate-600 hover:text-slate-900"
        >
          <RotateCcw className="w-4 h-4" /> Reset
        </button>
      </div>
      <div className="space-y-5">
        <Slider label="Kecerahan" min={0} max={200} value={brightness} onChange={(v) => onChange('brightness', v)} unit="%" />
        <Slider label="Kontras" min={0} max={200} value={contrast} onChange={(v) => onChange('contrast', v)} unit="%" />
        <Slider label="Saturasi" min={0} max={300} value={saturation} onChange={(v) => onChange('saturation', v)} unit="%" />
        <Slider label="Blur" min={0} max={20} step={0.5} value={blur} onChange={(v) => onChange('blur', v)} unit="px" />
        <Slider label="Sepia" min={0} max={100} value={sepia} onChange={(v) => onChange('sepia', v)} unit="%" />
      </div>
    </div>
  );
};

export default AdjustmentPanel;
