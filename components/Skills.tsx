'use client'

import { useEffect, useRef, useState } from 'react'

const categories = [
  {
    title: 'CAD / Design',
    icon: '⚙️',
    skills: [
      { name: 'SolidWorks', level: 95 },
      { name: 'AutoCAD', level: 85 },
      { name: 'SolidWorks CAM', level: 75 },
      { name: '3D Printing / AM', level: 80 },
      { name: 'Sheet Metal Design', level: 78 },
    ],
  },
  {
    title: 'Simulation & Analysis',
    icon: '🔬',
    skills: [
      { name: 'ANSYS (FEA/CFD)', level: 82 },
      { name: 'MATLAB', level: 88 },
      { name: 'SolidWorks Simulation', level: 85 },
      { name: 'Dynamic Analysis', level: 78 },
      { name: 'Thermal Analysis', level: 72 },
    ],
  },
  {
    title: 'Robotics & Mechatronics',
    icon: '🤖',
    skills: [
      { name: 'Yaskawa Visual Components', level: 75 },
      { name: 'Control Systems', level: 78 },
      { name: 'CNC Programming (Level I)', level: 70 },
      { name: 'C++', level: 65 },
      { name: 'Sensor Integration', level: 68 },
    ],
  },
  {
    title: 'MEP & Energy Systems',
    icon: '🏗️',
    skills: [
      { name: 'HVAC Design', level: 88 },
      { name: 'MEP Coordination', level: 82 },
      { name: 'Organic Rankine Cycle', level: 75 },
      { name: 'Solar Energy Systems', level: 78 },
      { name: 'Building Services', level: 80 },
    ],
  },
]

const certifications = [
  { name: 'Certified SolidWorks CAD Design Associate', issuer: 'Dassault Systèmes', year: '2025' },
  { name: 'Certified SolidWorks Sustainability Associate', issuer: 'Dassault Systèmes', year: '2025' },
  { name: 'Certified SolidWorks Simulation Associate', issuer: 'Dassault Systèmes', year: '2025' },
  { name: 'Machining Level I — CNC Milling', issuer: 'KTDMC', year: '2018' },
  { name: 'Solar Energy & Electrical System Design', issuer: 'University at Buffalo / Coursera', year: '2020' },
  { name: 'New Product Development for Start-Ups', issuer: 'LinkedIn Learning', year: '2020' },
]

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            setVisible(true)
          }
        })
      },
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref} className="py-24 px-6 bg-[#080d1a]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="reveal mb-16">
          <p className="text-blue-400 font-mono text-sm mb-2">04. skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Technical toolkit
          </h2>
          <div className="mt-3 w-12 h-0.5 bg-blue-500" />
        </div>

        {/* Skill categories */}
        <div className="reveal grid sm:grid-cols-2 gap-6 mb-16">
          {categories.map((cat) => (
            <div key={cat.title} className="card-glass rounded-xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <span className="text-xl">{cat.icon}</span>
                <h3 className="text-white font-semibold">{cat.title}</h3>
              </div>
              <div className="space-y-3">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-300 text-sm">{skill.name}</span>
                      <span className="text-slate-600 text-xs font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-1000 ease-out"
                        style={{ width: visible ? `${skill.level}%` : '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="reveal">
          <p className="text-xs text-slate-500 uppercase tracking-widest mb-6 font-mono">
            Certifications & Courses
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {certifications.map((cert) => (
              <div key={cert.name} className="cert-badge rounded-lg p-4 flex flex-col gap-1">
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span className="text-slate-300 text-sm font-medium leading-snug">{cert.name}</span>
                </div>
                <div className="pl-6 flex items-center gap-2">
                  <span className="text-slate-600 text-xs">{cert.issuer}</span>
                  <span className="text-amber-400/50 text-xs font-mono">· {cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft skills */}
        <div className="reveal mt-12">
          <p className="text-xs text-slate-500 uppercase tracking-widest mb-4 font-mono">
            Core Competencies
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              'Problem Solving', 'Cross-functional Teamwork', 'Adaptability',
              'Technical Documentation', 'Project Management', 'Research & Analysis',
              'Sustainability Engineering', 'International Collaboration',
            ].map((skill) => (
              <span key={skill} className="tag-pill text-sm px-3 py-1.5 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
