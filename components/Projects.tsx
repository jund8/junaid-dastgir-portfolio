'use client'

import { useEffect, useRef } from 'react'

const featured = [
  {
    number: '01',
    title: 'Deep Groove Ball Bearing Dynamics',
    subtitle: 'Research · LUT University Finland',
    description:
      'Conducted in-depth dynamic analysis of skidding behaviour in deep groove ball bearings under varying load and speed conditions. Developed MATLAB simulation models to predict skidding onset and validate against experimental data. Research paper currently under peer review.',
    tags: ['MATLAB', 'Dynamic Analysis', 'Simulation', 'Tribology', 'Research'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="12" cy="12" r="9" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="3" strokeWidth="1.5"/>
        <path strokeLinecap="round" d="M12 3v3M12 18v3M3 12h3M18 12h3" strokeWidth="1.5"/>
      </svg>
    ),
    color: 'blue',
    badge: 'Paper Under Review',
  },
  {
    number: '02',
    title: '1 kW Organic Rankine Cycle System',
    subtitle: 'Thermodynamic Engineering · Polimi',
    description:
      'Designed and modelled a complete waste heat recovery power generation system based on the Organic Rankine Cycle (ORC). Performed thermodynamic cycle analysis, component sizing, and working fluid selection to maximise output from low-grade industrial heat sources.',
    tags: ['Thermodynamics', 'MATLAB', 'SolidWorks', 'Sustainable Energy', 'CAD'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
    color: 'amber',
    badge: 'Sustainability Focus',
  },
  {
    number: '03',
    title: '3D-Printed Band-Stop Filter Prototype',
    subtitle: 'Additive Manufacturing Research',
    description:
      'Additively manufactured and experimentally evaluated a one-piece electronic band-stop filter prototype, demonstrating that single-body 3D printing is a viable alternative to conventional split-body assembly techniques. Characterised insertion loss and return loss across the target frequency band.',
    tags: ['3D Printing', 'Additive Manufacturing', 'Prototyping', 'Testing', 'RF'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
      </svg>
    ),
    color: 'emerald',
    badge: 'Novel Method',
  },
]

const additional = [
  {
    title: 'EV HVAC with PEMFC Heat Recovery',
    description: 'Designed an HVAC system integrated with Proton Exchange Membrane Fuel Cell waste heat recovery for electric vehicles, improving overall thermal efficiency.',
    tags: ['HVAC', 'EV', 'Thermal Systems'],
  },
  {
    title: 'Passenger Car Suspension Model',
    description: 'Designed and analysed a passenger vehicle suspension system modelled as a mass-spring-damper assembly, optimising ride comfort and handling characteristics.',
    tags: ['Dynamics', 'SolidWorks', 'MATLAB'],
  },
  {
    title: 'Solar E-Bike Retrofitting',
    description: 'Bachelor\'s thesis: designed and validated a solar-supported electric bike retrofitting system, integrating PV panels and a power management circuit.',
    tags: ['Solar Energy', 'Mechatronics', 'CAD'],
  },
  {
    title: 'Textile Tow Truck CAD Assembly',
    description: 'Reverse-engineered and redesigned a textile tow truck assembly in SolidWorks with 30+ components, improving usability and reducing manufacturing cost.',
    tags: ['SolidWorks', 'Reverse Engineering', 'BOM'],
  },
]

const colorMap: Record<string, string> = {
  blue: 'text-blue-400 bg-blue-400/10 border-blue-400/20 group-hover:border-blue-400/40',
  amber: 'text-amber-400 bg-amber-400/10 border-amber-400/20 group-hover:border-amber-400/40',
  emerald: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20 group-hover:border-emerald-400/40',
}

const badgeColor: Record<string, string> = {
  blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)

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
    <section id="projects" ref={ref} className="py-24 px-6 bg-[#080d1a]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="reveal mb-16">
          <p className="text-blue-400 font-mono text-sm mb-2">02. projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Featured work
          </h2>
          <div className="mt-3 w-12 h-0.5 bg-blue-500" />
        </div>

        {/* Featured cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {featured.map((p) => (
            <div
              key={p.number}
              className={`reveal group card-glass rounded-xl p-6 border ${colorMap[p.color]} flex flex-col`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-2 rounded-lg border ${colorMap[p.color]}`}>
                  {p.icon}
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full border font-mono ${badgeColor[p.color]}`}>
                  {p.badge}
                </span>
              </div>

              <p className="font-mono text-xs text-slate-600 mb-1">{p.number}</p>
              <h3 className="text-white font-bold text-lg leading-snug mb-1">{p.title}</h3>
              <p className="text-slate-500 text-xs mb-3 font-mono">{p.subtitle}</p>
              <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">{p.description}</p>

              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <span key={tag} className="tag-pill text-xs px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional projects grid */}
        <div className="reveal mb-4">
          <p className="text-slate-500 text-sm font-mono mb-6">// other notable projects</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {additional.map((p) => (
              <div
                key={p.title}
                className="group card-glass rounded-lg p-5 flex flex-col gap-2"
              >
                <div className="flex items-center gap-2">
                  <span className="text-blue-400/50 font-mono text-xs">▸</span>
                  <h4 className="text-white font-semibold text-sm">{p.title}</h4>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {p.tags.map((tag) => (
                    <span key={tag} className="tag-pill text-xs px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
