import { useScrollReveal, useScrollProgress } from './hooks'
import { CustomCursor } from './components/CustomCursor'
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Expertise } from './components/Expertise'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Education } from './components/Education'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  useScrollReveal()
  const progress = useScrollProgress()

  return (
    <>
      <CustomCursor />
      <div className="noise-overlay" />

      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{ width: `${progress}%` }}
      />

      <Navigation />

      <main>
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  )
}