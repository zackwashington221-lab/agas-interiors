import { images } from './images';

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  projectTitle: string;
  location: string;
  image: string;
}

/**
 * Placeholder client testimonials clearly structured for CMS/client replacement (Section 23 & 51).
 */
export const testimonials: TestimonialItem[] = [
  {
    id: 'test-01',
    quote:
      'They didn’t simply redesign our home. They completely changed how we experience it—from the quiet warmth of the walnut ceilings to the way morning light moves across the honed marble floors.',
    author: 'CLIENT NAME (PLACEHOLDER)',
    role: 'Private Villa Residence · Lahore',
    projectTitle: 'THE NOOR RESIDENCE',
    location: 'Lahore · Pakistan',
    image: images.categories.heroVilla,
  },
  {
    id: 'test-02',
    quote:
      'Having one studio responsible for the architectural redesign, the Italian stone masonry, the custom furniture, and the rooftop garden meant every single detail felt intentional and cohesive.',
    author: 'CLIENT NAME (PLACEHOLDER)',
    role: 'Complete Villa Transformation · Gulberg',
    projectTitle: 'THE MARBLE VILLA',
    location: 'Lahore · Pakistan',
    image: images.categories.luxuryKitchen,
  },
  {
    id: 'test-03',
    quote:
      'The craftsmanship of our walk-in wardrobes, chevron oak floors, and hand-troweled Venetian plaster walls rivals the finest residences we have visited in Milan and London.',
    author: 'CLIENT NAME (PLACEHOLDER)',
    role: 'Private Residence · Islamabad',
    projectTitle: 'THE OAK HOUSE',
    location: 'Islamabad · Pakistan',
    image: images.categories.luxuryBedroom,
  },
];

export interface StatisticItem {
  id: string;
  numericValue: number;
  suffix: string;
  label: string;
  note: string;
}

/**
 * Clearly marked placeholder statistics per Section 22 & Section 51.
 */
export const statistics: StatisticItem[] = [
  {
    id: 'stat-01',
    numericValue: 15,
    suffix: '+',
    label: 'YEARS EXPERIENCE',
    note: 'Studio Benchmark (Placeholder)',
  },
  {
    id: 'stat-02',
    numericValue: 250,
    suffix: '+',
    label: 'PROJECTS',
    note: 'Curated Portfolio (Placeholder)',
  },
  {
    id: 'stat-03',
    numericValue: 120,
    suffix: '+',
    label: 'HOMES TRANSFORMED',
    note: 'Turnkey Residences (Placeholder)',
  },
  {
    id: 'stat-04',
    numericValue: 18,
    suffix: '',
    label: 'DESIGN SPECIALISTS',
    note: 'Architects & Master Artisans (Placeholder)',
  },
];

export const socialGalleryItems = [
  {
    id: 'soc-01',
    image: images.categories.heroVilla,
    title: 'Evening Illumination at The Noor Residence',
    category: 'Interior Architecture',
    aspect: 'aspect-[4/5]',
  },
  {
    id: 'soc-02',
    image: images.categories.marbleDetail,
    title: 'Bookmatched Calacatta Vein Alignment in Progress',
    category: 'Marble & Stone',
    aspect: 'aspect-square',
  },
  {
    id: 'soc-03',
    image: images.categories.luxuryLivingRoom,
    title: 'Curved Italian Bouclé Sofa — Workshop Edition',
    category: 'Custom Furniture',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 'soc-04',
    image: images.categories.garden,
    title: 'Burmese Teak Pergola & Travertine Courtyard',
    category: 'Landscape',
    aspect: 'aspect-[16/10]',
  },
  {
    id: 'soc-05',
    image: images.categories.woodDetail,
    title: 'Acoustic American Walnut Fluted Wall Joinery',
    category: 'Wall Finishing',
    aspect: 'aspect-[4/5]',
  },
  {
    id: 'soc-06',
    image: images.categories.rooftop,
    title: 'Dusk at the Sunken Rooftop Fire-Pit Sanctuary',
    category: 'Rooftop Design',
    aspect: 'aspect-square',
  },
  {
    id: 'soc-07',
    image: images.categories.luxuryKitchen,
    title: 'Coffered Walnut Ceiling & Waterfall Stone Island',
    category: 'Kitchen Architecture',
    aspect: 'aspect-[3/2]',
  },
];
