"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "../components/Button";
import { PricingCard } from "../components/PricingCard";
import { ComparisonTable } from "../components/ComparisonTable";
import { FAQ } from "../components/FAQ";
import { pricing, comparison, faq, bullets, ebookDetails, CTA_LINKS, AFFILIATE_LINKS, leadMagnet } from "../lib/config";

const bulletIcons = ["🌐", "🤖", "💰"];

function renderAffiliateLinks(text: string) {
  const parts = text.split(/(Hostinger|N8N|Make)/gi);
  return parts.map((part, i) => {
    const lower = part.toLowerCase();
    if (lower === "hostinger") return <a key={i} href={AFFILIATE_LINKS.HOSTINGER} target="_blank" rel="noreferrer" className="link-brand">{part}</a>;
    if (lower === "n8n") return <a key={i} href={AFFILIATE_LINKS.N8N} target="_blank" rel="noreferrer" className="link-accent">{part}</a>;
    if (lower === "make") return <a key={i} href={AFFILIATE_LINKS.MAKE} target="_blank" rel="noreferrer" className="link-accent">{part}</a>;
    return <span key={i}>{part}</span>;
  });
}

function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-xl border border-accent/20 bg-accent/5 p-4 text-center"
      >
        <span className="text-lg">✅</span>
        <p className="mt-1 text-sm font-semibold text-dark">{leadMagnet.emailSuccess}</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={leadMagnet.emailPlaceholder}
        required
        className="flex-1 rounded-full border border-dark/15 bg-white px-5 py-3 text-sm text-dark placeholder:text-dark/35 focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/10 transition"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-full bg-accent text-white px-6 py-3 text-sm font-semibold transition hover:bg-accent-dark hover:shadow-glow hover:translate-y-[-1px] active:translate-y-[0] disabled:opacity-50 whitespace-nowrap"
      >
        {status === "loading" ? "..." : leadMagnet.emailCta}
      </button>
    </form>
  );
}

export default function HomePage() {
  return (
    <div className="bg-white text-dark">
      {/* Barre promo */}
      <div className="border-b border-accent/20 bg-accent text-white">
        <div className="container-balanced py-3 text-center text-sm font-medium tracking-wide">
          🔥 Offre lancement : prix reduits pendant <strong>14 jours</strong>. Bundle <strong>89&euro;</strong> au lieu de <span className="line-through opacity-70">189&euro;</span>
        </div>
      </div>

      {/* HERO — Lead Magnet avec capture email */}
      <header className="container-balanced pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <p className="inline-block rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-accent">
            {leadMagnet.badge}
          </p>
          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Profite de <span className="highlight">l&apos;IA en 2026</span> pour gagner du temps et de l&apos;<span className="highlight-brand">argent</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg leading-relaxed text-dark/60">
            {leadMagnet.subtitle}
          </p>

          {/* Email capture */}
          <div className="pt-2">
            <EmailCapture />
            <p className="mt-3 text-xs text-dark/40">
              Gratuit. Pas de spam. Desabonnement en un clic.
            </p>
          </div>
        </motion.div>
      </header>

      <main className="space-y-0">
        {/* Cibles + Stats */}
        <section className="bg-soft">
          <div className="container-balanced space-y-8">
            {/* Cibles */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {leadMagnet.targets.map((target) => (
                <div key={target.label} className="rounded-xl border border-dark/8 bg-white p-4 text-center card-glow">
                  <p className="text-sm font-bold text-dark">{target.label}</p>
                  <p className="text-xs text-dark/50">{target.sub}</p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {leadMagnet.stats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-dark/8 bg-white p-5 text-center card-glow">
                  <p className="text-2xl sm:text-3xl font-extrabold text-accent">{stat.value}</p>
                  <p className="mt-1 text-xs text-dark/50">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5 systemes */}
        <section>
          <div className="container-balanced space-y-8">
            <div className="max-w-2xl mx-auto text-center space-y-3">
              <p className="inline-block rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-accent">
                Dans le guide gratuit
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                5 systemes concrets
              </h2>
              <p className="text-base text-dark/60">
                Automatise ton activite. Vends ces services a d&apos;autres.
              </p>
            </div>
            <div className="space-y-6">
              {leadMagnet.systems.map((system, idx) => (
                <motion.div
                  key={system.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.45 }}
                  className="rounded-2xl border border-dark/10 bg-white p-6 sm:p-8 space-y-5 card-glow"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{system.icon}</span>
                      <span className="rounded-full bg-accent/10 text-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wide">
                        {system.number} — {system.badge}
                      </span>
                    </div>
                    <h3 className="mt-3 text-xl font-extrabold leading-tight">
                      {system.title}
                    </h3>
                    <p className="mt-2 text-sm text-dark/60 leading-relaxed">
                      {system.description}
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {system.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3 text-sm text-dark/75 leading-relaxed">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full shrink-0 bg-accent/40" />
                        <span>{renderAffiliateLinks(point)}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Opportunite business */}
                  <div className="rounded-lg border border-accent/15 bg-accent/5 px-4 py-3">
                    <p className="text-xs font-bold uppercase tracking-wide text-accent mb-1">Opportunite business</p>
                    <p className="text-sm text-dark/70">{system.opportunity}</p>
                  </div>

                  <div>
                    <a
                      href={AFFILIATE_LINKS[system.cta.link]}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-accent text-white px-5 py-2.5 text-sm font-semibold transition hover:bg-accent-dark hover:shadow-glow hover:translate-y-[-1px] active:translate-y-[0]"
                    >
                      {system.cta.label} &rarr;
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-center text-sm text-dark/50 max-w-xl mx-auto"
            >
              {leadMagnet.bottom}
            </motion.p>
          </div>
        </section>

        {/* Pricing */}
        <section id="ebooks" className="bg-soft">
          <div className="container-balanced space-y-8">
            <div className="max-w-2xl mx-auto text-center space-y-3">
              <p className="inline-block rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-accent">
                Ebooks premium
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Passe a l&apos;action
              </h2>
              <p className="text-base text-dark/60">
                Prix de lancement. Augmentation dans <span className="highlight">14 jours</span>.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {pricing.map((p, index) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ delay: index * 0.08, duration: 0.45 }}
                >
                  <PricingCard
                    name={p.name}
                    price={p.price}
                    originalPrice={p.originalPrice}
                    description={p.description}
                    features={p.features}
                    ctaKey={p.cta as keyof typeof CTA_LINKS}
                    badge={p.badge}
                    featured={p.name.includes("Bundle")}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparaison */}
        <section>
          <div className="container-balanced space-y-8">
            <div className="max-w-2xl mx-auto text-center space-y-3">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Comparaison
              </h2>
              <p className="text-base text-dark/60">
                Le bundle contient tout. Les deux ebooks sont complementaires.
              </p>
            </div>
            <ComparisonTable rows={comparison} />
          </div>
        </section>

        {/* Ce que tu vas apprendre */}
        <section className="bg-soft">
          <div className="container-balanced space-y-8">
            <div className="max-w-2xl mx-auto text-center space-y-3">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Ce que tu vas apprendre
              </h2>
              <p className="text-base text-dark/60">
                Chaque automatisation = un service vendable.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {bullets.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="rounded-xl border border-dark/8 bg-white p-6 text-sm leading-relaxed text-dark/80 card-glow"
                >
                  <span className="text-2xl block mb-3">{bulletIcons[i]}</span>
                  {renderAffiliateLinks(b)}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Detail des ebooks */}
        <section>
          <div className="container-balanced space-y-12">
            <div className="max-w-2xl mx-auto text-center space-y-3">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Contenu des ebooks
              </h2>
              <p className="text-base text-dark/60">
                Chaque chapitre est actionnable. Zero blabla.
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              {ebookDetails.map((ebook, idx) => (
                <motion.div
                  key={ebook.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.45 }}
                  className="rounded-2xl border border-dark/10 bg-white p-6 space-y-5 card-glow"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{idx === 0 ? "🎯" : "🤖"}</span>
                      <p className={`text-xs font-bold uppercase tracking-wide ${idx === 0 ? "text-brand/60" : "text-accent/60"}`}>
                        {ebook.pages}
                      </p>
                    </div>
                    <h3 className="mt-2 text-xl font-extrabold">{ebook.title}</h3>
                    <p className="mt-1 text-sm text-dark/60">{renderAffiliateLinks(ebook.subtitle)}</p>
                  </div>
                  <ul className="space-y-2.5">
                    {ebook.chapters.map((ch, chIdx) => (
                      <li key={ch} className="flex items-start gap-3 text-sm text-dark/80">
                        <span className={`mt-0.5 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold shrink-0 ${
                          idx === 0 ? "bg-brand/10 text-brand" : "bg-accent/10 text-accent"
                        }`}>
                          {chIdx + 1}
                        </span>
                        <span>{renderAffiliateLinks(ch)}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Confiance */}
        <section className="bg-soft !py-12">
          <div className="container-balanced">
            <div className="grid gap-6 sm:grid-cols-3 text-center">
              <div className="space-y-2">
                <span className="text-3xl block">📦</span>
                <p className="text-sm font-bold text-dark">5 systemes concrets</p>
                <p className="text-xs text-dark/50">Guide gratuit + ebooks premium actionnables</p>
              </div>
              <div className="space-y-2">
                <span className="text-3xl block">🔒</span>
                <p className="text-sm font-bold text-dark">Paiement 100% securise</p>
                <p className="text-xs text-dark/50">Via Stripe. Aucune donnee stockee ici</p>
              </div>
              <div className="space-y-2">
                <span className="text-3xl block">💬</span>
                <p className="text-sm font-bold text-dark">Support email 30 jours</p>
                <p className="text-xs text-dark/50">Inclus avec l&apos;ebook Automatise et le Bundle</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <div className="container-balanced space-y-8">
            <div className="max-w-2xl mx-auto text-center space-y-3">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">FAQ</h2>
              <p className="text-base text-dark/60">Questions frequentes.</p>
            </div>
            <FAQ items={faq} />
          </div>
        </section>

        {/* CTA final */}
        <section className="bg-soft">
          <div className="container-balanced">
            <div className="max-w-2xl mx-auto text-center space-y-5">
              <h2 className="text-2xl font-extrabold sm:text-3xl">
                Pret a lancer ?
              </h2>
              <p className="text-base text-dark/60">
                Prends le bundle et commence aujourd&apos;hui. Trouve tes clients + automatise tout.
              </p>
              <div className="space-y-2">
                <Button href={CTA_LINKS.EBOOK_BUNDLE_URL}>
                  Prendre le bundle (89&euro;)
                </Button>
                <p className="text-xs text-dark/40">
                  Economise 100&euro; par rapport a l&apos;achat separe
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-dark/10">
        <div className="container-balanced flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-dark/50">&copy; {new Date().getFullYear()} NASH369 — Discipline &middot; Energie &middot; Elegance</div>
          <div className="flex gap-4 text-sm text-dark/60">
            <Link href="/legal/mentions-legales">Mentions legales</Link>
            <Link href="/legal/confidentialite">Confidentialite</Link>
            <Link href="https://x.com/nash369_" target="_blank" rel="noreferrer">
              X @nash369_
            </Link>
          </div>
        </div>
      </footer>

      {/* Barre mobile fixe */}
      <div className="fixed bottom-3 left-1/2 z-40 w-[calc(100%-1.5rem)] max-w-lg -translate-x-1/2 rounded-2xl border border-accent/20 bg-white/95 p-3 shadow-lg backdrop-blur sm:hidden">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold text-dark">Bundle <span className="text-accent">89&euro;</span></p>
            <p className="text-[10px] text-dark/50 line-through">189&euro;</p>
          </div>
          <Button href={CTA_LINKS.EBOOK_BUNDLE_URL}>Prendre le bundle</Button>
        </div>
      </div>
    </div>
  );
}
