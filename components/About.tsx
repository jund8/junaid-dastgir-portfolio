'use client'

import { useEffect, useRef } from 'react'

const education = [
  {
    degree: "M.Sc. Mechanical Engineering",
    school: "Politecnico di Milano",
    period: "2022 – 2025",
    detail: "Grade: 92/110 · Advanced Mechanical Design, Dynamics, Control Systems",
    flag: "🇮🇹",
  },
  {
    degree: "M.Sc. Mechanical Engineering (Erasmus+)",
    school: "LUT University, Finland",
    period: "2023 – 2024",
    detail: "Grade: 3.93/5.0 · Robotics, Mechatronics, Computer-Aided Engineering",
    flag: "🇫🇮",
  },
  {
    degree: "B.Eng. Mechanical Engineering",
    school: "NUST, Pakistan",
    period: "2016 – 2020",
    detail: "CGPA: 3.6/4.0 · Thesis: Solar-Supported E-Bike Retrofitting",
    flag: "🇵🇰",
  },
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.1 }
    )
    const els = ref.current?.querySelectorAll('.reveal')
    els?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="reveal mb-16">
          <p className="text-blue-400 font-mono text-sm mb-2">01. about</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Engineering with purpose
          </h2>
          <div className="mt-3 w-12 h-0.5 bg-blue-500" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — bio */}
          <div className="reveal space-y-5 text-slate-400 leading-relaxed">
            <p>
              I&apos;m a mechanical engineer who bridges the gap between theoretical design and
              manufacturable reality. With an international double degree earned across Italy and
              Finland, I&apos;ve developed a rare combination of precision CAD craftsmanship,
              advanced simulation expertise, and a global engineering perspective.
            </p>
            <p>
              My work spans the full product lifecycle — from initial concept and 3D solid
              modelling in SolidWorks, through structural and thermal validation in ANSYS, to
              hands-on involvement in manufacturing and quality assurance. I&apos;ve designed
              MEP systems for hospitals and industrial plants, engineered robotic workstations,
              and published research on bearing dynamics.
            </p>
            <p>
              I believe the best engineering is both technically rigorous and sustainably
              responsible. Whether designing an HVAC system that cuts energy usage or modelling
              a part for additive manufacturing, I aim for solutions that are{' '}
              <span className="text-slate-300 font-medium">smart, lean, and built to last</span>.
            </p>

            {/* Languages */}
            <div className="pt-2">
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-3 font-mono">Languages</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { lang: 'English', level: 'Bilingual' },
                  { lang: 'Italian', level: 'Intermediate' },
                  { lang: 'Urdu', level: 'Native' },
                  { lang: 'Finnish', level: 'Elementary' },
                ].map((l) => (
                  <span key={l.lang} className="tag-pill text-xs px-3 py-1 rounded-full">
                    {l.lang} <span className="opacity-60">· {l.level}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — education timeline */}
          <div className="reveal space-y-1">
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-6 font-mono">Education</p>
            {education.map((edu, i) => (
              <div key={i} className="relative pl-6 pb-8 last:pb-0">
                {/* Timeline line */}
                {i < education.length - 1 && (
                  <div className="absolute left-[7px] top-4 bottom-0 w-px bg-gradient-to-b from-blue-500/40 to-transparent" />
                )}
                {/* Dot */}
                <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-blue-500 bg-[#0a0f1e]" />

                <div className="card-glass rounded-lg p-4">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-white font-semibold text-sm leading-tight">{edu.degree}</h3>
                    <span className="text-lg flex-shrink-0">{edu.flag}</span>
                  </div>
                  <p className="text-blue-400 text-xs font-medium mb-1">{edu.school}</p>
                  <p className="text-slate-500 text-xs font-mono mb-2">{edu.period}</p>
                  <p className="text-slate-500 text-xs">{edu.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
