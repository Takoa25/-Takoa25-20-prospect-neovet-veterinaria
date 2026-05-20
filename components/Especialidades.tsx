'use client';

import { siteCopy, specialties } from '@/lib/constants';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { LuEye } from 'react-icons/lu';
import { MdHealthAndSafety } from 'react-icons/md';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import type { Specialty } from '@/lib/constants';

function SpecialtyIcon({ id }: { id: Specialty['id'] }) {
  const Icon = id === 'oftalmologia' ? LuEye : MdHealthAndSafety;
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-mint/15 text-brand-mint">
      <Icon className="h-5 w-5" aria-hidden="true" />
    </span>
  );
}

// Imagens para cada especialidade
const specialtyImages: Record<Specialty['id'], { src: string; alt: string }> = {
  oftalmologia: {
    src: '/oftalmologia.webp',
    alt: 'Exame oftalmológico veterinário',
  },
  dermatologia: {
    src: '/dermatologia.webp',
    alt: 'Cuidados dermatológicos veterinários',
  },
};

export default function Especialidades() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const isInteractingRef = useRef(false);
  const autoScrollRef = useRef<number | null>(null);

  const scroll = (direction: 'previous' | 'next') => {
    const el = carouselRef.current;
    if (!el) return;
    const card = el.querySelector('article');
    const cardWidth = (card?.clientWidth ?? 320) + 20;
    el.scrollBy({ left: direction === 'next' ? cardWidth : -cardWidth, behavior: 'smooth' });
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const start = () => {
      autoScrollRef.current = window.setInterval(() => {
        if (isInteractingRef.current) return;
        const maxScroll = carousel.scrollWidth - carousel.clientWidth;
        const atEnd = carousel.scrollLeft >= maxScroll - 8;
        carousel.scrollTo({ left: atEnd ? 0 : carousel.scrollLeft + carousel.clientWidth * 0.75, behavior: 'smooth' });
      }, 4000);
    };

    const stop = () => {
      if (autoScrollRef.current !== null) {
        window.clearInterval(autoScrollRef.current);
        autoScrollRef.current = null;
      }
    };

    start();
    return stop;
  }, []);

  return (
    <section id="especialidades" className="bg-white py-20 sm:py-24">
      <div className="section-shell">
        {/* Cabeçalho */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-mint">
            {siteCopy.specialties.eyebrow}
          </span>
          <h2 className="mt-4 font-heading text-4xl font-bold leading-tight text-brand-charcoal sm:text-5xl">
            {siteCopy.specialties.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#555]">
            {siteCopy.specialties.description}
          </p>
        </div>

        {/* Carrossel — desktop e mobile */}
        <div className="mt-12">
          <div
            ref={carouselRef}
            onPointerDown={() => { isInteractingRef.current = true; }}
            onPointerUp={() => { isInteractingRef.current = false; }}
            onPointerCancel={() => { isInteractingRef.current = false; }}
            className="-mr-5 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pr-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {specialties.map((specialty) => {
              const img = specialtyImages[specialty.id];
              return (
                <article
                  key={specialty.id}
                  className="group relative min-w-[300px] flex-shrink-0 snap-start overflow-hidden rounded-2xl sm:min-w-[380px] lg:min-w-[440px] xl:min-w-[520px]"
                  style={{ aspectRatio: '3/4' }}
                >
                  {/* Imagem de fundo */}
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 1280px) 520px, (min-width: 1024px) 440px, (min-width: 640px) 380px, 300px"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* Overlay escuro */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/95 via-brand-charcoal/40 to-transparent" />

                  {/* Conteúdo sobreposto */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <div className="flex items-center gap-3">
                      <SpecialtyIcon id={specialty.id} />
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-mint">
                        {specialty.eyebrow}
                      </p>
                    </div>
                    <h3 className="mt-3 font-heading text-2xl font-bold text-brand-mint sm:text-3xl">
                      {specialty.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/80 sm:text-base">
                      {specialty.description}
                    </p>
                    {/* Tags de condições */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {specialty.conditions.map((cond) => (
                        <span
                          key={cond}
                          className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm"
                        >
                          {cond}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Controles de navegação */}
          <div className="mt-5 flex justify-end gap-3">
            <button
              type="button"
              aria-label={siteCopy.services.previousAria}
              onClick={() => scroll('previous')}
              className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-brand-charcoal/20 bg-white text-brand-charcoal shadow-sm transition hover:bg-brand-charcoal hover:text-white"
            >
              <LuChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label={siteCopy.services.nextAria}
              onClick={() => scroll('next')}
              className="focus-ring flex h-11 w-11 items-center justify-center rounded-full bg-brand-mint text-brand-charcoal shadow-card transition hover:bg-brand-mint/90"
            >
              <LuChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
