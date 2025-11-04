import React, { useRef } from 'react';
import { Upload, Image as ImageIcon, Video as VideoIcon } from 'lucide-react';

const MediaUploader = ({ onLoad }) => {
  const inputRef = useRef(null);

  const handleFiles = (files) => {
    const file = files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    const type = file.type.startsWith('video') ? 'video' : 'image';
    onLoad({ url, type, file });
  };

  const onDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleFiles(e.dataTransfer.files);
  };

  const onChange = (e) => {
    handleFiles(e.target.files);
  };

  return (
    <div
      className="w-full border-2 border-dashed border-slate-300 rounded-xl p-6 text-center bg-white/60 hover:bg-white transition shadow-sm"
      onDragOver={(e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
      }}
      onDrop={onDrop}
      onClick={() => inputRef.current?.click()}
      role="button"
      tabIndex={0}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/*,video/*"
        className="hidden"
        onChange={onChange}
      />
      <div className="mx-auto w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center mb-3">
        <Upload className="w-7 h-7 text-slate-600" />
      </div>
      <p className="text-slate-800 font-medium">Seret & letakkan atau klik untuk mengunggah</p>
      <p className="text-slate-500 text-sm mt-1 flex items-center gap-3 justify-center">
        <span className="inline-flex items-center gap-1"><ImageIcon className="w-4 h-4" /> Foto</span>
        <span className="text-slate-300">•</span>
        <span className="inline-flex items-center gap-1"><VideoIcon className="w-4 h-4" /> Video</span>
      </p>
    </div>
  );
};

export default MediaUploader;
