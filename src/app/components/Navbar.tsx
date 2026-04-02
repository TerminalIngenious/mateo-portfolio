'use client'

import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#about', label: 'À propos' },
    { href: '#projets', label: 'Projets' },
    { href: '#competences', label: 'Compétences' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a className={styles.logo} href="#top">
        <span className={styles.logoAccent}>M</span>ATÉO
      </a>

      <ul className={styles.links}>
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} className={styles.link}>{l.label}</a>
          </li>
        ))}
      </ul>

      <button
        className={styles.burger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span className={menuOpen ? styles.burgerOpen : ''}></span>
        <span className={menuOpen ? styles.burgerOpen : ''}></span>
      </button>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {links.map(l => (
            <a key={l.href} href={l.href} className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
