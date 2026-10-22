export type FaqItem = { q: string; a: string };

/** Expandable question list (first one open), as used on Home and Pricing. */
export function FaqList({ items, className = "mt-11" }: { items: FaqItem[]; className?: string }) {
  return (
    <div className={`border-t border-ink/12 ${className}`}>
      {items.map((f, i) => (
        <details key={f.q} open={i === 0} className="group border-b border-ink/12">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-[22px] text-[17px] font-semibold [&::-webkit-details-marker]:hidden">
            {f.q}
            <svg
              className="shrink-0 transition-transform duration-200 group-open:rotate-180"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </summary>
          <p className="muted mb-6 text-base leading-[1.65]">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
