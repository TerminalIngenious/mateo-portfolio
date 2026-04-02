import type { Metadata } from 'next'
import './globals.css'
import Cursor from './components/Cursor'
import ScrollProgress from './components/ScrollProgress'
import Providers from './components/Providers'

export const metadata: Metadata = {
  title: 'Matéo — Monteur Vidéo',
  description: 'Portfolio de Matéo, monteur vidéo freelance. Montage, color grading, post-production.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Providers>
          <Cursor />
          <ScrollProgress />
          {children}
        </Providers>
      </body>
    </html>
  )
}