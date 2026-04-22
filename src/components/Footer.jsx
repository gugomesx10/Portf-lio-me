export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/50 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
        <p>
          Feito com <span className="text-red-400">♥</span> por{' '}
          <span className="text-indigo-400 font-semibold">Gustavo Gomes</span>
        </p>

        <p className="flex items-center gap-1">
          <span>☕</span>
          <span>Java Back-end Dev — {new Date().getFullYear()}</span>
        </p>

        <div className="flex gap-5">
          <a
            href="https://github.com/gugomesx10"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/gustavo-gomes-martins/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:gustavogomesmartins4@icloud.com"
            className="hover:text-indigo-400 transition-colors"
          >
            E-mail
          </a>
        </div>
      </div>
    </footer>
  )
}
