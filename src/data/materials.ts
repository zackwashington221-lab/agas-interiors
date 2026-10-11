import { images } from './images';

export interface MaterialOption {
  id: string;
  name: string;
  code: string;
  origin: string;
  finish: string;
  application: string;
  thermalAcoustic: string;
  description: string;
  textureNote: string;
  mainImage: string;
  detailImage: string;
  swatchColor: string;
  accentColor: string;
}

export const materials: MaterialOption[] = [
  {
    id: 'marble',
    name: 'MARBLE',
    code: 'MAT — 01',
    origin: 'Carrara & Verona, Italy · Selected Quarries',
    finish: 'Diamond-Honed Matte & Bookmatched Vein Polish',
    application: 'Monolithic Islands, Grand Salon Flooring, Spa En-Suites',
    thermalAcoustic: 'High Thermal Mass · Radiant Cooling Compatible',
    description:
      'We source first-choice Calacatta, Statuario, and warm travertine blocks, dry-laying every slab to ensure continuous bookmatched veining across floors, walls, and monolithic islands.',
    textureNote: 'Velvety honed surface with organic warm champagne and charcoal mineral veining.',
    mainImage: images.materials.marble,
    detailImage: images.categories.diningRoom,
    swatchColor: '#EAE4DC',
    accentColor: '#B49A72',
  },
  {
    id: 'wood',
    name: 'WOOD',
    code: 'MAT — 02',
    origin: 'North American Black Walnut & Burmese Teak',
    finish: 'Kiln-Dried · Hand-Rubbed Natural Matte Oil',
    application: 'Coffered Ceilings, Fluted Wall Louvers, Chevron Parquet & Joinery',
    thermalAcoustic: 'NRC 0.80 Acoustic Absorption · Seasoned Stability',
    description:
      'Seasoned in climate-controlled kilns to prevent warping, our solid American walnut, European oak, and Burmese teak bring architectural warmth, rhythm, and acoustic calm to every room.',
    textureNote: 'Deep chocolate-walnut grain with precision-milled fluted and chevron tactile relief.',
    mainImage: images.materials.wood,
    detailImage: images.categories.luxuryBedroom,
    swatchColor: '#4A3528',
    accentColor: '#D8CBB8',
  },
  {
    id: 'stone',
    name: 'STONE',
    code: 'MAT — 03',
    origin: 'Italian Lime Marmorino & Natural Honed Travertine',
    finish: 'Hand-Troweled Artisan Stucco & Raw Split-Face Plinths',
    application: 'Architectural Feature Walls, Courtyards & Monolithic Fireplaces',
    thermalAcoustic: 'Breathable Mineral Surface · Zero-VOC Natural Lime',
    description:
      'Combining slaked lime and crushed marble dust, our Venetian plaster and raw architectural stones diffuse natural daylight into soft, chalky tonal gradients that age with grace.',
    textureNote: 'Subtle mineral undulation that shifts between warm sand and stone as light moves.',
    mainImage: images.materials.stone,
    detailImage: images.categories.garden,
    swatchColor: '#91877A',
    accentColor: '#F5F1E8',
  },
  {
    id: 'metal',
    name: 'METAL',
    code: 'MAT — 04',
    origin: 'Architectural Bronze & Brushed Champagne Brass',
    finish: 'Hand-Burnished Patina & PVD Brushed Champagne',
    application: 'Shadow-Gap Profiles, Wardrobe Frames, Luminaires & Hardware',
    thermalAcoustic: 'Precision CNC Extrusions · Lifetime Structural Rigidity',
    description:
      'Never flashy or mirror-gold. We use muted champagne brass and dark architectural bronze as fine structural punctuation—framing glass partitions, recessed shadow gaps, and bespoke hardware.',
    textureNote: 'Fine linear brushed grain with a warm, muted champagne luminance.',
    mainImage: images.materials.metal,
    detailImage: images.categories.furnitureDetail,
    swatchColor: '#B49A72',
    accentColor: '#4A3528',
  },
  {
    id: 'glass',
    name: 'GLASS',
    code: 'MAT — 05',
    origin: 'Fluted Reeded Glass & Smoked Architectural Bronze Glazing',
    finish: 'Low-Iron Tempered · Acoustic Laminated Interlayer',
    application: 'Walk-In Dressing Rooms, Courtyard Walls & Sliding Partitions',
    thermalAcoustic: '38 dB Acoustic Isolation · Solar UV Filtering',
    description:
      'Smoked bronze and fluted architectural glass allow daylight to travel deep into the floor plan while preserving visual privacy and softly diffusing interior silhouettes.',
    textureNote: 'Translucent smoked bronze tint with crisp vertical architectural reeding.',
    mainImage: images.materials.glass,
    detailImage: images.categories.luxuryKitchen,
    swatchColor: '#7A7267',
    accentColor: '#F5F1E8',
  },
  {
    id: 'fabric',
    name: 'FABRIC',
    code: 'MAT — 06',
    origin: 'Italian Yarn-Dyed Bouclé, Belgian Linen & Full-Grain Nubuck',
    finish: 'High-Martindale Tactile Weave · Stain-Protected Natural Fibers',
    application: 'Curved Salon Sofas, Acoustic Wall Panels, Drapery & Headboards',
    thermalAcoustic: 'Softens Room Reverberation · Breathable Natural Comfort',
    description:
      'Our textile library prioritizes tactile honesty: heavy ivory bouclé, raw slubbed Belgian linens, and butter-soft saddle leathers that invite touch and balance the solidity of stone and wood.',
    textureNote: 'Rich looped bouclé yarns in warm ivory, sand, and stone tones.',
    mainImage: images.materials.fabric,
    detailImage: images.categories.luxuryLivingRoom,
    swatchColor: '#D8CBB8',
    accentColor: '#4A3528',
  },
];
