import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { HERO_BENEFITS } from '../data/pageData';

export const BookOverview: React.FC = () => {
  const thumbnailImages = [
    { title: "Pan Francés", src: "https://i.ibb.co/4kHz3XN/images.jpg" },
    { title: "Pan Australiano", src: "https://i.ibb.co/Vcs42x87/pao-australiano.webp" },
    { title: "Pan de Semillas", src: "https://i.ibb.co/gM5Ps0vT/pao-com-semente-de-abobora.jpg" },
    { title: "Pan Integral", src: "https://i.ibb.co/DgfX80wc/Pao-integral-caseiro-saudavel.jpg" },
    { title: "Pan Artesanal", src: "https://i.ibb.co/bjKFFX1Q/PMN6-XJCLEFG4-JN2-YQ4-KPWBIWJU.avif" },
    { title: "Pan Multigrano", src: "https://i.ibb.co/bg7SPCfX/P-o-de-Sementes.jpg" },
    { title: "Pan de Molde", src: "https://i.ibb.co/Kjby6mTQ/parece-saudavel-pao.webp" },
    { title: "Pan Casero", src: "https://i.ibb.co/gMhrY2zX/NDXPLORCGZMPBEFUOBMG3-X3-B7-E.avif" },
    { title: "Pan de Yuca", src: "https://i.ibb.co/Kphn8x4B/bread-1281053-640.webp" },
    { title: "Pan Especial", src: "https://i.ibb.co/Pzjt2BPv/884476a8a4af5d1b48bf0dc1a218e4fa.jpg" }
  ];

  return (
    <section className="bg-white py-10 px-4 border-t border-b border-stone-200">
      <div className="max-w-xl mx-auto text-center">
        
        {/* Main Title Image */}
        <div className="mb-4 max-w-xs sm:max-w-md mx-auto">
          <img 
            src="https://i.ibb.co/DHHnwFyK/titulo-1-768x169-png.webp" 
            alt="+ DE 200 PAN POR JEFA TERESA" 
            className="w-full h-auto object-contain mx-auto"
          />
        </div>

        {/* Subheadline */}
        <h3 className="font-bebas text-xl sm:text-2xl text-stone-900 tracking-wide mb-6 bg-amber-100 py-1.5 px-4 rounded-lg inline-block border border-amber-300/60">
          MIRA LAS DELICIAS QUE VAS A APRENDER:
        </h3>

        {/* 10 Thumbnail Automatic Infinite Carousel */}
        <div className="relative w-full overflow-hidden mb-8 bg-stone-100 p-2.5 rounded-xl border border-stone-200 shadow-inner">
          <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-stone-100 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-stone-100 to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee flex gap-3 items-center">
            {[...thumbnailImages, ...thumbnailImages].map((item, index) => (
              <div key={index} className="flex flex-col items-center shrink-0 w-20 sm:w-24 group">
                <div className="aspect-square w-full rounded-lg overflow-hidden border border-stone-300 shadow-sm relative group-hover:scale-105 transition-transform">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[10px] font-bold text-stone-700 mt-1 truncate max-w-full text-center">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Checkmark Bullets List */}
        <div className="bg-stone-50 p-5 rounded-xl border border-stone-200/80 shadow-sm text-left max-w-md mx-auto">
          <div className="flex items-center gap-2 mb-3 text-stone-800 font-bold text-sm border-b pb-2">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>BENEFICIOS DESTACADOS DEL LIBRO:</span>
          </div>
          <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700">
            {HERO_BENEFITS.map((benefit, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="font-medium">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};
