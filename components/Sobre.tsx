import { siteCopy, siteImages } from '@/lib/constants';
import Image from 'next/image';
import { LuBadgeCheck, LuHeartPulse, LuShieldCheck } from 'react-icons/lu';

const badgeIcons = [LuBadgeCheck, LuHeartPulse, LuShieldCheck] as const;

const badges = siteCopy.about.badges.map((label, index) => ({
  label,
  icon: badgeIcons[index] ?? LuBadgeCheck,
}));

export default function Sobre() {
  return (
    <section id="sobre" className="bg-white py-20 sm:py-24">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="order-2 lg:order-1">
          <div className="relative mx-auto max-w-md rounded-[2rem] bg-brand-green-light/70 p-3 shadow-soft">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.45rem]">
              <Image
                src={siteImages.about.src}
                alt={siteImages.about.alt}
                fill
                sizes="(min-width: 1024px) 38vw, 92vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/35 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 rounded-2xl bg-white p-5 shadow-card">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-green">
                {siteCopy.about.imageEyebrow}
              </p>
              <p className="mt-1 font-heading text-2xl font-bold leading-tight text-brand-green-dark">
                {siteCopy.about.imageTitle}
              </p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-sm font-bold uppercase tracking-[0.22em] text-brand-green">
            {siteCopy.about.eyebrow}
          </span>
          <h2 className="mt-4 font-heading text-4xl font-bold leading-tight text-brand-green-dark sm:text-5xl">
            {siteCopy.about.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            {siteCopy.about.description}
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            {siteCopy.about.secondaryDescription}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {badges.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="rounded-2xl border border-brand-green/15 bg-brand-green-light px-5 py-4 text-center font-bold text-brand-green-dark"
              >
                <Icon className="mx-auto mb-2 h-6 w-6 text-brand-green" aria-hidden="true" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
