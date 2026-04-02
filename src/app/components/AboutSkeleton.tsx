import styles from './Skeleton.module.css'

export default function AboutSkeleton() {
  return (
    <section style={{ padding: '8rem 4rem', background: 'var(--bg2)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '6rem', alignItems: 'center' }}>
        <div className={styles.skeleton} style={{ aspectRatio: '3/4', borderRadius: 3 }} />
        <div>
          <div className={styles.line} style={{ width: 80, marginBottom: '1rem' }} />
          <div className={styles.title} style={{ height: '4rem', marginBottom: '0.5rem' }} />
          <div className={styles.title} style={{ height: '4rem', width: '70%', marginBottom: '2rem' }} />
          <div className={styles.line} />
          <div className={styles.line} />
          <div className={styles.line} style={{ width: '75%' }} />
        </div>
      </div>
    </section>
  )
}