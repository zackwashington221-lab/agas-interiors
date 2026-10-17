import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useEnquiry } from '../../context/EnquiryContext';

interface Slide {
  label: string;
  title: string;
  description: string;
  image: string;
  primaryBtnText: string;
  primaryBtnLink: string;
  secondaryBtnText: string;
  secondaryBtnLink?: string;
  isConsultationBtn?: boolean;
}

const HERO_SLIDES: Slide[] = [
  {
    label: "Turnkey Interior Architecture & Renovations",
    title: "Transforming Luxury Bungalows, Apartments & Corporate Sites",
    description: "From structural remodelling in DHA and Clifton to turnkey corporate executive offices, AGAS Interiors delivers end-to-end renovations backed by our in-house Karachi timber atelier.",
    image: "/images/hero-wooden-villa.jpg",
    primaryBtnText: "Book Site Consultation",
    primaryBtnLink: "/contact",
    secondaryBtnText: "Explore Projects",
    secondaryBtnLink: "/projects",
    isConsultationBtn: true
  },
  {
    label: "In-House Manufacturing & Precision Joinery",
    title: "Master Woodwork, Fluted Panelling & Bespoke Cabinetry",
    description: "Solid Grade-A Burmese teak, kiln-dried walnut, architectural ceiling rafters, and made-to-measure dressing rooms crafted to the millimeter by master carpenters.",
    image: "/images/wooden-kitchen-ceiling.jpg",
    primaryBtnText: "Discover Master Woodwork",
    primaryBtnLink: "/services/kitchens-wardrobes-architectural-joinery",
    secondaryBtnText: "The Products Atelier",
    secondaryBtnLink: "/products"
  },
  {
    label: "Complete Design & Build Fitouts",
    title: "Turnkey Living Spaces Crafted to Endure",
    description: "A single accountable partner for civil renovations, MEP, Italian stone masonry, custom furniture, and white-glove handover with a 5-year structural warranty.",
    image: "/img/hero/hero-living-salon.jpg",
    primaryBtnText: "View Renovation Services",
    primaryBtnLink: "/services",
    secondaryBtnText: "Visit Karachi Showroom",
    secondaryBtnLink: "/contact"
  }
];

export const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { openProjectEnquiry } = useEnquiry();

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      aria-label="Featured collections"
      aria-roledescription="carousel"
      className="relative isolate overflow-hidden bg-stone-900"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative h-[76vh] min-h-[520px] w-full sm:h-[80vh] lg:h-[84vh]">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div
              key={slide.title}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-opacity duration-1000 ease-[var(--ease-out-soft)] ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              {/* Background Image with slow cinematic scale */}
              <img
                src={slide.image}
                alt={slide.title}
                className={`h-full w-full object-cover transition-transform duration-[9000ms] ease-linear ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
                style={{ objectPosition: '41% 25%' }}
              />

              {/* Overlays */}
              <div className="absolute inset-0 from-black/75 via-black/40 to-transparent bg-gradient-to-tr sm:bg-gradient-to-b sm:from-black/80 sm:via-black/45 sm:to-65%"></div>

              {/* Content Box */}
              <div className="absolute inset-0 flex items-center sm:items-start sm:pt-20 md:pt-24">
                <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8">
                  <div className="max-w-xl sm:mx-auto sm:max-w-4xl sm:text-center">
                    <div className="transition-all duration-700 ease-[var(--ease-out-soft)] translate-y-0 opacity-100">
                      <span className="eyebrow mb-3 block font-semibold text-[#C9A96A] tracking-[0.16em]">
                        {slide.label}
                      </span>
                      <h1 className="display-xl text-[#FBF6F3] font-normal leading-tight">
                        {slide.title}
                      </h1>
                      <p className="mt-4 max-w-md text-[0.9375rem] leading-relaxed text-[#D9CDBC] sm:text-base sm:mt-3 sm:max-w-none">
                        {slide.description}
                      </p>

                      <div className="mt-8 flex flex-wrap gap-3.5 sm:mt-8 sm:justify-center">
                        <Link
                          to={slide.primaryBtnLink}
                          className="inline-flex items-center justify-center gap-2 font-semibold tracking-[0.08em] uppercase transition-all duration-300 bg-[#C9A96A] hover:bg-[#B89655] text-white text-[0.8125rem] px-8 py-3.5 shadow-md"
                        >
                          {slide.primaryBtnText}
                        </Link>

                        {slide.isConsultationBtn ? (
                          <button
                            type="button"
                            onClick={() => openProjectEnquiry()}
                            className="inline-flex items-center justify-center gap-2 font-semibold tracking-[0.08em] uppercase transition-all duration-300 border border-white/80 text-[#FBF6F3] hover:bg-white hover:text-[#1A1A1A] text-[0.8125rem] px-8 py-3.5 backdrop-blur-xs"
                          >
                            {slide.secondaryBtnText}
                          </button>
                        ) : (
                          <Link
                            to={slide.secondaryBtnLink || '/contact'}
                            className="inline-flex items-center justify-center gap-2 font-semibold tracking-[0.08em] uppercase transition-all duration-300 border border-white/80 text-[#FBF6F3] hover:bg-white hover:text-[#1A1A1A] text-[0.8125rem] px-8 py-3.5 backdrop-blur-xs"
                          >
                            {slide.secondaryBtnText}
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Carousel Indicators with Gold Accent */}
        <div className="absolute bottom-6 inset-x-0 z-20 flex justify-center gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 transition-all duration-300 ${
                i === currentSlide ? 'w-8 bg-[#C9A96A]' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
