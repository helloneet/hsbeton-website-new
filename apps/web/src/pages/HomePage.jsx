import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, ArrowUpRight, ArrowDownRight, ShieldCheck, Truck, Factory, FileCheck2,
  Ruler, Layers3, Building2, MessageCircle
} from 'lucide-react';
import Layout from '@/components/Layout';
import { products, waLink, trackWhatsApp } from '@/data/site';
import klien1 from '@/assets/client/klien-1.jpeg';
import klien2 from '@/assets/client/klien-2.jpeg';
import klien3 from '@/assets/client/klien-3.png';
import klien4 from '@/assets/client/klien-4.jpeg';
import klien5 from '@/assets/client/klien-5.png';
import klien6 from '@/assets/client/klien-6.png';
import klien7 from '@/assets/client/klien-7.png';
import klien8 from '@/assets/client/klien-8.jpeg';

const HERO = 'https://images.hostinger.com/7c2a17b2-4528-4875-8cc3-68418e28c2c2.png';
const PLANT = 'https://images.hostinger.com/e8c3e735-2c3a-42ca-ab6e-41bc4c0ce419.png';
const ticker = ['U-Ditch', 'Box Culvert', 'Road Barrier', 'Pagar Panel', 'Buis Beton', 'Kanstin', 'Cover U-Ditch'];
const clients = [klien1, klien2, klien3, klien4, klien5, klien6, klien7, klien8];

const strengths = [
  { Icon: ShieldCheck, no: '01', title: 'Mutu terjaga', text: 'Spesifikasi produk dibahas sesuai kebutuhan dan acuan proyek.' },
  { Icon: Truck, no: '02', title: 'Pengiriman terencana', text: 'Koordinasi pengiriman berdasarkan volume dan lokasi pekerjaan.' },
  { Icon: FileCheck2, no: '03', title: 'Dukungan teknis', text: 'Tim membantu mengidentifikasi pilihan produk dan ukuran yang dibutuhkan.' },
  { Icon: Factory, no: '04', title: 'Solusi precast', text: 'Pilihan produk untuk kebutuhan drainase, jalan, dan pembatas area.' },
];

export default function HomePage() {
  const featuredProducts = products.slice(0, 6);
  const featuredArticles = products.slice(0, 3);

  return (
    <Layout>
      <Helmet>
        <title>HS Beton — Beton Precast untuk Kebutuhan Proyek</title>
        <meta name="description" content="HS Beton menyediakan produk beton precast untuk kebutuhan drainase, infrastruktur, kawasan industri, perumahan, dan konstruksi." />
      </Helmet>

      {/* EDITORIAL HERO */}
      <section className="relative overflow-hidden bg-[#F7F7F5]">
        <div className="rail relative z-10 grid gap-8 pb-8 pt-10 sm:pb-12 sm:pt-14 lg:min-h-[560px] lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-10 lg:py-12">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-10">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[3px] w-9 bg-accent" />
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-foreground/60 sm:text-xs">Solusi beton precast · HS Beton</p>
            </div>
            <h1 className="display max-w-[720px] text-[clamp(3rem,6.2vw,6.1rem)] font-bold uppercase leading-[0.88] tracking-[-0.025em]">
              Beton Precast
              <span className="mt-2 block text-accent">untuk proyek</span>
              <span className="block">yang kokoh.</span>
            </h1>
            <p className="mt-7 max-w-xl text-sm leading-7 text-foreground/70 sm:text-base sm:leading-8">
              Produk beton pracetak untuk pekerjaan drainase, jalan, kawasan industri, perumahan, dan kebutuhan konstruksi.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={waLink('Halo HS Beton, saya ingin meminta penawaran produk beton precast untuk proyek.')} target="_blank" rel="noreferrer" onClick={trackWhatsApp} className="inline-flex min-h-12 items-center justify-center gap-3 bg-accent px-6 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#b83225] sm:min-h-14 sm:px-8">
                Minta Penawaran <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link to="/produk" className="inline-flex min-h-12 items-center justify-center gap-3 border border-foreground/25 px-6 text-xs font-bold uppercase tracking-[0.12em] transition hover:border-foreground sm:min-h-14 sm:px-8">
                Jelajahi Produk <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-border pt-5 text-[10px] font-semibold uppercase leading-4 tracking-[0.06em] text-foreground/65 sm:max-w-lg sm:text-xs">
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 shrink-0 text-accent" /> Mutu produk</span>
              <span className="flex items-center gap-2"><Truck className="h-4 w-4 shrink-0 text-accent" /> Pengiriman</span>
              <span className="flex items-center gap-2"><Ruler className="h-4 w-4 shrink-0 text-accent" /> Konsultasi</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative min-h-[330px] overflow-hidden bg-[hsl(var(--primary))] sm:min-h-[460px] lg:min-h-[470px]">
            <img src={HERO} alt="Produk beton precast HS Beton" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101b29]/75 via-[#101b29]/5 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-5 text-white sm:p-8">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/65">HS Beton</p>
                <p className="display mt-2 max-w-xs text-2xl font-bold uppercase leading-[0.95] sm:text-4xl">Menghadirkan kualitas. Membangun kepercayaan.</p>
              </div>
              <span className="hidden h-12 w-12 shrink-0 place-items-center border border-white/45 sm:grid"><ArrowDownRight className="h-6 w-6" /></span>
            </div>
            <div className="absolute right-4 top-4 border border-white/35 bg-white/90 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-[#172331] sm:right-6 sm:top-6 sm:px-4 sm:py-3">Concrete solutions</div>
          </motion.div>
        </div>
      </section>

      {/* PRODUCT NAME STRIP — intentionally kept moving */}
      <div className="overflow-hidden border-y border-white/10 bg-[hsl(var(--primary))] py-4 sm:py-5" aria-label="Daftar produk HS Beton">
        <div className="flex w-max animate-marquee gap-7 pr-7 sm:gap-10 sm:pr-10">
          {[...ticker, ...ticker].map((item, index) => (
            <span key={index} className="display flex items-center gap-7 text-sm font-semibold uppercase tracking-[0.18em] text-white/90 sm:gap-10 sm:text-base">
              {item}<span className="h-1.5 w-1.5 shrink-0 bg-accent" />
            </span>
          ))}
        </div>
      </div>

      {/* CATALOG — clean product-led grid */}
      <section className="rail py-12 sm:py-16 lg:py-20">
        <div className="mb-9 grid gap-6 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <div>
            <p className="eyebrow mb-3">01 / Katalog Produk</p>
            <h2 className="display max-w-3xl text-4xl font-bold uppercase leading-[0.92] sm:text-5xl lg:text-6xl">Produk yang<br className="hidden sm:block" /> membangun fondasi.</h2>
          </div>
          <div className="max-w-md lg:justify-self-end">
            <p className="text-sm leading-7 text-muted-foreground">Kenali pilihan beton precast HS Beton untuk beragam pekerjaan. Nama produk tetap berjalan di bagian atas sebagai navigasi visual.</p>
            <Link to="/produk" className="mt-5 inline-flex items-center gap-2 border-b border-accent pb-1 text-xs font-bold uppercase tracking-[0.13em] text-accent">Lihat katalog lengkap <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
        <div className="grid gap-x-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product, index) => (
            <Link key={product.slug} to="/produk" className="group">
              <div className="relative overflow-hidden bg-[#eef0f1]">
                <div className="absolute left-3 top-3 z-10 bg-white/90 px-3 py-1.5 text-[10px] font-bold tracking-[0.14em] text-foreground">{String(index + 1).padStart(2, '0')}</div>
                <img src={product.image} alt={product.name} loading="lazy" className="aspect-[1.35/1] w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
                <span className="absolute bottom-3 right-3 grid h-10 w-10 place-items-center bg-accent text-white transition group-hover:bg-[hsl(var(--primary))]"><ArrowUpRight className="h-5 w-5" /></span>
              </div>
              <div className="flex flex-col items-start gap-3 border-b border-border py-4">
                <div>
                  <h3 className="display text-2xl font-bold uppercase leading-none sm:text-3xl">{product.name}</h3>
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.15em] text-accent">{product.spec}</p>
                </div>
                <span className="max-w-sm text-left text-sm leading-6 text-muted-foreground">{product.desc}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURE / WHY US — asymmetric split, not repeated card blocks */}
      <section className="bg-[#f0f1ef]">
        <div className="grid lg:grid-cols-2">
          <div className="rail py-12 sm:py-14 lg:py-16 lg:pr-12">
            <p className="eyebrow mb-3">02 / Tentang HS Beton</p>
            <h2 className="display max-w-2xl text-4xl font-bold uppercase leading-[0.92] sm:text-5xl lg:text-6xl">Lebih dari<br />sekadar beton.</h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-foreground/70 sm:text-base sm:leading-8">Kebutuhan proyek bukan hanya soal produk. Spesifikasi, koordinasi, dan pengiriman perlu berjalan searah agar pekerjaan di lapangan lebih terencana.</p>
            <Link to="/tentang-kami" className="mt-7 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-accent">Kenali HS Beton <ArrowRight className="h-4 w-4" /></Link>
            <div className="mt-10 grid gap-0 border-t border-border sm:grid-cols-2">
              {strengths.map(({ Icon, no, title, text }) => (
                <div key={no} className="border-b border-border py-5 sm:pr-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-[0.15em] text-accent">{no}</span>
                    <Icon className="h-5 w-5 text-accent" strokeWidth={1.7} />
                  </div>
                  <h3 className="display mt-4 text-2xl font-bold uppercase">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[360px] bg-[hsl(var(--primary))] lg:min-h-full">
            <img src={PLANT} alt="Produk beton precast dan area penyimpanan" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111d2a]/80 via-[#111d2a]/15 to-transparent" />
            <div className="absolute bottom-0 left-0 max-w-sm bg-[hsl(var(--primary))]/90 p-6 text-white sm:p-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/55">Pendekatan HS Beton</p>
              <p className="display mt-3 text-3xl font-bold uppercase leading-[0.95] sm:text-4xl">Kualitas produk. Koordinasi proyek.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT APPLICATIONS — concise editorial section */}
      <section className="bg-[#F7F7F5]">
        <div className="rail py-12 sm:py-14 lg:py-16">
          <div className="mb-8 grid gap-5 border-b border-border pb-7 lg:grid-cols-[1fr_0.55fr] lg:items-end">
            <div>
              <p className="eyebrow mb-3">03 / Area Penggunaan</p>
              <h2 className="display max-w-3xl text-4xl font-bold uppercase leading-[0.92] sm:text-5xl lg:text-6xl">Dibuat untuk kebutuhan<br className="hidden sm:block" /> proyek yang beragam.</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-muted-foreground lg:justify-self-end">Pilihan beton precast untuk mendukung pekerjaan konstruksi, dari drainase hingga penataan kawasan.</p>
          </div>
          <div className="grid gap-px bg-border sm:grid-cols-3">
            {[
              ['01', 'Drainase & infrastruktur', 'U-Ditch, Box Culvert, dan Buis Beton untuk kebutuhan saluran serta aliran air.'],
              ['02', 'Jalan & area publik', 'Road Barrier dan Kanstin untuk pembatas serta penataan area jalan.'],
              ['03', 'Kawasan & properti', 'Pagar Panel dan produk precast untuk kebutuhan pembatas kawasan dan proyek.'],
            ].map(([no, title, desc]) => (
              <Link key={no} to="/produk" className="group bg-[#F7F7F5] p-6 transition hover:bg-white sm:p-8">
                <div className="flex items-center justify-between"><span className="text-[10px] font-bold tracking-[0.16em] text-accent">{no}</span><ArrowUpRight className="h-5 w-5 text-foreground/45 transition group-hover:text-accent" /></div>
                <h3 className="display mt-8 text-2xl font-bold uppercase leading-tight sm:text-3xl">{title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">{desc}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-accent">Lihat produk <ArrowRight className="h-4 w-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS — Jagoan Besi style: heading above, logo row below */}
      <section className="border-y border-border bg-[#F7F7F5]">
        <div className="rail py-12 sm:py-14 lg:py-16">
          <div className="grid gap-5 border-b border-border pb-7 lg:grid-cols-[1fr_0.65fr] lg:items-end">
            <div><p className="eyebrow mb-3">04 / Mitra HS Beton</p><h2 className="display max-w-3xl text-4xl font-bold uppercase leading-[0.9] sm:text-5xl lg:text-6xl">Dipercaya oleh kontraktor,<br className="hidden lg:block" /> developer, dan instansi.</h2></div>
            <p className="max-w-md text-sm leading-7 text-muted-foreground lg:justify-self-end">Kami menghargai kerja sama dengan berbagai pihak dalam mendukung kebutuhan proyek konstruksi.</p>
          </div>
          <div className="grid grid-cols-2 items-center gap-x-6 gap-y-8 pt-8 sm:grid-cols-4 lg:grid-cols-8 lg:gap-x-8">
            {clients.map((logo, index) => <div key={index} className="flex min-h-[56px] items-center justify-center px-2 sm:min-h-[72px]"><img src={logo} alt={`Logo mitra HS Beton ${index + 1}`} loading="lazy" className="max-h-12 max-w-full object-contain grayscale opacity-70 transition hover:grayscale-0 hover:opacity-100 sm:max-h-16" /></div>)}
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="rail py-12 sm:py-16 lg:py-20">
        <div className="mb-8 grid gap-5 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          <div><p className="eyebrow mb-3">05 / Artikel & Informasi</p><h2 className="display max-w-3xl text-4xl font-bold uppercase leading-[0.92] sm:text-5xl lg:text-6xl">Referensi untuk<br />pekerjaan Anda.</h2></div>
          <div className="max-w-md lg:justify-self-end"><p className="text-sm leading-7 text-muted-foreground">Kenali fungsi, pilihan spesifikasi, dan penggunaan produk beton precast.</p><Link to="/artikel" className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-accent">Baca semua artikel <ArrowRight className="h-4 w-4" /></Link></div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredArticles.map((product, index) => <Link key={product.slug} to={`/artikel/${product.slug}`} className="group border border-border bg-white transition hover:border-accent">
            <div className="relative aspect-[16/9] overflow-hidden bg-muted"><img src={product.image} alt={product.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" /><span className="absolute left-3 top-3 bg-white/90 px-3 py-1.5 text-[10px] font-bold tracking-[0.12em]">0{index + 1} / INSIGHT</span></div>
            <div className="p-5 sm:p-6"><h3 className="display text-2xl font-bold uppercase leading-tight">{product.name}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{product.desc}</p><span className="mt-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-accent">Baca artikel <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span></div>
          </Link>)}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[hsl(var(--primary))] text-white">
        <div className="absolute inset-0 opacity-10"><img src={PLANT} alt="" className="h-full w-full object-cover" /></div>
        <div className="rail relative grid gap-8 py-12 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-center lg:py-20">
          <div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/55">Mari mulai diskusi</p><h2 className="display mt-3 max-w-4xl text-4xl font-bold uppercase leading-[0.9] sm:text-5xl lg:text-7xl">Ada kebutuhan beton<br className="hidden sm:block" /> untuk proyek Anda?</h2><p className="mt-5 max-w-xl text-sm leading-7 text-white/65">Sampaikan jenis produk, ukuran, volume, dan lokasi pengiriman kepada tim HS Beton.</p></div>
          <a href={waLink('Halo HS Beton, saya ingin konsultasi kebutuhan produk beton precast untuk proyek.')} target="_blank" rel="noreferrer" onClick={trackWhatsApp} className="inline-flex min-h-14 items-center justify-center gap-3 bg-accent px-7 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:brightness-95 lg:min-w-[220px]">Hubungi HS Beton <ArrowUpRight className="h-4 w-4" /></a>
        </div>
      </section>
    </Layout>
  );
}
