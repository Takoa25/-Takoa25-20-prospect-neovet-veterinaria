'use client';

import { siteCopy, testimonials, type Testimonial } from '@/lib/constants';
import { useCallback, useEffect, useRef } from 'react';
import { LuStar } from 'react-icons/lu';
import { PiPawPrintFill } from 'react-icons/pi';

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} estrelas`}>
      {Array.from({ length: count }).map((_, i) => (
        <LuStar key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
      ))}
    </div>
  );
}

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('');
  return (
    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-mint-light font-semibold text-brand-charcoal text-sm ring-2 ring-brand-mint/20">
      {initials}
    </span>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-mint/20 hover:shadow-soft">
      {/* Topo: avatar + estrelas */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <Avatar name={testimonial.name} />
          <div>
            <p className="font-semibold text-brand-charcoal leading-tight">{testimonial.name}</p>
            <p className="text-xs text-[#888] mt-0.5">{testimonial.context}</p>
          </div>
        </div>
        <Stars />
      </div>

      {/* Aspas decorativas e texto (com quebra forçada) */}
      <p className="mt-5 flex-1 whitespace-normal break-words text-[0.9rem] italic leading-relaxed text-[#444]">
        &ldquo;{testimonial.text}&rdquo;
      </p>
    </article>
  );
}

// Triplicamos para criar o loop infinito contínuo
const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];

export default function Depoimentos() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<number | null>(null);
  const isInteractingRef = useRef(false);
  const itemsPerSet = testimonials.length;

  // Ajusta a posição inicial para o início do segundo set
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    
    const timeout = setTimeout(() => {
      const card = carousel.querySelector('div[data-card="true"]') as HTMLElement;
      if (!card) return;
      const cardWidth = card.clientWidth + 20; // 20 = gap-5
      carousel.scrollLeft = cardWidth * itemsPerSet;
    }, 100);

    return () => clearTimeout(timeout);
  }, [itemsPerSet]);

  // Detector de borda para criar o loop infinito sem pulos
  const handleScroll = useCallback(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const card = carousel.querySelector('div[data-card="true"]') as HTMLElement;
    if (!card) return;
    
    const cardWidth = card.clientWidth + 20;
    const setWidth = cardWidth * itemsPerSet;

    if (carousel.scrollLeft <= cardWidth * 0.5) {
      carousel.scrollLeft += setWidth;
    }
    else if (carousel.scrollLeft >= setWidth * 2 - cardWidth * 0.5) {
      carousel.scrollLeft -= setWidth;
    }
  }, [itemsPerSet]);

  // Rotação suave contínua
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const startAutoScroll = () => {
      autoScrollRef.current = window.setInterval(() => {
        if (isInteractingRef.current) return;
        const card = carousel.querySelector('div[data-card="true"]') as HTMLElement;
        if (!card) return;
        
        const cardWidth = card.clientWidth + 20;
        carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }, 3500);
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
    <section id="depoimentos" className="relative overflow-hidden bg-white py-20 sm:py-24">
      {/* Patinha decorativa */}
      <PiPawPrintFill
        className="pointer-events-none absolute bottom-8 right-6 h-28 w-28 -rotate-[20deg] text-brand-mint opacity-[0.07] select-none sm:h-36 sm:w-36"
        aria-hidden="true"
      />

      <div className="section-shell">
        {/* Cabeçalho */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.22em] text-brand-mint">
            {siteCopy.testimonials.eyebrow}
          </span>
          <h2 className="mt-4 font-heading text-4xl font-bold leading-tight text-brand-charcoal sm:text-5xl">
            {siteCopy.testimonials.title}
          </h2>
        </div>

        {/* Carrossel Infinito (Mobile & Desktop unificados) */}
        <div className="mt-12">
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            onPointerDown={() => { isInteractingRef.current = true; }}
            onPointerUp={() => { isInteractingRef.current = false; }}
            onPointerCancel={() => { isInteractingRef.current = false; }}
            onMouseEnter={() => { isInteractingRef.current = true; }}
            onMouseLeave={() => { isInteractingRef.current = false; }}
            className="-mr-5 flex snap-x snap-mandatory gap-5 overflow-x-auto pr-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {infiniteTestimonials.map((t, index) => (
              <div 
                key={`${t.name}-${index}`} 
                data-card="true"
                className="w-[85vw] shrink-0 snap-start sm:w-[360px] md:w-[400px]"
              >
                {/* O USO DE LARGURA FIXA E STRICT AQUI EVITA O ESTIRAMENTO DO CARD */}
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
