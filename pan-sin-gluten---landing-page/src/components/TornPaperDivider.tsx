import React from 'react';

export const TornPaperDivider: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden leading-none z-10 bg-[#b85c37] text-white">
      {/* Top Jagged Edge SVG */}
      <svg
        className="block w-full h-8 sm:h-12 text-amber-50/20 fill-current -scale-y-100"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M0,0 C150,90 350,-40 500,65 C650,140 900,10 1200,80 L1200,120 L0,120 Z"></path>
      </svg>
    </div>
  );
};
