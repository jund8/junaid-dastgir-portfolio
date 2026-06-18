'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Animated particles (gears / nodes)
    const particles: { x: number; y: number; vx: number; vy: number; r: number; opacity: number }[] = []
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      })
    }

    let raf: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(59,130,246,${0.08 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(59,130,246,${p.opacity})`
        ctx.fill()

        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
      })

      raf = requestAnimationFrame(animate)
    }

    animate()
    return () => cancelAnimationFrame(raf)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Radial gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(59,130,246,0.12)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(245,158,11,0.06)_0%,transparent_50%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-8"
            style={{ animation: 'fadeUp 0.5s ease-out forwards' }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono text-slate-400">
              Open to Opportunities · Milan, Italy
            </span>
          </div>

          {/* Name */}
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
            style={{ animation: 'fadeUp 0.6s ease-out 0.1s both' }}
          >
            Junaid
            <span className="block gradient-text">Dastgir</span>
          </h1>

          {/* Tagline */}
          <p
            className="text-lg sm:text-xl text-slate-300 mb-4 font-light leading-relaxed"
            style={{ animation: 'fadeUp 0.6s ease-out 0.2s both' }}
          >
            From blueprint to reality —{' '}
            <span className="text-blue-400 font-medium">
              precision engineering at every stage
            </span>
          </p>

          <p
            className="text-slate-400 max-w-xl mb-10 leading-relaxed"
            style={{ animation: 'fadeUp 0.6s ease-out 0.3s both' }}
          >
            Mechanical engineer with a double Master&apos;s from{' '}
            <span className="text-slate-300">Politecnico di Milano</span> &amp;{' '}
            <span className="text-slate-300">LUT University Finland</span>. Specializing in
            CAD/CAM design, FEA/CFD simulation, robotics, and sustainable engineering systems.
          </p>

          {/* Stats row */}
          <div
            className="flex flex-wrap gap-6 mb-10"
            style={{ animation: 'fadeUp 0.6s ease-out 0.35s both' }}
          >
            {[
              { value: '12+', label: 'MEP Projects' },
              { value: '30+', label: 'CAD Components' },
              { value: '3×', label: 'SolidWorks Certified' },
              { value: '2', label: "Master's Degrees" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl font-bold text-blue-400">{stat.value}</span>
                <span className="text-xs text-slate-500 mt-0.5">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4"
            style={{ animation: 'fadeUp 0.6s ease-out 0.4s both' }}
          >
            <button
              onClick={() => scrollTo('projects')}
              className="px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white font-medium rounded transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="px-6 py-3 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-medium rounded transition-all duration-200 active:scale-95"
            >
              Get in Touch
            </button>
            <a
              href="https://linkedin.com/in/junaid-dastgir-156127138"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-slate-700 hover:border-blue-500/40 text-slate-400 hover:text-blue-400 font-medium rounded transition-all duration-200 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
        style={{ animation: 'fadeIn 1s ease-out 1s both' }}
      >
        <span className="text-xs font-mono text-slate-500">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-blue-400 to-transparent animate-pulse" />
      </div>

      {/* Engineering decoration — corner bracket */}
      <div className="absolute bottom-16 right-8 hidden lg:block opacity-10">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <circle cx="60" cy="60" r="55" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="4 4"/>
          <circle cx="60" cy="60" r="35" stroke="#3b82f6" strokeWidth="0.5"/>
          <line x1="5" y1="60" x2="115" y2="60" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="6 3"/>
          <line x1="60" y1="5" x2="60" y2="115" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="6 3"/>
          <circle cx="60" cy="60" r="4" fill="#3b82f6" fillOpacity="0.4"/>
        </svg>
      </div>
    </section>
  )
}
