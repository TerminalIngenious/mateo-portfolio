import styles from '../legal.module.css'

export default function MentionsLegales() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <p className={styles.label}>Légal</p>
        <h1 className={styles.title}>Mentions légales</h1>

        <section className={styles.section}>
          <h2 className={styles.subtitle}>Éditeur du site</h2>
          <p>Matéo Goram</p>
          <p>Email : <a href="mailto:mateoblack81@gmail.com">mateoblack81@gmail.com</a></p>
          <p>Téléphone : +33 6 70 09 10 46</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subtitle}>Hébergement</h2>
          <p>Ce site est hébergé par Vercel Inc.</p>
          <p>440 N Barranca Ave #4133, Covina, CA 91723, USA</p>
          <p><a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a></p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subtitle}>Propriété intellectuelle</h2>
          <p>L'ensemble des contenus présents sur ce site (textes, images, vidéos, graphismes) sont la propriété exclusive de Matéo, sauf mention contraire. Toute reproduction, distribution ou utilisation sans autorisation préalable est interdite.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subtitle}>Responsabilité</h2>
          <p>Matéo s'efforce d'assurer l'exactitude des informations publiées sur ce site, mais ne peut garantir leur exhaustivité. Il se réserve le droit de modifier les contenus à tout moment et sans préavis.</p>
        </section>

        <a href="/" className={styles.back}>← Retour au portfolio</a>
      </div>
    </main>
  )
}