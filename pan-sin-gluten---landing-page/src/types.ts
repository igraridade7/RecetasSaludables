export interface Recipe {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  calories: string;
  time: string;
  tags: string[];
}

export interface Category {
  id: string;
  title: string;
  images: string[];
}

export interface Bonus {
  id: number;
  title: string;
  subtitle: string;
  originalPrice: string;
  isSpecial?: boolean;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  avatar: string;
  rating: number;
  image?: string;
  date: string;
}
