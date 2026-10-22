const board = [
  { title: "Scope", cards: 3 },
  { title: "Design", cards: 2 },
  { title: "Build", cards: 3, active: true },
  { title: "Launch", cards: 1 },
];

export function Ownership() {
  return (
    <section className="dark section">
      <div className="wrap">
        <span className="eb">Fewer handoffs. Clearer ownership.</span>
        <h2 className="disp h2 mt-[18px]">
          One plan across product,
          <br />
          design and <span className="mk-d">engineering.</span>
        </h2>
        <p className="mt-5 max-w-[580px] text-[17px] leading-[1.6] text-white/66">
          One lead coordinates scope, design, code, deployment and any specialists, so nothing falls
          between people.
        </p>

        <div className="relative mt-14 h-[440px] overflow-hidden rounded-[18px] border border-white/8 bg-[#141414]">
          {/* Faded project board behind the message */}
          <div aria-hidden="true" className="absolute inset-7 grid grid-cols-4 gap-4 opacity-55">
            {board.map((col) => (
              <div key={col.title} className="flex flex-col gap-2.5">
                <div className="text-xs font-semibold text-white/60">{col.title}</div>
                {Array.from({ length: col.cards }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-[72px] rounded-[10px] bg-[#1F1F1F] ${
                      col.active && i === 0 ? "border border-green/50" : ""
                    }`}
                  />
                ))}
              </div>
            ))}
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(520px_260px_at_50%_55%,rgba(11,11,11,.92),rgba(11,11,11,.35)_70%,transparent)]"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-[22px] text-center">
            {/* TODO: founder initials or photos */}
            <div className="flex" aria-hidden="true">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-[#141414] bg-green text-sm font-bold text-ink">
                [A]
              </span>
              <span className="-ml-2.5 flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-[#141414] bg-white text-sm font-bold text-ink">
                [B]
              </span>
            </div>
            <p className="disp text-[clamp(36px,4.6vw,60px)] font-extrabold leading-[1.02]">
              Named owners.
              <br />
              <span className="text-green">Clean handover.</span>
            </p>
          </div>
        </div>
        <p className="mt-[22px] text-sm text-white/60">
          One project lead · Named owner per workstream · Documented decisions · Code and accounts
          in your name
        </p>
      </div>
    </section>
  );
}
