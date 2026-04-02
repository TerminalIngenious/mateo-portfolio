import { Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import HeroSkeleton from './components/HeroSkeleton'
import AboutSkeleton from './components/AboutSkeleton'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<HeroSkeleton />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<AboutSkeleton />}>
          <About />
        </Suspense>
        <Suspense fallback={<div style={{ height: '600px', background: 'var(--bg)' }} />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<div style={{ height: '500px', background: 'var(--bg2)' }} />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<div style={{ height: '500px', background: 'var(--bg)' }} />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}