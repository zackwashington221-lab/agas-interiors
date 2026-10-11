import React, { Suspense, lazy, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { images } from '../../data/images';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const ArchitecturalScene = lazy(() => import('../3d/ArchitecturalScene'));

interface HeroMediaProps {
  ready: boolean;
}

export const HeroMedia: React.FC<HeroMediaProps> = ({ ready }) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!ready || reducedMotion || !imgRef.current) return;

    const ctx = gsap.context(() => {
      // 14. HERO ANIMATION CHOREOGRAPHY: Hero image scales from 1.08 to 1, then subtle movement
      const tl = gsap.timeline();
      tl.fromTo(
        imgRef.current,
        { scale: 1.08 },
        {
          scale: 1,
          duration: 1.9,
          ease: 'power3.out',
        }
      ).to(imgRef.current, {
        scale: 1.025,
        duration: 14,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });
    }, imgRef);

    return () => ctx.revert();
  }, [ready, reducedMotion]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#171717]">
      <picture>
        <source srcSet={images.hero} type="image/webp" />
        <img
          ref={imgRef}
          src={images.hero}
          width={1920}
          height={1080}
          alt="Luxury contemporary villa interior with American walnut coffered ceiling, Italian marble, and warm architectural lighting"
          fetchPriority="high"
          decoding="sync"
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src !== images.heroFallback) {
              target.src = images.heroFallback;
            }
          }}
          className="w-full h-full object-cover object-center"
        />
      </picture>
      {/* Warm Editorial Vignette Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/80 via-[#171717]/40 to-[#0D0D0D]/45"
      />

      {/* Subtle Selective 3D Wireframe Layer (pointer-events-none) */}
      <Suspense fallback={null}>
        <ArchitecturalScene
          accentColor="#B49A72"
          className=" hidden xl:block absolute right-10 bottom-12 w-[340px] h-[340px] opacity-35"
        />
      </Suspense>
    </div>
  );
};
