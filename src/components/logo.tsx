import Image from "next/image";
import { site } from "@/lib/site";

// Wordmark viewBox is 3994 × 889, so width ≈ height × 4.49.
const RATIO = 3994 / 889;

/**
 * The Solveon wordmark (switch in place of the "o" in "on").
 * "light" is for white/cream backgrounds, "dark" for black ones.
 * Keep it at least 80px wide; below that use the icon instead.
 */
export function Logo({
  variant = "light",
  height = 26,
  priority = false,
}: {
  variant?: "light" | "dark";
  height?: number;
  priority?: boolean;
}) {
  return (
    <Image
      src={`/brand/solveon-logo-${variant}.svg`}
      alt={site.name}
      width={Math.round(height * RATIO)}
      height={height}
      priority={priority}
      unoptimized
      className="block h-auto"
      style={{ height, width: "auto" }}
    />
  );
}
