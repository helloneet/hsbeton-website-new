import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Truck, Factory, Users, MessageCircle } from 'lucide-react';
import Layout from '@/components/Layout';
import { products, waLink } from '@/data/site';

// Menggunakan asset lokal sesuai brief (menghindari URL Hostinger)
// Pastikan kamu menyesuaikan nama file/path jika ada perbedaan nama gambar di foldermu
import HeroImg from '@/assets/hero-image.jpg'; 
import PlantImg from '@/assets/plant-image.jpg'; 
import Client1 from '@/assets/client/klien-1.jpeg';
import Client2 from '@/assets/client/klien-2.jpeg';
import Client3 from '@/assets/client/klien-3.png';
import Client4 from '@/assets/client/klien-4.jpeg';
import Client5 from '@/assets/client/klien-5.png';
import Client6 from '@/assets/client/klien-6.png';
import Client7 from '@/assets/client/klien-7.png';
import Client8 from '@/assets/client/klien-8.jpeg';

const ticker = ['U-Ditch', 'Box Culvert', 'Road Barrier', 'Pagar Panel Beton', 'Buis Beton', 'Kanstin', 'Cover U-Ditch'];
const clients = [Client1, Client2, Client3, Client4, Client5, Client6, Client7, Client8];

export default function HomePage() {
  return (
    <Layout>
      {/* 14. SEO SECTION */}
      <Helmet>
        <title>HS Beton | Produsen & Supplier Beton Precast Terpercaya</title>
        <meta
          name="description"
          content="HS Beton menyediakan solusi beton precast berkualitas tinggi untuk kebutuhan proyek infrastruktur, industri, komersial, dan perumahan. Dapatkan penawaran sekarang."
        />
        <meta property="og:title" content="HS Beton | Solusi Beton Precast Terpercaya" />
        <meta property="og:description" content="Produsen beton precast berspesifikasi tinggi dengan pengiriman tepat waktu untuk proyek konstruksi Anda." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* 1 & 2. HERO SECTION (White/Light Theme, Strong Copy) */}
      <section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-white">
        <img src={HeroImg} alt="Kawasan Produksi Beton Precast HS Beton" className="absolute inset-0 h-full w-full object-cover opacity-15" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent" />
        <div className="rail relative w-full pb-16 pt-32">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-red-600">
              Menghadirkan Kualitas. Membangun Kepercayaan.
            </p>
            <h1 className="max-w-4xl text-5xl font-bold leading-tight text-gray-900 sm:text-6xl lg:text-7xl">
              Solusi Beton Precast <br />
              <span className="text-red-600">Berkualitas</span> Untuk Proyek Anda
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
              HS Beton merupakan mitra terpercaya dalam menyediakan berbagai produk beton precast bermutu tinggi. Kami siap memenuhi kebutuhan proyek infrastruktur, kawasan industri, komersial, hingga perumahan Anda.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 bg-red-600 px-8 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-red-700 hover:shadow-lg active:scale-95"
              >
                Minta Penawaran <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/produk"
                className="inline-flex min-h-[52px] items-center justify-center border-2 border-gray-300 bg-white px-8 text-sm font-semibold uppercase tracking-wider text-gray-700 transition-all hover:border-red-600 hover:text-red-600 active:scale-95"
              >
                Lihat Produk
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TICKER */}
      <div className="overflow-hidden border-y border-gray-200 bg-gray-50 py-4">
        <div className="flex w-max animate-marquee gap-12 pr-12">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="flex items-center gap-12 text-lg font-medium tracking-wider text-gray-400">
              {t} <span className="h-2 w-2 rounded-full bg-red-600" />
            </span>
          ))}
        </div>
      </div>

      {/* 4. COMPANY HIGHLIGHT */}
      <section className="rail grid grid-cols-2 gap-px border-x border-gray-200 bg-gray-200 py-0 md:grid-cols-4">
        {[
          ['Produk', 'Lengkap'],
          ['Mutu', 'Terjamin'],
          ['Pengiriman', 'Tepat'],
          ['Layanan', 'Profesional'],
        ].map(([title, subtitle], index) => (
          <div key={index} className="bg-white px-6 py-12 text-center transition-colors hover:bg-gray-50">
            <p className="text-2xl font-bold text-gray-900 md:text-3xl">{title}</p>
            <p className="mt-2 text-sm font-medium uppercase tracking-widest text-red-600">{subtitle}</p>
          </div>
        ))}
      </section>

      {/* 5. PRODUCT SECTION (Tampilkan Seluruh Produk) */}
      <section className="bg-white py-24">
        <div className="rail">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6 border-b border-gray-200 pb-6">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-red-600">Katalog Kami</p>
              <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">Produk Beton Precast</h2>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <Link key={p.slug} to={`/produk/${p.slug}`} className="group block border border-gray-200 bg-white transition-all hover:border-red-600 hover:shadow-xl">
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900">{p.name}</h3>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-red-600">{p.spec}</p>
                  <p className="mt-4 text-base leading-relaxed text-gray-600">{p.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CLIENT SECTION (New Section) */}
      <section className="border-t border-gray-200 bg-gray-50 py-24">
        <div className="rail">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Dipercaya oleh Berbagai Perusahaan</h2>
            <p className="mt-4 text-lg text-gray-600">Kami telah dipercaya menjadi mitra suplai beton untuk berbagai proyek strategis.</p>
          </div>
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4 items-center justify-items-center opacity-85">
            {clients.map((client, idx) => (
              <img 
                key={idx} 
                src={client} 
                alt={`Client HS Beton ${idx + 1}`} 
                loading="lazy"
                className="max-h-20 w-auto object-contain grayscale transition-all duration-300 hover:grayscale-0 hover:scale-105" 
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE HS BETON (Sticky Split Layout) */}
      <section className="border-y border-gray-200 bg-white">
        <div className="rail grid gap-16 py-24 lg:grid-cols-2 lg:py-32">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-red-600">Keunggulan Kami</p>
            <h2 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
              Mengapa Memilih HS Beton
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-gray-600">
              Sebagai produsen yang mengutamakan kualitas, kami memastikan setiap proses pencetakan dan pengiriman berjalan sesuai jadwal untuk kelancaran proyek Anda.
            </p>
            <img src={PlantImg} alt="Fasilitas Pabrik HS Beton" loading="lazy" className="mt-10 hidden aspect-[4/3] w-full object-cover rounded-sm shadow-md lg:block" />
          </div>
          <div className="divide-y divide-gray-200 border-t border-gray-200">
            {[
              [Factory, 'Standar Produksi Terjaga', 'Kami memastikan campuran material, proses pengecoran, hingga tahap curing berada dalam pengawasan mutu yang ketat.'],
              [ShieldCheck, 'Produk Sesuai Spesifikasi', 'Setiap produk precast dicetak dengan dimensi yang presisi dan kuat tekan beton yang memenuhi standar proyek konstruksi.'],
              [Truck, 'Pengiriman Tepat Waktu', 'Kesiapan armada logistik kami menjamin produk beton precast sampai di titik lokasi pengerjaan sesuai dengan timeline.'],
              [Users, 'Tim Berpengalaman', 'Manajemen operasional dan tim di lapangan siap membantu memberikan solusi teknis yang efisien untuk kebutuhan spesifik Anda.'],
            ].map(([Icon, title, body]) => (
              <div key={title} className="flex gap-6 py-10">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm bg-gray-50 border border-gray-100 shadow-sm">
                  <Icon className="h-6 w-6 text-red-600" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-gray-600">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section className="bg-gray-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-red-600/5" />
        <div className="rail relative flex flex-col items-start gap-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Butuh Penawaran Beton Precast?
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Mari diskusikan detail RAB atau spesifikasi proyek Anda. Tim kami siap merespons dengan penawaran kompetitif.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row shrink-0">
            <Link to="/kontak" className="inline-flex min-h-[52px] items-center justify-center bg-white px-8 text-sm font-semibold uppercase tracking-wider text-gray-900 transition-all hover:bg-gray-200 active:scale-95">
              Minta Penawaran
            </Link>
            <a href={waLink()} target="_blank" rel="noreferrer" className="inline-flex min-h-[52px] items-center justify-center bg-red-600 px-8 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-red-700 active:scale-95">
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>

      {/* 11. FLOATING WHATSAPP */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-4">
        <div className="hidden rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-gray-800 shadow-xl border border-gray-100 sm:block">
          Butuh Penawaran? <br/>
          <span className="text-gray-500 font-normal">Chat Kami</span>
        </div>
        <a
          href={waLink()}
          target="_blank"
          rel="noreferrer"
          className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform hover:scale-110"
          aria-label="Chat WhatsApp"
        >
          <MessageCircle className="h-8 w-8" />
        </a>
      </div>
    </Layout>
  );
}