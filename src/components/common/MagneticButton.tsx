import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useIsTouchDevice, useReducedMotion } from '../../hooks/useReducedMotion';

interface MagneticButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline-light' | 'minimal';
  cursorType?: 'cta' | 'project' | 'image' | 'default';
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  cursorType = 'cta',
  disabled = false,
  className = '',
  ariaLabel,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const isTouch = useIsTouchDevice();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || isTouch || disabled || !wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;

    gsap.to(wrapperRef.current, {
      x: relX * 0.18,
      y: relY * 0.18,
      duration: 0.4,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    if (reducedMotion || isTouch || !wrapperRef.current) return;
    gsap.to(wrapperRef.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: 'power3.out',
    });
  };

  const variantClasses: Record<NonNullable<MagneticButtonProps['variant']>, string> = {
    primary:
      'bg-[#171717] text-[#F5F1E8] hover:bg-[#4A3528] border border-[#171717] hover:border-[#4A3528] px-7 py-4',
    secondary:
      'bg-transparent text-[#171717] border border-[#171717]/30 hover:border-[#171717] hover:bg-[#171717] hover:text-[#F5F1E8] px-7 py-4',
    'outline-light':
      'bg-transparent text-[#F5F1E8] border border-[#F5F1E8]/40 hover:border-[#F5F1E8] hover:bg-[#F5F1E8] hover:text-[#171717] px-7 py-4',
    minimal:
      'bg-transparent text-current py-2 px-0 border-b border-current/40 hover:border-current',
  };

  const sharedClasses = `group inline-flex items-center justify-center gap-3 text-xs uppercase tracking-[0.22em] font-medium transition-colors duration-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B49A72] disabled:opacity-50 disabled:pointer-events-none ${variantClasses[variant]} ${className}`;

  const dataCursorAttr = cursorType === 'default' ? undefined : cursorType;

  return (
    <div
      ref={wrapperRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      {to ? (
        <Link
          to={to}
          data-cursor={dataCursorAttr}
          aria-label={ariaLabel}
          onClick={onClick}
          className={sharedClasses}
        >
          {children}
        </Link>
      ) : href ? (
        <a
          href={href}
          data-cursor={dataCursorAttr}
          aria-label={ariaLabel}
          onClick={onClick}
          className={sharedClasses}
        >
          {children}
        </a>
      ) : (
        <button
          type={type}
          disabled={disabled}
          data-cursor={dataCursorAttr}
          aria-label={ariaLabel}
          onClick={onClick}
          className={sharedClasses}
        >
          {children}
        </button>
      )}
    </div>
  );
};
