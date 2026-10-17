import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
} from 'lucide-react';

import Layout from '@/components/Layout';
import { waLink } from '@/data/site';

import Uditch from '@/assets/Product/Uditch.jpg';
import BoxCulvert from '@/assets/Product/Box-Culvert.jpg';
import RoadBarrier from '@/assets/Product/Road-Barrier.jpg';
import Kanstin from '@/assets/Product/Kanstin.jpg';
import Buis from '@/assets/Product/Buis.jpg';
import Panel from '@/assets/Product/Panel.jpg';

const articles = {
  'u-ditch': {
    category: 'DRAINASE BETON',
    title: 'U-DITCH VARIASI MUTU BETON',
    image: Uditch,
    subtitle:
      'Saluran drainase beton pracetak yang presisi untuk berbagai kebutuhan proyek.',
    description:
      'U-Ditch adalah saluran drainase beton pracetak berbentuk U yang digunakan untuk mengalirkan air hujan dan air permukaan pada proyek jalan, kawasan industri, hingga perumahan. Produk ini dibuat dengan sistem pracetak untuk menghasilkan dimensi yang rapi dan memudahkan proses pemasangan di lokasi proyek. HS Beton menyediakan pilihan mutu dan ukuran yang dapat disesuaikan dengan kebutuhan serta spesifikasi teknis proyek.',
    uses: [
      'Saluran drainase pada proyek jalan raya dan kawasan infrastruktur.',
      'Sistem pembuangan air pada kawasan industri dan pergudangan.',
      'Saluran irigasi untuk proyek pertanian dan perkebunan.',
      'Drainase kawasan perumahan, ruko, dan area komersial.',
    ],
    advantages: [
      'Pilihan mutu beton dapat disesuaikan dengan kebutuhan proyek.',
      'Dimensi presisi dan permukaan rapi berkat proses produksi pracetak.',
      'Pemasangan lebih praktis dibandingkan pengecoran langsung di lokasi.',
      'Mendukung pekerjaan drainase dengan proses instalasi yang lebih terencana.',
      'Tersedia pilihan ukuran sesuai gambar kerja dan kebutuhan lapangan.',
    ],
    specifications: [
      'Variasi mutu beton sesuai kebutuhan dan spesifikasi proyek.',
      'Tersedia berbagai pilihan lebar dan tinggi.',
      'Ukuran dapat disesuaikan dengan gambar kerja dan spesifikasi teknis proyek.',
    ],
    offer:
      'HS Beton melayani kebutuhan U-Ditch untuk proyek dengan dukungan konsultasi ukuran, jumlah unit, dan pengiriman ke lokasi proyek. Hubungi tim kami untuk mendiskusikan kebutuhan serta mendapatkan penawaran harga.',
    cta:
      'Butuh U-Ditch untuk proyek Anda? Konsultasikan kebutuhan ukuran, mutu beton, dan jumlah unit bersama tim HS Beton.',
  },

  'box-culvert': {
    category: 'DRAINASE BETON',
    title: 'BOX CULVERT VARIASI MUTU BETON',
    image: BoxCulvert,
    subtitle:
      'Gorong-gorong beton pracetak untuk kebutuhan drainase dan infrastruktur.',
    description:
      'Box Culvert adalah elemen beton pracetak berbentuk kotak yang digunakan untuk menyalurkan air di bawah jalan maupun area konstruksi. Bentuk dan dimensinya dapat direncanakan berdasarkan kebutuhan aliran air, kondisi lokasi, serta beban yang harus ditanggung. HS Beton menyediakan pilihan mutu dan ukuran yang dapat disesuaikan dengan spesifikasi teknis proyek.',
    uses: [
      'Gorong-gorong di bawah jalan raya dan akses kendaraan.',
      'Saluran air pada proyek infrastruktur dan kawasan industri.',
      'Saluran lintasan air pada area konstruksi.',
      'Sistem drainase dengan kebutuhan dimensi dan kapasitas tertentu.',
    ],
    advantages: [
      'Pilihan mutu beton disesuaikan dengan kebutuhan struktural proyek.',
      'Bentuk kotak mendukung perencanaan saluran dengan dimensi yang terukur.',
      'Sistem pracetak membantu membuat proses pemasangan lebih terencana.',
      'Dimensi dapat direncanakan berdasarkan kebutuhan aliran air.',
      'Mendukung pekerjaan infrastruktur dengan spesifikasi yang terukur.',
    ],
    specifications: [
      'Variasi mutu beton sesuai kebutuhan dan spesifikasi proyek.',
      'Pilihan ukuran disesuaikan dengan kebutuhan aliran dan kondisi lapangan.',
      'Spesifikasi dapat mengacu pada gambar kerja proyek.',
    ],
    offer:
      'HS Beton membantu pengadaan Box Culvert untuk kebutuhan proyek, termasuk konsultasi ukuran, jumlah unit, dan spesifikasi teknis. Hubungi tim kami untuk mendiskusikan kebutuhan serta mendapatkan penawaran.',
    cta:
      'Diskusikan kebutuhan Box Culvert proyek Anda bersama tim HS Beton untuk menentukan ukuran dan spesifikasi yang sesuai.',
  },

  'road-barrier': {
    category: 'INFRASTRUKTUR',
    title: 'ROAD BARRIER VARIASI MUTU BETON',
    image: RoadBarrier,
    subtitle:
      'Pembatas jalan beton pracetak untuk pengaturan lalu lintas dan area proyek.',
    description:
      'Road Barrier adalah pembatas beton pracetak yang digunakan untuk memisahkan jalur kendaraan, mengarahkan arus lalu lintas, dan membatasi area pekerjaan. Pemilihan dimensi serta spesifikasi beton perlu disesuaikan dengan fungsi, kondisi pemasangan, dan persyaratan keselamatan proyek. HS Beton menyediakan produk dengan pilihan spesifikasi sesuai kebutuhan pengadaan.',
    uses: [
      'Pembatas lajur pada jalan raya dan area infrastruktur.',
      'Pembatas area konstruksi dan pekerjaan jalan.',
      'Pengaturan lalu lintas pada area parkir dan kawasan industri.',
      'Pemisah jalur kendaraan pada area proyek.',
    ],
    advantages: [
      'Pilihan spesifikasi beton dapat disesuaikan dengan kebutuhan penggunaan.',
      'Bentuk pracetak membantu menghasilkan dimensi yang konsisten.',
      'Mendukung pengaturan dan pemisahan area lalu lintas.',
      'Pemasangan dapat direncanakan sesuai tata letak area proyek.',
      'Dapat digunakan untuk berbagai kebutuhan pembatas area.',
    ],
    specifications: [
      'Variasi mutu beton sesuai kebutuhan dan spesifikasi proyek.',
      'Ukuran disesuaikan dengan kebutuhan penggunaan.',
      'Jumlah dan spesifikasi pengadaan dapat direncanakan berdasarkan kebutuhan proyek.',
    ],
    offer:
      'HS Beton melayani kebutuhan Road Barrier untuk proyek infrastruktur dan pengaturan area. Konsultasikan jumlah unit, ukuran, serta kebutuhan pengiriman kepada tim kami untuk mendapatkan penawaran.',
    cta:
      'Butuh Road Barrier untuk proyek Anda? Hubungi HS Beton untuk mendiskusikan kebutuhan dan spesifikasi pengadaan.',
  },

  'pagar-panel': {
    category: 'PAGAR BETON',
    title: 'PAGAR PANEL BETON VARIASI MUTU BETON',
    image: Panel,
    subtitle:
      'Sistem pagar beton pracetak yang praktis untuk berbagai kebutuhan pembatas area.',
    description:
      'Pagar Panel Beton merupakan sistem pagar pracetak yang terdiri dari panel beton dan tiang kolom sebagai penyangga. Sistem ini digunakan untuk membatasi lahan, kawasan industri, gudang, maupun area perumahan. HS Beton menyediakan pilihan spesifikasi dan tinggi pagar yang dapat dibahas berdasarkan kebutuhan keamanan, kondisi lahan, serta rancangan proyek.',
    uses: [
      'Pagar keliling pabrik dan kawasan industri.',
      'Pagar pembatas gudang dan area logistik.',
      'Pagar untuk perumahan dan kawasan perkantoran.',
      'Pembatas lahan kosong dan area proyek konstruksi.',
    ],
    advantages: [
      'Sistem panel mendukung proses pemasangan yang lebih praktis.',
      'Pilihan spesifikasi disesuaikan dengan kebutuhan proyek.',
      'Tampilan panel yang seragam membantu menghasilkan pagar yang rapi.',
      'Pilihan tinggi dapat direncanakan berdasarkan kebutuhan area.',
      'Cocok untuk kebutuhan pembatas lahan dalam berbagai skala proyek.',
    ],
    specifications: [
      'Variasi mutu beton sesuai kebutuhan dan spesifikasi proyek.',
      'Pilihan tinggi yang tercantum pada data produk: 1,6 m hingga 2,4 m.',
      'Kebutuhan panel dan kolom disesuaikan dengan ukuran area serta rancangan proyek.',
    ],
    offer:
      'HS Beton membantu pengadaan Pagar Panel Beton dengan konsultasi kebutuhan tinggi, jumlah panel, dan kebutuhan kolom berdasarkan luas area. Hubungi tim kami untuk mendiskusikan spesifikasi dan penawaran harga.',
    cta:
      'Butuh Pagar Panel Beton untuk membatasi area proyek? Konsultasikan ukuran, tinggi, dan jumlah kebutuhan Anda bersama HS Beton.',
  },

  'buis-beton': {
    category: 'DRAINASE BETON',
    title: 'BUIS BETON VARIASI MUTU BETON',
    image: Buis,
    subtitle:
      'Beton pracetak berbentuk silinder untuk sumur, resapan, dan kebutuhan drainase.',
    description:
      'Buis Beton adalah elemen beton pracetak berbentuk silinder berongga yang dapat digunakan untuk konstruksi sumur, sumur resapan, dan saluran drainase tertentu. Pilihan ukuran dan panjang perlu disesuaikan dengan kedalaman, kondisi tanah, serta kebutuhan penggunaan. HS Beton menyediakan pilihan spesifikasi yang dapat dikonsultasikan berdasarkan kebutuhan proyek.',
    uses: [
      'Dinding sumur dan sumur resapan.',
      'Kebutuhan saluran drainase tertentu.',
      'Konstruksi saluran air pada area rumah tinggal.',
      'Kebutuhan pekerjaan konstruksi skala kecil hingga besar.',
    ],
    advantages: [
      'Pilihan mutu beton disesuaikan dengan kebutuhan penggunaan.',
      'Bentuk pracetak membantu menghasilkan dimensi yang konsisten.',
      'Tersedia pilihan panjang untuk mendukung kebutuhan pemasangan.',
      'Pemasangan dapat direncanakan sesuai kedalaman dan kondisi lokasi.',
      'Dapat digunakan untuk berbagai kebutuhan konstruksi dan drainase.',
    ],
    specifications: [
      'Variasi mutu beton sesuai kebutuhan dan spesifikasi proyek.',
      'Pilihan panjang berdasarkan data produk: 50 cm dan 100 cm.',
      'Diameter disesuaikan dengan kebutuhan penggunaan dan ketersediaan produk.',
    ],
    offer:
      'HS Beton melayani kebutuhan Buis Beton untuk berbagai pekerjaan konstruksi. Konsultasikan diameter, panjang, jumlah unit, dan lokasi pengiriman kepada tim kami untuk memperoleh penawaran.',
    cta:
      'Butuh Buis Beton untuk sumur atau drainase? Hubungi HS Beton untuk mendiskusikan ukuran dan kebutuhan pengadaan.',
  },

  kanstin: {
    category: 'INFRASTRUKTUR',
    title: 'KANSTIN VARIASI MUTU BETON',
    image: Kanstin,
    subtitle:
      'Pembatas jalan, trotoar, dan area taman dengan bentuk beton pracetak yang rapi.',
    description:
      'Kanstin merupakan elemen beton pracetak yang digunakan sebagai pembatas antara jalan, trotoar, taman, dan area parkir. Selain membantu membentuk batas area, kanstin juga mendukung penataan kawasan agar lebih rapi. HS Beton menyediakan pilihan spesifikasi yang dapat disesuaikan dengan fungsi, ukuran, dan kebutuhan teknis proyek.',
    uses: [
      'Pembatas jalan dan trotoar pada proyek infrastruktur.',
      'Pembatas taman dan area hijau di kawasan perumahan.',
      'Pembatas area parkir dan jalur pejalan kaki.',
      'Penataan batas area pada proyek komersial dan kawasan publik.',
    ],
    advantages: [
      'Pilihan mutu beton mengikuti kebutuhan dan spesifikasi proyek.',
      'Bentuk pracetak membantu menghasilkan dimensi yang konsisten.',
      'Pemasangan dapat direncanakan mengikuti tata letak area.',
      'Mendukung penataan jalan, trotoar, taman, dan area parkir.',
      'Tersedia untuk kebutuhan pengadaan dalam berbagai skala proyek.',
    ],
    specifications: [
      'Variasi mutu beton sesuai kebutuhan dan spesifikasi proyek.',
      'Ukuran disesuaikan dengan fungsi dan kebutuhan area.',
      'Spesifikasi dapat mengacu pada gambar kerja proyek.',
    ],
    offer:
      'HS Beton melayani pengadaan Kanstin untuk kebutuhan proyek jalan, trotoar, taman, dan kawasan komersial. Hubungi tim kami untuk konsultasi spesifikasi, jumlah kebutuhan, dan penawaran harga.',
    cta:
      'Butuh Kanstin untuk proyek Anda? Konsultasikan ukuran, jumlah, dan spesifikasi kebutuhan bersama tim HS Beton.',
  },
};

function Section({ title, items }) {
  return (
    <section className="border-t border-border pt-8">
      <h2 className="display mb-5 text-2xl font-bold uppercase text-foreground sm:text-3xl">
        {title}
      </h2>

      <ul className="space-y-4">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex gap-3 text-base leading-relaxed text-foreground/70"
          >
            <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function ArtikelDetailPage() {
  const { slug } = useParams();
  const article = articles[slug];

  if (!article) {
    return (
      <Layout>
        <section className="flex min-h-[70vh] items-center justify-center px-6">
          <div className="text-center">
            <p className="eyebrow mb-4">ARTIKEL TIDAK DITEMUKAN</p>

            <h1 className="display text-4xl font-bold uppercase sm:text-6xl">
              Artikel Tidak Tersedia
            </h1>

            <p className="mx-auto mt-5 max-w-lg text-foreground/60">
              Artikel yang kamu cari tidak tersedia atau alamat artikelnya
              tidak sesuai.
            </p>

            <Link
              to="/artikel"
              className="mt-8 inline-flex items-center gap-2 bg-accent px-7 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-[hsl(var(--accent-foreground))]"
            >
              <ArrowLeft className="h-4 w-4" />
              Kembali ke Artikel
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <Helmet>
        <title>{article.title} — HS Beton</title>
        <meta name="description" content={article.subtitle} />
      </Helmet>

      {/* HERO */}
      <section className="bg-[hsl(var(--primary))] text-white">
        <div className="rail py-16 sm:py-20 lg:py-24">
          <Link
            to="/artikel"
            className="mb-10 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-white/60 transition hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Artikel
          </Link>

          <p className="eyebrow mb-5">{article.category}</p>

          <h1 className="display max-w-5xl text-4xl font-bold uppercase leading-[0.98] sm:text-6xl lg:text-7xl">
            {article.title}
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/70 sm:text-xl">
            {article.subtitle}
          </p>

          {/* FOTO UTAMA PRODUK */}
          <div className="mt-10 max-w-5xl overflow-hidden border border-white/15 bg-white/5">
            <img
              src={article.image}
              alt={article.title}
              className="aspect-[16/9] w-full object-cover"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <main className="rail py-16 sm:py-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_320px]">
          {/* ARTICLE */}
          <article className="max-w-3xl">
            <section className="pb-10">
              <p className="eyebrow mb-4">DESKRIPSI PRODUK</p>

              <p className="text-lg leading-[1.9] text-foreground/75">
                {article.description}
              </p>
            </section>

            <div className="space-y-10">
              <Section title="Kegunaan" items={article.uses} />

              <Section title="Keunggulan" items={article.advantages} />

              <Section title="Spesifikasi" items={article.specifications} />

              <section className="border-t border-border pt-8">
                <h2 className="display mb-5 text-2xl font-bold uppercase sm:text-3xl">
                  Penawaran
                </h2>

                <p className="text-base leading-[1.9] text-foreground/70">
                  {article.offer}
                </p>
              </section>

              {/* CTA */}
              <section className="relative overflow-hidden bg-[hsl(var(--primary))] p-8 text-white sm:p-10">
                <div className="absolute right-0 top-0 h-32 w-32 translate-x-12 -translate-y-12 rounded-full bg-accent/20" />

                <p className="eyebrow mb-4">BUTUH PRODUK INI?</p>

                <h2 className="display max-w-2xl text-3xl font-bold uppercase leading-tight sm:text-4xl">
                  Konsultasikan kebutuhan proyek Anda
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
                  {article.cta}
                </p>

                <a
                  href={waLink(
                    `Halo HS Beton, saya ingin konsultasi mengenai ${article.title}. Bisa bantu informasikan spesifikasi dan penawaran harganya?`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center gap-3 bg-accent px-7 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-[hsl(var(--accent-foreground))] transition hover:brightness-95"
                >
                  <MessageCircle className="h-5 w-5" />
                  Hubungi HS Beton
                  <ArrowRight className="h-4 w-4" />
                </a>
              </section>
            </div>
          </article>

          {/* SIDEBAR */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="border border-border bg-muted/30 p-6">
              <p className="eyebrow mb-4">PRODUK HS BETON</p>

              <div className="mb-5 overflow-hidden bg-white">
                <img
                  src={article.image}
                  alt={article.title}
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>

              <h3 className="display text-2xl font-bold uppercase">
                {article.title}
              </h3>

              <div className="my-6 h-px bg-border" />

              <p className="text-sm leading-relaxed text-foreground/60">
                Produk beton precast untuk mendukung kebutuhan proyek
                infrastruktur, kawasan industri, perumahan, dan konstruksi.
                Pilihan spesifikasi dapat didiskusikan sesuai kebutuhan proyek.
              </p>

              <a
                href={waLink(
                  `Halo HS Beton, saya ingin meminta penawaran untuk ${article.title}.`
                )}
                target="_blank"
                rel="noreferrer"
                className="mt-6 flex items-center justify-center gap-2 bg-accent px-5 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-[hsl(var(--accent-foreground))] transition hover:brightness-95"
              >
                <MessageCircle className="h-4 w-4" />
                Minta Penawaran
              </a>
            </div>

            <Link
              to="/artikel"
              className="mt-4 flex items-center justify-between border border-border px-5 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-foreground/70 transition hover:border-accent hover:text-accent"
            >
              Lihat Artikel Lain
              <ArrowRight className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </main>
    </Layout>
  );
}