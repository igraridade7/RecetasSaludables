import React, { useState, useEffect } from 'react';
import { Award } from 'lucide-react';
import { CHECKOUT_URL } from '../data/pageData';

const TESTIMONIAL_IMAGES = [
  'https://i.ibb.co/LXSJNCRW/1-1-768x1011-png.webp',
  'https://i.ibb.co/pvV2NKdK/2-1-768x1011-png.webp',
  'https://i.ibb.co/mKFL29P/3-1-768x1011-png.webp',
  'https://i.ibb.co/WppX2WjK/4-768x1011-png.webp',
  'https://i.ibb.co/5z03jhp/5-1-768x1011-png.webp',
  'https://i.ibb.co/fzcrb9nj/DEPOIMENTO6-png.webp',
];

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic slideshow cycling every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIAL_IMAGES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#b85c37] text-white py-12 px-4 relative overflow-hidden">
      <div className="max-w-xl mx-auto text-center">
        
        {/* Title */}
        <h2 className="font-bebas text-3xl sm:text-4xl tracking-wide uppercase mb-6 text-amber-100 drop-shadow-sm">
          MIRA LO QUE DICE QUIÉN COMPRÓ:
        </h2>

        {/* 9:16 Vertical VSL Video */}
        <div className="mb-8 flex flex-col items-center">
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

        {/* Image Testimonials Auto Carousel with Premium Gold Gradient Border */}
        <div className="relative w-full max-w-[320px] sm:max-w-[360px] mx-auto mb-8">
          <div className="p-1.5 rounded-3xl bg-gradient-to-b from-amber-300 via-amber-500 to-amber-700 shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(245,158,11,0.3)]">
            <div className="relative overflow-hidden rounded-[20px] bg-stone-950 aspect-[768/1011]">
              <img
                key={currentIndex}
                src={TESTIMONIAL_IMAGES[currentIndex]}
                alt={`Depoimento ${currentIndex + 1}`}
                className="w-full h-full object-cover transition-opacity duration-500 ease-in-out animate-fadeIn"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {TESTIMONIAL_IMAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ir al depoimento ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-8 bg-amber-300 shadow-md shadow-amber-400/60'
                    : 'w-2.5 bg-amber-200/40 hover:bg-amber-200/70'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-8">
          <a
            href={CHECKOUT_URL}
            className="block w-full bg-stone-900 hover:bg-stone-950 text-amber-300 font-bebas text-2xl sm:text-3xl tracking-wider py-4 px-6 rounded-full border-2 border-amber-400/80 shadow-2xl hover:scale-[1.02] transition-all active:scale-98 text-center"
          >
            DESCARGAR MI COPIA POR R$ 9,90
          </a>
        </div>

        {/* Big Stat & Certificate Block */}
        <div className="mt-10 bg-amber-950/60 p-5 rounded-2xl border border-amber-400/30 text-center flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-amber-400 text-stone-950 flex items-center justify-center mb-2 shadow-lg">
            <Award className="w-7 h-7" />
          </div>
          <div className="font-bebas text-4xl sm:text-5xl text-amber-300 tracking-wider">
            3.200+
          </div>
          <p className="font-bebas text-sm sm:text-base text-amber-100 tracking-wide uppercase mt-1">
            ALUMNAS CERTIFICADAS EN PANADERÍA SALUDABLE
          </p>
          <span className="text-[10px] text-amber-200/80 uppercase tracking-widest font-semibold mt-1 mb-4">
            CERTIFICADO DE PANADERÍA SALUDABLE INCLUIDO
          </span>
          <img
            src="https://chefangelateresa.site/pgv-esp/images/sfsafsads.webp"
            alt="Certificado de Panadería Saludable"
            className="w-full max-w-xs sm:max-w-sm rounded-xl shadow-xl border border-amber-400/40 object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

      </div>

      {/* Bottom Jagged Edge */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none translate-y-1">
        <svg
          className="relative block w-full h-6 text-white fill-current"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200 0L0 0 0 120 1200 0Z"></path>
        </svg>
      </div>
    </section>
  );
};
