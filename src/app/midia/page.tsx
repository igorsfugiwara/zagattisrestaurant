import type { Metadata } from 'next'
import { midiaItems } from '@/data/midia'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: 'Del Mastro | Mídia',
  description:
    'Del Mastro na mídia: aparições em publicações e guias gastronômicos. Reconhecimentos que celebram nossa cozinha italiana artesanal.',
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
