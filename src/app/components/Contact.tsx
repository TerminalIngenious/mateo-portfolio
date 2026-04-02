"use client";

import { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1800);
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.inner}>
        <p className={styles.sectionLabel}>Travaillons ensemble</p>
        <h2 className={styles.sectionTitle}>Contact</h2>
        <p className={styles.sub}>
          Un projet vidéo ou photo en tête ? Je suis disponible pour des
          missions freelance ou un poste en CDI/CDD.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.group}>
              <label htmlFor="name" className={styles.label}>
                Nom
              </label>
              <input
                className={styles.input}
                type="text"
                id="name"
                placeholder="Votre nom"
                required
              />
            </div>
            <div className={styles.group}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                className={styles.input}
                type="email"
                id="email"
                placeholder="votre@email.fr"
                required
              />
            </div>
          </div>

          <div className={styles.group}>
            <label htmlFor="subject" className={styles.label}>
              Sujet
            </label>
            <input
              className={styles.input}
              type="text"
              id="subject"
              placeholder="Projet, opportunité, collaboration..."
            />
          </div>

          <div className={styles.group}>
            <label htmlFor="message" className={styles.label}>
              Message
            </label>
            <textarea
              className={styles.textarea}
              id="message"
              placeholder="Décrivez votre projet ou votre demande..."
              required
            />
          </div>

          <button
            type="submit"
            className={`${styles.btn} ${status === "sent" ? styles.btnSent : ""}`}
            disabled={status === "loading" || status === "sent"}
          >
            {status === "loading" ? (
              <span className={styles.spinner} />
            ) : status === "sent" ? (
              "Message envoyé ✓"
            ) : (
              "Envoyer le message"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
