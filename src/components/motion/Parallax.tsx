import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useIsTouchDevice, useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxProps {
  children: React.ReactNode;
  ratio?: number;
  className?: string;
}

/**
 * 40. PARALLAX
 * Subtle parallax (0.05–0.15 movement ratio). Disabled on reduced-motion and mobile/touch.
 */
export const Parallax: React.FC<ParallaxProps> = ({
  children,
  ratio = 0.08,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const isTouch = useIsTouchDevice();

  useEffect(() => {
    if (reducedMotion || isTouch || !ref.current) return;
    const clampedRatio = Math.max(0.05, Math.min(0.15, ratio));
    const movePx = clampedRatio * 320;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { y: -movePx * 0.5 },
        {
          y: movePx * 0.5,
          ease: 'none',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [reducedMotion, isTouch, ratio]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};
