import { useInView } from '../hooks/useInView'

const STATS = [
  { value: '5+',  label: 'Projetos' },
  { value: '10+', label: 'Tecnologias' },
  { value: '2+',  label: 'Anos Dev' },
]

const INFO = [
  { label: 'Localização',   value: 'São Paulo, SP – BR' },
  { label: 'Foco',          value: 'Back-end Java' },
  { label: 'Disponibilidade', value: 'Imediata' },
  { label: 'Modalidade',    value: 'Remoto / Híbrido' },
]

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section id="sobre" className="py-24 bg-slate-900/50">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-2">Quem sou eu</p>
          <h2 className="text-4xl font-black text-white">
            Sobre <span className="gradient-text">Mim</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Photo side */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-indigo-600/20 to-cyan-400/10 rounded-3xl blur-2xl" />
              <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden border border-indigo-500/20 shadow-2xl">
                <img
                  src="/foto.jpg"
                  alt="Gustavo Gomes"
                  className="w-full h-full object-cover object-top"
                  onError={e => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.parentElement.classList.add(
                      'bg-gradient-to-br','from-slate-800','to-indigo-900',
                      'flex','items-center','justify-center'
                    )
                    e.currentTarget.parentElement.innerHTML =
                      '<div class="text-center"><div class="text-6xl mb-3">👨‍💻</div><p class="text-white font-bold text-lg">Gustavo Gomes</p><p class="text-indigo-400 text-sm">Java Dev</p></div>'
                  }}
                />
              </div>

              {/* Floating stat badges */}
              {STATS.map((s, i) => (
                <div
                  key={s.label}
                  className={`absolute glass rounded-xl px-4 py-2 shadow-xl ${
                    i === 0 ? '-bottom-4 -right-4' :
                    i === 1 ? '-top-4 -left-4' :
                    'bottom-1/3 -right-8'
                  }`}
                >
                  <p className="text-xs text-slate-500">{s.label}</p>
                  <p className="text-xl font-black text-indigo-400">{s.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Text side */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 leading-snug">
              Apaixonado por construir soluções{' '}
              <span className="text-indigo-400">back-end robustas e escaláveis</span>
            </h3>

            <p className="text-slate-400 mb-4 leading-relaxed">
              Sou Gustavo Gomes, desenvolvedor back-end com foco em{' '}
              <strong className="text-white">Java</strong> e ecossistema{' '}
              <strong className="text-white">Spring Boot</strong>. Tenho experiência
              construindo APIs REST escaláveis, microsserviços e automações de
              processos com <strong className="text-white">n8n</strong> que eliminam
              tarefas manuais e geram eficiência operacional.
            </p>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Minha trajetória inclui atuação como{' '}
              <strong className="text-white">Analista de Suporte N2</strong>, onde
              desenvolvi visão sistêmica, capacidade de resolução de problemas
              complexos e comunicação técnica efetiva — habilidades que complementam
              diretamente minha atuação como desenvolvedor.
            </p>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-3 mb-7">
              {INFO.map(item => (
                <div key={item.label} className="glass rounded-lg p-3 border border-indigo-500/10">
                  <p className="text-xs text-slate-500 mb-0.5">{item.label}</p>
                  <p className="text-sm font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>

            <a
              href="/curriculo.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white font-semibold transition-all duration-200 shadow-lg shadow-indigo-500/20"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Currículo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
