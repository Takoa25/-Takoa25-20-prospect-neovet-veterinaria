import { clinic, siteCopy, siteImages } from '@/lib/constants';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
import { LuArrowDown, LuBadgeCheck } from 'react-icons/lu';
import { PiPawPrintFill } from 'react-icons/pi';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-brand-mint-light pt-28 lg:min-h-screen lg:pt-24"
    >
      {/* Patinha decorativa — canto superior esquerdo */}
      <PiPawPrintFill
        className="pointer-events-none absolute left-6 top-32 -z-10 h-28 w-28 rotate-[15deg] text-brand-mint opacity-[0.08] select-none sm:h-36 sm:w-36"
        aria-hidden="true"
      />
      {/* Patinha decorativa — canto inferior direito */}
      <PiPawPrintFill
        className="pointer-events-none absolute bottom-12 right-4 -z-10 h-20 w-20 -rotate-[20deg] text-brand-mint opacity-[0.07] select-none sm:h-28 sm:w-28"
        aria-hidden="true"
      />

      {/* 
        Grid: 1 coluna no mobile, 12 colunas no desktop.
        A sobreposição acontece na coluna 7.
        items-center garante centralização vertical e o respiro.
      */}
      <div className="section-shell grid items-center gap-10 pb-16 pt-6 lg:grid-cols-12 lg:gap-0 lg:py-4 lg:min-h-[calc(100vh-96px)]">

        {/* Coluna Direita — Caixa de Texto (Aparece PRIMEIRO no mobile: order-1) */}
        <div className="order-1 z-10 flex w-full items-center lg:col-span-12 lg:col-start-1 lg:row-start-1 lg:justify-end">
          {/* 
            💡 AJUSTE DE SOBREPOSIÇÃO E LARGURA RESPONSIVA (DESKTOP/NOTEBOOK)
            A matemática abaixo garante que, INDEPENDENTE da altura da tela (notebook ou monitor 4K),
            a caixa de texto vai invadir a imagem em exatos 70px.
            
            - Para aumentar a sobreposição, mude o "+70px" abaixo para "+90px" ou "+110px".
            - Para diminuir, mude para "+40px" ou "+20px".
            
            A função calc() subtrai exatamente o tamanho atual da imagem e soma os pixels de invasão,
            criando o encaixe perfeito e inquebrável em qualquer tela.
          */}
          <div className="w-full rounded-[1.75rem] bg-brand-charcoal p-7 shadow-[0_24px_64px_rgba(19,19,19,0.25)] sm:p-10 lg:max-w-[calc(100%-min(75vh,560px)+30px)] lg:rounded-[2rem]">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-mint/30 bg-brand-mint/10 px-4 py-2 text-sm font-medium text-brand-mint">
              <LuBadgeCheck className="h-4 w-4" aria-hidden="true" />
              {clinic.tagline}
            </span>

            {/* Título */}
            <h1 className="mt-5 font-heading text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl xl:text-[3.25rem]">
              {siteCopy.hero.title}
            </h1>

            {/* Descrição */}
            <p className="mt-4 text-base leading-relaxed text-white/65 sm:text-lg">
              {siteCopy.hero.description}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={clinic.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-brand-mint px-6 py-3.5 text-center font-semibold text-brand-charcoal transition hover:bg-brand-mint/90 hover:-translate-y-0.5"
              >
                <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
                {siteCopy.hero.primaryCta}
              </a>
              <a
                href="#servicos"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-transparent px-6 py-3.5 text-center font-medium text-white transition hover:border-brand-mint/60 hover:text-brand-mint"
              >
                <LuArrowDown className="h-5 w-5" aria-hidden="true" />
                {siteCopy.hero.secondaryCta}
              </a>
            </div>
          </div>
        </div>

        {/* Coluna Esquerda — Imagem (Aparece DEPOIS no mobile: order-2) */}
        <div className="order-2 mx-auto w-full max-w-[520px] lg:col-span-12 lg:col-start-1 lg:row-start-1 lg:mx-0 lg:max-w-none lg:flex lg:justify-start">
          {/* 
            Imagem em formato perfeitamente quadrado no desktop.
            h e w possuem a mesma regra matemática (min(75vh,560px)) para garantir o formato quadrado sem esticar.
          */}
          <div className="relative h-[380px] w-full overflow-hidden rounded-[1.75rem] shadow-card sm:h-[440px] lg:h-[min(75vh,560px)] lg:w-[min(75vh,560px)] lg:rounded-[2rem]">
            <Image
              src={siteImages.hero.src}
              alt={siteImages.hero.alt}
              fill
              priority
              sizes="(min-width: 1024px) 60vw, 95vw"
              className="object-cover object-center"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
