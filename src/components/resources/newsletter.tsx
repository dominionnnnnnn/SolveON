"use client";

import { useState, type FormEvent } from "react";

type Status = { kind: "idle" | "sending" | "done" | "error"; message?: string };

/** Newsletter sign-up. Posts to /api/newsletter (see that file to connect a provider). */
export function Newsletter() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = new FormData(form).get("email");
    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json().catch(() => ({}))) as { message?: string };
      if (res.ok) {
        form.reset();
        setStatus({ kind: "done", message: data.message ?? "You're subscribed. Thank you!" });
      } else {
        setStatus({
          kind: "error",
          message: data.message ?? "Something went wrong. Please try again.",
        });
      }
    } catch {
      setStatus({ kind: "error", message: "Couldn't reach the server. Please try again." });
    }
  }

  return (
    <section className="dark relative overflow-hidden py-[72px] phone:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(600px_260px_at_85%_100%,rgba(74,222,128,.22),transparent_70%)]"
      />
      <div className="wrap relative flex flex-wrap items-center justify-between gap-10">
        <div className="flex-[1_1_420px]">
          <h2 className="disp text-[clamp(34px,4vw,54px)]">
            New guides, <span className="mk-d">once a month.</span>
          </h2>
          <p className="mt-[18px] max-w-[440px] text-[17px] leading-[1.6] text-white/66">
            One practical guide at a time on building and buying software. No spam, unsubscribe
            anytime.
          </p>
        </div>
        <div className="relative flex-[1_1_420px]">
          <form onSubmit={onSubmit} className="flex flex-wrap gap-2.5" noValidate={false}>
            <label htmlFor="nl-email" className="sr-only">
              Email address
            </label>
            <input
              id="nl-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@email.com"
              className="h-[52px] min-w-0 flex-[1_1_240px] rounded-full border border-white/30 bg-transparent px-[22px] text-base text-white placeholder:text-white/45 focus:border-green focus:outline-none"
            />
            <button
              type="submit"
              disabled={status.kind === "sending"}
              className="btn btn-g h-[52px] px-7 disabled:opacity-60"
            >
              {status.kind === "sending" ? "Subscribing…" : "Subscribe"}
            </button>
          </form>
          <p
            role="status"
            aria-live="polite"
            // Positioned below the form so the message doesn't shift the layout
            className={`absolute left-0 top-full mt-3 text-sm ${
              status.kind === "error" ? "text-[#FCA5A5]" : "text-green"
            }`}
          >
            {status.message}
          </p>
        </div>
      </div>
    </section>
  );
}
