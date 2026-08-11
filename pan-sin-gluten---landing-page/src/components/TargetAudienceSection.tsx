import React from 'react';
import { AlertCircle } from 'lucide-react';
import { TARGET_AUDIENCE_OBJECTIONS } from '../data/pageData';

export const TargetAudienceSection: React.FC = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-xl mx-auto text-center">
        
        {/* Guarantee Badge & Header Block (Placed above "¿ES ESTE LIBRO PARA TI?") */}
        <div className="flex flex-col items-center mb-10 text-center">
          <img
            src="https://i.ibb.co/NdpC3sf0/images.jpg"
            alt="Garantía de 7 días"
            className="w-36 sm:w-44 h-auto object-contain mx-auto mb-4 rounded-xl shadow-xs"
            referrerPolicy="no-referrer"
          />

          <h3 className="font-serif font-black text-2xl sm:text-3xl text-stone-900 tracking-tight leading-snug max-w-lg mx-auto">
            PRUÉBALO SIN RIESGO — <span className="text-[#b85c37] font-extrabold">Garantía incondicional de 7 días.</span>
          </h3>

          <p className="text-xs sm:text-sm text-stone-600 font-serif leading-relaxed max-w-md mx-auto mt-2.5">
            Pruébalo sin riesgo por 7 días. Si no sientes que estas recetas están transformando tu alimentación y la de tu familia, te devolvemos cada centavo. <strong className="text-stone-800">Sin preguntas, sin complicaciones, sin estrés.</strong>
          </p>
        </div>

        {/* Title */}
        <div className="mb-6 pt-4 border-t border-stone-200">
          <span className="text-xs font-bold uppercase tracking-widest text-red-600 bg-red-100 px-3 py-1 rounded-full border border-red-200">
            ¿ES ESTE LIBRO PARA TI?
          </span>
          <h2 className="font-bebas text-3xl sm:text-4xl text-stone-900 tracking-wide mt-2 uppercase">
            PARA PERSONAS QUE ENFRENTAN:
          </h2>
        </div>

        {/* Objections List */}
        <div className="space-y-3 text-left">
          {TARGET_AUDIENCE_OBJECTIONS.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-amber-50/50 p-3.5 rounded-xl border border-amber-200/60 shadow-xs"
            >
              <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                <AlertCircle className="w-3.5 h-3.5" />
              </div>
              <p className="text-xs sm:text-sm text-stone-800 font-medium leading-snug">
                {item}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
