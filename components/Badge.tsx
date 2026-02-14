export function Badge({ children, variant = "accent" }: { children: React.ReactNode; variant?: "accent" | "brand" }) {
  const styles = variant === "brand"
    ? "bg-brand text-white"
    : "bg-accent text-white";
  return (
    <span className={`rounded-full text-xs font-semibold px-3 py-1 inline-block ${styles}`}>
      {children}
    </span>
  );
}
