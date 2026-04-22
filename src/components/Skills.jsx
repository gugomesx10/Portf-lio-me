import { useInView } from '../hooks/useInView'

const CATEGORIES = [
  {
    title: 'Back-end',
    icon: '⚙️',
    accent: 'indigo',
    skills: [
      { name: 'Java',          pct: 82, icon: '☕' },
      { name: 'Spring Boot',   pct: 78, icon: '🍃' },
      { name: 'APIs REST',     pct: 85, icon: '🔌' },
      { name: 'Microsserviços',pct: 68, icon: '🧩' },
    ],
  },
  {
    title: 'Mensageria & Cloud',
    icon: '☁️',
    accent: 'cyan',
    skills: [
      { name: 'RabbitMQ',       pct: 62, icon: '🐇' },
      { name: 'Kafka',          pct: 56, icon: '📨' },
      { name: 'AWS (EC2/S3/RDS)',pct: 63, icon: '☁️' },
      { name: 'Docker',         pct: 66, icon: '🐳' },
    ],
  },
  {
    title: 'Banco de Dados',
    icon: '🗄️',
    accent: 'violet',
    skills: [
      { name: 'PostgreSQL', pct: 78, icon: '🐘' },
      { name: 'MySQL',      pct: 76, icon: '🐬' },
      { name: 'MongoDB',    pct: 65, icon: '🌿' },
      { name: 'Redis',      pct: 54, icon: '🔴' },
    ],
  },
  {
    title: 'Ferramentas & Automação',
    icon: '🛠️',
    accent: 'emerald',
    skills: [
      { name: 'Git / GitHub', pct: 88, icon: '🌿' },
      { name: 'n8n',          pct: 78, icon: '🔄' },
      { name: 'Maven',        pct: 72, icon: '📦' },
      { name: 'Postman',      pct: 82, icon: '📬' },
    ],
  },
]

const BAR_COLOR = {
  indigo:  'bg-indigo-500',
  cyan:    'bg-cyan-400',
  violet:  'bg-violet-500',
  emerald: 'bg-emerald-500',
}

const BORDER_COLOR = {
  indigo:  'border-indigo-500/20',
  cyan:    'border-cyan-400/20',
  violet:  'border-violet-500/20',
  emerald: 'border-emerald-500/20',
}

export default function Skills() {
  const { ref, inView } = useInView()

  return (
    <section id="skills" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-2">O que eu sei</p>
          <h2 className="text-4xl font-black text-white">
            Tech <span className="gradient-text">Stack</span>
          </h2>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-6">
          {CATEGORIES.map((cat, ci) => (
            <div
              key={cat.title}
              className={`glass rounded-2xl p-6 border ${BORDER_COLOR[cat.accent]} card-hover transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${ci * 80}ms` }}
            >
              <h3 className="text-base font-bold text-white mb-5 flex items-center gap-2">
                <span className="text-lg">{cat.icon}</span>
                {cat.title}
              </h3>

              <div className="space-y-4">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-slate-300 text-sm font-medium flex items-center gap-1.5">
                        <span>{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="text-slate-500 text-xs tabular-nums">{skill.pct}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${BAR_COLOR[cat.accent]} transition-all duration-1000 ease-out`}
                        style={{
                          width: inView ? `${skill.pct}%` : '0%',
                          transitionDelay: `${ci * 80 + si * 70}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
