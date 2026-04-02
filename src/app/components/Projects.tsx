import styles from './Projects.module.css'

const projects = [
  {
    id: 1,
    type: 'Clip musical',
    title: 'Projet Titre 1',
    desc: 'Description courte du projet, le contexte et les défis relevés pour ce clip.',
    tags: ['Tournage', 'Montage', 'Color grading'],
    size: 'large',
    icon: (
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="18" width="60" height="36" rx="4" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="36" cy="36" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <polygon points="33,31 33,41 43,36" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: 2,
    type: 'Photographie',
    title: 'Projet Titre 2',
    desc: 'Portrait studio, lumière naturelle ou reportage événementiel.',
    tags: ['Portrait', 'Retouche'],
    size: 'medium',
    icon: (
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="36" cy="36" r="26" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="36" cy="36" r="8" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="36" y1="10" x2="36" y2="28" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="36" y1="44" x2="36" y2="62" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="10" y1="36" x2="28" y2="36" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="44" y1="36" x2="62" y2="36" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    id: 3,
    type: 'Vidéo corporate',
    title: 'Projet Titre 3',
    desc: 'Une vidéo institutionnelle complète : du storyboard au rendu final, en passant par le tournage et la post-production.',
    tags: ['Corporate', 'Direction artistique', 'Motion design'],
    size: 'wide',
    icon: (
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="22" width="56" height="34" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 32h56" stroke="currentColor" strokeWidth="1.2" opacity="0.5"/>
        <rect x="22" y="12" width="28" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    id: 4,
    type: 'Court-métrage',
    title: 'Projet Titre 4',
    desc: 'Narration visuelle et direction artistique complète.',
    tags: ['Réalisation', 'Montage'],
    size: 'half',
    icon: (
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 56 L36 16 L54 56Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="36" cy="46" r="5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    id: 5,
    type: 'Reportage photo',
    title: 'Projet Titre 5',
    desc: 'Captation d\'événements, concerts, sport et lifestyle.',
    tags: ['Événementiel', 'Reportage'],
    size: 'half',
    icon: (
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="22" height="22" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="40" y="10" width="22" height="22" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="10" y="40" width="22" height="22" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="40" y="40" width="22" height="22" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
]

export default function Projects() {
  return (
    <section className={styles.projects} id="projets">
      <div className={styles.header}>
        <p className={styles.sectionLabel}>Réalisations</p>
        <h2 className={styles.sectionTitle}>Mes projets</h2>
      </div>

      <div className={styles.grid}>
        {projects.map(project => (
          <div key={project.id} className={`${styles.card} ${styles[project.size]}`}>
            <div className={styles.thumb}>
              <div className={styles.thumbIcon}>{project.icon}</div>
              <div className={styles.overlay}>
                <span className={styles.overlayText}>Voir le projet →</span>
              </div>
            </div>
            <div className={styles.info}>
              <p className={styles.projectType}>{project.type}</p>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDesc}>{project.desc}</p>
              <div className={styles.tags}>
                {project.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
