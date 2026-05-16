import type { Metadata } from 'next'
import { midiaItems } from '@/data/midia'
import styles from './page.module.scss'

const BASE_URL = 'https://delmastrosp.netlify.app'

export const metadata: Metadata = {
  title: 'Mídia',
  description:
    'Del Mastro na mídia: aparições no Estadão, Veja São Paulo e indicação Bib Gourmand do Guia Michelin. Reconhecimentos que celebram nossa cozinha italiana artesanal.',
  alternates: {
    canonical: `${BASE_URL}/midia`,
  },
  openGraph: {
    title: 'Del Mastro | Mídia',
    description: 'Aparições na mídia e reconhecimentos do Del Mastro, restaurante italiano na Av. Paulista.',
    url: `${BASE_URL}/midia`,
    images: [
      {
        url: `${BASE_URL}/fotos/fettuccine.jpeg`,
        width: 1200,
        height: 800,
        alt: 'Del Mastro — Restaurante Italiano',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Del Mastro | Mídia',
    description: 'Aparições na mídia e reconhecimentos do Del Mastro.',
    images: [`${BASE_URL}/fotos/fettuccine.jpeg`],
  },
}

const badgeIcons: Record<string, string> = {
  'matéria': '✦',
  'indicação': '◈',
  'prêmio': '★',
  'entrevista': '◉',
}

export default function MidiaPage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <span className={styles.sectionLabel}>Na imprensa</span>
        <h1 className={styles.pageTitle}>Mídia</h1>
        <div className={styles.goldLine} />
        <p className={styles.subtitle}>
          Reconhecimentos que nos enchem de orgulho e renovam o compromisso
          com a excelência em cada prato.
        </p>
      </div>

      <div className={styles.grid}>
        {midiaItems.map((item) => (
          <article key={item.id} className={styles.card}>
            <span className={styles.cardBadge}>
              {badgeIcons[item.tipo]} {item.tipo}
            </span>
            <div>
              <p className={styles.cardPublicacao}>{item.publicacao}</p>
              <p className={styles.cardData}>{item.data}</p>
            </div>
            <h2 className={styles.cardTitulo}>{item.titulo}</h2>
            <p className={styles.cardDesc}>{item.descricao}</p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cardLink}
            >
              Ler matéria completa
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
          </article>
        ))}
      </div>
    </div>
  )
}
