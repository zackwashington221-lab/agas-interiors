import React from 'react';
import { HeroCarousel } from '../components/home/HeroCarousel';
import { HousePlanningSection } from '../components/home/HousePlanningSection';
import { RenovationSectorsSection } from '../components/home/RenovationSectorsSection';
import { InteriorDesignSpecialtiesSection } from '../components/home/InteriorDesignSpecialtiesSection';
import { MasterWoodworkSection } from '../components/home/MasterWoodworkSection';
import { TurnkeyProcessSection } from '../components/home/TurnkeyProcessSection';
import { FeaturedProjectsHome } from '../components/home/FeaturedProjectsHome';
import { CuratedAtelierSection } from '../components/home/CuratedAtelierSection';
import { ShowroomBanner } from '../components/home/ShowroomBanner';
import { RenovationEstimateCTA } from '../components/home/RenovationEstimateCTA';
import { TrustHighlights } from '../components/home/TrustHighlights';
import { TheJournalSection } from '../components/home/TheJournalSection';
import { NewsletterSection } from '../components/home/NewsletterSection';
import { Reveal } from '../components/common/Reveal';

export const Home: React.FC = () => {
  return (
    <div className="bg-[#FAF9F7]">
      {/* 1. Hero: Turnkey Interior Architecture, House Plans & Woodwork Atelier */}
      <HeroCarousel />

      {/* 2. Core Specialty: Architectural House Plans, 2D/3D Maps & Elevation Design */}
      <Reveal direction="up" duration={800}>
        <HousePlanningSection />
      </Reveal>

      {/* 3. Core Renovation Verticals: Houses, Bungalows, Apartments, Corporate Offices & Sites */}
      <Reveal direction="up" duration={800}>
        <RenovationSectorsSection />
      </Reveal>

      {/* 4. Core Mission: Interior Design Driven by Spatial Intelligence & Lighting */}
      <Reveal direction="up" duration={800}>
        <InteriorDesignSpecialtiesSection />
      </Reveal>

      {/* 5. Woodwork Mastery: The In-House Karachi Timber Workshop & Joinery */}
      <Reveal direction="up" duration={800}>
        <MasterWoodworkSection />
      </Reveal>

      {/* 6. Architectural Case Studies & Real Renovation Monograph */}
      <Reveal direction="up" duration={800}>
        <FeaturedProjectsHome />
      </Reveal>

      {/* 7. The 4-Step Turnkey Renovation & Design Process (Survey to Handover) */}
      <Reveal direction="up" duration={800}>
        <TurnkeyProcessSection />
      </Reveal>

      {/* 8. The Curated Furniture Atelier & Products Showcase (Linking to /products) */}
      <Reveal direction="up" duration={800}>
        <CuratedAtelierSection />
      </Reveal>

      {/* 9. Flagship Khayaban-e-Sehar Showroom & Studio Experience */}
      <Reveal direction="up" duration={800}>
        <ShowroomBanner />
      </Reveal>

      {/* 10. High-Converting Renovation & House Map Estimate Banner */}
      <Reveal direction="up" duration={800}>
        <RenovationEstimateCTA />
      </Reveal>

      {/* 11. Trust Highlights & Service Warranties */}
      <Reveal direction="up" duration={800}>
        <TrustHighlights />
      </Reveal>

      {/* 12. Editorial Architectural Journal */}
      <Reveal direction="up" duration={800}>
        <TheJournalSection />
      </Reveal>

      {/* 13. Private Newsletter */}
      <Reveal direction="up" duration={800}>
        <NewsletterSection />
      </Reveal>
    </div>
  );
};

export default Home;
