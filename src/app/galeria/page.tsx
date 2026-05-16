import type { Metadata } from 'next'
import GalleryClient from '@/components/GalleryClient'

const BASE_URL = 'https://delmastrosp.netlify.app'

export const metadata: Metadata = {
  title: 'Galeria',
  description:
    'Galeria de fotos do Del Mastro: massas frescas, risotos cremosos, pratos artesanais e o ambiente aconchegante do restaurante na Av. Paulista.',
  alternates: {
    canonical: `${BASE_URL}/galeria`,
  },
  openGraph: {
    title: 'Del Mastro | Galeria',
    description: 'Cada prato é uma obra. Conheça a galeria do Del Mastro.',
    url: `${BASE_URL}/galeria`,
    images: [
      {
        url: `${BASE_URL}/fotos/parmegiana.jpeg`,
        width: 1200,
        height: 800,
        alt: 'Frango à Parmegiana — Del Mastro',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Del Mastro | Galeria',
    description: 'Cada prato é uma obra. Conheça a galeria do Del Mastro.',
    images: [`${BASE_URL}/fotos/parmegiana.jpeg`],
  },
}

const photos = [
  { src: '/fotos/fettuccine.jpeg', alt: 'Fettuccine artesanal' },
  { src: '/fotos/risoto-funghi.jpeg', alt: 'Risoto de Funghi' },
  { src: '/fotos/parmegiana.jpeg', alt: 'Frango à Parmegiana' },
  { src: '/fotos/ancho1.jpeg', alt: 'Ancho grelhado' },
  { src: '/fotos/rigatoni-carbonara.jpeg', alt: 'Rigatoni à Carbonara' },
  { src: '/fotos/risoto-costela.jpeg', alt: 'Risoto de Costela' },
  { src: '/fotos/pesto-ricota.jpeg', alt: 'Pesto com Ricota' },
  { src: '/fotos/saint-peter.jpeg', alt: 'Saint Peter grelhado' },
  { src: '/fotos/risoto-camarao.jpeg', alt: 'Risoto de Camarão' },
  { src: '/fotos/salada.jpeg', alt: 'Salada fresca' },
  { src: '/fotos/bisteca.jpeg', alt: 'Bisteca' },
  { src: '/fotos/caprese.jpeg', alt: 'Caprese' },
  { src: '/fotos/sobrecoxa.jpeg', alt: 'Sobrecoxa italiana' },
  { src: '/fotos/risoto-carne.jpeg', alt: 'Risoto de carne' },
  { src: '/fotos/dois-molhos.jpeg', alt: 'Massa dois molhos' },
  { src: '/fotos/milanesa.jpeg', alt: 'Milanesa' },
  { src: '/fotos/rigattoni.jpeg', alt: 'Rigatoni' },
  { src: '/fotos/pesto-saint-peter.jpeg', alt: 'Pesto com Saint Peter' },
  { src: '/fotos/risoto-limao.jpeg', alt: 'Risoto ao Limão Siciliano' },
  { src: '/fotos/sopa.jpeg', alt: 'Sopa do dia' },
]

export default function GaleriaPage() {
  return <GalleryClient photos={photos} />
}
