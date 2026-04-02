'use client'
import { useEffect, useState } from 'react'
import styles from './Projects.module.css'

interface Project {
  id: string
  title: string
  type: string
  description: string
  tags: string[]
  image_url: string
  size: string
  project_url?: string
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => {
        setProjects(data)
        setLoading(false)
      })
  }, [])

  if (loading) return (
    <section className={styles.projects} id="projets">
      <div className={styles.header}>
        <p className={styles.sectionLabel}>Réalisations</p>
        <h2 className={styles.sectionTitle}>Mes projets</h2>
      </div>
      <div className={styles.grid}>
        {[...Array(4)].map((_, i) => (
          <div key={i} className={`${styles.card} ${styles.half} ${styles.skeleton}`} />
        ))}
      </div>
    </section>
  )

  if (projects.length === 0) return (
    <section className={styles.projects} id="projets">
      <div className={styles.header}>
        <p className={styles.sectionLabel}>Réalisations</p>
        <h2 className={styles.sectionTitle}>Mes projets</h2>
      </div>
      <p className={styles.empty}>Les projets arrivent bientôt...</p>
    </section>
  )

  return (
    <section className={styles.projects} id="projets">
      <div className={styles.header}>
        <p className={styles.sectionLabel}>Réalisations</p>
        <h2 className={styles.sectionTitle}>Mes projets</h2>
      </div>
      <div className={styles.grid}>
        {projects.map(project => (
          <div
            key={project.id}
            className={`${styles.card} ${styles[project.size] || styles.half}`}
            onClick={() => project.project_url && window.open(project.project_url, '_blank')}
            style={{ cursor: project.project_url ? 'pointer' : 'default' }}
          >
            <div className={styles.thumb}>
              {project.image_url ? (
                <img src={project.image_url} alt={project.title} className={styles.thumbImg} />
              ) : (
                <div className={styles.thumbIcon}>
                  <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
                    <rect x="6" y="18" width="60" height="36" rx="4" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="36" cy="36" r="10" stroke="currentColor" strokeWidth="1.5"/>
                    <polygon points="33,31 33,41 43,36" fill="currentColor"/>
                  </svg>
                </div>
              )}
              {project.project_url && (
                <div className={styles.overlay}>
                  <span className={styles.overlayText}>Voir le projet →</span>
                </div>
              )}
            </div>
            <div className={styles.info}>
              <p className={styles.projectType}>{project.type}</p>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDesc}>{project.description}</p>
              <div className={styles.tags}>
                {project.tags?.map(tag => (
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