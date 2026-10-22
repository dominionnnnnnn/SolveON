import Link from "next/link";
import type { CSSProperties } from "react";
import type { Project, Visual } from "@/lib/projects";

type Size = "home" | "work";

/* ------------------------------------------------------------------ */
/* Card themes (from the design)                                       */
/* ------------------------------------------------------------------ */

const themes: Record<
  Project["theme"],
  { bg: string; fg?: string; tagline?: string; divider: number; taglineW: string; border?: boolean }
> = {
  dark: {
    bg: "radial-gradient(400px 260px at 85% 100%,rgba(74,222,128,.28),transparent 70%),#0B0B0B",
    fg: "#fff",
    tagline: "#4ADE80",
    divider: 0.5,
    taglineW: "44%",
  },
  pale: { bg: "#DCFCE7", divider: 0.4, taglineW: "40%" },
  white: { bg: "#fff", tagline: "#15803D", divider: 0.4, taglineW: "42%", border: true },
  green: { bg: "#4ADE80", divider: 0.4, taglineW: "42%" },
  ink: { bg: "#111", fg: "#fff", divider: 0.5, taglineW: "42%" },
  mint: { bg: "#BBF7D0", divider: 0.4, taglineW: "42%" },
};

/* ------------------------------------------------------------------ */
/* Illustrations (decorative; replaced by real screenshots later)      */
/* Dimensions differ slightly between Home (360px card) and Work (340px) */
/* ------------------------------------------------------------------ */

const bar = (w: string, h: number, bg: string, extra: CSSProperties = {}): CSSProperties => ({
  height: h,
  width: w,
  borderRadius: 999,
  background: bg,
  ...extra,
});

function PhoneVisual({ size }: { size: Size }) {
  const h = size === "home";
  return (
    <div
      style={{
        position: "absolute",
        right: 44,
        top: h ? 44 : 40,
        width: h ? 170 : 160,
        height: h ? 340 : 320,
        borderRadius: h ? 30 : 28,
        background: "#262626",
        padding: 7,
        boxSizing: "border-box",
        transform: "rotate(-5deg)",
      }}
    >
      <div
        style={{
          height: "100%",
          borderRadius: h ? 24 : 22,
          background: "#fff",
          padding: "14px 12px",
          boxSizing: "border-box",
        }}
      >
        <div style={bar("60%", 10, "#111")} />
        <div
          style={{ marginTop: 12, height: h ? 70 : 66, borderRadius: 12, background: "#4ADE80" }}
        />
        {[10, 6, 6].map((mt, i) => (
          <div
            key={i}
            style={{ marginTop: mt, height: h ? 34 : 32, borderRadius: 10, background: "#F3FAF4" }}
          />
        ))}
        <div
          style={{ marginTop: 12, height: h ? 30 : 28, borderRadius: 999, background: "#111" }}
        />
      </div>
    </div>
  );
}

function BrowserVisual({ size }: { size: Size }) {
  const h = size === "home";
  return (
    <div
      style={{
        position: "absolute",
        right: -30,
        top: h ? 64 : 60,
        width: "58%",
        height: h ? 300 : 290,
        borderRadius: 12,
        background: "#fff",
        boxShadow: "0 20px 50px rgba(21,128,61,.18)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: 26,
          background: "#F4F5F2",
          display: "flex",
          alignItems: "center",
          gap: 5,
          padding: "0 10px",
        }}
      >
        {h &&
          [0, 1, 2].map((i) => (
            <span
              key={i}
              style={{ width: 7, height: 7, borderRadius: 999, background: "#D9DCD6" }}
            />
          ))}
      </div>
      <div style={{ display: "flex", height: "100%" }}>
        <div style={{ width: 70, background: "#F3FAF4" }} />
        <div style={{ flex: 1, padding: 14 }}>
          <div style={bar("45%", 10, "#111")} />
          <div
            style={{
              marginTop: 12,
              display: "grid",
              gridTemplateColumns: "repeat(3,minmax(0,1fr))",
              gap: 8,
            }}
          >
            {["#F3FAF4", "#F3FAF4", "#4ADE80"].map((c, i) => (
              <div key={i} style={{ height: 44, borderRadius: 8, background: c }} />
            ))}
          </div>
          <div
            style={{
              marginTop: 10,
              height: 110,
              borderRadius: 8,
              background: "linear-gradient(180deg,#F3FAF4,#fff)",
              border: "1px solid #EEF0EC",
            }}
          />
        </div>
      </div>
    </div>
  );
}

function ChatVisual({ size }: { size: Size }) {
  const bubble = (side: "in" | "out", maxWidth: string, text: string) => (
    <div
      style={{
        alignSelf: side === "in" ? "flex-start" : "flex-end",
        maxWidth,
        padding: "10px 13px",
        borderRadius: side === "in" ? "14px 14px 14px 4px" : "14px 14px 4px 14px",
        background: side === "in" ? "#F1F2EE" : "#DCFCE7",
        fontSize: 13,
      }}
    >
      {text}
    </div>
  );
  return (
    <div
      style={{
        position: "absolute",
        right: 36,
        top: size === "home" ? 70 : 64,
        width: 250,
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      {bubble("in", "80%", "Hi, I want to pay for my order")}
      {bubble("out", "85%", "Sure! Here is your secure payment link")}
      <div
        style={{
          alignSelf: "flex-end",
          width: "85%",
          padding: 12,
          borderRadius: 14,
          background: "#111",
          color: "#fff",
          fontSize: 12,
          boxSizing: "border-box",
        }}
      >
        <div style={{ opacity: 0.6 }}>Order #[0000]</div>
        <div
          style={{
            marginTop: 6,
            height: 30,
            borderRadius: 999,
            background: "#4ADE80",
            color: "#111",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Pay now
        </div>
      </div>
      {bubble("in", "70%", "Done, thank you!")}
    </div>
  );
}

function DashboardVisual({ size }: { size: Size }) {
  const h = size === "home";
  const tile = (bg: string, line: string, value: string, valueW: string) => (
    <div
      style={{
        height: h ? 90 : 86,
        borderRadius: 12,
        background: bg,
        padding: 12,
        boxSizing: "border-box",
      }}
    >
      <div style={bar("50%", 8, line)} />
      <div
        style={{ marginTop: 14, height: 22, width: valueW, borderRadius: 6, background: value }}
      />
    </div>
  );
  return (
    <div
      style={{
        position: "absolute",
        right: 30,
        top: h ? 60 : 56,
        width: "52%",
        display: "grid",
        gridTemplateColumns: "repeat(2,minmax(0,1fr))",
        gap: 10,
      }}
    >
      {tile("#111", "rgba(255,255,255,.4)", "#4ADE80", "60%")}
      {tile("#fff", "#D9DCD6", "#111", "70%")}
      <div
        style={{
          gridColumn: "span 2",
          height: 150,
          borderRadius: 12,
          background: "#fff",
          padding: 14,
          boxSizing: "border-box",
          display: "flex",
          alignItems: "flex-end",
          gap: 7,
        }}
      >
        {[
          [40, "#BBF7D0"],
          [60, "#BBF7D0"],
          [50, "#BBF7D0"],
          [80, "#111"],
          [65, "#BBF7D0"],
          [92, "#111"],
        ].map(([pct, c], i) => (
          <span
            key={i}
            style={{ flex: 1, height: `${pct}%`, borderRadius: 4, background: c as string }}
          />
        ))}
      </div>
    </div>
  );
}

function ApiVisual() {
  const line = (method: string, path: string) => (
    <div>
      <span style={{ color: "#4ADE80" }}>{method}</span>
      {method.length < 4 ? "  " : " "}
      {path}
    </div>
  );
  return (
    <div
      style={{
        position: "absolute",
        right: 28,
        top: 56,
        width: "48%",
        borderRadius: 12,
        background: "#1A1A1A",
        border: "1px solid rgba(255,255,255,.1)",
        padding: 16,
        boxSizing: "border-box",
        fontFamily: "ui-monospace,Menlo,monospace",
        fontSize: 12,
        lineHeight: 1.9,
        color: "rgba(255,255,255,.75)",
      }}
    >
      {line("POST", "/api/payments")}
      {line("GET", "/api/orders/:id")}
      {line("PUT", "/api/invoices/:id")}
      <div
        style={{
          marginTop: 10,
          padding: "8px 10px",
          borderRadius: 8,
          background: "rgba(74,222,128,.12)",
          color: "#4ADE80",
        }}
      >
        200 OK · 84ms
      </div>
    </div>
  );
}

function LandingVisual() {
  return (
    <div
      style={{
        position: "absolute",
        right: 28,
        top: 56,
        width: "50%",
        height: 250,
        borderRadius: 12,
        background: "#fff",
        overflow: "hidden",
        boxShadow: "0 20px 50px rgba(21,128,61,.18)",
      }}
    >
      <div style={{ height: 120, background: "#111", padding: 18, boxSizing: "border-box" }}>
        <div style={bar("70%", 12, "#fff")} />
        <div style={bar("50%", 8, "rgba(255,255,255,.4)", { marginTop: 10 })} />
        <div
          style={{ marginTop: 16, width: 90, height: 26, borderRadius: 999, background: "#4ADE80" }}
        />
      </div>
      <div
        style={{
          padding: 14,
          display: "grid",
          gridTemplateColumns: "repeat(3,minmax(0,1fr))",
          gap: 8,
        }}
      >
        {[0, 1, 2].map((i) => (
          <div key={i} style={{ height: 70, borderRadius: 8, background: "#F3FAF4" }} />
        ))}
      </div>
    </div>
  );
}

function ProjectVisual({ visual, size }: { visual: Visual; size: Size }) {
  switch (visual) {
    case "phone":
      return <PhoneVisual size={size} />;
    case "browser":
      return <BrowserVisual size={size} />;
    case "chat":
      return <ChatVisual size={size} />;
    case "dashboard":
      return <DashboardVisual size={size} />;
    case "api":
      return <ApiVisual />;
    case "landing":
      return <LandingVisual />;
  }
}

/* ------------------------------------------------------------------ */

/** The coloured card image: label, tagline and illustration. Used on cards and case-study pages. */
export function ProjectMedia({
  project,
  size,
  height,
  className = "",
}: {
  project: Project;
  size: Size;
  /** Overrides the card height (360 on Home, 340 on Work) */
  height?: number;
  className?: string;
}) {
  const t = themes[project.theme];
  const home = size === "home";
  return (
    <div
      className={`wmedia relative overflow-hidden rounded-2xl ${className}`}
      style={{
        height: height ?? (home ? 360 : 340),
        background: t.bg,
        color: t.fg,
        // The white card has a hairline border on white backgrounds (Home, case-study page);
        // on the Work page's cream background the design leaves it off.
        border:
          t.border && (home || height !== undefined) ? "1px solid rgba(17,17,17,.1)" : undefined,
        boxSizing: "border-box",
      }}
    >
      <div className="absolute left-7 top-[26px] flex items-center gap-3 text-xs font-semibold">
        <span className="chip">Case study</span>
        <span style={{ opacity: t.divider }}>|</span>
        <span>{project.client}</span>
      </div>
      <p
        className="absolute bottom-[30px] left-7 m-0 font-semibold leading-[1.3] tracking-[-0.02em]"
        style={{ maxWidth: t.taglineW, fontSize: home ? 24 : 23, color: t.tagline }}
      >
        {project.tagline}
      </p>
      {/* On phones this layer shrinks into the bottom-right corner so it clears the tagline */}
      <div aria-hidden="true" className="wvis absolute inset-0">
        <ProjectVisual visual={project.visual} size={size} />
      </div>
    </div>
  );
}

export function ProjectCard({ project, size }: { project: Project; size: Size }) {
  const home = size === "home";
  return (
    <Link className="wcard block hover:text-ink" href={`/work/${project.slug}`}>
      <ProjectMedia project={project} size={size} />
      <div className="mt-5 flex items-center justify-between border-t border-ink/12 pt-4">
        <h3 className={`text-[19px] font-semibold ${home ? "tracking-[-0.01em]" : ""}`}>
          {project.name}
        </h3>
        <span aria-hidden="true">→</span>
      </div>
      <p className="muted mt-2 text-[15px] leading-[1.6]">{project.summary}</p>
      <p className="mt-2.5 text-[13px] text-ink/50">{project.tags.join(" · ")}</p>
    </Link>
  );
}
