import { clinic, siteCopy } from '@/lib/constants';
import Image from 'next/image';
import { FaHeart } from 'react-icons/fa';
import { LuCoffee } from 'react-icons/lu';

export default function Footer() {
  const [beforeHeart, afterHeart = ''] = siteCopy.footer.agency.developedBy.split('❤️');
  const [betweenIcons, afterCoffee = ''] = afterHeart.split('☕');

  return (
    <footer className="bg-brand-charcoal py-10 text-white">
      <div className="section-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        {/* Logo + copyright */}
        <div className="flex items-center gap-4">
          <span className="relative flex h-16 w-16 shrink-0 overflow-hidden rounded-full bg-brand-mint-light ring-2 ring-brand-mint/25 sm:h-20 sm:w-20">
            <Image
              src="/logo.jpg"
              alt={siteCopy.logoAlt}
              fill
              sizes="80px"
              className="object-cover"
            />
          </span>
          <div>
            <p className="font-heading text-3xl font-bold text-white">{clinic.name}</p>
            <p className="mt-2 text-sm text-white/60">
              {siteCopy.footer.copyright}
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3 text-sm font-medium">
          <a
            href={clinic.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring rounded-full bg-white/10 px-4 py-2 transition hover:bg-brand-mint hover:text-brand-charcoal"
          >
            {siteCopy.footer.whatsappLabel}
          </a>
          <a
            href={clinic.phoneHref}
            className="focus-ring rounded-full bg-white/10 px-4 py-2 transition hover:bg-brand-mint hover:text-brand-charcoal"
          >
            {clinic.phoneDisplay}
          </a>
          <a
            href={clinic.instagramHref}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring rounded-full bg-white/10 px-4 py-2 transition hover:bg-brand-mint hover:text-brand-charcoal"
          >
            {siteCopy.footer.instagramLabel}
          </a>
        </div>
      </div>

      {/* Crédito */}
      <div className="section-shell mt-7 border-t border-white/10 pt-5">
        <p className="flex flex-wrap items-center justify-center gap-1.5 text-center text-xs font-medium text-white/50 md:justify-end">
          <span>{beforeHeart}</span>
          <FaHeart className="h-3.5 w-3.5 text-brand-mint" aria-hidden="true" />
          <span>{betweenIcons}</span>
          <LuCoffee className="h-4 w-4 text-white/70" aria-hidden="true" />
          <span>{afterCoffee}</span>
          <a
            href={siteCopy.footer.agency.developerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring rounded-full text-brand-mint underline decoration-brand-mint/35 underline-offset-4 transition hover:decoration-brand-mint"
          >
            {siteCopy.footer.agency.developerName}
          </a>
        </p>
      </div>
    </footer>
  );
}
