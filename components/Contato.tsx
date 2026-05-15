import { clinic, siteCopy } from '@/lib/constants';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { LuMapPin, LuPhone } from 'react-icons/lu';

export default function Contato() {
  return (
    <section id="contato" className="bg-brand-green-light py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-brand-green">
              {siteCopy.contact.eyebrow}
            </span>
            <h2 className="mt-4 font-heading text-4xl font-bold leading-tight text-brand-green-dark sm:text-5xl">
              {siteCopy.contact.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              {siteCopy.contact.description}
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={clinic.phoneHref}
                className="focus-ring flex items-center gap-4 rounded-2xl bg-white p-5 font-bold text-brand-green-dark shadow-sm transition hover:-translate-y-1 hover:shadow-card"
              >
                <LuPhone className="h-6 w-6 shrink-0" aria-hidden="true" />
                {clinic.phoneDisplay}
              </a>
              <a
                href={clinic.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring flex items-center gap-4 rounded-2xl bg-brand-green p-5 font-bold text-white shadow-card transition hover:-translate-y-1 hover:bg-brand-green-dark"
              >
                <FaWhatsapp className="h-6 w-6 shrink-0" aria-hidden="true" />
                {siteCopy.contact.whatsappCta}
              </a>
              <a
                href={clinic.instagramHref}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring flex items-center gap-4 rounded-2xl bg-white p-5 font-bold text-brand-green-dark shadow-sm transition hover:-translate-y-1 hover:shadow-card"
              >
                <FaInstagram className="h-6 w-6 shrink-0" aria-hidden="true" />
                {clinic.instagramLabel}
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white shadow-soft">
            <div className="flex items-start gap-4 border-b border-brand-green/10 p-6">
              <span className="mt-1 text-brand-green">
                <LuMapPin className="h-6 w-6 shrink-0" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-heading text-3xl font-bold text-brand-green-dark">
                  {siteCopy.contact.locationTitle}
                </h3>
                <p className="mt-2 leading-7 text-slate-700">{clinic.address.full}</p>
                <a
                  href={clinic.address.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring mt-4 inline-flex rounded-full border border-brand-green/25 px-5 py-3 text-sm font-bold text-brand-green-dark transition hover:border-brand-green hover:bg-brand-green-light"
                >
                  {siteCopy.contact.mapsCta}
                </a>
              </div>
            </div>
            <iframe
              title={siteCopy.contact.mapTitle}
              src={clinic.address.embedHref}
              className="h-[360px] w-full border-0"
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
