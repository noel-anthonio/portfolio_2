export function About() {
  const skills = [
    'Analyse & reporting',
    'Automatisation',
    'Développement web',
    'Visualisation',
  ]

  return (
    <section id="about" className="relative bg-night text-cream py-24 md:py-32 overflow-hidden">
      <div className="section-frame max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_3fr] gap-10 lg:gap-16">
          {/* Kicker */}
          <div className="reveal">
            <p className="inline-flex border-l-2 border-copper pl-3 text-[10px] uppercase tracking-[0.2em] font-bold text-muted-on-dark">
              01 — L'humain derrière les chiffres
            </p>
          </div>

          {/* Content */}
          <div className="reveal reveal-delay-1">
            <h2 className="font-display font-normal text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-tight max-w-[700px]">
              À la croisée de la donnée, du produit et de{' '}
              <em className="italic text-copper-dim">l'humain.</em>
            </h2>

            <p className="mt-8 max-w-[680px] text-[15px] leading-[1.9] text-muted-on-dark">
              Spécialisé en bases de données et en génie logiciel, j'ai développé une solide
              expertise en analyse de données, développement web et conception de tableaux de bord
              interactifs. Curieux, rigoureux et polyvalent, je m'investis pleinement dans chaque
              projet afin de proposer des solutions innovantes, performantes et adaptées aux besoins
              des utilisateurs.
            </p>

            {/* Skill tags */}
            <div className="mt-10 flex flex-wrap gap-2.5">
              {skills.map((skill, i) => (
                <span
                  key={skill}
                  className={`reveal border border-line-dark px-3.5 py-2 text-[10px] font-semibold text-muted-on-dark transition-colors hover:border-copper-dim hover:text-copper-dim reveal-delay-${i + 1}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}