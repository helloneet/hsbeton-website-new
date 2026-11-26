import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Layout from '@/components/Layout';
import Uditch from '@/assets/Product/Uditch.jpg';
import BoxCulvert from '@/assets/Product/Box-Culvert.jpg';
import RoadBarrier from '@/assets/Product/Road-Barrier.jpg';
import Kanstin from '@/assets/Product/Kanstin.jpg';
import Buis from '@/assets/Product/Buis.jpg';
import Panel from '@/assets/Product/Panel.jpg';

const articles = [
  { slug: 'u-ditch', title: 'U-Ditch Variasi Mutu Beton', excerpt: 'Saluran drainase beton pracetak untuk pekerjaan jalan, kawasan industri, dan perumahan.', category: 'Drainase Beton', image: Uditch },
  { slug: 'box-culvert', title: 'Box Culvert Variasi Mutu Beton', excerpt: 'Gorong-gorong beton pracetak untuk saluran air dan crossing pada proyek infrastruktur.', category: 'Drainase Beton', image: BoxCulvert },
  { slug: 'road-barrier', title: 'Road Barrier Variasi Mutu Beton', excerpt: 'Pembatas beton untuk pengaturan jalur kendaraan dan area pekerjaan konstruksi.', category: 'Infrastruktur', image: RoadBarrier },
  { slug: 'pagar-panel', title: 'Pagar Panel Beton', excerpt: 'Sistem pagar pracetak untuk kebutuhan pembatas kawasan dan area proyek.', category: 'Pagar Beton', image: Panel },
  { slug: 'buis-beton', title: 'Buis Beton', excerpt: 'Elemen beton silinder untuk kebutuhan drainase, sumur, dan resapan.', category: 'Drainase Beton', image: Buis },
  { slug: 'kanstin', title: 'Kanstin Beton', excerpt: 'Pembatas jalan dan trotoar dengan bentuk pracetak yang rapi.', category: 'Infrastruktur', image: Kanstin },
];

export default function ArtikelPage() {
  return (
    <Layout>
      <Helmet>
        <title>Artikel & Informasi Beton Precast — HS Beton</title>
        <meta name="description" content="Informasi produk beton precast HS Beton, fungsi, spesifikasi, dan penggunaannya untuk kebutuhan proyek konstruksi." />
      </Helmet>

      <section className="relative overflow-hidden bg-[#F2F3F1]">
        <div className="rail grid gap-8 py-12 sm:py-16 lg:grid-cols-[1fr_0.65fr] lg:items-end lg:py-20">
          <div><p className="eyebrow mb-4">Artikel / Informasi</p><h1 className="display max-w-4xl text-[clamp(3.5rem,8vw,7.5rem)] font-bold uppercase leading-[0.82]">Pengetahuan<br /><span className="text-accent">untuk proyek.</span></h1></div>
          <div className="max-w-xl lg:justify-self-end"><p className="text-sm leading-7 text-foreground/70 sm:text-base sm:leading-8">Kenali fungsi dan karakteristik produk beton precast agar diskusi kebutuhan proyek lebih terarah.</p><p className="mt-5 text-[10px] font-bold uppercase tracking-[0.18em] text-foreground/45">HS Beton / Product knowledge</p></div>
        </div>
      </section>

      <div className="sticky top-[68px] z-30 border-y border-border bg-white/95 backdrop-blur sm:top-[76px]">
        <div className="rail flex items-center gap-7 overflow-x-auto py-4">
          <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.18em] text-accent">Topik</span>
          {['Drainase Beton', 'Infrastruktur', 'Pagar Beton', 'Spesifikasi Produk'].map((tag) => <span key={tag} className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground/60">{tag}</span>)}
        </div>
      </div>

      <section className="rail py-12 sm:py-16 lg:py-20">
        <div className="mb-8 flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="eyebrow mb-3">Pustaka Produk</p><h2 className="display text-4xl font-bold uppercase leading-[0.9] sm:text-5xl">Artikel Beton Precast</h2></div>
          <p className="max-w-md text-sm leading-6 text-muted-foreground">Informasi dasar untuk mengenali produk dan menyiapkan kebutuhan pengadaan.</p>
        </div>

        <div className="grid gap-x-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <Link key={article.slug} to={`/artikel/${article.slug}`} className="group flex flex-col">
              <div className="relative overflow-hidden bg-[#eef0f1]">
                <span className="absolute left-3 top-3 z-10 bg-white/90 px-3 py-1.5 text-[10px] font-bold tracking-[0.14em]">0{index + 1} / ARTICLE</span>
                <img src={article.image} alt={article.title} loading="lazy" className="aspect-[1.35/1] w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
                <span className="absolute bottom-3 right-3 grid h-10 w-10 place-items-center bg-accent text-white transition group-hover:bg-[hsl(var(--primary))]"><ArrowUpRight className="h-5 w-5" /></span>
              </div>
              <div className="flex flex-1 flex-col border-b border-border py-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-accent">{article.category}</p>
                <h3 className="display mt-3 text-2xl font-bold uppercase leading-tight sm:text-3xl">{article.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{article.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-foreground transition group-hover:text-accent">Baca artikel <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[hsl(var(--primary))] text-white">
        <div className="rail grid gap-6 py-12 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-center">
          <div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/50">Butuh informasi lebih lanjut?</p><h2 className="display mt-3 max-w-3xl text-4xl font-bold uppercase leading-[0.9] sm:text-5xl">Diskusikan kebutuhan<br className="hidden sm:block" /> produk Anda.</h2><p className="mt-4 max-w-xl text-sm leading-7 text-white/65">Tim HS Beton siap membantu membahas pilihan produk dan spesifikasi proyek.</p></div>
          <a href="https://wa.me/6289630672153" target="_blank" rel="noreferrer" className="inline-flex min-h-14 items-center justify-center gap-3 bg-accent px-7 text-xs font-bold uppercase tracking-[0.12em] text-white">Hubungi HS Beton <ArrowUpRight className="h-4 w-4" /></a>
        </div>
      </section>
    </Layout>
  );
}
