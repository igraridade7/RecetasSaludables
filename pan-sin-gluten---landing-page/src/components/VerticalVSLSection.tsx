import React from 'react';
import { Play } from 'lucide-react';

export const VerticalVSLSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-stone-900 via-amber-950 to-[#b85c37] text-white py-10 px-4 text-center relative overflow-hidden">
      <div className="max-w-xl mx-auto flex flex-col items-center">
        
        {/* 9:16 Vertical Video Container */}
        <div className="w-full max-w-[290px] sm:max-w-[320px] aspect-[9/16] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] border-4 border-amber-400/80 bg-black relative">
          <iframe
            src="https://player.vimeo.com/video/1216865830?badge=0&autopause=0&player_id=0&app_id=58479"
            title="VSL Vertical 9:16"
            className="w-full h-full"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </section>
  );
};
