import Image from "next/image";
import type { Founder } from "@/lib/content";

// Placeholder backgrounds from the design, used until a founder has a photo.
const placeholders = {
  // Team cards: black with a green glow
  dark: {
    background:
      "radial-gradient(160px 160px at 50% 40%,rgba(74,222,128,.35),transparent 70%),#0B0B0B",
    color: "rgba(255,255,255,.55)",
  },
  // About hero card (sits on a black card, so it uses a lifted grey)
  card: {
    background:
      "radial-gradient(120px 120px at 50% 40%,rgba(74,222,128,.4),transparent 70%),#1A1A1A",
    color: "rgba(255,255,255,.55)",
  },
  light: { background: "#DCFCE7", color: "rgba(17,17,17,.55)" },
} as const;

/** A founder's photo, or the design's placeholder box until there is one. */
export function FounderPhoto({
  founder,
  tone,
  className,
  sizes,
}: {
  founder: Founder;
  tone: keyof typeof placeholders;
  className: string;
  sizes: string;
}) {
  if (founder.photo) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image src={founder.photo} alt={founder.name} fill sizes={sizes} className="object-cover" />
      </div>
    );
  }
  return (
    <div
      aria-hidden="true"
      className={`flex items-center justify-center text-[13px] ${className}`}
      style={placeholders[tone]}
    >
      [Photo]
    </div>
  );
}
