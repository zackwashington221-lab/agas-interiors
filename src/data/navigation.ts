export interface Subcategory {
  title: string;
  href: string;
  isBadge?: boolean;
}

export interface NavCategory {
  title: string;
  href: string;
  isSale?: boolean;
  featuredImage?: string;
  featuredCaption?: string;
  subcategories: Subcategory[];
}

export const TOP_BAR_ANNOUNCEMENTS = [
  "Designed and made to order",
  "Visit our showroom in D.H.A., Karachi",
  "Free design help — send us a photo of the room",
  "Questions? WhatsApp 0315 8739625"
];

export const NAV_CATEGORIES: NavCategory[] = [
  {
    title: "Bedroom",
    href: "/bedroom-furniture",
    featuredImage: "/img/tile/bedroom-furniture.webp",
    featuredCaption: "Bella Notte Bedroom Range",
    subcategories: [
      { title: "Bed Sets", href: "/bedroom-furniture/bed-sets" },
      { title: "Bedroom Benches", href: "/bedroom-furniture/bedroom-benches" },
      { title: "Bedroom Chairs", href: "/bedroom-furniture/bedroom-chairs" },
      { title: "Bedside Tables", href: "/bedroom-furniture/bedside-tables" },
      { title: "Dressing Tables", href: "/bedroom-furniture/dressing-tables" },
      { title: "Turkish Bedroom Furniture", href: "/bedroom-furniture/turkish-bedroom-furniture" },
      { title: "Wall Mirrors", href: "/bedroom-furniture/wall-mirrors" },
      { title: "Wardrobes & Armoires", href: "/bedroom-furniture/wardrobes-and-armoires" },
      { title: "Sale & Clearance", href: "/sale?cat=bedroom", isBadge: true }
    ]
  },
  {
    title: "Living",
    href: "/living-room-furniture",
    featuredImage: "/img/tile/living-room-furniture.webp",
    featuredCaption: "Splendore Living Suite",
    subcategories: [
      { title: "Accent Chairs", href: "/living-room-furniture/accent-chairs" },
      { title: "Benches and Ottomans", href: "/living-room-furniture/benches-and-ottomans" },
      { title: "Bookcases & Shelves", href: "/living-room-furniture/bookcases-shelves" },
      { title: "Coffee Tables", href: "/living-room-furniture/coffee-tables" },
      { title: "Console Tables", href: "/living-room-furniture/console-tables" },
      { title: "Sectional Sofas", href: "/living-room-furniture/sectional-sofas" },
      { title: "Side and End Tables", href: "/living-room-furniture/side-and-end-tables" },
      { title: "Sofa Sets", href: "/living-room-furniture/sofa-sets" },
      { title: "TV Wall Units", href: "/living-room-furniture/tv-wall-units" },
      { title: "Sale & Clearance", href: "/sale?cat=living", isBadge: true }
    ]
  },
  {
    title: "Dining",
    href: "/dining-room-furniture",
    featuredImage: "/img/tile/dining-room-furniture.webp",
    featuredCaption: "Artisan Dining Sets",
    subcategories: [
      { title: "Dining Table Sets", href: "/dining-room-furniture/dining-table-sets" },
      { title: "Display Cabinets", href: "/dining-room-furniture/display-cabinets" },
      { title: "Storage Cabinets and Sideboards", href: "/dining-room-furniture/storage-cabinets-and-sideboards" },
      { title: "Sale & Clearance", href: "/sale?cat=dining", isBadge: true }
    ]
  },
  {
    title: "Kitchen",
    href: "/kitchen-furniture",
    featuredImage: "/img/tile/kitchen-furniture.jpg",
    featuredCaption: "Nordika Italian Cabinetry",
    subcategories: [
      { title: "Bar Stools", href: "/kitchen-furniture/barstools" },
      { title: "Kitchen Designs", href: "/kitchen-furniture/kitchen-designs" },
      { title: "Sale & Clearance", href: "/sale?cat=kitchen", isBadge: true }
    ]
  },
  {
    title: "Closet System",
    href: "/closet-system",
    featuredImage: "/img/tile/closet-system.png",
    featuredCaption: "Architectural Wardrobes",
    subcategories: [
      { title: "Built In Closet", href: "/closet-system/built-in-closet" },
      { title: "Walk in Closet", href: "/closet-system/walk-in-closet" },
      { title: "Sale & Clearance", href: "/sale?cat=closet", isBadge: true }
    ]
  },
  {
    title: "Entryway",
    href: "/entryway-furniture",
    featuredImage: "/img/tile/entryway-furniture.webp",
    featuredCaption: "Entryway & Consoles",
    subcategories: [
      { title: "Shoe Racks", href: "/entryway-furniture/shoe-racks" },
      { title: "Storage Benches", href: "/entryway-furniture/storage-benches" },
      { title: "Sale & Clearance", href: "/sale?cat=entryway", isBadge: true }
    ]
  },
  {
    title: "Doors",
    href: "/doors",
    featuredImage: "/img/tile/doors.webp",
    featuredCaption: "Engineered Architectural Doors",
    subcategories: [
      { title: "Exterior Doors", href: "/doors/exterior-doors" },
      { title: "Interior Doors", href: "/doors/interior-doors" }
    ]
  },
  {
    title: "Outdoor & Garden",
    href: "/outdoor-furniture",
    featuredImage: "/img/outdoor/outdoor-hero.jpg",
    featuredCaption: "Bespoke Teak & Garden Architecture",
    subcategories: [
      { title: "Outdoor Lounges & Sofas", href: "/outdoor-furniture/outdoor-sofas" },
      { title: "Garden Dining Suites", href: "/outdoor-furniture/outdoor-dining" },
      { title: "Poolside Daybeds & Sun Loungers", href: "/outdoor-furniture/daybeds-loungers" },
      { title: "Terrace Chairs & Occasional", href: "/outdoor-furniture/terrace-chairs" }
    ]
  }
];

export const DEPARTMENT_TILES = [
  {
    title: "Bedroom Furniture",
    href: "/bedroom-furniture",
    image: "/img/tile/bedroom-furniture.webp"
  },
  {
    title: "Living Room Furniture",
    href: "/living-room-furniture",
    image: "/img/tile/living-room-furniture.webp"
  },
  {
    title: "Dining Room Furniture",
    href: "/dining-room-furniture",
    image: "/img/tile/dining-room-furniture.webp"
  },
  {
    title: "Kitchen Furniture",
    href: "/kitchen-furniture",
    image: "/img/tile/kitchen-furniture.jpg"
  },
  {
    title: "Closet System",
    href: "/closet-system",
    image: "/img/tile/closet-system.png"
  },
  {
    title: "Entryway Furniture",
    href: "/entryway-furniture",
    image: "/img/tile/entryway-furniture.webp"
  },
  {
    title: "Doors",
    href: "/doors",
    image: "/img/tile/doors.webp"
  },
  {
    title: "Outdoor & Garden",
    href: "/outdoor-furniture",
    image: "/img/outdoor/outdoor-hero.jpg"
  }
];

export const JOURNAL_POSTS = [
  {
    id: "post-1",
    slug: "5-living-room-furniture-trends-that-will-define-2026",
    tag: "Interior Design Trends",
    date: "14 December 2025",
    title: "5 Living Room Furniture Trends That Will Define 2026",
    excerpt: "While we appreciate every space in a home, the living room holds a special place, often serving as the primary hub where friends and family gather to connect and relax. AGAS Interiors editors are consistently seeking the emerging trends and launches that redefine how these essential social spaces function.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "post-2",
    slug: "bedroom-furniture-trends-2026-to-craft-your-perfect-sleep-space",
    tag: "Interior Design Trends",
    date: "14 December 2025",
    title: "Bedroom Furniture Trends 2026 to Craft Your Perfect Sleep Space",
    excerpt: "Wondering what your dream bedroom will look like in 2026? These upcoming bedroom furniture trends 2026 prioritize a seamless blend of functionality and deep comfort. Get an early look at how you can transform your personal space into a modern, cozy, and restorative sanctuary.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"
  }
];
