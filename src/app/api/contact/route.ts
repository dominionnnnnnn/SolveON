// Contact form endpoint used by the Contact page.
//
// Not connected to a destination yet (decision tracked in CHECKLIST.md).
// Until it is, enquiries get an honest reply pointing to email/WhatsApp, so no lead
// is silently lost. To connect one: set CONTACT_DESTINATION (+ its key) in Vercel
// and add the delivery call in `deliver()` below.

import type { ContactPayload } from "@/lib/contact";
import { site } from "@/lib/site";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

async function deliver(enquiry: ContactPayload): Promise<boolean> {
  const destination = process.env.CONTACT_DESTINATION;
  if (!destination) return false;
  // TODO: send the enquiry (e.g. email via Resend, a Google Sheet row, or a CRM).
  console.error(`Contact destination "${destination}" is set but not implemented`, enquiry.email);
  return false;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return Response.json({ message: "Invalid request." }, { status: 400 });
  }

  const enquiry: ContactPayload = {
    name: clean(body.name, 120),
    email: clean(body.email, 254),
    company: clean(body.company, 160),
    services: Array.isArray(body.services)
      ? body.services.filter((s): s is string => typeof s === "string").slice(0, 10)
      : [],
    budget: clean(body.budget, 60),
    timeline: clean(body.timeline, 60),
    message: clean(body.message, 5000),
    website: clean(body.website, 200),
  };

  // Spam trap: bots fill the hidden field. Pretend it worked.
  if (enquiry.website) return Response.json({ message: "Thanks! We'll be in touch." });

  const errors: Record<string, string> = {};
  if (!enquiry.name) errors.name = "Please tell us your name.";
  if (!EMAIL.test(enquiry.email)) errors.email = "Please enter a valid email address.";
  if (enquiry.message.length < 10) errors.message = "A few lines about the project, please.";
  if (Object.keys(errors).length) {
    return Response.json(
      { message: "Please check the highlighted fields.", errors },
      { status: 400 },
    );
  }

  const delivered = await deliver(enquiry);
  if (!delivered) {
    return Response.json(
      {
        message: `Our form isn't connected yet. Please email us at ${site.email} and we'll reply within ${site.replyTime}.`,
      },
      { status: 503 },
    );
  }
  return Response.json({
    message: `Thanks, ${enquiry.name.split(" ")[0]}! We'll reply within ${site.replyTime}.`,
  });
}
