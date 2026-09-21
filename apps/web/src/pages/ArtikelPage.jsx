import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const articles = [
  {
    slug: 'u-ditch',
    title: 'U-Ditch Mutu K-350',
    excerpt:
      'Saluran drainase beton pracetak, kuat dan presisi untuk berbagai skala proyek.',
    category: 'Drainase Beton',
  },
  {
    slug: 'box-culvert',
    title: 'Box Culvert Mutu K-350',
    excerpt:
      'Gorong-gorong beton pracetak berkapasitas besar untuk infrastruktur berat.',
    category: 'Drainase Beton',
  },
  {
    slug: 'road-barrier',
    title: 'Road Barrier Mutu K-350',
    excerpt:
      'Pembatas jalan beton pracetak, standar keselamatan dan tahan benturan.',
    category: 'Infrastruktur',
  },
  {
    slug: 'pagar-panel',
    title: 'Pagar Panel Beton Mutu K-350',
    excerpt:
      'Sistem pagar pracetak yang kokoh, cepat dipasang, dan fleksibel sesuai kebutuhan tinggi area.',
    category: 'Pagar Beton',
  },
  {
    slug: 'buis-beton',
    title: 'Buis Beton Mutu K-350',
    excerpt:
      'Beton pracetak berongga untuk sumur, saluran resapan, dan drainase vertikal.',
    category: 'Drainase Beton',
  },
  {
    slug: 'kanstin',
    title: 'Kanstin Mutu K-350',
    excerpt:
      'Pembatas jalan dan trotoar beton pracetak, presisi dan tahan lama.',
    category: 'Infrastruktur',
  },
];

export default function ArtikelPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[hsl(var(--primary))] text-white">
        <div className="rail py-20 md:py-28">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Artikel & Informasi
          </p>

          <h1 className="display max-w-4xl text-5xl font-black uppercase leading-[0.95] md:text-7xl">
            Informasi Beton
            <br />
            Precast
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Informasi seputar produk beton precast HS Beton untuk membantu
            menentukan kebutuhan proyek Anda.
          </p>
        </div>
      </section>

      {/* Article Grid */}
      <section className="rail py-16 md:py-24">
        <div className="mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Pengetahuan Produk
          </p>

          <h2 className="display text-4xl font-black uppercase text-foreground md:text-5xl">
            Artikel Beton Precast
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              to={`/artikel/${article.slug}`}
              className="group flex h-full flex-col border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-accent">
                  {article.category}
                </span>

                <ArrowRight
                  className="h-5 w-5 text-accent transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={1.8}
                />
              </div>

              <h3 className="display text-2xl font-black uppercase leading-tight text-foreground">
                {article.title}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {article.excerpt}
              </p>

              <div className="mt-8 border-t border-border pt-5 text-xs font-semibold uppercase tracking-[0.14em] text-foreground/70 group-hover:text-accent">
                Baca Selengkapnya
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[hsl(var(--steel))] text-white">
        <div className="rail flex flex-col gap-6 py-16 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-2xl font-bold md:text-3xl">
              Butuh produk beton untuk proyek?
            </p>
            <p className="mt-2 text-sm text-white/60">
              Konsultasikan kebutuhan dan spesifikasi proyek Anda dengan tim HS Beton.
            </p>
          </div>

          <a
            href="https://wa.me/6289630672153"
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-3 bg-accent px-7 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:brightness-95"
          >
            Minta Penawaran
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
}