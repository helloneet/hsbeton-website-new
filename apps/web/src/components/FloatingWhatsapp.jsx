import React from 'react';
import { waLink, trackWhatsApp } from '@/data/site';

export default function FloatingWhatsapp() {
  return (
    <a
      href="https://wa.me/6289630672153"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        items-center
        justify-center
        w-14
        h-14
        rounded-full
        bg-[#25D366]
        shadow-[0_8px_25px_rgba(37,211,102,0.45)]
        transition-all
        duration-300
        hover:scale-110
        hover:shadow-[0_10px_30px_rgba(37,211,102,0.65)]
        active:scale-95
        group
      "
      aria-label="Chat WhatsApp"
    >
      {/* Pulse effect */}
      <span
        className="
          absolute
          inset-0
          rounded-full
          bg-[#25D366]
          animate-ping
          opacity-20
        "
      />

      {/* WhatsApp icon */}
      <img
        src="/whatsapp.png"
        alt="WhatsApp"
        className="
          relative
          z-10
          w-9
          h-9
          object-contain
          brightness-0
          invert
        "
      />
    </a>
  );
}