import React from 'react';

interface MenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
  isLightText?: boolean;
}

export const MenuButton: React.FC<MenuButtonProps> = ({
  isOpen,
  onToggle,
  isLightText = false,
}) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls="mobile-fullscreen-menu"
      aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
      className={`lg:hidden relative z-[120] inline-flex items-center gap-3 py-2 px-1 text-xs uppercase tracking-[0.26em] font-medium transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B49A72] ${
        isOpen
          ? 'text-[#F5F1E8]'
          : isLightText
          ? 'text-[#F5F1E8]'
          : 'text-[#171717]'
      }`}
    >
      <span>{isOpen ? 'CLOSE' : 'MENU'}</span>
      <span className="relative flex flex-col justify-center w-5 h-3" aria-hidden="true">
        <span
          className={`block h-[1px] w-full bg-current transition-transform duration-300 ${
            isOpen ? 'translate-y-[1px] rotate-45' : '-translate-y-1'
          }`}
        />
        <span
          className={`block h-[1px] w-full bg-current transition-transform duration-300 ${
            isOpen ? ' rotate-[-45deg]' : 'translate-y-1'
          }`}
        />
      </span>
    </button>
  );
};
