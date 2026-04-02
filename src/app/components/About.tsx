import styles from "./About.module.css";
import Image from "next/image";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.grid}>
        <div className={styles.visual}>
          {/* Replace with <Image> from next/image once you have a real photo */}
          <Image
            src="/mateo.JPG"
            alt="Matéo"
            fill
            style={{ objectFit: "cover", objectPosition: "top" }}
          />
          <div className={styles.visualOverlay} />
          <div className={styles.visualLabel}>
            <strong>Matéo</strong>
            <span>Vidéaste · Photographe · 20 ans</span>
          </div>
          <div className={styles.visualBorder} />
        </div>

        <div className={styles.text}>
          <p className={styles.sectionLabel}>À propos</p>
          <h2 className={styles.sectionTitle}>
            Créer, c&apos;est
            <br />
            ma façon
            <br />
            de penser
          </h2>
          <p className={styles.para}>
            À 20 ans, j&apos;ai décidé de suivre ma passion plutôt qu&apos;un
            chemin tout tracé. Le montage vidéo ne sont pas juste mon
            métier — c&apos;est ma façon de voir le monde et de le raconter.
          </p>
          <p className={styles.para}>
            Du clip musical au reportage corporate, du portrait en lumière
            naturelle au montage dynamique, je mets mon œil et mon sens du
            rythme au service de vos projets.
          </p>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>0+</span>
              <span className={styles.statLabel}>Projets réalisés</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>1</span>
              <span className={styles.statLabel}>An d&apos;expérience</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>∞</span>
              <span className={styles.statLabel}>Passion</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
