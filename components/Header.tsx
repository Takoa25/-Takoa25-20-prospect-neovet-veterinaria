'use client';

import { clinic, navItems, siteCopy } from '@/lib/constants';
import Image from 'next/image';
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { LuMenu, LuX } from 'react-icons/lu';

function LogoIcon() {
  return (
    <span className="relative flex h-11 w-11 shrink-0 overflow-hidden rounded-full bg-white ring-1 ring-brand-green/15 sm:h-12 sm:w-12">
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-green/10 bg-white/88 shadow-sm backdrop-blur-xl">
      <div className="section-shell">
        <div className="flex min-h-[74px] items-center justify-between gap-4">
          <a
            href="#inicio"
            onClick={closeMenu}
            className="focus-ring flex min-w-0 items-center gap-3 rounded-full"
          >
            <LogoIcon />
            <span className="leading-none">
              <span className="block font-heading text-2xl font-bold text-brand-green-dark sm:text-3xl">
                {clinic.name}
              </span>
              <span className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-brand-green sm:block">
                {siteCopy.header.clinicSubtitle}
              </span>
            </span>
          </a>

          <nav
            aria-label={siteCopy.header.desktopNavAria}
            className="hidden items-center gap-7 text-sm font-semibold text-slate-700 lg:flex"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="focus-ring rounded-full transition-colors hover:text-brand-green"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={clinic.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring hidden items-center gap-2 rounded-full bg-brand-green px-5 py-3 text-center text-sm font-bold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-brand-green-dark sm:inline-flex"
            >
              <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
              {siteCopy.header.desktopCta}
            </a>

            <button
              type="button"
              aria-label={isOpen ? siteCopy.header.closeMenuAria : siteCopy.header.openMenuAria}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsOpen((value) => !value)}
              className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-green/20 bg-white text-brand-green-dark shadow-sm transition hover:bg-brand-green-light lg:hidden"
            >
              {isOpen ? (
                <LuX className="h-6 w-6" aria-hidden="true" />
              ) : (
                <LuMenu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={`grid transition-all duration-300 lg:hidden ${
            isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <nav
              aria-label={siteCopy.header.mobileNavAria}
              className="space-y-2 border-t border-brand-green/10 py-4 text-sm font-semibold text-slate-700"
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="focus-ring flex rounded-2xl bg-brand-green-light px-4 py-3 text-brand-green-dark transition hover:bg-brand-green hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={clinic.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="focus-ring flex items-center justify-center gap-2 rounded-2xl bg-brand-green px-4 py-3 font-bold text-white shadow-card transition hover:bg-brand-green-dark sm:hidden"
              >
                <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
                {siteCopy.header.mobileCta}
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
