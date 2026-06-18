'use client'

import { useEffect, useRef } from 'react'

const links = [
  {
    label: 'Email',
    value: 'junaiddastgir888@gmail.com',
    href: 'mailto:junaiddastgir888@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/junaid-dastgir',
    href: 'https://linkedin.com/in/junaid-dastgir-156127138',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'Portfolio',
    value: 'Upwork Freelancer Profile',
    href: 'https://www.upwork.com/freelancers/~01590982757ccf482b',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
  },
  {
    label: 'Location',
    value: 'Milan, Italy · Open to relocation',
    href: null,
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
  },
]

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="reveal mb-16">
          <p className="text-blue-400 font-mono text-sm mb-2">05. contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Let&apos;s build something together
          </h2>
          <div className="mt-3 w-12 h-0.5 bg-blue-500" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — CTA */}
          <div className="reveal">
            <p className="text-slate-400 leading-relaxed mb-6">
              I&apos;m actively seeking junior to mid-level opportunities in mechanical design,
              simulation, or robotics engineering. If you&apos;re looking for an engineer who
              combines rigorous technical skills with international experience and a sustainable
              design mindset — let&apos;s talk.
            </p>
            <p className="text-slate-500 text-sm mb-8">
              Open to full-time roles, contract work, and research collaborations.
            </p>

            <a
              href="mailto:junaiddastgir888@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white font-medium rounded transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Say Hello
            </a>
          </div>

          {/* Right — links */}
          <div className="reveal grid sm:grid-cols-2 gap-3">
            {links.map((link) => (
              <div key={link.label}>
                {link.href ? (
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="card-glass rounded-lg p-4 flex items-start gap-3 group cursor-pointer block"
                  >
                    <span className="text-blue-400 mt-0.5 flex-shrink-0">{link.icon}</span>
                    <div>
                      <p className="text-xs text-slate-500 font-mono mb-0.5">{link.label}</p>
                      <p className="text-slate-300 text-sm group-hover:text-white transition-colors leading-snug">
                        {link.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="card-glass rounded-lg p-4 flex items-start gap-3">
                    <span className="text-blue-400 mt-0.5 flex-shrink-0">{link.icon}</span>
                    <div>
                      <p className="text-xs text-slate-500 font-mono mb-0.5">{link.label}</p>
                      <p className="text-slate-300 text-sm leading-snug">{link.value}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
