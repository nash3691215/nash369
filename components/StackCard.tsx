import { Button } from "./Button";
import { CTA_LINKS } from "../lib/config";

type Props = {
  name: string;
  urlKey: keyof typeof CTA_LINKS;
  reason: string[];
};

export function StackCard({ name, urlKey, reason }: Props) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-slate/15 bg-white p-5 shadow-card">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-dark">{name}</h3>
        <span className="text-xs rounded-full bg-soft px-3 py-1 text-slate/70">Recommandé</span>
      </div>
      <ul className="flex flex-col gap-2 text-sm text-dark">
        {reason.map((r) => (
          <li key={r} className="flex gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-accent" aria-hidden />
            <span>{r}</span>
          </li>
        ))}
      </ul>
      <Button href={CTA_LINKS[urlKey]} variant="primary">
        Accéder via lien affilié
      </Button>
    </div>
  );
}
