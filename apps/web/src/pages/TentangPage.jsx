import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';

const PLANT = 'https://images.hostinger.com/e8c3e735-2c3a-42ca-ab6e-41bc4c0ce419.png';
const YARD = 'https://images.hostinger.com/7c2a17b2-4528-4875-8cc3-68418e28c2c2.png';

export default function TentangPage() {
  return (
    <Layout>
      <Helmet>
        <title>Tentang Kami — HS Beton, Produsen Precast Cikarang</title>
        <meta
          name="description"
          content="Profil HS Beton: pabrik beton precast di Cikarang dengan batching plant sendiri, kontrol mutu K-350, dan pengalaman melayani kontraktor infrastruktur sejak 2009."
        />
      </Helmet>

      <section className="border-b border-border bg-[hsl(var(--muted))]">
        <div className="rail py-16 lg:py-20">
          <p className="eyebrow mb-3">Profil Perusahaan</p>
          <h1 className="display max-w-3xl text-5xl font-bold uppercase leading-[0.95] sm:text-6xl">Tentang HS Beton</h1>
        </div>
      </section>

      <section className="rail grid items-start gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <img src={PLANT} alt="Produksi dan kontrol mutu di pabrik HS Beton" className="aspect-[3/2] w-full object-cover" />
          <div className="mt-6 grid grid-cols-2 gap-px bg-border">
            {[['2009', 'Mulai produksi'], ['1,2 Ha', 'Luas area pabrik'], ['4.000 m³', 'Kapasitas per bulan'], ['ISO-ready', 'Prosedur QC']].map(([v, l]) => (
              <div key={l} className="bg-white p-5">
                <p className="display text-2xl font-bold">{v}</p>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">{l}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="display text-3xl font-bold uppercase leading-tight sm:text-4xl">
            Mitra precast untuk pekerjaan yang tidak boleh gagal
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              HS Beton berdiri sejak 2009 di kawasan industri Cikarang, Bekasi, dengan fokus tunggal:
              memproduksi komponen beton pracetak untuk pekerjaan drainase, jalan, dan pemagaran.
              Kami melayani kontraktor umum, developer kawasan, dan penyedia jasa infrastruktur pemerintah.
            </p>
            <p>
              Produksi dilakukan di pabrik sendiri dengan batching plant terintegrasi, sehingga mix design,
              slump, dan masa curing dapat kami kendalikan penuh. Setiap batch diuji tekan di umur 7 dan 28 hari,
              dan hasilnya kami serahkan bersama surat jalan pengiriman.
            </p>
            <p>
              Bagi tim proyek, hal yang paling menentukan bukan hanya harga, tetapi kepastian jadwal.
              Karena itu kami menetapkan slot produksi sejak PO diterima dan memberi update mingguan
              hingga barang tiba di lokasi.
            </p>
          </div>

          <div className="mt-8 divide-y divide-border border-y border-border">
            {[
              ['Nilai kerja', 'Presisi dimensi, kejujuran mutu, dan komunikasi lapangan yang cepat.'],
              ['Cakupan kirim', 'Jabodetabek, Karawang, Purwakarta, Bandung, dan Banten.'],
              ['Legalitas', 'Badan usaha berbadan hukum, NPWP dan dokumen pengadaan lengkap.'],
            ].map(([k, v]) => (
              <div key={k} className="grid gap-1 py-5 sm:grid-cols-[10rem_1fr]">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{k}</span>
                <span className="text-sm text-muted-foreground">{v}</span>
              </div>
            ))}
          </div>

          <Link to="/kontak" className="mt-8 inline-flex min-h-[52px] items-center justify-center bg-[hsl(var(--primary))] px-8 text-sm font-semibold uppercase tracking-[0.14em] text-white active:scale-[0.98]">
            Hubungi Tim Estimasi
          </Link>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-border">
        <img src={YARD} alt="Yard penyimpanan produk precast HS Beton" className="h-[42vh] w-full object-cover" />
        <div className="absolute inset-0 bg-[hsl(var(--primary))]/60" />
        <div className="rail absolute inset-0 flex items-center">
          <p className="display max-w-2xl text-3xl font-bold uppercase leading-tight text-white sm:text-5xl">
            Stok siap kirim, produksi berjalan setiap hari kerja
          </p>
        </div>
      </section>
    </Layout>
  );
}
