import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useIsTouchDevice, useReducedMotion } from '../../hooks/useReducedMotion';

type CursorMode = 'default' | 'project' | 'cta' | 'image';

export const CustomCursor: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const isTouch = useIsTouchDevice();
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<CursorMode>('default');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reducedMotion || isTouch) return;

    const cursorEl = cursorRef.current;
    if (!cursorEl) return;

    const xTo = gsap.quickTo(cursorEl, 'x', { duration: 0.22, ease: 'power3.out' });
    const yTo = gsap.quickTo(cursorEl, 'y', { duration: 0.22, ease: 'power3.out' });

    let isCurrentlyVisible = false;

    const onMouseMove = (e: MouseEvent) => {
      if (!isCurrentlyVisible) {
        isCurrentlyVisible = true;
        setVisible(true);
      }
      xTo(e.clientX);
      yTo(e.clientY);

      const target = e.target as HTMLElement | null;
      const cursorTrigger = target?.closest('[data-cursor]') as HTMLElement | null;
      const attr = cursorTrigger?.getAttribute('data-cursor') as CursorMode | null;

      if (attr === 'project' || attr === 'cta' || attr === 'image') {
        setMode(attr);
      } else {
        setMode('default');
      }
    };

    const onMouseLeave = () => {
      isCurrentlyVisible = false;
      setVisible(false);
    };
    const onMouseEnter = () => {
      isCurrentlyVisible = true;
      setVisible(true);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [reducedMotion, isTouch]);

  if (reducedMotion || isTouch) {
    return null;
  }

  const isExpanded = mode !== 'default';

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className={`fixed top-0 left-0 z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center rounded-full transition-[width,height,background-color,border-color,opacity] duration-300 ${
        visible ? 'opacity-100' : 'opacity-0'
      } ${
        isExpanded
          ? 'w-24 h-24 bg-[#171717]/90 text-[#F5F1E8] border border-[#B49A72]/50 backdrop-blur-xs'
          : 'w-3 h-3 bg-[#B49A72] border border-[#171717]/20'
      }`}
    >
      {mode === 'project' && (
        <span className="text-[9px] leading-[1.2] tracking-[0.2em] uppercase text-center font-medium px-2">
          VIEW
          <br />
          PROJECT
        </span>
      )}
      {mode === 'cta' && (
        <span className="text-[9px] leading-[1.2] tracking-[0.2em] uppercase text-center font-medium px-2">
          LET&apos;S
          <br />
          TALK
        </span>
      )}
      {mode === 'image' && (
        <span className="text-[9px] leading-[1.2] tracking-[0.2em] uppercase text-center font-medium px-2">
          EXPLORE
        </span>
      )}
    </div>
  );
};
