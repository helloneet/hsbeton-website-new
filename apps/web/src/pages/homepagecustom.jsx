import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  Factory,
  FileCheck2,
} from 'lucide-react';

import Layout from '@/components/Layout';
import { products, waLink } from '@/data/site';

const HERO =
  'https://images.hostinger.com/7c2a17b2-4528-4875-8cc3-68418e28c2c2.png';

const PLANT =
  'https://images.hostinger.com/e8c3e735-2c3a-42ca-ab6e-41bc4c0ce419.png';

const ticker = [
  'U-Ditch',
  'Box Culvert',
  'Road Barrier',
  'Pagar Panel',
  'Buis Beton',
  'Kanstin',
  'Cover U-Ditch',
];

export default function HomePage() {
  return (
    <Layout>
      <Helmet>
        <title>
          HS Beton | Produsen Beton Precast Berkualitas untuk Proyek Konstruksi
        </title>

        <meta
          name="description"
          content="HS Beton menyediakan berbagai produk beton precast berkualitas untuk kebutuhan proyek infrastruktur, kawasan industri, bangunan komersial, dan perumahan. Didukung kualitas produk yang terjaga, pengiriman tepat waktu, dan pelayanan profesional."
        />
      </Helmet>

      {/* ================= HERO ================= */}

      <section className="relative flex min-h-screen items-end overflow-hidden bg-[hsl(var(--primary))]">

        <img
          src={HERO}
          alt="Area Produksi HS Beton"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--primary))] via-[hsl(var(--primary))]/45 to-transparent" />

        <div className="rail relative w-full pb-20 pt-32">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: 'easeOut',
            }}
          >

            <p className="eyebrow mb-6 tracking-[0.22em]">
              HS BETON • BETON PRECAST BERKUALITAS
            </p>

            <h1 className="display max-w-5xl text-5xl font-bold uppercase leading-[0.95] text-white sm:text-6xl lg:text-7xl">

              Solusi Beton

              <br />

              <span className="text-accent">
                Precast Berkualitas
              </span>

            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/80">

              HS Beton menyediakan berbagai produk beton precast untuk mendukung
              kebutuhan proyek infrastruktur, kawasan industri, bangunan
              komersial, hingga perumahan. Dengan proses produksi yang
              terstandarisasi serta komitmen terhadap kualitas, kami siap
              menjadi mitra terpercaya dalam setiap pembangunan.

            </p>

            <p className="mt-6 text-sm uppercase tracking-[0.20em] text-accent">
              Menghadirkan Kualitas. Membangun Kepercayaan.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <a
                href={waLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[56px] items-center justify-center gap-2 bg-accent px-9 text-sm font-semibold uppercase tracking-[0.14em] text-[hsl(var(--accent-foreground))] transition hover:brightness-95 active:scale-[0.98]"
              >

                Konsultasi Proyek

                <ArrowRight className="h-4 w-4" />

              </a>

              <Link
                to="/produk"
                className="inline-flex min-h-[56px] items-center justify-center border border-white/30 px-9 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white/10 active:scale-[0.98]"
              >

                Lihat Produk

              </Link>

            </div>

          </motion.div>

        </div>

      </section>
            {/* ================= TICKER ================= */}
      <div className="overflow-hidden border-y border-border bg-[hsl(var(--steel))] py-4">
        <div className="flex w-max animate-marquee gap-10 pr-10">
          {[...ticker, ...ticker].map((item, index) => (
            <span
              key={index}
              className="display flex items-center gap-10 text-lg font-semibold uppercase tracking-[0.2em] text-white/60"
            >
              {item}
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
          ))}
        </div>
      </div>

      {/* ================= COMPANY HIGHLIGHT ================= */}
      <section className="rail grid grid-cols-2 gap-px border-x border-border bg-border py-0 md:grid-cols-4">
        {[
          [
            'Produk Lengkap',
            'Berbagai solusi beton precast untuk kebutuhan proyek konstruksi.',
          ],
          [
            'Mutu Terjamin',
            'Diproduksi dengan standar kualitas yang konsisten.',
          ],
          [
            'Pengiriman Tepat',
            'Mendukung kelancaran pekerjaan di lapangan.',
          ],
          [
            'Layanan Responsif',
            'Tim siap membantu kebutuhan proyek Anda.',
          ],
        ].map(([title, description]) => (
          <div key={title} className="bg-white px-6 py-10">
            <h3 className="display text-2xl font-bold uppercase text-foreground">
              {title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              {description}
            </p>
          </div>
        ))}
      </section>
            {/* ================= PRODUK ================= */}
      <section className="rail py-20 lg:py-28">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6 border-b border-border pb-6">
          <div>
            <p className="eyebrow mb-3">Produk HS Beton</p>

            <h2 className="display text-4xl font-bold uppercase sm:text-5xl">
              Solusi Beton Precast
              <br />
              untuk Berbagai Kebutuhan Proyek
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground">
              HS Beton menghadirkan berbagai produk beton precast berkualitas
              untuk mendukung proyek infrastruktur, kawasan industri,
              bangunan komersial, perumahan, hingga fasilitas umum dengan
              kualitas yang konsisten dan siap digunakan di lapangan.
            </p>
          </div>

          <Link
            to="/produk"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-accent transition hover:gap-3"
          >
            Lihat Semua Produk
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <Link
              key={product.slug}
              to="/produk"
              className="group overflow-hidden border border-border bg-white transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="display text-2xl font-semibold uppercase">
                  {product.name}
                </h3>

                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                  {product.spec}
                </p>

                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {product.desc}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-accent">
                  Detail Produk
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
            {/* ================= KENAPA HS BETON ================= */}
      <section className="border-y border-border bg-[hsl(var(--muted))]">
        <div className="rail grid gap-12 py-20 lg:grid-cols-2 lg:py-28">

          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow mb-3">
              Mengapa Memilih HS Beton
            </p>

            <h2 className="display text-4xl font-bold uppercase leading-tight sm:text-5xl">
              Lebih dari Sekadar
              <br />
              Produk Beton
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">
              HS Beton berkomitmen menghadirkan produk beton precast
              berkualitas dengan pelayanan yang profesional. Mulai dari
              proses produksi, pengendalian mutu, hingga pengiriman,
              setiap tahapan dilakukan untuk membantu proyek berjalan
              lebih efektif dan tepat waktu.
            </p>

            <img
              src={PLANT}
              alt="Pabrik HS Beton"
              className="mt-8 hidden aspect-[3/2] w-full object-cover lg:block"
            />
          </div>

          <div className="divide-y divide-border border-t border-border">

            {[
              [
                Factory,
                'Produksi Berkualitas',
                'Diproduksi menggunakan proses yang terstandarisasi dengan pengawasan kualitas pada setiap tahapan sehingga menghasilkan beton precast yang konsisten.'
              ],

              [
                FileCheck2,
                'Kualitas Terjaga',
                'Setiap produk dibuat sesuai spesifikasi untuk memenuhi kebutuhan berbagai jenis proyek konstruksi.'
              ],

              [
                Truck,
                'Pengiriman Tepat Waktu',
                'Distribusi dilakukan secara terencana untuk membantu menjaga kelancaran pekerjaan di lapangan.'
              ],

              [
                ShieldCheck,
                'Pelayanan Profesional',
                'Tim HS Beton siap membantu mulai dari konsultasi produk, penyusunan penawaran, hingga proses pengiriman.'
              ]

            ].map(([Icon, title, body]) => (

              <div
                key={title}
                className="flex gap-5 py-8"
              >

                <Icon
                  className="mt-1 h-6 w-6 shrink-0 text-accent"
                  strokeWidth={1.75}
                />

                <div>

                  <h3 className="display text-xl font-semibold uppercase">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {body}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>
            {/* ================= CTA ================= */}
      <section className="bg-[hsl(var(--primary))]">
        <div className="rail flex flex-col items-start gap-8 py-16 md:flex-row md:items-center md:justify-between">

          <div>
            <p className="eyebrow mb-3 text-white/70">
              Siap Memulai Proyek?
            </p>

            <h2 className="display text-3xl font-bold uppercase text-white sm:text-4xl">
              Diskusikan
              <br />
              Kebutuhan Proyek Anda
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-white/70">
              Tim HS Beton siap membantu memberikan informasi produk,
              penawaran harga, hingga rekomendasi produk beton precast
              yang sesuai dengan kebutuhan proyek Anda.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">

            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[56px] items-center justify-center gap-2 bg-accent px-8 text-sm font-semibold uppercase tracking-[0.14em] text-[hsl(var(--accent-foreground))] transition hover:brightness-95 active:scale-[0.98]"
            >
              Hubungi Kami
              <ArrowRight className="h-4 w-4" />
            </a>

            <Link
              to="/kontak"
              className="inline-flex min-h-[56px] items-center justify-center border border-white/30 px-8 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white/10 active:scale-[0.98]"
            >
              Form Penawaran
            </Link>

          </div>

        </div>
      </section>

    </Layout>
  );
}