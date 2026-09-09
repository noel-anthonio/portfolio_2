const projects = [
  {
    num: '01',
    title: 'Portfolio Personnel 2',
    description:
      "Un portfolio personnel conçu pour présenter mon parcours, mes compétences en data et mes réalisations dans une interface claire et immersive.",
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    image: '/images/project-portfolio1.jpg',
    links: [
      { label: 'Voir le site', href: '#', kind: 'site' },
      { label: 'Voir le code', href: '#', kind: 'github' },
    ],
  },
  {
    num: '02',
    title: 'Portfolio Personnel 1',
    description:
      "Mon site personnel présentant mes réalisations, avec un design responsive et moderne.",
    tags: ['HTML5/CSS3', 'Bootstrap 5', 'JavaScript'],
    image: '/images/project-portfolio.jpg',
    links: [
      { label: 'Voir le site', href: '#', kind: 'site' },
      { label: 'Voir le code', href: 'https://github.com/noel-anthonio/Portfolio_1', kind: 'github' },
    ],
  },
  {
    num: '03',
    title: 'Data Cleaner',
    description:
      "Nettoyez vos données et prévoyez vos besoins en heures, en un clic, directement dans le navigateur.",
    tags: ['Vanilla JS', 'SheetJS', 'PapaParse'],
    image: '/images/project-data-cleaner.jpg',
    links: [
      { label: 'Voir le site', href: '#', kind: 'site' },
      { label: 'Voir le code', href: '#', kind: 'github' },
    ],
  },
  {
    num: '04',
    title: 'Application Météo',
    description:
      "Recherche météo en temps réel avec carte interactive et historique des recherches, connectée à l'API OpenWeatherMap.",
    tags: ['Python', 'Streamlit', 'Folium'],
    image: '/images/project-meteo.jpg',
    links: [
      { label: 'Voir le code', href: 'https://github.com/noel-anthonio/meteo_app', kind: 'github' },
      { label: 'Voir le site', href: '#', kind: 'site' },
    ],
  },
]

export function Projects() {
  return (
    <section id="projects" className="relative bg-obsidian py-24 md:py-32 overflow-hidden">
      <div className="section-frame max-w-[1200px] mx-auto px-6">
        {/* Heading */}
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <p className="inline-flex border-l-2 border-copper pl-3 text-[10px] uppercase tracking-[0.2em] font-bold text-muted-on-dark mb-5">
              04 — Projets choisis
            </p>
            <h2 className="font-display font-normal text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-tight text-cream">
              Quelques projets<br />
              <em className="italic text-copper-dim">concrets.</em>
            </h2>
          </div>
          <a
            href="https://github.com/noel-anthonio"
            target="_blank"
            rel="noreferrer"
            className="magnetic-link text-[12px] font-bold text-cream inline-flex items-center gap-2"
          >
            Voir GitHub
            <span>↗</span>
          </a>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {projects.map((project, i) => (
            <article
              key={project.num}
              className={`project-card reveal reveal-delay-${Math.min(i + 1, 4)} group flex flex-col border border-line-dark/60 ${i % 2 === 0 ? 'bg-surface' : 'bg-obsidian'} overflow-hidden`}
            >
              {/* Image */}
              <div className="relative h-[240px] shrink-0 overflow-hidden bg-surface">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="project-card-img w-full h-full object-cover"
                />
                {/* Number badge */}
                <span className="absolute top-5 right-5 bg-copper text-obsidian px-3 py-2 text-[10px] font-bold">
                  {project.num}
                </span>
                {/* Overlay and centered project actions */}
                <div className="absolute inset-0 bg-obsidian/55 opacity-0 group-hover:opacity-100 transition-opacity duration-500 grid place-items-center">
                  <div className="flex items-center gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target={link.href !== '#' ? '_blank' : undefined}
                        rel={link.href !== '#' ? 'noreferrer' : undefined}
                        aria-label={`${link.label} : ${project.title}`}
                        className="grid place-items-center w-12 h-12 bg-cream text-ink hover:bg-copper hover:text-cream transition-colors duration-300"
                      >
                        {link.kind === 'github' ? (
                          <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                          </svg>
                        ) : (
                          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                            <path d="M14 3h7v7" />
                            <path d="M10 14 21 3" />
                            <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
                          </svg>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-1 flex-col justify-between gap-5 p-6 md:p-7">
                <div>
                  <h3 className="text-xl font-semibold text-cream mb-2">{project.title}</h3>
                  <p className="text-[12px] leading-[1.6] text-muted-on-dark max-w-[400px] m-0">
                    {project.description}
                  </p>
                </div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 justify-start md:justify-end">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-line-dark px-2.5 py-1.5 text-[9px] text-muted-on-dark whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}