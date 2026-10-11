import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { getLenisInstance } from '../../hooks/useLenis';

gsap.registerPlugin(ScrollTrigger);

interface PageTransitionProps {
  children: React.ReactNode;
}

/**
 * 39. PAGE TRANSITIONS
 * Subtle clip-path + opacity + slight translation (approx 450ms).
 * Scrolls cleanly to top (or hash target) on route change.
 */
export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const lenis = getLenisInstance();

    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      let attempts = 0;
      const tryScrollToHash = () => {
        const el = document.getElementById(targetId);
        if (el) {
          if (lenis && !reducedMotion) {
            lenis.scrollTo(el, { offset: -80 });
          } else {
            el.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
          }
        } else if (attempts < 10) {
          attempts += 1;
          setTimeout(tryScrollToHash, 60);
        }
      };
      setTimeout(tryScrollToHash, 50);
    } else {
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }
    }

    ScrollTrigger.refresh();

    if (reducedMotion || !wrapperRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        wrapperRef.current,
        {
          opacity: 1,
          y: 8,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: 'power3.out',
          clearProps: 'transform',
          onComplete: () => {
            ScrollTrigger.refresh();
          },
        }
      );
    }, wrapperRef);

    const timer = window.setTimeout(() => {
      ScrollTrigger.refresh();
    }, 120);

    return () => {
      window.clearTimeout(timer);
      ctx.revert();
    };
  }, [location.pathname, location.hash, reducedMotion]);

  return (
    <div ref={wrapperRef} className="min-h-screen">
      {children}
    </div>
  );
};
