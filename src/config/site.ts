export interface SiteSeoConfig {
  title: string;
  description: string;
}

export interface SiteOgConfig {
  image: string;
}

export interface SiteConfig {
  brandName: string;
  tagline: string;
  locationText: string;
  phoneNumber: string;
  telLink: string;
  whatsAppNumber: string;
  waLink: string;
  facebookUrl?: string;
  googleMapsUrl: string;
  seo: SiteSeoConfig;
  og: SiteOgConfig;
}

export const site: SiteConfig = {
  brandName: "ABN Revêtement",
  tagline: "Isolation thermique, plâtrerie et peinture — travail propre et finitions soignées.",
  locationText: "Toulouse et alentours",
  phoneNumber: "0771262633",
  telLink: "tel:0771262633",
  whatsAppNumber: "33771262633",
  waLink: "https://wa.me/33771262633",
  facebookUrl: undefined,
  googleMapsUrl: "https://www.google.com/maps?q=34+avenue+de+l'Hers+31500+Toulouse",
  seo: {
    title: "ABN Revêtement | Isolation thermique, plâtrerie et peinture à Toulouse",
    description:
      "ABN Revêtement intervient à Toulouse pour vos travaux d'isolation thermique, plâtrerie et peinture. Travail propre et finitions soignées.",
  },
  og: {
    image: "/media/jobs/abn-logo.jpg",
  },
};

