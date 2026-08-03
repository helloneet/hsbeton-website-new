import Uditch from '@/assets/Product/Uditch.jpg';
import BoxCulvert from '@/assets/Product/Box-Culvert.jpg';
import RoadBarrier from '@/assets/Product/Road-Barrier.jpg';
import Kanstin from '@/assets/Product/Kanstin.jpg';
import Buis from '@/assets/Product/Buis.jpg';
import Panel from '@/assets/Product/Panel.jpg';
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
    image: Uditch,
  },
  {
    slug: 'box-culvert',
    name: 'Box Culvert',
    spec: 'Mutu K-350',
    desc: 'Solusi gorong-gorong beton pracetak untuk saluran air, crossing jalan, dan kebutuhan drainase bawah tanah dengan kekuatan tinggi.',
    image: Box-Culvert,
  },
  {
    slug: 'road-barrier',
    name: 'Road Barrier',
    spec: 'Mutu K-350',
    desc: 'Pembatas jalan beton untuk pengaturan lalu lintas, pengamanan area proyek, serta pekerjaan jalan dan konstruksi.',
    image: Road-Barrier,
  },
  {
    slug: 'pagar-panel',
    name: 'Pagar Panel Beton',
    spec: 'Mutu K-350. Tinggi 1,6 – 2,4 m',
    desc: 'Sistem pagar beton pracetak yang kokoh, praktis dipasang, dan cocok untuk area industri, proyek, maupun kawasan komersial.',
    image: Panel,
  },
  {
    slug: 'buis-beton',
    name: 'Buis Beton',
    spec: 'Mutu K-350 · Panjang 50 & 100 cm',
    desc: 'Pipa beton pracetak untuk saluran drainase, sumur resapan, dan septic tank dengan daya tahan tinggi.',
    image: Buis,
  },
  {
    slug: 'kanstin',
    name: 'Kanstin',
    spec: 'Mutu K-350',
    desc: 'Pembatas trotoar, taman, dan jalan dengan dimensi presisi untuk hasil pemasangan yang rapi dan kuat.',
    image: Kanstin,
  },
];
