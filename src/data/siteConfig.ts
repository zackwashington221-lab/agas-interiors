export interface SiteConfig {
  brandName: string;
  legalName: string;
  tagline: string;
  supportingMessage: string;
  campaignLine: string;
  phone: string;
  whatsapp: string;
  whatsappFormatted: string;
  email: string;
  address: {
    street: string;
    locality: string;
    region: string;
    city: string;
    postalCode: string;
    country: string;
  };
  serviceAreas: string[];
  showroomHours: {
    weekdays: string;
    sunday: string;
  };
  socialLinks: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
  };
}

export const SITE_CONFIG: SiteConfig = {
  brandName: "AGAS Interiors",
  legalName: "AGAS Interiors (Abdul Ghaffar & Sons)",
  tagline: "Home & Office Solutions. Spaces designed with intent. Crafted to last.",
  supportingMessage: "From bespoke custom furniture and fine woodworking to turnkey architectural interior renovations and office solutions in Karachi.",
  campaignLine: "We Design. We Create. We Transform.",
  phone: "03158739625",
  whatsapp: "923158739625",
  whatsappFormatted: "0315 8739625",
  email: "ahsan.gaffar00123@gmail.com",
  address: {
    street: "Sector D, C35/18, Manzoor Colony / D.H.A. Design Studio",
    locality: "Manzoor Colony",
    region: "Karachi South",
    city: "Karachi",
    postalCode: "75500",
    country: "Pakistan"
  },
  serviceAreas: [
    "D.H.A. Karachi (Phases 1–8)",
    "Clifton & Sea View",
    "KDA Scheme 1 & Tipu Sultan",
    "PECHS & Muhammad Ali Society",
    "Gulshan-e-Iqbal & Naval Anchorage",
    "Bahria Town Karachi",
    "Nationwide Custom Furniture Delivery (Lahore, Islamabad, Rawalpindi)"
  ],
  showroomHours: {
    weekdays: "Monday – Saturday: 09:00 AM – 09:00 PM",
    sunday: "Sunday: By appointment only"
  },
  socialLinks: {
    instagram: "https://www.instagram.com/agasinteriors/",
    facebook: "https://www.facebook.com/agasinteriors/"
  }
};
