const education = [
  {
    year: '2025',
    title: 'Data Science avec Python',
    school: 'Orange Digital Center',
    description: 'Formation intensive en Data Science avec Python.',
  },
  {
    year: '2022 — 2023',
    title: 'M1 Informatique',
    school: 'CNTEMAD',
    description: 'Spécialisation Bases de Données & Génie Logiciel.',
  },
  {
    year: '2018 — 2022',
    title: 'Licence Informatique',
    school: 'CNTEMAD',
    description: "Fondamentaux de la programmation et des Systèmes d'Information.",
  },
  {
    year: '2016 — 2017',
    title: 'Gestion Informatique',
    school: 'IESTIME Antaninandro',
    description: "Introduction aux systèmes d'information et bureautique avancée.",
  },
  {
    year: '2015 — 2016',
    title: 'Bac Scientifique',
    school: 'Collège St Joseph Mahamasina',
    description: "Développement d'un esprit logique et analytique.",
  },
]

export function Education() {
  return (
    <section className="relative bg-night py-24 md:py-32 overflow-hidden">
      <div className="section-frame max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
          {/* Left — heading */}
          <div className="reveal">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-copper mb-5">
              05 — Formation
            </p>
            <h2 className="font-display font-normal text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-tight text-cream">
              Apprendre,<br />
              <em className="italic gradient-copper">toujours.</em>
            </h2>
          </div>

          {/* Right — list */}
          <div className="reveal reveal-delay-1">
            <div className="border-t border-line-dark">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[100px_1fr] md:grid-cols-[120px_1fr] gap-5 border-b border-line-dark py-6 group hover:bg-copper/10 transition-colors duration-300"
                >
                  <span className="text-[11px] text-muted-on-dark font-medium pt-1">{edu.year}</span>
                  <div>
                    <h3 className="text-base font-semibold text-cream m-0">{edu.title}</h3>
                    <small className="block text-[11px] text-copper/80 font-medium mt-1">
                      {edu.school}
                    </small>
                    <p className="text-[12px] text-muted-on-dark mt-2 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}