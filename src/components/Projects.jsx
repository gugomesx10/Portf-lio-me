import { useInView } from '../hooks/useInView'

const PROJECTS = [
  {
    icon: '🛒',
    title: 'API REST de E-commerce',
    type: 'Back-end',
    accent: 'indigo',
    description:
      'API completa com autenticação JWT, CRUD de produtos e pedidos, integração com gateway de pagamento e documentação automática via Swagger/OpenAPI.',
    tags: ['Java 17', 'Spring Boot', 'PostgreSQL', 'JWT', 'Swagger'],
    github: 'https://github.com/gugomesx10',
    demo: null,
  },
  {
    icon: '🧩',
    title: 'Microsserviços com Mensageria',
    type: 'Microsserviços',
    accent: 'cyan',
    description:
      'Arquitetura distribuída com comunicação assíncrona via RabbitMQ, service discovery com Eureka, API Gateway e circuit breaker com Resilience4j.',
    tags: ['Java', 'Spring Cloud', 'RabbitMQ', 'Docker', 'Eureka'],
    github: 'https://github.com/gugomesx10',
    demo: null,
  },
  {
    icon: '🔄',
    title: 'Automação de Processos n8n',
    type: 'Automação',
    accent: 'emerald',
    description:
      'Fluxos de automação integrando APIs externas, notificações via WhatsApp e e-mail e sincronização de dados entre sistemas heterogêneos sem código.',
    tags: ['n8n', 'REST APIs', 'Webhooks', 'WhatsApp API'],
    github: 'https://github.com/gugomesx10',
    demo: null,
  },
  {
    icon: '🖥️',
    title: 'Sistema Full Stack de Gestão',
    type: 'Full Stack',
    accent: 'violet',
    description:
      'Aplicação web completa com back-end em Spring Boot, front-end React, banco PostgreSQL em produção na AWS EC2 com deploy automatizado via GitHub Actions.',
    tags: ['Java', 'Spring Boot', 'React', 'AWS', 'GitHub Actions'],
    github: 'https://github.com/gugomesx10',
    demo: null,
  },
]

const C = {
  indigo:  { border: 'border-indigo-500/20', badge: 'bg-indigo-600',      tag: 'bg-indigo-500/15 text-indigo-300', link: 'text-indigo-400 hover:text-indigo-300' },
  cyan:    { border: 'border-cyan-400/20',   badge: 'bg-cyan-600',        tag: 'bg-cyan-400/15 text-cyan-300',     link: 'text-cyan-400 hover:text-cyan-300' },
  emerald: { border: 'border-emerald-500/20',badge: 'bg-emerald-600',     tag: 'bg-emerald-500/15 text-emerald-300',link: 'text-emerald-400 hover:text-emerald-300' },
  violet:  { border: 'border-violet-500/20', badge: 'bg-violet-600',      tag: 'bg-violet-500/15 text-violet-300', link: 'text-violet-400 hover:text-violet-300' },
}

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
)

export default function Projects() {
  const { ref, inView } = useInView()

  return (
    <section id="projetos" className="py-24 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-2">O que eu construí</p>
          <h2 className="text-4xl font-black text-white">
            Meus <span className="gradient-text">Projetos</span>
          </h2>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => {
            const c = C[p.accent]
            return (
              <article
                key={p.title}
                className={`glass rounded-2xl p-6 border ${c.border} card-hover flex flex-col transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{p.icon}</div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full text-white ${c.badge}`}>
                    {p.type}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{p.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tags.map(tag => (
                    <span key={tag} className={`text-xs px-2.5 py-1 rounded-md font-medium ${c.tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${c.link}`}
                  >
                    <GithubIcon />
                    Código
                  </a>
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-white transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Demo
                    </a>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
