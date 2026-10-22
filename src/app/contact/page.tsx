import type { Metadata } from "next";
import { ContactFaq, ContactMain } from "@/components/contact/contact-sections";

const description =
  "Tell us what you're building. You don't need a finished spec or technical words: a few lines about the problem is enough to start. Free 30-minute discovery call.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact", description, url: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <ContactMain />
      <ContactFaq />
    </>
  );
}
