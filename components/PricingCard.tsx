import { Badge } from "./Badge";
import { CTA_LINKS } from "../lib/config";

type Props = {
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  ctaKey: keyof typeof CTA_LINKS;
  badge?: string | null;
  featured?: boolean;
};

export function PricingCard({
  name,
  price,
  originalPrice,
  description,
  features,
  ctaKey,
  badge,
  featured = false
}: Props) {
  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : null;

  return (
    <div
      className={`relative flex h-full flex-col gap-5 rounded-2xl bg-white p-6 card-glow transition duration-300 hover:-translate-y-1 ${
        featured ? "border-2 border-accent ring-1 ring-accent/10 shadow-glow" : "border border-dark/10 shadow-card"
      }`}
    >
      {badge && (
        <div className="absolute right-4 top-4">
          <Badge variant={featured ? "accent" : "brand"}>{badge}</Badge>
        </div>
      )}
      <div>
        <p className="text-base font-bold text-dark/70">{name}</p>
        <div className="mt-2 flex items-baseline gap-2">
          <span className={`text-4xl font-extrabold ${featured ? "text-accent" : "text-dark"}`}>
            {price.toFixed(2).replace(".", ",")}&#8364;
          </span>
          {originalPrice && (
            <span className="text-sm font-semibold text-dark/40 line-through">
              {originalPrice.toFixed(2).replace(".", ",")}&#8364;
            </span>
          )}
          {discount && (
            <span className="rounded-full bg-accent/10 text-accent px-2 py-0.5 text-xs font-bold">
              -{discount}%
            </span>
          )}
        </div>
        <p className="mt-1 text-xs font-medium text-dark/50">
          Prix lancement — augmente dans 14 jours
        </p>
        <p className="mt-3 text-sm text-dark/70 leading-relaxed">{description}</p>
      </div>
      <ul className="flex flex-col gap-2 text-sm text-dark">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <svg className={`mt-0.5 h-4 w-4 shrink-0 ${featured ? "text-accent" : "text-brand"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-2">
        <a
          href={CTA_LINKS[ctaKey]}
          className={`flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition hover:translate-y-[-1px] active:translate-y-[0] ${
            featured
              ? "bg-accent text-white hover:bg-accent-dark hover:shadow-glow"
              : "bg-dark text-white hover:bg-dark/90"
          }`}
        >
          Acheter maintenant
        </a>
      </div>
    </div>
  );
}
