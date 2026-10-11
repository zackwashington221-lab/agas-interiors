import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { materials } from '../../data/materials';
import { SectionLabel } from '../common/SectionLabel';
import { MaterialItem } from './MaterialItem';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const ArchitecturalScene = lazy(() => import('../3d/ArchitecturalScene'));

/**
 * 18. MATERIALS EXPLORER
 * Interactive tactile library for MARBLE, WOOD, STONE, METAL, GLASS, FABRIC.
 * Selecting a material updates main image, description, texture preview, and metadata
 * with a smooth clip-path transition and non-blocking 3D wireframe accent.
 */
export const MaterialsExplorer: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const current = materials[selectedIndex] || materials[0];
  const mainImageWrapperRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !mainImageWrapperRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        mainImageWrapperRef.current,
        { scale: 1.04, opacity: 0.92 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.45,
          ease: 'power3.out',
        }
      );
    }, mainImageWrapperRef);
    return () => ctx.revert();
  }, [selectedIndex, reducedMotion]);

  return (
    <section
      aria-labelledby="materials-heading"
      className="relative py-28 sm:py-36 bg-[#D8CBB8]/35 text-[#171717] border-t border-[#91877A]/20 overflow-hidden"
    >
      <Suspense fallback={null}>
        <ArchitecturalScene
          accentColor={current.accentColor}
          className="hidden xl:block absolute right-8 top-10 w-[260px] h-[260px] opacity-25"
        />
      </Suspense>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <SectionLabel index="04" label="MATERIALITY & TACTILE LIBRARY" className="mb-4" />
            <h2
              id="materials-heading"
              className="font-serif-editorial text-4xl sm:text-6xl lg:text-7xl leading-[0.96] tracking-tight text-[#171717]"
            >
              MATERIALS
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#4A3528] max-w-md font-light leading-relaxed">
            Luxury is felt before it is analyzed. Explore the raw stone, seasoned timber, mineral
            plasters, and natural textiles that form our architectural vocabulary.
          </p>
        </div>

        {/* Material Selector Tabs */}
        <div
          role="tablist"
          aria-label="Select architectural material"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-14"
        >
          {materials.map((mat, idx) => (
            <MaterialItem
              key={mat.id}
              material={mat}
              isSelected={idx === selectedIndex}
              onSelect={() => setSelectedIndex(idx)}
            />
          ))}
        </div>

        {/* Main Material Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start bg-[#F5F1E8] border border-[#91877A]/25 p-6 sm:p-10 lg:p-12">
          {/* Left: Large Clip-Path Transition Image */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#171717]">
              <div ref={mainImageWrapperRef} className="w-full h-full">
                <img
                  src={current.mainImage}
                  alt={`${current.name} — ${current.origin}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-4 left-4 bg-[#171717]/85 text-[#F5F1E8] px-3.5 py-1.5 text-[10px] uppercase tracking-[0.26em]">
                {current.code} · {current.name}
              </div>
            </div>
          </div>

          {/* Right: Metadata, Description & Texture Swatch Preview */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <span className="text-[11px] uppercase tracking-[0.28em] text-[#91877A] block mb-2">
                SPECIFICATION SHEET
              </span>
              <h3 className="font-serif-editorial text-4xl sm:text-5xl text-[#171717] mb-4">
                {current.name}
              </h3>
              <p className="text-sm sm:text-base text-[#4A3528] font-light leading-relaxed">
                {current.description}
              </p>
            </div>

            {/* Texture Close-Up Preview Card */}
            <div className="grid grid-cols-12 gap-4 items-center p-4 bg-[#D8CBB8]/30 border border-[#91877A]/25">
              <div className="col-span-4 aspect-square overflow-hidden">
                <img
                  src={current.detailImage}
                  alt={`${current.name} architectural application preview`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-8">
                <span className="text-[10px] uppercase tracking-[0.24em] text-[#91877A] block mb-1">
                  TACTILE PROFILE
                </span>
                <p className="text-xs text-[#171717] leading-relaxed font-light">
                  {current.textureNote}
                </p>
              </div>
            </div>

            {/* Structured Architectural Metadata */}
            <dl className="space-y-3 pt-4 border-t border-[#91877A]/25 text-xs">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <dt className="uppercase tracking-[0.22em] text-[#91877A]">PROVENANCE</dt>
                <dd className="text-[#171717] font-medium sm:text-right">{current.origin}</dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <dt className="uppercase tracking-[0.22em] text-[#91877A]">SURFACE FINISH</dt>
                <dd className="text-[#171717] font-medium sm:text-right">{current.finish}</dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <dt className="uppercase tracking-[0.22em] text-[#91877A]">APPLICATIONS</dt>
                <dd className="text-[#171717] font-medium sm:text-right">{current.application}</dd>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                <dt className="uppercase tracking-[0.22em] text-[#91877A]">PERFORMANCE</dt>
                <dd className="text-[#4A3528] font-medium sm:text-right">
                  {current.thermalAcoustic}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};
