import React from 'react';
import { Gift, CheckCircle2 } from 'lucide-react';
import { CHECKOUT_URL } from '../data/pageData';

// 3D E-Book Cover Component
const Book3DMockup: React.FC<{
  title: string;
  subtitle?: string;
  coverGradient: string;
  imageSrc: string;
  badgeText?: string;
  className?: string;
}> = ({ title, subtitle, coverGradient, imageSrc, badgeText = "100% SIN GLUTEN", className = "" }) => {
  return (
    <div className={`relative group shrink-0 w-28 sm:w-36 ${className}`} style={{ perspective: '900px' }}>
      {/* 3D Book Box */}
      <div 
        className="relative w-26 sm:w-34 h-36 sm:h-48 rounded-r-md transition-all duration-300 group-hover:scale-105"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateY(-18deg) rotateX(4deg) rotateZ(-2deg)',
          filter: 'drop-shadow(10px 14px 18px rgba(0,0,0,0.4))'
        }}
      >
        {/* Front Cover */}
        <div className={`absolute inset-0 rounded-r-md overflow-hidden ${coverGradient} flex flex-col justify-between p-2 text-white border-l-[3px] border-amber-200/60 shadow-inner`}>
          {/* Header Title on Cover */}
          <div className="text-center z-10">
            <h4 className="font-bebas text-xs sm:text-sm leading-tight text-amber-100 uppercase tracking-wide drop-shadow-md">
              {title}
            </h4>
            {subtitle && (
              <p className="text-[8px] sm:text-[9px] font-medium text-amber-200/90 leading-none mt-0.5">
                {subtitle}
              </p>
            )}
          </div>

          {/* Cover Center Image */}
          <div className="my-1 flex-1 relative rounded overflow-hidden border border-amber-300/40 shadow-inner">
            <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Bottom Badge Seal */}
          <div className="flex justify-between items-center text-[7px] font-bold text-amber-200 z-10 pt-0.5 border-t border-amber-300/30">
            <span className="uppercase tracking-wider text-[6px] text-amber-100">LIBRO DIGITAL</span>
            {badgeText && (
              <span className="bg-gradient-to-r from-amber-400 to-yellow-300 text-stone-950 font-black px-1 py-0.2 rounded-full text-[6px] shadow-xs">
                {badgeText}
              </span>
            )}
          </div>

          {/* Crease line on left edge */}
          <div className="absolute top-0 bottom-0 left-0 w-[5px] bg-gradient-to-r from-black/50 via-white/20 to-transparent pointer-events-none" />
          {/* Glass sheen */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent pointer-events-none" />
        </div>

        {/* 3D Pages Side (Right Edge) */}
        <div 
          className="absolute top-0 bottom-0 right-0 w-[12px] bg-stone-200 border-l border-stone-300 flex flex-col justify-around py-1"
          style={{
            transform: 'translateX(6px) translateZ(-6px) rotateY(90deg)',
            backgroundImage: 'repeating-linear-gradient(90deg, #f5f5f4, #f5f5f4 2px, #e7e5e4 2px, #e7e5e4 3px)'
          }}
        />

        {/* Back Cover Depth */}
        <div 
          className="absolute inset-0 rounded-r-md bg-stone-900"
          style={{
            transform: 'translateZ(-12px)',
          }}
        />
      </div>

      {/* Floor Shadow */}
      <div className="w-22 sm:w-30 h-2 mx-auto mt-1 rounded-[100%] bg-black/35 blur-sm transform scale-x-110" />
    </div>
  );
};

export const BonusStackSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-amber-50/60 via-white to-amber-50/40 py-12 px-3 sm:px-4 border-t border-stone-200">
      <div className="max-w-md sm:max-w-lg mx-auto text-center">
        
        {/* Main Section Header */}
        <div className="mb-4">
          <h2 className="font-bebas text-3xl sm:text-4xl text-[#6e220e] tracking-tight uppercase leading-none font-black">
            ¡CONSIGUE TU LIBRO DE PANADERÍA HOY MISMO!
          </h2>
          <h3 className="font-bebas text-2xl sm:text-3xl text-[#6e220e] tracking-tight uppercase leading-none mt-1">
            RECIBIRÁS TODO ESTO
          </h3>
          <div className="mt-2 inline-block">
            <span className="bg-[#00c853] text-white font-black text-xl sm:text-2xl px-6 py-1.5 rounded-full shadow-md inline-block uppercase tracking-wide border border-emerald-400">
              GRATIS +$116
            </span>
          </div>
        </div>

        {/* Gold Ribbon Banner Image */}
        <div className="my-5 flex justify-center w-full">
          <img 
            src="https://i.ibb.co/Kz7TBYj3/7-bonus.webp" 
            alt="7 Bonos Exclusivos" 
            className="h-12 sm:h-14 w-auto object-contain max-w-xs drop-shadow-md"
          />
        </div>

        {/* STACK OF BONUS CARDS */}
        <div className="space-y-6 my-6 text-left">
          
          {/* BONUS #1 */}
          <div className="relative rounded-2xl border-2 border-amber-300/90 bg-gradient-to-b from-[#fffdfa] to-[#fff6e6] shadow-md overflow-hidden pt-3">
            {/* Top Right Green Badge */}
            <div className="absolute top-2 right-3 bg-[#00c853] text-white text-[10px] sm:text-xs font-black px-2.5 py-0.5 rounded-full shadow-sm uppercase tracking-wider z-20 border border-emerald-300">
              BONO GRATIS #1
            </div>

            {/* Header Banner Inside Card */}
            <div className="mx-3 mt-4 mb-2 p-2 rounded-xl bg-gradient-to-r from-[#7a2a16] via-[#9e3a1d] to-[#7a2a16] text-amber-100 border border-amber-400/40 shadow-xs pl-28 sm:pl-36">
              <h3 className="font-bebas text-lg sm:text-xl tracking-wide uppercase leading-tight text-amber-200">
                GALLETAS Y BIZCOCHOS
              </h3>
              <p className="text-[10px] text-amber-100/90 font-medium">
                Sin gluten ni lactosa
              </p>
            </div>

            {/* Card Body with Overlapping Book */}
            <div className="p-3 pt-0 flex flex-row items-end gap-2 sm:gap-4 relative">
              {/* 3D Book Image Left overlapping the brown header */}
              <div className="shrink-0 -mt-12 sm:-mt-16 z-10 relative">
                <img 
                  src="https://i.ibb.co/C3TnFRz2/2-2-269x300.webp" 
                  alt="Galletas y Bizcochos" 
                  className="w-24 sm:w-32 h-auto object-contain drop-shadow-[0_10px_16px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between pb-1">
                <p className="text-xs text-stone-700 leading-snug">
                  20 recetas irresistibles de galletas crujientes y bizcochos esponjosos, deliciosos y saludables.
                </p>

                {/* Price & Free Tag */}
                <div className="mt-3 pt-2 border-t border-amber-200/60">
                  <p className="text-[9px] font-bold text-stone-400 uppercase tracking-wider">PRECIO ORIGINAL</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-sm line-through text-red-500 font-extrabold">$58,00</span>
                    <span className="bg-[#00c853] text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs uppercase">
                      HOY ES GRATIS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BONUS #2 */}
          <div className="relative rounded-2xl border-2 border-amber-300/90 bg-gradient-to-b from-[#fffdfa] to-[#fff6e6] shadow-md overflow-hidden pt-3">
            {/* Top Right Green Badge */}
            <div className="absolute top-2 right-3 bg-[#00c853] text-white text-[10px] sm:text-xs font-black px-2.5 py-0.5 rounded-full shadow-sm uppercase tracking-wider z-20 border border-emerald-300">
              BONO GRATIS #2
            </div>

            {/* Header Banner Inside Card */}
            <div className="mx-3 mt-4 mb-2 p-2 rounded-xl bg-gradient-to-r from-[#7a2a16] via-[#9e3a1d] to-[#7a2a16] text-amber-100 border border-amber-400/40 shadow-xs pl-28 sm:pl-36">
              <h3 className="font-bebas text-lg sm:text-xl tracking-wide uppercase leading-tight text-amber-200">
                67 JUGOS DETOX
              </h3>
              <p className="text-[10px] text-amber-100/90 font-medium">
                Bebidas saludables
              </p>
            </div>

            {/* Card Body with Overlapping Book */}
            <div className="p-3 pt-0 flex flex-row items-end gap-2 sm:gap-4 relative">
              {/* 3D Book Image Left overlapping the brown header */}
              <div className="shrink-0 -mt-12 sm:-mt-16 z-10 relative">
                <img 
                  src="https://i.ibb.co/WWV4nJmB/suco-detox-png.webp" 
                  alt="67 Sucos Detox" 
                  className="w-24 sm:w-32 h-auto object-contain drop-shadow-[0_10px_16px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between pb-1">
                <p className="text-xs text-stone-700 leading-snug">
                  Restaura tu energía con 67 recetas de jugos detox naturales, refrescantes y nutritivos.
                </p>

                {/* Price & Free Tag */}
                <div className="mt-3 pt-2 border-t border-amber-200/60">
                  <p className="text-[9px] font-bold text-stone-400 uppercase tracking-wider">PRECIO ORIGINAL</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-sm line-through text-red-500 font-extrabold">$58,00</span>
                    <span className="bg-[#00c853] text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs uppercase">
                      HOY ES GRATIS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Big Bright Green Pill CTA */}
        <div className="mt-8">
          <a
            href={CHECKOUT_URL}
            className="block w-full bg-[#00c853] hover:bg-[#00e676] text-white font-bebas text-2xl sm:text-3xl tracking-wider py-4 px-6 rounded-full border-2 border-emerald-300 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-200 active:scale-98 text-center"
          >
            ¡QUIERO TODO POR R$ 9,90!
          </a>

          {/* Security / Guarantee badges */}
          <div className="mt-3 flex items-center justify-center gap-4 text-[11px] text-stone-500 font-medium">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Acceso Inmediato
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Pago Único
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Sin Subscripciones
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

