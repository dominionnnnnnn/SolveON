import { pad2, phases } from "@/lib/content";

/** The five phases in a row of columns. Used on Home (light) and About (dark). */
export function PhasesGrid({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  const line = dark ? "border-white/14" : "border-ink/12";
  return (
    <ol
      className={`m-0 mt-14 grid list-none grid-cols-1 gap-x-7 border-t p-0 phone:grid-cols-2 tab:grid-cols-5 tab:gap-x-0 ${line}`}
    >
      {phases.map((p, i) => (
        <li
          key={p.title}
          className={`pb-2 pt-8 ${dark ? "tab:px-[22px]" : "tab:px-6"} ${i === 0 ? "tab:pl-0" : `tab:border-l ${line}`} ${
            i === phases.length - 1 ? "tab:pr-0" : ""
          }`}
        >
          <div
            className={`disp text-[34px] font-extrabold ${dark ? "text-green" : "text-green-dark"}`}
          >
            {pad2(i + 1)}
          </div>
          <h3 className="mt-[18px] text-lg font-semibold">{p.title}</h3>
          <p className={`mt-2 text-sm leading-[1.55] ${dark ? "text-white/62" : "text-muted"}`}>
            {p.desc}
          </p>
        </li>
      ))}
    </ol>
  );
}
