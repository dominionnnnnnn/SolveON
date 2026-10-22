// TODO: replace with real client quotes.
const testimonials = Array.from({ length: 4 }, () => ({
  quote:
    "[Client quote goes here. Name the problem they had, what changed after launch and the result they saw.]",
  name: "[Client name]",
  role: "[Role, Company]",
}));

export function Testimonials() {
  return (
    <section id="testimonials" className="tint section scroll-mt-16">
      <div className="wrap">
        <span className="eb">From the client side</span>
        <h2 className="disp h2 mt-[18px]">
          What clients say after
          <br />
          <span className="mk">the work ships.</span>
        </h2>
        <div className="mt-14 grid grid-cols-1 gap-5 tab:grid-cols-2">
          {testimonials.map((t, i) => (
            <figure key={i} className="m-0 rounded-2xl bg-white p-[34px]">
              <blockquote className="m-0 text-[17px] leading-[1.65]">“{t.quote}”</blockquote>
              <figcaption className="mt-7 flex items-center gap-3">
                <span
                  className="h-11 w-11 shrink-0 rounded-full bg-green-pale"
                  aria-hidden="true"
                />
                <span>
                  <span className="block text-[15px] font-semibold">{t.name}</span>
                  <span className="muted block text-[13px]">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
