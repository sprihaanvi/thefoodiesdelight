export const WHATSAPP_NUMBER = '917903867381';
export const INSTAGRAM_URL = 'https://www.instagram.com/thefoodies_delight/';
export const FACEBOOK_URL = 'https://www.facebook.com/thefoodies_delight/';
export const GOOGLE_MAPS_URL = 'https://maps.google.com/?q=The+Foodies+Delight+Ranchi';
export const BAKERY_EMAIL = 'thefoodiesdelight@gmail.com';
export const PHONE_DISPLAY = '+91 79038 67381';

export const BAKERY_INFO = {
  name: 'The Foodies Delight',
  tagline: 'Baked with Love, Served with Joy',
  founded: 2020,
  city: 'Ranchi',
  state: 'Jharkhand',
  description:
    'A home bakery born from a lifelong passion for baking. Every creation is handcrafted with the finest ingredients and a whole lot of love.',
};

export function getWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}
