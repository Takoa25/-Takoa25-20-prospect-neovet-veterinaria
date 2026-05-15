import { clinic, siteCopy } from '@/lib/constants';
import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingWhatsApp() {
  return (
    <a
      href={clinic.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={siteCopy.floatingWhatsApp.ariaLabel}
      className="focus-ring fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:-translate-y-1 hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <span className="absolute inset-0 rounded-full animate-pulse-soft" />
      <span className="relative">
        <FaWhatsapp className="h-8 w-8" aria-hidden="true" />
      </span>
    </a>
  );
}
