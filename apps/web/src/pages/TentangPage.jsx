import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, Factory, Truck, FileCheck2 } from 'lucide-react';
import Layout from '@/components/Layout';

const PLANT = 'https://images.hostinger.com/e8c3e735-2c3a-42ca-ab6e-41bc4c0ce419.png';
const YARD = 'https://images.hostinger.com/7c2a17b2-4528-4875-8cc3-68418e28c2c2.png';

const pillars = [
  { Icon: Factory, title: 'Produk precast', text: 'Pilihan produk untuk kebutuhan drainase, jalan, dan konstruksi.' },
  { Icon: FileCheck2, title: 'Spesifikasi jelas', text: 'Pembahasan kebutuhan berdasarkan ukuran, mutu, dan acuan proyek.' },
  { Icon: Truck, title: 'Koordinasi pengiriman', text: 'Rencana pengiriman disesuaikan dengan volume dan lokasi pekerjaan.' },
];

export default function TentangPage() {
  return (
    <Layout>
      <Helmet>
        <title>Tentang HS Beton — Mitra Beton Precast</title>
        <meta name="description" content="Kenali HS Beton dan layanan produk beton precast untuk kebutuhan proyek konstruksi." />
      </Helmet>

      <section className="bg-[#F2F3F1]">
        <div className="rail grid gap-8 py-12 sm:py-12 lg:grid-cols-[1fr_0.55fr] lg:items-end lg:py-16">
          <div><p className="eyebrow mb-4">Profil / HS Beton</p><h1 className="display max-w-4xl text-[clamp(3rem,6.5vw,6rem)] font-bold uppercase leading-[0.88]">Membangun<br /><span className="text-accent">kepercayaan.</span></h1></div>
          <p className="max-w-xl text-sm leading-7 text-foreground/70 sm:text-base sm:leading-8 lg:justify-self-end">HS Beton mendukung kebutuhan proyek dengan pilihan beton precast dan komunikasi yang terarah dari tahap konsultasi hingga pengiriman.</p>
        </div>
      </section>

      <section className="rail py-10 sm:py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden bg-[#e9ebea]"><img src={PLANT} alt="Produk beton precast HS Beton" className="aspect-[4/3] w-full object-cover" /><span className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em]">HS Beton / Precast solutions</span></div>
          </div>
          <div className="lg:col-span-5 lg:pt-4">
            <p className="eyebrow mb-3">Tentang Kami</p>
            <h2 className="display text-4xl font-bold uppercase leading-[0.9] sm:text-5xl">Mitra produk precast untuk kebutuhan proyek.</h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-muted-foreground">
              <p>HS Beton menyediakan berbagai produk beton pracetak untuk kebutuhan infrastruktur, kawasan industri, perumahan, dan konstruksi komersial.</p>
              <p>Kami memahami bahwa setiap proyek memiliki kebutuhan yang berbeda. Karena itu, pembahasan produk berfokus pada jenis, ukuran, mutu beton, volume, serta lokasi pengiriman yang diperlukan.</p>
              <p>Dengan komunikasi yang jelas dan koordinasi yang baik, HS Beton berupaya membantu pelanggan menyiapkan kebutuhan produk beton precast secara lebih terencana.</p>
            </div>
            <Link to="/produk" className="mt-7 inline-flex items-center gap-3 border-b border-accent pb-2 text-xs font-bold uppercase tracking-[0.14em] text-accent">Jelajahi produk <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F2F3F1]">
        <div className="rail py-12 sm:py-14 lg:py-16">
          <div className="mb-8 grid gap-5 lg:grid-cols-[1fr_0.6fr] lg:items-end"><div><p className="eyebrow mb-3">Cara Kami Mendukung</p><h2 className="display max-w-3xl text-4xl font-bold uppercase leading-[0.9] sm:text-5xl lg:text-6xl">Hal penting dalam<br />setiap kebutuhan.</h2></div><p className="max-w-md text-sm leading-7 text-muted-foreground lg:justify-self-end">Dari mengenali produk sampai menyelaraskan pengiriman, kami menjaga proses komunikasi tetap jelas.</p></div>
          <div className="grid gap-px bg-border sm:grid-cols-3">
            {pillars.map(({ Icon, title, text }, index) => <div key={title} className="bg-[#F2F3F1] p-6 sm:p-8"><div className="flex items-center justify-between"><span className="text-[10px] font-bold tracking-[0.16em] text-accent">0{index + 1}</span><Icon className="h-6 w-6 text-accent" strokeWidth={1.6} /></div><h3 className="display mt-8 text-2xl font-bold uppercase sm:text-3xl">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[hsl(var(--primary))]">
        <img src={YARD} alt="Produk beton precast" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary))]/95 via-[hsl(var(--primary))]/65 to-[hsl(var(--primary))]/25" />
        <div className="rail relative py-16 sm:py-20 lg:py-24">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/55">Komitmen HS Beton</p>
          <h2 className="display mt-4 max-w-4xl text-5xl font-bold uppercase leading-[0.86] text-white sm:text-6xl lg:text-7xl">Menghadirkan kualitas.<br /><span className="text-accent">Membangun kepercayaan.</span></h2>
          <Link to="/kontak" className="mt-8 inline-flex min-h-14 items-center gap-3 bg-accent px-7 text-xs font-bold uppercase tracking-[0.12em] text-white">Hubungi Tim HS Beton <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </Layout>
  );
}
