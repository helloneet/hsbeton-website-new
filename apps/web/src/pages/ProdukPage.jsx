import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, MessageCircle, Ruler } from 'lucide-react';
import Layout from '@/components/Layout';
import { products, waLink, trackWhatsApp } from '@/data/site';

const categories = ['U-Ditch', 'Box Culvert', 'Road Barrier', 'Pagar Panel', 'Buis Beton', 'Kanstin'];

export default function ProdukPage() {
  return (
    <Layout>
      <Helmet>
        <title>Katalog Produk Beton Precast — HS Beton</title>
        <meta name="description" content="Jelajahi katalog beton precast HS Beton untuk drainase, jalan, dan kebutuhan konstruksi. Konsultasikan ukuran dan spesifikasi proyek." />
      </Helmet>

      <section className="bg-[#F2F3F1]">
        <div className="rail grid gap-8 py-12 sm:py-12 lg:grid-cols-[1fr_0.75fr] lg:items-end lg:py-16">
          <div>
            <p className="eyebrow mb-4">Katalog / HS Beton</p>
            <h1 className="display max-w-4xl text-[clamp(3rem,6.5vw,6rem)] font-bold uppercase leading-[0.88]">Pilihan beton<br /><span className="text-accent">untuk proyek.</span></h1>
          </div>
          <div className="max-w-xl lg:justify-self-end">
            <p className="text-sm leading-7 text-foreground/70 sm:text-base sm:leading-8">Temukan produk precast untuk kebutuhan drainase, jalan, dan pembatas area. Ukuran, mutu, volume, dan lokasi pengiriman dapat dikonsultasikan sesuai kebutuhan proyek.</p>
            <a href={waLink('Halo HS Beton, saya ingin konsultasi katalog produk beton precast.')} target="_blank" rel="noreferrer" onClick={trackWhatsApp} className="mt-6 inline-flex min-h-12 items-center gap-3 bg-accent px-6 text-xs font-bold uppercase tracking-[0.12em] text-white">Konsultasi Produk <ArrowUpRight className="h-4 w-4" /></a>
          </div>
        </div>
      </section>

      <div className="sticky top-[68px] z-30 border-y border-border bg-white/95 backdrop-blur sm:top-[76px]">
        <div className="rail flex items-center gap-6 overflow-x-auto py-4">
          <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.18em] text-accent">Produk</span>
          {categories.map((name) => <span key={name} className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground/65">{name}</span>)}
        </div>
      </div>

      <section className="rail py-12 sm:py-16 lg:py-20">
        <div className="mb-8 flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="eyebrow mb-3">Katalog Produk</p><h2 className="display text-4xl font-bold uppercase leading-[0.9] sm:text-5xl">Produk precast HS Beton</h2></div>
          <p className="max-w-md text-sm leading-6 text-muted-foreground">Pilih produk untuk melihat informasi dan mengajukan kebutuhan penawaran.</p>
        </div>

        <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, index) => (
            <article key={p.slug} className="group flex flex-col">
              <Link to={`/artikel/${p.slug}`} className="relative block overflow-hidden bg-[#eef0f1]">
                <span className="absolute left-3 top-3 z-10 bg-white/90 px-3 py-1.5 text-[10px] font-bold tracking-[0.14em]">{String(index + 1).padStart(2, '0')}</span>
                <img src={p.image} alt={`Produk ${p.name} HS Beton`} loading="lazy" className="aspect-[1.35/1] w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
                <span className="absolute bottom-3 right-3 grid h-10 w-10 place-items-center bg-accent text-white transition group-hover:bg-[hsl(var(--primary))]"><ArrowUpRight className="h-5 w-5" /></span>
              </Link>
              <div className="flex flex-1 flex-col border-b border-border pb-5">
                <div className="flex items-start justify-between gap-3 pt-4">
                  <div><h2 className="display text-2xl font-bold uppercase sm:text-3xl">{p.name}</h2><p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-accent">{p.spec}</p></div>
                  <span className="mt-1 text-[10px] font-semibold tracking-[0.12em] text-muted-foreground">HS / {String(index + 1).padStart(2, '0')}</span>
                </div>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{p.desc}</p>
                <div className="mt-5 flex flex-col gap-3">
                  <a href={waLink(`Halo HS Beton, saya ingin meminta penawaran untuk produk ${p.name}.`)} target="_blank" rel="noreferrer" onClick={trackWhatsApp} className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 bg-accent px-4 text-[10px] font-bold uppercase tracking-[0.1em] text-white transition hover:brightness-95"><MessageCircle className="h-4 w-4" /> Minta Penawaran</a>
                  <Link to={`/artikel/${p.slug}`} className="inline-flex min-h-11 items-center justify-center gap-2 border border-border px-4 text-[10px] font-bold uppercase tracking-[0.1em] transition hover:border-foreground">Detail <ArrowRight className="h-4 w-4" /></Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[hsl(var(--primary))] text-white">
        <div className="rail grid gap-7 py-12 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-center">
          <div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/50">Kebutuhan khusus?</p><h2 className="display mt-3 max-w-3xl text-4xl font-bold uppercase leading-[0.9] sm:text-5xl">Ukuran dan spesifikasi<br className="hidden sm:block" /> dapat didiskusikan.</h2><p className="mt-4 max-w-xl text-sm leading-7 text-white/65">Siapkan gambar kerja, ukuran, volume, dan lokasi proyek untuk mempermudah konsultasi.</p></div>
          <a href={waLink('Halo HS Beton, saya ingin konsultasi produk precast custom sesuai kebutuhan proyek.')} target="_blank" rel="noreferrer" onClick={trackWhatsApp} className="inline-flex min-h-14 items-center justify-center gap-3 bg-accent px-7 text-xs font-bold uppercase tracking-[0.12em] text-white">Konsultasi Custom <ArrowUpRight className="h-4 w-4" /></a>
        </div>
      </section>
    </Layout>
  );
}
