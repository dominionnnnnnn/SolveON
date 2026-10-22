import { ContactForm } from "@/components/contact/contact-form";
import { FaqList, type FaqItem } from "@/components/faq-list";
import { site, whatsappDisplay, whatsappUrl } from "@/lib/site";

const nextSteps = [
  {
    title: `We reply within ${site.replyTime}`,
    desc: "With a few questions and a time for a call.",
  },
  {
    title: "A free 30-minute discovery call",
    desc: "We talk through the problem, users and outcome.",
  },
  {
    title: "A written phase proposal",
    desc: "Scope, timeline and a fixed price for the first phase.",
  },
];

// TODO: write the real answers.
export const contactFaqs: FaqItem[] = [
  { q: "Is the first call really free?", a: "[Answer goes here.]" },
  { q: "Will you sign an NDA?", a: "[Answer goes here.]" },
  { q: "Can you take over an existing project?", a: "[Answer goes here.]" },
];

function ContactTile({ label, value, href }: { label: string; value: string; href?: string }) {
  const body = (
    <>
      <div className="muted text-xs">{label}</div>
      <div className="mt-1 text-[15px] font-semibold">{value}</div>
    </>
  );
  return href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="block rounded-[14px] bg-green-soft p-[18px] hover:text-ink"
    >
      {body}
    </a>
  ) : (
    <div className="rounded-[14px] bg-green-soft p-[18px]">{body}</div>
  );
}

export function ContactMain() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="gridbg absolute inset-0 [mask-image:linear-gradient(#000_45%,transparent)]"
        aria-hidden="true"
      />
      <div className="wrap relative flex flex-wrap items-start gap-14 pb-[72px] pt-20 phone:pb-[120px]">
        <div className="min-w-0 flex-[1_1_100%] tab:flex-[1_1_420px]">
          <span className="eb">Contact</span>
          <h1 className="disp mt-[22px] text-[clamp(44px,5.4vw,72px)] max-phone:text-[42px]">
            Tell us what
            <br />
            you&apos;re <span className="mk">building.</span>
          </h1>
          <p className="muted mt-[26px] max-w-[460px] text-lg leading-[1.6]">
            You don&apos;t need a finished spec, a budget spreadsheet or technical words. A few
            lines about the problem is enough to start.
          </p>

          <div className="mt-11 border-t border-ink/12 pt-8">
            <div className="text-[13px] font-semibold text-ink/55">WHAT HAPPENS NEXT</div>
            <ol className="m-0 mt-5 flex list-none flex-col gap-5 p-0">
              {nextSteps.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="disp w-9 flex-none text-[22px] font-extrabold text-green-dark">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="font-semibold">{s.title}</div>
                    <div className="muted mt-1 text-sm leading-[1.55]">{s.desc}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-3.5 phone:grid-cols-2">
            <ContactTile label="Email" value={site.email} href={`mailto:${site.email}`} />
            <ContactTile label="WhatsApp" value={whatsappDisplay} href={whatsappUrl || undefined} />
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

export function ContactFaq() {
  return (
    <section className="tint py-[72px] phone:py-28">
      <div className="wrap max-w-[820px]">
        <h2 className="disp text-[clamp(32px,3.8vw,48px)]">
          Before you <span className="mk">reach out</span>
        </h2>
        <FaqList items={contactFaqs} className="mt-10" />
      </div>
    </section>
  );
}
