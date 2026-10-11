/**
 * Centralized Image System (Section 34 & 35)
 * All architectural photography and material texture references are managed here.
 */
export const images = {
  hero: '/assets/images/hero-villa.webp',
  heroFallback: '/images/hero-wooden-villa.jpg',

  projects: {
    marbleVilla: '/assets/images/projects/marble-villa.webp',
    noorResidence: '/assets/images/projects/noor-residence.webp',
    oakHouse: '/assets/images/projects/oak-house.webp',
    zamanPenthouse: '/images/product-boucle-sofa.webp',
    gulbergPavilion: '/images/garden-villa-oasis.webp',
    atelierShowroom: '/images/product-calacatta-table.webp',
    skylineTerrace: '/images/garden-rooftop-terrace.webp',
    courtyardSanctuary: '/images/garden-zen-courtyard.webp',
  },

  materials: {
    marble: '/assets/images/materials/marble.webp',
    wood: '/assets/images/materials/wood.webp',
    stone: '/assets/images/materials/stone.webp',
    metal: '/images/product-bespoke-wardrobe.webp',
    glass: '/images/wooden-kitchen-ceiling.webp',
    fabric: '/images/product-boucle-sofa.webp',
  },

  categories: {
    heroVilla: '/images/hero-wooden-villa.webp',
    luxuryLivingRoom: '/images/product-boucle-sofa.webp',
    luxuryBedroom: '/images/master-bedroom-walnut.webp',
    luxuryKitchen: '/images/wooden-kitchen-ceiling.webp',
    diningRoom: '/images/product-calacatta-table.webp',
    marbleDetail: '/images/product-marble-flooring.webp',
    woodDetail: '/images/wpc-fluted-wall.webp',
    stoneDetail: '/images/product-venetian-plaster.webp',
    furnitureDetail: '/images/product-bespoke-wardrobe.webp',
    garden: '/images/garden-villa-oasis.webp',
    rooftop: '/images/garden-rooftop-terrace.webp',
    exteriorArchitecture: '/images/garden-zen-courtyard.webp',
    teamStudio: '/images/wooden-kitchen-ceiling.webp',
    beforeAfterBefore: '/images/product-venetian-plaster.webp',
    beforeAfterAfter: '/images/hero-wooden-villa.webp',
    constructionCraftsmanship: '/images/wpc-fluted-wall.webp',
  },
} as const;
