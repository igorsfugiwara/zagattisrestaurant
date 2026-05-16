import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import '@/styles/globals.scss'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const BASE_URL = 'https://delmastrosp.netlify.app'

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: 'Del Mastro | Restaurante Italiano na Av. Paulista',
    template: 'Del Mastro | %s',
  },

  description:
    'Del Mastro — restaurante italiano no coração da Av. Paulista. Massas frescas artesanais, risotos cremosos e executivos preparados com carinho. Segunda a sexta, das 8h às 15h30.',

  keywords: [
    'restaurante italiano São Paulo',
    'Del Mastro restaurante',
    'massa artesanal Av. Paulista',
    'risoto São Paulo',
    'almoço executivo Paulista',
    'restaurante Av. Paulista',
    'culinária italiana São Paulo',
    'massa fresca São Paulo',
  ],

  authors: [{ name: 'Del Mastro', url: BASE_URL }],
  creator: 'Del Mastro',
  publisher: 'Del Mastro',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: BASE_URL,
    siteName: 'Del Mastro',
    title: 'Del Mastro | Restaurante Italiano na Av. Paulista',
    description:
      'Massas artesanais, risotos e executivos no coração da Av. Paulista, São Paulo.',
    images: [
      {
        url: `${BASE_URL}/fotos/fettuccine.jpeg`,
        width: 1200,
        height: 800,
        alt: 'Del Mastro — Fettuccine artesanal',
        type: 'image/jpeg',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@delmastro_restaurante',
    creator: '@delmastro_restaurante',
    title: 'Del Mastro | Restaurante Italiano na Av. Paulista',
    description:
      'Massas artesanais, risotos e executivos no coração da Av. Paulista, São Paulo.',
    images: [`${BASE_URL}/fotos/fettuccine.jpeg`],
  },

  icons: {
    icon: [
      { url: '/logo_wbg.png', type: 'image/png' },
    ],
    apple: [
      { url: '/logo_wbg.png', type: 'image/png' },
    ],
    shortcut: '/logo_wbg.png',
  },

  alternates: {
    canonical: BASE_URL,
    languages: {
      'pt-BR': BASE_URL,
    },
  },

  category: 'food & drink',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
