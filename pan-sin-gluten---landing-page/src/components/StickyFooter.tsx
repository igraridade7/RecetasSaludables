import React, { useState, useEffect } from 'react';
import { ShoppingCart, ShieldCheck, Timer } from 'lucide-react';
import { CHECKOUT_URL } from '../data/pageData';

export const StickyFooter: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 46 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 15, seconds: 0 };
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-stone-900/95 backdrop-blur-md border-t-2 border-amber-500 shadow-2xl py-2 px-3 text-white">
      <div className="max-w-xl mx-auto flex items-center justify-between gap-2">
        
        {/* Product Thumbnail & Price info */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-amber-100 p-0.5 border border-amber-400 overflow-hidden relative shrink-0">
            <img
              src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=150&q=80"
              alt="Libro Pan Sin Gluten"
              className="w-full h-full object-cover rounded"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] sm:text-xs font-bold text-amber-300 truncate max-w-[120px] sm:max-w-none">
              Libro 200 Panes
            </span>
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] line-through text-stone-400 font-bold">
                R$ 97
              </span>
              <span className="text-sm sm:text-base font-black text-emerald-400 font-bebas tracking-wide">
                R$ 9,90
              </span>
            </div>
            <div className="flex items-center gap-1 text-[9px] text-amber-200">
              <Timer className="w-2.5 h-2.5 animate-pulse text-amber-400" />
              <span>
                Oferta expira en {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex-1 max-w-[200px] sm:max-w-xs">
          {/* SUBSTITUIR PELO LINK DO CHECKOUT */}
          <a
            href={CHECKOUT_URL}
            className="block w-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500 hover:from-emerald-400 hover:to-emerald-300 text-stone-950 font-bebas text-base sm:text-xl py-2.5 px-3 rounded-full border border-emerald-200 shadow-lg text-center truncate tracking-wide active:scale-95 transition-transform"
          >
            ¡QUIERO POR R$ 9,90!
          </a>
        </div>

      </div>

      {/* Payment Badges Strip */}
      <div className="max-w-xl mx-auto mt-1 flex items-center justify-center gap-2 text-[9px] text-stone-400 border-t border-stone-800/80 pt-1">
        <span className="flex items-center gap-0.5 text-stone-300">
          <ShieldCheck className="w-3 h-3 text-emerald-400" /> Checkout Seguro
        </span>
        <span>•</span>
        <span>💳 Visa / MasterCard / Pix / MercadoPago</span>
      </div>
    </div>
  );
};
