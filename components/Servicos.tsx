'use client';

import { services, siteCopy, type Service } from '@/lib/constants';
import Image from 'next/image';
import { useCallback, useEffect, useRef } from 'react';
import { FaBath, FaEye, FaMicroscope, FaStethoscope } from 'react-icons/fa';
import { FaSyringe } from 'react-icons/fa6';
import { LuChevronLeft, LuChevronRight, LuSparkles } from 'react-icons/lu';
import { MdHealthAndSafety } from 'react-icons/md';
import { PiPawPrintFill } from 'react-icons/pi';
import type { IconType } from 'react-icons';

const serviceIcons: Record<Service['icon'], IconType> = {
  stethoscope: FaStethoscope,
  eye: FaEye,
  skin: MdHealthAndSafety,
  exam: FaMicroscope,
  vaccine: FaSyringe,
  grooming: FaBath,
};

// Triplicamos os serviços para criar o efeito de scroll infinito contínuo e invisível
const infiniteServices = [...services, ...services, ...services];

function ServiceCard({ service }: { service: Service }) {
  const Icon = serviceIcons[service.icon];
  return (
    <article
      className="group relative min-w-[280px] flex-shrink-0 snap-start overflow-hidden rounded-2xl sm:min-w-[340px] lg:min-w-[400px]"
      style={{ aspectRatio: '3/4' }}
    >
      <Image
        src={service.image.src}
        alt={service.image.alt}
        fill
        sizes="(min-width: 1024px) 400px, (min-width: 640px) 340px, 280px"
        className="object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/100 via-brand-charcoal/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-mint/15 text-brand-mint">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <h3 className="font-heading text-xl font-bold text-brand-mint sm:text-2xl">
            {service.title}
          </h3>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-white/75 sm:text-base">
          {service.description}
        </p>
      </div>
    </article>
  );
}

export default function Servicos() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<number | null>(null);
  const isInteractingRef = useRef(false);
  const itemsPerSet = services.length;

  // Ajusta a posição inicial para o início do segundo set, permitindo scroll para trás imediatamente
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const timeout = setTimeout(() => {
      const cardWidth = (carousel.querySelector('article')?.clientWidth ?? 300) + 20;
      carousel.scrollLeft = cardWidth * itemsPerSet;
    }, 100);

    return () => clearTimeout(timeout);
  }, [itemsPerSet]);

  // Detector de borda para criar o loop infinito sem pulos visuais
  const handleScroll = useCallback(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const cardWidth = (carousel.querySelector('article')?.clientWidth ?? 300) + 20;
    const setWidth = cardWidth * itemsPerSet;

    // Se rolar para trás e entrar no primeiro set, salta instantaneamente para frente (segundo set)
    if (carousel.scrollLeft <= cardWidth * 0.5) {
      carousel.scrollLeft += setWidth;
    }
    // Se rolar para frente e entrar no último set, salta instantaneamente para trás (segundo set)
    else if (carousel.scrollLeft >= setWidth * 2 - cardWidth * 0.5) {
      carousel.scrollLeft -= setWidth;
    }
  }, [itemsPerSet]);

  const scrollCarousel = (direction: 'previous' | 'next') => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    isInteractingRef.current = true;
    setTimeout(() => { isInteractingRef.current = false; }, 4000);

    const cardWidth = (carousel.querySelector('article')?.clientWidth ?? 300) + 20;
    carousel.scrollBy({ left: direction === 'next' ? cardWidth : -cardWidth, behavior: 'smooth' });
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const startAutoScroll = () => {
      autoScrollRef.current = window.setInterval(() => {
        if (isInteractingRef.current) return;
        const cardWidth = (carousel.querySelector('article')?.clientWidth ?? 300) + 20;
        carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }, 3500); // Rotação suave a cada 3.5s
    };

    const stopAutoScroll = () => {
      if (autoScrollRef.current !== null) {
        window.clearInterval(autoScrollRef.current);
        autoScrollRef.current = null;
      }
    };

    startAutoScroll();
    return stopAutoScroll;
  }, []);

  return (
    <section id="servicos" className="relative overflow-hidden bg-brand-surface py-20 sm:py-24">
      {/* Patinhas decorativas de fundo */}
      <PiPawPrintFill
        className="pointer-events-none absolute left-[8%] top-[15%] h-24 w-24 rotate-[25deg] text-brand-charcoal opacity-[0.04] select-none"
        aria-hidden="true"
      />
      <PiPawPrintFill
        className="pointer-events-none absolute right-[12%] top-[50%] h-20 w-20 -rotate-[15deg] text-brand-charcoal opacity-[0.04] select-none"
        aria-hidden="true"
      />
      <PiPawPrintFill
        className="pointer-events-none absolute bottom-[10%] left-[40%] h-16 w-16 rotate-[40deg] text-brand-charcoal opacity-[0.035] select-none"
        aria-hidden="true"
      />

      <div className="section-shell">
        {/* Cabeçalho */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-brand-mint">
              <LuSparkles className="h-4 w-4" aria-hidden="true" />
              {siteCopy.services.eyebrow}
            </span>
            <h2 className="mt-4 font-heading text-4xl font-bold leading-tight text-brand-charcoal sm:text-5xl">
              {siteCopy.services.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#555]">
              {siteCopy.services.description}
            </p>
          </div>
          <span className="hidden rounded-full border border-brand-mint/25 bg-white px-5 py-3 text-sm font-medium text-brand-charcoal shadow-sm lg:inline-flex">
            {siteCopy.services.badge}
          </span>
        </div>

        {/* Carrossel Infinito */}
        <div className="mt-12">
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            onPointerDown={() => { isInteractingRef.current = true; }}
            onPointerUp={() => { isInteractingRef.current = false; }}
            onPointerCancel={() => { isInteractingRef.current = false; }}
            onMouseEnter={() => { isInteractingRef.current = true; }}
            onMouseLeave={() => { isInteractingRef.current = false; }}
            // scroll-smooth CSS removido para permitir o loop silencioso e imperceptível. 
            // O JS nativo 'scrollBy({ behavior: "smooth" })' assume a responsabilidade pelas transições animadas.
            className="-mr-5 flex snap-x snap-mandatory gap-5 overflow-x-auto pr-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {infiniteServices.map((service, index) => (
              <ServiceCard key={`${service.id}-${index}`} service={service} />
            ))}
          </div>

          {/* Controles */}
          <div className="mt-5 flex justify-end gap-3">
            <button
              type="button"
              aria-label={siteCopy.services.previousAria}
              onClick={() => scrollCarousel('previous')}
              className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-brand-charcoal/20 bg-white text-brand-charcoal shadow-sm transition hover:bg-brand-charcoal hover:text-white"
            >
              <LuChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label={siteCopy.services.nextAria}
              onClick={() => scrollCarousel('next')}
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
