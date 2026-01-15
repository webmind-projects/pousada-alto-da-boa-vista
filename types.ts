export interface Chalet {
  id: number;
  name: string;
  description: string;
  capacity: string;
  image: string;
  features: string[];
  price?: string;
  originalPrice?: string;
}

export interface Amenity {
  id: number;
  title: string;
  description: string;
  iconName: string; // Mapping string to Lucide icon
}

export interface Review {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
}