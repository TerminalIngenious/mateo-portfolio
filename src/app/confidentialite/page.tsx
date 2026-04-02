import styles from '../legal.module.css'

export default function Confidentialite() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <p className={styles.label}>Légal</p>
        <h1 className={styles.title}>Politique de confidentialité</h1>

        <section className={styles.section}>
          <h2 className={styles.subtitle}>Données collectées</h2>
          <p>Lors de l'utilisation du formulaire de contact, les données suivantes sont collectées : nom, adresse email, et contenu du message. Ces données sont utilisées uniquement pour répondre à votre demande.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subtitle}>Utilisation des données</h2>
          <p>Vos données personnelles ne sont jamais revendues ni transmises à des tiers. Elles sont utilisées exclusivement dans le cadre d'une réponse à votre prise de contact.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subtitle}>Durée de conservation</h2>
          <p>Les données collectées via le formulaire de contact sont conservées pendant une durée maximale de 12 mois, puis supprimées.</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subtitle}>Vos droits</h2>
          <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :</p>
          <ul>
            <li>Droit d'accès à vos données</li>
            <li>Droit de rectification</li>
            <li>Droit à l'effacement (droit à l'oubli)</li>
            <li>Droit d'opposition au traitement</li>
          </ul>
          <p>Pour exercer ces droits, contactez : <a href="mailto:mateoblack81@gmail.com">mateoblack81@gmail.com</a></p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subtitle}>Responsable du traitement</h2>
          <p>Matéo Goram — <a href="mailto:mateoblack81@gmail.com">mateoblack81@gmail.com</a></p>
        </section>

        <a href="/" className={styles.back}>← Retour au portfolio</a>
      </div>
    </main>
  )
}