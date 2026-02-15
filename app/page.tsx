"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AFFILIATE_LINKS, leadMagnet } from "../lib/config";

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

const comingSoon = [
  {
    icon: "🎯",
    title: "Trouve Tes Clients",
    description: "Prospection, closing, marketing. Scripts DM, methode de closing en 15 min, templates Notion.",
    price: "19,90"
  },
  {
    icon: "🤖",
    title: "Automatise Ton Business en 7 Jours",
    description: "Site IA + 10 workflows N8N/Make + templates JSON + prompts optimises. Support 30 jours.",
    price: "79"
  },
  {
    icon: "🔥",
    title: "Bundle (les 2)",
    description: "Trouve tes clients + automatise tout. Le combo parfait pour partir de zero.",
    price: "89"
  }
];

export default function HomePage() {
  return (
    <div className="bg-white text-dark">
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

        {/* 5 systemes — apercu */}
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
                </motion.div>
              ))}
            </div>

            {/* CTA guide gratuit */}
            <div className="max-w-md mx-auto text-center space-y-4 pt-4">
              <p className="text-sm text-dark/50">
                Tout ca dans un guide gratuit de 5 pages. Entre ton email pour le recevoir.
              </p>
              <EmailCapture />
            </div>
          </div>
        </section>

        {/* TEASER — Ebooks a venir */}
        <section className="bg-dark text-white">
          <div className="container-balanced space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto text-center space-y-4"
            >
              <p className="inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-accent">
                Bientot disponible
              </p>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Ebooks premium
              </h2>
              <p className="text-base text-white/60">
                Le guide gratuit te donne le &laquo; quoi &raquo;. Les ebooks te donneront le &laquo; comment &raquo; — pas a pas, avec templates et prompts.
              </p>
            </motion.div>

            <div className="grid gap-6 lg:grid-cols-3">
              {comingSoon.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.45 }}
                  className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur space-y-4"
                >
                  <div className="absolute top-4 right-4">
                    <span className="rounded-full bg-accent/20 text-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wide">
                      Soon
                    </span>
                  </div>
                  <span className="text-3xl block">{item.icon}</span>
                  <div>
                    <h3 className="text-lg font-extrabold">{item.title}</h3>
                    <p className="mt-2 text-sm text-white/50 leading-relaxed">{item.description}</p>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-extrabold text-accent">{item.price}&euro;</span>
                    <span className="text-xs text-white/40">prix de lancement</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA teaser */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="max-w-md mx-auto text-center space-y-4"
            >
              <p className="text-sm text-white/50">
                Inscris-toi pour etre notifie du lancement et beneficier du prix early adopter.
              </p>
              <EmailCapture />
            </motion.div>
          </div>
        </section>

        {/* Confiance */}
        <section className="bg-soft !py-12">
          <div className="container-balanced">
            <div className="grid gap-6 sm:grid-cols-3 text-center">
              <div className="space-y-2">
                <span className="text-3xl block">📦</span>
                <p className="text-sm font-bold text-dark">5 systemes concrets</p>
                <p className="text-xs text-dark/50">Guide gratuit telechargeable maintenant</p>
              </div>
              <div className="space-y-2">
                <span className="text-3xl block">🔒</span>
                <p className="text-sm font-bold text-dark">Zero spam</p>
                <p className="text-xs text-dark/50">Desabonnement en un clic. Tes donnees restent privees</p>
              </div>
              <div className="space-y-2">
                <span className="text-3xl block">🚀</span>
                <p className="text-sm font-bold text-dark">Ebooks bientot</p>
                <p className="text-xs text-dark/50">Templates, workflows et prompts prets a l&apos;emploi</p>
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
    </div>
  );
}
