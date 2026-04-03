import type { Metadata } from 'next'
import './globals.css'
import Cursor from './components/Cursor'
import ScrollProgress from './components/ScrollProgress'
import Providers from './components/Providers'

export const metadata: Metadata = {
  title: 'Matéo Goram — Monteur Vidéo',
  description: 'Portfolio de Matéo Goram, monteur vidéo freelance.',
  icons: {
    icon: '/favicon.svg',
  },
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