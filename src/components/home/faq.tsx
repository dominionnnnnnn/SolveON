import Link from "next/link";
import { FaqJsonLd, FaqList, type FaqItem } from "@/components/faq-list";

export const homeFaqs: FaqItem[] = [
  {
    q: "Can you build a whole product in six weeks?",
    a: "Usually not the whole product, and that's on purpose. We ship a focused first version in 4–6 weeks: the core feature your users need, live and working. Then we grow it in further phases based on real feedback.",
  },
  {
    q: "Do you handle design and engineering together?",
    a: "Yes. The same small team designs the screens and builds them, so nothing gets lost between a designer's mockup and a developer's code.",
  },
  {
    q: "Do I need a full specification first?",
    a: "No. Bring the problem and what success looks like. We'll work out the details with you on a short call and turn them into a clear scope before any work starts.",
  },
  {
    q: "How much does a project cost?",
    a: "It depends on what you need: platforms, features and integrations. After a free call we send a fixed price for each phase, usually within 3 days, so you know the cost before we start.",
  },
  {
    q: "Do I get the source code and accounts?",
    a: "Yes, 100%. The code, hosting, domain and app store accounts are set up in your name, and you own everything we build for you.",
  },
  {
    q: "What happens after launch?",
    a: "Every project includes 30 days of fixes after launch. After that you can keep us on monthly as your ongoing product partner, or take the project in-house with full handover notes.",
  },
];

export function Faq() {
  return (
    <section className="section">
      <div className="wrap max-w-[820px]">
        <h2 className="disp h2">
          Before you start <span className="mk">a project</span>
        </h2>
        <FaqList items={homeFaqs} />
        <FaqJsonLd items={homeFaqs} />
        <Link href="/pricing#faq" className="btn mt-8">
          Read all FAQs
        </Link>
      </div>
    </section>
  );
}
