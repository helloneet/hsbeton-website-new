export const WA_NUMBER = '6289630672153';
export const WA_DISPLAY = '+62 896-3067-2153';
export const ADDRESS= 'Tangerang Selatan, Banten ';
export const EMAIL = 'hsbetonid@gmail.com';

export const waLink = (text) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text || 'Halo HS Beton, saya ingin meminta penawaran Beton.')}`;

export const products = [
  {
    slug: 'u-ditch',
    name: 'U-Ditch',
    spec: 'Mutu K-350',
    desc: 'Digunakan sebagai saluran drainase untuk kawasan industri, jalan, perumahan, hingga proyek infrastruktur dengan sambungan yang presisi dan mutu terjaga.',
    image: 'https://images.hostinger.com/c01d17eb-4966-4b92-b42d-70199d5a9d51.png',
  },
  {
    slug: 'box-culvert',
    name: 'Box Culvert',
    spec: 'Mutu K-350',
    desc: 'Solusi gorong-gorong beton pracetak untuk saluran air, crossing jalan, dan kebutuhan drainase bawah tanah dengan kekuatan tinggi.',
    image: 'https://images.hostinger.com/a25c4800-6010-434a-a087-38bc6063cb0f.png',
  },
  {
    slug: 'road-barrier',
    name: 'Road Barrier',
    spec: 'Mutu K-350',
    desc: 'Pembatas jalan beton untuk pengaturan lalu lintas, pengamanan area proyek, serta pekerjaan jalan dan konstruksi.',
    image: 'https://images.hostinger.com/6c219647-811d-489a-9bc0-8373fafecb3b.png',
  },
  {
    slug: 'pagar-panel',
    name: 'Pagar Panel Beton',
    spec: 'Mutu K-350. Tinggi 1,6 – 2,4 m',
    desc: 'Sistem pagar beton pracetak yang kokoh, praktis dipasang, dan cocok untuk area industri, proyek, maupun kawasan komersial.',
    image: 'https://images.hostinger.com/6acae4fe-1d69-423c-99ca-399b3c263bfa.png',
  },
  {
    slug: 'buis-beton',
    name: 'Buis Beton',
    spec: 'Mutu K-350 · Panjang 50 & 100 cm',
    desc: 'Pipa beton pracetak untuk saluran drainase, sumur resapan, dan septic tank dengan daya tahan tinggi.',
    image: 'https://images.hostinger.com/56fab5ae-b74f-4cba-81fc-febeb4f69016.png',
  },
  {
    slug: 'kanstin',
    name: 'Kanstin',
    spec: 'Mutu K-350',
    desc: 'Pembatas trotoar, taman, dan jalan dengan dimensi presisi untuk hasil pemasangan yang rapi dan kuat.',
    image: 'https://images.hostinger.com/f4af93b8-099a-4379-ae61-490ccf0c01da.png',
  },
];
