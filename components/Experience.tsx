'use client'

import { useEffect, useRef, useState } from 'react'

const experiences = [
  {
    role: 'Mechanical Design Engineer — CAD/CAM',
    company: 'Al Ameen Trading Corporation',
    period: 'Jun 2022 – Aug 2022',
    location: 'Karachi, Pakistan',
    bullets: [
      'Modelled 30+ components in SolidWorks to produce a production-ready textile tow truck assembly, improving design accuracy and reducing rework cycles.',
      'Generated laser cutting patterns for sheet metal parts and produced a full bill of materials (BOM) with manufacturing cost estimates.',
      'Reverse-engineered existing product features and introduced design modifications that improved overall usability and manufacturability.',
    ],
    tags: ['SolidWorks', 'Sheet Metal', 'BOM', 'Reverse Engineering'],
  },
  {
    role: 'Mechanical Design Engineer — MEP Consultant',
    company: 'IEMA Consultants',
    period: 'Aug 2021 – May 2022',
    location: 'Karachi, Pakistan',
    bullets: [
      'Delivered complete MEP designs (HVAC, Medical Gases, Compressed Air, Firefighting) for 12 projects across hospitals, schools, shopping centres, and industrial plants.',
      'Ensured all designs met international energy efficiency and safety standards; assisted with site surveys, load calculations, and cost estimates.',
      'Coordinated with project managers and contractors to maintain on-time delivery across simultaneous multi-sector projects.',
    ],
    tags: ['HVAC', 'MEP', 'AutoCAD', 'Energy Efficiency', 'Project Coordination'],
  },
  {
    role: 'On-Job Trainee — Manufacturing & Quality',
    company: 'Karachi Shipyard & Engineering Works Ltd.',
    period: 'Dec 2020 – May 2021',
    location: 'Karachi, Pakistan',
    bullets: [
      'Supervised machining operations for precision fasteners (nuts, bolts, studs) on lathe and milling machines, enforcing dimensional tolerances.',
      'Documented factory acceptance test (FAT) reports for weld-quality inspections based on Procedure Qualification Records (PQR) and Welding Procedure Specifications (WPS).',
    ],
    tags: ['Quality Assurance', 'Machining', 'Welding Inspection', 'PQR/WPS'],
  },
]

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="reveal mb-16">
          <p className="text-blue-400 font-mono text-sm mb-2">03. experience</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Where I&apos;ve worked
          </h2>
          <div className="mt-3 w-12 h-0.5 bg-blue-500" />
        </div>

        <div className="reveal grid md:grid-cols-[200px_1fr] gap-8">
          {/* Tab list */}
          <div className="flex md:flex-col gap-1 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            {experiences.map((exp, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex-shrink-0 text-left px-4 py-3 rounded text-sm font-medium transition-all duration-200 border-l-2 ${
                  active === i
                    ? 'border-blue-500 bg-blue-500/10 text-blue-400'
                    : 'border-transparent text-slate-500 hover:text-slate-300 hover:border-slate-600'
                }`}
              >
                <span className="block truncate">{exp.company}</span>
                <span className="block text-xs font-mono opacity-60 mt-0.5">{exp.period.split(' – ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Content panel */}
          <div
            key={active}
            className="card-glass rounded-xl p-6 lg:p-8"
            style={{ animation: 'fadeIn 0.3s ease-out' }}
          >
            <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
              <h3 className="text-white font-bold text-xl">{experiences[active].role}</h3>
              <span className="text-xs font-mono text-slate-500 bg-slate-800/50 px-2 py-1 rounded">
                {experiences[active].period}
              </span>
            </div>
            <p className="text-blue-400 font-medium mb-1">{experiences[active].company}</p>
            <p className="text-slate-500 text-xs font-mono mb-6 flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              {experiences[active].location}
            </p>

            <ul className="space-y-3 mb-6">
              {experiences[active].bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                  <span className="text-blue-400 mt-1 flex-shrink-0">▸</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {experiences[active].tags.map((tag) => (
                <span key={tag} className="tag-pill text-xs px-2.5 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
