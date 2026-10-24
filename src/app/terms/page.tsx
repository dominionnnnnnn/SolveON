import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, type LegalSection } from "@/components/legal/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of service",
  description: `The terms that apply when you use the ${site.name} website.`,
  alternates: { canonical: "/terms" },
};

const mail = <a href={`mailto:${site.email}`}>{site.email}</a>;

const sections: LegalSection[] = [
  {
    title: "About these terms",
    body: (
      <p>
        These terms apply to your use of the {site.name} website. By using the site, you agree to
        them. If you don&apos;t agree, please don&apos;t use the site.
      </p>
    ),
  },
  {
    title: "Project work is agreed separately",
    body: (
      <p>
        These terms cover the website only. When we work together on a project, the scope, price,
        timeline, payment terms and ownership of the work are set out in a separate written proposal
        or agreement, and that document applies to the project. Prices, timelines and examples on
        this site are general guidance, not an offer.
      </p>
    ),
  },
  {
    title: "Using the site",
    body: (
      <>
        <p>You agree not to:</p>
        <ul>
          <li>use the site for anything unlawful, or to send spam or harmful content;</li>
          <li>
            try to break, overload or gain unauthorised access to the site or the systems behind it;
          </li>
          <li>copy or scrape the site&apos;s content in bulk for commercial use.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Our content",
    body: (
      <p>
        The text, design, logos, graphics and case studies on this site belong to {site.name} or are
        used with permission. You&apos;re welcome to share links and short quotes with credit, but
        please don&apos;t reproduce our content or brand without written permission. Names and logos
        of other products shown in our work belong to their owners.
      </p>
    ),
  },
  {
    title: "Information on the site",
    body: (
      <p>
        We work to keep the site accurate and up to date, but it&apos;s provided &ldquo;as is&rdquo;
        for general information. Articles and guides aren&apos;t professional advice for your
        specific situation, and we don&apos;t guarantee the site will always be available or
        error-free.
      </p>
    ),
  },
  {
    title: "Links to other sites",
    body: (
      <p>
        The site links to other websites, such as live products we&apos;ve built and our social
        profiles. We aren&apos;t responsible for their content or how they handle your data.
      </p>
    ),
  },
  {
    title: "Limitation of liability",
    body: (
      <p>
        To the extent the law allows, {site.name} isn&apos;t liable for any indirect or
        consequential loss arising from your use of this website. Nothing in these terms limits
        liability that can&apos;t be limited by law.
      </p>
    ),
  },
  {
    title: "Your information",
    body: (
      <p>
        How we handle personal information you send us is explained in our{" "}
        <Link href="/privacy">privacy policy</Link>.
      </p>
    ),
  },
  {
    title: "Governing law",
    body: (
      <p>
        These terms are governed by the laws of the Federal Republic of Nigeria, and any dispute
        about them will be handled by the Nigerian courts.
      </p>
    ),
  },
  {
    title: "Changes and contact",
    body: (
      <p>
        We may update these terms from time to time; the date at the top shows the latest version.
        Questions? Email {mail}.
      </p>
    ),
  },
];

export default function Page() {
  return (
    <LegalPage
      title="Terms of service"
      updated="24 October 2026"
      intro={
        <p>
          Please read these terms before using the site. They&apos;re written to be short and plain.
        </p>
      }
      sections={sections}
    />
  );
}
