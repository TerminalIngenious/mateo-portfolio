import styles from './Hero.module.css'


export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.bg} />
      <div className={styles.grid} />

      <div className={styles.content}>
        <div className={styles.tag}>
          <span className={styles.dot} />
          Disponible pour missions &amp; emploi
        </div>

        <h1 className={styles.title}>
          Monteur<br />
          <em className={styles.titleAccent}>Vidéo</em>
        </h1>

        <p className={styles.desc}>
          Je transforme des instants en histoires visuelles. Montage, direction artistique,
          captation — du concept à la livraison, je m&apos;occupe de tout.
        </p>

        <div className={styles.ctas}>
          <a href="#projets" className={styles.btnPrimary}>Voir mes projets</a>
          <a href="#contact" className={styles.btnGhost}>Me contacter</a>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>

      <div className={styles.cornerTag}>
        <span>Montage Vidéo · Miniature Youtube</span>
      </div>
    </section>
  )
}
