// Curated Product Catalog for AGAS Interiors
export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  title: string;
  category: "Bedroom" | "Living" | "Dining" | "Kitchen" | "Kids" | "Closet System" | "Entryway" | "Doors" | "Home Decor" | "Outdoor";
  subcategory: string;
  link: string;
  price: string;
  numericPrice: number;
  originalPrice: string;
  discount: string | null;
  badge: string;
  leadTime: string;
  images: string[];
  description: string;
  specifications: ProductSpecification[];
  sizes: string[];
  finishes: string[];
}

export const PRODUCTS: Product[] = [
  {
    "id": "aura-1",
    "title": "Nova Velvet Upholstered Bed",
    "category": "Bedroom",
    "subcategory": "Bed Sets",
    "link": "/nova-velvet-upholstered-bed",
    "price": "Rs 150,000",
    "numericPrice": 150000,
    "originalPrice": "Rs 214,000",
    "discount": "30% off",
    "badge": "Sale",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Expertly handcrafted by AGAS Interiors master artisans. Built with kiln-dried solid hardwood framing, high-resilience foam padding, and bespoke upholstery tailored to modern residences in Pakistan.",
    "specifications": [
      {
        "label": "Material",
        "value": "Plush Velvet / Boucl\u00e9 / Solid Oak"
      },
      {
        "label": "Frame",
        "value": "Kiln-dried solid hardwood & reinforced steel"
      },
      {
        "label": "Origin",
        "value": "Designed & crafted in Pakistan / Italian hardware"
      },
      {
        "label": "Warranty",
        "value": "10-Year Structural Frame Guarantee"
      }
    ],
    "sizes": [
      "King (6x6.5 ft)",
      "Queen (5x6.5 ft)",
      "Custom Size"
    ],
    "finishes": [
      "Plush Olive Velvet",
      "Boucl\u00e9 Cream",
      "Warm Taupe",
      "Charcoal Gray"
    ]
  },
  {
    "id": "aura-2",
    "title": "Liva Integrated Light Upholstered Bed",
    "category": "Bedroom",
    "subcategory": "Bed Sets",
    "link": "/liva-integrated-light-upholstered-bed",
    "price": "Rs 121,000",
    "numericPrice": 121000,
    "originalPrice": "Rs 173,000",
    "discount": "30% off",
    "badge": "Sale",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Expertly handcrafted by AGAS Interiors master artisans. Built with kiln-dried solid hardwood framing, high-resilience foam padding, and bespoke upholstery tailored to modern residences in Pakistan.",
    "specifications": [
      {
        "label": "Material",
        "value": "Plush Velvet / Boucl\u00e9 / Solid Oak"
      },
      {
        "label": "Frame",
        "value": "Kiln-dried solid hardwood & reinforced steel"
      },
      {
        "label": "Origin",
        "value": "Designed & crafted in Pakistan / Italian hardware"
      },
      {
        "label": "Warranty",
        "value": "10-Year Structural Frame Guarantee"
      }
    ],
    "sizes": [
      "King (6x6.5 ft)",
      "Queen (5x6.5 ft)",
      "Custom Size"
    ],
    "finishes": [
      "Plush Olive Velvet",
      "Boucl\u00e9 Cream",
      "Warm Taupe",
      "Charcoal Gray"
    ]
  },
  {
    "id": "aura-3",
    "title": "Bytyk Boucle Upholstered Bed",
    "category": "Bedroom",
    "subcategory": "Bed Sets",
    "link": "/bytyk-boucle-upholstered-bed",
    "price": "Rs 144,000",
    "numericPrice": 144000,
    "originalPrice": "Rs 206,000",
    "discount": "30% off",
    "badge": "Sale",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Expertly handcrafted by AGAS Interiors master artisans. Built with kiln-dried solid hardwood framing, high-resilience foam padding, and bespoke upholstery tailored to modern residences in Pakistan.",
    "specifications": [
      {
        "label": "Material",
        "value": "Plush Velvet / Boucl\u00e9 / Solid Oak"
      },
      {
        "label": "Frame",
        "value": "Kiln-dried solid hardwood & reinforced steel"
      },
      {
        "label": "Origin",
        "value": "Designed & crafted in Pakistan / Italian hardware"
      },
      {
        "label": "Warranty",
        "value": "10-Year Structural Frame Guarantee"
      }
    ],
    "sizes": [
      "King (6x6.5 ft)",
      "Queen (5x6.5 ft)",
      "Custom Size"
    ],
    "finishes": [
      "Plush Olive Velvet",
      "Boucl\u00e9 Cream",
      "Warm Taupe",
      "Charcoal Gray"
    ]
  },
  {
    "id": "aura-4",
    "title": "Loft Boucle Upholstered Bed",
    "category": "Bedroom",
    "subcategory": "Bed Sets",
    "link": "/loft-boucle-upholstered-bed",
    "price": "Rs 115,000",
    "numericPrice": 115000,
    "originalPrice": "Rs 164,000",
    "discount": "30% off",
    "badge": "Sale",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Expertly handcrafted by AGAS Interiors master artisans. Built with kiln-dried solid hardwood framing, high-resilience foam padding, and bespoke upholstery tailored to modern residences in Pakistan.",
    "specifications": [
      {
        "label": "Material",
        "value": "Plush Velvet / Boucl\u00e9 / Solid Oak"
      },
      {
        "label": "Frame",
        "value": "Kiln-dried solid hardwood & reinforced steel"
      },
      {
        "label": "Origin",
        "value": "Designed & crafted in Pakistan / Italian hardware"
      },
      {
        "label": "Warranty",
        "value": "10-Year Structural Frame Guarantee"
      }
    ],
    "sizes": [
      "King (6x6.5 ft)",
      "Queen (5x6.5 ft)",
      "Custom Size"
    ],
    "finishes": [
      "Plush Olive Velvet",
      "Boucl\u00e9 Cream",
      "Warm Taupe",
      "Charcoal Gray"
    ]
  },
  {
    "id": "aura-5",
    "title": "Nova Textured Upholstered Bed",
    "category": "Bedroom",
    "subcategory": "Bed Sets",
    "link": "/nova-textured-upholstered-bed",
    "price": "Rs 150,000",
    "numericPrice": 150000,
    "originalPrice": "Rs 214,000",
    "discount": "30% off",
    "badge": "Sale",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Expertly handcrafted by AGAS Interiors master artisans. Built with kiln-dried solid hardwood framing, high-resilience foam padding, and bespoke upholstery tailored to modern residences in Pakistan.",
    "specifications": [
      {
        "label": "Material",
        "value": "Plush Velvet / Boucl\u00e9 / Solid Oak"
      },
      {
        "label": "Frame",
        "value": "Kiln-dried solid hardwood & reinforced steel"
      },
      {
        "label": "Origin",
        "value": "Designed & crafted in Pakistan / Italian hardware"
      },
      {
        "label": "Warranty",
        "value": "10-Year Structural Frame Guarantee"
      }
    ],
    "sizes": [
      "King (6x6.5 ft)",
      "Queen (5x6.5 ft)",
      "Custom Size"
    ],
    "finishes": [
      "Plush Olive Velvet",
      "Boucl\u00e9 Cream",
      "Warm Taupe",
      "Charcoal Gray"
    ]
  },
  {
    "id": "aura-6",
    "title": "Bern Cream Upholstered Bed",
    "category": "Bedroom",
    "subcategory": "Bed Sets",
    "link": "/bern-cream-upholstered-bed",
    "price": "Rs 135,000",
    "numericPrice": 135000,
    "originalPrice": "Rs 193,000",
    "discount": "30% off",
    "badge": "Sale",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Expertly handcrafted by AGAS Interiors master artisans. Built with kiln-dried solid hardwood framing, high-resilience foam padding, and bespoke upholstery tailored to modern residences in Pakistan.",
    "specifications": [
      {
        "label": "Material",
        "value": "Plush Velvet / Boucl\u00e9 / Solid Oak"
      },
      {
        "label": "Frame",
        "value": "Kiln-dried solid hardwood & reinforced steel"
      },
      {
        "label": "Origin",
        "value": "Designed & crafted in Pakistan / Italian hardware"
      },
      {
        "label": "Warranty",
        "value": "10-Year Structural Frame Guarantee"
      }
    ],
    "sizes": [
      "King (6x6.5 ft)",
      "Queen (5x6.5 ft)",
      "Custom Size"
    ],
    "finishes": [
      "Plush Olive Velvet",
      "Boucl\u00e9 Cream",
      "Warm Taupe",
      "Charcoal Gray"
    ]
  },
  {
    "id": "aura-7",
    "title": "Monza Modern Upholstered Bed",
    "category": "Bedroom",
    "subcategory": "Bed Sets",
    "link": "/monza-modern-upholstered-bed",
    "price": "Rs 152,500",
    "numericPrice": 152500,
    "originalPrice": "Rs 218,000",
    "discount": "30% off",
    "badge": "Sale",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Expertly handcrafted by AGAS Interiors master artisans. Built with kiln-dried solid hardwood framing, high-resilience foam padding, and bespoke upholstery tailored to modern residences in Pakistan.",
    "specifications": [
      {
        "label": "Material",
        "value": "Plush Velvet / Boucl\u00e9 / Solid Oak"
      },
      {
        "label": "Frame",
        "value": "Kiln-dried solid hardwood & reinforced steel"
      },
      {
        "label": "Origin",
        "value": "Designed & crafted in Pakistan / Italian hardware"
      },
      {
        "label": "Warranty",
        "value": "10-Year Structural Frame Guarantee"
      }
    ],
    "sizes": [
      "King (6x6.5 ft)",
      "Queen (5x6.5 ft)",
      "Custom Size"
    ],
    "finishes": [
      "Plush Olive Velvet",
      "Boucl\u00e9 Cream",
      "Warm Taupe",
      "Charcoal Gray"
    ]
  },
  {
    "id": "aura-8",
    "title": "Calista Luxury Upholstered Leather Bed",
    "category": "Bedroom",
    "subcategory": "Bed Sets",
    "link": "/calista-luxury-upholstered-leather-bed",
    "price": "Rs 155,500",
    "numericPrice": 155500,
    "originalPrice": "Rs 222,000",
    "discount": "30% off",
    "badge": "Sale",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Expertly handcrafted by AGAS Interiors master artisans. Built with kiln-dried solid hardwood framing, high-resilience foam padding, and bespoke upholstery tailored to modern residences in Pakistan.",
    "specifications": [
      {
        "label": "Material",
        "value": "Plush Velvet / Boucl\u00e9 / Solid Oak"
      },
      {
        "label": "Frame",
        "value": "Kiln-dried solid hardwood & reinforced steel"
      },
      {
        "label": "Origin",
        "value": "Designed & crafted in Pakistan / Italian hardware"
      },
      {
        "label": "Warranty",
        "value": "10-Year Structural Frame Guarantee"
      }
    ],
    "sizes": [
      "King (6x6.5 ft)",
      "Queen (5x6.5 ft)",
      "Custom Size"
    ],
    "finishes": [
      "Plush Olive Velvet",
      "Boucl\u00e9 Cream",
      "Warm Taupe",
      "Charcoal Gray"
    ]
  },
  {
    "id": "aura-9",
    "title": "Petra Modern Boucle Integrated Light Bed",
    "category": "Bedroom",
    "subcategory": "Bed Sets",
    "link": "/petra-modern-boucle-integrated-light-bed",
    "price": "Rs 115,000",
    "numericPrice": 115000,
    "originalPrice": "Rs 164,000",
    "discount": "30% off",
    "badge": "Sale",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Expertly handcrafted by AGAS Interiors master artisans. Built with kiln-dried solid hardwood framing, high-resilience foam padding, and bespoke upholstery tailored to modern residences in Pakistan.",
    "specifications": [
      {
        "label": "Material",
        "value": "Plush Velvet / Boucl\u00e9 / Solid Oak"
      },
      {
        "label": "Frame",
        "value": "Kiln-dried solid hardwood & reinforced steel"
      },
      {
        "label": "Origin",
        "value": "Designed & crafted in Pakistan / Italian hardware"
      },
      {
        "label": "Warranty",
        "value": "10-Year Structural Frame Guarantee"
      }
    ],
    "sizes": [
      "King (6x6.5 ft)",
      "Queen (5x6.5 ft)",
      "Custom Size"
    ],
    "finishes": [
      "Plush Olive Velvet",
      "Boucl\u00e9 Cream",
      "Warm Taupe",
      "Charcoal Gray"
    ]
  },
  {
    "id": "aura-10",
    "title": "Bella Channel-Tufted Luxury Bed",
    "category": "Bedroom",
    "subcategory": "Bed Sets",
    "link": "/bella-channel-tufted-luxury-bed",
    "price": "Rs 173,000",
    "numericPrice": 173000,
    "originalPrice": "Rs 247,000",
    "discount": "30% off",
    "badge": "Sale",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Expertly handcrafted by AGAS Interiors master artisans. Built with kiln-dried solid hardwood framing, high-resilience foam padding, and bespoke upholstery tailored to modern residences in Pakistan.",
    "specifications": [
      {
        "label": "Material",
        "value": "Plush Velvet / Boucl\u00e9 / Solid Oak"
      },
      {
        "label": "Frame",
        "value": "Kiln-dried solid hardwood & reinforced steel"
      },
      {
        "label": "Origin",
        "value": "Designed & crafted in Pakistan / Italian hardware"
      },
      {
        "label": "Warranty",
        "value": "10-Year Structural Frame Guarantee"
      }
    ],
    "sizes": [
      "King (6x6.5 ft)",
      "Queen (5x6.5 ft)",
      "Custom Size"
    ],
    "finishes": [
      "Plush Olive Velvet",
      "Boucl\u00e9 Cream",
      "Warm Taupe",
      "Charcoal Gray"
    ]
  },
  {
    "id": "aura-11",
    "title": "Leora Fluted Panel Upholstered Bed",
    "category": "Bedroom",
    "subcategory": "Bed Sets",
    "link": "/leora-fluted-panel-upholstered-bed",
    "price": "Rs 152,500",
    "numericPrice": 152500,
    "originalPrice": "Rs 218,000",
    "discount": "30% off",
    "badge": "Sale",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1505773278895-5efa7b11679a?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Expertly handcrafted by AGAS Interiors master artisans. Built with kiln-dried solid hardwood framing, high-resilience foam padding, and bespoke upholstery tailored to modern residences in Pakistan.",
    "specifications": [
      {
        "label": "Material",
        "value": "Plush Velvet / Boucl\u00e9 / Solid Oak"
      },
      {
        "label": "Frame",
        "value": "Kiln-dried solid hardwood & reinforced steel"
      },
      {
        "label": "Origin",
        "value": "Designed & crafted in Pakistan / Italian hardware"
      },
      {
        "label": "Warranty",
        "value": "10-Year Structural Frame Guarantee"
      }
    ],
    "sizes": [
      "King (6x6.5 ft)",
      "Queen (5x6.5 ft)",
      "Custom Size"
    ],
    "finishes": [
      "Plush Olive Velvet",
      "Boucl\u00e9 Cream",
      "Warm Taupe",
      "Charcoal Gray"
    ]
  },
  {
    "id": "aura-12",
    "title": "Armoni Cream Boucle Upholstered Bed",
    "category": "Bedroom",
    "subcategory": "Bed Sets",
    "link": "/armoni-cream-boucle-upholstered-bed",
    "price": "Rs 218,500",
    "numericPrice": 218500,
    "originalPrice": "Rs 312,000",
    "discount": "30% off",
    "badge": "Sale",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Expertly handcrafted by AGAS Interiors master artisans. Built with kiln-dried solid hardwood framing, high-resilience foam padding, and bespoke upholstery tailored to modern residences in Pakistan.",
    "specifications": [
      {
        "label": "Material",
        "value": "Plush Velvet / Boucl\u00e9 / Solid Oak"
      },
      {
        "label": "Frame",
        "value": "Kiln-dried solid hardwood & reinforced steel"
      },
      {
        "label": "Origin",
        "value": "Designed & crafted in Pakistan / Italian hardware"
      },
      {
        "label": "Warranty",
        "value": "10-Year Structural Frame Guarantee"
      }
    ],
    "sizes": [
      "King (6x6.5 ft)",
      "Queen (5x6.5 ft)",
      "Custom Size"
    ],
    "finishes": [
      "Plush Olive Velvet",
      "Boucl\u00e9 Cream",
      "Warm Taupe",
      "Charcoal Gray"
    ]
  },
  {
    "id": "aura-13",
    "title": "Kappa Anthracite Modern Luxury Handleless Modular Kitchen",
    "category": "Kitchen",
    "subcategory": "Modular Kitchen",
    "link": "/kappa-anthracite-modern-luxury-handleless-modular-kitchen",
    "price": "Rs 650,000",
    "numericPrice": 650000,
    "originalPrice": "Rs 877,500",
    "discount": null,
    "badge": "Made to order",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Expertly handcrafted by AGAS Interiors master artisans. Built with kiln-dried solid hardwood framing, high-resilience foam padding, and bespoke upholstery tailored to modern residences in Pakistan.",
    "specifications": [
      {
        "label": "Material",
        "value": "High-Gloss Lacquer / Italian Melamine"
      },
      {
        "label": "Frame",
        "value": "Kiln-dried solid hardwood & reinforced steel"
      },
      {
        "label": "Origin",
        "value": "Designed & crafted in Pakistan / Italian hardware"
      },
      {
        "label": "Warranty",
        "value": "10-Year Structural Frame Guarantee"
      }
    ],
    "sizes": [
      "Linear 12ft",
      "L-Shape 16ft",
      "Island Hub 20ft"
    ],
    "finishes": [
      "Anthracite Matte",
      "Ivory & Charcoal",
      "Emerald Green",
      "Smoked Walnut"
    ]
  },
  {
    "id": "aura-14",
    "title": "Kappa Zen Ivory &amp; Charcoal Minimalist High-End Modular Kitchen",
    "category": "Kitchen",
    "subcategory": "Modular Kitchen",
    "link": "/kappa-zen-ivory-charcoal-minimalist-high-end-modular-kitchen",
    "price": "Rs 650,000",
    "numericPrice": 650000,
    "originalPrice": "Rs 877,500",
    "discount": null,
    "badge": "Made to order",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Expertly handcrafted by AGAS Interiors master artisans. Built with kiln-dried solid hardwood framing, high-resilience foam padding, and bespoke upholstery tailored to modern residences in Pakistan.",
    "specifications": [
      {
        "label": "Material",
        "value": "High-Gloss Lacquer / Italian Melamine"
      },
      {
        "label": "Frame",
        "value": "Kiln-dried solid hardwood & reinforced steel"
      },
      {
        "label": "Origin",
        "value": "Designed & crafted in Pakistan / Italian hardware"
      },
      {
        "label": "Warranty",
        "value": "10-Year Structural Frame Guarantee"
      }
    ],
    "sizes": [
      "Linear 12ft",
      "L-Shape 16ft",
      "Island Hub 20ft"
    ],
    "finishes": [
      "Anthracite Matte",
      "Ivory & Charcoal",
      "Emerald Green",
      "Smoked Walnut"
    ]
  },
  {
    "id": "aura-15",
    "title": "Skyline Horizon Designer Modern Luxury Modular Kitchen",
    "category": "Kitchen",
    "subcategory": "Modular Kitchen",
    "link": "/skyline-horizon-designer-modern-luxury-modular-kitchen",
    "price": "Rs 750,000",
    "numericPrice": 750000,
    "originalPrice": "Rs 1,012,500",
    "discount": null,
    "badge": "Made to order",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Expertly handcrafted by AGAS Interiors master artisans. Built with kiln-dried solid hardwood framing, high-resilience foam padding, and bespoke upholstery tailored to modern residences in Pakistan.",
    "specifications": [
      {
        "label": "Material",
        "value": "High-Gloss Lacquer / Italian Melamine"
      },
      {
        "label": "Frame",
        "value": "Kiln-dried solid hardwood & reinforced steel"
      },
      {
        "label": "Origin",
        "value": "Designed & crafted in Pakistan / Italian hardware"
      },
      {
        "label": "Warranty",
        "value": "10-Year Structural Frame Guarantee"
      }
    ],
    "sizes": [
      "Linear 12ft",
      "L-Shape 16ft",
      "Island Hub 20ft"
    ],
    "finishes": [
      "Anthracite Matte",
      "Ivory & Charcoal",
      "Emerald Green",
      "Smoked Walnut"
    ]
  },
  {
    "id": "aura-16",
    "title": "Skyline Azure &amp; Oak Hub Luxury Contemporary Italian Modular Kitchen",
    "category": "Kitchen",
    "subcategory": "Modular Kitchen",
    "link": "/skyline-azure-oak-hub-luxury-contemporary-italian-modular-kitchen",
    "price": "Rs 650,000",
    "numericPrice": 650000,
    "originalPrice": "Rs 877,500",
    "discount": null,
    "badge": "Made to order",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1600488999201-95ff81347895?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Expertly handcrafted by AGAS Interiors master artisans. Built with kiln-dried solid hardwood framing, high-resilience foam padding, and bespoke upholstery tailored to modern residences in Pakistan.",
    "specifications": [
      {
        "label": "Material",
        "value": "High-Gloss Lacquer / Italian Melamine"
      },
      {
        "label": "Frame",
        "value": "Kiln-dried solid hardwood & reinforced steel"
      },
      {
        "label": "Origin",
        "value": "Designed & crafted in Pakistan / Italian hardware"
      },
      {
        "label": "Warranty",
        "value": "10-Year Structural Frame Guarantee"
      }
    ],
    "sizes": [
      "Linear 12ft",
      "L-Shape 16ft",
      "Island Hub 20ft"
    ],
    "finishes": [
      "Anthracite Matte",
      "Ivory & Charcoal",
      "Emerald Green",
      "Smoked Walnut"
    ]
  },
  {
    "id": "aura-17",
    "title": "Gamma Luxury Industrial Modern Modular Kitchen",
    "category": "Kitchen",
    "subcategory": "Modular Kitchen",
    "link": "/gamma-luxury-industrial-modern-modular-kitchen",
    "price": "Rs 850,000",
    "numericPrice": 850000,
    "originalPrice": "Rs 1,147,500",
    "discount": null,
    "badge": "Made to order",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Expertly handcrafted by AGAS Interiors master artisans. Built with kiln-dried solid hardwood framing, high-resilience foam padding, and bespoke upholstery tailored to modern residences in Pakistan.",
    "specifications": [
      {
        "label": "Material",
        "value": "High-Gloss Lacquer / Italian Melamine"
      },
      {
        "label": "Frame",
        "value": "Kiln-dried solid hardwood & reinforced steel"
      },
      {
        "label": "Origin",
        "value": "Designed & crafted in Pakistan / Italian hardware"
      },
      {
        "label": "Warranty",
        "value": "10-Year Structural Frame Guarantee"
      }
    ],
    "sizes": [
      "Linear 12ft",
      "L-Shape 16ft",
      "Island Hub 20ft"
    ],
    "finishes": [
      "Anthracite Matte",
      "Ivory & Charcoal",
      "Emerald Green",
      "Smoked Walnut"
    ]
  },
  {
    "id": "aura-18",
    "title": "Thea Graphite &amp; Pearl Modular Kitchen",
    "category": "Kitchen",
    "subcategory": "Modular Kitchen",
    "link": "/thea-graphite-pearl-modular-kitchen",
    "price": "Rs 650,000",
    "numericPrice": 650000,
    "originalPrice": "Rs 877,500",
    "discount": null,
    "badge": "Made to order",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Expertly handcrafted by AGAS Interiors master artisans. Built with kiln-dried solid hardwood framing, high-resilience foam padding, and bespoke upholstery tailored to modern residences in Pakistan.",
    "specifications": [
      {
        "label": "Material",
        "value": "High-Gloss Lacquer / Italian Melamine"
      },
      {
        "label": "Frame",
        "value": "Kiln-dried solid hardwood & reinforced steel"
      },
      {
        "label": "Origin",
        "value": "Designed & crafted in Pakistan / Italian hardware"
      },
      {
        "label": "Warranty",
        "value": "10-Year Structural Frame Guarantee"
      }
    ],
    "sizes": [
      "Linear 12ft",
      "L-Shape 16ft",
      "Island Hub 20ft"
    ],
    "finishes": [
      "Anthracite Matte",
      "Ivory & Charcoal",
      "Emerald Green",
      "Smoked Walnut"
    ]
  },
  {
    "id": "aura-19",
    "title": "Canova Emerald Shaker Kitchen: Modern Luxury Traditional Modular Kitchen",
    "category": "Kitchen",
    "subcategory": "Modular Kitchen",
    "link": "/canova-emerald-shaker-kitchen-modern-luxury-traditional-modular-kitchen",
    "price": "Rs 850,000",
    "numericPrice": 850000,
    "originalPrice": "Rs 1,147,500",
    "discount": null,
    "badge": "Made to order",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Expertly handcrafted by AGAS Interiors master artisans. Built with kiln-dried solid hardwood framing, high-resilience foam padding, and bespoke upholstery tailored to modern residences in Pakistan.",
    "specifications": [
      {
        "label": "Material",
        "value": "High-Gloss Lacquer / Italian Melamine"
      },
      {
        "label": "Frame",
        "value": "Kiln-dried solid hardwood & reinforced steel"
      },
      {
        "label": "Origin",
        "value": "Designed & crafted in Pakistan / Italian hardware"
      },
      {
        "label": "Warranty",
        "value": "10-Year Structural Frame Guarantee"
      }
    ],
    "sizes": [
      "Linear 12ft",
      "L-Shape 16ft",
      "Island Hub 20ft"
    ],
    "finishes": [
      "Anthracite Matte",
      "Ivory & Charcoal",
      "Emerald Green",
      "Smoked Walnut"
    ]
  },
  {
    "id": "aura-20",
    "title": "Omicron Luxury Walnut Modular Kitchen: Bespoke Designer Italian Style",
    "category": "Kitchen",
    "subcategory": "Modular Kitchen",
    "link": "/omicron-luxury-walnut-modular-kitchen-bespoke-designer-italian-style",
    "price": "Rs 750,000",
    "numericPrice": 750000,
    "originalPrice": "Rs 1,012,500",
    "discount": null,
    "badge": "Made to order",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1497366672149-e5e4b4d34eb3?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Expertly handcrafted by AGAS Interiors master artisans. Built with kiln-dried solid hardwood framing, high-resilience foam padding, and bespoke upholstery tailored to modern residences in Pakistan.",
    "specifications": [
      {
        "label": "Material",
        "value": "High-Gloss Lacquer / Italian Melamine"
      },
      {
        "label": "Frame",
        "value": "Kiln-dried solid hardwood & reinforced steel"
      },
      {
        "label": "Origin",
        "value": "Designed & crafted in Pakistan / Italian hardware"
      },
      {
        "label": "Warranty",
        "value": "10-Year Structural Frame Guarantee"
      }
    ],
    "sizes": [
      "Linear 12ft",
      "L-Shape 16ft",
      "Island Hub 20ft"
    ],
    "finishes": [
      "Anthracite Matte",
      "Ivory & Charcoal",
      "Emerald Green",
      "Smoked Walnut"
    ]
  },
  {
    "id": "aura-21",
    "title": "Plana Zenith Minimalist Modular Italian Design Kitchen",
    "category": "Kitchen",
    "subcategory": "Modular Kitchen",
    "link": "/plana-zenith-minimalist-modular-italian-design-kitchen",
    "price": "Rs 750,000",
    "numericPrice": 750000,
    "originalPrice": "Rs 1,012,500",
    "discount": null,
    "badge": "Made to order",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1620086464194-5127366b51ea?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Expertly handcrafted by AGAS Interiors master artisans. Built with kiln-dried solid hardwood framing, high-resilience foam padding, and bespoke upholstery tailored to modern residences in Pakistan.",
    "specifications": [
      {
        "label": "Material",
        "value": "High-Gloss Lacquer / Italian Melamine"
      },
      {
        "label": "Frame",
        "value": "Kiln-dried solid hardwood & reinforced steel"
      },
      {
        "label": "Origin",
        "value": "Designed & crafted in Pakistan / Italian hardware"
      },
      {
        "label": "Warranty",
        "value": "10-Year Structural Frame Guarantee"
      }
    ],
    "sizes": [
      "Linear 12ft",
      "L-Shape 16ft",
      "Island Hub 20ft"
    ],
    "finishes": [
      "Anthracite Matte",
      "Ivory & Charcoal",
      "Emerald Green",
      "Smoked Walnut"
    ]
  },
  {
    "id": "aura-22",
    "title": "Ambrine Tufted Velvet Bar &amp; Counter Stool",
    "category": "Kitchen",
    "subcategory": "Bar Stools",
    "link": "/ambrine-tufted-velvet-velvet-bar-counter-stool",
    "price": "Rs 25,000",
    "numericPrice": 25000,
    "originalPrice": "Rs 33,750",
    "discount": null,
    "badge": "Made to order",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Expertly handcrafted by AGAS Interiors master artisans. Built with kiln-dried solid hardwood framing, high-resilience foam padding, and bespoke upholstery tailored to modern residences in Pakistan.",
    "specifications": [
      {
        "label": "Material",
        "value": "High-Gloss Lacquer / Italian Melamine"
      },
      {
        "label": "Frame",
        "value": "Kiln-dried solid hardwood & reinforced steel"
      },
      {
        "label": "Origin",
        "value": "Designed & crafted in Pakistan / Italian hardware"
      },
      {
        "label": "Warranty",
        "value": "10-Year Structural Frame Guarantee"
      }
    ],
    "sizes": [
      "Linear 12ft",
      "L-Shape 16ft",
      "Island Hub 20ft"
    ],
    "finishes": [
      "Anthracite Matte",
      "Ivory & Charcoal",
      "Emerald Green",
      "Smoked Walnut"
    ]
  },
  {
    "id": "aura-living-1",
    "title": "Oliver Rotating Solid Wood Bookcase",
    "category": "Living",
    "subcategory": "Coffee Tables",
    "link": "/oliver-rotating-solid-wood-bookcase",
    "price": "Rs 75,000",
    "numericPrice": 75000,
    "originalPrice": "Rs 93,750",
    "discount": "20% off",
    "badge": "Signature",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Sculptural comfort meets architectural grace. Designed for expansive gathering spaces, featuring premium abrasion-resistant upholstery and reinforced dowelled joinery.",
    "specifications": [
      {
        "label": "Upholstery",
        "value": "Premium Textured Boucl\u00e9 / Velvet"
      },
      {
        "label": "Frame",
        "value": "Solid Seasoned Sheesham / Oak"
      },
      {
        "label": "Cushioning",
        "value": "Multi-density high-resiliency foam with down topper"
      },
      {
        "label": "Warranty",
        "value": "10-Year Frame Guarantee"
      }
    ],
    "sizes": [
      "3-Seater",
      "4-Seater",
      "Modular Sectional"
    ],
    "finishes": [
      "Sand Boucl\u00e9",
      "Emerald Velvet",
      "Oatmeal Linen",
      "Midnight Charcoal"
    ]
  },
  {
    "id": "aura-living-2",
    "title": "Agas Rotating Bookshelf Bookcase",
    "category": "Living",
    "subcategory": "Coffee Tables",
    "link": "/aura-rotating-bookshelf-bookcase",
    "price": "Rs 42,000",
    "numericPrice": 42000,
    "originalPrice": "Rs 52,500",
    "discount": "20% off",
    "badge": "Signature",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Sculptural comfort meets architectural grace. Designed for expansive gathering spaces, featuring premium abrasion-resistant upholstery and reinforced dowelled joinery.",
    "specifications": [
      {
        "label": "Upholstery",
        "value": "Premium Textured Boucl\u00e9 / Velvet"
      },
      {
        "label": "Frame",
        "value": "Solid Seasoned Sheesham / Oak"
      },
      {
        "label": "Cushioning",
        "value": "Multi-density high-resiliency foam with down topper"
      },
      {
        "label": "Warranty",
        "value": "10-Year Frame Guarantee"
      }
    ],
    "sizes": [
      "3-Seater",
      "4-Seater",
      "Modular Sectional"
    ],
    "finishes": [
      "Sand Boucl\u00e9",
      "Emerald Velvet",
      "Oatmeal Linen",
      "Midnight Charcoal"
    ]
  },
  {
    "id": "aura-living-3",
    "title": "Verde 5-Tier Green Bookshelf",
    "category": "Living",
    "subcategory": "Coffee Tables",
    "link": "/verde-5-tier-green-bookshelf",
    "price": "Rs 80,000",
    "numericPrice": 80000,
    "originalPrice": "Rs 100,000",
    "discount": "20% off",
    "badge": "Signature",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Sculptural comfort meets architectural grace. Designed for expansive gathering spaces, featuring premium abrasion-resistant upholstery and reinforced dowelled joinery.",
    "specifications": [
      {
        "label": "Upholstery",
        "value": "Premium Textured Boucl\u00e9 / Velvet"
      },
      {
        "label": "Frame",
        "value": "Solid Seasoned Sheesham / Oak"
      },
      {
        "label": "Cushioning",
        "value": "Multi-density high-resiliency foam with down topper"
      },
      {
        "label": "Warranty",
        "value": "10-Year Frame Guarantee"
      }
    ],
    "sizes": [
      "3-Seater",
      "4-Seater",
      "Modular Sectional"
    ],
    "finishes": [
      "Sand Boucl\u00e9",
      "Emerald Velvet",
      "Oatmeal Linen",
      "Midnight Charcoal"
    ]
  },
  {
    "id": "aura-living-4",
    "title": "Vigo Fluted Wood Storage Bookcase",
    "category": "Living",
    "subcategory": "Coffee Tables",
    "link": "/vigo-fluted-wood-storage-bookcase",
    "price": "Rs 95,000",
    "numericPrice": 95000,
    "originalPrice": "Rs 118,750",
    "discount": "20% off",
    "badge": "Signature",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Sculptural comfort meets architectural grace. Designed for expansive gathering spaces, featuring premium abrasion-resistant upholstery and reinforced dowelled joinery.",
    "specifications": [
      {
        "label": "Upholstery",
        "value": "Premium Textured Boucl\u00e9 / Velvet"
      },
      {
        "label": "Frame",
        "value": "Solid Seasoned Sheesham / Oak"
      },
      {
        "label": "Cushioning",
        "value": "Multi-density high-resiliency foam with down topper"
      },
      {
        "label": "Warranty",
        "value": "10-Year Frame Guarantee"
      }
    ],
    "sizes": [
      "3-Seater",
      "4-Seater",
      "Modular Sectional"
    ],
    "finishes": [
      "Sand Boucl\u00e9",
      "Emerald Velvet",
      "Oatmeal Linen",
      "Midnight Charcoal"
    ]
  },
  {
    "id": "aura-living-5",
    "title": "Orion Triple Wide Arched Bookcase",
    "category": "Living",
    "subcategory": "Coffee Tables",
    "link": "/orion-triple-wide-arched-bookcase",
    "price": "Rs 175,000",
    "numericPrice": 175000,
    "originalPrice": "Rs 218,750",
    "discount": "20% off",
    "badge": "Signature",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Sculptural comfort meets architectural grace. Designed for expansive gathering spaces, featuring premium abrasion-resistant upholstery and reinforced dowelled joinery.",
    "specifications": [
      {
        "label": "Upholstery",
        "value": "Premium Textured Boucl\u00e9 / Velvet"
      },
      {
        "label": "Frame",
        "value": "Solid Seasoned Sheesham / Oak"
      },
      {
        "label": "Cushioning",
        "value": "Multi-density high-resiliency foam with down topper"
      },
      {
        "label": "Warranty",
        "value": "10-Year Frame Guarantee"
      }
    ],
    "sizes": [
      "3-Seater",
      "4-Seater",
      "Modular Sectional"
    ],
    "finishes": [
      "Sand Boucl\u00e9",
      "Emerald Velvet",
      "Oatmeal Linen",
      "Midnight Charcoal"
    ]
  },
  {
    "id": "aura-living-6",
    "title": "Siena Rustic Wood Bookcase",
    "category": "Living",
    "subcategory": "Coffee Tables",
    "link": "/siena-rustic-wood-bookcase",
    "price": "Rs 130,000",
    "numericPrice": 130000,
    "originalPrice": "Rs 162,500",
    "discount": "20% off",
    "badge": "Signature",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Sculptural comfort meets architectural grace. Designed for expansive gathering spaces, featuring premium abrasion-resistant upholstery and reinforced dowelled joinery.",
    "specifications": [
      {
        "label": "Upholstery",
        "value": "Premium Textured Boucl\u00e9 / Velvet"
      },
      {
        "label": "Frame",
        "value": "Solid Seasoned Sheesham / Oak"
      },
      {
        "label": "Cushioning",
        "value": "Multi-density high-resiliency foam with down topper"
      },
      {
        "label": "Warranty",
        "value": "10-Year Frame Guarantee"
      }
    ],
    "sizes": [
      "3-Seater",
      "4-Seater",
      "Modular Sectional"
    ],
    "finishes": [
      "Sand Boucl\u00e9",
      "Emerald Velvet",
      "Oatmeal Linen",
      "Midnight Charcoal"
    ]
  },
  {
    "id": "aura-living-7",
    "title": "Kubu Rotating Bamboo Bookcase",
    "category": "Living",
    "subcategory": "Coffee Tables",
    "link": "/kubu-rotating-bamboo-bookcase",
    "price": "Rs 70,000",
    "numericPrice": 70000,
    "originalPrice": "Rs 87,500",
    "discount": "20% off",
    "badge": "Signature",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Sculptural comfort meets architectural grace. Designed for expansive gathering spaces, featuring premium abrasion-resistant upholstery and reinforced dowelled joinery.",
    "specifications": [
      {
        "label": "Upholstery",
        "value": "Premium Textured Boucl\u00e9 / Velvet"
      },
      {
        "label": "Frame",
        "value": "Solid Seasoned Sheesham / Oak"
      },
      {
        "label": "Cushioning",
        "value": "Multi-density high-resiliency foam with down topper"
      },
      {
        "label": "Warranty",
        "value": "10-Year Frame Guarantee"
      }
    ],
    "sizes": [
      "3-Seater",
      "4-Seater",
      "Modular Sectional"
    ],
    "finishes": [
      "Sand Boucl\u00e9",
      "Emerald Velvet",
      "Oatmeal Linen",
      "Midnight Charcoal"
    ]
  },
  {
    "id": "aura-living-8",
    "title": "Aethel Arched Glass Door Storage Bookcase",
    "category": "Living",
    "subcategory": "Coffee Tables",
    "link": "/aethel-arched-glass-door-storage-bookcase",
    "price": "Rs 90,000",
    "numericPrice": 90000,
    "originalPrice": "Rs 112,500",
    "discount": "20% off",
    "badge": "Signature",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Sculptural comfort meets architectural grace. Designed for expansive gathering spaces, featuring premium abrasion-resistant upholstery and reinforced dowelled joinery.",
    "specifications": [
      {
        "label": "Upholstery",
        "value": "Premium Textured Boucl\u00e9 / Velvet"
      },
      {
        "label": "Frame",
        "value": "Solid Seasoned Sheesham / Oak"
      },
      {
        "label": "Cushioning",
        "value": "Multi-density high-resiliency foam with down topper"
      },
      {
        "label": "Warranty",
        "value": "10-Year Frame Guarantee"
      }
    ],
    "sizes": [
      "3-Seater",
      "4-Seater",
      "Modular Sectional"
    ],
    "finishes": [
      "Sand Boucl\u00e9",
      "Emerald Velvet",
      "Oatmeal Linen",
      "Midnight Charcoal"
    ]
  },
  {
    "id": "aura-living-9",
    "title": "Casper Arched Wooden Bookshelf",
    "category": "Living",
    "subcategory": "Coffee Tables",
    "link": "/casper-arched-wooden-bookshelf",
    "price": "Rs 120,000",
    "numericPrice": 120000,
    "originalPrice": "Rs 150,000",
    "discount": "20% off",
    "badge": "Signature",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Sculptural comfort meets architectural grace. Designed for expansive gathering spaces, featuring premium abrasion-resistant upholstery and reinforced dowelled joinery.",
    "specifications": [
      {
        "label": "Upholstery",
        "value": "Premium Textured Boucl\u00e9 / Velvet"
      },
      {
        "label": "Frame",
        "value": "Solid Seasoned Sheesham / Oak"
      },
      {
        "label": "Cushioning",
        "value": "Multi-density high-resiliency foam with down topper"
      },
      {
        "label": "Warranty",
        "value": "10-Year Frame Guarantee"
      }
    ],
    "sizes": [
      "3-Seater",
      "4-Seater",
      "Modular Sectional"
    ],
    "finishes": [
      "Sand Boucl\u00e9",
      "Emerald Velvet",
      "Oatmeal Linen",
      "Midnight Charcoal"
    ]
  },
  {
    "id": "aura-living-10",
    "title": "Vanguard Solid Wood Storage Bookcase",
    "category": "Living",
    "subcategory": "Coffee Tables",
    "link": "/vanguard-solid-wood-storage-bookcase",
    "price": "Rs 145,000",
    "numericPrice": 145000,
    "originalPrice": "Rs 181,250",
    "discount": "20% off",
    "badge": "Signature",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Sculptural comfort meets architectural grace. Designed for expansive gathering spaces, featuring premium abrasion-resistant upholstery and reinforced dowelled joinery.",
    "specifications": [
      {
        "label": "Upholstery",
        "value": "Premium Textured Boucl\u00e9 / Velvet"
      },
      {
        "label": "Frame",
        "value": "Solid Seasoned Sheesham / Oak"
      },
      {
        "label": "Cushioning",
        "value": "Multi-density high-resiliency foam with down topper"
      },
      {
        "label": "Warranty",
        "value": "10-Year Frame Guarantee"
      }
    ],
    "sizes": [
      "3-Seater",
      "4-Seater",
      "Modular Sectional"
    ],
    "finishes": [
      "Sand Boucl\u00e9",
      "Emerald Velvet",
      "Oatmeal Linen",
      "Midnight Charcoal"
    ]
  },
  {
    "id": "aura-living-11",
    "title": "Modway Ramp Mid-Century Lounge Chair with Ottoman",
    "category": "Living",
    "subcategory": "Accent Chairs",
    "link": "/modway-ramp-mid-century-lounge-chair-with-ottoman",
    "price": "Rs 85,000",
    "numericPrice": 85000,
    "originalPrice": "Rs 106,250",
    "discount": "20% off",
    "badge": "Signature",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Sculptural comfort meets architectural grace. Designed for expansive gathering spaces, featuring premium abrasion-resistant upholstery and reinforced dowelled joinery.",
    "specifications": [
      {
        "label": "Upholstery",
        "value": "Premium Textured Boucl\u00e9 / Velvet"
      },
      {
        "label": "Frame",
        "value": "Solid Seasoned Sheesham / Oak"
      },
      {
        "label": "Cushioning",
        "value": "Multi-density high-resiliency foam with down topper"
      },
      {
        "label": "Warranty",
        "value": "10-Year Frame Guarantee"
      }
    ],
    "sizes": [
      "3-Seater",
      "4-Seater",
      "Modular Sectional"
    ],
    "finishes": [
      "Sand Boucl\u00e9",
      "Emerald Velvet",
      "Oatmeal Linen",
      "Midnight Charcoal"
    ]
  },
  {
    "id": "aura-living-12",
    "title": "Kristiona Mid-Century Modern Upholstered Armchair",
    "category": "Living",
    "subcategory": "Accent Chairs",
    "link": "/kristiona-mid-century-modern-upholstered-armchair",
    "price": "Rs 45,000",
    "numericPrice": 45000,
    "originalPrice": "Rs 56,250",
    "discount": "20% off",
    "badge": "Signature",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Sculptural comfort meets architectural grace. Designed for expansive gathering spaces, featuring premium abrasion-resistant upholstery and reinforced dowelled joinery.",
    "specifications": [
      {
        "label": "Upholstery",
        "value": "Premium Textured Boucl\u00e9 / Velvet"
      },
      {
        "label": "Frame",
        "value": "Solid Seasoned Sheesham / Oak"
      },
      {
        "label": "Cushioning",
        "value": "Multi-density high-resiliency foam with down topper"
      },
      {
        "label": "Warranty",
        "value": "10-Year Frame Guarantee"
      }
    ],
    "sizes": [
      "3-Seater",
      "4-Seater",
      "Modular Sectional"
    ],
    "finishes": [
      "Sand Boucl\u00e9",
      "Emerald Velvet",
      "Oatmeal Linen",
      "Midnight Charcoal"
    ]
  },
  {
    "id": "aura-living-13",
    "title": "Corvo Mid-Century Modern Faux Leather Armchair",
    "category": "Living",
    "subcategory": "Accent Chairs",
    "link": "/corvo-mid-century-modern-faux-leather-armchair",
    "price": "Rs 42,000",
    "numericPrice": 42000,
    "originalPrice": "Rs 52,500",
    "discount": "20% off",
    "badge": "Signature",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Sculptural comfort meets architectural grace. Designed for expansive gathering spaces, featuring premium abrasion-resistant upholstery and reinforced dowelled joinery.",
    "specifications": [
      {
        "label": "Upholstery",
        "value": "Premium Textured Boucl\u00e9 / Velvet"
      },
      {
        "label": "Frame",
        "value": "Solid Seasoned Sheesham / Oak"
      },
      {
        "label": "Cushioning",
        "value": "Multi-density high-resiliency foam with down topper"
      },
      {
        "label": "Warranty",
        "value": "10-Year Frame Guarantee"
      }
    ],
    "sizes": [
      "3-Seater",
      "4-Seater",
      "Modular Sectional"
    ],
    "finishes": [
      "Sand Boucl\u00e9",
      "Emerald Velvet",
      "Oatmeal Linen",
      "Midnight Charcoal"
    ]
  },
  {
    "id": "aura-living-14",
    "title": "Eliana Boucl\u00e9 Swivel Barrel Chair",
    "category": "Living",
    "subcategory": "Accent Chairs",
    "link": "/eliana-boucle-swivel-barrel-chair",
    "price": "Rs 50,000",
    "numericPrice": 50000,
    "originalPrice": "Rs 62,500",
    "discount": "20% off",
    "badge": "Signature",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Sculptural comfort meets architectural grace. Designed for expansive gathering spaces, featuring premium abrasion-resistant upholstery and reinforced dowelled joinery.",
    "specifications": [
      {
        "label": "Upholstery",
        "value": "Premium Textured Boucl\u00e9 / Velvet"
      },
      {
        "label": "Frame",
        "value": "Solid Seasoned Sheesham / Oak"
      },
      {
        "label": "Cushioning",
        "value": "Multi-density high-resiliency foam with down topper"
      },
      {
        "label": "Warranty",
        "value": "10-Year Frame Guarantee"
      }
    ],
    "sizes": [
      "3-Seater",
      "4-Seater",
      "Modular Sectional"
    ],
    "finishes": [
      "Sand Boucl\u00e9",
      "Emerald Velvet",
      "Oatmeal Linen",
      "Midnight Charcoal"
    ]
  },
  {
    "id": "aura-living-15",
    "title": "Sinel Sculptural Modern Upholstered Accent Chair",
    "category": "Living",
    "subcategory": "Accent Chairs",
    "link": "/sinel-sculptural-modern-upholstered-accent-chair",
    "price": "Rs 55,000",
    "numericPrice": 55000,
    "originalPrice": "Rs 68,750",
    "discount": "20% off",
    "badge": "Signature",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1534105615256-13940a56ff44?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Sculptural comfort meets architectural grace. Designed for expansive gathering spaces, featuring premium abrasion-resistant upholstery and reinforced dowelled joinery.",
    "specifications": [
      {
        "label": "Upholstery",
        "value": "Premium Textured Boucl\u00e9 / Velvet"
      },
      {
        "label": "Frame",
        "value": "Solid Seasoned Sheesham / Oak"
      },
      {
        "label": "Cushioning",
        "value": "Multi-density high-resiliency foam with down topper"
      },
      {
        "label": "Warranty",
        "value": "10-Year Frame Guarantee"
      }
    ],
    "sizes": [
      "3-Seater",
      "4-Seater",
      "Modular Sectional"
    ],
    "finishes": [
      "Sand Boucl\u00e9",
      "Emerald Velvet",
      "Oatmeal Linen",
      "Midnight Charcoal"
    ]
  },
  {
    "id": "aura-living-16",
    "title": "Applewold Swivel Faux Leather Barrel Bedroom Chair",
    "category": "Living",
    "subcategory": "Accent Chairs",
    "link": "/applewold-swivel-faux-leather-barrel-bedroom-chair",
    "price": "Rs 45,000",
    "numericPrice": 45000,
    "originalPrice": "Rs 56,250",
    "discount": "20% off",
    "badge": "Signature",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1595351475754-8a520e0bc3a3?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Sculptural comfort meets architectural grace. Designed for expansive gathering spaces, featuring premium abrasion-resistant upholstery and reinforced dowelled joinery.",
    "specifications": [
      {
        "label": "Upholstery",
        "value": "Premium Textured Boucl\u00e9 / Velvet"
      },
      {
        "label": "Frame",
        "value": "Solid Seasoned Sheesham / Oak"
      },
      {
        "label": "Cushioning",
        "value": "Multi-density high-resiliency foam with down topper"
      },
      {
        "label": "Warranty",
        "value": "10-Year Frame Guarantee"
      }
    ],
    "sizes": [
      "3-Seater",
      "4-Seater",
      "Modular Sectional"
    ],
    "finishes": [
      "Sand Boucl\u00e9",
      "Emerald Velvet",
      "Oatmeal Linen",
      "Midnight Charcoal"
    ]
  },
  {
    "id": "aura-living-17",
    "title": "Redenius Oversized Comfy Corduroy Armchair",
    "category": "Living",
    "subcategory": "Accent Chairs",
    "link": "/redenius-oversized-comfy-corduroy-armchair",
    "price": "Rs 70,000",
    "numericPrice": 70000,
    "originalPrice": "Rs 87,500",
    "discount": "20% off",
    "badge": "Signature",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Sculptural comfort meets architectural grace. Designed for expansive gathering spaces, featuring premium abrasion-resistant upholstery and reinforced dowelled joinery.",
    "specifications": [
      {
        "label": "Upholstery",
        "value": "Premium Textured Boucl\u00e9 / Velvet"
      },
      {
        "label": "Frame",
        "value": "Solid Seasoned Sheesham / Oak"
      },
      {
        "label": "Cushioning",
        "value": "Multi-density high-resiliency foam with down topper"
      },
      {
        "label": "Warranty",
        "value": "10-Year Frame Guarantee"
      }
    ],
    "sizes": [
      "3-Seater",
      "4-Seater",
      "Modular Sectional"
    ],
    "finishes": [
      "Sand Boucl\u00e9",
      "Emerald Velvet",
      "Oatmeal Linen",
      "Midnight Charcoal"
    ]
  },
  {
    "id": "aura-living-18",
    "title": "Kyah Velvet Barrel Chair with Nesting Ottoman",
    "category": "Living",
    "subcategory": "Accent Chairs",
    "link": "/kyah-velvet-barrel-chair-with-nesting-ottoman",
    "price": "Rs 48,000",
    "numericPrice": 48000,
    "originalPrice": "Rs 60,000",
    "discount": "20% off",
    "badge": "Signature",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Sculptural comfort meets architectural grace. Designed for expansive gathering spaces, featuring premium abrasion-resistant upholstery and reinforced dowelled joinery.",
    "specifications": [
      {
        "label": "Upholstery",
        "value": "Premium Textured Boucl\u00e9 / Velvet"
      },
      {
        "label": "Frame",
        "value": "Solid Seasoned Sheesham / Oak"
      },
      {
        "label": "Cushioning",
        "value": "Multi-density high-resiliency foam with down topper"
      },
      {
        "label": "Warranty",
        "value": "10-Year Frame Guarantee"
      }
    ],
    "sizes": [
      "3-Seater",
      "4-Seater",
      "Modular Sectional"
    ],
    "finishes": [
      "Sand Boucl\u00e9",
      "Emerald Velvet",
      "Oatmeal Linen",
      "Midnight Charcoal"
    ]
  },
  {
    "id": "aura-living-19",
    "title": "Halprin Striped Cotton Modern Upholstered Entryway Bench",
    "category": "Living",
    "subcategory": "Coffee Tables",
    "link": "/halprin-striped-cotton-modern-upholstered-entryway-bench",
    "price": "Rs 50,000",
    "numericPrice": 50000,
    "originalPrice": "Rs 62,500",
    "discount": "20% off",
    "badge": "Signature",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1551298370-9d3d53740c72?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Sculptural comfort meets architectural grace. Designed for expansive gathering spaces, featuring premium abrasion-resistant upholstery and reinforced dowelled joinery.",
    "specifications": [
      {
        "label": "Upholstery",
        "value": "Premium Textured Boucl\u00e9 / Velvet"
      },
      {
        "label": "Frame",
        "value": "Solid Seasoned Sheesham / Oak"
      },
      {
        "label": "Cushioning",
        "value": "Multi-density high-resiliency foam with down topper"
      },
      {
        "label": "Warranty",
        "value": "10-Year Frame Guarantee"
      }
    ],
    "sizes": [
      "3-Seater",
      "4-Seater",
      "Modular Sectional"
    ],
    "finishes": [
      "Sand Boucl\u00e9",
      "Emerald Velvet",
      "Oatmeal Linen",
      "Midnight Charcoal"
    ]
  },
  {
    "id": "aura-living-20",
    "title": "Shanieka Button-Tufted Modern Flip Top Storage Bench",
    "category": "Living",
    "subcategory": "Coffee Tables",
    "link": "/shanieka-button-tufted-modern-flip-top-storage-bench",
    "price": "Rs 45,000",
    "numericPrice": 45000,
    "originalPrice": "Rs 56,250",
    "discount": "20% off",
    "badge": "Signature",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Sculptural comfort meets architectural grace. Designed for expansive gathering spaces, featuring premium abrasion-resistant upholstery and reinforced dowelled joinery.",
    "specifications": [
      {
        "label": "Upholstery",
        "value": "Premium Textured Boucl\u00e9 / Velvet"
      },
      {
        "label": "Frame",
        "value": "Solid Seasoned Sheesham / Oak"
      },
      {
        "label": "Cushioning",
        "value": "Multi-density high-resiliency foam with down topper"
      },
      {
        "label": "Warranty",
        "value": "10-Year Frame Guarantee"
      }
    ],
    "sizes": [
      "3-Seater",
      "4-Seater",
      "Modular Sectional"
    ],
    "finishes": [
      "Sand Boucl\u00e9",
      "Emerald Velvet",
      "Oatmeal Linen",
      "Midnight Charcoal"
    ]
  },
  {
    "id": "aura-living-21",
    "title": "Shaneta Sage Green Vegan Leather Storage Ottoman Bench",
    "category": "Living",
    "subcategory": "Coffee Tables",
    "link": "/shaneta-sage-green-vegan-leather-storage-ottoman-bench",
    "price": "Rs 55,000",
    "numericPrice": 55000,
    "originalPrice": "Rs 68,750",
    "discount": "20% off",
    "badge": "Signature",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Sculptural comfort meets architectural grace. Designed for expansive gathering spaces, featuring premium abrasion-resistant upholstery and reinforced dowelled joinery.",
    "specifications": [
      {
        "label": "Upholstery",
        "value": "Premium Textured Boucl\u00e9 / Velvet"
      },
      {
        "label": "Frame",
        "value": "Solid Seasoned Sheesham / Oak"
      },
      {
        "label": "Cushioning",
        "value": "Multi-density high-resiliency foam with down topper"
      },
      {
        "label": "Warranty",
        "value": "10-Year Frame Guarantee"
      }
    ],
    "sizes": [
      "3-Seater",
      "4-Seater",
      "Modular Sectional"
    ],
    "finishes": [
      "Sand Boucl\u00e9",
      "Emerald Velvet",
      "Oatmeal Linen",
      "Midnight Charcoal"
    ]
  },
  {
    "id": "aura-living-22",
    "title": "Kylin Blush Velvet Button Tufted Luxury Ottoman Bench",
    "category": "Living",
    "subcategory": "Coffee Tables",
    "link": "/kylin-blush-velvet-button-tufted-luxury-ottoman-bench",
    "price": "Rs 45,000",
    "numericPrice": 45000,
    "originalPrice": "Rs 56,250",
    "discount": "20% off",
    "badge": "Signature",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1578500351865-d6c3706f46bc?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Sculptural comfort meets architectural grace. Designed for expansive gathering spaces, featuring premium abrasion-resistant upholstery and reinforced dowelled joinery.",
    "specifications": [
      {
        "label": "Upholstery",
        "value": "Premium Textured Boucl\u00e9 / Velvet"
      },
      {
        "label": "Frame",
        "value": "Solid Seasoned Sheesham / Oak"
      },
      {
        "label": "Cushioning",
        "value": "Multi-density high-resiliency foam with down topper"
      },
      {
        "label": "Warranty",
        "value": "10-Year Frame Guarantee"
      }
    ],
    "sizes": [
      "3-Seater",
      "4-Seater",
      "Modular Sectional"
    ],
    "finishes": [
      "Sand Boucl\u00e9",
      "Emerald Velvet",
      "Oatmeal Linen",
      "Midnight Charcoal"
    ]
  },
  {
    "id": "aura-living-23",
    "title": "Shaneta Vegan Leather Storage Ottoman",
    "category": "Living",
    "subcategory": "Coffee Tables",
    "link": "/shaneta-vegan-leather-storage-ottoman",
    "price": "Rs 55,000",
    "numericPrice": 55000,
    "originalPrice": "Rs 68,750",
    "discount": "20% off",
    "badge": "Signature",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1530603907829-659ab5ec057b?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Sculptural comfort meets architectural grace. Designed for expansive gathering spaces, featuring premium abrasion-resistant upholstery and reinforced dowelled joinery.",
    "specifications": [
      {
        "label": "Upholstery",
        "value": "Premium Textured Boucl\u00e9 / Velvet"
      },
      {
        "label": "Frame",
        "value": "Solid Seasoned Sheesham / Oak"
      },
      {
        "label": "Cushioning",
        "value": "Multi-density high-resiliency foam with down topper"
      },
      {
        "label": "Warranty",
        "value": "10-Year Frame Guarantee"
      }
    ],
    "sizes": [
      "3-Seater",
      "4-Seater",
      "Modular Sectional"
    ],
    "finishes": [
      "Sand Boucl\u00e9",
      "Emerald Velvet",
      "Oatmeal Linen",
      "Midnight Charcoal"
    ]
  },
  {
    "id": "aura-living-24",
    "title": "Lucien Luxury Velvet Entryway Settee Bench",
    "category": "Living",
    "subcategory": "Coffee Tables",
    "link": "/lucien-luxury-velvet-entryway-settee-bench",
    "price": "Rs 65,000",
    "numericPrice": 65000,
    "originalPrice": "Rs 81,250",
    "discount": "20% off",
    "badge": "Signature",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Sculptural comfort meets architectural grace. Designed for expansive gathering spaces, featuring premium abrasion-resistant upholstery and reinforced dowelled joinery.",
    "specifications": [
      {
        "label": "Upholstery",
        "value": "Premium Textured Boucl\u00e9 / Velvet"
      },
      {
        "label": "Frame",
        "value": "Solid Seasoned Sheesham / Oak"
      },
      {
        "label": "Cushioning",
        "value": "Multi-density high-resiliency foam with down topper"
      },
      {
        "label": "Warranty",
        "value": "10-Year Frame Guarantee"
      }
    ],
    "sizes": [
      "3-Seater",
      "4-Seater",
      "Modular Sectional"
    ],
    "finishes": [
      "Sand Boucl\u00e9",
      "Emerald Velvet",
      "Oatmeal Linen",
      "Midnight Charcoal"
    ]
  },
  {
    "id": "aura-living-25",
    "title": "Raphael Fluted Modern Velvet Ottoman",
    "category": "Living",
    "subcategory": "Coffee Tables",
    "link": "/raphael-fluted-modern-velvet-ottoman",
    "price": "Rs 35,000",
    "numericPrice": 35000,
    "originalPrice": "Rs 43,750",
    "discount": "20% off",
    "badge": "Signature",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1520699049698-acd2fccb8cc8?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Sculptural comfort meets architectural grace. Designed for expansive gathering spaces, featuring premium abrasion-resistant upholstery and reinforced dowelled joinery.",
    "specifications": [
      {
        "label": "Upholstery",
        "value": "Premium Textured Boucl\u00e9 / Velvet"
      },
      {
        "label": "Frame",
        "value": "Solid Seasoned Sheesham / Oak"
      },
      {
        "label": "Cushioning",
        "value": "Multi-density high-resiliency foam with down topper"
      },
      {
        "label": "Warranty",
        "value": "10-Year Frame Guarantee"
      }
    ],
    "sizes": [
      "3-Seater",
      "4-Seater",
      "Modular Sectional"
    ],
    "finishes": [
      "Sand Boucl\u00e9",
      "Emerald Velvet",
      "Oatmeal Linen",
      "Midnight Charcoal"
    ]
  },
  {
    "id": "aura-living-26",
    "title": "Flavel Mid-Century Tufted Ottoman Entryway Bench",
    "category": "Living",
    "subcategory": "Coffee Tables",
    "link": "/flavel-mid-century-tufted-ottoman-entryway-bench",
    "price": "Rs 60,000",
    "numericPrice": 60000,
    "originalPrice": "Rs 75,000",
    "discount": "20% off",
    "badge": "Signature",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Sculptural comfort meets architectural grace. Designed for expansive gathering spaces, featuring premium abrasion-resistant upholstery and reinforced dowelled joinery.",
    "specifications": [
      {
        "label": "Upholstery",
        "value": "Premium Textured Boucl\u00e9 / Velvet"
      },
      {
        "label": "Frame",
        "value": "Solid Seasoned Sheesham / Oak"
      },
      {
        "label": "Cushioning",
        "value": "Multi-density high-resiliency foam with down topper"
      },
      {
        "label": "Warranty",
        "value": "10-Year Frame Guarantee"
      }
    ],
    "sizes": [
      "3-Seater",
      "4-Seater",
      "Modular Sectional"
    ],
    "finishes": [
      "Sand Boucl\u00e9",
      "Emerald Velvet",
      "Oatmeal Linen",
      "Midnight Charcoal"
    ]
  },
  {
    "id": "aura-living-27",
    "title": "Brinna Traditional Upholstered Flip Top Faux Leather Ottoman",
    "category": "Living",
    "subcategory": "Coffee Tables",
    "link": "/brinna-traditional-upholstered-flip-top-faux-leather-ottoman",
    "price": "Rs 45,000",
    "numericPrice": 45000,
    "originalPrice": "Rs 56,250",
    "discount": "20% off",
    "badge": "Signature",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Sculptural comfort meets architectural grace. Designed for expansive gathering spaces, featuring premium abrasion-resistant upholstery and reinforced dowelled joinery.",
    "specifications": [
      {
        "label": "Upholstery",
        "value": "Premium Textured Boucl\u00e9 / Velvet"
      },
      {
        "label": "Frame",
        "value": "Solid Seasoned Sheesham / Oak"
      },
      {
        "label": "Cushioning",
        "value": "Multi-density high-resiliency foam with down topper"
      },
      {
        "label": "Warranty",
        "value": "10-Year Frame Guarantee"
      }
    ],
    "sizes": [
      "3-Seater",
      "4-Seater",
      "Modular Sectional"
    ],
    "finishes": [
      "Sand Boucl\u00e9",
      "Emerald Velvet",
      "Oatmeal Linen",
      "Midnight Charcoal"
    ]
  },
  {
    "id": "aura-living-28",
    "title": "Gio Full-Grain Leather Ottoman",
    "category": "Living",
    "subcategory": "Coffee Tables",
    "link": "/gio-full-grain-leather-ottoman",
    "price": "Rs 55,000",
    "numericPrice": 55000,
    "originalPrice": "Rs 68,750",
    "discount": "20% off",
    "badge": "Signature",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Sculptural comfort meets architectural grace. Designed for expansive gathering spaces, featuring premium abrasion-resistant upholstery and reinforced dowelled joinery.",
    "specifications": [
      {
        "label": "Upholstery",
        "value": "Premium Textured Boucl\u00e9 / Velvet"
      },
      {
        "label": "Frame",
        "value": "Solid Seasoned Sheesham / Oak"
      },
      {
        "label": "Cushioning",
        "value": "Multi-density high-resiliency foam with down topper"
      },
      {
        "label": "Warranty",
        "value": "10-Year Frame Guarantee"
      }
    ],
    "sizes": [
      "3-Seater",
      "4-Seater",
      "Modular Sectional"
    ],
    "finishes": [
      "Sand Boucl\u00e9",
      "Emerald Velvet",
      "Oatmeal Linen",
      "Midnight Charcoal"
    ]
  },
  {
    "id": "aura-living-29",
    "title": "Aria Velvet Storage Ottoman Bench",
    "category": "Living",
    "subcategory": "Coffee Tables",
    "link": "/aria-velvet-storage-ottoman-bench",
    "price": "Rs 45,000",
    "numericPrice": 45000,
    "originalPrice": "Rs 56,250",
    "discount": "20% off",
    "badge": "Signature",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1551516594-56cb78394645?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Sculptural comfort meets architectural grace. Designed for expansive gathering spaces, featuring premium abrasion-resistant upholstery and reinforced dowelled joinery.",
    "specifications": [
      {
        "label": "Upholstery",
        "value": "Premium Textured Boucl\u00e9 / Velvet"
      },
      {
        "label": "Frame",
        "value": "Solid Seasoned Sheesham / Oak"
      },
      {
        "label": "Cushioning",
        "value": "Multi-density high-resiliency foam with down topper"
      },
      {
        "label": "Warranty",
        "value": "10-Year Frame Guarantee"
      }
    ],
    "sizes": [
      "3-Seater",
      "4-Seater",
      "Modular Sectional"
    ],
    "finishes": [
      "Sand Boucl\u00e9",
      "Emerald Velvet",
      "Oatmeal Linen",
      "Midnight Charcoal"
    ]
  },
  {
    "id": "aura-living-30",
    "title": "Serene Cloud Boucl\u00e9 Luxury Ottoman Bench",
    "category": "Living",
    "subcategory": "Coffee Tables",
    "link": "/serene-cloud-boucle-luxury-ottoman-bench",
    "price": "Rs 45,000",
    "numericPrice": 45000,
    "originalPrice": "Rs 56,250",
    "discount": "20% off",
    "badge": "Signature",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1556020685-ae41abfc9365?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Sculptural comfort meets architectural grace. Designed for expansive gathering spaces, featuring premium abrasion-resistant upholstery and reinforced dowelled joinery.",
    "specifications": [
      {
        "label": "Upholstery",
        "value": "Premium Textured Boucl\u00e9 / Velvet"
      },
      {
        "label": "Frame",
        "value": "Solid Seasoned Sheesham / Oak"
      },
      {
        "label": "Cushioning",
        "value": "Multi-density high-resiliency foam with down topper"
      },
      {
        "label": "Warranty",
        "value": "10-Year Frame Guarantee"
      }
    ],
    "sizes": [
      "3-Seater",
      "4-Seater",
      "Modular Sectional"
    ],
    "finishes": [
      "Sand Boucl\u00e9",
      "Emerald Velvet",
      "Oatmeal Linen",
      "Midnight Charcoal"
    ]
  },
  {
    "id": "aura-living-31",
    "title": "Aurelia Brushed Gold C-Shaped Modern Side Table",
    "category": "Living",
    "subcategory": "Coffee Tables",
    "link": "/aurelia-brushed-gold-c-shaped-modern-side-table",
    "price": "Rs 40,000",
    "numericPrice": 40000,
    "originalPrice": "Rs 50,000",
    "discount": "20% off",
    "badge": "Signature",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Sculptural comfort meets architectural grace. Designed for expansive gathering spaces, featuring premium abrasion-resistant upholstery and reinforced dowelled joinery.",
    "specifications": [
      {
        "label": "Upholstery",
        "value": "Premium Textured Boucl\u00e9 / Velvet"
      },
      {
        "label": "Frame",
        "value": "Solid Seasoned Sheesham / Oak"
      },
      {
        "label": "Cushioning",
        "value": "Multi-density high-resiliency foam with down topper"
      },
      {
        "label": "Warranty",
        "value": "10-Year Frame Guarantee"
      }
    ],
    "sizes": [
      "3-Seater",
      "4-Seater",
      "Modular Sectional"
    ],
    "finishes": [
      "Sand Boucl\u00e9",
      "Emerald Velvet",
      "Oatmeal Linen",
      "Midnight Charcoal"
    ]
  },
  {
    "id": "aura-living-32",
    "title": "Elysian Mirrored Octagon Luxury Crystal End Table",
    "category": "Living",
    "subcategory": "Coffee Tables",
    "link": "/elysian-mirrored-octagon-luxury-crystal-end-table",
    "price": "Rs 46,000",
    "numericPrice": 46000,
    "originalPrice": "Rs 57,500",
    "discount": "20% off",
    "badge": "Signature",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1558882224-dda166733046?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Sculptural comfort meets architectural grace. Designed for expansive gathering spaces, featuring premium abrasion-resistant upholstery and reinforced dowelled joinery.",
    "specifications": [
      {
        "label": "Upholstery",
        "value": "Premium Textured Boucl\u00e9 / Velvet"
      },
      {
        "label": "Frame",
        "value": "Solid Seasoned Sheesham / Oak"
      },
      {
        "label": "Cushioning",
        "value": "Multi-density high-resiliency foam with down topper"
      },
      {
        "label": "Warranty",
        "value": "10-Year Frame Guarantee"
      }
    ],
    "sizes": [
      "3-Seater",
      "4-Seater",
      "Modular Sectional"
    ],
    "finishes": [
      "Sand Boucl\u00e9",
      "Emerald Velvet",
      "Oatmeal Linen",
      "Midnight Charcoal"
    ]
  },
  {
    "id": "aura-living-33",
    "title": "Aurelia Gold Textured Modern Accent Side Table",
    "category": "Living",
    "subcategory": "Coffee Tables",
    "link": "/aurelia-gold-textured-modern-accent-side-table",
    "price": "Rs 85,000",
    "numericPrice": 85000,
    "originalPrice": "Rs 106,250",
    "discount": "20% off",
    "badge": "Signature",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Sculptural comfort meets architectural grace. Designed for expansive gathering spaces, featuring premium abrasion-resistant upholstery and reinforced dowelled joinery.",
    "specifications": [
      {
        "label": "Upholstery",
        "value": "Premium Textured Boucl\u00e9 / Velvet"
      },
      {
        "label": "Frame",
        "value": "Solid Seasoned Sheesham / Oak"
      },
      {
        "label": "Cushioning",
        "value": "Multi-density high-resiliency foam with down topper"
      },
      {
        "label": "Warranty",
        "value": "10-Year Frame Guarantee"
      }
    ],
    "sizes": [
      "3-Seater",
      "4-Seater",
      "Modular Sectional"
    ],
    "finishes": [
      "Sand Boucl\u00e9",
      "Emerald Velvet",
      "Oatmeal Linen",
      "Midnight Charcoal"
    ]
  },
  {
    "id": "aura-living-34",
    "title": "Lux Silhouette Round Space Saving Side Table",
    "category": "Living",
    "subcategory": "Coffee Tables",
    "link": "/lux-silhouette-round-space-saving-side-table",
    "price": "Rs 68,000",
    "numericPrice": 68000,
    "originalPrice": "Rs 85,000",
    "discount": "20% off",
    "badge": "Signature",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Sculptural comfort meets architectural grace. Designed for expansive gathering spaces, featuring premium abrasion-resistant upholstery and reinforced dowelled joinery.",
    "specifications": [
      {
        "label": "Upholstery",
        "value": "Premium Textured Boucl\u00e9 / Velvet"
      },
      {
        "label": "Frame",
        "value": "Solid Seasoned Sheesham / Oak"
      },
      {
        "label": "Cushioning",
        "value": "Multi-density high-resiliency foam with down topper"
      },
      {
        "label": "Warranty",
        "value": "10-Year Frame Guarantee"
      }
    ],
    "sizes": [
      "3-Seater",
      "4-Seater",
      "Modular Sectional"
    ],
    "finishes": [
      "Sand Boucl\u00e9",
      "Emerald Velvet",
      "Oatmeal Linen",
      "Midnight Charcoal"
    ]
  },
  {
    "id": "aura-living-35",
    "title": "Seraphina Traditional Round Storage End Table",
    "category": "Living",
    "subcategory": "Coffee Tables",
    "link": "/seraphina-traditional-round-storage-end-table",
    "price": "Rs 35,000",
    "numericPrice": 35000,
    "originalPrice": "Rs 43,750",
    "discount": "20% off",
    "badge": "Signature",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1560185009-dddeb820c7b7?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Sculptural comfort meets architectural grace. Designed for expansive gathering spaces, featuring premium abrasion-resistant upholstery and reinforced dowelled joinery.",
    "specifications": [
      {
        "label": "Upholstery",
        "value": "Premium Textured Boucl\u00e9 / Velvet"
      },
      {
        "label": "Frame",
        "value": "Solid Seasoned Sheesham / Oak"
      },
      {
        "label": "Cushioning",
        "value": "Multi-density high-resiliency foam with down topper"
      },
      {
        "label": "Warranty",
        "value": "10-Year Frame Guarantee"
      }
    ],
    "sizes": [
      "3-Seater",
      "4-Seater",
      "Modular Sectional"
    ],
    "finishes": [
      "Sand Boucl\u00e9",
      "Emerald Velvet",
      "Oatmeal Linen",
      "Midnight Charcoal"
    ]
  },
  {
    "id": "aura-living-36",
    "title": "Everleigh Vintage Wood USB Charging Port Sofa Side Table",
    "category": "Living",
    "subcategory": "Sofa Sets",
    "link": "/everleigh-vintage-wood-usb-charging-port-sofa-side-table",
    "price": "Rs 32,000",
    "numericPrice": 32000,
    "originalPrice": "Rs 40,000",
    "discount": "20% off",
    "badge": "Signature",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "Sculptural comfort meets architectural grace. Designed for expansive gathering spaces, featuring premium abrasion-resistant upholstery and reinforced dowelled joinery.",
    "specifications": [
      {
        "label": "Upholstery",
        "value": "Premium Textured Boucl\u00e9 / Velvet"
      },
      {
        "label": "Frame",
        "value": "Solid Seasoned Sheesham / Oak"
      },
      {
        "label": "Cushioning",
        "value": "Multi-density high-resiliency foam with down topper"
      },
      {
        "label": "Warranty",
        "value": "10-Year Frame Guarantee"
      }
    ],
    "sizes": [
      "3-Seater",
      "4-Seater",
      "Modular Sectional"
    ],
    "finishes": [
      "Sand Boucl\u00e9",
      "Emerald Velvet",
      "Oatmeal Linen",
      "Midnight Charcoal"
    ]
  },
  {
    "id": "aura-dining-1",
    "title": "Artisan\u2019s Arched Seeded Glass Modern Farmhouse Storage Display Cabinets",
    "category": "Dining",
    "subcategory": "Display Cabinets",
    "link": "/artisans-arched-seeded-glass-modern-farmhouse-storage-display-cabinets",
    "price": "Rs 145,000",
    "numericPrice": 145000,
    "originalPrice": "Rs 181,250",
    "discount": null,
    "badge": "Bespoke",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "A centerpiece for celebration. Hand-selected solid timber paired with brushed metallic accents or sintered stone surfaces.",
    "specifications": [
      {
        "label": "Surface",
        "value": "Sintered Stone / Solid Natural Walnut"
      },
      {
        "label": "Legs / Base",
        "value": "Electroplated Brass / Solid Wood"
      },
      {
        "label": "Seats",
        "value": "6-8 Person Capacity"
      },
      {
        "label": "Warranty",
        "value": "10-Year Guarantee"
      }
    ],
    "sizes": [
      "6-Seater (6x3.5 ft)",
      "8-Seater (8x4 ft)",
      "10-Seater (10x4.5 ft)"
    ],
    "finishes": [
      "Natural Walnut",
      "Calacatta Gold Sintered Stone",
      "Ebony Oak",
      "Smoked Ash"
    ]
  },
  {
    "id": "aura-dining-2",
    "title": "Everly Heritage Rustic Wood Display Cabinets",
    "category": "Dining",
    "subcategory": "Display Cabinets",
    "link": "/everly-heritage-rustic-wood-display-cabinets",
    "price": "Rs 150,000",
    "numericPrice": 150000,
    "originalPrice": "Rs 187,500",
    "discount": null,
    "badge": "Bespoke",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "A centerpiece for celebration. Hand-selected solid timber paired with brushed metallic accents or sintered stone surfaces.",
    "specifications": [
      {
        "label": "Surface",
        "value": "Sintered Stone / Solid Natural Walnut"
      },
      {
        "label": "Legs / Base",
        "value": "Electroplated Brass / Solid Wood"
      },
      {
        "label": "Seats",
        "value": "6-8 Person Capacity"
      },
      {
        "label": "Warranty",
        "value": "10-Year Guarantee"
      }
    ],
    "sizes": [
      "6-Seater (6x3.5 ft)",
      "8-Seater (8x4 ft)",
      "10-Seater (10x4.5 ft)"
    ],
    "finishes": [
      "Natural Walnut",
      "Calacatta Gold Sintered Stone",
      "Ebony Oak",
      "Smoked Ash"
    ]
  },
  {
    "id": "aura-dining-3",
    "title": "Giddeon Luxe Modern Glass Curio Display Cabinets",
    "category": "Dining",
    "subcategory": "Display Cabinets",
    "link": "/giddeon-luxe-modern-glass-curio-display-cabinets",
    "price": "Rs 145,000",
    "numericPrice": 145000,
    "originalPrice": "Rs 181,250",
    "discount": null,
    "badge": "Bespoke",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "A centerpiece for celebration. Hand-selected solid timber paired with brushed metallic accents or sintered stone surfaces.",
    "specifications": [
      {
        "label": "Surface",
        "value": "Sintered Stone / Solid Natural Walnut"
      },
      {
        "label": "Legs / Base",
        "value": "Electroplated Brass / Solid Wood"
      },
      {
        "label": "Seats",
        "value": "6-8 Person Capacity"
      },
      {
        "label": "Warranty",
        "value": "10-Year Guarantee"
      }
    ],
    "sizes": [
      "6-Seater (6x3.5 ft)",
      "8-Seater (8x4 ft)",
      "10-Seater (10x4.5 ft)"
    ],
    "finishes": [
      "Natural Walnut",
      "Calacatta Gold Sintered Stone",
      "Ebony Oak",
      "Smoked Ash"
    ]
  },
  {
    "id": "aura-dining-4",
    "title": "Giddeon Luxe Oak Modern Glass Curio Display Cabinets",
    "category": "Dining",
    "subcategory": "Display Cabinets",
    "link": "/giddeon-luxe-oak-modern-glass-curio-display-cabinets",
    "price": "Rs 175,000",
    "numericPrice": 175000,
    "originalPrice": "Rs 218,750",
    "discount": null,
    "badge": "Bespoke",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "A centerpiece for celebration. Hand-selected solid timber paired with brushed metallic accents or sintered stone surfaces.",
    "specifications": [
      {
        "label": "Surface",
        "value": "Sintered Stone / Solid Natural Walnut"
      },
      {
        "label": "Legs / Base",
        "value": "Electroplated Brass / Solid Wood"
      },
      {
        "label": "Seats",
        "value": "6-8 Person Capacity"
      },
      {
        "label": "Warranty",
        "value": "10-Year Guarantee"
      }
    ],
    "sizes": [
      "6-Seater (6x3.5 ft)",
      "8-Seater (8x4 ft)",
      "10-Seater (10x4.5 ft)"
    ],
    "finishes": [
      "Natural Walnut",
      "Calacatta Gold Sintered Stone",
      "Ebony Oak",
      "Smoked Ash"
    ]
  },
  {
    "id": "aura-dining-5",
    "title": "Everly Heritage Farmhouse Rustic Wood Glass Display Cabinets",
    "category": "Dining",
    "subcategory": "Display Cabinets",
    "link": "/everly-heritage-farmhouse-rustic-wood-glass-display-cabinets",
    "price": "Rs 145,000",
    "numericPrice": 145000,
    "originalPrice": "Rs 181,250",
    "discount": null,
    "badge": "Bespoke",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "A centerpiece for celebration. Hand-selected solid timber paired with brushed metallic accents or sintered stone surfaces.",
    "specifications": [
      {
        "label": "Surface",
        "value": "Sintered Stone / Solid Natural Walnut"
      },
      {
        "label": "Legs / Base",
        "value": "Electroplated Brass / Solid Wood"
      },
      {
        "label": "Seats",
        "value": "6-8 Person Capacity"
      },
      {
        "label": "Warranty",
        "value": "10-Year Guarantee"
      }
    ],
    "sizes": [
      "6-Seater (6x3.5 ft)",
      "8-Seater (8x4 ft)",
      "10-Seater (10x4.5 ft)"
    ],
    "finishes": [
      "Natural Walnut",
      "Calacatta Gold Sintered Stone",
      "Ebony Oak",
      "Smoked Ash"
    ]
  },
  {
    "id": "aura-dining-6",
    "title": "Leesburg Manor Luxury Traditional Hardwood Lighted Display Cabinet",
    "category": "Dining",
    "subcategory": "Display Cabinets",
    "link": "/leesburg-manor-luxury-traditional-hardwood-lighted-display-cabinet",
    "price": "Rs 150,000",
    "numericPrice": 150000,
    "originalPrice": "Rs 187,500",
    "discount": null,
    "badge": "Bespoke",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "A centerpiece for celebration. Hand-selected solid timber paired with brushed metallic accents or sintered stone surfaces.",
    "specifications": [
      {
        "label": "Surface",
        "value": "Sintered Stone / Solid Natural Walnut"
      },
      {
        "label": "Legs / Base",
        "value": "Electroplated Brass / Solid Wood"
      },
      {
        "label": "Seats",
        "value": "6-8 Person Capacity"
      },
      {
        "label": "Warranty",
        "value": "10-Year Guarantee"
      }
    ],
    "sizes": [
      "6-Seater (6x3.5 ft)",
      "8-Seater (8x4 ft)",
      "10-Seater (10x4.5 ft)"
    ],
    "finishes": [
      "Natural Walnut",
      "Calacatta Gold Sintered Stone",
      "Ebony Oak",
      "Smoked Ash"
    ]
  },
  {
    "id": "aura-dining-7",
    "title": "Aurelia Midnight Arched Modern Farmhouse Storage Display Cabinet",
    "category": "Dining",
    "subcategory": "Display Cabinets",
    "link": "/aurelia-midnight-arched-modern-farmhouse-storage-display-cabinet",
    "price": "Rs 150,000",
    "numericPrice": 150000,
    "originalPrice": "Rs 187,500",
    "discount": null,
    "badge": "Bespoke",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "A centerpiece for celebration. Hand-selected solid timber paired with brushed metallic accents or sintered stone surfaces.",
    "specifications": [
      {
        "label": "Surface",
        "value": "Sintered Stone / Solid Natural Walnut"
      },
      {
        "label": "Legs / Base",
        "value": "Electroplated Brass / Solid Wood"
      },
      {
        "label": "Seats",
        "value": "6-8 Person Capacity"
      },
      {
        "label": "Warranty",
        "value": "10-Year Guarantee"
      }
    ],
    "sizes": [
      "6-Seater (6x3.5 ft)",
      "8-Seater (8x4 ft)",
      "10-Seater (10x4.5 ft)"
    ],
    "finishes": [
      "Natural Walnut",
      "Calacatta Gold Sintered Stone",
      "Ebony Oak",
      "Smoked Ash"
    ]
  },
  {
    "id": "aura-dining-8",
    "title": "Giddeon Elite Modern Luxury Glass Display Cabinets",
    "category": "Dining",
    "subcategory": "Display Cabinets",
    "link": "/giddeon-elite-modern-luxury-glass-display-cabinets",
    "price": "Rs 175,000",
    "numericPrice": 175000,
    "originalPrice": "Rs 218,750",
    "discount": null,
    "badge": "Bespoke",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1582037928769-181f2644ecb7?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "A centerpiece for celebration. Hand-selected solid timber paired with brushed metallic accents or sintered stone surfaces.",
    "specifications": [
      {
        "label": "Surface",
        "value": "Sintered Stone / Solid Natural Walnut"
      },
      {
        "label": "Legs / Base",
        "value": "Electroplated Brass / Solid Wood"
      },
      {
        "label": "Seats",
        "value": "6-8 Person Capacity"
      },
      {
        "label": "Warranty",
        "value": "10-Year Guarantee"
      }
    ],
    "sizes": [
      "6-Seater (6x3.5 ft)",
      "8-Seater (8x4 ft)",
      "10-Seater (10x4.5 ft)"
    ],
    "finishes": [
      "Natural Walnut",
      "Calacatta Gold Sintered Stone",
      "Ebony Oak",
      "Smoked Ash"
    ]
  },
  {
    "id": "aura-dining-9",
    "title": "Heritage Grand Buffet Kitchen Pantry Farmhouse Display Cabinet",
    "category": "Dining",
    "subcategory": "Display Cabinets",
    "link": "/heritage-grand-buffet-kitchen-pantry-farmhouse-display-cabinet",
    "price": "Rs 150,000",
    "numericPrice": 150000,
    "originalPrice": "Rs 187,500",
    "discount": null,
    "badge": "Bespoke",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1583845112239-97ef1341b271?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "A centerpiece for celebration. Hand-selected solid timber paired with brushed metallic accents or sintered stone surfaces.",
    "specifications": [
      {
        "label": "Surface",
        "value": "Sintered Stone / Solid Natural Walnut"
      },
      {
        "label": "Legs / Base",
        "value": "Electroplated Brass / Solid Wood"
      },
      {
        "label": "Seats",
        "value": "6-8 Person Capacity"
      },
      {
        "label": "Warranty",
        "value": "10-Year Guarantee"
      }
    ],
    "sizes": [
      "6-Seater (6x3.5 ft)",
      "8-Seater (8x4 ft)",
      "10-Seater (10x4.5 ft)"
    ],
    "finishes": [
      "Natural Walnut",
      "Calacatta Gold Sintered Stone",
      "Ebony Oak",
      "Smoked Ash"
    ]
  },
  {
    "id": "aura-dining-10",
    "title": "Everly Farmhouse Buffet Modern Kitchen Pantry Glass Display Cabinet",
    "category": "Dining",
    "subcategory": "Display Cabinets",
    "link": "/everly-farmhouse-buffet-modern-kitchen-pantry-glass-display-cabinet",
    "price": "Rs 150,000",
    "numericPrice": 150000,
    "originalPrice": "Rs 187,500",
    "discount": null,
    "badge": "Bespoke",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "A centerpiece for celebration. Hand-selected solid timber paired with brushed metallic accents or sintered stone surfaces.",
    "specifications": [
      {
        "label": "Surface",
        "value": "Sintered Stone / Solid Natural Walnut"
      },
      {
        "label": "Legs / Base",
        "value": "Electroplated Brass / Solid Wood"
      },
      {
        "label": "Seats",
        "value": "6-8 Person Capacity"
      },
      {
        "label": "Warranty",
        "value": "10-Year Guarantee"
      }
    ],
    "sizes": [
      "6-Seater (6x3.5 ft)",
      "8-Seater (8x4 ft)",
      "10-Seater (10x4.5 ft)"
    ],
    "finishes": [
      "Natural Walnut",
      "Calacatta Gold Sintered Stone",
      "Ebony Oak",
      "Smoked Ash"
    ]
  },
  {
    "id": "aura-dining-11",
    "title": "Provence Vintage Oak Modern Display Cabinet",
    "category": "Dining",
    "subcategory": "Display Cabinets",
    "link": "/provence-vintage-oak-modern-display-cabinet",
    "price": "Rs 150,000",
    "numericPrice": 150000,
    "originalPrice": "Rs 187,500",
    "discount": null,
    "badge": "Bespoke",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "A centerpiece for celebration. Hand-selected solid timber paired with brushed metallic accents or sintered stone surfaces.",
    "specifications": [
      {
        "label": "Surface",
        "value": "Sintered Stone / Solid Natural Walnut"
      },
      {
        "label": "Legs / Base",
        "value": "Electroplated Brass / Solid Wood"
      },
      {
        "label": "Seats",
        "value": "6-8 Person Capacity"
      },
      {
        "label": "Warranty",
        "value": "10-Year Guarantee"
      }
    ],
    "sizes": [
      "6-Seater (6x3.5 ft)",
      "8-Seater (8x4 ft)",
      "10-Seater (10x4.5 ft)"
    ],
    "finishes": [
      "Natural Walnut",
      "Calacatta Gold Sintered Stone",
      "Ebony Oak",
      "Smoked Ash"
    ]
  },
  {
    "id": "aura-dining-12",
    "title": "Antoinette Glamour Mirrored Storage Sideboard Buffet Cabinet",
    "category": "Dining",
    "subcategory": "Display Cabinets",
    "link": "/antoinette-glamour-mirrored-storage-sideboard-buffet-cabinet",
    "price": "Rs 75,000",
    "numericPrice": 75000,
    "originalPrice": "Rs 93,750",
    "discount": null,
    "badge": "Bespoke",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "A centerpiece for celebration. Hand-selected solid timber paired with brushed metallic accents or sintered stone surfaces.",
    "specifications": [
      {
        "label": "Surface",
        "value": "Sintered Stone / Solid Natural Walnut"
      },
      {
        "label": "Legs / Base",
        "value": "Electroplated Brass / Solid Wood"
      },
      {
        "label": "Seats",
        "value": "6-8 Person Capacity"
      },
      {
        "label": "Warranty",
        "value": "10-Year Guarantee"
      }
    ],
    "sizes": [
      "6-Seater (6x3.5 ft)",
      "8-Seater (8x4 ft)",
      "10-Seater (10x4.5 ft)"
    ],
    "finishes": [
      "Natural Walnut",
      "Calacatta Gold Sintered Stone",
      "Ebony Oak",
      "Smoked Ash"
    ]
  },
  {
    "id": "aura-dining-13",
    "title": "Everly Grey Modular Dining Room Storage Buffet Cabinet",
    "category": "Dining",
    "subcategory": "Display Cabinets",
    "link": "/everly-grey-modular-dining-room-storage-buffet-cabinet",
    "price": "Rs 150,000",
    "numericPrice": 150000,
    "originalPrice": "Rs 187,500",
    "discount": null,
    "badge": "Bespoke",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "A centerpiece for celebration. Hand-selected solid timber paired with brushed metallic accents or sintered stone surfaces.",
    "specifications": [
      {
        "label": "Surface",
        "value": "Sintered Stone / Solid Natural Walnut"
      },
      {
        "label": "Legs / Base",
        "value": "Electroplated Brass / Solid Wood"
      },
      {
        "label": "Seats",
        "value": "6-8 Person Capacity"
      },
      {
        "label": "Warranty",
        "value": "10-Year Guarantee"
      }
    ],
    "sizes": [
      "6-Seater (6x3.5 ft)",
      "8-Seater (8x4 ft)",
      "10-Seater (10x4.5 ft)"
    ],
    "finishes": [
      "Natural Walnut",
      "Calacatta Gold Sintered Stone",
      "Ebony Oak",
      "Smoked Ash"
    ]
  },
  {
    "id": "aura-dining-14",
    "title": "Aadam Nordic Modern Storage Buffet Sideboard",
    "category": "Dining",
    "subcategory": "Dining Table Sets",
    "link": "/aadam-nordic-modern-storage-buffet-sideboard",
    "price": "Rs 85,000",
    "numericPrice": 85000,
    "originalPrice": "Rs 106,250",
    "discount": null,
    "badge": "Bespoke",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "A centerpiece for celebration. Hand-selected solid timber paired with brushed metallic accents or sintered stone surfaces.",
    "specifications": [
      {
        "label": "Surface",
        "value": "Sintered Stone / Solid Natural Walnut"
      },
      {
        "label": "Legs / Base",
        "value": "Electroplated Brass / Solid Wood"
      },
      {
        "label": "Seats",
        "value": "6-8 Person Capacity"
      },
      {
        "label": "Warranty",
        "value": "10-Year Guarantee"
      }
    ],
    "sizes": [
      "6-Seater (6x3.5 ft)",
      "8-Seater (8x4 ft)",
      "10-Seater (10x4.5 ft)"
    ],
    "finishes": [
      "Natural Walnut",
      "Calacatta Gold Sintered Stone",
      "Ebony Oak",
      "Smoked Ash"
    ]
  },
  {
    "id": "aura-dining-15",
    "title": "Milan Glossy Modern Luxury Buffet Cabinet",
    "category": "Dining",
    "subcategory": "Display Cabinets",
    "link": "/milan-glossy-modern-luxury-buffet-cabinet",
    "price": "Rs 75,000",
    "numericPrice": 75000,
    "originalPrice": "Rs 93,750",
    "discount": null,
    "badge": "Bespoke",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "A centerpiece for celebration. Hand-selected solid timber paired with brushed metallic accents or sintered stone surfaces.",
    "specifications": [
      {
        "label": "Surface",
        "value": "Sintered Stone / Solid Natural Walnut"
      },
      {
        "label": "Legs / Base",
        "value": "Electroplated Brass / Solid Wood"
      },
      {
        "label": "Seats",
        "value": "6-8 Person Capacity"
      },
      {
        "label": "Warranty",
        "value": "10-Year Guarantee"
      }
    ],
    "sizes": [
      "6-Seater (6x3.5 ft)",
      "8-Seater (8x4 ft)",
      "10-Seater (10x4.5 ft)"
    ],
    "finishes": [
      "Natural Walnut",
      "Calacatta Gold Sintered Stone",
      "Ebony Oak",
      "Smoked Ash"
    ]
  },
  {
    "id": "aura-dining-16",
    "title": "Regency Walnut Modular Dining Room Storage Buffet Cabinet",
    "category": "Dining",
    "subcategory": "Display Cabinets",
    "link": "/regency-walnut-modular-dining-room-storage-buffet-cabinet",
    "price": "Rs 150,000",
    "numericPrice": 150000,
    "originalPrice": "Rs 187,500",
    "discount": null,
    "badge": "Bespoke",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "A centerpiece for celebration. Hand-selected solid timber paired with brushed metallic accents or sintered stone surfaces.",
    "specifications": [
      {
        "label": "Surface",
        "value": "Sintered Stone / Solid Natural Walnut"
      },
      {
        "label": "Legs / Base",
        "value": "Electroplated Brass / Solid Wood"
      },
      {
        "label": "Seats",
        "value": "6-8 Person Capacity"
      },
      {
        "label": "Warranty",
        "value": "10-Year Guarantee"
      }
    ],
    "sizes": [
      "6-Seater (6x3.5 ft)",
      "8-Seater (8x4 ft)",
      "10-Seater (10x4.5 ft)"
    ],
    "finishes": [
      "Natural Walnut",
      "Calacatta Gold Sintered Stone",
      "Ebony Oak",
      "Smoked Ash"
    ]
  },
  {
    "id": "aura-dining-17",
    "title": "Zhen Solid Modern Sideboard Buffet Cabinet",
    "category": "Dining",
    "subcategory": "Display Cabinets",
    "link": "/zhen-solid-modern-sideboard-buffet-cabinet",
    "price": "Rs 55,000",
    "numericPrice": 55000,
    "originalPrice": "Rs 68,750",
    "discount": null,
    "badge": "Bespoke",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1598300056393-4aac492f4344?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "A centerpiece for celebration. Hand-selected solid timber paired with brushed metallic accents or sintered stone surfaces.",
    "specifications": [
      {
        "label": "Surface",
        "value": "Sintered Stone / Solid Natural Walnut"
      },
      {
        "label": "Legs / Base",
        "value": "Electroplated Brass / Solid Wood"
      },
      {
        "label": "Seats",
        "value": "6-8 Person Capacity"
      },
      {
        "label": "Warranty",
        "value": "10-Year Guarantee"
      }
    ],
    "sizes": [
      "6-Seater (6x3.5 ft)",
      "8-Seater (8x4 ft)",
      "10-Seater (10x4.5 ft)"
    ],
    "finishes": [
      "Natural Walnut",
      "Calacatta Gold Sintered Stone",
      "Ebony Oak",
      "Smoked Ash"
    ]
  },
  {
    "id": "aura-dining-18",
    "title": "Mandea Mid-Century Walnut Sideboard",
    "category": "Dining",
    "subcategory": "Dining Table Sets",
    "link": "/mandea-mid-century-walnut-sideboard",
    "price": "Rs 55,000",
    "numericPrice": 55000,
    "originalPrice": "Rs 68,750",
    "discount": null,
    "badge": "Bespoke",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "A centerpiece for celebration. Hand-selected solid timber paired with brushed metallic accents or sintered stone surfaces.",
    "specifications": [
      {
        "label": "Surface",
        "value": "Sintered Stone / Solid Natural Walnut"
      },
      {
        "label": "Legs / Base",
        "value": "Electroplated Brass / Solid Wood"
      },
      {
        "label": "Seats",
        "value": "6-8 Person Capacity"
      },
      {
        "label": "Warranty",
        "value": "10-Year Guarantee"
      }
    ],
    "sizes": [
      "6-Seater (6x3.5 ft)",
      "8-Seater (8x4 ft)",
      "10-Seater (10x4.5 ft)"
    ],
    "finishes": [
      "Natural Walnut",
      "Calacatta Gold Sintered Stone",
      "Ebony Oak",
      "Smoked Ash"
    ]
  },
  {
    "id": "aura-dining-19",
    "title": "Scarlett Vintage Oak Sideboard Buffet Storage Cabinet",
    "category": "Dining",
    "subcategory": "Display Cabinets",
    "link": "/scarlett-vintage-oak-sideboard-buffet-storage-cabinet",
    "price": "Rs 150,000",
    "numericPrice": 150000,
    "originalPrice": "Rs 187,500",
    "discount": null,
    "badge": "Bespoke",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "A centerpiece for celebration. Hand-selected solid timber paired with brushed metallic accents or sintered stone surfaces.",
    "specifications": [
      {
        "label": "Surface",
        "value": "Sintered Stone / Solid Natural Walnut"
      },
      {
        "label": "Legs / Base",
        "value": "Electroplated Brass / Solid Wood"
      },
      {
        "label": "Seats",
        "value": "6-8 Person Capacity"
      },
      {
        "label": "Warranty",
        "value": "10-Year Guarantee"
      }
    ],
    "sizes": [
      "6-Seater (6x3.5 ft)",
      "8-Seater (8x4 ft)",
      "10-Seater (10x4.5 ft)"
    ],
    "finishes": [
      "Natural Walnut",
      "Calacatta Gold Sintered Stone",
      "Ebony Oak",
      "Smoked Ash"
    ]
  },
  {
    "id": "aura-dining-20",
    "title": "Carville Navy Blue Modern Sideboard Buffet Cabinet",
    "category": "Dining",
    "subcategory": "Display Cabinets",
    "link": "/carville-navy-blue-modern-sideboard-buffet-cabinet",
    "price": "Rs 135,000",
    "numericPrice": 135000,
    "originalPrice": "Rs 168,750",
    "discount": null,
    "badge": "Bespoke",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "A centerpiece for celebration. Hand-selected solid timber paired with brushed metallic accents or sintered stone surfaces.",
    "specifications": [
      {
        "label": "Surface",
        "value": "Sintered Stone / Solid Natural Walnut"
      },
      {
        "label": "Legs / Base",
        "value": "Electroplated Brass / Solid Wood"
      },
      {
        "label": "Seats",
        "value": "6-8 Person Capacity"
      },
      {
        "label": "Warranty",
        "value": "10-Year Guarantee"
      }
    ],
    "sizes": [
      "6-Seater (6x3.5 ft)",
      "8-Seater (8x4 ft)",
      "10-Seater (10x4.5 ft)"
    ],
    "finishes": [
      "Natural Walnut",
      "Calacatta Gold Sintered Stone",
      "Ebony Oak",
      "Smoked Ash"
    ]
  },
  {
    "id": "aura-dining-21",
    "title": "Andora Fluted Oak Modern Sideboard Storage Cabinet",
    "category": "Dining",
    "subcategory": "Display Cabinets",
    "link": "/andora-fluted-oak-modern-sideboard-storage-cabinet",
    "price": "Rs 75,000",
    "numericPrice": 75000,
    "originalPrice": "Rs 93,750",
    "discount": null,
    "badge": "Bespoke",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "A centerpiece for celebration. Hand-selected solid timber paired with brushed metallic accents or sintered stone surfaces.",
    "specifications": [
      {
        "label": "Surface",
        "value": "Sintered Stone / Solid Natural Walnut"
      },
      {
        "label": "Legs / Base",
        "value": "Electroplated Brass / Solid Wood"
      },
      {
        "label": "Seats",
        "value": "6-8 Person Capacity"
      },
      {
        "label": "Warranty",
        "value": "10-Year Guarantee"
      }
    ],
    "sizes": [
      "6-Seater (6x3.5 ft)",
      "8-Seater (8x4 ft)",
      "10-Seater (10x4.5 ft)"
    ],
    "finishes": [
      "Natural Walnut",
      "Calacatta Gold Sintered Stone",
      "Ebony Oak",
      "Smoked Ash"
    ]
  },
  {
    "id": "aura-dining-22",
    "title": "Everett Arched Modern Display Storage Sideboard Cabinet",
    "category": "Dining",
    "subcategory": "Display Cabinets",
    "link": "/everett-arched-modern-display-storage-sideboard-cabinet",
    "price": "Rs 150,000",
    "numericPrice": 150000,
    "originalPrice": "Rs 187,500",
    "discount": null,
    "badge": "Bespoke",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "A centerpiece for celebration. Hand-selected solid timber paired with brushed metallic accents or sintered stone surfaces.",
    "specifications": [
      {
        "label": "Surface",
        "value": "Sintered Stone / Solid Natural Walnut"
      },
      {
        "label": "Legs / Base",
        "value": "Electroplated Brass / Solid Wood"
      },
      {
        "label": "Seats",
        "value": "6-8 Person Capacity"
      },
      {
        "label": "Warranty",
        "value": "10-Year Guarantee"
      }
    ],
    "sizes": [
      "6-Seater (6x3.5 ft)",
      "8-Seater (8x4 ft)",
      "10-Seater (10x4.5 ft)"
    ],
    "finishes": [
      "Natural Walnut",
      "Calacatta Gold Sintered Stone",
      "Ebony Oak",
      "Smoked Ash"
    ]
  },
  {
    "id": "aura-dining-23",
    "title": "Habsburg Heritage Live Edge Solid Wood Table",
    "category": "Dining",
    "subcategory": "Dining Table Sets",
    "link": "/habsburg-heritage-live-edge-solid-wood-table",
    "price": "Rs 365,000",
    "numericPrice": 365000,
    "originalPrice": "Rs 456,250",
    "discount": null,
    "badge": "Bespoke",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "A centerpiece for celebration. Hand-selected solid timber paired with brushed metallic accents or sintered stone surfaces.",
    "specifications": [
      {
        "label": "Surface",
        "value": "Sintered Stone / Solid Natural Walnut"
      },
      {
        "label": "Legs / Base",
        "value": "Electroplated Brass / Solid Wood"
      },
      {
        "label": "Seats",
        "value": "6-8 Person Capacity"
      },
      {
        "label": "Warranty",
        "value": "10-Year Guarantee"
      }
    ],
    "sizes": [
      "6-Seater (6x3.5 ft)",
      "8-Seater (8x4 ft)",
      "10-Seater (10x4.5 ft)"
    ],
    "finishes": [
      "Natural Walnut",
      "Calacatta Gold Sintered Stone",
      "Ebony Oak",
      "Smoked Ash"
    ]
  },
  {
    "id": "aura-dining-24",
    "title": "Gilded Glacier Modern Marble Gold Dining Table",
    "category": "Dining",
    "subcategory": "Dining Table Sets",
    "link": "/gilded-glacier-modern-marble-gold-dining-table",
    "price": "Rs 246,000",
    "numericPrice": 246000,
    "originalPrice": "Rs 307,500",
    "discount": null,
    "badge": "Bespoke",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "A centerpiece for celebration. Hand-selected solid timber paired with brushed metallic accents or sintered stone surfaces.",
    "specifications": [
      {
        "label": "Surface",
        "value": "Sintered Stone / Solid Natural Walnut"
      },
      {
        "label": "Legs / Base",
        "value": "Electroplated Brass / Solid Wood"
      },
      {
        "label": "Seats",
        "value": "6-8 Person Capacity"
      },
      {
        "label": "Warranty",
        "value": "10-Year Guarantee"
      }
    ],
    "sizes": [
      "6-Seater (6x3.5 ft)",
      "8-Seater (8x4 ft)",
      "10-Seater (10x4.5 ft)"
    ],
    "finishes": [
      "Natural Walnut",
      "Calacatta Gold Sintered Stone",
      "Ebony Oak",
      "Smoked Ash"
    ]
  },
  {
    "id": "aura-dining-25",
    "title": "Visionnaire Kerwan Couture Black Marble Dining Table",
    "category": "Dining",
    "subcategory": "Dining Table Sets",
    "link": "/visionnaire-kerwan-couture-black-marble-dining-table",
    "price": "Rs 346,000",
    "numericPrice": 346000,
    "originalPrice": "Rs 432,500",
    "discount": null,
    "badge": "Bespoke",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "A centerpiece for celebration. Hand-selected solid timber paired with brushed metallic accents or sintered stone surfaces.",
    "specifications": [
      {
        "label": "Surface",
        "value": "Sintered Stone / Solid Natural Walnut"
      },
      {
        "label": "Legs / Base",
        "value": "Electroplated Brass / Solid Wood"
      },
      {
        "label": "Seats",
        "value": "6-8 Person Capacity"
      },
      {
        "label": "Warranty",
        "value": "10-Year Guarantee"
      }
    ],
    "sizes": [
      "6-Seater (6x3.5 ft)",
      "8-Seater (8x4 ft)",
      "10-Seater (10x4.5 ft)"
    ],
    "finishes": [
      "Natural Walnut",
      "Calacatta Gold Sintered Stone",
      "Ebony Oak",
      "Smoked Ash"
    ]
  },
  {
    "id": "aura-dining-26",
    "title": "Hobart Modern Luxury Sintered Stone Table",
    "category": "Dining",
    "subcategory": "Dining Table Sets",
    "link": "/hobart-modern-luxury-sintered-stone-table",
    "price": "Rs 289,000",
    "numericPrice": 289000,
    "originalPrice": "Rs 361,250",
    "discount": null,
    "badge": "Bespoke",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "A centerpiece for celebration. Hand-selected solid timber paired with brushed metallic accents or sintered stone surfaces.",
    "specifications": [
      {
        "label": "Surface",
        "value": "Sintered Stone / Solid Natural Walnut"
      },
      {
        "label": "Legs / Base",
        "value": "Electroplated Brass / Solid Wood"
      },
      {
        "label": "Seats",
        "value": "6-8 Person Capacity"
      },
      {
        "label": "Warranty",
        "value": "10-Year Guarantee"
      }
    ],
    "sizes": [
      "6-Seater (6x3.5 ft)",
      "8-Seater (8x4 ft)",
      "10-Seater (10x4.5 ft)"
    ],
    "finishes": [
      "Natural Walnut",
      "Calacatta Gold Sintered Stone",
      "Ebony Oak",
      "Smoked Ash"
    ]
  },
  {
    "id": "aura-dining-27",
    "title": "Eastway Rustic Industrial Wood Dining Table",
    "category": "Dining",
    "subcategory": "Dining Table Sets",
    "link": "/eastway-rustic-industrial-wood-dining-table",
    "price": "Rs 180,000",
    "numericPrice": 180000,
    "originalPrice": "Rs 225,000",
    "discount": null,
    "badge": "Bespoke",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "A centerpiece for celebration. Hand-selected solid timber paired with brushed metallic accents or sintered stone surfaces.",
    "specifications": [
      {
        "label": "Surface",
        "value": "Sintered Stone / Solid Natural Walnut"
      },
      {
        "label": "Legs / Base",
        "value": "Electroplated Brass / Solid Wood"
      },
      {
        "label": "Seats",
        "value": "6-8 Person Capacity"
      },
      {
        "label": "Warranty",
        "value": "10-Year Guarantee"
      }
    ],
    "sizes": [
      "6-Seater (6x3.5 ft)",
      "8-Seater (8x4 ft)",
      "10-Seater (10x4.5 ft)"
    ],
    "finishes": [
      "Natural Walnut",
      "Calacatta Gold Sintered Stone",
      "Ebony Oak",
      "Smoked Ash"
    ]
  },
  {
    "id": "aura-dining-28",
    "title": "Aubriannah Wave Luxury Marble Dining Table",
    "category": "Dining",
    "subcategory": "Dining Table Sets",
    "link": "/aubriannah-wave-luxury-marble-dining-table",
    "price": "Rs 350,000",
    "numericPrice": 350000,
    "originalPrice": "Rs 437,500",
    "discount": null,
    "badge": "Bespoke",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "A centerpiece for celebration. Hand-selected solid timber paired with brushed metallic accents or sintered stone surfaces.",
    "specifications": [
      {
        "label": "Surface",
        "value": "Sintered Stone / Solid Natural Walnut"
      },
      {
        "label": "Legs / Base",
        "value": "Electroplated Brass / Solid Wood"
      },
      {
        "label": "Seats",
        "value": "6-8 Person Capacity"
      },
      {
        "label": "Warranty",
        "value": "10-Year Guarantee"
      }
    ],
    "sizes": [
      "6-Seater (6x3.5 ft)",
      "8-Seater (8x4 ft)",
      "10-Seater (10x4.5 ft)"
    ],
    "finishes": [
      "Natural Walnut",
      "Calacatta Gold Sintered Stone",
      "Ebony Oak",
      "Smoked Ash"
    ]
  },
  {
    "id": "aura-dining-29",
    "title": "Agas Silhouette Modern Round Marble Table",
    "category": "Dining",
    "subcategory": "Dining Table Sets",
    "link": "/aura-silhouette-modern-round-marble-table",
    "price": "Rs 180,000",
    "numericPrice": 180000,
    "originalPrice": "Rs 225,000",
    "discount": null,
    "badge": "Bespoke",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "A centerpiece for celebration. Hand-selected solid timber paired with brushed metallic accents or sintered stone surfaces.",
    "specifications": [
      {
        "label": "Surface",
        "value": "Sintered Stone / Solid Natural Walnut"
      },
      {
        "label": "Legs / Base",
        "value": "Electroplated Brass / Solid Wood"
      },
      {
        "label": "Seats",
        "value": "6-8 Person Capacity"
      },
      {
        "label": "Warranty",
        "value": "10-Year Guarantee"
      }
    ],
    "sizes": [
      "6-Seater (6x3.5 ft)",
      "8-Seater (8x4 ft)",
      "10-Seater (10x4.5 ft)"
    ],
    "finishes": [
      "Natural Walnut",
      "Calacatta Gold Sintered Stone",
      "Ebony Oak",
      "Smoked Ash"
    ]
  },
  {
    "id": "aura-dining-30",
    "title": "Crown Elegance Oval Marble Luxury Dining Table",
    "category": "Dining",
    "subcategory": "Dining Table Sets",
    "link": "/crown-elegance-oval-marble-luxury-dining-table",
    "price": "Rs 358,000",
    "numericPrice": 358000,
    "originalPrice": "Rs 447,500",
    "discount": null,
    "badge": "Bespoke",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "A centerpiece for celebration. Hand-selected solid timber paired with brushed metallic accents or sintered stone surfaces.",
    "specifications": [
      {
        "label": "Surface",
        "value": "Sintered Stone / Solid Natural Walnut"
      },
      {
        "label": "Legs / Base",
        "value": "Electroplated Brass / Solid Wood"
      },
      {
        "label": "Seats",
        "value": "6-8 Person Capacity"
      },
      {
        "label": "Warranty",
        "value": "10-Year Guarantee"
      }
    ],
    "sizes": [
      "6-Seater (6x3.5 ft)",
      "8-Seater (8x4 ft)",
      "10-Seater (10x4.5 ft)"
    ],
    "finishes": [
      "Natural Walnut",
      "Calacatta Gold Sintered Stone",
      "Ebony Oak",
      "Smoked Ash"
    ]
  },
  {
    "id": "aura-dining-31",
    "title": "Vanguard Mosaic Art Deco Dining Table",
    "category": "Dining",
    "subcategory": "Dining Table Sets",
    "link": "/vanguard-mosaic-art-deco-dining-table",
    "price": "Rs 293,000",
    "numericPrice": 293000,
    "originalPrice": "Rs 366,250",
    "discount": null,
    "badge": "Bespoke",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "A centerpiece for celebration. Hand-selected solid timber paired with brushed metallic accents or sintered stone surfaces.",
    "specifications": [
      {
        "label": "Surface",
        "value": "Sintered Stone / Solid Natural Walnut"
      },
      {
        "label": "Legs / Base",
        "value": "Electroplated Brass / Solid Wood"
      },
      {
        "label": "Seats",
        "value": "6-8 Person Capacity"
      },
      {
        "label": "Warranty",
        "value": "10-Year Guarantee"
      }
    ],
    "sizes": [
      "6-Seater (6x3.5 ft)",
      "8-Seater (8x4 ft)",
      "10-Seater (10x4.5 ft)"
    ],
    "finishes": [
      "Natural Walnut",
      "Calacatta Gold Sintered Stone",
      "Ebony Oak",
      "Smoked Ash"
    ]
  },
  {
    "id": "aura-dining-32",
    "title": "Opulent Noir Luxury Marble Dining Table",
    "category": "Dining",
    "subcategory": "Dining Table Sets",
    "link": "/opulent-noir-luxury-marble-dining-table",
    "price": "Rs 290,000",
    "numericPrice": 290000,
    "originalPrice": "Rs 362,500",
    "discount": null,
    "badge": "Bespoke",
    "leadTime": "Delivered in 5\u201310 business days; made-to-order pieces in 15\u201330 days",
    "images": [
      "https://images.unsplash.com/photo-1556909114-44e3e70034e2?auto=format&fit=crop&w=1200&q=80"
    ],
    "description": "A centerpiece for celebration. Hand-selected solid timber paired with brushed metallic accents or sintered stone surfaces.",
    "specifications": [
      {
        "label": "Surface",
        "value": "Sintered Stone / Solid Natural Walnut"
      },
      {
        "label": "Legs / Base",
        "value": "Electroplated Brass / Solid Wood"
      },
      {
        "label": "Seats",
        "value": "6-8 Person Capacity"
      },
      {
        "label": "Warranty",
        "value": "10-Year Guarantee"
      }
    ],
    "sizes": [
      "6-Seater (6x3.5 ft)",
      "8-Seater (8x4 ft)",
      "10-Seater (10x4.5 ft)"
    ],
    "finishes": [
      "Natural Walnut",
      "Calacatta Gold Sintered Stone",
      "Ebony Oak",
      "Smoked Ash"
    ]
  },
  {
    "id": "agas-outdoor-1",
    "title": "Aero Solid Teak Outdoor Lounge Suite",
    "category": "Outdoor",
    "subcategory": "Outdoor Sofas",
    "link": "/aero-solid-teak-outdoor-lounge-suite",
    "price": "Rs 285,000",
    "numericPrice": 285000,
    "originalPrice": "Rs 340,000",
    "discount": null,
    "badge": "New Collection",
    "leadTime": "Handcrafted to order in 15\u201325 business days",
    "images": [
      "/img/outdoor/outdoor-hero.jpg",
      "/img/outdoor/outdoor-villa.jpg"
    ],
    "description": "Mastercrafted by AGAS Interiors using sustainably harvested Grade-A teak and high-performance weather-resistant Sunbrella fabrics designed specifically for rooftop terraces and garden courtyards.",
    "specifications": [
      {
        "label": "Timber",
        "value": "Seasoned Grade-A Solid Teak Wood"
      },
      {
        "label": "Upholstery",
        "value": "Quick-dry foam with water-repellent performance textile"
      },
      {
        "label": "Hardware",
        "value": "Marine-grade 316 stainless steel joinery"
      }
    ],
    "sizes": [
      "L-Shape (10ft x 8ft)",
      "Custom Measurements"
    ],
    "finishes": [
      "Natural Teak",
      "Weathered Grey",
      "Smoked Teak"
    ]
  },
  {
    "id": "agas-outdoor-2",
    "title": "Solstice Garden Teak Dining Set",
    "category": "Outdoor",
    "subcategory": "Outdoor Dining",
    "link": "/solstice-garden-teak-dining-set",
    "price": "Rs 240,000",
    "numericPrice": 240000,
    "originalPrice": "Rs 290,000",
    "discount": null,
    "badge": "Architectural",
    "leadTime": "Delivered in 15\u201320 business days",
    "images": [
      "/img/outdoor/outdoor-dining.jpg",
      "/img/outdoor/outdoor-patio-dining.jpg"
    ],
    "description": "An architectural 8-seater garden dining ensemble combining natural oiled teak slabs with handwoven polyolefin rope dining armchairs suited for outdoor entertaining.",
    "specifications": [
      {
        "label": "Tabletop",
        "value": "45mm Solid Teak Planks"
      },
      {
        "label": "Chairs",
        "value": "Powder-coated aluminum frame with UV-resistant woven cord"
      },
      {
        "label": "Capacity",
        "value": "8 Adults"
      }
    ],
    "sizes": [
      "8-Seater (8ft x 3.5ft)",
      "10-Seater (10ft x 4ft)"
    ],
    "finishes": [
      "Natural Golden Teak",
      "Charcoal & Teak"
    ]
  },
  {
    "id": "agas-outdoor-3",
    "title": "Canopy Villa Poolside Double Daybed",
    "category": "Outdoor",
    "subcategory": "Daybeds & Loungers",
    "link": "/canopy-villa-poolside-double-daybed",
    "price": "Rs 210,000",
    "numericPrice": 210000,
    "originalPrice": "Rs 260,000",
    "discount": null,
    "badge": "Estate Series",
    "leadTime": "Delivered in 15\u201320 business days",
    "images": [
      "/img/outdoor/outdoor-daybed.jpg",
      "/img/outdoor/outdoor-poolside-cabana.jpg"
    ],
    "description": "A sanctuary for private villas and poolside terraces. Features an architectural aluminum canopy, weather-resistant adjustable shades, and plush dual lounging cushions.",
    "specifications": [
      {
        "label": "Frame",
        "value": "Rust-proof architectural extruded aluminum"
      },
      {
        "label": "Canopy",
        "value": "UV50+ retractable linen canopy"
      },
      {
        "label": "Cushions",
        "value": "Dual 8-inch high resilience outdoor foam"
      }
    ],
    "sizes": [
      "Double (200cm x 180cm)"
    ],
    "finishes": [
      "Anthracite Grey Frame",
      "Matte White Frame"
    ]
  },
  {
    "id": "agas-outdoor-4",
    "title": "Tulum Woven Rope Terrace Armchairs",
    "category": "Outdoor",
    "subcategory": "Terrace Chairs",
    "link": "/tulum-woven-rope-terrace-armchairs",
    "price": "Rs 95,000",
    "numericPrice": 95000,
    "originalPrice": "Rs 120,000",
    "discount": null,
    "badge": "Artisan",
    "leadTime": "Delivered in 7\u201314 business days",
    "images": [
      "/img/outdoor/outdoor-armchair.jpg",
      "/img/outdoor/outdoor-armchair-detail.jpg"
    ],
    "description": "Set of 2 handcrafted occasional outdoor armchairs featuring artisanal tactile rope weave on sculpted dark charcoal aluminum framing with water-resistant accent pillows.",
    "specifications": [
      {
        "label": "Set Includes",
        "value": "2 Armchairs + 1 Teak Accent Table"
      },
      {
        "label": "Rope",
        "value": "Olefin weather-resistant nautical rope"
      }
    ],
    "sizes": [
      "Standard Lounge Width 75cm"
    ],
    "finishes": [
      "Warm Sand / Charcoal",
      "Olive / Teak"
    ]
  },
  {
    "id": "agas-outdoor-5",
    "title": "Riviera Teak & Mesh Sun Loungers (Pair)",
    "category": "Outdoor",
    "subcategory": "Poolside Loungers",
    "link": "/riviera-teak-mesh-sun-loungers",
    "price": "Rs 145,000",
    "numericPrice": 145000,
    "originalPrice": "Rs 175,000",
    "discount": null,
    "badge": "Signature",
    "leadTime": "Delivered in 10\u201314 business days",
    "images": [
      "/img/outdoor/outdoor-sun-loungers.jpg",
      "/images/garden-rooftop-terrace.jpg"
    ],
    "description": "Pair of adjustable recline poolside loungers crafted with Grade-A Burmese teak framing, Batyline UV-resistant breathable mesh sling, and matching drinks pedestal table.",
    "specifications": [
      {
        "label": "Set Includes",
        "value": "2 Reclining Loungers + 1 Square Side Table"
      },
      {
        "label": "Wood",
        "value": "Kiln-dried solid plantation teak"
      },
      {
        "label": "Mesh",
        "value": "French Batyline all-weather sling"
      }
    ],
    "sizes": [
      "Standard Pool Lounger (200cm x 70cm)"
    ],
    "finishes": [
      "Natural Teak / Sand Mesh",
      "Weathered Teak / Charcoal Mesh"
    ]
  },
  {
    "id": "agas-outdoor-6",
    "title": "Solarium Sunken Firepit & Bench Suite",
    "category": "Outdoor",
    "subcategory": "Terrace Suites",
    "link": "/solarium-sunken-firepit-bench-suite",
    "price": "Rs 420,000",
    "numericPrice": 420000,
    "originalPrice": "Rs 490,000",
    "discount": null,
    "badge": "Architectural",
    "leadTime": "Built to order in 18\u201325 business days",
    "images": [
      "/img/outdoor/outdoor-firepit.jpg",
      "/images/garden-zen-courtyard.jpg"
    ],
    "description": "Comprehensive sunken courtyard lounge featuring modular marine-grade teak banquette seating, Sunbrella outdoor cushions, and a custom architectural linear fire table.",
    "specifications": [
      {
        "label": "Configuration",
        "value": "U-Shaped banquette seating up to 12 persons"
      },
      {
        "label": "Fire Table",
        "value": "Engineered lightweight concrete with gas burner kit"
      },
      {
        "label": "Textiles",
        "value": "Sunbrella outdoor marine-grade canvas"
      }
    ],
    "sizes": [
      "Custom Courtyard Dimensions (4.5m x 4.0m Base)"
    ],
    "finishes": [
      "Honed Concrete / Natural Teak",
      "Charcoal Concrete / Smoked Teak"
    ]
  },
  {
    "id": "agas-outdoor-7",
    "title": "Aura Suspended Timber Daybed Swing",
    "category": "Outdoor",
    "subcategory": "Garden Swings",
    "link": "/aura-suspended-timber-daybed-swing",
    "price": "Rs 195,000",
    "numericPrice": 195000,
    "originalPrice": "Rs 230,000",
    "discount": null,
    "badge": "Handcrafted",
    "leadTime": "Delivered in 12\u201318 business days",
    "images": [
      "/img/outdoor/outdoor-pergola-swing.jpg",
      "/images/garden-villa-oasis.jpg"
    ],
    "description": "Bespoke hanging porch daybed swing with marine rope suspension, solid teak frame, deep antimicrobial waterproof mattress, and matching bolster cushions.",
    "specifications": [
      {
        "label": "Suspension",
        "value": "Heavy-duty nautical jute-poly rope + forged steel shackles"
      },
      {
        "label": "Mattress",
        "value": "6-inch reticulated outdoor foam"
      },
      {
        "label": "Weight Rating",
        "value": "Tested to 380 kg dynamic load"
      }
    ],
    "sizes": [
      "Daybed Width 210cm x Depth 95cm"
    ],
    "finishes": [
      "Warm Teak / Ivory Linen",
      "Driftwood Grey / Taupe"
    ]
  },
  {
    "id": "agas-outdoor-8",
    "title": "Atelier Teak & Travertine Outdoor Coffee Table",
    "category": "Outdoor",
    "subcategory": "Outdoor Tables",
    "link": "/atelier-teak-travertine-outdoor-coffee-table",
    "price": "Rs 88,000",
    "numericPrice": 88000,
    "originalPrice": "Rs 105,000",
    "discount": null,
    "badge": "Artisan",
    "leadTime": "Delivered in 7\u201310 business days",
    "images": [
      "/img/outdoor/outdoor-coffee-table.jpg",
      "/assets/images/materials/stone.webp"
    ],
    "description": "Low architectural statement coffee table pairing solid teak timber base joinery with an unpolished honed Roman travertine stone top insert.",
    "specifications": [
      {
        "label": "Top",
        "value": "20mm Sealed Natural Roman Travertine Slab"
      },
      {
        "label": "Base",
        "value": "Solid Grade-A Teak plinth construction"
      }
    ],
    "sizes": [
      "120cm x 80cm x 36cm Height"
    ],
    "finishes": [
      "Natural Teak / Beige Travertine",
      "Charcoal Oak / Grey Sintered Stone"
    ]
  },
  {
    "id": "agas-outdoor-9",
    "title": "Veranda Outdoor Island Bar & Teak Stools",
    "category": "Outdoor",
    "subcategory": "Outdoor Bars",
    "link": "/veranda-outdoor-island-bar-teak-stools",
    "price": "Rs 310,000",
    "numericPrice": 310000,
    "originalPrice": "Rs 360,000",
    "discount": null,
    "badge": "Architectural",
    "leadTime": "Built to order in 14\u201320 business days",
    "images": [
      "/img/outdoor/outdoor-bar-counter.jpg",
      "/img/outdoor/outdoor-villa-patio.jpg"
    ],
    "description": "Architectural outdoor beverage station and waterfall bar island complete with 4 solid teak bar stools featuring woven Olefin cord backs.",
    "specifications": [
      {
        "label": "Countertop",
        "value": "Waterfall Quartzite / Sintered Stone top"
      },
      {
        "label": "Stools",
        "value": "4 Ergonomic Teak Barstools included"
      }
    ],
    "sizes": [
      "Island Length 220cm x Depth 75cm x Height 105cm"
    ],
    "finishes": [
      "Calacatta Quartzite / Natural Teak",
      "Nero Marquina / Dark Charcoal Teak"
    ]
  }
];
