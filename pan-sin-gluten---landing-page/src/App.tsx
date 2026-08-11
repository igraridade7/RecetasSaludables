import React from 'react';
import { TopBar } from './components/TopBar';
import { HeroSection } from './components/HeroSection';
import { AuthorSection } from './components/AuthorSection';
import { BookOverview } from './components/BookOverview';
import { RecipeCardsSection } from './components/RecipeCardsSection';
import { BonusStackSection } from './components/BonusStackSection';
import { VerticalVSLSection } from './components/VerticalVSLSection';
import { TornPaperDivider } from './components/TornPaperDivider';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { OfferSection } from './components/OfferSection';
import { TargetAudienceSection } from './components/TargetAudienceSection';
import { StickyFooter } from './components/StickyFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-900 text-stone-800 antialiased relative font-poppins selection:bg-amber-400 selection:text-stone-900">
      
      {/* Main Container - Centered Mobile Layout (~480px) like reference print */}
      <main className="mx-auto bg-white shadow-2xl relative transition-all duration-300 max-w-[480px]">
        
        {/* 1. Top Notice Bar */}
        <TopBar />

        {/* 2. Hero Section (Hero Photo, Headlines, VSL, 2-Column Card, CTA) */}
        <HeroSection />

        {/* 3. Author Section (Dr. Teresa González) */}
        <AuthorSection />

        {/* 4. Book Overview ("+ de 200 Pan") */}
        <BookOverview />

        {/* 5. 7 Recipe Cards ("PANES DELICIOSOS (SIN GLUTEN)") */}
        <RecipeCardsSection />

        {/* 6. Bonus Stack Section ("¡CONSIGUE TU LIBRO DE PANADERÍA HOY MISMO!") */}
        <BonusStackSection />

        {/* 7. Torn Paper Divider */}
        <TornPaperDivider />

        {/* 8. Testimonials Section ("MIRA LO QUE DICE QUIÉN COMPRÓ" + 9:16 Video VSL) */}
        <TestimonialsSection />

        {/* 9. Accordion FAQ Section */}
        <FaqSection />

        {/* 10. Offer Section (Price $9,90 + Dynamic Urgency Countdown) */}
        <OfferSection />

        {/* 10. Target Audience / Objections / Guarantee ("PARA PERSONAS QUE ENFRENTAN") */}
        <TargetAudienceSection />

        {/* Footer info */}
        <footer className="bg-stone-900 text-stone-400 py-6 px-4 text-center text-xs space-y-2 border-t border-stone-800">
          <p className="font-bebas text-sm text-stone-300 tracking-wider">
            LIBRO DE PANADERÍA SIN GLUTEN - LA ABUELA TERE
          </p>
          <p className="text-[10px] text-stone-500 leading-normal">
            Este producto no reemplaza el consejo médico profesional. Consulte a su médico para dudas nutricionales específicas.
          </p>
          <p className="text-[10px] text-stone-600">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </footer>

      </main>

    </div>
  );
}
