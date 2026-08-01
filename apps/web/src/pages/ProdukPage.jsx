import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import Layout from '@/components/Layout';
import { products, waLink } from '@/data/site';

export default function ProdukPage() {
  return (
    <Layout>
      <Helmet>
        <title>Produk Beton Precast — U-Ditch, Box Culvert, Road Barrier | HS Beton</title>
        <meta
          name="description"
          content="Katalog produk beton precast HS Beton: U-ditch, box culvert, road barrier, pagar panel, buis beton, dan kanstin dengan spesifikasi mutu K-300 hingga K-350."
        />
      </Helmet>

      <section className="border-b border-border bg-[hsl(var(--muted))]">
        <div className="rail py-16 lg:py-20">
          <p className="eyebrow mb-3">Katalog</p>
          <h1 className="display max-w-3xl text-5xl font-bold uppercase leading-[0.95] sm:text-6xl">
            Produk beton precast
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Semua item tersedia dalam ukuran standar maupun custom sesuai gambar kerja.
            Harga mengikuti volume, lokasi kirim, dan jadwal proyek — silakan minta penawaran.
          </p>
        </div>
      </section>

      <section className="rail py-16 lg:py-20">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((p) => (
            <article key={p.slug} className="group flex flex-col border border-border bg-white transition hover:border-accent">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={`Produk ${p.name} HS Beton`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="display text-2xl font-semibold uppercase">{p.name}</h2>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent">{p.spec}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <div className="mt-6 flex gap-3">
                  <a
                    href={waLink(`Halo HS Beton, saya ingin penawaran untuk produk ${p.name}.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 bg-accent px-4 text-xs font-semibold uppercase tracking-[0.12em] text-[hsl(var(--accent-foreground))] active:scale-[0.98]"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                  <Link
                    to="/kontak"
                    className="inline-flex min-h-[44px] items-center justify-center border border-border px-4 text-xs font-semibold uppercase tracking-[0.12em] text-foreground hover:border-foreground active:scale-[0.98]"
                  >
                    Form
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-[hsl(var(--steel))]">
        <div className="rail flex flex-col gap-6 py-14 md:flex-row md:items-center md:justify-between">
          <p className="display max-w-xl text-2xl font-semibold uppercase text-white sm:text-3xl">
            Butuh ukuran custom atau produk di luar katalog?
          </p>
          <a href={waLink('Halo HS Beton, saya butuh produk precast ukuran custom.')} target="_blank" rel="noreferrer" className="inline-flex min-h-[52px] items-center justify-center bg-accent px-8 text-sm font-semibold uppercase tracking-[0.14em] text-[hsl(var(--accent-foreground))] active:scale-[0.98]">
            Konsultasi Sekarang
          </a>
        </div>
      </section>
    </Layout>
  );
}
