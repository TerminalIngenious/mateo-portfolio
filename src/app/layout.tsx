import type { Metadata } from 'next'
import './globals.css'
import Cursor from './components/Cursor'
import ScrollProgress from './components/ScrollProgress'

export const metadata: Metadata = {
  title: 'Matéo — Monteur Vidéo',
  description: 'Portfolio de Matéo, monteur vidéo freelance. Montage, color grading, post-production.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Cursor />
        <ScrollProgress />
        {children}
      </body>
    </html>
  )
}