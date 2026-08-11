import React, { useState, useEffect } from 'react';
import { Star, ShieldCheck, Lock, Zap, Eye, ChevronDown, Gift } from 'lucide-react';
import { CHECKOUT_URL, BONUSES } from '../data/pageData';

export const OfferSection: React.FC = () => {
  // Countdown timer starting at 15 minutes (900 seconds)
  const [timeLeft, setTimeLeft] = useState(15 * 60);
  const [showBonuses, setShowBonuses] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 15 * 60));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');

  // Format today's date dynamically in Spanish
  const getTodayFormattedDate = () => {
    const today = new Date();
    const day = today.getDate();
    const months = [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    const month = months[today.getMonth()];
    const year = today.getFullYear();
    return `${day} de ${month} de ${year}`;
  };

  const todayDateStr = getTodayFormattedDate();

  return (
    <section className="bg-[#b85c37] text-stone-900 py-10 px-4 relative overflow-hidden">
      <div className="max-w-md mx-auto">
        
        {/* Main Offer Card Container */}
        <div className="bg-gradient-to-b from-white via-amber-50/30 to-white rounded-3xl p-5 sm:p-6 shadow-2xl border-4 border-amber-400/80 text-center flex flex-col items-center relative">
          
          {/* Top Badge: Best Seller */}
          <div className="inline-flex items-center gap-1.5 bg-amber-100/80 text-amber-900 border border-amber-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-1">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>BEST SELLER</span>
          </div>
          <span className="text-[11px] text-amber-700/80 font-semibold tracking-wider uppercase mb-4">
            +3.200 DOWNLOADS
          </span>

          {/* Book Mockup Cover Image */}
          <div className="relative w-full max-w-[260px] sm:max-w-[280px] my-2">
            <img
              src="https://i.ibb.co/x8G9w2BX/MOCKUP-NOVO-1-694x1024.webp"
              alt="Libro de Pan por La Jefa Teresa"
              className="w-full h-auto object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Title */}
          <h3 className="font-bebas text-2xl sm:text-3xl text-amber-950 uppercase tracking-tight leading-tight mt-3 mb-1">
            LIBRO DE 200 PAN DE LA JEFA TERESA ®
          </h3>

          {/* Bonus pill with accordion toggle */}
          <div className="mb-3 w-full flex flex-col items-center">
            <button
              type="button"
              onClick={() => setShowBonuses(!showBonuses)}
              className="inline-flex items-center gap-1.5 bg-[#00c853] hover:bg-[#00e676] active:scale-95 text-white font-black text-xs sm:text-sm px-4 py-1.5 rounded-full shadow-md uppercase tracking-wide border border-emerald-400 cursor-pointer transition-all duration-200"
            >
              <Gift className="w-4 h-4 text-amber-200 animate-bounce" />
              <span>🎁 +2 LIBROS GRATIS</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showBonuses ? 'rotate-180' : ''}`} />
            </button>

            {/* Accordion Content */}
            <div
              className={`w-full overflow-hidden transition-all duration-300 ease-in-out ${
                showBonuses ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="bg-amber-100/90 border-2 border-amber-300 rounded-2xl p-3 text-left space-y-2.5 shadow-md">
                <p className="text-[11px] font-bold text-amber-950 uppercase tracking-wider text-center border-b border-amber-300/80 pb-1">
                  ✨ 2 LIBROS REGALO DE HOY:
                </p>

                {BONUSES.map((bonus, idx) => (
                  <div key={bonus.id} className="flex items-center gap-2.5 bg-white p-2 rounded-xl border border-amber-200 shadow-xs">
                    <img
                      src={bonus.image}
                      alt={bonus.title}
                      className="w-12 h-14 object-cover rounded-lg border border-stone-200 shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex-1 min-w-0">
                      <span className="text-[9px] font-extrabold text-amber-800 uppercase tracking-wider block">
                        BONO #{idx + 1} GRATIS
                      </span>
                      <h4 className="font-bold text-xs text-stone-900 leading-tight truncate">
                        {bonus.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[11px] text-stone-400 line-through font-semibold">
                          {bonus.originalPrice}
                        </span>
                        <span className="text-xs font-black text-[#00c853]">
                          $0,00 (GRATIS)
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing Box */}
          <div className="my-2">
            <p className="text-stone-400 line-through text-base sm:text-lg font-bold">
              DE $97
            </p>
            <p className="text-xs text-stone-500 font-medium uppercase tracking-wider italic">
              Por solo
            </p>
            <div className="font-black text-5xl sm:text-6xl text-[#00c853] tracking-tight my-1 drop-shadow-sm">
              $9,90
            </div>
          </div>

          {/* Big Green Buy Button */}
          <a
            href={CHECKOUT_URL}
            className="w-full bg-[#00c853] hover:bg-[#00e676] text-white font-bebas text-2xl sm:text-3xl tracking-wider py-4 px-4 rounded-2xl border-2 border-emerald-300 shadow-xl hover:scale-[1.02] active:scale-98 transition-all text-center my-3 block uppercase"
          >
            👉 SÍ, LO QUIERO POR $9,90 👈
          </a>

          {/* Dynamic Urgency / Countdown Box */}
          <div className="w-full bg-rose-50/90 border-2 border-rose-300 rounded-2xl p-4 my-3 text-center shadow-inner">
            <div className="flex items-center justify-center gap-1.5 text-rose-700 font-extrabold text-xs sm:text-sm uppercase tracking-wide">
              <Zap className="w-4 h-4 fill-rose-600 text-rose-600 animate-pulse" />
              <span>OFERTA VÁLIDA SOLO HOY ({todayDateStr})</span>
            </div>
            
            <p className="text-[11px] sm:text-xs text-rose-900/80 font-medium mt-1 mb-2">
              Tu lugar está reservado por solo 15 minutos. Esta oferta termina en:
            </p>

            {/* Countdown Blocks */}
            <div className="flex items-center justify-center gap-2 my-2">
              <div className="bg-[#501306] text-amber-300 font-bebas text-3xl sm:text-4xl px-3.5 py-1 rounded-xl shadow-md min-w-[55px] border border-amber-500/30">
                {minutes}
                <span className="block text-[8px] font-poppins text-amber-200/80 -mt-1 tracking-wider uppercase">MINUTOS</span>
              </div>
              <span className="font-bebas text-3xl text-rose-700 font-bold">:</span>
              <div className="bg-[#501306] text-amber-300 font-bebas text-3xl sm:text-4xl px-3.5 py-1 rounded-xl shadow-md min-w-[55px] border border-amber-500/30">
                {seconds}
                <span className="block text-[8px] font-poppins text-amber-200/80 -mt-1 tracking-wider uppercase">SEGUNDOS</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 text-[10px] sm:text-[11px] text-rose-800 font-semibold mt-2 pt-2 border-t border-rose-200/60">
              <span className="flex items-center gap-1">
                <Eye className="w-3.5 h-3.5 text-rose-600" /> 32 personas mirando
              </span>
              <span>•</span>
              <span className="text-rose-700 font-bold">⚡ ¡Últimos 5 cupos!</span>
            </div>
          </div>

          {/* Security & Guarantee Badges */}
          <div className="w-full space-y-2 mt-2">
            <div className="grid grid-cols-2 gap-2 text-[11px] font-bold text-stone-700">
              <div className="bg-stone-50 border border-stone-200 rounded-xl p-2.5 flex items-center gap-2 justify-center shadow-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <div className="text-left leading-tight">
                  <p className="text-[10px] uppercase font-black text-stone-800">SITIO SEGURO</p>
                  <p className="text-[8px] text-stone-500 font-normal">SSL ENCRIPTADO</p>
                </div>
              </div>

              <div className="bg-stone-50 border border-stone-200 rounded-xl p-2.5 flex items-center gap-2 justify-center shadow-xs">
                <Lock className="w-4 h-4 text-blue-600 shrink-0" />
                <div className="text-left leading-tight">
                  <p className="text-[10px] uppercase font-black text-stone-800">COMPRA SEGURA</p>
                  <p className="text-[8px] text-stone-500 font-normal">PAGO PROTEGIDO</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
