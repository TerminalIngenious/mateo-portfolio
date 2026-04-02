import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.code}>404</div>
        <h1 className={styles.title}>Page introuvable</h1>
        <p className={styles.desc}>
          Cette page n'existe pas ou a été déplacée. Retourne à l'accueil pour explorer le portfolio.
        </p>
        <a href="/" className={styles.btn}>← Retour à l'accueil</a>
      </div>
    </main>
  )
}