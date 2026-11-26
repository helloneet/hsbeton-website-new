import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { MapPin, Phone, Mail, Clock, ArrowUpRight, MessageCircle } from 'lucide-react';
import Layout from '@/components/Layout';
import { products, waLink, ADDRESS, EMAIL, WA_DISPLAY, trackLead, trackWhatsApp } from '@/data/site';

const initialForm = { name: '', company: '', phone: '', email: '', product: '', message: '' };

export default function KontakPage() {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState('');
  const update = (key) => (event) => setForm((current) => ({ ...current, [key]: event.target.value }));

  const submit = (event) => {
    event.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setError('Nama dan nomor telepon wajib diisi.');
      return;
    }
    setError('');
    trackLead();
    const message = `Halo HS Beton,

Saya ingin meminta penawaran produk beton precast.

Nama: ${form.name}
Perusahaan: ${form.company || '-'}
No. WA: ${form.phone}
Email: ${form.email || '-'}
Produk: ${form.product || '-'}

Detail kebutuhan:
${form.message || '-'}

Mohon informasi harga, estimasi pengiriman, dan spesifikasi produknya.

Terima kasih.`;
    window.open(waLink(message), '_blank', 'noopener,noreferrer');
  };

  const fieldClass = 'min-h-12 w-full border border-[#d9dde0] bg-[#f8f9f8] px-4 text-sm text-foreground outline-none transition placeholder:text-foreground/35 focus:border-accent focus:bg-white focus:ring-1 focus:ring-accent';

  return (
    <Layout>
      <Helmet>
        <title>Kontak & Permintaan Penawaran — HS Beton</title>
        <meta name="description" content="Hubungi HS Beton untuk konsultasi dan permintaan penawaran produk beton precast." />
      </Helmet>

      <section className="bg-[#F2F3F1]">
        <div className="rail grid gap-8 py-12 sm:py-16 lg:grid-cols-[1fr_0.65fr] lg:items-end lg:py-20">
          <div><p className="eyebrow mb-4">Kontak / Penawaran</p><h1 className="display max-w-4xl text-[clamp(3.5rem,8vw,7.5rem)] font-bold uppercase leading-[0.82]">Mari bahas<br /><span className="text-accent">proyek Anda.</span></h1></div>
          <p className="max-w-xl text-sm leading-7 text-foreground/70 sm:text-base sm:leading-8 lg:justify-self-end">Ceritakan kebutuhan produk, ukuran, volume, dan lokasi pengiriman. Informasi tersebut membantu tim kami memahami kebutuhan Anda.</p>
        </div>
      </section>

      <section className="rail grid gap-8 py-12 sm:py-16 lg:grid-cols-12 lg:gap-12 lg:py-20">
        <aside className="lg:col-span-4">
          <div className="bg-[hsl(var(--primary))] p-6 text-white sm:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/50">Kontak langsung</p>
            <h2 className="display mt-3 text-3xl font-bold uppercase leading-[0.9] sm:text-4xl">Tim HS Beton</h2>
            <p className="mt-4 text-sm leading-6 text-white/65">Untuk respon lebih cepat, hubungi kami melalui WhatsApp dan sertakan detail kebutuhan proyek.</p>
            <a href={waLink('Halo HS Beton, saya ingin konsultasi kebutuhan proyek.')} target="_blank" rel="noreferrer" onClick={trackWhatsApp} className="mt-6 inline-flex min-h-12 items-center gap-3 bg-accent px-5 text-xs font-bold uppercase tracking-[0.12em] text-white">Chat WhatsApp <ArrowUpRight className="h-4 w-4" /></a>
          </div>
          <div className="mt-5 divide-y divide-border border-y border-border">
            {[
              [MapPin, 'Alamat', ADDRESS],
              [Phone, 'WhatsApp', WA_DISPLAY],
              [Mail, 'Email', EMAIL],
              [Clock, 'Jam operasional', 'Senin–Jumat 08.00–17.00 · Sabtu 09.00–13.00'],
            ].map(([Icon, title, value]) => <div key={title} className="flex gap-4 py-5"><Icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.7} /><div><p className="text-[10px] font-bold uppercase tracking-[0.16em]">{title}</p><p className="mt-1 text-sm leading-6 text-muted-foreground">{value}</p></div></div>)}
          </div>
        </aside>

        <div className="lg:col-span-8">
          <div className="mb-7 border-b border-border pb-6"><p className="eyebrow mb-3">Form Penawaran</p><h2 className="display text-4xl font-bold uppercase leading-[0.9] sm:text-5xl">Sampaikan kebutuhan Anda.</h2><p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">Setelah formulir disiapkan, pesan akan dibuka melalui WhatsApp agar dapat kamu kirim ke tim HS Beton.</p></div>
          <form onSubmit={submit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2"><label htmlFor="name" className="text-[10px] font-bold uppercase tracking-[0.14em]">Nama <span className="text-accent">*</span></label><input id="name" className={fieldClass} value={form.name} onChange={update('name')} placeholder="Nama lengkap" /></div>
              <div className="space-y-2"><label htmlFor="company" className="text-[10px] font-bold uppercase tracking-[0.14em]">Perusahaan</label><input id="company" className={fieldClass} value={form.company} onChange={update('company')} placeholder="PT / CV" /></div>
              <div className="space-y-2"><label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-[0.14em]">Telepon / WhatsApp <span className="text-accent">*</span></label><input id="phone" className={fieldClass} value={form.phone} onChange={update('phone')} placeholder="08xx xxxx xxxx" /></div>
              <div className="space-y-2"><label htmlFor="email" className="text-[10px] font-bold uppercase tracking-[0.14em]">Email</label><input id="email" type="email" className={fieldClass} value={form.email} onChange={update('email')} placeholder="nama@perusahaan.co.id" /></div>
            </div>
            <div className="space-y-2"><label htmlFor="product" className="text-[10px] font-bold uppercase tracking-[0.14em]">Produk yang dibutuhkan</label><select id="product" className={fieldClass} value={form.product} onChange={update('product')}><option value="">Pilih produk</option>{products.map((p) => <option key={p.slug} value={p.name}>{p.name}</option>)}<option value="Custom / lainnya">Custom / lainnya</option></select></div>
            <div className="space-y-2"><label htmlFor="message" className="text-[10px] font-bold uppercase tracking-[0.14em]">Detail kebutuhan</label><textarea id="message" rows={5} className={`${fieldClass} py-3`} value={form.message} onChange={update('message')} placeholder="Volume, ukuran, lokasi kirim, dan target jadwal." /></div>
            {error && <p role="alert" className="border-l-2 border-accent bg-accent/5 px-4 py-3 text-sm text-accent">{error}</p>}
            <button type="submit" className="inline-flex min-h-14 w-full items-center justify-center gap-3 bg-accent px-7 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:brightness-95 sm:w-auto">Siapkan Pesan WhatsApp <MessageCircle className="h-4 w-4" /></button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
