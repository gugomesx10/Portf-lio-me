import { useEffect, useState } from 'react'

const ROLES = [
  'Dev Back-end Java',
  'Spring Boot',
  'APIs REST',
  'Automação com n8n',
  'Microsserviços',
]

const GithubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

export default function Hero() {
  const [roleIdx, setRoleIdx]       = useState(0)
  const [displayed, setDisplayed]   = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  /* Typing animation */
  useEffect(() => {
    const current = ROLES[roleIdx]
    let timer

    if (!isDeleting && displayed.length < current.length) {
      timer = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75)
    } else if (!isDeleting && displayed.length === current.length) {
      timer = setTimeout(() => setIsDeleting(true), 2200)
    } else if (isDeleting && displayed.length > 0) {
      timer = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40)
    } else {
      setIsDeleting(false)
      setRoleIdx(i => (i + 1) % ROLES.length)
    }

    return () => clearTimeout(timer)
  }, [displayed, isDeleting, roleIdx])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/40" />
      <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-indigo-600/8 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-cyan-400/6 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-32 w-full flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">

        {/* ── Text ── */}
        <div className="flex-1 text-center md:text-left animate-slide-up">

          <p className="inline-flex items-center gap-2 text-indigo-400 text-sm font-medium tracking-widest uppercase mb-4 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5">
            <span>👋</span> Disponível para novas oportunidades
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-3">
            <span className="text-white">Gustavo </span>
            <span className="gradient-text">Gomes</span>
          </h1>

          {/* Typing effect */}
          <div className="flex items-center justify-center md:justify-start gap-1 text-xl md:text-2xl font-bold text-slate-300 mb-6 h-9">
            <span className="text-cyan-400 text-lg">&lt;</span>
            <span className="min-w-0">{displayed}</span>
            <span className="text-indigo-400 animate-pulse font-thin">|</span>
            <span className="text-cyan-400 text-lg">/&gt;</span>
          </div>

          <p className="text-slate-400 text-base md:text-lg max-w-xl mb-8 leading-relaxed mx-auto md:mx-0">
            Desenvolvedor Back-end focado em{' '}
            <strong className="text-indigo-400">Java</strong> e{' '}
            <strong className="text-cyan-400">Spring Boot</strong>, construindo
            APIs REST robustas, microsserviços e automações que geram valor real
            para o negócio.
          </p>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
            <a
              href="#projetos"
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-semibold transition-all duration-200 shadow-lg shadow-indigo-500/25"
            >
              Ver Projetos
            </a>
            <a
              href="#contato"
              className="px-6 py-3 rounded-xl border border-indigo-500/40 text-indigo-300 hover:border-indigo-400 hover:text-white font-semibold transition-all duration-200"
            >
              Entrar em Contato
            </a>
          </div>

          {/* Social links */}
          <div className="flex gap-5 justify-center md:justify-start">
            <a
              href="https://github.com/gugomesx10"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/gustavo-gomes-martins/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-blue-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="mailto:gustavogomesmartins4@icloud.com"
              className="text-slate-500 hover:text-indigo-400 transition-colors duration-200"
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* ── Photo ── */}
        <div className="flex-shrink-0 animate-slide-in-right">
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 blur-2xl opacity-15 animate-pulse-slow" />

            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-indigo-500/25 shadow-2xl shadow-indigo-500/20">
              <img
                src="/foto.jpg"
                alt="Gustavo Gomes"
                className="w-full h-full object-cover object-top"
                onError={e => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.parentElement.style.cssText +=
                    'background: linear-gradient(135deg,#4f46e5,#06b6d4); display:flex; align-items:center; justify-content:center;'
                  const span = document.createElement('span')
                  span.textContent = 'GG'
                  span.style.cssText = 'color:white; font-size:3rem; font-weight:900;'
                  e.currentTarget.parentElement.appendChild(span)
                }}
              />
            </div>

            {/* Java badge */}
            <div className="absolute -bottom-2 -right-2 flex items-center gap-1 bg-indigo-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-indigo-500/30">
              ☕ Java Dev
            </div>
            {/* Available badge */}
            <div className="absolute -top-2 -left-2 flex items-center gap-1 bg-emerald-600/90 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Open to work
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 animate-bounce-slow">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
