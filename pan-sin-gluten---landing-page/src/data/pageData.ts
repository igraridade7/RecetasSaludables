import { Recipe, Category, Bonus, Testimonial } from '../types';

export const CHECKOUT_URL = "https://pay.hotmart.com/E107103579N?bid=1786403776500";

export const HERO_BENEFITS = [
  "200 panes, suaves y esponjosos",
  "Textura perfecta, sin gluten",
  "Sin harinas especiales",
  "Listos en 15 minutos",
  "Aprobadas por toda la familia",
  "Paso a paso de la preparación",
  "50% más barato que el tradicional"
];

export const RECIPES: Recipe[] = [
  {
    id: 1,
    title: "PAN FRANCÉS / BAGUETTE",
    subtitle: "(SIN GLUTEN)",
    image: "https://i.ibb.co/SXXf683z/baguettes-768x432-jpg.webp",
    calories: "Calorías: ~100 kcal",
    time: "Tiempo: 20 minutos",
    tags: ["Sin azúcar", "Sin gluten", "Sin lactosa"]
  },
  {
    id: 2,
    title: "PAN DE MOLDE (DE CAJA)",
    subtitle: "(SIN GLUTEN)",
    image: "https://i.ibb.co/QvQD3Zgv/pao-de-forma-de-liquidificador-768x576-jpeg.webp",
    calories: "Calorías: ~120 kcal",
    time: "Tiempo: 25 minutos",
    tags: ["Sin azúcar", "Sin gluten", "Sin lactosa"]
  },
  {
    id: 3,
    title: "PAN DE AVENA Y CHÍA",
    subtitle: "(SIN GLUTEN)",
    image: "https://i.ibb.co/mVk2ddcN/Captura-de-tela-2026-08-09-211506.png",
    calories: "Calorías: ~110 kcal",
    time: "Tiempo: 15 minutos",
    tags: ["Sin azúcar", "Sin gluten", "Sin lactosa"]
  },
  {
    id: 4,
    title: "PAN DE HARINA INTEGRAL",
    subtitle: "(SIN GLUTEN)",
    image: "https://i.ibb.co/FLqnfYjt/Captura-de-tela-2026-08-09-210914.png",
    calories: "Calorías: ~90 kcal",
    time: "Tiempo: 15 minutos",
    tags: ["Sin azúcar", "Sin gluten", "Sin lactosa"]
  },
  {
    id: 5,
    title: "PAN RICO EN FIBRA",
    subtitle: "(SIN GLUTEN)",
    image: "https://i.ibb.co/B2KLN0QH/images.jpg",
    calories: "Calorías: ~105 kcal",
    time: "Tiempo: 20 minutos",
    tags: ["Sin azúcar", "Sin gluten", "Sin lactosa"]
  },
  {
    id: 6,
    title: "PAN DULCE / PAN DE PASCUA",
    subtitle: "(SIN GLUTEN)",
    image: "https://i.ibb.co/Wp7YWfDq/pan-dulce-casero-768x511-jpg.webp",
    calories: "Calorías: ~130 kcal",
    time: "Tiempo: 30 minutos",
    tags: ["Sin azúcar", "Sin gluten", "Sin lactosa"]
  }
];

export const CATEGORIES: Category[] = [
  {
    id: "dia-a-dia",
    title: "PANES DEL DÍA A DÍA",
    images: [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=300&q=80"
    ]
  },
  {
    id: "rapidos-economicos",
    title: "PANES RÁPIDOS Y ECONÓMICOS",
    images: [
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=300&q=80"
    ]
  },
  {
    id: "integrales-funcionales",
    title: "PANES INTEGRALES Y FUNCIONALES",
    images: [
      "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=300&q=80"
    ]
  },
  {
    id: "dulces",
    title: "PANES DULCES",
    images: [
      "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=300&q=80"
    ]
  },
  {
    id: "rellenos-especiales",
    title: "PANES RELLENOS Y ESPECIALES",
    images: [
      "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=300&q=80"
    ]
  },
  {
    id: "veganos-sin-lactosa",
    title: "PANES VEGANOS Y SIN LACTOSA",
    images: [
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=300&q=80"
    ]
  },
  {
    id: "pizzas-sin-gluten",
    title: "PIZZAS SIN GLUTEN",
    images: [
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=300&q=80"
    ]
  }
];

export const BONUSES: Bonus[] = [
  {
    id: 1,
    title: "GALLETAS Y BIZCOCHOS SIN GLUTEN",
    subtitle: "20 recetas irresistibles de galletas crujientes y bizcochos esponjosos para la hora del café o té.",
    originalPrice: "$58.00",
    image: "https://i.ibb.co/C3TnFRz2/2-2-269x300.webp"
  },
  {
    id: 2,
    title: "GT SUCOS DETOX & SHAKES",
    subtitle: "Bebidas desinflamatorias para restaurar tu flora intestinal y aumentar tu energía diaria.",
    originalPrice: "$58.00",
    image: "https://i.ibb.co/WWV4nJmB/suco-detox-png.webp"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Carmen L. Mendoza",
    location: "Bogotá, Colombia",
    text: "¡Ayer hice el pan de molde sin gluten y quedó espectacular! Mi hijo celíaco lloró de la emoción porque volvió a comer un sándwich suave. Dios bendiga a la Dra. Teresa.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=400&q=80",
    date: "Hace 2 horas"
  },
  {
    id: 2,
    name: "Dra. Patricia S. Valdés",
    location: "Santiago, Chile",
    text: "Como médica endocrinóloga, recomiendo 100% este libro a todos mis pacientes con diabetes o sensibilidad al gluten. Los picos de glucemia bajan drásticamente y los panes son riquísimos.",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    date: "Ayer"
  },
  {
    id: 3,
    name: "Roberto Gómez N.",
    location: "Buenos Aires, Argentina",
    text: "Pensé que hacer pan sin gluten requería harinas carísimas y raras. Con las mezclas caseras de la Jefa Teresa me sale a la mitad de precio y quedan crujientes como de panadería.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    date: "Hace 3 días"
  }
];

export const TARGET_AUDIENCE_OBJECTIONS = [
  "Personas diagnosticadas con celiaquía o sensibilidad al gluten no celíaca.",
  "Diabéticos que buscan disfrutar del pan sin alterar sus niveles de glucosa en sangre.",
  "Personas con intolerancia a la lactosa o alergias alimentarias múltiples.",
  "Familias que desean una alimentación más saludable y desinflamatoria.",
  "Quienes están cansados de pagar fortunas por panes sin gluten secos y desmoronables.",
  "Cualquiera que desee preparar sus propios panes dorados y crujientes en solo 15 minutos."
];
