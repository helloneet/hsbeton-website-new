import LogoImage from '@/assets/logo/logo.png';
import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Mail } from 'lucide-react';
import { WA_DISPLAY, ADDRESS, EMAIL, waLink } from '@/data/site';

const nav = [
  { to: '/', label: 'Home' },
  { to: '/produk', label: 'Produk' },
  { to: '/tentang-kami', label: 'Tentang Kami' },
  { to: '/kontak', label: 'Kontak' },
];

function Logo() {
  return (
    <Link to="/" className="flex items-center">
      <img
        src={LogoImage}
        alt="HS Beton"
        className="h-24 w-auto"
      />
    </Link>
  );
}

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <div className="flex min-h-screen flex-col">
      <div className="bg-[hsl(var(--steel))] text-white/80">
        <div className="rail flex h-9 items-center justify-between text-[11px] font-medium uppercase tracking-[0.16em]">
          <span className="hidden sm:block">Supplier Beton Precast</span>
          <span className="flex items-center gap-2">
            <Phone className="h-3.5 w-3.5 text-accent" strokeWidth={2} />
            {WA_DISPLAY}
          </span>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur">
        <div className="rail flex h-[74px] items-center justify-between">
          <Logo />
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  `text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors ${
                    isActive ? 'text-accent' : 'text-foreground/70 hover:text-foreground'
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="bg-accent px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-[hsl(var(--accent-foreground))] transition-transform hover:brightness-95 active:scale-[0.98]"
            >
              Minta Penawaran
            </a>
          </nav>
          <button
            type="button"
            aria-label="Buka menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center border border-border md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-border bg-white md:hidden">
            <div className="rail flex flex-col py-3">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className={`py-3 text-sm font-semibold uppercase tracking-[0.12em] ${
                    pathname === n.to ? 'text-accent' : 'text-foreground/80'
                  }`}
                >
                  {n.label}
                </Link>
              ))}
              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                className="mt-2 bg-accent py-4 text-center text-sm font-semibold uppercase tracking-[0.12em] text-[hsl(var(--accent-foreground))]"
              >
                WhatsApp Sales
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-[hsl(var(--primary))] text-white/70">
        <div className="hatch h-1.5 w-full" />
        <div className="rail grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <div className="mb-4 [&_span]:!text-white">
              <Logo light />
            </div>
            <p className="max-w-sm text-sm leading-relaxed">
              Menyediakan produk beton precast berkualitas
untuk mendukung proyek infrastruktur,
kawasan industri, perumahan, dan konstruksi.
            </p>
          </div>
          <div>
            <p className="display mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white">Navigasi</p>
            <ul className="space-y-2 text-sm">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="hover:text-accent">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="display mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white">Kontak</p>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{ADDRESS}</li>
              <li className="flex gap-3"><Phone className="h-4 w-4 shrink-0 text-accent" />{WA_DISPLAY}</li>
              <li className="flex gap-3"><Mail className="h-4 w-4 shrink-0 text-accent" />{EMAIL}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="rail py-5 text-xs uppercase tracking-[0.14em]">
            © 2016-{new Date().getFullYear()} HS Beton — Precast Concrete 
          </div>
        </div>
      </footer>
    </div>
  );
}
