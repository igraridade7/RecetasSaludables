import React from 'react';
import { Award } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-amber-400 text-stone-900 font-montserrat font-bold text-xs sm:text-sm py-2 px-3 text-center flex items-center justify-center gap-2 shadow-sm tracking-wide">
      <Award className="w-4 h-4 text-stone-950 shrink-0" />
      <span>+12.000 Alumnos Satisfechos en Todo el Mundo</span>
    </div>
  );
};
