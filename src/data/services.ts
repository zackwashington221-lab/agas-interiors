export interface Service {
  id: string;
  name: string;
  slug: string;
  summary: string;
  description: string;
  inclusions: string[];
  materials: string[];
  process: string[];
  gallery: Array<{
    url: string;
    alt: string;
    caption?: string;
  }>;
  relatedProjectIds: string[];
  relatedProductCategory?: string;
  faqs: Array<{
    q: string;
    a: string;
  }>;
}

export const SERVICES: Service[] = [
  {
    id: "srv-interior-design",
    name: "Interior Design & Furnishing",
    slug: "interior-design",
    summary: "Comprehensive space planning, 3D architectural visualization, and bespoke interior execution for luxury residences and penthouses in Karachi.",
    description: "Our interior design practice combines spatial intelligence with tactile materiality. We guide clients through every phase: from conceptual layouts and lighting design to custom furniture procurement and final styling.",
    inclusions: [
      "Full residential spatial planning and traffic flow design",
      "Photorealistic 3D renders and architectural mood boards",
      "Integrated lighting layouts and electrical schematics",
      "Custom furniture curation and upholstery selection",
      "Curated art, hardware, and window treatment styling",
      "On-site execution management and turnkey handover"
    ],
    materials: [
      "Natural smoked oak and walnut veneers",
      "Imported boucle, Italian velvet, and Belgian linen",
      "Calacatta and Nero Marquina marble accents",
      "Brushed brass and patinated bronze metallic details"
    ],
    process: [
      "Initial Design Consultation & Spatial Assessment",
      "Concept Development, Mood Boards & Scaled Floor Plans",
      "3D Visualizations & Material Sample Sign-off",
      "Execution, Fabrication & Site Supervision",
      "White-Glove Installation, Styling & Handover"
    ],
    gallery: [
      {
        url: "/img/hero/candid-showroom-hero.jpg",
        alt: "Contemporary master suite interior design",
        caption: "Master bedroom suite with integrated lighting paneling"
      },
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        alt: "Modern luxury living room interior layout",
        caption: "Living room with bespoke sectional and architectural bookshelves"
      }
    ],
    relatedProjectIds: ["proj-dha-phase8-villa", "proj-clifton-penthouse"],
    relatedProductCategory: "Bedroom",
    faqs: [
      {
        q: "Do you visit the site before preparing a quotation?",
        a: "Yes. Our senior architects and interior designers conduct an in-person site inspection in Karachi to take laser measurements, inspect lighting conditions, and understand structural features."
      },
      {
        q: "Can clients provide their own reference photos or sketches?",
        a: "Yes, we encourage clients to share Pinterest boards, sketches, or architectural blueprints during our initial consultation."
      }
    ]
  },
  {
    id: "srv-home-renovation",
    name: "Home Renovation & Turnkey Transformations",
    slug: "home-renovation",
    summary: "Complete structural renovations and whole-property transformations for mature villas and apartments across D.H.A. and Clifton.",
    description: "We revitalize older homes through thoughtful structural reconfigurations, MEP upgrades, modern surface materials, and integrated millwork. One project director coordinates all trades from demolition to fine carpentry.",
    inclusions: [
      "Structural wall alterations, opening enlargements, and partition removal",
      "Complete electrical re-wiring and plumbing modernization",
      "Full bathroom gut-renovations with imported sanitary ware",
      "Kitchen reconfiguration and open-concept living transitions",
      "Window replacements and architectural door installations",
      "Dedicated on-site site engineer throughout execution"
    ],
    materials: [
      "Reinforced structural steel and masonry",
      "Moisture-resistant green MDF and marine plywood",
      "Large-format porcelain slabs and natural stone",
      "Concealed German plumbing and European electrical conduits"
    ],
    process: [
      "Comprehensive Structural & MEP Condition Audit",
      "Architectural Renovation Plans & Detailed BOQ",
      "Demolition, Structural Works & MEP Rough-in",
      "Surface Preparation, Flooring & False Ceilings",
      "Cabinetry, Paint, Joinery & Finishing Inspection"
    ],
    gallery: [
      {
        url: "/img/tile/living-room-furniture.webp",
        alt: "Whole villa transformation in D.H.A. Karachi",
        caption: "Living room transformation with custom partition joinery"
      },
      {
        url: "/img/tile/closet-system.png",
        alt: "Renovated salon and dining suite",
        caption: "Floor-to-ceiling glass display joinery installation"
      }
    ],
    relatedProjectIds: ["proj-dha-phase6-duplex", "proj-dha-phase8-villa"],
    faqs: [
      {
        q: "How are renovation timelines and budgets controlled?",
        a: "We provide an itemized Bill of Quantities (BOQ) with fixed material specifications and milestone-based schedules, preventing cost escalation."
      },
      {
        q: "Can we live in the property during renovation?",
        a: "For whole-house renovations, we recommend vacating during wet trades and demolition. For phased renovations (e.g. single floor or kitchen), we establish dust barriers."
      }
    ]
  },
  {
    id: "srv-kitchens-joinery",
    name: "Kitchens, Wardrobes & Architectural Joinery",
    slug: "kitchens-joinery",
    summary: "Bespoke modular kitchens and walk-in closet systems engineered to exact millimeter measurements with Italian hardware.",
    description: "Our in-house joinery division manufactures custom handleless kitchens, pantry larder units, luxury walk-in wardrobes, and concealed door systems. Every cabinet carcass is sealed against humidity and outfitted with soft-close Blum mechanisms.",
    inclusions: [
      "Tailored kitchen layouts: Island hubs, L-shapes, and galley configurations",
      "Handleless Gola profiles or integrated recessed finger pulls",
      "Walk-in dressing rooms with glass doors and integrated LED wardrobe illumination",
      "Custom jewelry drawers, pull-out trouser racks, and shoe showcases",
      "Sintered stone, quartz, and Dekton countertop fabrication",
      "10-Year hardware and structural carcass warranty"
    ],
    materials: [
      "Italian acrylic lacquers and anti-fingerprint thermal laminate",
      "Natural smoked oak, walnut, and ash veneers",
      "Sintered stone (heat-proof, scratch-proof, stain-proof)",
      "Blum soft-close drawer runners and lift-up stay systems"
    ],
    process: [
      "Precision Laser Site Measurement",
      "3D Ergonomic Layout & Appliance Integration Planning",
      "Material, Color Swatch & Hardware Selection",
      "Precision CNC Workshop Manufacturing",
      "Factory Assembly Testing & Clean Room On-Site Installation"
    ],
    gallery: [
      {
        url: "/img/tile/kitchen-furniture.jpg",
        alt: "Nordika handleless modular kitchen design",
        caption: "Anthracite and warm timber island hub"
      },
      {
        url: "/img/tile/closet-system.png",
        alt: "Walk-in closet system with illuminated glass shelving",
        caption: "Bespoke dressing suite with dark walnut carcasses"
      }
    ],
    relatedProjectIds: ["proj-clifton-penthouse", "proj-dha-phase8-villa"],
    relatedProductCategory: "Kitchen",
    faqs: [
      {
        q: "What makes your kitchens suitable for Karachi's coastal humidity?",
        a: "We use high-density moisture-resistant (HDMR) boards and waterproof polymer edge-banding that prevent water ingress and swelling."
      },
      {
        q: "Can you accommodate imported appliances like Bosch, Siemens, or Miele?",
        a: "Yes. We calibrate all appliance cut-outs to the manufacturer technical spec sheets before cutting."
      }
    ]
  },
  {
    id: "srv-walls-ceilings",
    name: "Walls, Ceilings & Architectural Finishes",
    slug: "walls-ceilings",
    summary: "Minimalist false ceilings with recessed magnetic track lights, fluted acoustic paneling, and Italian microcement wall finishes.",
    description: "Surfaces define how light and sound move through a room. We create seamless floating ceilings, shadow-gap perimeter details, acoustic slatted wood paneling, and hand-troweled textured plaster.",
    inclusions: [
      "Gypsum board false ceilings with perimeter coves and shadow reveals",
      "Magnetic track lighting channel integration and flush architectural diffusers",
      "Acoustic slatted timber panels with charcoal felt backing",
      "Venetian marble plaster and limewash decorative wall finishes",
      "Fluted feature wall panels and marble slab clad media walls",
      "Level-5 ultra-smooth wall skim coating and premium washable emulsion"
    ],
    materials: [
      "Moisture-rated Saint-Gobain / Knauf gypsum boards",
      "Italian lime-based Venetian plaster and microcement",
      "Natural hardwood fluted mouldings and oak slats",
      "Architectural aluminum recessed shadow line trims"
    ],
    process: [
      "Lighting & Acoustic Engineering Plan",
      "Galvanized Light-Gauge Steel Framing & Leveling",
      "Board Installation & Anti-Crack Tape Jointing",
      "Troweled Specialty Plaster / Wood Panel Cladding",
      "Laser-Checked Finishing & Fixture Commissioning"
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
        alt: "Architectural ceiling and wall paneling installation",
        caption: "Minimalist ceiling cove with warm indirect illumination"
      }
    ],
    relatedProjectIds: ["proj-dha-phase6-duplex"],
    faqs: [
      {
        q: "Do your false ceilings develop cracks over time?",
        a: "We utilize fiberglass reinforced joint mesh, flexible European jointing compounds, and perimeter expansion gaps that prevent settling cracks."
      }
    ]
  },
  {
    id: "srv-custom-furniture",
    name: "Custom Furniture Manufacturing",
    slug: "custom-furniture",
    summary: "Handcrafted beds, curved sectionals, bespoke dining tables, and accent chairs built to order in our Karachi workshops.",
    description: "Every residence has unique proportions. Rather than forcing standard showroom furniture into architectural spaces, we build custom pieces with kiln-dried solid hardwood framing, high-resilience multi-density foam, and curated European fabrics.",
    inclusions: [
      "Custom upholstered king and queen bed frames with integrated nightstands",
      "Modular sectionals, curved sofas, and tailored lounge armchairs",
      "Natural walnut, ash, and sintered-stone dining tables",
      "Bespoke media consoles, credenzas, and cocktail tables",
      "Custom finish selection: fabric swatches, wood stains, metal platings",
      "10-Year structural frame guarantee on all handcrafted seating and beds"
    ],
    materials: [
      "Kiln-dried solid seasoned Sheesham and imported Ash/Oak",
      "High-density 32+ resilience foam topped with down-fiber wraps",
      "Plush velvet, bouclé, textured linen, and top-grain leather",
      "PVD-coated brass, matte black steel, and sintered stone surfaces"
    ],
    process: [
      "Furniture Dimension Calibration & Room Layout Check",
      "Material, Fabric Swatch & Wood Stain Selection",
      "Hardwood Framing, Mortise & Tenon Joinery",
      "Multi-Density Foam Shaping & Master Upholstery",
      "Final Quality Inspection & White-Glove Home Assembly"
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
        alt: "Nova Velvet Custom Upholstered Bed",
        caption: "Custom bed set manufactured in our Karachi workshop"
      },
      {
        url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
        alt: "Liva Integrated Light Bed Set",
        caption: "Boucle bed with integrated warm LED nightstand paneling"
      }
    ],
    relatedProjectIds: ["proj-dha-phase8-villa", "proj-clifton-penthouse"],
    relatedProductCategory: "Bedroom",
    faqs: [
      {
        q: "How long does custom furniture manufacturing take?",
        a: "Typically 15 to 30 business days from fabric sign-off and advance deposit."
      },
      {
        q: "Can I inspect the frame in the workshop before upholstery?",
        a: "Yes. Clients in Karachi are welcome to visit our workshop to inspect frame joinery and sit-test cushion firmness."
      }
    ]
  },
  {
    id: "srv-flooring-stone",
    name: "Flooring, Tiles & Italian Stone",
    slug: "flooring-stone",
    summary: "Precision marble laying, seamless microcement, herringbone hardwood parquet, and large-format porcelain tile installation.",
    description: "Flooring anchors the sensory quality of an architectural space. We source, book-match, and install premium Italian and local stones, engineered hardwoods, and ultra-large porcelain slabs with razor-thin grout lines.",
    inclusions: [
      "Italian marble sourcing, book-matching, and diamond-abrasive polishing",
      "Large-format 1200x2400mm porcelain tile installation with leveling systems",
      "Engineered hardwood parquet in herringbone and chevron patterns",
      "Seamless microcement floors for modern industrial aesthetics",
      "Waterproof outdoor non-slip porcelain for pool decks and terraces",
      "Expansion joint engineering to accommodate temperature shifts"
    ],
    materials: [
      "Imported Botticino, Travertine, and Grey Flurry marble",
      "Spanish and Italian rectified porcelain slabs",
      "European engineered oak with UV lacquer finishes",
      "High-adhesion flexible polymer thinset mortars"
    ],
    process: [
      "Subfloor Leveling & Moisture Vapor Barrier Application",
      "Dry-Lay & Vein Book-Matching Approval with Client",
      "Tile/Stone Installation using Precision Leveling Clips",
      "Color-Matched Epoxy Grouting & Sealer Application",
      "Diamond Polishing & Protective Floor Covering"
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
        alt: "Marble and timber flooring transition",
        caption: "Seamless flush brass inlay between hardwood and stone"
      }
    ],
    relatedProjectIds: ["proj-dha-phase8-villa"],
    faqs: [
      {
        q: "Do you supply the marble and tiles or install client-sourced stone?",
        a: "We do both. We can supply verified grade-A imported stones or provide master installation and book-matching for client-sourced stone."
      }
    ]
  },
  {
    id: "srv-outdoor-living",
    name: "Gardens, Rooftops & Outdoor Living",
    slug: "outdoor-living",
    summary: "Transformative rooftop terraces, courtyard gardens, pergolas, and weather-resistant outdoor lounges engineered for Karachi climates.",
    description: "Karachi's coastal evenings are meant for outdoor living. We turn underutilized rooftops, setbacks, and terraces into private oasis retreats featuring custom shade structures, weatherproof seating, ambient lighting, and coastal flora.",
    inclusions: [
      "Rooftop terrace layouts, outdoor kitchens, and BBQ counters",
      "Structural aluminum and seasoned wood pergolas with louvers",
      "Raised planters, automated drip irrigation, and coastal salt-tolerant plants",
      "Non-slip porcelain decking and artificial turf integration",
      "Weatherproof outdoor dining sets and deep-seated conversation lounges",
      "Atmospheric low-voltage garden lighting and perimeter illumination"
    ],
    materials: [
      "Powder-coated rust-proof aluminum framing",
      "Teak and seasoned treated timber for tropical exposure",
      "UV-stabilized outdoor Sunbrella fabrics and quick-dry reticulated foam",
      "Granite and sintered stone weatherproof outdoor countertops"
    ],
    process: [
      "Structural Load Capacity & Waterproofing Inspection",
      "Sun Path, Wind, & Privacy Barrier Architectural Study",
      "3D Landscape Layout & Outdoor Lighting Schematics",
      "Pergola, Planter & Hardscape Construction",
      "Botanical Planting, Furniture Setup & Evening Lighting Commissioning"
    ],
    gallery: [
      {
        url: "/img/tile/home-decor.jpg",
        alt: "Rooftop terrace and garden retreat",
        caption: "Evening rooftop lounge with warm illumination and planters"
      }
    ],
    relatedProjectIds: ["proj-clifton-penthouse"],
    faqs: [
      {
        q: "Do you check roof waterproofing before building a terrace?",
        a: "Yes. We inspect and test the existing membrane and apply multi-layer elastomeric waterproofing before constructing any planters or decking."
      }
    ]
  }
];
