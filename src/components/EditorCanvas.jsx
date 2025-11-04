import React from 'react';

const EditorCanvas = ({ media, filterStyle }) => {
  if (!media) {
    return (
      <div className="h-full min-h-[280px] md:min-h-[420px] w-full border border-dashed border-slate-300 rounded-xl grid place-items-center text-slate-500 bg-white/40">
        Pratinjau media akan muncul di sini
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm">
      {media.type === 'video' ? (
        <video
          src={media.url}
          controls
          className="w-full h-full max-h-[60vh] object-contain bg-black"
          style={{ filter: filterStyle }}
        />
      ) : (
        <img
          src={media.url}
          alt="media"
          className="w-full h-full max-h-[60vh] object-contain bg-slate-900"
          style={{ filter: filterStyle }}
        />
      )}
    </div>
  );
};

export default EditorCanvas;
