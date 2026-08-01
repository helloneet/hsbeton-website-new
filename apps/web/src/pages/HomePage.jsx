import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Truck, Factory, FileCheck2 } from 'lucide-react';
import Layout from '@/components/Layout';
import { products, waLink } from '@/data/site';

const HERO = 'https://images.hostinger.com/7c2a17b2-4528-4875-8cc3-68418e28c2c2.png';
const PLANT = 'https://images.hostinger.com/e8c3e735-2c3a-42ca-ab6e-41bc4c0ce419.png';

const ticker = ['U-Ditch', 'Box Culvert', 'Road Barrier', 'Pagar Panel', 'Buis Beton', 'Kanstin', 'Cover U-Ditch'];

export default function HomePage() {
  return (
    <Layout>
      <Helmet>
        <title>HS Beton — Produsen Beton Precast untuk Kontraktor & Infrastruktur</title>
        <meta
          name="description"
          content="HS Beton memproduksi U-ditch, box culvert, road barrier, pagar panel, dan buis beton mutu K-350 untuk kontraktor dan perusahaan konstruksi. Minta penawaran via WhatsApp."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative flex min-h-[100dvh] items-end overflow-hidden bg-[hsl(var(--primary))]">
        <img src={HERO} alt="Yard produksi beton precast HS Beton di Cikarang" className="absolute inset-0 h-full w-full object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--primary))] via-[hsl(var(--primary))]/70 to-transparent" />
        <div className="rail relative w-full pb-16 pt-32">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <p className="eyebrow mb-5">Menghadirkan Kualitas. Membangun Kepercayaan.</p>
            <h1 className="display max-w-4xl text-5xl font-bold uppercase leading-[0.95] text-white sm:text-7xl lg:text-8xl">
               Solusi Beton Precast<br />
              <span className="text-accent">untuk Berbagai Kebutuhan Proyek</span> proyek Anda
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75">
              HS Beton menyediakan berbagai produk beton precast berkualitas untuk mendukung proyek infrastruktur, kawasan industri, perumahan, hingga bangunan komersial. Dengan proses produksi yang terstandarisasi dan pengiriman tepat waktu, kami siap menjadi mitra terpercaya untuk kebutuhan proyek Anda.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 bg-accent px-8 text-sm font-semibold uppercase tracking-[0.14em] text-[hsl(var(--accent-foreground))] transition hover:brightness-95 active:scale-[0.98]"
              >
                Minta Penawaran <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/produk"
                className="inline-flex min-h-[52px] items-center justify-center border border-white/30 px-8 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white/10 active:scale-[0.98]"
              >
                Lihat Katalog Produk
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TICKER */}
      <div className="overflow-hidden border-y border-border bg-[hsl(var(--steel))] py-4">
        <div className="flex w-max animate-marquee gap-10 pr-10">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="display flex items-center gap-10 text-lg font-semibold uppercase tracking-[0.2em] text-white/60">
              {t} <span className="h-1.5 w-1.5 bg-accent" />
            </span>
          ))}
        </div>
      </div>

      {/* METRICS */}
      <section className="rail grid grid-cols-2 gap-px border-x border-border bg-border py-0 md:grid-cols-4">
        {[
          ['15+', 'Tahun produksi'],
          ['K-350', 'Mutu standar'],
          ['600+', 'Proyek terkirim'],
          ['24 Jam', 'Respon penawaran'],
        ].map(([v, l]) => (
          <div key={l} className="bg-white px-6 py-10">
            <p className="display text-4xl font-bold text-foreground">{v}</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{l}</p>
          </div>
        ))}
      </section>

      {/* PRODUK SOROTAN */}
      <section className="rail py-20 lg:py-28">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6 border-b border-border pb-6">
          <div>
            <p className="eyebrow mb-3">Lini Produk</p>
            <h2 className="display text-4xl font-bold uppercase sm:text-5xl">Produk precast unggulan</h2>
          </div>
          <Link to="/produk" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
            Semua produk <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((p) => (
            <Link key={p.slug} to="/produk" className="group border border-border bg-white transition hover:border-accent">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="display text-2xl font-semibold uppercase">{p.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent">{p.spec}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* KENAPA KAMI — sticky split */}
      <section className="border-y border-border bg-[hsl(var(--muted))]">
        <div className="rail grid gap-12 py-20 lg:grid-cols-2 lg:py-28">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow mb-3">Kenapa Kontraktor Memilih Kami</p>
            <h2 className="display text-4xl font-bold uppercase leading-tight sm:text-5xl">
              Bukan sekadar cetak beton
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              Setiap batch diproduksi di pabrik tertutup dengan kontrol slump, curing terjadwal,
              dan uji tekan silinder. Dokumen mutu kami siap untuk keperluan MC dan audit proyek.
            </p>
            <img src={PLANT} alt="Quality control produksi precast HS Beton" className="mt-8 hidden aspect-[3/2] w-full object-cover lg:block" />
          </div>
          <div className="divide-y divide-border border-t border-border">
            {[
              [Factory, 'Produksi terkontrol', 'Batching plant sendiri, mix design tetap, dan pengawasan QC di setiap tahap cetak dan curing.'],
              [FileCheck2, 'Dokumen mutu lengkap', 'Hasil uji tekan, sertifikat mutu bahan, dan surat jalan tercatat untuk setiap pengiriman.'],
              [Truck, 'Armada & alat bongkar', 'Tronton dan self-loader crane untuk pengiriman sampai titik pemasangan di lapangan.'],
              [ShieldCheck, 'Harga proyek transparan', 'Penawaran per item, per volume, dengan skema pembayaran termin untuk kontraktor.'],
            ].map(([Icon, title, body]) => (
              <div key={title} className="flex gap-5 py-7">
                <Icon className="mt-1 h-6 w-6 shrink-0 text-accent" strokeWidth={1.75} />
                <div>
                  <h3 className="display text-xl font-semibold uppercase">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[hsl(var(--primary))]">
        <div className="rail flex flex-col items-start gap-8 py-16 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="display text-3xl font-bold uppercase text-white sm:text-4xl">
              Kirim RAB atau daftar volume Anda
            </h2>
            <p className="mt-3 max-w-lg text-sm text-white/70">
              Tim estimasi kami membalas penawaran lengkap dalam 24 jam kerja.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link to="/kontak" className="inline-flex min-h-[52px] items-center justify-center bg-white px-8 text-sm font-semibold uppercase tracking-[0.14em] text-[hsl(var(--primary))] active:scale-[0.98]">
              Isi Form Penawaran
            </Link>
            <a href={waLink()} target="_blank" rel="noreferrer" className="inline-flex min-h-[52px] items-center justify-center bg-accent px-8 text-sm font-semibold uppercase tracking-[0.14em] text-[hsl(var(--accent-foreground))] active:scale-[0.98]">
              Chat WhatsApp
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
