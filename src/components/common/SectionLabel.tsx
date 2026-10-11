import React from 'react';

interface SectionLabelProps {
  index?: string;
  label: string;
  light?: boolean;
  className?: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
  index,
  label,
  light = false,
  className = '',
}) => {
  return (
    <div
      className={`inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] font-medium ${
        light ? 'text-[#D8CBB8]' : 'text-[#91877A]'
      } ${className}`}
    >
      {index && (
        <span className={light ? 'text-[#B49A72]' : 'text-[#4A3528]'}>{index}</span>
      )}
      <span
        className={`h-[1px] w-8 ${
          light ? 'bg-[#B49A72]/50' : 'bg-[#91877A]/50'
        }`}
        aria-hidden="true"
      />
      <span>{label}</span>
    </div>
  );
};
