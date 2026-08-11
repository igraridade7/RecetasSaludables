export function generateStandaloneHtml(): string {
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pan Sin Gluten - Libro de Recetas de la Dra. Teresa González</title>
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@400;500;600;700;800;900&family=Oswald:wght@500;600;700&family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700&family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            bebas: ['Bebas Neue', 'sans-serif'],
            oswald: ['Oswald', 'sans-serif'],
            poppins: ['Poppins', 'sans-serif'],
            montserrat: ['Montserrat', 'sans-serif'],
            serifHeading: ['Playfair Display', 'Georgia', 'serif'],
          }
        }
      }
    }
  </script>
  <style>
    body { background-color: #fffbeb; font-family: 'Poppins', sans-serif; color: #292524; margin: 0; padding: 0; overflow-x: hidden; }
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    @keyframes pulse-subtle { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.02); } }
    .animate-pulse-subtle { animation: pulse-subtle 2s infinite ease-in-out; }
  </style>
</head>
<body class="bg-stone-100 text-stone-800 pb-28">

  <div class="max-w-[480px] mx-auto bg-white shadow-2xl relative min-h-screen">
    
    <!-- TOP BAR -->
    <div class="bg-amber-400 text-stone-900 font-extrabold text-xs py-2 px-3 text-center flex items-center justify-center gap-2 shadow-xs">
      🏆 <span>+12.000 Alumnos Satisfechos en Todo el Mundo</span>
    </div>

    <!-- SEÇÃO: HERO -->
    <section class="relative bg-[#171311] text-white overflow-hidden pt-6 pb-10 px-4 text-center">
      <div class="absolute inset-0 z-0 opacity-40">
        <img src="https://i.ibb.co/hFwFjS2b/images.jpg" alt="Panes artesanos fondo" class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-stone-950/60 mix-blend-multiply"></div>
      </div>

      <div class="relative z-10 max-w-xl mx-auto">
        <h1 class="font-serifHeading font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-normal leading-[1.2] uppercase mb-5 px-1 drop-shadow-lg">
          ¿QUIÉN DIJO QUE UN
          <br />
          <span class="bg-[#8c3518] text-white px-2 py-0.5 my-1 inline-block shadow-md">
            DIABÉTICO O INTOLERANTE AL GLUTEN
          </span>
          <br />
          NO PUEDE COMER
          <br />
          <span class="bg-[#8c3518] text-white px-2 py-0.5 my-1 inline-block shadow-md">
            PAN DE VERDAD?
          </span>
        </h1>

        <p class="font-poppins text-xs sm:text-sm text-stone-100 leading-relaxed font-bold tracking-tight uppercase max-w-lg mb-6 drop-shadow-[0_2px_5px_rgba(0,0,0,0.9)] px-2">
          DESCUBRE EL MÉTODO DE 15 MINUTOS PARA PREPARAR PANES DORADOS, ELÁSTICOS Y LIBRES DE INFLAMACIÓN DESDE TU PROPIA COCINA. ASEGURA HOY MÁS DE 200 RECETAS PROBADAS MÁS TODOS LOS BONOS EXCLUSIVOS POR SOLO <span class="bg-[#008a38] text-white font-black px-2 py-0.5 rounded shadow-sm inline-block">R$ 9,90</span>.
        </p>

        <!-- COLE AQUI O EMBED DA VSL (VTurb / Panda Video / YouTube) -->
        <div class="w-full max-w-[340px] sm:max-w-[380px] mx-auto my-4">
          <div class="relative aspect-[9/16] w-full bg-[#0c0a09] rounded-xl overflow-hidden border-2 border-[#d97706]/50 shadow-2xl">
            <iframe class="w-full h-full" src="https://player.vimeo.com/video/1216839231?autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479" title="VSL Pan Sin Gluten" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" allowfullscreen></iframe>
          </div>
        </div>

        <!-- HERO CTA -->
        <div class="mt-6">
          <!-- SUBSTITUIR PELO LINK DO CHECKOUT -->
          <a href="https://pay.hotmart.com/E107103579N?bid=1786403776500" class="block w-full bg-gradient-to-r from-[#3b1207] via-[#571908] to-[#3b1207] text-[#fef08a] font-bebas text-2xl sm:text-3xl py-4 px-6 rounded-full border-2 border-[#d97706] shadow-2xl text-center">
            ¡QUIERO EL LIBRO POR R$ 9,90!
          </a>
          <p class="text-[11px] text-stone-300 mt-2 font-medium">🔒 Compra 100% Segura • Acceso Inmediato en tu Email</p>
        </div>
      </div>
    </section>

    <!-- SEÇÃO: ESPECIALISTA -->
    <section class="bg-amber-50/30 py-10 px-4 text-center">
      <div class="max-w-xs mx-auto mb-4">
        <img src="https://i.ibb.co/x8G9w2BX/MOCKUP-NOVO-1-694x1024.webp" alt="Dra Teresa" class="w-full h-auto object-contain">
      </div>
      <h2 class="font-bebas text-3xl text-stone-900 tracking-wide">DR. TERESA GONZÁLEZ</h2>
      <p class="text-xs font-semibold text-stone-600 mb-3">Especialista en Nutrición y Panadería Saludable (La Jefa Teresa)</p>
      <div class="bg-white p-4 rounded-xl border border-stone-200 text-xs text-stone-700 text-left">
        "Durante más de 12 años he ayudado a personas celíacas y diabéticas a recuperar el placer de comer pan dorado sin inflamación."
      </div>
    </section>

    <!-- SEÇÃO: + DE 200 PAN -->
    <section class="bg-white py-10 px-4 text-center border-t border-b border-stone-200">
      <div class="max-w-xs sm:max-w-md mx-auto mb-4">
        <img src="https://i.ibb.co/DHHnwFyK/titulo-1-768x169-png.webp" alt="+ DE 200 PAN POR JEFA TERESA" class="w-full h-auto object-contain mx-auto">
      </div>
      <p class="font-bebas text-xl text-stone-800 bg-amber-100 py-1 px-4 rounded inline-block mb-6">MIRA LAS DELICIAS QUE VAS A APRENDER:</p>

      <div class="relative w-full overflow-hidden mb-6 bg-stone-100 p-2.5 rounded-xl border border-stone-200 shadow-inner">
        <div class="animate-marquee flex gap-3 items-center">
          <div class="flex flex-col items-center shrink-0 w-20"><img src="https://i.ibb.co/4kHz3XN/images.jpg" class="rounded-lg aspect-square object-cover w-full border border-stone-300"><span class="text-[10px] font-bold text-stone-700 mt-1">Pan Francés</span></div>
          <div class="flex flex-col items-center shrink-0 w-20"><img src="https://i.ibb.co/Vcs42x87/pao-australiano.webp" class="rounded-lg aspect-square object-cover w-full border border-stone-300"><span class="text-[10px] font-bold text-stone-700 mt-1">Pan Australiano</span></div>
          <div class="flex flex-col items-center shrink-0 w-20"><img src="https://i.ibb.co/gM5Ps0vT/pao-com-semente-de-abobora.jpg" class="rounded-lg aspect-square object-cover w-full border border-stone-300"><span class="text-[10px] font-bold text-stone-700 mt-1">Pan de Semillas</span></div>
          <div class="flex flex-col items-center shrink-0 w-20"><img src="https://i.ibb.co/DgfX80wc/Pao-integral-caseiro-saudavel.jpg" class="rounded-lg aspect-square object-cover w-full border border-stone-300"><span class="text-[10px] font-bold text-stone-700 mt-1">Pan Integral</span></div>
          <div class="flex flex-col items-center shrink-0 w-20"><img src="https://i.ibb.co/bjKFFX1Q/PMN6-XJCLEFG4-JN2-YQ4-KPWBIWJU.avif" class="rounded-lg aspect-square object-cover w-full border border-stone-300"><span class="text-[10px] font-bold text-stone-700 mt-1">Pan Artesanal</span></div>
          <div class="flex flex-col items-center shrink-0 w-20"><img src="https://i.ibb.co/bg7SPCfX/P-o-de-Sementes.jpg" class="rounded-lg aspect-square object-cover w-full border border-stone-300"><span class="text-[10px] font-bold text-stone-700 mt-1">Pan Multigrano</span></div>
          <div class="flex flex-col items-center shrink-0 w-20"><img src="https://i.ibb.co/Kjby6mTQ/parece-saudavel-pao.webp" class="rounded-lg aspect-square object-cover w-full border border-stone-300"><span class="text-[10px] font-bold text-stone-700 mt-1">Pan de Molde</span></div>
          <div class="flex flex-col items-center shrink-0 w-20"><img src="https://i.ibb.co/gMhrY2zX/NDXPLORCGZMPBEFUOBMG3-X3-B7-E.avif" class="rounded-lg aspect-square object-cover w-full border border-stone-300"><span class="text-[10px] font-bold text-stone-700 mt-1">Pan Casero</span></div>
          <div class="flex flex-col items-center shrink-0 w-20"><img src="https://i.ibb.co/Kphn8x4B/bread-1281053-640.webp" class="rounded-lg aspect-square object-cover w-full border border-stone-300"><span class="text-[10px] font-bold text-stone-700 mt-1">Pan de Yuca</span></div>
          <div class="flex flex-col items-center shrink-0 w-20"><img src="https://i.ibb.co/Pzjt2BPv/884476a8a4af5d1b48bf0dc1a218e4fa.jpg" class="rounded-lg aspect-square object-cover w-full border border-stone-300"><span class="text-[10px] font-bold text-stone-700 mt-1">Pan Especial</span></div>
          <!-- Repeat for smooth infinite loop -->
          <div class="flex flex-col items-center shrink-0 w-20"><img src="https://i.ibb.co/4kHz3XN/images.jpg" class="rounded-lg aspect-square object-cover w-full border border-stone-300"><span class="text-[10px] font-bold text-stone-700 mt-1">Pan Francés</span></div>
          <div class="flex flex-col items-center shrink-0 w-20"><img src="https://i.ibb.co/Vcs42x87/pao-australiano.webp" class="rounded-lg aspect-square object-cover w-full border border-stone-300"><span class="text-[10px] font-bold text-stone-700 mt-1">Pan Australiano</span></div>
          <div class="flex flex-col items-center shrink-0 w-20"><img src="https://i.ibb.co/gM5Ps0vT/pao-com-semente-de-abobora.jpg" class="rounded-lg aspect-square object-cover w-full border border-stone-300"><span class="text-[10px] font-bold text-stone-700 mt-1">Pan de Semillas</span></div>
          <div class="flex flex-col items-center shrink-0 w-20"><img src="https://i.ibb.co/DgfX80wc/Pao-integral-caseiro-saudavel.jpg" class="rounded-lg aspect-square object-cover w-full border border-stone-300"><span class="text-[10px] font-bold text-stone-700 mt-1">Pan Integral</span></div>
          <div class="flex flex-col items-center shrink-0 w-20"><img src="https://i.ibb.co/bjKFFX1Q/PMN6-XJCLEFG4-JN2-YQ4-KPWBIWJU.avif" class="rounded-lg aspect-square object-cover w-full border border-stone-300"><span class="text-[10px] font-bold text-stone-700 mt-1">Pan Artesanal</span></div>
          <div class="flex flex-col items-center shrink-0 w-20"><img src="https://i.ibb.co/bg7SPCfX/P-o-de-Sementes.jpg" class="rounded-lg aspect-square object-cover w-full border border-stone-300"><span class="text-[10px] font-bold text-stone-700 mt-1">Pan Multigrano</span></div>
          <div class="flex flex-col items-center shrink-0 w-20"><img src="https://i.ibb.co/Kjby6mTQ/parece-saudavel-pao.webp" class="rounded-lg aspect-square object-cover w-full border border-stone-300"><span class="text-[10px] font-bold text-stone-700 mt-1">Pan de Molde</span></div>
          <div class="flex flex-col items-center shrink-0 w-20"><img src="https://i.ibb.co/gMhrY2zX/NDXPLORCGZMPBEFUOBMG3-X3-B7-E.avif" class="rounded-lg aspect-square object-cover w-full border border-stone-300"><span class="text-[10px] font-bold text-stone-700 mt-1">Pan Casero</span></div>
          <div class="flex flex-col items-center shrink-0 w-20"><img src="https://i.ibb.co/Kphn8x4B/bread-1281053-640.webp" class="rounded-lg aspect-square object-cover w-full border border-stone-300"><span class="text-[10px] font-bold text-stone-700 mt-1">Pan de Yuca</span></div>
          <div class="flex flex-col items-center shrink-0 w-20"><img src="https://i.ibb.co/Pzjt2BPv/884476a8a4af5d1b48bf0dc1a218e4fa.jpg" class="rounded-lg aspect-square object-cover w-full border border-stone-300"><span class="text-[10px] font-bold text-stone-700 mt-1">Pan Especial</span></div>
        </div>
      </div>
    </section>

    <!-- SEÇÃO: 7 CARDS DE RECEITA -->
    <section class="bg-stone-50 py-10 px-4 text-center">
      <h2 class="font-bebas text-3xl text-[#6e220e] tracking-wide mb-6 uppercase">PANES DELICIOSOS (SIN GLUTEN):</h2>
      <div class="space-y-4">
        <!-- Card 1 -->
        <div class="bg-white rounded-xl overflow-hidden border border-stone-200 text-left shadow-sm">
          <img src="https://i.ibb.co/SXXf683z/baguettes-768x432-jpg.webp" class="w-full aspect-video object-cover">
          <div class="p-4">
            <h3 class="font-bebas text-xl text-[#6e220e]">1. PAN FRANCÉS / BAGUETTE</h3>
            <p class="text-xs font-bold text-amber-700">(SIN GLUTEN)</p>
            <p class="text-[11px] text-stone-500 mt-2">Calorías: ~100 kcal | Tiempo: 20 min | Sin azúcar, gluten y lactosa</p>
          </div>
        </div>
        <!-- Card 2 -->
        <div class="bg-white rounded-xl overflow-hidden border border-stone-200 text-left shadow-sm">
          <img src="https://i.ibb.co/QvQD3Zgv/pao-de-forma-de-liquidificador-768x576-jpeg.webp" class="w-full aspect-video object-cover">
          <div class="p-4">
            <h3 class="font-bebas text-xl text-[#6e220e]">2. PAN DE MOLDE (DE CAJA)</h3>
            <p class="text-xs font-bold text-amber-700">(SIN GLUTEN)</p>
            <p class="text-[11px] text-stone-500 mt-2">Calorías: ~120 kcal | Tiempo: 25 min | Sin azúcar, gluten y lactosa</p>
          </div>
        </div>
        <!-- Card 3 -->
        <div class="bg-white rounded-xl overflow-hidden border border-stone-200 text-left shadow-sm">
          <img src="https://i.ibb.co/mVk2ddcN/Captura-de-tela-2026-08-09-211506.png" class="w-full aspect-video object-cover">
          <div class="p-4">
            <h3 class="font-bebas text-xl text-[#6e220e]">3. PAN DE AVENA Y CHÍA</h3>
            <p class="text-xs font-bold text-amber-700">(SIN GLUTEN)</p>
            <p class="text-[11px] text-stone-500 mt-2">Calorías: ~110 kcal | Tiempo: 15 min | Sin azúcar, gluten y lactosa</p>
          </div>
        </div>
        <!-- Card 4 -->
        <div class="bg-white rounded-xl overflow-hidden border border-stone-200 text-left shadow-sm">
          <img src="https://i.ibb.co/FLqnfYjt/Captura-de-tela-2026-08-09-210914.png" class="w-full aspect-video object-cover">
          <div class="p-4">
            <h3 class="font-bebas text-xl text-[#6e220e]">4. PAN DE HARINA INTEGRAL</h3>
            <p class="text-xs font-bold text-amber-700">(SIN GLUTEN)</p>
            <p class="text-[11px] text-stone-500 mt-2">Calorías: ~90 kcal | Tiempo: 15 min | Sin azúcar, gluten y lactosa</p>
          </div>
        </div>
        <!-- Card 5 -->
        <div class="bg-white rounded-xl overflow-hidden border border-stone-200 text-left shadow-sm">
          <img src="https://i.ibb.co/B2KLN0QH/images.jpg" class="w-full aspect-video object-cover">
          <div class="p-4">
            <h3 class="font-bebas text-xl text-[#6e220e]">5. PAN RICO EN FIBRA</h3>
            <p class="text-xs font-bold text-amber-700">(SIN GLUTEN)</p>
            <p class="text-[11px] text-stone-500 mt-2">Calorías: ~105 kcal | Tiempo: 20 min | Sin azúcar, gluten y lactosa</p>
          </div>
        </div>
        <!-- Card 6 -->
        <div class="bg-white rounded-xl overflow-hidden border border-stone-200 text-left shadow-sm">
          <img src="https://i.ibb.co/Wp7YWfDq/pan-dulce-casero-768x511-jpg.webp" class="w-full aspect-video object-cover">
          <div class="p-4">
            <h3 class="font-bebas text-xl text-[#6e220e]">6. PAN DULCE / PAN DE PASCUA</h3>
            <p class="text-xs font-bold text-amber-700">(SIN GLUTEN)</p>
            <p class="text-[11px] text-stone-500 mt-2">Calorías: ~130 kcal | Tiempo: 30 min | Sin azúcar, gluten y lactosa</p>
          </div>
        </div>
      </div>

      <!-- TRANSITION CTA -->
      <div class="mt-8 p-5 bg-amber-100 rounded-xl border border-amber-300">
        <p class="font-bebas text-2xl text-stone-900 uppercase mb-3">Y MÁS DE 195 RECETAS DE PANES...</p>
        <!-- SUBSTITUIR PELO LINK DO CHECKOUT -->
        <a href="https://pay.hotmart.com/E107103579N?bid=1786403776500" class="block w-full bg-amber-800 text-amber-100 font-bebas text-xl py-3 px-6 rounded-full border border-amber-500 shadow">
          DESCARGAR MI COPIA POR R$ 9,90
        </a>
      </div>
    </section>

    <!-- SEÇÃO: STACK DE BÔNUS -->
    <section class="bg-gradient-to-b from-amber-50/60 via-white to-amber-50/40 py-10 px-3 text-center">
      <div class="max-w-md mx-auto">
        <h2 class="font-bebas text-3xl text-[#6e220e] uppercase leading-none font-black">¡CONSIGUE TU LIBRO DE PANADERÍA HOY MISMO!</h2>
        <h3 class="font-bebas text-2xl text-[#6e220e] uppercase leading-none mt-1">RECIBIRÁS TODO ESTO</h3>
        <span class="bg-[#00c853] text-white font-black text-xl px-5 py-1 rounded-full shadow inline-block uppercase my-2 border border-emerald-400">GRATIS +$116</span>
        
        <div class="my-4 flex justify-center w-full">
          <img src="https://i.ibb.co/Kz7TBYj3/7-bonus.webp" alt="7 Bonos Exclusivos" class="h-12 w-auto object-contain max-w-xs drop-shadow">
        </div>

        <!-- STACK CARDS -->
        <div class="space-y-5 my-6 text-left">
          
          <!-- BONUS #1 -->
          <div class="relative rounded-2xl border-2 border-amber-300 bg-gradient-to-b from-[#fffdfa] to-[#fff6e6] shadow overflow-hidden pt-3">
            <div class="absolute top-2 right-3 bg-[#00c853] text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow uppercase border border-emerald-300">
              BONO GRATIS #1
            </div>
            <div class="mx-3 mt-4 mb-2 p-2 rounded-xl bg-gradient-to-r from-[#7a2a16] via-[#9e3a1d] to-[#7a2a16] text-amber-100 border border-amber-400/40 pl-28">
              <h3 class="font-bebas text-lg text-amber-200 uppercase leading-tight">GALLETAS Y BIZCOCHOS</h3>
              <p class="text-[10px] text-amber-100/90 font-medium">Sin gluten ni lactosa</p>
            </div>
            <div class="p-3 pt-0 flex gap-3 items-end relative">
              <img src="https://i.ibb.co/C3TnFRz2/2-2-269x300.webp" class="w-24 h-32 object-contain filter drop-shadow-lg -mt-12 z-10 relative">
              <div class="flex-1 pb-1">
                <p class="text-xs text-stone-700">20 recetas irresistibles de galletas y bizcochos esponjosos, deliciosos y saludables.</p>
                <div class="mt-2 pt-2 border-t border-amber-200">
                  <p class="text-[9px] font-bold text-stone-400">PRECIO ORIGINAL</p>
                  <span class="text-sm line-through text-red-500 font-extrabold">$58,00</span>
                  <span class="bg-[#00c853] text-white text-[10px] font-black px-2 py-0.5 rounded uppercase ml-2">HOY ES GRATIS</span>
                </div>
              </div>
            </div>
          </div>

          <!-- BONUS #2 -->
          <div class="relative rounded-2xl border-2 border-amber-300 bg-gradient-to-b from-[#fffdfa] to-[#fff6e6] shadow overflow-hidden pt-3">
            <div class="absolute top-2 right-3 bg-[#00c853] text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow uppercase border border-emerald-300">
              BONO GRATIS #2
            </div>
            <div class="mx-3 mt-4 mb-2 p-2 rounded-xl bg-gradient-to-r from-[#7a2a16] via-[#9e3a1d] to-[#7a2a16] text-amber-100 border border-amber-400/40 pl-28">
              <h3 class="font-bebas text-lg text-amber-200 uppercase leading-tight">67 JUGOS DETOX</h3>
              <p class="text-[10px] text-amber-100/90 font-medium">Bebidas saludables</p>
            </div>
            <div class="p-3 pt-0 flex gap-3 items-end relative">
              <img src="https://i.ibb.co/WWV4nJmB/suco-detox-png.webp" class="w-24 h-32 object-contain filter drop-shadow-lg -mt-12 z-10 relative">
              <div class="flex-1 pb-1">
                <p class="text-xs text-stone-700">Restaura tu energía con 67 recetas de jugos detox naturales y nutritivos.</p>
                <div class="mt-2 pt-2 border-t border-amber-200">
                  <p class="text-[9px] font-bold text-stone-400">PRECIO ORIGINAL</p>
                  <span class="text-sm line-through text-red-500 font-extrabold">$58,00</span>
                  <span class="bg-[#00c853] text-white text-[10px] font-black px-2 py-0.5 rounded uppercase ml-2">HOY ES GRATIS</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- MAIN CTA -->
        <!-- SUBSTITUIR PELO LINK DO CHECKOUT -->
        <a href="https://pay.hotmart.com/E107103579N?bid=1786403776500" class="block w-full bg-[#00c853] text-white font-bebas text-2xl py-4 px-6 rounded-full border border-emerald-300 shadow-xl font-bold">
          ¡QUIERO TODO POR R$ 9,90!
        </a>
      </div>
    </section>

    <!-- SEÇÃO: DEPOIMENTOS -->
    <section class="bg-[#b85c37] text-white py-10 px-4 text-center">
      <h2 class="font-bebas text-3xl text-amber-100 uppercase mb-4">MIRA LO QUE DICE QUIÉN COMPRÓ:</h2>
      
      <!-- VSL VERTICAL 9:16 -->
      <div class="mb-8 flex flex-col items-center">
        <div class="w-full max-w-[300px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-400/80 bg-black">
          <iframe src="https://player.vimeo.com/video/1216865830?badge=0&autopause=0&player_id=0&app_id=58479" title="VSL Vertical 9:16" class="w-full h-full" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" allowfullscreen></iframe>
        </div>
      </div>

      <!-- CARROSSEL DE DEPOIMENTOS DE IMAGEM -->
      <div class="relative w-full max-w-[320px] mx-auto mb-8">
        <div class="p-1.5 rounded-3xl bg-gradient-to-b from-amber-300 via-amber-500 to-amber-700 shadow-2xl">
          <div class="relative overflow-hidden rounded-[20px] bg-stone-950 aspect-[768/1011]">
            <img id="testimonial-img" src="https://i.ibb.co/LXSJNCRW/1-1-768x1011-png.webp" alt="Depoimento" class="w-full h-full object-cover transition-opacity duration-500">
          </div>
        </div>
        <script>
          (function() {
            const images = [
              'https://i.ibb.co/LXSJNCRW/1-1-768x1011-png.webp',
              'https://i.ibb.co/pvV2NKdK/2-1-768x1011-png.webp',
              'https://i.ibb.co/mKFL29P/3-1-768x1011-png.webp',
              'https://i.ibb.co/WppX2WjK/4-768x1011-png.webp',
              'https://i.ibb.co/5z03jhp/5-1-768x1011-png.webp',
              'https://i.ibb.co/fzcrb9nj/DEPOIMENTO6-png.webp'
            ];
            let idx = 0;
            const imgEl = document.getElementById('testimonial-img');
            if (imgEl) {
              setInterval(() => {
                idx = (idx + 1) % images.length;
                imgEl.src = images[idx];
              }, 3000);
            }
          })();
        </script>
      </div>

      <div class="bg-amber-950/80 p-4 rounded-xl border border-amber-400/40 text-center my-6 flex flex-col items-center">
        <span class="font-bebas text-4xl text-amber-300">3.200+</span>
        <p class="font-bebas text-xs text-amber-100 uppercase">ALUMNAS CERTIFICADAS EN PANADERÍA SALUDABLE</p>
        <span class="text-[10px] text-amber-200/80 uppercase tracking-widest font-semibold mt-1 mb-3">CERTIFICADO DE PANADERÍA SALUDABLE INCLUIDO</span>
        <img src="https://chefangelateresa.site/pgv-esp/images/sfsafsads.webp" alt="Certificado" class="w-full max-w-xs rounded-lg shadow-lg border border-amber-400/30">
      </div>
    </section>

    <!-- SEÇÃO: PREGUNTAS FRECUENTES (FAQ ACCORDION) -->
    <section class="bg-amber-50/40 py-10 px-4 border-t border-amber-200/60">
      <div class="max-w-md sm:max-w-lg mx-auto">
        <div class="text-center mb-8">
          <span class="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300/80 text-xs font-bold uppercase tracking-wider mb-2">
            RESOLVEMOS TUS DUDAS
          </span>
          <h2 class="font-bebas text-3xl sm:text-4xl text-stone-900 tracking-wide uppercase leading-tight">
            PREGUNTAS FRECUENTES
          </h2>
          <p class="text-xs sm:text-sm text-stone-600 mt-1 max-w-sm mx-auto">
            Todo lo que necesitas saber antes de comenzar tu viaje con la panadería sin gluten.
          </p>
        </div>

        <div class="space-y-3" id="faq-accordion-container">
          <div class="faq-item bg-white rounded-xl border border-stone-200 shadow-xs overflow-hidden">
            <button type="button" class="faq-btn w-full px-4 py-3.5 text-left flex items-center justify-between gap-3 font-semibold text-stone-900 text-xs sm:text-sm hover:bg-amber-50/30 transition-colors focus:outline-none">
              <span class="leading-snug">¿Necesito experiencia en cocina o utensilios caros?</span>
              <span class="faq-arrow text-amber-800 text-xs transition-transform duration-200">▼</span>
            </button>
            <div class="faq-content px-4 pb-4 pt-1 text-xs sm:text-sm text-stone-600 border-t border-stone-100 leading-relaxed">
              ¡No! Todas las recetas están explicadas paso a paso de forma muy sencilla. No necesitas electrodomésticos especiales ni costosos; la mayoría se preparan a mano, en horno convencional, sartén o freidora de aire.
            </div>
          </div>

          <div class="faq-item bg-white rounded-xl border border-stone-200 shadow-xs overflow-hidden">
            <button type="button" class="faq-btn w-full px-4 py-3.5 text-left flex items-center justify-between gap-3 font-semibold text-stone-900 text-xs sm:text-sm hover:bg-amber-50/30 transition-colors focus:outline-none">
              <span class="leading-snug">¿Las harinas sin gluten son difíciles de conseguir?</span>
              <span class="faq-arrow text-amber-800 text-xs transition-transform duration-200">▼</span>
            </button>
            <div class="faq-content hidden px-4 pb-4 pt-1 text-xs sm:text-sm text-stone-600 border-t border-stone-100 leading-relaxed">
              En absoluto. La Abuela Tere diseñó estas recetas utilizando harinas e ingredientes sencillos y económicos que encuentras en cualquier supermercado local (como harina de arroz, almidón de maíz o almidón de yuca).
            </div>
          </div>

          <div class="faq-item bg-white rounded-xl border border-stone-200 shadow-xs overflow-hidden">
            <button type="button" class="faq-btn w-full px-4 py-3.5 text-left flex items-center justify-between gap-3 font-semibold text-stone-900 text-xs sm:text-sm hover:bg-amber-50/30 transition-colors focus:outline-none">
              <span class="leading-snug">¿Los panes sin gluten quedan secos o duros?</span>
              <span class="faq-arrow text-amber-800 text-xs transition-transform duration-200">▼</span>
            </button>
            <div class="faq-content hidden px-4 pb-4 pt-1 text-xs sm:text-sm text-stone-600 border-t border-stone-100 leading-relaxed">
              ¡Ese es el gran diferencial del libro! Gracias a las proporciones exactas y los secretos de hidratación de la Abuela Tere, obtendrás panes suaves, esponjosos y con miga elástica desde el primer intento.
            </div>
          </div>

          <div class="faq-item bg-white rounded-xl border border-stone-200 shadow-xs overflow-hidden">
            <button type="button" class="faq-btn w-full px-4 py-3.5 text-left flex items-center justify-between gap-3 font-semibold text-stone-900 text-xs sm:text-sm hover:bg-amber-50/30 transition-colors focus:outline-none">
              <span class="leading-snug">¿Cómo y cuándo recibiré el libro?</span>
              <span class="faq-arrow text-amber-800 text-xs transition-transform duration-200">▼</span>
            </button>
            <div class="faq-content hidden px-4 pb-4 pt-1 text-xs sm:text-sm text-stone-600 border-t border-stone-100 leading-relaxed">
              El acceso es inmediato. Tan pronto como se confirme tu pago, recibirás un correo electrónico con el enlace directo para descargar el libro digital en PDF en tu celular, computadora o tablet.
            </div>
          </div>

          <div class="faq-item bg-white rounded-xl border border-stone-200 shadow-xs overflow-hidden">
            <button type="button" class="faq-btn w-full px-4 py-3.5 text-left flex items-center justify-between gap-3 font-semibold text-stone-900 text-xs sm:text-sm hover:bg-amber-50/30 transition-colors focus:outline-none">
              <span class="leading-snug">¿Puedo imprimir el libro de recetas?</span>
              <span class="faq-arrow text-amber-800 text-xs transition-transform duration-200">▼</span>
            </button>
            <div class="faq-content hidden px-4 pb-4 pt-1 text-xs sm:text-sm text-stone-600 border-t border-stone-100 leading-relaxed">
              ¡Sí! El formato PDF está optimizado tanto para lectura en pantallas como para impresión de alta calidad en papel si prefieres tenerlo impreso en tu cocina.
            </div>
          </div>

          <div class="faq-item bg-white rounded-xl border border-stone-200 shadow-xs overflow-hidden">
            <button type="button" class="faq-btn w-full px-4 py-3.5 text-left flex items-center justify-between gap-3 font-semibold text-stone-900 text-xs sm:text-sm hover:bg-amber-50/30 transition-colors focus:outline-none">
              <span class="leading-snug">¿Tiene garantía de satisfacción?</span>
              <span class="faq-arrow text-amber-800 text-xs transition-transform duration-200">▼</span>
            </button>
            <div class="faq-content hidden px-4 pb-4 pt-1 text-xs sm:text-sm text-stone-600 border-t border-stone-100 leading-relaxed">
              Ofrecemos 7 días de garantía incondicional. Si pruebas las recetas y sientes que no eran para ti, te devolvemos el 100% de tu dinero sin preguntas ni complicaciones.
            </div>
          </div>

          <div class="faq-item bg-white rounded-xl border border-stone-200 shadow-xs overflow-hidden">
            <button type="button" class="faq-btn w-full px-4 py-3.5 text-left flex items-center justify-between gap-3 font-semibold text-stone-900 text-xs sm:text-sm hover:bg-amber-50/30 transition-colors focus:outline-none">
              <span class="leading-snug">¿Es un pago único o hay cobros mensuales?</span>
              <span class="faq-arrow text-amber-800 text-xs transition-transform duration-200">▼</span>
            </button>
            <div class="faq-content hidden px-4 pb-4 pt-1 text-xs sm:text-sm text-stone-600 border-t border-stone-100 leading-relaxed">
              Es un pago único de solo R$ 9,90. Sin suscripciones ni cargos recurrentes. Tienes acceso de por vida al libro digital.
            </div>
          </div>
        </div>
      </div>

      <script>
        (function() {
          const faqBtns = document.querySelectorAll('#faq-accordion-container .faq-btn');
          faqBtns.forEach((btn) => {
            btn.addEventListener('click', () => {
              const item = btn.closest('.faq-item');
              const content = item.querySelector('.faq-content');
              const arrow = item.querySelector('.faq-arrow');
              const isHidden = content.classList.contains('hidden');
              
              document.querySelectorAll('#faq-accordion-container .faq-content').forEach((c) => c.classList.add('hidden'));
              document.querySelectorAll('#faq-accordion-container .faq-arrow').forEach((a) => a.style.transform = 'rotate(0deg)');

              if (isHidden) {
                content.classList.remove('hidden');
                if (arrow) arrow.style.transform = 'rotate(180deg)';
              }
            });
          });
        })();
      </script>
    </section>

    <!-- OFERTA ESPECIAL CON PRECIO Y RELOJ DE URGENCIA -->
    <section class="bg-[#b85c37] text-stone-900 py-10 px-4">
      <div class="max-w-md mx-auto">
        <div class="bg-gradient-to-b from-white via-amber-50/30 to-white rounded-3xl p-5 shadow-2xl border-4 border-amber-400/80 text-center flex flex-col items-center">
          
          <span class="inline-block bg-amber-100 text-amber-900 border border-amber-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-1">⭐ BEST SELLER</span>
          <span class="text-[11px] text-amber-700 font-semibold tracking-wider uppercase mb-4">+3.200 DOWNLOADS</span>

          <img src="https://i.ibb.co/x8G9w2BX/MOCKUP-NOVO-1-694x1024.webp" alt="Libro de Pan" class="w-full max-w-[260px] mx-auto my-2 drop-shadow-xl">

          <h3 class="font-bebas text-2xl text-amber-950 uppercase mt-3 mb-1">LIBRO DE 200 PAN DE LA JEFA TERESA ®</h3>
          <!-- BOTÓN E ACCORDEÓN DE +2 LIBROS GRATIS -->
          <div class="mb-3 w-full flex flex-col items-center">
            <button id="toggle-bonuses-btn" type="button" class="inline-flex items-center gap-1.5 bg-[#00c853] hover:bg-[#00e676] text-white font-black text-xs px-4 py-1.5 rounded-full shadow-md uppercase tracking-wide border border-emerald-400 cursor-pointer transition-all">
              <span>🎁 +2 LIBROS GRATIS</span>
              <span id="accordion-arrow" class="inline-block transition-transform duration-300">▼</span>
            </button>

            <!-- CONTENIDO ACORDEÓN -->
            <div id="bonuses-accordion-content" class="w-full overflow-hidden transition-all duration-300 max-h-0 opacity-0">
              <div class="bg-amber-100/90 border-2 border-amber-300 rounded-2xl p-3 text-left space-y-2.5 shadow-md mt-3">
                <p class="text-[11px] font-bold text-amber-950 uppercase tracking-wider text-center border-b border-amber-300/80 pb-1">
                  ✨ 2 LIBROS REGALO DE HOY:
                </p>

                <div class="flex items-center gap-2.5 bg-white p-2 rounded-xl border border-amber-200">
                  <img src="https://i.ibb.co/C3TnFRz2/2-2-269x300.webp" alt="Galletas y Bizcochos" class="w-12 h-14 object-cover rounded-lg border border-stone-200 shrink-0">
                  <div class="flex-1 min-w-0">
                    <span class="text-[9px] font-extrabold text-amber-800 uppercase tracking-wider block">BONO #1 GRATIS</span>
                    <h4 class="font-bold text-xs text-stone-900 leading-tight truncate">GALLETAS Y BIZCOCHOS SIN GLUTEN</h4>
                    <div class="flex items-center gap-2 mt-0.5">
                      <span class="text-[11px] text-stone-400 line-through font-semibold">$58.00</span>
                      <span class="text-xs font-black text-[#00c853]">$0,00 (GRATIS)</span>
                    </div>
                  </div>
                </div>

                <div class="flex items-center gap-2.5 bg-white p-2 rounded-xl border border-amber-200">
                  <img src="https://i.ibb.co/WWV4nJmB/suco-detox-png.webp" alt="Sucos Detox & Shakes" class="w-12 h-14 object-cover rounded-lg border border-stone-200 shrink-0">
                  <div class="flex-1 min-w-0">
                    <span class="text-[9px] font-extrabold text-amber-800 uppercase tracking-wider block">BONO #2 GRATIS</span>
                    <h4 class="font-bold text-xs text-stone-900 leading-tight truncate">GT SUCOS DETOX & SHAKES</h4>
                    <div class="flex items-center gap-2 mt-0.5">
                      <span class="text-[11px] text-stone-400 line-through font-semibold">$58.00</span>
                      <span class="text-xs font-black text-[#00c853]">$0,00 (GRATIS)</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div class="my-2">
            <p class="text-stone-400 line-through text-base font-bold">DE $97</p>
            <p class="text-xs text-stone-500 font-medium uppercase tracking-wider italic">Por solo</p>
            <div class="font-black text-5xl text-[#00c853] tracking-tight my-1">$9,90</div>
          </div>

          <!-- SUBSTITUIR PELO LINK DO CHECKOUT -->
          <a href="https://pay.hotmart.com/E107103579N?bid=1786403776500" class="w-full bg-[#00c853] text-white font-bebas text-2xl py-4 px-4 rounded-2xl border-2 border-emerald-300 shadow-xl text-center my-3 block uppercase">
            👉 SÍ, LO QUIERO POR $9,90 👈
          </a>

          <!-- BOX DE URGENCIA -->
          <div class="w-full bg-rose-50 border-2 border-rose-300 rounded-2xl p-4 my-3 text-center">
            <div class="text-rose-700 font-extrabold text-xs uppercase tracking-wide">
              ⚡ OFERTA VÁLIDA SOLO HOY (<span id="today-date-text"></span>)
            </div>
            <p class="text-[11px] text-rose-900 font-medium mt-1 mb-2">Tu lugar está reservado por solo 15 minutos. Esta oferta termina en:</p>

            <div class="flex items-center justify-center gap-2 my-2">
              <div class="bg-[#501306] text-amber-300 font-bebas text-3xl px-3.5 py-1 rounded-xl shadow-md min-w-[55px]">
                <span id="offer-min">15</span>
                <span class="block text-[8px] font-sans text-amber-200/80 -mt-1 tracking-wider uppercase">MINUTOS</span>
              </div>
              <span class="font-bebas text-3xl text-rose-700 font-bold">:</span>
              <div class="bg-[#501306] text-amber-300 font-bebas text-3xl px-3.5 py-1 rounded-xl shadow-md min-w-[55px]">
                <span id="offer-sec">00</span>
                <span class="block text-[8px] font-sans text-amber-200/80 -mt-1 tracking-wider uppercase">SEGUNDOS</span>
              </div>
            </div>

            <div class="text-[10px] text-rose-800 font-semibold mt-2 pt-2 border-t border-rose-200">
              👁️ 32 personas mirando • ⚡ ¡Últimos 5 cupos!
            </div>
          </div>

          <script>
            (function() {
              // Accordion Toggle for Bonuses
              const btn = document.getElementById('toggle-bonuses-btn');
              const content = document.getElementById('bonuses-accordion-content');
              const arrow = document.getElementById('accordion-arrow');
              if (btn && content) {
                btn.addEventListener('click', function() {
                  const isOpen = content.classList.contains('max-h-96');
                  if (isOpen) {
                    content.classList.remove('max-h-96', 'opacity-100');
                    content.classList.add('max-h-0', 'opacity-0');
                    if (arrow) arrow.style.transform = 'rotate(0deg)';
                  } else {
                    content.classList.remove('max-h-0', 'opacity-0');
                    content.classList.add('max-h-96', 'opacity-100');
                    if (arrow) arrow.style.transform = 'rotate(180deg)';
                  }
                });
              }

              // Dynamic Date
              const dateEl = document.getElementById('today-date-text');
              if (dateEl) {
                const now = new Date();
                const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
                dateEl.textContent = now.getDate() + ' de ' + months[now.getMonth()] + ' de ' + now.getFullYear();
              }

              // Timer 15 min
              let secLeft = 15 * 60;
              const minEl = document.getElementById('offer-min');
              const secEl = document.getElementById('offer-sec');
              if (minEl && secEl) {
                setInterval(() => {
                  if (secLeft <= 0) secLeft = 15 * 60;
                  secLeft--;
                  const m = Math.floor(secLeft / 60);
                  const s = secLeft % 60;
                  minEl.textContent = m < 10 ? '0' + m : m;
                  secEl.textContent = s < 10 ? '0' + s : s;
                }, 1000);
              }
            })();
          </script>

        </div>
      </div>
    </section>

    <!-- SEÇÃO: GARANTÍA & PÚBLICO OBJETIVO -->
    <section class="bg-white py-12 px-4 text-center border-t border-stone-200">
      <div class="max-w-xl mx-auto">
        <!-- BLOQUE DE GARANTÍA 7 DÍAS -->
        <div class="flex flex-col items-center mb-10 text-center">
          <img src="https://i.ibb.co/NdpC3sf0/images.jpg" alt="Garantía de 7 días" class="w-36 sm:w-44 h-auto object-contain mx-auto mb-4 rounded-xl">

          <h3 class="font-serif font-black text-2xl sm:text-3xl text-stone-900 tracking-tight leading-snug max-w-lg mx-auto">
            PRUÉBALO SIN RIESGO — <span class="text-[#b85c37] font-extrabold">Garantía incondicional de 7 días.</span>
          </h3>

          <p class="text-xs sm:text-sm text-stone-600 font-serif leading-relaxed max-w-md mx-auto mt-2.5">
            Pruébalo sin riesgo por 7 días. Si no sientes que estas recetas están transformando tu alimentación y la de tu familia, te devolvemos cada centavo. <strong class="text-stone-800">Sin preguntas, sin complicaciones, sin estrés.</strong>
          </p>
        </div>

        <!-- TÍTULO DE PÚBLICO OBJETIVO -->
        <div class="mb-6 pt-4 border-t border-stone-200">
          <span class="text-xs font-bold uppercase tracking-widest text-red-600 bg-red-100 px-3 py-1 rounded-full border border-red-200">
            ¿ES ESTE LIBRO PARA TI?
          </span>
          <h2 class="font-bebas text-3xl sm:text-4xl text-stone-900 tracking-wide mt-2 uppercase">
            PARA PERSONAS QUE ENFRENTAN:
          </h2>
        </div>

        <!-- LISTA DE OBJETIVOS -->
        <div class="space-y-3 text-left mb-10">
          <div class="flex items-start gap-3 bg-amber-50/50 p-3.5 rounded-xl border border-amber-200/60">
            <span class="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">⚠️</span>
            <p class="text-xs sm:text-sm text-stone-800 font-medium leading-snug">Personas diagnosticadas con celiaquía o sensibilidad al gluten.</p>
          </div>
          <div class="flex items-start gap-3 bg-amber-50/50 p-3.5 rounded-xl border border-amber-200/60">
            <span class="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">⚠️</span>
            <p class="text-xs sm:text-sm text-stone-800 font-medium leading-snug">Cualquier persona que sufra de inflamación abdominal, gases o pesadez tras comer pan común.</p>
          </div>
          <div class="flex items-start gap-3 bg-amber-50/50 p-3.5 rounded-xl border border-amber-200/60">
            <span class="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">⚠️</span>
            <p class="text-xs sm:text-sm text-stone-800 font-medium leading-snug">Madres y padres que buscan opciones saludables y sabrosas para la merienda de sus hijos.</p>
          </div>
          <div class="flex items-start gap-3 bg-amber-50/50 p-3.5 rounded-xl border border-amber-200/60">
            <span class="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">⚠️</span>
            <p class="text-xs sm:text-sm text-stone-800 font-medium leading-snug">Amantes del buen pan que extrañan el aroma y sabor del pan recién horneado.</p>
          </div>
        </div>
      </div>
    </section>

  </div>

</body>
</html>`;
}
