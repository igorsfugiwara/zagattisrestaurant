'use client'

import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import styles from './GalleryClient.module.scss'

interface Photo {
  src: string
  alt: string
}

interface GalleryClientProps {
  photos: Photo[]
}

export default function GalleryClient({ photos }: GalleryClientProps) {
  const [lightbox, setLightbox] = useState<Photo | null>(null)

  const closeLightbox = useCallback(() => setLightbox(null), [])

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [lightbox, closeLightbox])

  return (
    <>
      <div className={styles.page}>
        <div className={styles.header}>
          <span className={styles.sectionLabel}>Nossa galeria</span>
          <h1 className={styles.pageTitle}>Galeria</h1>
          <div className={styles.goldLine} />
          <p className={styles.subtitle}>
            Cada prato é uma obra. Clique nas fotos para ampliar.
          </p>
        </div>

        <div className={styles.grid}>
          {photos.map((photo) => (
            <button
              key={photo.src}
              className={styles.gridItem}
              onClick={() => setLightbox(photo)}
              aria-label={`Ver ${photo.alt}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={600}
                height={400}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className={styles.lightboxOverlay}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
        >
          <button
            className={styles.lightboxClose}
            onClick={closeLightbox}
            aria-label="Fechar"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              width={1200}
              height={900}
              className={styles.lightboxImage}
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>

          <span className={styles.lightboxCaption}>{lightbox.alt}</span>
        </div>
      )}
    </>
  )
}
