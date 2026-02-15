type Row = { label: string; clients: boolean; bundle: boolean; business: boolean };

export function ComparisonTable({ rows }: { rows: Row[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-dark/8 bg-white shadow-card max-w-3xl mx-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-dark/8">
            <th className="px-4 py-3 text-left text-xs font-semibold text-dark/50 uppercase tracking-wide" />
            <th className="px-4 py-3 text-center text-xs font-semibold text-dark/50 uppercase tracking-wide">
              Trouve Tes Clients
            </th>
            <th className="px-4 py-3 text-center text-xs font-semibold text-dark/50 uppercase tracking-wide">
              Automatise
            </th>
            <th className="px-4 py-3 text-center text-xs font-bold text-dark uppercase tracking-wide bg-dark/[0.03]">
              Bundle
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-t border-dark/5">
              <td className="px-4 py-3 text-dark/80">{row.label}</td>
              <td className="px-4 py-3 text-center">
                {row.clients ? (
                  <svg className="inline h-4 w-4 text-dark/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <span className="text-dark/20">&mdash;</span>
                )}
              </td>
              <td className="px-4 py-3 text-center">
                {row.business ? (
                  <svg className="inline h-4 w-4 text-dark/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <span className="text-dark/20">&mdash;</span>
                )}
              </td>
              <td className="px-4 py-3 text-center bg-dark/[0.03]">
                {row.bundle ? (
                  <svg className="inline h-4 w-4 text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <span className="text-dark/20">&mdash;</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
