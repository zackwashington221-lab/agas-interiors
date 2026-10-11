export interface Project {
  id: string;
  title: string;
  slug: string;
  summary: string;
  brief: string;
  approach: string;
  categories: string[];
  location: string;
  completionYear: string;
  gallery: Array<{
    url: string;
    alt: string;
    caption?: string;
  }>;
  materialsUsed: string[];
  scope: string[];
  productIds: string[];
  serviceIds: string[];
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "proj-dha-phase8-villa",
    title: "D.H.A. Phase 8 Contemporary Villa",
    slug: "dha-phase8-contemporary-villa",
    summary: "Complete interior architecture, custom walnut millwork, book-matched marble flooring, and master suite furniture for a 1,000 sq yd residence in Phase 8, Karachi.",
    brief: "The homeowners desired a warm minimalist family sanctuary that balanced grand entertaining spaces with private, serene retreats. Key requirements included custom bedroom suites, a sculptural dining table, and seamless transition between indoor lounges and the garden.",
    approach: "We established a disciplined material language anchored by smoked walnut, natural Botticino marble, and textured neutral bouclé fabrics. Architectural ceiling shadow gaps and concealed indirect LED channels eliminate visual clutter while enhancing warmth.",
    categories: ["Interior Design", "Custom Furniture", "Flooring & Stone"],
    location: "D.H.A. Phase 8, Karachi",
    completionYear: "2025",
    gallery: [
      {
        url: "/img/hero/candid-showroom-hero.jpg",
        alt: "Master suite with integrated light bed in D.H.A. Phase 8 Villa",
        caption: "Master bedroom suite with fluted acoustic panelling and bespoke bed"
      },
      {
        url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
        alt: "Living salon and custom wall unit",
        caption: "Double-height living lounge featuring full-height walnut cabinetry"
      },
      {
        url: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80",
        alt: "Formal dining and curio display joinery",
        caption: "Dining room anchored by illuminated glass display joinery"
      }
    ],
    materialsUsed: [
      "Smoked American Walnut Veneer",
      "Italian Botticino Classico Marble",
      "Custom Olive Green & Cream Bouclé Upholstery",
      "PVD Electroplated Brushed Brass Trims"
    ],
    scope: [
      "Spatial redesign of double-height living areas and formal salon",
      "Full fabrication of 4 custom bedroom suites with integrated lighting",
      "10-Seater sintered-stone dining table and custom velvet chairs",
      "Precision marble diamond-polishing and flush threshold transitions"
    ],
    productIds: ["aura-1", "aura-2", "aura-living-1"],
    serviceIds: ["srv-interior-design", "srv-custom-furniture", "srv-flooring-stone"],
    featured: true
  },
  {
    id: "proj-clifton-penthouse",
    title: "Clifton Seafront Penthouse",
    slug: "clifton-seafront-penthouse",
    summary: "Turnkey transformation of a 4,500 sq ft seafront penthouse featuring a handleless Nordika modular kitchen, walk-in dressing room, and coastal terrace.",
    brief: "The client acquired an older seafront apartment with compartmentalized rooms and outdated infrastructure. The goal was to open the layout towards panoramic Arabian Sea views while installing humidity-resistant architectural joinery and an evening terrace retreat.",
    approach: "We removed central masonry dividing walls to create a vast open-concept living, dining, and kitchen pavilion. Anti-corrosive marine-grade finishes and humidity-proof cabinetry protect the home against Karachi's coastal marine air.",
    categories: ["Complete Renovations", "Kitchens & Joinery", "Rooftops & Terraces"],
    location: "Clifton Block 4, Karachi",
    completionYear: "2025",
    gallery: [
      {
        url: "/img/tile/kitchen-furniture.jpg",
        alt: "Modern handleless kitchen in Clifton Penthouse",
        caption: "Nordika handleless modular kitchen with breakfast counter"
      },
      {
        url: "/img/tile/closet-system.png",
        alt: "Master walk-in closet in Clifton Penthouse",
        caption: "Custom illuminated glass wardrobe system"
      },
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        alt: "Living salon overlooking the coastline",
        caption: "Open living salon configured with low-profile bouclé seating"
      }
    ],
    materialsUsed: [
      "Matte Anthracite Italian Anti-Fingerprint Laminate",
      "Heat & Stain Resistant Sintered Stone Surfaces",
      "Moisture-Sealed Dark Oak Carcasses",
      "Powder-Coated Marine-Grade Aluminum Pergola"
    ],
    scope: [
      "Structural partition removal and MEP infrastructure overhaul",
      "Design & installation of custom handleless kitchen with appliance integration",
      "Floor-to-ceiling glass walk-in wardrobe with automated lighting",
      "Pergola terrace with weatherproof outdoor seating and planters"
    ],
    productIds: ["aura-13", "aura-14", "aura-living-2"],
    serviceIds: ["srv-home-renovation", "srv-kitchens-joinery", "srv-outdoor-living"],
    featured: true
  },
  {
    id: "proj-dha-phase6-duplex",
    title: "D.H.A. Phase 6 Duplex Renovation",
    slug: "dha-phase6-duplex-renovation",
    summary: "Whole-property modernization of an established family duplex, introducing minimalist ceiling coves, acoustic wall panelling, and bespoke living suites.",
    brief: "A generational residence required complete modernizing without losing its gracious sense of scale. The clients sought modern acoustic comfort, integrated concealed storage, and clean architectural lighting throughout both levels.",
    approach: "We engineered smooth Level-5 gypsum ceilings with perimeter shadow reveals and recessed magnetic track lighting. Handcrafted fluted wall panelling doubles as acoustic dampening and concealed storage doors.",
    categories: ["Complete Renovations", "Walls, Ceilings & Finishes", "Custom Furniture"],
    location: "D.H.A. Phase 6, Karachi",
    completionYear: "2025",
    gallery: [
      {
        url: "/img/tile/living-room-furniture.webp",
        alt: "Architectural ceiling and custom library millwork in Phase 6",
        caption: "Family lounge with custom rotating display millwork and acoustic paneling"
      },
      {
        url: "/img/tile/bedroom-furniture.webp",
        alt: "Bespoke bedroom joinery detail",
        caption: "Minimalist bedside cabinetry and fluted woodwork"
      }
    ],
    materialsUsed: [
      "High-Density Gypsum Boarding & Anti-Crack Joint Systems",
      "Natural White Oak Fluted Wood Mouldings",
      "High-Resilience Charcoal Velvet & Textured Weaves",
      "Magnetic Low-Voltage Recessed Track Spotlights"
    ],
    scope: [
      "Complete ceiling demolition and architectural re-leveling",
      "Acoustic slatted wood wall cladding across living areas",
      "Bespoke modular living room sectional and occasional tables",
      "Repainting in curated warm ivory washable emulsion"
    ],
    productIds: ["aura-5", "aura-6", "aura-living-3"],
    serviceIds: ["srv-home-renovation", "srv-walls-ceilings", "srv-custom-furniture"],
    featured: true
  }
];
