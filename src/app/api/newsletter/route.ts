// Newsletter sign-up endpoint used by the Resources page form.
//
// Not connected to an email service yet (decision tracked in CHECKLIST.md).
// Until it is, sign-ups get an honest "not open yet" reply instead of a fake success.
// To connect a provider: set NEWSLETTER_PROVIDER and its API key in Vercel, then
// add the provider call in `subscribe()` below.

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

async function subscribe(email: string): Promise<{ ok: boolean; message: string }> {
  const provider = process.env.NEWSLETTER_PROVIDER;
  if (!provider) {
    return { ok: false, message: "Sign-ups aren't open yet. Please check back soon." };
  }
  // TODO: call the chosen provider's API here (e.g. Brevo, Mailchimp, Buttondown).
  console.error(`Newsletter provider "${provider}" is set but not implemented`, email);
  return { ok: false, message: "Something went wrong. Please try again later." };
}

export async function POST(request: Request) {
  let email = "";
  try {
    const body = (await request.json()) as { email?: unknown };
    email = typeof body.email === "string" ? body.email.trim() : "";
  } catch {
    return Response.json({ message: "Invalid request." }, { status: 400 });
  }

  if (!EMAIL.test(email) || email.length > 254) {
    return Response.json({ message: "Please enter a valid email address." }, { status: 400 });
  }

  const result = await subscribe(email);
  return Response.json({ message: result.message }, { status: result.ok ? 200 : 503 });
}
