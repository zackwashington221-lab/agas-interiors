import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { revealImage, parallaxImage } from '../../animations/gsapAnimations';
import { useIsTouchDevice, useReducedMotion } from '../../hooks/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

interface ImageRevealProps {
  src: string;
  fallbackSrc?: string;
  alt: string;
  width?: number;
  height?: number;
  aspectClass?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  parallax?: boolean;
  parallaxRatio?: number;
  cursorType?: 'project' | 'image' | 'cta' | 'default';
  onClick?: () => void;
}

export const ImageReveal: React.FC<ImageRevealProps> = ({
  src,
  fallbackSrc = '/images/hero-wooden-villa.jpg',
  alt,
  width = 1600,
  height = 1000,
  aspectClass = 'aspect-[16/10]',
  className = '',
  imgClassName = '',
  priority = false,
  parallax = false,
  parallaxRatio = 0.07,
  cursorType = 'default',
  onClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const reducedMotion = useReducedMotion();
  const isTouch = useIsTouchDevice();

  const imgSrc = failedSrc === src ? fallbackSrc : src;

  useEffect(() => {
    if (reducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      if (!priority) {
        revealImage(containerRef.current, imgRef.current);
      }
      if (parallax && !isTouch && imgRef.current && containerRef.current) {
        parallaxImage(imgRef.current, containerRef.current, parallaxRatio);
      }
    }, containerRef);

    return () => ctx.revert();
  }, [reducedMotion, isTouch, priority, parallax, parallaxRatio]);

  const handleImageError = () => {
    if (failedSrc !== src) {
      setFailedSrc(src);
    }
  };

  const handleImageLoad = () => {
    ScrollTrigger.refresh();
  };

  return (
    <div
      ref={containerRef}
      data-cursor={cursorType === 'default' ? undefined : cursorType}
      onClick={onClick}
      className={`relative overflow-hidden bg-[#D8CBB8]/35 ${aspectClass} ${className}`}
    >
      <img
        ref={imgRef}
        src={imgSrc}
        width={width}
        height={height}
        alt={alt}
        loading="eager"
        decoding="async"
        onLoad={handleImageLoad}
        onError={handleImageError}
        className={`w-full h-full object-cover object-center transition-transform duration-700 ease-out ${
          parallax && !reducedMotion && !isTouch ? 'scale-110' : ''
        } ${imgClassName}`}
      />
    </div>
  );
};
