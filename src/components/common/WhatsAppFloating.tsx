import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppFloating: React.FC = () => {
  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-40">
      <a
        href="https://wa.me/923158739625?text=Hi%20AGAS%20Interiors%2C%20I%20would%20like%20to%20inquire%20about%20your%20furniture%20and%20design%20services."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with AGAS Interiors on WhatsApp"
        className="relative group flex items-center gap-2.5 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#1ebc59] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
      >
        <span className="absolute -inset-0.5 rounded-full bg-[#25D366] opacity-30 animate-ping group-hover:opacity-0 transition-opacity" />
        <MessageCircle className="w-5 h-5 fill-current relative z-10" />
        <span className="text-xs font-semibold tracking-wider uppercase hidden sm:inline relative z-10">
          WhatsApp Us
        </span>
      </a>
    </aside>
  );
};
