import React from 'react';
import { Clock, Flame, ShieldAlert } from 'lucide-react';
import { RECIPES, CHECKOUT_URL } from '../data/pageData';

export const RecipeCardsSection: React.FC = () => {
  return (
    <section className="bg-stone-50 py-10 px-4">
      <div className="max-w-xl mx-auto text-center">
        
        {/* Section Header */}
        <h2 className="font-bebas text-3xl sm:text-4xl text-[#6e220e] tracking-wide mb-8 uppercase drop-shadow-sm">
          PANES DELICIOSOS (SIN GLUTEN):
        </h2>

        {/* List of 7 Recipe Cards */}
        <div className="space-y-6">
          {RECIPES.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-md hover:shadow-lg transition-shadow text-left"
            >
              {/* Recipe Image */}
              <div className="relative aspect-[16/10] w-full bg-stone-200 overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-red-600 text-white font-bebas text-xs px-2.5 py-1 rounded-md tracking-wider shadow">
                  100% SIN GLUTEN
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5">
                <div className="flex flex-col gap-0.5 mb-2">
                  <h3 className="font-bebas text-xl sm:text-2xl text-[#6e220e] tracking-wide leading-tight">
                    {recipe.id}. {recipe.title}
                  </h3>
                  <span className="text-xs font-bold text-amber-700 font-poppins">
                    {recipe.subtitle}
                  </span>
                </div>

                {/* Specs / Details */}
                <div className="flex flex-wrap items-center gap-3 text-stone-500 text-xs font-medium pt-2 border-t border-stone-100">
                  <div className="flex items-center gap-1 text-stone-600">
                    <Flame className="w-3.5 h-3.5 text-amber-600" />
                    <span>{recipe.calories}</span>
                  </div>
                  <div className="flex items-center gap-1 text-stone-600">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    <span>{recipe.time}</span>
                  </div>
                  <div className="flex items-center gap-1 text-stone-600">
                    <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
                    <span>{recipe.tags.join(" • ")}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transition Text & CTA */}
        <div className="mt-10 p-6 bg-gradient-to-br from-amber-100 via-amber-50 to-amber-100 rounded-2xl border-2 border-amber-300 shadow-sm text-center">
          <p className="font-bebas text-xl sm:text-2xl text-stone-900 tracking-wider mb-4 uppercase">
            Y MÁS DE 195 RECETAS DE PANES...
          </p>

          {/* SUBSTITUIR PELO LINK DO CHECKOUT */}
          <a
            href={CHECKOUT_URL}
            className="block w-full bg-gradient-to-r from-amber-700 via-amber-800 to-amber-700 hover:from-amber-800 hover:to-amber-900 text-amber-100 font-bebas text-xl sm:text-2xl tracking-wider py-3.5 px-6 rounded-full border border-amber-500 shadow-lg hover:shadow-xl transition-all active:scale-98"
          >
            DESCARGAR MI COPIA POR R$ 9,90
          </a>
        </div>

      </div>
    </section>
  );
};
