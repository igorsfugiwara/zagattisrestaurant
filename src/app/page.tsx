import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import styles from './page.module.scss'

const BASE_URL = 'https://delmastrosp.netlify.app'

export const metadata: Metadata = {
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    url: BASE_URL,
  },
}

const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  '@id': `${BASE_URL}/#restaurant`,
  name: 'Del Mastro',
  description:
    'Restaurante italiano no coração da Av. Paulista. Massas frescas artesanais, risotos cremosos e executivos preparados com carinho.',
  url: BASE_URL,
  telephone: '+55-11-3262-2020',
  email: 'delmastro.info@gmail.com',
  servesCuisine: ['Italian', 'Mediterranean'],
  priceRange: '$$',
  currenciesAccepted: 'BRL',
  paymentAccepted: 'Cash, Credit Card',
  image: `${BASE_URL}/fotos/fettuccine.jpeg`,
  logo: `${BASE_URL}/logo_wbg.png`,
  hasMenu: `${BASE_URL}/menu`,
  acceptsReservations: 'True',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Paulista, 1159, Loja 2',
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    postalCode: '01311-200',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -23.5646,
    longitude: -46.6527,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '15:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '12:30',
      closes: '16:00',
    },
  ],
  sameAs: ['https://www.instagram.com/delmastro_restaurante'],
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={restaurantSchema} />

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <video
          className={styles.heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroOverlay} aria-hidden="true" />

        <div className={styles.heroContent}>
          <Image
            src="/logo_wbg.png"
            alt="Del Mastro"
            width={220}
            height={80}
            className={styles.heroLogo}
            priority
          />
          <p className={styles.heroTagline}>Del Mastro — a Itália começa aqui.</p>
          <div className={styles.heroCtas}>
            <Link href="/menu" className={styles.btnPrimary}>
              Ver Cardápio
            </Link>
            <a
              href="https://wa.me/551132622020"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnSecondary}
            >
              Reservar pelo WhatsApp
            </a>
          </div>
        </div>

        <div className={styles.scrollIndicator} aria-hidden="true">
          <div className={styles.scrollLine} />
        </div>
      </section>

      {/* ── SOBRE ── */}
      <section className={styles.sobre} id="sobre">
        <div className={styles.sobreGrid}>
          <div>
            <span className={styles.sectionLabel}>Nossa história</span>
            <h1 className={styles.sectionTitle}>Um refúgio<br />gastronômico</h1>
            <div className={styles.goldLine} />
            <p className={styles.sectionText}>
              Bem-vindo ao Del Mastro, seu refúgio gastronômico no coração da Av. Paulista.
              Massas, risotos e executivos preparados com carinho. Mais que um restaurante:
              um espaço para sentir-se acolhido.
            </p>
          </div>
          <div className={styles.sobreImageWrapper}>
            <Image
              src="/fotos/ancho1.jpeg"
              alt="Prato do Del Mastro — Ancho grelhado"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* ── MENU PREVIEW ── */}
      <section className={styles.menuPreview}>
        <div className={styles.menuGrid}>
          <div className={styles.menuImageWrapper}>
            <Image
              src="/fotos/fettuccine.jpeg"
              alt="Fettuccine artesanal Del Mastro"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.menuContent}>
            <span className={styles.sectionLabel}>Cardápio</span>
            <h2 className={styles.sectionTitle}>Massas e risotos<br />artesanais</h2>
            <div className={styles.goldLine} />
            <p className={styles.sectionText}>
              Cada prato começa com ingredientes selecionados e termina com a dedicação
              de quem cozinha com amor. Nossas massas são preparadas diariamente, e
              os risotos chegam à sua mesa no ponto exato.
            </p>
            <Link href="/menu" className={styles.goldLink}>
              Ver cardápio completo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── GALERIA PREVIEW ── */}
      <section className={styles.galleryPreview}>
        <div className={styles.galleryHeader}>
          <span className={styles.sectionLabel}>Galeria</span>
          <h2 className={styles.sectionTitle}>Cada prato,<br />uma obra</h2>
          <div className={styles.goldLine} />
        </div>
        <div className={styles.galleryGrid}>
          {[
            { src: '/fotos/parmegiana.jpeg', alt: 'Frango à Parmegiana — Del Mastro' },
            { src: '/fotos/risoto-funghi.jpeg', alt: 'Risoto de Funghi — Del Mastro' },
            { src: '/fotos/fettuccine.jpeg', alt: 'Fettuccine artesanal — Del Mastro' },
          ].map((photo) => (
            <div key={photo.src} className={styles.galleryItem}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
        <div className={styles.galleryFooter}>
          <Link href="/galeria" className={styles.goldLink}>
            Ver galeria completa
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── CONTATO ── */}
      <section className={styles.contato} id="contato">
        <div className={styles.contatoGrid}>
          <div className={styles.contatoInfo}>
            <div>
              <span className={styles.sectionLabel}>Contato</span>
              <h2 className={styles.sectionTitle}>Venha nos<br />visitar</h2>
              <div className={styles.goldLine} />
            </div>

            <div className={styles.contatoItems}>
              <div className={styles.contatoItem}>
                <span className={styles.contatoIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <div>
                  <p className={styles.contatoLabel}>Endereço</p>
                  <address className={styles.contatoValue} style={{ fontStyle: 'normal' }}>
                    Av. Paulista, 1159 – Loja 2<br />São Paulo – SP, 01311-200
                  </address>
                </div>
              </div>

              <div className={styles.contatoItem}>
                <span className={styles.contatoIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </span>
                <div>
                  <p className={styles.contatoLabel}>WhatsApp / Reservas</p>
                  <a href="https://wa.me/551132622020" target="_blank" rel="noopener noreferrer" className={styles.contatoValue}>
                    +55 (11) 3262-2020
                  </a>
                </div>
              </div>

              <div className={styles.contatoItem}>
                <span className={styles.contatoIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <div>
                  <p className={styles.contatoLabel}>E-mail</p>
                  <a href="mailto:delmastro.info@gmail.com" className={styles.contatoValue}>
                    delmastro.info@gmail.com
                  </a>
                </div>
              </div>

              <div className={styles.contatoItem}>
                <span className={styles.contatoIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </span>
                <div>
                  <p className={styles.contatoLabel}>Instagram</p>
                  <a href="https://instagram.com/delmastro_restaurante" target="_blank" rel="noopener noreferrer" className={styles.contatoValue}>
                    @delmastro_restaurante
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.horario}>
              <p className={styles.horarioTitle}>Horário de funcionamento</p>
              <p className={styles.horarioLine}>Seg – Sex: 08h às 15h30</p>
              <p className={styles.horarioLine}>Sábado: 12h30 às 16h</p>
              <p className={styles.horarioLine} style={{ marginTop: '0.5rem', color: 'var(--gold)' }}>
                Take away disponível via WhatsApp
              </p>
            </div>
          </div>

          <div className={styles.mapWrapper}>
            <iframe
              src="https://maps.google.com/maps?q=Av.+Paulista+1159+Sao+Paulo+SP&output=embed"
              title="Localização Del Mastro — Av. Paulista, 1159, São Paulo"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  )
}
