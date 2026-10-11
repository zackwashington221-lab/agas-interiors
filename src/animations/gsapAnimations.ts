import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface AnimationOptions {
  delay?: number;
  duration?: number;
  y?: number;
  stagger?: number;
  start?: string;
}

/**
 * Reusable GSAP Animation System (Section 37)
 * All functions are designed to run safely inside a gsap.context() for leak-free cleanup.
 */

export function revealText(
  elements: gsap.TweenTarget,
  trigger?: Element | null,
  options: AnimationOptions = {}
) {
  const { delay = 0, duration = 0.85, y = 18, stagger = 0.06, start = 'top 92%' } = options;

  return gsap.fromTo(
    elements,
    { y, opacity: 1 },
    {
      y: 0,
      opacity: 1,
      duration,
      delay,
      stagger,
      ease: 'power3.out',
      scrollTrigger: trigger
        ? {
            trigger,
            start,
            once: true,
          }
        : undefined,
    }
  );
}

export function revealImage(
  container: Element | null,
  image?: Element | null,
  options: AnimationOptions = {}
) {
  if (!container) return null;
  const { delay = 0, duration = 0.95, start = 'top 95%' } = options;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start,
      once: true,
    },
  });

  tl.fromTo(
    container,
    { opacity: 1 },
    {
      opacity: 1,
      duration,
      delay,
      ease: 'power3.out',
    }
  );

  if (image) {
    tl.fromTo(
      image,
      { scale: 1.05, opacity: 1 },
      {
        scale: 1,
        opacity: 1,
        duration: duration * 1.1,
        ease: 'power3.out',
      },
      0
    );
  }

  return tl;
}

export function fadeUp(
  element: gsap.TweenTarget,
  trigger?: Element | null,
  options: AnimationOptions = {}
) {
  const { delay = 0, duration = 0.8, y = 16, start = 'top 92%' } = options;

  return gsap.fromTo(
    element,
    { y, opacity: 1 },
    {
      y: 0,
      opacity: 1,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: trigger
        ? {
            trigger,
            start,
            once: true,
          }
        : undefined,
    }
  );
}

export function parallaxImage(
  image: Element | null,
  trigger: Element | null,
  ratio = 0.08
) {
  if (!image || !trigger) return null;
  const clampedRatio = Math.max(0.03, Math.min(0.15, ratio));
  const percentMove = clampedRatio * 100;

  return gsap.fromTo(
    image,
    { yPercent: -percentMove },
    {
      yPercent: percentMove,
      ease: 'none',
      scrollTrigger: {
        trigger,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    }
  );
}

export function scaleImage(
  image: gsap.TweenTarget,
  fromScale = 1.06,
  toScale = 1,
  duration = 1.2
) {
  return gsap.fromTo(
    image,
    { scale: fromScale },
    {
      scale: toScale,
      duration,
      ease: 'power3.out',
    }
  );
}

export function staggerItems(
  items: gsap.TweenTarget,
  trigger: Element | null,
  options: AnimationOptions = {}
) {
  const { delay = 0, duration = 0.75, y = 16, stagger = 0.06, start = 'top 92%' } = options;

  return gsap.fromTo(
    items,
    { y, opacity: 1 },
    {
      y: 0,
      opacity: 1,
      duration,
      delay,
      stagger,
      ease: 'power3.out',
      scrollTrigger: trigger
        ? {
            trigger,
            start,
            once: true,
          }
        : undefined,
    }
  );
}
