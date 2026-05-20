'use client';

import { clinic, navItems, siteCopy } from '@/lib/constants';
import Image from 'next/image';
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { LuMenu, LuX } from 'react-icons/lu';
import { PiPawPrintFill } from 'react-icons/pi';

function LogoIcon() {
  return (
    <span className="relative flex h-11 w-11 shrink-0 overflow-hidden rounded-full bg-brand-mint-light ring-2 ring-brand-mint/25 sm:h-12 sm:w-12">
      <Image
        src="/logo.jpg"
        alt={siteCopy.logoAlt}
        fill
        sizes="48px"
        className="object-cover"
        priority
      />
    </span>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="glass-nav fixed inset-x-0 top-0 z-50 border-b border-brand-mint/10 shadow-sm">
      <div className="section-shell">
        <div className="flex min-h-[74px] items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={closeMenu}
            className="focus-ring flex min-w-0 items-center gap-3 rounded-full"
          >
            <LogoIcon />
            <span className="leading-none">
              <span className="flex items-center gap-1.5">
                {/* Patinha decorativa discreta ao lado do nome */}
                <PiPawPrintFill
                  className="h-3.5 w-3.5 text-brand-mint opacity-70"
                  aria-hidden="true"
                />
                <span className="block font-heading text-2xl font-bold text-brand-charcoal sm:text-3xl">
                  {clinic.name}
                </span>
              </span>
              <span className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-brand-mint sm:block">
                {siteCopy.header.clinicSubtitle}
              </span>
            </span>
          </a>

          {/* Nav desktop */}
          <nav
            aria-label={siteCopy.header.desktopNavAria}
            className="hidden items-center gap-6 text-sm font-medium text-[#444] lg:flex"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="focus-ring rounded-full transition-colors hover:text-brand-mint"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA + menu mobile */}
          <div className="flex items-center gap-2">
            <a
              href={clinic.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring hidden items-center gap-2 rounded-full border border-brand-charcoal bg-transparent px-5 py-2.5 text-center text-sm font-semibold text-brand-charcoal transition hover:bg-brand-charcoal hover:text-white sm:inline-flex"
            >
              <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
              Agendar Consulta
            </a>

            <button
              type="button"
              aria-label={isOpen ? siteCopy.header.closeMenuAria : siteCopy.header.openMenuAria}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsOpen((value) => !value)}
              className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-mint/20 bg-white text-brand-charcoal shadow-sm transition hover:bg-brand-mint-light lg:hidden"
            >
              {isOpen ? (
                <LuX className="h-6 w-6" aria-hidden="true" />
              ) : (
                <LuMenu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        <div
          id="mobile-menu"
          className={`grid transition-all duration-300 lg:hidden ${
            isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="glass-menu overflow-hidden rounded-b-3xl shadow-sm">
            <nav
              aria-label={siteCopy.header.mobileNavAria}
              className="space-y-2 border-t border-brand-mint/10 py-4 text-sm font-medium text-[#444]"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="focus-ring flex rounded-2xl bg-brand-mint-light px-4 py-3 text-brand-charcoal transition hover:bg-brand-mint hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={clinic.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="focus-ring flex items-center justify-center gap-2 rounded-2xl border border-brand-charcoal bg-transparent px-4 py-3 font-semibold text-brand-charcoal transition hover:bg-brand-charcoal hover:text-white sm:hidden"
              >
                <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
                Agendar Consulta
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
