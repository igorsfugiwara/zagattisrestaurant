import type { Metadata } from 'next'
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

export const metadata: Metadata = {
  metadataBase: new URL('https://delmastrosp.com.br'),
  title: 'Del Mastro | Restaurante Italiano na Av. Paulista',
  description:
    'Del Mastro — restaurante italiano no coração da Av. Paulista. Massas frescas artesanais, risotos e executivos preparados com ingredientes selecionados. São Paulo, SP.',
  keywords: 'restaurante italiano, Av. Paulista, massas artesanais, risoto, almoço executivo, São Paulo',
  openGraph: {
    title: 'Del Mastro | Restaurante Italiano na Av. Paulista',
    description: 'Massas artesanais, risotos e executivos no coração de São Paulo.',
    images: [{ url: '/fotos/fettuccine.jpeg' }],
    locale: 'pt_BR',
    type: 'website',
  },
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
