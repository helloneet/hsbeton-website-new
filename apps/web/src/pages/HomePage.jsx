import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Truck, Factory, FileCheck2 } from 'lucide-react';
import Layout from '@/components/Layout';
import { products, waLink } from '@/data/site';
import klien1 from "@/assets/client/klien-1.jpeg";
import klien2 from "@/assets/client/klien-2.jpeg";
import klien3 from "@/assets/client/klien-3.png";
import klien4 from "@/assets/client/klien-4.jpeg";
import klien5 from "@/assets/client/klien-5.png";
import klien6 from "@/assets/client/klien-6.png";
import klien7 from "@/assets/client/klien-7.png";
import klien8 from "@/assets/client/klien-8.jpeg";
const HERO = 'https://images.hostinger.com/7c2a17b2-4528-4875-8cc3-68418e28c2c2.png';
const PLANT = 'https://images.hostinger.com/e8c3e735-2c3a-42ca-ab6e-41bc4c0ce419.png';

const ticker = ['U-Ditch', 'Box Culvert', 'Road Barrier', 'Pagar Panel', 'Buis Beton', 'Kanstin', 'Cover U-Ditch'];
const clients = [
  klien1,
  klien2,
  klien3,
  klien4,
  klien5,
  klien6,
  klien7,
  klien8,
];
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
        <img src={HERO} alt="Produksi beton precast HS Beton di Cilegon" className="absolute inset-0 h-full w-full object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--primary))] via-[hsl(var(--primary))]/70 to-transparent" />
        <div className="rail relative w-full pb-16 pt-32">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
        
            <p className="border-l-4 border-accent pl-4 text-base font-bold uppercase tracking-[0.2em] text-white/90">MENGHADIRKAN KUALITAS. MEMBANGUN KEPERCAYAAN.</p>
            <h1 className="display max-w-4xl text-5xl font-bold uppercase leading-[0.95] text-white sm:text-7xl lg:text-8xl">
               Beton Precast <br />
              <span className="text-accent">untuk Keandalan Proyek Anda</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75">
              HS Beton menyediakan berbagai macam produk beton precast berkualitas untuk mendukung proyek infrastruktur, kawasan industri, perumahan, dan bangunan komersial dengan mutu yang terjaga serta pengiriman yang tepat waktu.
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
      <section className="rail grid grid-cols-2 gap-px border border-border bg-border py-0 md:grid-cols-4 rounded-xl overflow-hidden shadow-md">
        {[
          ['10+', 'Tahun pengalaman'],
          ['K-350', 'Mutu standar'],
          ['50.000+', 'Unit terkirim'],
          ['25+', 'Mitra Proyek'],
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
            <p className="eyebrow mb-3">Katalog Produk</p>
            <h2 className="display text-5xl font-bold uppercase sm:text-6xl">Produk precast unggulan</h2>
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
        <div className="rail grid gap-10 py-14 lg:grid-cols-2 lg:py-22">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow mb-3">Kenapa Kontraktor Memilih HS Beton</p>
            <h2 className="display text-5xl font-bold uppercase leading-tight sm:text-6xl">
              Mutu yang Konsisten
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              Dari proses produksi hingga pengiriman, HS Beton menjaga standar mutu secara konsisten melalui pengawasan kualitas di setiap tahapan. Dengan dokumentasi pendukung dan jadwal pengiriman yang terencana, kami membantu memenuhi kebutuhan proyek dengan lebih terukur.
            </p>
            <img src={PLANT} alt="Quality control produksi precast HS Beton" className="mt-10 hidden h-[340px] w-[85%] rounded-lg object-cover shadow-lg lg:block" />
          </div>
          <div className="divide-y divide-border border-t border-border">
            {[
              [Factory, 'PRODUKSI TERSTANDAR', 'Batching plant, QC, dan curing dilakukan sesuai standar mutu.'],
              [FileCheck2, 'DOKUMENTASI MUTU', 'Setiap pengiriman didukung dokumen mutu sesuai kebutuhan proyek.'],
              [Truck, 'PENGIRIMAN TERJADWAL', 'Armada dan jadwal pengiriman disesuaikan dengan target proyek.'],
              [ShieldCheck, 'PENAWARAN TRANSPARAN', 'Harga disusun berdasarkan spesifikasi, volume, dan lokasi pengiriman'],
            ].map(([Icon, title, body]) => (
              <div key={title} className="flex gap-6 py-8">
                <Icon className="mt-1 h-6 w-6 shrink-0 text-accent" strokeWidth={1.75} />
                <div>
                  <h3 className="display text-2xl font-semibold uppercase">{title}</h3>
                  <p className="mt-2 text-[15px] leading-8 leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* CLIENT & PROJECT */}
<section className="border-t border-border"></section>
<section className="rail py-20 lg:py-24">
  <div className="mx-auto max-w-3xl text-center">
    <p className="eyebrow mb-3">
      Dipercaya Berbagai Perusahaan
    </p>

    <h2 className="display text-5xl font-bold uppercase sm:text-6xl">
      PROYEK & MITRA
    </h2>

    <p className="mt-5 text-muted-foreground">
      Produk HS Beton telah digunakan pada berbagai proyek infrastruktur,
      kawasan industri, dan konstruksi melalui kerja sama dengan berbagai
      perusahaan.
    </p>
  </div>

  <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
    {clients.map((logo, index) => (
      <div
        key={index}
        className="flex h-40 items-center justify-center rounded-xl border border-border bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:bg-white"
      >
        <img
          src={logo}
          alt={`Klien ${index + 1}`}
          className="h-24 max-w-full object-contain"
        />
      </div>
    ))}
  </div>
</section>
      {/* CTA */}
      <section className="bg-[hsl(var(--primary))]">
        <div className="rail flex flex-col items-start gap-8 py-16 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="display text-3xl font-bold uppercase text-white sm:text-4xl">
              SIAP MEMBANTU KEBUTUHAN PROYEK ANDA
            </h2>
            <p className="mt-3 max-w-lg text-sm text-white/70">
              Tim HS Beton siap membantu penyusunan penawaran sesuai kebutuhan proyek Anda.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link to="/kontak" className="inline-flex min-h-[52px] items-center justify-center bg-white px-8 text-sm font-semibold uppercase tracking-[0.14em] text-[hsl(var(--primary))] active:scale-[0.98]">
              Isi Form Penawaran
            </Link>
            <a href={waLink()} target="_blank" rel="noreferrer" className="inline-flex min-h-[52px] items-center justify-center bg-[#25D366] hover:bg-[#20ba5a] px-8 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-all duration-300">
              Chat WhatsApp
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
