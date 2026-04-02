import styles from './Skills.module.css'

const skills = [
  {
    name: 'Vidéo',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="9" width="30" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="18" cy="18" r="5" stroke="currentColor" strokeWidth="1.5"/>
        <polygon points="16,15 16,21 22,18" fill="currentColor"/>
      </svg>
    ),
    items: ['Tournage & direction', 'Montage (Premiere Pro, DaVinci)', 'Color grading avancé', 'Motion design (After Effects)', 'Storyboard & scriptwriting'],
  },
  {
    name: 'Photo',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="18" r="13" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="18" cy="18" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="18" y1="5" x2="18" y2="14" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="18" y1="22" x2="18" y2="31" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="5" y1="18" x2="14" y2="18" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="22" y1="18" x2="31" y2="18" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    items: ['Photoshop', 'Photopea'],
  },
  {
    name: 'Logiciels',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="6" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M4 14h28" stroke="currentColor" strokeWidth="1.2" opacity="0.5"/>
        <circle cx="7.5" cy="10" r="1.5" fill="currentColor"/>
        <circle cx="12" cy="10" r="1.5" fill="currentColor"/>
        <circle cx="16.5" cy="10" r="1.5" fill="currentColor"/>
        <line x1="12" y1="30" x2="24" y2="30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="18" y1="26" x2="18" y2="30" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    items: ['Capcut', 'DaVinci Resolve'],
  },
  {
    name: 'Soft skills',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 4L32 12V24L18 32L4 24V12L18 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="18" cy="18" r="5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    items: ['Créativité & sens artistique', 'Gestion de projet', 'Travail en équipe', 'Autonomie & rigueur', 'Écoute & relation client'],
  },
]

export default function Skills() {
  return (
    <section className={styles.skills} id="competences">
      <div className={styles.header}>
        <p className={styles.sectionLabel}>Savoir-faire</p>
        <h2 className={styles.sectionTitle}>Compétences</h2>
      </div>

      <div className={styles.grid}>
        {skills.map(skill => (
          <div key={skill.name} className={styles.block}>
            <div className={styles.icon}>{skill.icon}</div>
            <h3 className={styles.skillName}>{skill.name}</h3>
            <ul className={styles.list}>
              {skill.items.map(item => (
                <li key={item} className={styles.item}>
                  <span className={styles.dot} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
