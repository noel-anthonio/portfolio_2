function formatDuration(startDate: string, endDate?: string) {
  const start = new Date(`${startDate}T00:00:00Z`)
  const end = endDate
    ? new Date(`${endDate}T00:00:00Z`)
    : new Date(`${new Date().toISOString().slice(0, 10)}T00:00:00Z`)
  let cursor = new Date(start)
  let years = 0
  let months = 0
  let days = 0

  while (true) {
    const next = new Date(cursor)
    next.setUTCFullYear(next.getUTCFullYear() + 1)
    if (next > end) break
    cursor = next
    years += 1
  }

  while (true) {
    const next = new Date(cursor)
    next.setUTCMonth(next.getUTCMonth() + 1)
    if (next > end) break
    cursor = next
    months += 1
  }

  days = Math.floor((end.getTime() - cursor.getTime()) / 86400000)
  const parts = []
  if (years) parts.push(`${years} an${years > 1 ? 's' : ''}`)
  if (months) parts.push(`${months} mois`)
  if (days) parts.push(`${days} jour${days > 1 ? 's' : ''}`)

  return parts.length > 1 ? `${parts.slice(0, -1).join(' ')} et ${parts.at(-1)}` : parts[0] || '0 jour'
}

const experiences = [
  {
    date: 'Juillet 2026 — aujourd’hui',
    startDate: '2026-07-01',
    role: 'Statisticien',
    company: 'ADM VALUE',
    highlights: [
      "Analyse et traitement des données statistiques afin d'identifier les tendances, évolutions et variations de l'activité.",
      "Analyse des tendances et prévisions d'activité pour anticiper les besoins et accompagner la prise de décision.",
      "Réalisation du dimensionnement des ressources en fonction des volumes d'activité, des besoins opérationnels et des capacités disponibles.",
    ],
  },
  {
    date: 'Juillet 2025 — Juin 2026',
    startDate: '2025-07-01',
    endDate: '2026-07-01',
    role: 'Dataminer',
    company: 'ADM VALUE',
    highlights: [
      "Extraction et préparation des données issues des outils internes (Excel), avec nettoyage, consolidation et automatisation des traitements via VBA.",
      "Analyse et reporting de la performance opérationnelle : suivi de la production, de la qualité et des SLA, avec création de tableaux de bord dynamiques pour le management.",
      "Support à la direction à travers des analyses quantitatives et qualitatives.",
      "Automatisation des tâches répétitives et formatage des données pour fiabiliser et accélérer le pilotage.",
      "Collaboration avec les équipes métiers pour améliorer la performance et la qualité des données.",
    ],
  },
  {
    date: 'Février 2024 — Décembre 2024',
    startDate: '2024-02-01',
    endDate: '2025-01-01',
    role: 'Dataminer',
    company: 'Société Générale Madagascar',
    highlights: [
      "Analyse et traitement des données clients pour nourrir la stratégie.",
      "Création et automatisation de tableaux de bord Excel/VBA.",
      "Suivi des performances commerciales et reporting à la direction.",
    ],
  },
  {
    date: 'Avril 2023 — Janvier 2024',
    startDate: '2023-04-01',
    endDate: '2024-02-01',
    role: 'Chargé Reporting',
    company: 'Odity',
    highlights: [
      "Conception et mise à jour de reportings opérationnels.",
      "Définition et suivi de KPI (taux d'appels, DMT, taux de résolution).",
      "Diffusion des rapports via une application web et traitement T-SQL.",
    ],
  },
  {
    date: 'Décembre 2022 — Janvier 2023',
    startDate: '2022-12-01',
    endDate: '2023-02-01',
    role: 'Stagiaire développeur web',
    company: 'CFA-ASA Andrainarivo',
    highlights: [
      "Développement d'une plateforme web responsive.",
      "Intégration d'une base MySQL et de Chart.js pour statistiques dynamiques.",
      "Support technique et collecte de données.",
    ],
  },
  {
    date: 'Juillet 2021 — Mars 2022',
    startDate: '2021-07-01',
    endDate: '2022-04-01',
    role: 'Opérateur saisie de données',
    company: 'NUMEN Madagascar',
    highlights: [
      "Saisie massive de documents administratifs et financiers.",
      "Contrôle qualité et vérification de cohérence des données saisies.",
      "Respect strict des normes de confidentialité et des délais de production.",
    ],
  },
  {
    date: 'Avril 2018 — Septembre 2018',
    startDate: '2018-04-01',
    endDate: '2018-10-01',
    role: 'Assistant KPI',
    company: 'Area Malaza Ampitatafika',
    highlights: [
      "Collecte et traitement de données opérationnelles pour produire des KPIs fiables.",
      "Suivi des performances des équipes et aide à la prise de décision par des visualisations claires.",
    ],
  },
]

export function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-night text-cream py-24 md:py-32 overflow-hidden"
    >
      <div className="section-frame max-w-[1200px] mx-auto px-6">
        {/* Split heading */}
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <p className="inline-flex border-l-2 border-copper pl-3 text-[10px] uppercase tracking-[0.2em] font-bold text-muted-on-dark mb-5">
              03 — Chemin parcouru
            </p>
            <h2 className="font-display font-normal text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-tight">
              Les expériences<br />
              qui m'ont <em className="italic text-copper-dim">construit.</em>
            </h2>
          </div>
        </div>

        {/* Experience list */}
        <div className="border-t border-line-dark">
          {experiences.map((exp, i) => (
            <article
              key={i}
              className={`reveal reveal-delay-${Math.min(i + 1, 4)} group grid md:grid-cols-[220px_1fr] gap-6 md:gap-12 border-b border-line-dark py-8 transition-colors duration-300 hover:bg-copper/10`}
            >
              <div className="text-[11px] text-muted-on-dark pt-1 font-medium">
                <span className="block">{exp.date}</span>
                <small className="block mt-2 text-copper-glow font-bold">
                  {formatDuration(exp.startDate, exp.endDate)}
                </small>
              </div>
              <div>
                <h3 className="text-xl font-semibold tracking-tight mb-4 flex items-baseline gap-3 flex-wrap">
                  {exp.role}
                  <small className="text-[11px] text-copper-glow font-bold">{exp.company}</small>
                </h3>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, j) => (
                    <li
                      key={j}
                      className="text-[13px] leading-[1.7] text-muted-on-dark max-w-[680px] flex gap-3"
                    >
                      <span className="text-copper-dim mt-1.5 shrink-0">—</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}