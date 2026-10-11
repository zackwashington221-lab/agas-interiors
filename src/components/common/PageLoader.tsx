import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface PageLoaderProps {
  onComplete: () => void;
}

/**
 * 11. PAGE LOADER
 * Animates 00 -> 100 quickly (< 1.1 seconds) and transitions into the homepage.
 * Never intentionally blocks or delays the experience.
 */
export const PageLoader: React.FC<PageLoaderProps> = ({ onComplete }) => {
  const reducedMotion = useReducedMotion();
  const [count, setCount] = useState(reducedMotion ? 100 : 7);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reducedMotion) {
      onComplete();
      return;
    }

    const counterObj = { val: 24 };
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          onComplete();
        },
      });

      tl.to(counterObj, {
        val: 100,
        duration: 0.16,
        ease: 'power2.out',
        onUpdate: () => {
          setCount(Math.round(counterObj.val));
        },
      });

      tl.to(
        overlayRef.current,
        {
          clipPath: 'inset(0% 0% 100% 0%)',
          duration: 0.14,
          ease: 'power3.inOut',
        },
        '-=0.04'
      );
    });

    return () => ctx.revert();
  }, [reducedMotion, onComplete]);

  const formattedCount = count < 10 ? `0${count}` : `${count}`;

  return (
    <div
      ref={overlayRef}
      style={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      aria-label="Loading studio experience"
      className="fixed inset-0 z-[1000] bg-[#171717] text-[#F5F1E8] flex flex-col items-center justify-center select-none pointer-events-none"
    >
      <div className="flex flex-col items-center">
        <span className="font-serif-editorial text-6xl sm:text-8xl font-light tracking-tight text-[#F5F1E8] tabular-nums">
          {formattedCount}
        </span>
        <div className="w-28 h-[1px] bg-[#91877A]/35 my-6 relative overflow-hidden">
          <div
            className="h-full bg-[#B49A72] transition-all duration-75"
            style={{ width: `${count}%` }}
          />
        </div>
        <span className="text-[11px] uppercase tracking-[0.38em] text-[#D8CBB8]">
          LOADING
        </span>
      </div>
    </div>
  );
};
