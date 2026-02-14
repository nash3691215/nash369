export default function TeaserPage() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] flex items-center justify-center px-6">
      <div className="max-w-lg text-center space-y-8">
        {/* Logo */}
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          NASH<span className="text-[#6C3AED]">369</span>
        </h1>

        {/* Teaser */}
        <div className="space-y-4">
          <p className="text-lg text-white/80 leading-relaxed">
            Quelque chose arrive pour les <strong className="text-white">indie hackers</strong> et <strong className="text-white">micro-createurs</strong> francais.
          </p>
          <p className="text-base text-white/50">
            Un guide gratuit + des ebooks pour lancer et automatiser ton business avec l&apos;IA en 2026.
          </p>
        </div>

        {/* Badges teaser */}
        <div className="flex flex-wrap justify-center gap-3">
          <span className="rounded-full border border-[#6C3AED]/30 bg-[#6C3AED]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[#8B5CF6]">
            Sites web en 5 min
          </span>
          <span className="rounded-full border border-[#2563EB]/30 bg-[#2563EB]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[#3B82F6]">
            Automatisation N8N
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white/50">
            Zero code
          </span>
        </div>

        {/* Coming soon */}
        <div className="pt-4 space-y-3">
          <p className="text-2xl font-extrabold text-[#6C3AED]">
            Lancement imminent
          </p>
          <p className="text-sm text-white/30">
            Reste connecte — ca va valoir le coup.
          </p>
        </div>

        {/* Social */}
        <div className="pt-4">
          <a
            href="https://x.com/nash369_"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm font-semibold text-white/60 transition hover:border-[#6C3AED]/40 hover:text-white"
          >
            Suivre @nash369_ sur X &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
