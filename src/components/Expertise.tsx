const skills = [
  {
    index: '01',
    marker: 'DATA',
    title: 'Data Analysis',
    description: "Je transforme des données brutes en indicateurs fiables, en identifiant les tendances et les points d'amélioration.",
    tools: 'Python · SQL · T-SQL · Excel · Power Query · VBA',
    details: 'Nettoyage, contrôle et transformation de données avec Pandas, NumPy et OpenPyXL.',
    level: 90,
  },
  {
    index: '02',
    marker: 'WEB',
    title: 'Web Development',
    description: 'Je conçois des outils web simples à utiliser pour rendre les données accessibles aux équipes.',
    tools: 'HTML · CSS · JavaScript · PHP · Python · MySQL',
    details: 'Applications et dashboards avec Streamlit, Flask, APIs REST et gestion des erreurs.',
    level: 82,
  },
  {
    index: '03',
    marker: 'KPI',
    title: 'Reporting & KPI',
    description: "Je construis des reportings clairs pour suivre la qualité, la productivité et l'atteinte des objectifs.",
    tools: 'Excel · Power BI',
    details: 'Création de dashboards, suivi des indicateurs et automatisation des alertes et reportings.',
    level: 88,
  },
  {
    index: '04',
    marker: 'TEST',
    title: 'Tests & Qualité',
    description: 'Je vérifie la fiabilité des traitements et j’identifie les erreurs avant leur mise en production.',
    tools: 'unittest · Git',
    details: 'Validation des résultats, recherche d\'erreurs et amélioration continue du code.',
    level: 78,
  },
]

const softSkills = [
  'Autonomie',
  "Esprit d'équipe",
  "Esprit d'amélioration",
  'Orientation résultat',
  'Persévérance',
  'Adaptabilité',
  'Rigueur',
]

const technicalSkills = [
  {
    title: 'Langages & Data',
    details: 'Python · Pandas · NumPy · Manipulation de données CSV/Excel',
  },
  {
    title: 'Programmation Orientée Objet',
    details: 'Classes & objets · Héritage · Composition · Architecture logicielle',
  },
  {
    title: 'Automatisation',
    details: 'Power Automate · OpenPyXL · Scripts batch · Flux de traitement et automatisation Excel',
  },
  {
    title: 'Développement Web / Dashboards',
    details: 'Streamlit · Flask · Interfaces interactives · Restitution visuelle des données',
  },
  {
    title: 'APIs & Intégrations',
    details: 'Requêtes HTTP · REST API · Gestion des erreurs · Variables d\'environnement',
  },
  {
    title: 'Outils & Bonnes pratiques',
    details: 'Git · Tests unitaires (unittest) · PEP8 · Environnements virtuels (venv) · Packaging de projets',
  },
  {
    title: 'Concepts avancés',
    details: 'Décorateurs · Générateurs · Design patterns · Debugging',
  },
]
const languages = [
  { name: 'Malagasy', level: 'Langue maternelle', progress: 100 },
  { name: 'Français', level: 'Intermédiaire', progress: 70 },
  { name: 'Anglais', level: 'Débutant', progress: 35 },
]

export function Expertise() {
  return (
    <section
      id="expertise"
      className="relative bg-obsidian py-24 md:py-32 overflow-hidden"
    >
      <div className="section-frame max-w-[1200px] mx-auto px-6">
        {/* Heading */}
        <div className="reveal mb-16">
          <p className="inline-flex border-l-2 border-copper pl-3 text-[10px] uppercase tracking-[0.2em] font-bold text-copper mb-5">
            02 — Ce que je sais faire (et que j'aime)
          </p>
          <h2 className="font-display font-normal text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-tight text-cream">
            Des compétences qui<br />
            <em className="italic gradient-copper">servent le résultat.</em>
          </h2>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-line-dark">
          {skills.map((skill, i) => (
            <article
              key={skill.index}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} group relative p-8 md:p-7 lg:p-8 text-center border-b md:border-b-0 md:border-r border-line-dark last:border-r-0 ${i % 2 === 0 ? 'bg-surface' : 'bg-surface-alt'} transition-colors duration-500 hover:bg-copper/10`}
            >
              {/* Index */}
              <span className="text-[10px] text-muted-on-dark font-mono">{skill.index}</span>

              {/* Category marker */}
              <div className="my-8 relative">
                <span className="font-display text-[3.4rem] leading-none text-copper/80 block transition-all duration-500 group-hover:text-copper group-hover:scale-105 origin-center">
                  {skill.marker}
                </span>
              </div>

              <h3 className="text-xl font-semibold tracking-tight text-cream mb-3">
                {skill.title}
              </h3>
              <p className="text-[13px] leading-[1.8] text-muted-on-dark mb-6 min-h-[60px]">
                {skill.description}
              </p>

              {/* Skill bar */}
              <div className="mb-4">
                <div className="h-px bg-line-dark relative overflow-hidden">
                  <div
                    className="skill-bar-fill absolute top-0 left-0 h-full bg-copper"
                    style={{ width: '0%' }}
                    data-level={skill.level}
                  />
                </div>
              </div>

              <p className="text-[10px] text-muted-on-dark tracking-wide">{skill.tools}</p>
              <p className="mt-4 text-[11px] leading-[1.7] text-muted-on-dark/80">{skill.details}</p>
            </article>
          ))}
        </div>

        {/* Soft skills & Languages */}
        <div className="grid md:grid-cols-2 gap-12 mt-20">
          {/* Soft skills */}
          <div className="reveal">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-copper mb-6">
              Soft Skills
            </p>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="border border-line-dark px-4 py-2.5 text-[11px] font-medium text-muted-on-dark hover:border-copper/50 hover:text-copper transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="reveal reveal-delay-1">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-copper mb-6">
              Langues
            </p>
            <div className="space-y-4">
              {languages.map((lang) => (
                <div key={lang.name} className="space-y-2">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[14px] font-medium text-cream">{lang.name}</span>
                    <span className="text-[11px] text-muted-on-dark">{lang.level}</span>
                  </div>
                  <div
                    className="h-1 w-full bg-line-dark/50 overflow-hidden"
                    role="progressbar"
                    aria-label={`Niveau de ${lang.name}`}
                    aria-valuenow={lang.progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="h-full bg-copper transition-all duration-1000"
                      style={{ width: `${lang.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="reveal mt-20 border-t border-line-dark pt-10">
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-copper mb-8">
            Technologies & pratiques
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-7">
            {technicalSkills.map((skill) => (
              <article key={skill.title}>
                <h3 className="text-[13px] font-semibold text-cream mb-2">{skill.title}</h3>
                <p className="text-[11px] leading-[1.7] text-muted-on-dark">{skill.details}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}