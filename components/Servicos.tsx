'use client';

import { services, siteCopy, type Service } from '@/lib/constants';
import Image from 'next/image';
import { type CSSProperties, useEffect, useRef } from 'react';
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

// Bento grid desktop:
// ajuste aqui quantas colunas cada tipo de card ocupa no desktop.
// Os tipos vêm de `layout` em lib/constants.ts: feature, standard e wide.
// Exemplo: trocar standard de `lg:col-span-2` para `lg:col-span-4`
// deixa os cards padrão mais largos.
// Altura dos cards:
// adicione `lg:row-span-2`, `lg:row-span-3` etc. em cada tipo abaixo
// e combine com `lg:auto-rows-[...]` no container do grid mais abaixo.
// Alinhamento/posição no grid:
// use `lg:col-start-1`, `lg:col-start-2`, `lg:col-start-3`,
// `lg:justify-self-start`, `lg:justify-self-end` ou `lg:justify-self-stretch`
// para controlar se o card fica mais à esquerda, à direita ou esticado na área.
const desktopLayout: Record<Service['layout'], string> = {
  feature: 'lg:col-span-1 xl:col-span-1',
  wide: 'lg:col-span-1 xl:col-span-1',
  standard: 'lg:col-span-2 xl:col-span-2',
};

type ServiceCardProps = {
  service: Service;
  mode: 'desktop' | 'mobile';
  className?: string;
  desktopOrientation?: 'vertical' | 'horizontal';
  imageClassName?: string;
  contentClassName?: string;
  imageStyle?: CSSProperties;
};

function ServiceCard({
  service,
  mode,
  className = '',
  desktopOrientation = 'vertical',
  imageClassName = '',
  contentClassName = '',
  imageStyle,
}: ServiceCardProps) {
  const Icon = serviceIcons[service.icon];
  const isDesktopHorizontal = mode === 'desktop' && desktopOrientation === 'horizontal';
  const placementClassName =
    mode === 'desktop' ? className || desktopLayout[service.layout] : 'min-w-[82vw] snap-start';
  const isOphthalmology = service.id === 'oftalmologia';
  const isDermatology = service.id === 'dermatologia';

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-card ${
        isOphthalmology
          ? 'border-brand-green-dark/20 bg-brand-green text-white hover:border-white/50'
          : 'border-white bg-white hover:border-brand-green/40'
      } ${placementClassName}`}
    >
      {isDermatology ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.08]"
        >
          {Array.from({ length: 40 }).map((_, index) => (
            <PiPawPrintFill
              key={index}
              className="absolute h-10 w-10 rotate-[-28deg] text-brand-green-dark"
              style={{
                left: `${(index % 8) * 14 - 6}%`,
                top: `${Math.floor(index / 6) * 24 - 8}%`,
              }}
            />
          ))}
        </div>
      ) : null}

      {/* Altura interna do card:
         ajuste aqui se quiser uma altura mínima fixa, por exemplo:
         `min-h-[360px]`, `lg:min-h-[420px]` ou `xl:min-h-[480px]`.
         Se remover `h-full`, o card passa a seguir mais a altura natural do conteúdo. */}
      <div
        className={`relative z-10 flex h-full p-4 ${
          isDesktopHorizontal ? 'items-center gap-4 xl:gap-5' : 'flex-col'
        }`}
      >
        {/* Formato da imagem dentro do card:
           altere `aspect-[4/3]` para controlar a proporção visual.
           Exemplos úteis: `aspect-square`, `aspect-[16/9]`, `aspect-[3/2]`. */}
        <div
          className={`relative aspect-[4/3] overflow-hidden rounded-[1.15rem] ${
            isDesktopHorizontal ? 'w-[42%] shrink-0' : ''
          } ${imageClassName}`}
          style={imageStyle}
        >
          <Image
            src={service.image.src}
            alt={service.image.alt}
            fill
            sizes={
              mode === 'desktop'
                ? '(min-width: 1024px) 34vw, 82vw'
                : '82vw'
            }
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/35 via-transparent to-transparent" />
        </div>

        <div
          className={`flex flex-1 flex-col ${
            isDesktopHorizontal ? 'justify-center' : 'pt-4'
          } ${contentClassName}`}
        >
          <div className="flex items-center gap-3">
            <span
              className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
                isOphthalmology
                  ? 'bg-white/15 text-white ring-1 ring-white/25'
                  : 'bg-brand-green-light text-brand-green'
              }`}
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3
              className={`font-heading font-bold leading-tight ${
                isDesktopHorizontal ? 'text-2xl xl:text-3xl' : 'text-3xl'
              } ${isOphthalmology ? 'text-white' : 'text-brand-green-dark'}`}
            >
              {service.title}
            </h3>
          </div>
          <p className={`mt-3 leading-7 ${isOphthalmology ? 'text-white/90' : 'text-slate-700'}`}>
            {service.description}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function Servicos() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<number | null>(null);
  const isInteractingRef = useRef(false);
  const servicesById = Object.fromEntries(
    services.map((service) => [service.id, service]),
  ) as Record<Service['id'], Service>;
  const clinicaGeral = servicesById['clinica-geral'];
  const oftalmologia = servicesById.oftalmologia;
  const vacinas = servicesById.vacinas;
  const banhoETosa = servicesById['banho-e-tosa'];
  const dermatologia = servicesById.dermatologia;
  const exames = servicesById.exames;

  const scrollCarousel = (direction: 'previous' | 'next') => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const cardWidth = carousel.querySelector('article')?.clientWidth ?? 280;
    carousel.scrollBy({
      left: direction === 'next' ? cardWidth + 16 : -(cardWidth + 16),
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const startAutoScroll = () => {
      autoScrollRef.current = window.setInterval(() => {
        if (isInteractingRef.current || window.matchMedia('(min-width: 1024px)').matches) {
          return;
        }

        const maxScroll = carousel.scrollWidth - carousel.clientWidth;
        const reachedEnd = carousel.scrollLeft >= maxScroll - 8;

        carousel.scrollTo({
          left: reachedEnd ? 0 : carousel.scrollLeft + carousel.clientWidth * 0.78,
          behavior: 'smooth',
        });
      }, 4200);
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
    <section id="servicos" className="bg-brand-green-light py-20 sm:py-24">
      <div className="section-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-brand-green">
              <LuSparkles className="h-4 w-4" aria-hidden="true" />
              {siteCopy.services.eyebrow}
            </span>
            <h2 className="mt-4 font-heading text-4xl font-bold leading-tight text-brand-green-dark sm:text-5xl">
              {siteCopy.services.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              {siteCopy.services.description}
            </p>
          </div>

          <div className="hidden gap-2 lg:flex">
            <span className="rounded-full bg-white px-5 py-3 text-sm font-bold text-brand-green-dark shadow-sm">
              {siteCopy.services.badge}
            </span>
          </div>
        </div>

        {/* Container do bento desktop:
           `lg:grid-cols-3` define a grade base atual: 3 colunas no desktop.
           Mudar para `lg:grid-cols-4`, `lg:grid-cols-6` ou outro valor
           altera a lógica de largura e posicionamento dos cards.
           `gap-5` controla o espaçamento entre cards. */}
        {/* Altura das linhas do bento:
           adicione aqui classes como `lg:auto-rows-[260px]`,
           `lg:auto-rows-[320px]` ou `lg:auto-rows-min`.
           Depois use `lg:row-span-2` ou `lg:row-span-3` no `desktopLayout`
           para um card ocupar mais altura.
           Alinhamento geral dos itens:
           use `lg:justify-items-start`, `lg:justify-items-end` ou
           `lg:justify-items-stretch` neste container para alinhar todos os cards. */}
        <div className="mt-12 hidden gap-5 lg:grid lg:grid-cols-3 lg:auto-rows-[340px] xl:auto-rows-[360px]">
          <ServiceCard
            service={clinicaGeral}
            mode="desktop"
            className="lg:col-span-1 lg:row-span-2"
            imageClassName="lg:aspect-auto lg:h-3/4"
            contentClassName="lg:justify-center lg:pt-0"
          />
          <ServiceCard
            service={oftalmologia}
            mode="desktop"
            desktopOrientation="horizontal"
            className="lg:col-span-2 lg:row-span-1"
            // Altura/largura da moldura da imagem do card Oftalmologia:
            // ajuste `w-[42%]` dentro de `imageClassName` para deixar a imagem
            // ocupar mais ou menos espaço horizontal no card largo.
            imageClassName="lg:w-[47%]"
            imageStyle={{ height: '100%' }}
          />
          <ServiceCard
            service={banhoETosa}
            mode="desktop"
            className="lg:col-span-1 lg:row-span-1"
          />
          <ServiceCard
            service={vacinas}
            mode="desktop"
            className="lg:col-span-1 lg:row-span-1"
            // Altura da moldura da imagem do card Vacinas:
            // ajuste `lg:aspect-[4/3]` para `lg:aspect-square`,
            // `lg:aspect-[16/9]` ou outro formato de sua preferência.
            imageClassName="lg:aspect-[4/3]"
          />
          <ServiceCard
            service={dermatologia}
            mode="desktop"
            desktopOrientation="horizontal"
            className="lg:col-span-2 lg:row-span-1"
            imageClassName="lg:w-[47%]"
            imageStyle={{ height: '100%' }}
          />
          <ServiceCard
            service={exames}
            mode="desktop"
            className="lg:col-span-1 lg:row-span-1"
          />
        </div>

        <div className="mt-10 lg:hidden">
          <div
            ref={carouselRef}
            onPointerDown={() => {
              isInteractingRef.current = true;
            }}
            onPointerUp={() => {
              isInteractingRef.current = false;
            }}
            onPointerCancel={() => {
              isInteractingRef.current = false;
            }}
            onMouseEnter={() => {
              isInteractingRef.current = true;
            }}
            onMouseLeave={() => {
              isInteractingRef.current = false;
            }}
            className="-mr-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pl-0 pr-5 pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} mode="mobile" />
            ))}
          </div>

          <div className="mt-2 flex justify-end gap-3">
            <button
              type="button"
              aria-label={siteCopy.services.previousAria}
              onClick={() => scrollCarousel('previous')}
              className="focus-ring flex h-11 w-11 items-center justify-center rounded-full bg-white text-brand-green-dark shadow-sm transition hover:bg-brand-green hover:text-white"
            >
              <LuChevronLeft className="h-6 w-6" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label={siteCopy.services.nextAria}
              onClick={() => scrollCarousel('next')}
              className="focus-ring flex h-11 w-11 items-center justify-center rounded-full bg-brand-green text-white shadow-card transition hover:bg-brand-green-dark"
            >
              <LuChevronRight className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
