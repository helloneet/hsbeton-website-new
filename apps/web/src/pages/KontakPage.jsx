import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { MapPin, Phone, Mail, Clock, CheckCircle2, Loader2 } from 'lucide-react';
import Layout from '@/components/Layout';
import pocketbaseClient from '@/lib/pocketbaseClient';
import { products, waLink, ADDRESS, EMAIL, WA_DISPLAY } from '@/data/site';

const empty = { name: '', company: '', phone: '', email: '', product: '', message: '' };

export default function KontakPage() {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
  e.preventDefault();

  if (!form.name.trim() || !form.phone.trim()) {
    setError('Nama dan nomor telepon wajib diisi.');
    return;
  }

  setError('');

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

  window.open(
    waLink(message),
    "_blank"
  );

  setForm(empty);
};

  const inputCls =
    'min-h-[48px] w-full border border-border bg-white px-4 text-sm outline-none transition focus:border-accent focus:ring-1 focus:ring-accent';

  return (
    <Layout>
      <Helmet>
        <title>Kontak & Permintaan Penawaran — HS Beton</title>
        <meta
          name="description"
          content="Hubungi HS Beton untuk penawaran beton precast. Isi form permintaan penawaran atau chat WhatsApp sales kami di Cilegon, Banten."
        />
      </Helmet>

      <section className="border-b border-border bg-[hsl(var(--muted))]">
        <div className="rail py-16 lg:py-20">
          <p className="eyebrow mb-3">Hubungi Kami</p>
          <h1 className="display max-w-3xl text-5xl font-bold uppercase leading-[0.95] sm:text-6xl">
            Minta penawaran proyek
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Sampaikan jenis produk, volume, dan lokasi kirim. Tim kami akan membalas segera mungkin.
          </p>
        </div>
      </section>

      <section className="rail grid gap-12 py-16 lg:grid-cols-[1.15fr_1fr] lg:py-24">
        <div className="border border-border bg-white p-6 sm:p-8">
          {status === 'success' ? (
            <div className="flex min-h-[420px] flex-col items-start justify-center">
              <CheckCircle2 className="h-10 w-10 text-accent" strokeWidth={1.75} />
              <h2 className="display mt-5 text-3xl font-bold uppercase">Permintaan terkirim</h2>
              <p className="mt-3 max-w-md text-sm text-muted-foreground">
                Terima kasih. Tim kami akan menghubungi Anda dalam jam kerja. Untuk kebutuhan
                mendesak, silakan langsung telepon WhatsApp.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={waLink()} target="_blank" rel="noreferrer" className="inline-flex min-h-[48px] items-center bg-accent px-6 text-xs font-semibold uppercase tracking-[0.12em] text-[hsl(var(--accent-foreground))]">
                  Chat WhatsApp
                </a>
                <button type="button" onClick={() => setStatus('idle')} className="inline-flex min-h-[48px] items-center border border-border px-6 text-xs font-semibold uppercase tracking-[0.12em]">
                  Kirim permintaan lain
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.14em]">Nama <span className="text-accent">*</span></label>
                  <input id="name" className={inputCls} value={form.name} onChange={set('name')} placeholder="Nama lengkap" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-xs font-semibold uppercase tracking-[0.14em]">Perusahaan</label>
                  <input id="company" className={inputCls} value={form.company} onChange={set('company')} placeholder="PT / CV" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-[0.14em]">Telepon / WA <span className="text-accent">*</span></label>
                  <input id="phone" className={inputCls} value={form.phone} onChange={set('phone')} placeholder="08xx xxxx xxxx" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.14em]">Email</label>
                  <input id="email" type="email" className={inputCls} value={form.email} onChange={set('email')} placeholder="nama@perusahaan.co.id" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="product" className="text-xs font-semibold uppercase tracking-[0.14em]">Produk yang dibutuhkan</label>
                <select id="product" className={inputCls} value={form.product} onChange={set('product')}>
                  <option value="">Pilih produk</option>
                  {products.map((p) => (
                    <option key={p.slug} value={p.name}>{p.name}</option>
                  ))}
                  <option value="Custom / lainnya">Custom / lainnya</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.14em]">Detail kebutuhan</label>
                <textarea id="message" rows={5} className={`${inputCls} py-3`} value={form.message} onChange={set('message')} placeholder="Volume, ukuran, lokasi kirim, dan target jadwal." />
              </div>
              {error && <p className="border-l-2 border-destructive bg-destructive/5 px-4 py-3 text-sm text-destructive">{error}</p>}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 bg-accent px-8 text-sm font-semibold uppercase tracking-[0.14em] text-[hsl(var(--accent-foreground))] transition disabled:opacity-60 active:scale-[0.99] sm:w-auto"
              >
                {status === 'loading' && <Loader2 className="h-4 w-4 animate-spin" />}
                {status === 'loading' ? 'Mengirim...' : 'Kirim Permintaan'}
              </button>
            </form>
          )}
        </div>

        <aside className="space-y-px bg-border">
          <div className="bg-[hsl(var(--primary))] p-7 text-white">
            <p className="eyebrow mb-3">Respon Tercepat</p>
            <h2 className="display text-2xl font-bold uppercase">WhatsApp Sales</h2>
            <p className="mt-2 text-sm text-white/70">{WA_DISPLAY}</p>
            <a href={waLink()} target="_blank" rel="noreferrer" className="mt-5 inline-flex min-h-[48px] items-center bg-accent px-6 text-xs font-semibold uppercase tracking-[0.12em] text-[hsl(var(--accent-foreground))]">
              Chat Sekarang
            </a>
          </div>
          {[
            [MapPin, 'Alamat Pabrik', ADDRESS],
            [Mail, 'Email', EMAIL],
            [Phone, 'Telepon Kantor', '(+62) 895 424 035 145'],
            [Clock, 'Jam Operasional', 'Senin–Jumat 08.00–17.00 | Sabtu 09.00–13.00'],
          ].map(([Icon, title, body]) => (
            <div key={title} className="flex gap-4 bg-white p-7">
              <Icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.75} />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em]">{title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </div>
          ))}
        </aside>
      </section>
    </Layout>
  );
}
