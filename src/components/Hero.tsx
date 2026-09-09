import { useEffect, useState } from 'react'

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 200)
    return () => clearTimeout(timer)
  }, [])

  const firstName = 'Noël'
  const lastName = 'Anthonio'

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-obsidian"
    >
      {/* Background giant text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span
          className="font-display text-[28vw] md:text-[22vw] font-bold text-copper/[0.12] leading-none select-none whitespace-nowrap"
        >
          NOËL
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full pt-20">
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center border border-line-dark/50 bg-ink/25 p-6 md:p-10 lg:p-14">
          {/* Left — copy */}
          <div>
            {/* Eyebrow */}
            <div
              className={`flex items-center gap-3 mb-8 transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="w-2 h-2 bg-copper rounded-full pulse-dot" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-muted-on-dark">
                Data Analyst & Développeur Web
              </span>
            </div>

            {/* Name */}
            <h1 className="font-display font-normal leading-[0.95] tracking-tight text-cream">
              <span className="block text-[clamp(2.8rem,8vw,5.5rem)]">
                {firstName.split('').map((letter, i) => (
                  <span
                    key={i}
                    className="letter-mask inline-block"
                    style={{ transitionDelay: `${i * 0.06}s` }}
                  >
                    <span style={{ transitionDelay: `${i * 0.06}s` }}>{letter}</span>
                  </span>
                ))}
              </span>
              <span className="block text-[clamp(2.8rem,8vw,5.5rem)] italic text-copper">
                {lastName.split('').map((letter, i) => (
                  <span
                    key={i}
                    className="letter-mask inline-block"
                    style={{ transitionDelay: `${0.3 + i * 0.05}s` }}
                  >
                    <span style={{ transitionDelay: `${0.3 + i * 0.05}s` }}>{letter}</span>
                  </span>
                ))}
              </span>
            </h1>

            {/* Baseline */}
            <p
              className={`mt-6 max-w-[420px] text-muted-on-dark text-[15px] leading-relaxed transition-all duration-700 delay-500 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Data Analyst & développeur web, je transforme des données complexes en outils clairs, utiles et agréables à utiliser.
            </p>

            {/* CTAs */}
            <div
              className={`mt-10 flex flex-wrap items-center gap-6 transition-all duration-700 delay-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 bg-copper text-obsidian px-6 py-4 text-[12px] font-bold tracking-wide hover:bg-copper-glow transition-all duration-300 hover:-translate-y-0.5"
              >
                Explorer mes projets
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#contact"
                className="magnetic-link text-[12px] font-bold text-cream tracking-wide"
              >
                Prenons un café numérique
              </a>
            </div>

            {/* Meta */}
            <div
                className={`mt-12 flex items-center gap-4 text-[10px] uppercase tracking-[0.15em] text-muted-on-dark/70 transition-all duration-700 delay-1000 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span>Antananarivo, Madagascar</span>
              <span className="w-10 h-px bg-line" />
              <span>Depuis 2018</span>
            </div>
          </div>

          {/* Right — portrait */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative max-w-[350px] mx-auto">
              {/* Portrait frame */}
              <div className="relative overflow-hidden bg-surface aspect-[3/4]">
                <img
                  src="/images/portrait.jpg"
                  alt="Portrait de Noël Anthonio"
                  className="w-full h-full object-cover"
                  style={{ filter: 'sepia(0.15) contrast(1.05)' }}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent" />
              </div>

              {/* Floating badge — years */}
              <div className="absolute -left-6 bottom-8 bg-copper text-obsidian px-5 py-4 flex items-center gap-3 float-anim">
                <span className="font-display text-4xl leading-none">03</span>
                <span className="text-[10px] leading-tight font-semibold uppercase tracking-wide">
                  années à<br />faire parler<br />les données
                </span>
              </div>

              {/* Stamp */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border border-copper/50 grid place-content-center text-center rotate-[8deg] bg-cream/90 backdrop-blur-sm">
                <span className="text-[9px] font-bold text-copper leading-tight">
                  DATA<br />
                  <span className="font-display text-lg italic">×</span>
                  <br />
                  WEB
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted">
        <span className="text-[9px] uppercase tracking-[0.2em]">Scroll pour explorer</span>
        <span className="text-base animate-bounce">↓</span>
      </div>
    </section>
  )
}