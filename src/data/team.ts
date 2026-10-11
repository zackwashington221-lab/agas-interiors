import { images } from './images';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  image: string;
}

/**
 * Clearly structured studio leadership placeholders (Section 31 & 51)
 */
export const teamMembers: TeamMember[] = [
  {
    id: 'team-01',
    name: 'PRINCIPAL ARCHITECT (PLACEHOLDER)',
    role: 'Founder & Creative Director',
    specialty: 'Spatial Architecture & Turnkey Masterplanning',
    bio: 'Leads the architectural vision of Abdul Gaffar & Sons, uniting classical proportion with warm contemporary minimalism across residential estates and commercial flagships.',
    image: images.categories.heroVilla,
  },
  {
    id: 'team-02',
    name: 'HEAD OF INTERIOR DESIGN (PLACEHOLDER)',
    role: 'Director of Interiors & Materiality',
    specialty: 'Tactile Surface Curation & Bespoke Furnishings',
    bio: 'Oversees material composition, Italian stone selection, custom bouclé and leather upholstery, and lighting atmosphere for every project.',
    image: images.categories.luxuryLivingRoom,
  },
  {
    id: 'team-03',
    name: 'MASTER OF JOINERY & STONE (PLACEHOLDER)',
    role: 'Director of Craftsmanship & Execution',
    specialty: 'Kiln-Dried Walnut Joinery & Bookmatched Marble',
    bio: 'Directs our private woodworking atelier and on-site masonry teams, ensuring millimeter precision where timber, brass, and stone converge.',
    image: images.categories.woodDetail,
  },
  {
    id: 'team-04',
    name: 'LEAD LANDSCAPE ARCHITECT (PLACEHOLDER)',
    role: 'Head of Outdoor & Rooftop Sanctuaries',
    specialty: 'Botanical Courtyards, Pergolas & Water Architecture',
    bio: 'Designs tranquil outdoor living rooms, Burmese teak rooftop pavilions, and reflection courtyards that seamlessly extend interior sightlines.',
    image: images.categories.garden,
  },
];
