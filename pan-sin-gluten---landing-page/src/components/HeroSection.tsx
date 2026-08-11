import React from 'react';
import { Lock } from 'lucide-react';
import { CHECKOUT_URL } from '../data/pageData';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-[#171311] text-white overflow-hidden pb-10">
      {/* Background Image with Dark Flour/Bread Overlay */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img
          src="https://i.ibb.co/hFwFjS2b/images.jpg"
          alt="Panes artesanos fondo"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-stone-950/60 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-xl mx-auto px-4 pt-6 flex flex-col items-center text-center">
        
        {/* Main Headline with Serif Font and Warm Brown Box Highlights */}
        <h1 className="font-serif-heading font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-normal leading-[1.2] uppercase mb-5 px-1 drop-shadow-lg">
          ¿QUIÉN DIJO QUE UN
          <br />
          <span className="bg-[#8c3518] text-white px-2 py-0.5 my-1 inline-block shadow-md">
            DIABÉTICO O INTOLERANTE AL GLUTEN
          </span>
          <br />
          NO PUEDE COMER
          <br />
          <span className="bg-[#8c3518] text-white px-2 py-0.5 my-1 inline-block shadow-md">
            PAN DE VERDAD?
          </span>
        </h1>

        {/* Subheadline / Notice with Green Price Badge */}
        <p className="font-poppins text-xs sm:text-sm text-stone-100 leading-relaxed font-bold tracking-tight uppercase max-w-lg mb-6 drop-shadow-[0_2px_5px_rgba(0,0,0,0.9)] px-2">
          DESCUBRE EL MÉTODO DE 15 MINUTOS PARA PREPARAR PANES DORADOS, ELÁSTICOS Y LIBRES DE INFLAMACIÓN DESDE TU PROPIA COCINA. ASEGURA HOY MÁS DE 200 RECETAS PROBADAS MÁS TODOS LOS BONOS EXCLUSIVOS POR SOLO <span className="bg-[#008a38] text-white font-black px-2 py-0.5 rounded shadow-sm inline-block">R$ 9,90</span>.
        </p>

        {/* VSL (Video Sales Letter) Container - 9:16 Vertical Format */}
        <div className="w-full max-w-[340px] sm:max-w-[380px] mx-auto my-1">
          {/* Video Frame - 9:16 Aspect Ratio */}
          <div className="relative aspect-[9/16] w-full bg-[#0c0a09] rounded-xl overflow-hidden shadow-2xl border-2 border-[#d97706]/50">
            <iframe
              className="w-full h-full"
              src="https://player.vimeo.com/video/1216839231?autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479"
              title="VSL Pan Sin Gluten"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Hero CTA Button */}
        <div className="w-full max-w-lg mt-6">
          <a
            href={CHECKOUT_URL}
            className="block w-full bg-gradient-to-r from-[#3b1207] via-[#571908] to-[#3b1207] hover:from-[#571908] hover:to-[#73210a] text-[#fef08a] font-bebas text-2xl sm:text-3xl tracking-wider py-4 px-6 rounded-full border-2 border-[#d97706] shadow-2xl hover:scale-[1.02] transition-all duration-200 active:scale-98 text-center animate-pulse-subtle"
          >
            ¡QUIERO EL LIBRO POR R$ 9,90!
          </a>
          <p className="text-[11px] text-stone-300 mt-2.5 font-semibold tracking-wide flex items-center justify-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            <span>Compra 100% Segura • Acceso Inmediato en tu Email</span>
          </p>
        </div>

      </div>

      {/* Bottom Wave Divider */}
      <div className="w-full overflow-hidden leading-none z-10 relative -mb-1 mt-6">
        <svg
          className="relative block w-full h-8 sm:h-12 text-amber-50/20 fill-current"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.37,130.83,121.31,200,110.8,241.6,104.5,282.78,82.4,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

