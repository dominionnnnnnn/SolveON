import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/legal/legal-page";
import { site } from "@/lib/site";

// TODO (CHECKLIST): draft text. Review it, then remove `robots` below so Google can index it.
export const metadata: Metadata = {
  title: "Privacy policy",
  description: `How ${site.name} collects, uses and protects your personal information.`,
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

const mail = <a href={`mailto:${site.email}`}>{site.email}</a>;

const sections: LegalSection[] = [
  {
    title: "Who we are",
    body: (
      <p>
        {site.name} is a software studio based in Nigeria. We design and build websites, web apps,
        mobile apps and backend systems for businesses. In this policy, &ldquo;we&rdquo;,
        &ldquo;us&rdquo; and &ldquo;our&rdquo; mean {site.name}. For anything about your personal
        information, email {mail}.
      </p>
    ),
  },
  {
    title: "What we collect",
    body: (
      <>
        <p>We only collect what you choose to give us, plus basic technical data:</p>
        <ul>
          <li>
            <strong>Contact form:</strong> your name, email address, company (optional), the
            services you&apos;re interested in, budget and timeline (optional), and your message.
          </li>
          <li>
            <strong>Newsletter:</strong> your email address, if you sign up.
          </li>
          <li>
            <strong>Email and WhatsApp:</strong> whatever you send us when you contact us directly.
          </li>
          <li>
            <strong>Technical data:</strong> our hosting provider automatically records standard
            server logs (such as IP address, browser type and pages requested) to keep the site
            secure and working.
          </li>
        </ul>
        <p>
          We don&apos;t use advertising trackers, and we don&apos;t set cookies for marketing or
          profiling.
        </p>
      </>
    ),
  },
  {
    title: "How we use it",
    body: (
      <ul>
        <li>To reply to your enquiry, prepare a proposal and work with you on a project.</li>
        <li>To send the newsletter you signed up for. Every email has an unsubscribe link.</li>
        <li>To keep the website secure, prevent spam and fix problems.</li>
        <li>To meet our legal, tax and accounting obligations.</li>
      </ul>
    ),
  },
  {
    title: "Our legal basis",
    body: (
      <p>
        We process your information in line with the Nigeria Data Protection Act 2023. Depending on
        the situation, we rely on your consent (for example, the newsletter), on taking steps
        you&apos;ve asked for before or under a contract (replying to an enquiry or delivering a
        project), on our legitimate interest in running and securing our business, or on a legal
        obligation.
      </p>
    ),
  },
  {
    title: "Who we share it with",
    body: (
      <>
        <p>
          We never sell your personal information. We share it only with service providers that help
          us run the site and our business, such as our website host, email delivery and newsletter
          services, and only as much as they need to provide that service. Some of these providers
          store data outside Nigeria; when that happens we use providers that protect it to a
          standard consistent with Nigerian data protection law.
        </p>
        <p>We may also disclose information where the law requires it.</p>
      </>
    ),
  },
  {
    title: "How long we keep it",
    body: (
      <p>
        Enquiries that don&apos;t become projects are kept for up to 24 months, then deleted.
        Project and billing records are kept for as long as the law requires for accounting and tax.
        Newsletter subscribers are kept until they unsubscribe.
      </p>
    ),
  },
  {
    title: "Your rights",
    body: (
      <p>
        You can ask to see the personal information we hold about you, correct it, delete it, move
        it to another provider, or object to or withdraw consent for how we use it. Email {mail} and
        we&apos;ll reply within 30 days. If you&apos;re not satisfied with our response, you can
        complain to the Nigeria Data Protection Commission.
      </p>
    ),
  },
  {
    title: "Security",
    body: (
      <p>
        The site is served over an encrypted (HTTPS) connection, and access to enquiries and project
        data is limited to the people who need it. No system is perfectly secure, but we take
        reasonable steps to protect your information and will tell you promptly if a breach affects
        you.
      </p>
    ),
  },
  {
    title: "Children",
    body: (
      <p>
        Our services are for businesses. We don&apos;t knowingly collect information from anyone
        under 18.
      </p>
    ),
  },
  {
    title: "Changes to this policy",
    body: (
      <p>
        We may update this policy from time to time. The date at the top shows when it last changed.
        Significant changes will be highlighted on this page.
      </p>
    ),
  },
];

export default function Page() {
  return (
    <LegalPage
      title="Privacy policy"
      updated="24 October 2026"
      intro={
        <p>
          This policy explains what personal information {site.name} collects when you use this
          website or contact us, why we collect it, and the choices you have.
        </p>
      }
      sections={sections}
    />
  );
}
