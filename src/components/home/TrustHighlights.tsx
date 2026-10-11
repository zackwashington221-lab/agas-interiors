import React from 'react';
import { Truck, Home, Ruler, ShieldCheck } from 'lucide-react';

export const TrustHighlights: React.FC = () => {
  const highlights = [
    {
      icon: Truck,
      title: "Delivered and assembled",
      desc: "Large pieces arrive built, not in a stack of boxes."
    },
    {
      icon: Home,
      title: "See it in the showroom",
      desc: "Full-size pieces on the floor in D.H.A., Karachi."
    },
    {
      icon: Ruler,
      title: "Free design help",
      desc: "Send a photo and measurements; we suggest the layout."
    },
    {
      icon: ShieldCheck,
      title: "Made to last",
      desc: "Materials and construction listed on every product page."
    }
  ];

  return (
    <section className="border-y border-[#e6e2dc] bg-[#f2f0ec]/50 py-12 sm:py-16">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.title} className="flex gap-4 items-start">
                <div className="mt-0.5 shrink-0 text-[#825e2d] bg-white p-2.5 border border-[#e6e2dc] shadow-xs">
                  <Icon className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold tracking-[0.02em] text-[#1a1a1a]">
                    {item.title}
                  </h4>
                  <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-stone-600">
                    {item.desc}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
