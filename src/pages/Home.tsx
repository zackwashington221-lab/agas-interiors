import React from 'react';
import { HeroCarousel } from '../components/home/HeroCarousel';
import { RenovationSectorsSection } from '../components/home/RenovationSectorsSection';
import { MasterWoodworkSection } from '../components/home/MasterWoodworkSection';
import { TurnkeyProcessSection } from '../components/home/TurnkeyProcessSection';
import { FeaturedProjectsHome } from '../components/home/FeaturedProjectsHome';
import { ServicesOverviewHome } from '../components/home/ServicesOverviewHome';
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
      {/* 1. Hero: Turnkey Interior Architecture & Woodwork Atelier */}
      <HeroCarousel />

      {/* 2. Core Renovation Verticals: Houses, Bungalows, Apartments, Corporate Offices & Sites */}
      <Reveal direction="up" duration={800}>
        <RenovationSectorsSection />
      </Reveal>

      {/* 3. Woodwork Mastery: The In-House Karachi Timber Workshop & Joinery */}
      <Reveal direction="up" duration={800}>
        <MasterWoodworkSection />
      </Reveal>

      {/* 4. Architectural Case Studies & Real Renovation Monograph */}
      <Reveal direction="up" duration={800}>
        <FeaturedProjectsHome />
      </Reveal>

      {/* 5. The 4-Step Turnkey Renovation Process (Survey to Handover) */}
      <Reveal direction="up" duration={800}>
        <TurnkeyProcessSection />
      </Reveal>

      {/* 6. Comprehensive Architectural Services Overview */}
      <Reveal direction="up" duration={800}>
        <ServicesOverviewHome />
      </Reveal>

      {/* 7. The Curated Furniture Atelier & Products Showcase (Linking to /products) */}
      <Reveal direction="up" duration={800}>
        <CuratedAtelierSection />
      </Reveal>

      {/* 8. Flagship Khayaban-e-Sehar Showroom & Studio Experience */}
      <Reveal direction="up" duration={800}>
        <ShowroomBanner />
      </Reveal>

      {/* 9. High-Converting Renovation Estimate & Consultation Callout */}
      <Reveal direction="up" duration={800}>
        <RenovationEstimateCTA />
      </Reveal>

      {/* 10. Trust Highlights & Service Warranties */}
      <Reveal direction="up" duration={800}>
        <TrustHighlights />
      </Reveal>

      {/* 11. Editorial Architectural Journal */}
      <Reveal direction="up" duration={800}>
        <TheJournalSection />
      </Reveal>

      {/* 12. Private Newsletter */}
      <Reveal direction="up" duration={800}>
        <NewsletterSection />
      </Reveal>
    </div>
  );
};

export default Home;
