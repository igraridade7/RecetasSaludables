import React from 'react';
import { Layers, ChevronRight } from 'lucide-react';
import { CATEGORIES, CHECKOUT_URL } from '../data/pageData';

export const CategoryCarousels: React.FC = () => {
  return (
    <section className="bg-white py-10 px-4 border-t border-stone-200">
      <div className="max-w-xl mx-auto text-center">
        
        {/* Title */}
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
            ORGANIZACIÓN PERFECTA
          </span>
          <h2 className="font-bebas text-3xl sm:text-4xl text-stone-900 tracking-wide mt-2 uppercase">
            RECETAS DIVIDIDAS EN CATEGORÍAS:
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Encuentra de inmediato lo que deseas cocinar en cada momento del día
          </p>
        </div>

        {/* 7 Category Strip Rows */}
        <div className="space-y-5 text-left">
          {CATEGORIES.map((category) => (
            <div key={category.id} className="bg-stone-50 p-3 rounded-xl border border-stone-200 shadow-sm">
              <div className="flex items-center justify-between mb-2 px-1">
                <div className="flex items-center gap-1.5 font-bebas text-base text-stone-900 tracking-wide">
                  <Layers className="w-4 h-4 text-amber-700" />
                  <span>{category.title}</span>
                </div>
                <span className="text-[10px] text-stone-500 font-medium flex items-center">
                  Desliza <ChevronRight className="w-3 h-3" />
                </span>
              </div>

              {/* Horizontal Scroll Thumbnail List */}
              <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 pt-1">
                {category.images.map((imgSrc, idx) => (
                  <div
                    key={idx}
                    className="aspect-square w-20 sm:w-24 shrink-0 rounded-lg overflow-hidden border border-stone-300 shadow-xs bg-stone-200"
                  >
                    <img
                      src={imgSrc}
                      alt={`${category.title} item ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-8">
          {/* SUBSTITUIR PELO LINK DO CHECKOUT */}
          <a
            href={CHECKOUT_URL}
            className="block w-full bg-gradient-to-r from-[#0275d8] to-[#025aa5] hover:from-[#025aa5] hover:to-[#01447e] text-white font-bebas text-xl sm:text-2xl tracking-wider py-3.5 px-6 rounded-full border border-blue-400 shadow-lg hover:shadow-xl transition-all active:scale-98"
          >
            ¡QUIERO LAS RECETAS POR R$ 9,90!
          </a>
        </div>

      </div>
    </section>
  );
};
