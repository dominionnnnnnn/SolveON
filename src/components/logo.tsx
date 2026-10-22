import { site } from "@/lib/site";

type Variant = "dark" | "green";

/** The `>_` logo mark. "dark" for light backgrounds, "green" for black ones. */
export function LogoMark({ variant = "dark", size = 30 }: { variant?: Variant; size?: number }) {
  const box = variant === "dark" ? "#111" : "#4ADE80";
  const glyph = variant === "dark" ? "#4ADE80" : "#111";
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="9" fill={box} />
      <path
        d="M9 11l5 5-5 5"
        fill="none"
        stroke={glyph}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="16" y="19.5" width="8" height="3" rx="1.5" fill={glyph} />
    </svg>
  );
}

/** Two-weight wordmark: light then heavy. */
export function Wordmark({ lightWeight = 400 }: { lightWeight?: 300 | 400 }) {
  return (
    <span>
      <span style={{ fontWeight: lightWeight }}>{site.wordmark.light}</span>
      <span className="font-extrabold">{site.wordmark.heavy}</span>
    </span>
  );
}
