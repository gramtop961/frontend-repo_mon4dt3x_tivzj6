import React, { useMemo, useRef, useState } from 'react';
import HeaderHero from './components/HeaderHero';
import MediaUploader from './components/MediaUploader';
import AdjustmentPanel from './components/AdjustmentPanel';
import EditorCanvas from './components/EditorCanvas';

const defaultFilters = {
  brightness: 100,
  contrast: 100,
  saturation: 100,
  blur: 0,
  sepia: 0,
};

function App() {
  const [media, setMedia] = useState(null);
  const [filters, setFilters] = useState(defaultFilters);
  const uploadRef = useRef(null);

  const handleChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleReset = () => setFilters(defaultFilters);

  const filterStyle = useMemo(() => {
    const { brightness, contrast, saturation, blur, sepia } = filters;
    return `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%) blur(${blur}px) sepia(${sepia}%)`;
  }, [filters]);

  const scrollToUpload = () => {
    uploadRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50">
      <HeaderHero onUploadClick={scrollToUpload} />

      <main className="max-w-6xl mx-auto px-4 pb-16 space-y-8">
        <section ref={uploadRef} className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <MediaUploader onLoad={(m) => setMedia(m)} />
            <AdjustmentPanel values={filters} onChange={handleChange} onReset={handleReset} />
          </div>
          <div className="lg:col-span-3">
            <EditorCanvas media={media} filterStyle={filterStyle} />
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: 'Filter Real-time',
              desc: 'Lihat hasil secara instan saat menggeser pengaturan.',
            },
            {
              title: 'Dukungan Video & Foto',
              desc: 'Unggah berkas apa pun: MP4, MOV, JPG, PNG, dan lainnya.',
            },
            {
              title: 'Desain Modern',
              desc: 'Antarmuka bersih, responsif, dan mudah digunakan.',
            },
          ].map((f, i) => (
            <div key={i} className="bg-white/80 backdrop-blur rounded-xl border border-slate-200 p-5 shadow-sm">
              <h4 className="font-semibold text-slate-900">{f.title}</h4>
              <p className="text-slate-600 text-sm mt-1">{f.desc}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
