import React from 'react';

interface ScrollIndicatorProps {
  visible?: boolean;
}

export const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ visible = true }) => {
  const handleScrollDown = () => {
    const el = document.getElementById('featured-projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <button
      type="button"
      onClick={handleScrollDown}
      aria-label="Scroll to featured projects"
      className={`group inline-flex flex-col items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-[#D8CBB8] hover:text-[#F5F1E8] transition-opacity duration-700 focus-visible:outline-2 focus-visible:outline-[#B49A72] ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <span>SCROLL</span>
      <span
        aria-hidden="true"
        className="w-[1px] h-12 bg-[#D8CBB8]/30 relative overflow-hidden"
      >
        <span className="block w-full h-1/2 bg-[#B49A72] animate-pulse" />
      </span>
    </button>
  );
};
