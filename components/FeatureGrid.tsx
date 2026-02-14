export function FeatureGrid({ items }: { items: string[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {items.map((item) => (
        <div
          key={item}
          className="hacker-panel rounded-2xl p-5 text-base font-medium text-dark transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          {item}
        </div>
      ))}
    </div>
  );
}
