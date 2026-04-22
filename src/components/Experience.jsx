import { useInView } from '../hooks/useInView'

const EXPERIENCES = [
  {
    icon: '☕',
    role: 'Desenvolvedor Back-end Java',
    company: 'Projetos Próprios & Freelance',
    period: '2023 – Presente',
    type: 'Desenvolvimento',
    accent: 'indigo',
    items: [
      'Desenvolvimento de APIs REST com Java 17 e Spring Boot 3',
      'Implementação de autenticação com Spring Security e JWT',
      'Integração com bancos SQL (PostgreSQL, MySQL) e NoSQL (MongoDB)',
      'Criação de fluxos de automação com n8n integrando sistemas heterogêneos',
      'Deploy de aplicações na AWS (EC2, RDS, S3) com CI/CD via GitHub Actions',
      'Modelagem de microsserviços com mensageria RabbitMQ e Kafka',
    ],
  },
  {
    icon: '🖥️',
    role: 'Analista de Suporte N2',
    company: 'Empresa de Tecnologia',
    period: '2022 – 2024',
    type: 'Suporte Técnico',
    accent: 'cyan',
    items: [
      'Atendimento e resolução de incidentes técnicos N2 para clientes corporativos',
      'Diagnóstico de falhas em sistemas integrados e APIs REST',
      'Documentação técnica de processos e procedimentos operacionais',
      'Suporte a implantações e atualizações de sistemas em produção',
      'Criação de automações com scripts para agilizar fluxos de suporte',
      'Comunicação técnica com times de desenvolvimento para escalonamento',
    ],
  },
]

const DOT = { indigo: 'bg-indigo-500 shadow-indigo-500/40', cyan: 'bg-cyan-400 shadow-cyan-400/40' }
const BORDER = { indigo: 'border-indigo-500/20', cyan: 'border-cyan-400/20' }
const BADGE = { indigo: 'bg-indigo-500/15 text-indigo-300', cyan: 'bg-cyan-400/15 text-cyan-300' }

export default function Experience() {
  const { ref, inView } = useInView()

  return (
    <section id="experiencia" className="py-24 bg-slate-950">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-2">Trajetória</p>
          <h2 className="text-4xl font-black text-white">
            Minha <span className="gradient-text">Experiência</span>
          </h2>
        </div>

        <div ref={ref} className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500/60 via-cyan-400/30 to-transparent" />

          <div className="space-y-8">
            {EXPERIENCES.map((exp, i) => (
              <div
                key={exp.role}
                className={`relative pl-14 transition-all duration-700 ${
                  inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-3 top-6 w-4 h-4 rounded-full ${DOT[exp.accent]} border-4 border-slate-950 -translate-x-1/2 shadow-lg`}
                />

                <div className={`glass rounded-2xl p-6 border ${BORDER[exp.accent]}`}>
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <span>{exp.icon}</span>
                        {exp.role}
                      </h3>
                      <p className="text-slate-400 text-sm mt-0.5">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <span className="text-xs text-slate-500 bg-slate-800/60 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${BADGE[exp.accent]}`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-1.5">
                    {exp.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-slate-400 text-sm leading-relaxed">
                        <span className="text-indigo-400 mt-0.5 shrink-0 text-xs">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
