import React from 'react';
import type { MaterialOption } from '../../data/materials';

interface MaterialItemProps {
  material: MaterialOption;
  isSelected: boolean;
  onSelect: () => void;
}

export const MaterialItem: React.FC<MaterialItemProps> = ({
  material,
  isSelected,
  onSelect,
}) => {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={isSelected}
      onClick={onSelect}
      className={`group flex items-center justify-between gap-4 px-5 py-4 border text-left transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#B49A72] ${
        isSelected
          ? 'bg-[#171717] text-[#F5F1E8] border-[#171717]'
          : 'bg-transparent text-[#171717] border-[#91877A]/30 hover:border-[#171717]'
      }`}
    >
      <div className="flex items-center gap-3.5">
        <span
          aria-hidden="true"
          className="w-4 h-4 rounded-full border border-[#91877A]/40 shrink-0"
          style={{ backgroundColor: material.swatchColor }}
        />
        <span className="text-xs uppercase tracking-[0.26em] font-medium">
          {material.name}
        </span>
      </div>
      <span
        className={`text-[10px] uppercase tracking-[0.2em] ${
          isSelected ? 'text-[#B49A72]' : 'text-[#91877A]'
        }`}
      >
        {material.code}
      </span>
    </button>
  );
};
