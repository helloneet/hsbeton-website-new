import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Truck,
  Factory,
  FileCheck2,
  Ruler,
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

const benefits = [
  {
    Icon: Factory,
    title: 'Produksi Terstandar',
    text: 'Proses produksi dan pengawasan kualitas dilakukan dengan perhatian pada mutu produk.',
  },
  {
    Icon: FileCheck2,
    title: 'Dokumentasi Mutu',
    text: 'Dokumen pendukung dapat disiapkan sesuai spesifikasi dan kebutuhan proyek.',
  },
  {
    Icon: Truck,
    title: 'Pengiriman Terjadwal',
    text: 'Pengiriman dikoordinasikan berdasarkan volume, lokasi, dan jadwal pekerjaan.',
  },
  {
    Icon: ShieldCheck,
    title: 'Dukungan Proyek',
    text: 'Tim HS Beton membantu menyesuaikan kebutuhan produk dengan informasi proyek.',
  },
];

export default function HomePage() {
  const featuredProducts = products.slice(0, 4);
  const featuredArticles = products.slice(0, 3);

  return (
    <Layout>
      <Helmet>
        <title>HS Beton — Beton Precast untuk Kebutuhan Proyek</title>
        <meta
          name="description"
          content="HS Beton menyediakan produk beton precast seperti U-Ditch, Box Culvert, Road Barrier, Pagar Panel, Buis Beton, dan Kanstin untuk kebutuhan proyek konstruksi."
        />
      </Helmet>

      {/* HERO */}
      <section className="bg-[#F7F7F5]">
        <div className="rail grid min-h-[590px] items-center gap-10 py-10 sm:py-14 lg:min-h-[620px] lg:grid-cols-[0.92fr_1.08fr] lg:gap-12 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="relative z-10"
          >
            <p className="eyebrow mb-5 flex items-center gap-3">
              <span className="h-1 w-7 bg-accent" />
              Menghadirkan Kualitas. Membangun Kepercayaan.
            </p>
            <h1 className="display max-w-2xl text-5xl font-bold uppercase leading-[0.92] tracking-tight sm:text-6xl lg:text-[4.6rem] xl:text-[5.25rem]">
              Beton Precast
              <span className="mt-1 block text-accent">untuk Keandalan Proyek Anda</span>
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-7 text-foreground/70 sm:text-base sm:leading-8">
              HS Beton menyediakan berbagai produk beton precast untuk kebutuhan infrastruktur, kawasan industri, perumahan, dan konstruksi.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                onClick={trackWhatsApp}
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-accent px-6 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:brightness-95 sm:min-h-14 sm:px-7"
              >
                Minta Penawaran <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/produk"
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-foreground/25 px-6 text-xs font-semibold uppercase tracking-[0.12em] text-foreground transition hover:border-foreground sm:min-h-14 sm:px-7"
              >
                Lihat Produk
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-5 text-xs font-medium text-foreground/70">
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-accent" /> Mutu Terjaga</span>
              <span className="inline-flex items-center gap-2"><Truck className="h-4 w-4 text-accent" /> Pengiriman Terjadwal</span>
              <span className="inline-flex items-center gap-2"><Ruler className="h-4 w-4 text-accent" /> Konsultasi Proyek</span>
            </div>
          </motion.div>

          <div className="relative min-h-[300px] overflow-hidden sm:min-h-[400px] lg:min-h-[500px]">
            <img
              src={HERO}
              alt="Produk beton precast untuk kebutuhan proyek"
              fetchPriority="high"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--primary))]/35 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 max-w-[250px] bg-[hsl(var(--primary))]/90 p-4 text-white backdrop-blur-sm sm:bottom-6 sm:left-6 sm:p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/60">Solusi Precast</p>
              <p className="display mt-1 text-xl font-semibold uppercase leading-tight sm:text-2xl">Untuk kebutuhan konstruksi</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT TICKER — KEEP MOVING */}
      <div className="overflow-hidden border-y border-white/10 bg-[hsl(var(--primary))] py-4 sm:py-5">
        <div className="flex w-max animate-marquee gap-8 pr-8 sm:gap-10 sm:pr-10">
          {[...ticker, ...ticker].map((item, index) => (
            <span key={index} className="display flex items-center gap-8 text-sm font-semibold uppercase tracking-[0.18em] text-white/85 sm:gap-10 sm:text-base">
              {item} <span className="h-1.5 w-1.5 shrink-0 bg-accent" />
            </span>
          ))}
        </div>
      </div>

      {/* PRODUCTS */}
      <section className="rail py-16 sm:py-20 lg:py-24">
        <div className="mb-8 grid gap-5 border-b border-border pb-7 md:grid-cols-[1fr_0.75fr] md:items-end md:gap-10">
          <div>
            <p className="eyebrow mb-3">Produk Beton Precast</p>
            <h2 className="display max-w-2xl text-4xl font-bold uppercase leading-[0.98] sm:text-5xl lg:text-6xl">
              Solusi untuk Berbagai Kebutuhan Proyek
            </h2>
          </div>
          <div className="md:justify-self-end">
            <p className="max-w-lg text-sm leading-7 text-muted-foreground">
              Pilihan produk precast untuk mendukung pekerjaan drainase, jalan, dan kebutuhan konstruksi lainnya.
            </p>
            <Link to="/produk" className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-accent hover:gap-3">
              Lihat semua produk <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <Link key={product.slug} to="/produk" className="group">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="pt-4">
                <h3 className="display text-2xl font-semibold uppercase">{product.name}</h3>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">{product.spec}</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{product.desc}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground group-hover:text-accent">
                  Lihat produk <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY HS BETON */}
      <section className="bg-[#F3F4F2]">
        <div className="rail grid gap-8 py-14 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:py-20">
          <div>
            <p className="eyebrow mb-3">Mengapa HS Beton</p>
            <h2 className="display max-w-xl text-4xl font-bold uppercase leading-[0.98] sm:text-5xl lg:text-6xl">
              Lebih dari Sekadar Penyedia Beton Precast
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-muted-foreground">
              Kami memahami bahwa kebutuhan setiap proyek berbeda. Karena itu, komunikasi spesifikasi, kesiapan produk, dan koordinasi pengiriman menjadi bagian penting dari layanan HS Beton.
            </p>
            <img
              src={PLANT}
              alt="Fasilitas dan produk beton precast"
              loading="lazy"
              className="mt-8 aspect-[5/3] w-full object-cover sm:mt-10"
            />
          </div>
          <div className="grid content-start gap-x-8 sm:grid-cols-2 lg:gap-x-10">
            {benefits.map(({ Icon, title, text }) => (
              <div key={title} className="border-t border-border py-6 sm:py-7">
                <Icon className="h-6 w-6 text-accent" strokeWidth={1.7} />
                <h3 className="display mt-4 text-xl font-semibold uppercase sm:text-2xl">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT APPLICATION / PROJECT SUPPORT */}
      <section className="rail py-16 sm:py-20 lg:py-24">
        <div className="mb-8 grid gap-5 md:grid-cols-[1fr_0.7fr] md:items-end md:gap-10">
          <div>
            <p className="eyebrow mb-3">Aplikasi Produk</p>
            <h2 className="display max-w-2xl text-4xl font-bold uppercase leading-[0.98] sm:text-5xl lg:text-6xl">
              Mendukung Pekerjaan Infrastruktur dan Konstruksi
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-muted-foreground md:justify-self-end">
            Produk HS Beton dapat digunakan untuk berbagai kebutuhan proyek. Konsultasikan jenis produk dan spesifikasi yang sesuai dengan pekerjaan Anda.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link to="/produk/u-ditch" className="group relative min-h-[250px] overflow-hidden bg-[hsl(var(--primary))] sm:min-h-[320px]">
            <img src={products[0].image} alt="U-Ditch beton precast" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--primary))]/90 via-[hsl(var(--primary))]/15 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-5 text-white sm:p-7">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/65">Drainase Beton</p>
                <h3 className="display mt-1 text-3xl font-semibold uppercase sm:text-4xl">U-Ditch</h3>
              </div>
              <span className="grid h-10 w-10 shrink-0 place-items-center border border-white/50 transition group-hover:bg-accent group-hover:border-accent"><ArrowUpRight className="h-5 w-5" /></span>
            </div>
          </Link>
          <Link to="/produk/box-culvert" className="group relative min-h-[250px] overflow-hidden bg-[hsl(var(--primary))] sm:min-h-[320px]">
            <img src={products[1].image} alt="Box Culvert beton precast" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--primary))]/90 via-[hsl(var(--primary))]/15 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-5 text-white sm:p-7">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/65">Saluran & Crossing</p>
                <h3 className="display mt-1 text-3xl font-semibold uppercase sm:text-4xl">Box Culvert</h3>
              </div>
              <span className="grid h-10 w-10 shrink-0 place-items-center border border-white/50 transition group-hover:bg-accent group-hover:border-accent"><ArrowUpRight className="h-5 w-5" /></span>
            </div>
          </Link>
        </div>
      </section>

      {/* PARTNERS — simple heading then logo grid, inspired by Jagoan Besi layout */}
      <section className="border-y border-border bg-[#F7F7F5]">
        <div className="rail py-14 sm:py-16 lg:py-20">
          <div className="max-w-3xl">
            <p className="eyebrow mb-3">Mitra HS Beton</p>
            <h2 className="display text-4xl font-bold uppercase leading-[0.98] sm:text-5xl lg:text-6xl">
              Dipercaya oleh Berbagai Mitra
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground">
              Kerja sama dengan kontraktor, developer, dan berbagai pihak dalam mendukung kebutuhan proyek konstruksi.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 items-center gap-x-5 gap-y-7 border-t border-border pt-8 sm:grid-cols-4 sm:gap-x-8 lg:mt-12 lg:gap-x-12">
            {clients.map((logo, index) => (
              <div key={index} className="flex min-h-[70px] items-center justify-center px-2 sm:min-h-[90px] sm:px-4">
                <img src={logo} alt={`Mitra HS Beton ${index + 1}`} loading="lazy" className="max-h-16 max-w-full object-contain sm:max-h-20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="rail py-16 sm:py-20 lg:py-24">
        <div className="mb-8 grid gap-5 border-b border-border pb-7 md:grid-cols-[1fr_0.7fr] md:items-end md:gap-10">
          <div>
            <p className="eyebrow mb-3">Artikel & Informasi</p>
            <h2 className="display max-w-2xl text-4xl font-bold uppercase leading-[0.98] sm:text-5xl lg:text-6xl">
              Pengetahuan untuk Proyek Anda
            </h2>
          </div>
          <div className="md:justify-self-end">
            <p className="max-w-lg text-sm leading-7 text-muted-foreground">Kenali produk beton precast dan pertimbangan dasar untuk kebutuhan konstruksi.</p>
            <Link to="/artikel" className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
              Semua artikel <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredArticles.map((product) => (
            <Link key={product.slug} to={`/artikel/${product.slug}`} className="group border border-border bg-white">
              <div className="aspect-[16/9] overflow-hidden bg-muted">
                <img src={product.image} alt={product.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">Informasi Produk</p>
                <h3 className="display mt-2 text-2xl font-semibold uppercase leading-tight">{product.name}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{product.desc}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] group-hover:text-accent">
                  Baca selengkapnya <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[hsl(var(--primary))] text-white">
        <div className="rail flex flex-col gap-7 py-12 sm:py-16 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">HS Beton</p>
            <h2 className="display mt-2 max-w-2xl text-3xl font-bold uppercase leading-tight sm:text-4xl lg:text-5xl">
              Siap Mendukung Kebutuhan Proyek Anda
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-white/65">
              Sampaikan kebutuhan produk dan spesifikasi proyek kepada tim HS Beton.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link to="/kontak" className="inline-flex min-h-12 items-center justify-center bg-white px-6 text-xs font-semibold uppercase tracking-[0.12em] text-[hsl(var(--primary))] transition hover:bg-white/90">
              Form Penawaran
            </Link>
            <a href={waLink()} target="_blank" rel="noreferrer" onClick={trackWhatsApp} className="inline-flex min-h-12 items-center justify-center gap-2 bg-accent px-6 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:brightness-95">
              WhatsApp <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
