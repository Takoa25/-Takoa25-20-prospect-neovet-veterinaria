import { siteCopy, siteImages } from '@/lib/constants';
import Image from 'next/image';
import { LuBadgeCheck, LuHeartPulse, LuShieldCheck } from 'react-icons/lu';
import { PiPawPrintFill } from 'react-icons/pi';

const badgeIcons = [LuBadgeCheck, LuHeartPulse, LuShieldCheck] as const;

const badges = siteCopy.about.badges.map((label, index) => ({
  label,
  icon: badgeIcons[index] ?? LuBadgeCheck,
}));

export default function Sobre() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-brand-mint-light py-20 sm:py-24">
      {/* Patinha decorativa */}
      <PiPawPrintFill
        className="pointer-events-none absolute right-8 top-10 h-32 w-32 rotate-[30deg] text-brand-mint opacity-[0.08] select-none sm:h-40 sm:w-40"
        aria-hidden="true"
      />

      <div className="section-shell grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Coluna esquerda — Imagem */}
        <div className="order-2 lg:order-1">
          <div className="relative mx-auto max-w-md overflow-hidden rounded-[1.75rem] shadow-soft">
            <div className="relative aspect-[4/5]">
              <Image
                src={siteImages.about.src}
                alt={siteImages.about.alt}
                fill
                sizes="(min-width: 1024px) 38vw, 92vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/25 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* Coluna direita — Texto */}
        <div className="order-1 lg:order-2">
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-mint">
            {siteCopy.about.eyebrow}
          </span>
          <h2 className="mt-4 font-heading text-4xl font-bold leading-tight text-brand-charcoal sm:text-5xl">
            {siteCopy.about.title}
          </h2>

          {/* Dois parágrafos em grid — lado a lado no desktop */}
          <div className="mt-6 grid gap-5 text-[#555] lg:grid-cols-2">
            <p className="text-base leading-8">{siteCopy.about.description}</p>
            <p className="text-base leading-8">{siteCopy.about.secondaryDescription}</p>
          </div>

          {/* Badges de atributos */}
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {badges.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-3 font-medium text-brand-charcoal shadow-sm ring-1 ring-brand-mint/15"
              >
                <Icon className="h-5 w-5 shrink-0 text-brand-mint" aria-hidden="true" />
                <span className="text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
