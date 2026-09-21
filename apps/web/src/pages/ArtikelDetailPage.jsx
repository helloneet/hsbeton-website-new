import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import Layout from '@/components/Layout';
import { waLink } from '@/data/site';

const articles = {
  'u-ditch': {
    category: 'DRAINASE BETON',
    title: 'U-DITCH MUTU K-350',
    subtitle:
      'Saluran drainase beton pracetak, kuat dan presisi untuk berbagai skala proyek.',
    description:
      'U-Ditch adalah saluran drainase beton pracetak berbentuk U yang berfungsi untuk mengalirkan air hujan dan air limbah pada proyek jalan, kawasan industri, hingga perumahan. HS Beton memproduksi U-Ditch dengan mutu beton K-350, yaitu beton dengan kuat tekan tinggi yang mampu menahan beban berat dan tekanan tanah dalam jangka panjang. Karena diproduksi secara pracetak di pabrik, U-Ditch dari HS Beton memiliki dimensi yang presisi, permukaan yang rapi, dan siap pasang langsung di lokasi proyek tanpa proses pengecoran di tempat.',
    uses: [
      'Saluran drainase pada proyek jalan raya dan jalan tol',
      'Sistem pembuangan air pada kawasan industri dan pergudangan',
      'Saluran irigasi untuk proyek pertanian dan perkebunan',
      'Drainase kawasan perumahan, ruko, dan area komersial',
    ],
    advantages: [
      'Mutu beton K-350 tahan terhadap beban kendaraan berat dan tekanan tanah',
      'Dimensi presisi dan permukaan rapi hasil produksi pracetak',
      'Pemasangan lebih cepat dibanding metode cor di tempat, sehingga menghemat waktu pengerjaan proyek',
      'Tahan terhadap cuaca ekstrem dan minim perawatan dalam jangka panjang',
      'Risiko keretakan dan kebocoran lebih rendah dibanding beton konvensional yang dicor manual',
    ],
    specifications: [
      "Mutu beton K-350 (setara fc' sekitar 29,05 MPa)",
      'Tersedia berbagai ukuran lebar dan tinggi sesuai kebutuhan proyek',
      'Dapat diproduksi custom size sesuai gambar kerja dan spesifikasi teknis proyek',
    ],
    offer:
      'HS Beton memberikan harga kompetitif untuk pembelian dalam jumlah besar dan kebutuhan proyek skala besar, dilengkapi dengan layanan pengiriman ke lokasi proyek serta konsultasi gratis untuk membantu menentukan ukuran dan jumlah U-Ditch yang dibutuhkan.',
    cta:
      'Butuh U-Ditch untuk proyek Anda? Hubungi tim HS Beton sekarang melalui WhatsApp atau telepon untuk konsultasi kebutuhan dan penawaran harga terbaik.',
  },

  'box-culvert': {
    category: 'DRAINASE BETON',
    title: 'BOX CULVERT MUTU K-350',
    subtitle:
      'Gorong-gorong beton pracetak berkapasitas besar untuk infrastruktur berat.',
    description:
      'Box Culvert adalah gorong-gorong beton pracetak berbentuk kotak yang dirancang untuk menyalurkan aliran air dalam volume besar di bawah permukaan jalan atau area konstruksi. HS Beton memproduksi Box Culvert dengan mutu beton K-350 sehingga mampu menahan beban struktural yang berat, termasuk beban lalu lintas kendaraan di atasnya. Desain kotak pada Box Culvert memberikan kapasitas aliran air yang lebih besar dibandingkan saluran berbentuk U, menjadikannya pilihan utama untuk proyek infrastruktur skala besar.',
    uses: [
      'Gorong-gorong di bawah jalan raya dan jalan tol',
      'Saluran air dan sistem drainase pada proyek infrastruktur skala besar',
      'Jembatan kecil dan box culvert crossing',
      'Sistem drainase kawasan industri dengan volume air tinggi',
    ],
    advantages: [
      'Mutu beton K-350 mampu menahan beban lalu lintas kendaraan berat di atasnya',
      'Kapasitas aliran air lebih besar dibanding saluran berbentuk U',
      'Proses pracetak menjamin kekuatan struktural yang konsisten pada setiap unit',
      'Instalasi lebih cepat dan efisien dibanding pengecoran langsung di lokasi',
      'Tahan lama dan minim perawatan meski terus menerus menerima beban dan paparan cuaca',
    ],
    specifications: [
      'Mutu beton K-350',
      'Tersedia berbagai ukuran sesuai kebutuhan debit air dan beban proyek',
      'Dapat diproduksi sesuai spesifikasi teknis dan gambar kerja proyek',
    ],
    offer:
      'HS Beton menawarkan harga bersaing untuk pengadaan dalam volume besar, didukung tim teknis yang membantu menentukan ukuran Box Culvert sesuai kebutuhan drainase proyek, serta layanan pengiriman ke lokasi proyek di berbagai wilayah.',
    cta:
      'Diskusikan kebutuhan Box Culvert proyek Anda dengan tim HS Beton. Hubungi sekarang untuk mendapatkan penawaran harga dan jadwal pengiriman.',
  },

  'road-barrier': {
    category: 'INFRASTRUKTUR',
    title: 'ROAD BARRIER MUTU K-350',
    subtitle:
      'Pembatas jalan beton pracetak, standar keselamatan dan tahan benturan.',
    description:
      'Road Barrier adalah pembatas jalan beton pracetak yang berfungsi sebagai pemisah lajur, pengaman tepi jalan, dan pembatas area konstruksi. HS Beton memproduksi Road Barrier dengan mutu beton K-350 agar mampu menahan benturan kendaraan dan tekanan lalu lintas secara berulang, sehingga tetap aman digunakan dalam jangka panjang pada berbagai kondisi proyek.',
    uses: [
      'Pembatas lajur pada jalan raya dan jalan tol',
      'Pengaman area konstruksi dan proyek infrastruktur',
      'Pembatas sementara pada area parkir dan kawasan industri',
      'Pengarah lalu lintas pada proyek perbaikan dan pemeliharaan jalan',
    ],
    advantages: [
      'Mutu beton K-350 memberikan ketahanan terhadap benturan kendaraan',
      'Bentuk mengikuti standar keselamatan jalan yang umum digunakan pada proyek infrastruktur',
      'Permukaan halus dan presisi karena diproduksi secara pracetak',
      'Mudah dipindahkan dan dipasang ulang sesuai perubahan kebutuhan proyek',
      'Tahan terhadap cuaca dan tidak mudah retak dalam penggunaan jangka panjang',
    ],
    specifications: [
      'Mutu beton K-350',
      'Ukuran standar sesuai kebutuhan proyek jalan',
      'Tersedia dalam jumlah besar untuk kebutuhan proyek skala nasional',
    ],
    offer:
      'HS Beton memberikan harga kompetitif untuk pengadaan dalam skala proyek, ketersediaan stok untuk pengiriman cepat, serta dukungan teknis terkait pemasangan Road Barrier di lapangan.',
    cta:
      'Pesan Road Barrier untuk kebutuhan proyek Anda. Hubungi tim HS Beton sekarang untuk cek ketersediaan stok dan harga.',
  },

  'pagar-panel': {
    category: 'PAGAR BETON',
    title: 'PAGAR PANEL BETON MUTU K-350',
    subtitle:
      'Sistem pagar pracetak yang kokoh, cepat dipasang, dan fleksibel sesuai kebutuhan tinggi area.',
    description:
      'Pagar Panel Beton adalah sistem pagar pracetak yang terdiri dari panel panel beton yang dipasang bertingkat pada tiang kolom. HS Beton memproduksi Pagar Panel Beton dengan mutu beton K-350 dan menyediakan pilihan tinggi mulai dari 1,6 meter hingga 2,4 meter, sehingga dapat disesuaikan dengan tingkat keamanan yang dibutuhkan pada masing masing area, mulai dari kawasan industri hingga perumahan.',
    uses: [
      'Pagar keliling pabrik dan kawasan industri',
      'Pagar pembatas gudang dan area logistik',
      'Pagar keamanan perumahan dan kompleks perkantoran',
      'Pembatas lahan kosong dan area proyek yang sedang berjalan',
    ],
    advantages: [
      'Mutu beton K-350 memberikan kekuatan struktural dan ketahanan jangka panjang',
      'Pilihan tinggi 1,6 sampai 2,4 meter memberikan fleksibilitas sesuai kebutuhan keamanan area',
      'Sistem panel mempercepat proses pemasangan dibanding tembok bata konvensional',
      'Minim perawatan dan tahan terhadap cuaca ekstrem',
      'Tampilan rapi dan seragam karena setiap panel diproduksi secara pracetak',
    ],
    specifications: [
      'Mutu beton K-350',
      'Tinggi tersedia: 1,6 m, 1,8 m, 2,0 m, hingga 2,4 m',
      'Dapat disesuaikan dengan tinggi kolom dan kebutuhan teknis proyek',
    ],
    offer:
      'HS Beton menawarkan harga per panel yang kompetitif untuk pembelian dalam jumlah besar, dilengkapi konsultasi gratis untuk menentukan tinggi dan jumlah panel sesuai luas area, serta layanan pengiriman ke lokasi proyek.',
    cta:
      'Tanyakan harga Pagar Panel Beton sesuai tinggi kebutuhan Anda. Hubungi tim HS Beton sekarang.',
  },

  'buis-beton': {
    category: 'DRAINASE BETON',
    title: 'BUIS BETON MUTU K-350',
    subtitle:
      'Beton pracetak berongga untuk sumur, saluran resapan, dan drainase vertikal.',
    description:
      'Buis Beton adalah beton pracetak berbentuk silinder berongga yang umum digunakan sebagai dinding sumur, saluran resapan, dan konstruksi drainase vertikal. HS Beton memproduksi Buis Beton dengan mutu beton K-350 dan menyediakan dua pilihan panjang, yaitu 50 cm dan 100 cm, sehingga memudahkan penyesuaian dengan kedalaman dan kebutuhan teknis proyek, baik untuk skala rumah tangga maupun proyek infrastruktur.',
    uses: [
      'Dinding sumur resapan dan sumur bor',
      'Saluran drainase vertikal pada proyek infrastruktur',
      'Konstruksi gorong-gorong kecil dan saluran air rumah tangga',
      'Kebutuhan proyek skala kecil hingga menengah',
    ],
    advantages: [
      'Mutu beton K-350 menjamin kekuatan dan daya tahan meski terpendam dalam tanah',
      'Dua pilihan panjang, 50 cm dan 100 cm, mempermudah penyesuaian dengan kedalaman proyek',
      'Proses pracetak menghasilkan bentuk presisi dan mudah disusun bertingkat',
      'Tahan terhadap tekanan tanah dan air dalam jangka panjang',
      'Cocok untuk kebutuhan proyek kecil maupun pengadaan dalam jumlah besar',
    ],
    specifications: [
      'Mutu beton K-350',
      'Panjang tersedia: 50 cm dan 100 cm',
      'Diameter dapat disesuaikan dengan kebutuhan proyek',
    ],
    offer:
      'Stok Buis Beton tersedia untuk pengiriman cepat, dengan harga bersaing baik untuk pembelian satuan maupun dalam jumlah grosir. Tim HS Beton juga siap membantu konsultasi untuk menentukan jumlah dan ukuran yang sesuai kebutuhan proyek Anda.',
    cta:
      'Cek ketersediaan stok Buis Beton hari ini. Hubungi tim HS Beton sekarang melalui WhatsApp atau telepon.',
  },

  'kanstin': {
    category: 'INFRASTRUKTUR',
    title: 'KANSTIN MUTU K-350',
    subtitle:
      'Pembatas jalan dan trotoar beton pracetak, presisi dan tahan lama.',
    description:
      'Kanstin adalah beton pracetak yang berfungsi sebagai pembatas antara jalan, trotoar, taman, dan area parkir. HS Beton memproduksi Kanstin dengan mutu beton K-350 agar tahan terhadap beban kendaraan dan aktivitas pejalan kaki secara terus menerus, sekaligus memberikan tampilan yang rapi dan tertata pada penataan kawasan proyek.',
    uses: [
      'Pembatas jalan dan trotoar pada proyek infrastruktur',
      'Pembatas taman dan area hijau pada proyek perumahan dan komersial',
      'Pembatas area parkir dan jalur pejalan kaki',
      'Elemen estetika sekaligus fungsi struktural pada penataan kawasan',
    ],
    advantages: [
      'Mutu beton K-350 memberikan ketahanan terhadap beban dan tekanan yang berulang',
      'Bentuk presisi dan permukaan rapi hasil produksi pracetak',
      'Pemasangan lebih cepat dibanding kanstin yang dicor langsung di tempat',
      'Tahan terhadap cuaca dan tidak mudah retak',
      'Tersedia dalam jumlah besar untuk kebutuhan proyek skala luas',
    ],
    specifications: [
      'Mutu beton K-350',
      'Ukuran standar sesuai kebutuhan proyek jalan dan trotoar',
      'Dapat disesuaikan dengan spesifikasi teknis proyek',
    ],
    offer:
      'HS Beton memberikan harga kompetitif untuk pengadaan dalam volume besar, stok yang siap dikirim cepat ke lokasi proyek, serta konsultasi teknis gratis untuk membantu menentukan kebutuhan Kanstin Anda.',
    cta:
      'Pesan Kanstin untuk proyek Anda sekarang. Hubungi tim HS Beton untuk mendapatkan penawaran terbaik.',
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
          <li key={index} className="flex gap-3 text-base leading-relaxed text-foreground/70">
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
              Artikel yang kamu cari tidak tersedia atau alamat artikelnya tidak sesuai.
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
        <meta
          name="description"
          content={article.subtitle}
        />
      </Helmet>

      {/* HERO */}
      <section className="bg-[hsl(var(--primary))] text-white">
        <div className="rail py-20 sm:py-28">
          <Link
            to="/artikel"
            className="mb-10 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-white/60 transition hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Artikel
          </Link>

          <p className="eyebrow mb-5">
            {article.category}
          </p>

          <h1 className="display max-w-5xl text-5xl font-bold uppercase leading-[0.95] sm:text-7xl lg:text-8xl">
            {article.title}
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/70 sm:text-xl">
            {article.subtitle}
          </p>
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
              <Section
                title="Kegunaan"
                items={article.uses}
              />

              <Section
                title="Keunggulan"
                items={article.advantages}
              />

              <Section
                title="Spesifikasi"
                items={article.specifications}
              />

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

                <p className="eyebrow mb-4">
                  BUTUH PRODUK INI?
                </p>

                <h2 className="display max-w-2xl text-3xl font-bold uppercase leading-tight sm:text-4xl">
                  Konsultasikan kebutuhan proyek Anda
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
                  {article.cta}
                </p>

                <a
                  href={waLink()}
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
              <p className="eyebrow mb-4">
                PRODUK HS BETON
              </p>

              <h3 className="display text-2xl font-bold uppercase">
                {article.title}
              </h3>

              <div className="my-6 h-px bg-border" />

              <p className="text-sm leading-relaxed text-foreground/60">
                Produk beton precast untuk mendukung kebutuhan proyek
                infrastruktur, kawasan industri, perumahan, dan konstruksi.
              </p>

              <a
                href={waLink()}
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