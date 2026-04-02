import styles from '../legal.module.css'

export default function CGU() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <p className={styles.label}>Légal</p>
        <h1 className={styles.title}>Conditions générales d'utilisation</h1>

        <section className={styles.section}>
          <h2 className={styles.subtitle}>Objet</h2>
          <p>Les présentes CGU définissent les conditions d'utilisation du site portfolio de Matéo, accessible à l'adresse de ce site. En accédant au site, vous acceptez sans réserve les présentes conditions.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subtitle}>Accès au site</h2>
          <p>Le site est accessible gratuitement à tout utilisateur disposant d'un accès à Internet. Matéo se réserve le droit de modifier, suspendre ou interrompre l'accès au site à tout moment, sans préavis ni indemnité.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subtitle}>Propriété intellectuelle</h2>
          <p>Tous les contenus présents sur ce site (vidéos, photos, textes, logos) sont protégés par le droit d'auteur et appartiennent à Matéo. Toute reproduction partielle ou totale est strictement interdite sans accord préalable écrit.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subtitle}>Liens externes</h2>
          <p>Ce site peut contenir des liens vers des sites tiers. Matéo n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou leurs pratiques.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subtitle}>Limitation de responsabilité</h2>
          <p>Matéo ne saurait être tenu responsable des dommages directs ou indirects résultant de l'utilisation de ce site ou de l'impossibilité d'y accéder.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subtitle}>Droit applicable</h2>
          <p>Les présentes CGU sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.</p>
        </section>

        <a href="/" className={styles.back}>← Retour au portfolio</a>
      </div>
    </main>
  )
}