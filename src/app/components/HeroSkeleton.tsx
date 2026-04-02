import styles from './Skeleton.module.css'

export default function HeroSkeleton() {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'flex-end', padding: '8rem 4rem 6rem' }}>
      <div style={{ width: '100%', maxWidth: 700 }}>
        <div className={styles.line} style={{ width: '120px', marginBottom: '2rem' }} />
        <div className={styles.title} style={{ height: '7rem', marginBottom: '0.5rem' }} />
        <div className={styles.title} style={{ height: '7rem', width: '60%', marginBottom: '2rem' }} />
        <div className={styles.line} style={{ width: '80%' }} />
        <div className={styles.line} style={{ width: '60%', marginBottom: '2rem' }} />
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div className={styles.skeleton} style={{ width: 160, height: 44 }} />
          <div className={styles.skeleton} style={{ width: 140, height: 44 }} />
        </div>
      </div>
    </section>
  )
}