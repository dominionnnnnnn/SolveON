// TODO: replace [00] with real numbers once you have them.
const stats = [
  { value: "[00]", suffix: "+", label: "Products shipped" },
  { value: "[00]", suffix: "+", label: "Clients served" },
  { value: "4–6", suffix: "wk", label: "Typical build phase" },
  { value: "100", suffix: "%", label: "Code you own" },
];

export function Stats() {
  return (
    <section className="dark py-[72px] phone:pb-28 phone:pt-24">
      <div className="wrap">
        <p className="disp mx-auto max-w-[900px] text-center text-[clamp(26px,2.7vw,36px)] leading-[1.3] tracking-[-0.025em]">
          Most software problems start as business problems. We work out the outcome first, so what
          we ship <span className="mk-d">moves the number you care about.</span>
        </p>
        <dl className="mt-[88px] grid grid-cols-1 border-t border-white/14 phone:grid-cols-2 tab:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col-reverse px-4 pt-11 text-center ${
                i > 0 ? "tab:border-l tab:border-white/14" : ""
              }`}
            >
              <dt className="mt-2.5 text-sm font-semibold text-white/70">{s.label}</dt>
              <dd className="disp m-0 text-[clamp(48px,5.4vw,76px)] font-extrabold">
                {s.value}
                <span className="text-green">{s.suffix}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
