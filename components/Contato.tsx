import { clinic, siteCopy } from '@/lib/constants';
import { FaWhatsapp } from 'react-icons/fa';
import { LuClock, LuMapPin, LuPhone } from 'react-icons/lu';

export default function Contato() {
  return (
    <section id="contato" className="bg-brand-surface py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">

          {/* Coluna esquerda — Contatos + Horários */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-mint">
              {siteCopy.contact.eyebrow}
            </span>
            <h2 className="mt-4 font-heading text-4xl font-bold leading-tight text-brand-charcoal sm:text-5xl">
              {siteCopy.contact.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#555]">
              {siteCopy.contact.description}
            </p>

            <div className="mt-8 space-y-3">
              <div className="grid gap-3 sm:grid-cols-2">
                {/* Botão Ligar */}
                <a
                  href={clinic.phoneHref}
                  className="focus-ring flex items-center gap-4 rounded-2xl border border-brand-mint/15 bg-white p-5 font-semibold text-brand-charcoal shadow-sm transition hover:-translate-y-0.5 hover:border-brand-mint/40 hover:shadow-card"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-mint-light text-brand-mint">
                    <LuPhone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    {clinic.phoneDisplay}
                  </span>
                </a>

                {/* Botão WhatsApp */}
                <a
                  href={clinic.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring flex items-center gap-4 rounded-2xl bg-brand-mint p-5 font-semibold text-brand-charcoal shadow-card transition hover:-translate-y-0.5 hover:bg-brand-mint/90"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-charcoal/10">
                    <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    {siteCopy.contact.whatsappCta}
                  </span>
                </a>
              </div>

              {/* Horários */}
              <div className="rounded-2xl bg-brand-charcoal p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-mint/15 text-brand-mint">
                    <LuClock className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="font-semibold text-white">{siteCopy.contact.hoursTitle}</p>
                </div>
                <div className="mt-4 space-y-2">
                  {clinic.hours.map((h) => (
                    <div
                      key={h.day}
                      className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-2.5"
                    >
                      <span className="text-sm font-medium text-white/75">{h.day}</span>
                      <span
                        className={`text-sm font-semibold ${h.time === 'Fechado' ? 'text-brand-mint/50' : 'text-brand-mint'
                          }`}
                      >
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Coluna direita — Mapa embed */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-soft">
            <div className="flex items-start gap-4 border-b border-brand-mint/10 p-6">
              <span className="mt-1 text-brand-mint">
                <LuMapPin className="h-6 w-6 shrink-0" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-heading text-2xl font-bold text-brand-charcoal">
                  {siteCopy.contact.locationTitle}
                </h3>
                <p className="mt-2 leading-7 text-[#555]">{clinic.address.full}</p>
                <a
                  href={clinic.address.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring mt-4 inline-flex rounded-full border border-brand-charcoal/20 px-5 py-2.5 text-sm font-semibold text-brand-charcoal transition hover:border-brand-mint hover:text-brand-mint"
                >
                  {siteCopy.contact.mapsCta}
                </a>
              </div>
            </div>
            <iframe
              title={siteCopy.contact.mapTitle}
              src={clinic.address.embedHref}
              className="h-[400px] w-full border-0 lg:h-[500px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
