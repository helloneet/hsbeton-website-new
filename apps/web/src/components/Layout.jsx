import LogoImage from '@/assets/logo/logo.png';
import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Mail, ArrowUpRight } from 'lucide-react';
import { WA_DISPLAY, ADDRESS, EMAIL, waLink, trackWhatsApp } from '@/data/site';
import FloatingWhatsapp from './FloatingWhatsapp';

const nav = [
  { to: '/', label: 'Home' },
  { to: '/produk', label: 'Produk' },
  { to: '/artikel', label: 'Artikel' },
  { to: '/tentang-kami', label: 'Tentang Kami' },
  { to: '/kontak', label: 'Kontak' },
];

function Logo({ footer = false }) {
  return (
    <Link to="/" aria-label="HS Beton — Home" className="inline-flex shrink-0 items-center">
      <img
        src={LogoImage}
        alt="HS Beton"
        className={footer ? 'h-14 w-auto max-w-[190px] object-contain' : 'h-14 w-auto max-w-[180px] object-contain sm:h-16'}
      />
    </Link>
  );
}

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const closeMenu = () => setOpen(false);

  return (
    <div className="flex min-h-screen flex-col">
      <div className="bg-[hsl(var(--primary))] text-white/75">
        <div className="rail flex min-h-8 items-center justify-between gap-4 text-[10px] font-medium uppercase tracking-[0.14em] sm:text-[11px]">
          <span className="hidden sm:block">Supplier Beton Precast untuk Kebutuhan Proyek</span>
          <a href={waLink()} target="_blank" rel="noreferrer" onClick={trackWhatsApp} className="ml-auto inline-flex items-center gap-2 transition hover:text-white">
            <Phone className="h-3.5 w-3.5 text-accent" />
            <span>{WA_DISPLAY}</span>
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-border/80 bg-white/95 backdrop-blur-md">
        <div className="rail flex h-[72px] items-center justify-between gap-6 sm:h-[80px]">
          <Logo />
          <nav aria-label="Navigasi utama" className="hidden items-center gap-4 lg:flex xl:gap-6">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-[12px] font-semibold uppercase tracking-[0.1em] transition-colors ${isActive ? 'text-accent' : 'text-foreground/70 hover:text-foreground'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              onClick={trackWhatsApp}
              className="inline-flex min-h-11 items-center gap-2 bg-accent px-5 text-[12px] font-semibold uppercase tracking-[0.1em] text-white transition hover:brightness-95"
            >
              Minta Penawaran <ArrowUpRight className="h-4 w-4" />
            </a>
          </nav>

          <button
            type="button"
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center border border-border text-foreground transition hover:border-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-border bg-white lg:hidden">
            <nav aria-label="Navigasi mobile" className="rail flex flex-col py-3">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `border-b border-border/70 py-3.5 text-sm font-semibold uppercase tracking-[0.1em] ${isActive ? 'text-accent' : 'text-foreground/80'}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                onClick={() => { trackWhatsApp(); closeMenu(); }}
                className="mt-4 inline-flex min-h-12 items-center justify-center gap-2 bg-accent px-5 text-sm font-semibold uppercase tracking-[0.1em] text-white"
              >
                Minta Penawaran <ArrowUpRight className="h-4 w-4" />
              </a>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>
      <FloatingWhatsapp />

      <footer className="bg-[hsl(var(--primary))] text-white/70">
        <div className="hatch h-1.5 w-full" />
        <div className="rail grid gap-10 py-12 sm:py-14 md:grid-cols-[1.35fr_0.75fr_1fr] md:gap-12">
          <div>
            <div className="mb-5">
              <Logo footer />
            </div>
            <p className="max-w-sm text-sm leading-7">
              Menyediakan produk beton precast berkualitas untuk mendukung proyek infrastruktur, kawasan industri, perumahan, dan konstruksi.
            </p>
          </div>

          <div>
            <p className="display mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-white">Navigasi</p>
            <ul className="space-y-2.5 text-sm">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="transition hover:text-white">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="display mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-white">Hubungi Kami</p>
            <ul className="space-y-3 text-sm leading-6">
              <li className="flex gap-3"><MapPin className="mt-1 h-4 w-4 shrink-0 text-accent" />{ADDRESS}</li>
              <li className="flex gap-3"><Phone className="mt-1 h-4 w-4 shrink-0 text-accent" />{WA_DISPLAY}</li>
              <li className="flex gap-3"><Mail className="mt-1 h-4 w-4 shrink-0 text-accent" />{EMAIL}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="rail flex flex-col gap-2 py-5 text-[11px] tracking-wide sm:flex-row sm:items-center sm:justify-between">
            <span>© 2016-{new Date().getFullYear()} HS Beton — Precast Concrete</span>
            <span>Menghadirkan Kualitas. Membangun Kepercayaan.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
