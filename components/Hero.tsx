import { clinic, siteCopy, siteImages } from '@/lib/constants';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
import { LuArrowDown, LuBadgeCheck } from 'react-icons/lu';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-brand-green-light pt-32 sm:pt-28 lg:min-h-screen lg:pt-28"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(255,255,255,0.86),transparent_28%),radial-gradient(circle_at_82%_10%,rgba(1,149,39,0.18),transparent_30%),linear-gradient(135deg,#f7fff8_0%,#e6f9eb_45%,#ffffff_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.28] [background-image:linear-gradient(30deg,rgba(1,149,39,0.16)_12%,transparent_12.5%,transparent_87%,rgba(1,149,39,0.16)_87.5%,rgba(1,149,39,0.16)),linear-gradient(150deg,rgba(1,149,39,0.16)_12%,transparent_12.5%,transparent_87%,rgba(1,149,39,0.16)_87.5%,rgba(1,149,39,0.16)),linear-gradient(30deg,rgba(1,149,39,0.16)_12%,transparent_12.5%,transparent_87%,rgba(1,149,39,0.16)_87.5%,rgba(1,149,39,0.16)),linear-gradient(150deg,rgba(1,149,39,0.16)_12%,transparent_12.5%,transparent_87%,rgba(1,149,39,0.16)_87.5%,rgba(1,149,39,0.16))] [background-position:0_0,0_0,28px_49px,28px_49px] [background-size:56px_98px]" />

      <div className="section-shell grid items-center gap-12 pb-20 pt-8 lg:grid-cols-[1.02fr_0.98fr] lg:pb-16">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-green/20 bg-white/80 px-4 py-2 text-sm font-bold text-brand-green-dark shadow-sm">
            <LuBadgeCheck className="h-4 w-4 text-brand-green" aria-hidden="true" />
            {clinic.tagline}
          </span>
          <h1 className="mt-7 max-w-4xl font-heading text-5xl font-bold leading-[0.95] text-brand-green-dark sm:text-6xl lg:text-7xl">
            {siteCopy.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
            {siteCopy.hero.description}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href={clinic.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-7 py-4 text-center font-bold text-white shadow-card transition hover:-translate-y-1 hover:bg-brand-green-dark"
            >
              <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
              {siteCopy.hero.primaryCta}
            </a>
            <a
              href="#servicos"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-brand-green/30 bg-white px-7 py-4 text-center font-bold text-brand-green-dark shadow-sm transition hover:-translate-y-1 hover:border-brand-green hover:bg-brand-green-light"
            >
              <LuArrowDown className="h-5 w-5" aria-hidden="true" />
              {siteCopy.hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[540px]">
          <div className="absolute inset-6 rounded-[2.5rem] bg-white/60 blur-3xl" />
          <div className="animate-float relative overflow-hidden rounded-[2rem] border border-white/80 bg-white p-3 shadow-soft">
            <div className="relative aspect-square overflow-hidden rounded-[1.4rem] sm:aspect-square lg:aspect-square">
              <Image
                src={siteImages.hero.src}
                alt={siteImages.hero.alt}
                fill
                priority
                sizes="(min-width: 1024px) 44vw, 92vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/30 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
