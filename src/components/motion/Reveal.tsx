import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { fadeUp } from '../../animations/gsapAnimations';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  y = 32,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !ref.current) return;
    const ctx = gsap.context(() => {
      fadeUp(ref.current, ref.current, { delay, y });
    }, ref);
    return () => ctx.revert();
  }, [reducedMotion, delay, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};
