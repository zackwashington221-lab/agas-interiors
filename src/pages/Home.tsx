import React from 'react';
import { HeroCarousel } from '../components/home/HeroCarousel';
import { BrandProposition } from '../components/home/BrandProposition';
import { FeaturedProjectsHome } from '../components/home/FeaturedProjectsHome';
import { ShopTheHouse } from '../components/home/ShopTheHouse';
import { ServicesOverviewHome } from '../components/home/ServicesOverviewHome';
import { ShowroomBanner } from '../components/home/ShowroomBanner';
import { BellaNotteSection } from '../components/home/BellaNotteSection';
import { SplendoreSection } from '../components/home/SplendoreSection';
import { NordikaSection } from '../components/home/NordikaSection';
import { TheJournalSection } from '../components/home/TheJournalSection';
import { OutdoorGardenSection } from '../components/home/OutdoorGardenSection';
import { TrustHighlights } from '../components/home/TrustHighlights';
import { NewsletterSection } from '../components/home/NewsletterSection';
import { Reveal } from '../components/common/Reveal';

export const Home: React.FC = () => {
  return (
    <div className="bg-[#faf9f7]">
      {/* 1. Hero Carousel: Primary Architecture & Showroom Call-to-Actions */}
      <HeroCarousel />

      {/* 2. Section 3: Brand Proposition (Design / Create / Transform Pillars) */}
      <Reveal direction="up" duration={800}>
        <BrandProposition />
      </Reveal>

      {/* 3. Section 4: Architectural Case Studies & Monograph */}
      <Reveal direction="up" duration={800}>
        <FeaturedProjectsHome />
      </Reveal>

      {/* 4. Section 5: The 9 Departments Grid (Shop the House) */}
      <Reveal direction="up" duration={800}>
        <ShopTheHouse />
      </Reveal>

      {/* 5. Section 6: Comprehensive Architectural Services Overview */}
      <Reveal direction="up" duration={800}>
        <ServicesOverviewHome />
      </Reveal>

      {/* 6. Section 7: Flagship Showroom on Khayaban-e-Sehar */}
      <Reveal direction="up" duration={800}>
        <ShowroomBanner />
      </Reveal>

      {/* 7. Collections & Signature Ranges */}
      <Reveal direction="up" duration={800}>
        <BellaNotteSection />
      </Reveal>
      <Reveal direction="up" duration={800}>
        <SplendoreSection />
      </Reveal>
      <Reveal direction="up" duration={800}>
        <NordikaSection />
      </Reveal>
      <Reveal direction="up" duration={800}>
        <OutdoorGardenSection />
      </Reveal>

      {/* 8. Editorial Architectural Journal */}
      <Reveal direction="up" duration={800}>
        <TheJournalSection />
      </Reveal>

      {/* 9. Trust Highlights & Service Warranties */}
      <Reveal direction="up" duration={800}>
        <TrustHighlights />
      </Reveal>

      {/* 10. Private Newsletter */}
      <Reveal direction="up" duration={800}>
        <NewsletterSection />
      </Reveal>
    </div>
  );
};

export default Home;
