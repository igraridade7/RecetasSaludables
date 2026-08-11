import React from 'react';
import { Award, HeartPulse, BookOpen } from 'lucide-react';

export const AuthorSection: React.FC = () => {
  return (
    <section className="bg-amber-50/30 py-10 px-4">
      <div className="max-w-xl mx-auto text-center flex flex-col items-center">
        
        {/* Author Portrait with Book & Seal */}
        <div className="relative mb-6 max-w-xs sm:max-w-sm mx-auto">
          <img
            src="https://i.ibb.co/x8G9w2BX/MOCKUP-NOVO-1-694x1024.webp"
            alt="Dra. Teresa González - La Jefa Teresa"
            className="w-full h-auto mx-auto object-contain drop-shadow-md"
          />

          {/* Book Badge Overlay */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-700 to-amber-900 text-amber-100 px-4 py-2 rounded-full border-2 border-amber-400 shadow-lg flex items-center gap-2 whitespace-nowrap">
            <BookOpen className="w-4 h-4 text-amber-300" />
            <span className="font-bebas tracking-wide text-sm sm:text-base">
              LIBRO DE PAN POR LA JEFA TERESA
            </span>
          </div>

          {/* Golden Seal Badge */}
          <div className="absolute -top-2 -right-2 bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-300 text-stone-950 p-3 rounded-full border-2 border-white shadow-xl flex flex-col items-center justify-center w-16 h-16 transform rotate-12">
            <Award className="w-5 h-5 text-stone-950" />
            <span className="text-[9px] font-black leading-tight text-center uppercase">
              100% PROBADO
            </span>
          </div>
        </div>

        {/* Name and Title */}
        <div className="mt-4">
          <span className="text-amber-800 font-bold text-xs uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
            AUTORA Y ESPECIALISTA
          </span>
          <h2 className="font-bebas text-3xl sm:text-4xl text-stone-900 mt-2 tracking-wide">
            DR. TERESA GONZÁLEZ
          </h2>
          <p className="font-poppins text-xs sm:text-sm text-stone-600 font-semibold mb-4">
            Especialista en Nutrición Clínica y Panadería Saludable (La Jefa Teresa)
          </p>
        </div>

        {/* Bio Card */}
        <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-md text-left text-xs sm:text-sm text-stone-700 leading-relaxed space-y-3">
          <p className="flex items-start gap-2">
            <HeartPulse className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
            <span>
              "Durante más de 12 años he ayudado a personas celíacas, diabéticas e intolerantes al gluten a recuperar el placer de comer pan crujiente y dorado sin poner en riesgo su salud ni sufrir inflamación intestinal."
            </span>
          </p>
          <p className="text-stone-600">
            Desarrollé el método de mezclas caseras sin harinas comerciales costosas, garantizando recetas deliciosas que se preparan en solo 15 minutos en cualquier cocina.
          </p>
        </div>

      </div>
    </section>
  );
};
