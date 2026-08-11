import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "¿Necesito experiencia en cocina o utensilios caros?",
    answer: "¡No! Todas las recetas están explicadas paso a paso de forma muy sencilla. No necesitas electrodomésticos especiales ni costosos; la mayoría se preparan a mano, en horno convencional, sartén o freidora de aire."
  },
  {
    question: "¿Las harinas sin gluten son difíciles de conseguir?",
    answer: "En absoluto. La Abuela Tere diseñó estas recetas utilizando harinas e ingredientes sencillos y económicos que encuentras en cualquier supermercado local (como harina de arroz, almidón de maíz o almidón de yuca)."
  },
  {
    question: "¿Los panes sin gluten quedan secos o duros?",
    answer: "¡Ese es el gran diferencial del libro! Gracias a las proporciones exactas y los secretos de hidratación de la Abuela Tere, obtendrás panes suaves, esponjosos y con miga elástica desde el primer intento."
  },
  {
    question: "¿Cómo y cuándo recibiré el libro?",
    answer: "El acceso es inmediato. Tan pronto como se confirme tu pago, recibirás un correo electrónico con el enlace directo para descargar el libro digital en PDF en tu celular, computadora o tablet."
  },
  {
    question: "¿Puedo imprimir el libro de recetas?",
    answer: "¡Sí! El formato PDF está optimizado tanto para lectura en pantallas como para impresión de alta calidad en papel si prefieres tenerlo impreso en tu cocina."
  },
  {
    question: "¿Tiene garantía de satisfacción?",
    answer: "Ofrecemos 7 días de garantía incondicional. Si pruebas las recetas y sientes que no eran para ti, te devolvemos el 100% de tu dinero sin preguntas ni complicaciones."
  },
  {
    question: "¿Es un pago único o hay cobros mensuales?",
    answer: "Es un pago único de solo R$ 9,90. Sin suscripciones ni cargos recurrentes. Tienes acceso de por vida al libro digital."
  }
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-amber-50/40 py-10 px-4 border-t border-amber-200/60">
      <div className="max-w-md sm:max-w-lg mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300/80 mb-2">
            <HelpCircle className="w-4 h-4 text-amber-800" />
            <span className="text-xs font-bold uppercase tracking-wider">RESOLVEMOS TUS DUDAS</span>
          </div>
          <h2 className="font-bebas text-3xl sm:text-4xl text-stone-900 tracking-wide uppercase leading-tight">
            PREGUNTAS FRECUENTES
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-sm mx-auto">
            Todo lo que necesitas saber antes de comenzar tu viaje con la panadería sin gluten.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-stone-200 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-4 py-3.5 text-left flex items-center justify-between gap-3 font-semibold text-stone-900 text-xs sm:text-sm hover:bg-amber-50/30 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="leading-snug">{item.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-amber-800 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-stone-600 border-t border-stone-100 leading-relaxed animate-fadeIn">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
