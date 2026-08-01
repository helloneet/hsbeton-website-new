export const WA_NUMBER = '6289630672153';
export const WA_DISPLAY = '+62 896-3067-2153';
export const ADDRESS FACTORY= 'Cilegon, Banten ';
export const ADDRESS OFFICE= 'Pamulang, Tangerang Selatan ';
export const EMAIL = 'hsbetongrup@gmail.com';

export const waLink = (text) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text || 'Halo HS Beton, saya ingin meminta penawaran Beton.')}`;

export const products = [
  {
    slug: 'u-ditch',
    name: 'U-Ditch',
    spec: 'Mutu K-350 · Uk. 30x30 s/d 120x120 cm',
    desc: 'Saluran drainase terbuka dengan sambungan presisi, cocok untuk jalan raya, kawasan industri, dan perumahan.',
    image: 'https://images.hostinger.com/c01d17eb-4966-4b92-b42d-70199d5a9d51.png',
  },
  {
    slug: 'box-culvert',
    name: 'Box Culvert',
    spec: 'Mutu K-350 · Beban HS-25 / BM-100',
    desc: 'Gorong-gorong kotak tulangan ganda untuk crossing jalan dan saluran air dengan beban lalu lintas berat.',
    image: 'https://images.hostinger.com/a25c4800-6010-434a-a087-38bc6063cb0f.png',
  },
  {
    slug: 'road-barrier',
    name: 'Road Barrier',
    spec: 'Mutu K-350 · 1,5 m & 3 m',
    desc: 'Pembatas jalan untuk proyek jalan tol, area tambang, dan pengalihan lalu lintas.',
    image: 'https://images.hostinger.com/6c219647-811d-489a-9bc0-8373fafecb3b.png',
  },
  {
    slug: 'pagar-panel',
    name: 'Pagar Panel Beton',
    spec: 'Tinggi 1,6 – 2,4 m · Kolom H-Beton',
    desc: 'Pemagaran keliling proyek dan pabrik. Pemasangan cepat, tanpa pondasi basah, bisa dibongkar-pasang.',
    image: 'https://images.hostinger.com/6acae4fe-1d69-423c-99ca-399b3c263bfa.png',
  },
  {
    slug: 'buis-beton',
    name: 'Buis Beton',
    spec: 'Ø 30 – 100 cm · Panjang 50 & 100 cm',
    desc: 'Pipa beton bulat untuk drainase, sumur resapan, dan septictank dengan dinding padat anti-rembes.',
    image: 'https://images.hostinger.com/56fab5ae-b74f-4cba-81fc-febeb4f69016.png',
  },
  {
    slug: 'kanstin',
    name: 'Kanstin & Cansteen',
    spec: 'Tipe S, DKI, Trotoar · K-300',
    desc: 'Pembatas trotoar dan taman dengan permukaan halus dan dimensi seragam untuk hasil pemasangan rapi.',
    image: 'https://images.hostinger.com/f4af93b8-099a-4379-ae61-490ccf0c01da.png',
  },
];
