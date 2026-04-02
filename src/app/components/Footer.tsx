import styles from './Footer.module.css'

const links = [
  {
    title: 'Navigation',
    items: [
      { label: 'À propos', href: '#about' },
      { label: 'Projets', href: '#projets' },
      { label: 'Compétences', href: '#competences' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Services',
    items: [
      { label: 'Montage vidéo', href: '#contact' },
      { label: 'Color grading', href: '#contact' },
      { label: 'Motion design', href: '#contact' },
      { label: 'Post-production', href: '#contact' },
    ],
  },
  {
    title: 'Légal',
    items: [
      { label: 'Mentions légales', href: '/mentions-legales' },
      { label: 'Politique de confidentialité', href: '/confidentialite' },
      { label: 'Cookies', href: '/cookies' },
      { label: 'CGU', href: '/cgu' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <a href="#top" className={styles.logo}>
            <span className={styles.logoAccent}>M</span>ATÉO
          </a>
          <p className={styles.tagline}>
            Monteur vidéo freelance.<br />
            Disponible pour missions &amp; emploi.
          </p>
          <div className={styles.socials}>
            {/* Instagram */}
            <a href="https://www.instagram.com/mateo_goram4/" target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/mateo-goram-59a928333/" target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="3"/>
                <line x1="8" y1="11" x2="8" y2="16"/>
                <line x1="8" y1="8" x2="8" y2="8.5"/>
                <line x1="12" y1="16" x2="12" y2="11"/>
                <path d="M12 13a2 2 0 0 1 4 0v3"/>
              </svg>
            </a>
            {/* YouTube */}
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.social} aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="5" width="20" height="14" rx="4"/>
                <polygon points="10,9 16,12 10,15" fill="currentColor" stroke="none"/>
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.nav}>
          {links.map(col => (
            <div key={col.title} className={styles.col}>
              <h4 className={styles.colTitle}>{col.title}</h4>
              <ul className={styles.colList}>
                {col.items.map(item => (
                  <li key={item.label}>
                    <a href={item.href} className={styles.colLink}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copy}>© {new Date().getFullYear()} Matéo — Tous droits réservés</p>
        <a href="/admin" className={styles.adminLink}>Admin</a>
        <p className={styles.credit}>
          Créé par <a href="https://matteo-dev.fr" target="_blank" rel="noopener noreferrer">Mattéo Dev</a>
        </p>
      </div>
    </footer>
  )
}