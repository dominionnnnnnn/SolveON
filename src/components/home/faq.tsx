import Link from "next/link";
import { FaqList, type FaqItem } from "@/components/faq-list";

// TODO: write the real answers. Once they're in, add FAQPage structured data
// so the answers can show directly in Google results.
export const homeFaqs: FaqItem[] = [
  {
    q: "Can you build a whole product in six weeks?",
    a: "[Answer: most products ship as a first focused phase in 4–6 weeks, then grow in further phases.]",
  },
  { q: "Do you handle design and engineering together?", a: "[Answer goes here.]" },
  { q: "Do I need a full specification first?", a: "[Answer goes here.]" },
  { q: "How much does a project cost?", a: "[Answer goes here.]" },
  { q: "Do I get the source code and accounts?", a: "[Answer goes here.]" },
  { q: "What happens after launch?", a: "[Answer goes here.]" },
];

export function Faq() {
  return (
    <section className="section">
      <div className="wrap max-w-[820px]">
        <h2 className="disp h2">
          Before you start <span className="mk">a project</span>
        </h2>
        <FaqList items={homeFaqs} />
        <Link href="/pricing#faq" className="btn mt-8">
          Read all FAQs
        </Link>
      </div>
    </section>
  );
}
