"use client";

import { useState } from "react";
import { Button } from "./Button";

type Payload = {
  email: string;
  activite: string;
  ca: string;
  objectif: string;
};

export function WaitlistForm() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [data, setData] = useState<Payload>({
    email: "",
    activite: "",
    ca: "",
    objectif: ""
  });

  const handleChange =
    (key: keyof Payload) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setData({ ...data, [key]: e.target.value });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      setDone(true);
    } catch (err) {
      console.error(err);
      setDone(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-dark">
          Email*
          <input
            required
            type="email"
            value={data.email}
            onChange={handleChange("email")}
            className="rounded-xl border border-slate/20 bg-white px-3 py-2 text-sm focus:border-accent focus:outline-none"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-dark">
          Activité principale*
          <input
            required
            value={data.activite}
            onChange={handleChange("activite")}
            className="rounded-xl border border-slate/20 bg-white px-3 py-2 text-sm focus:border-accent focus:outline-none"
          />
        </label>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-dark">
          CA mensuel actuel
          <input
            value={data.ca}
            onChange={handleChange("ca")}
            className="rounded-xl border border-slate/20 bg-white px-3 py-2 text-sm focus:border-accent focus:outline-none"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-dark">
          Objectif à 90 jours
          <input
            value={data.objectif}
            onChange={handleChange("objectif")}
            className="rounded-xl border border-slate/20 bg-white px-3 py-2 text-sm focus:border-accent focus:outline-none"
          />
        </label>
      </div>
      <Button type="submit" disabled={loading}>
        {done ? "Reçu. On revient vite." : loading ? "Envoi..." : "Rejoindre la waitlist"}
      </Button>
      <p className="text-xs text-slate/70">
        2 missions coaching/mois max. Sélection sur pertinence et disponibilité.
      </p>
    </form>
  );
}
