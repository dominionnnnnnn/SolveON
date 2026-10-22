"use client";

import { useEffect, useState, type FormEvent } from "react";
import { budgetOptions, serviceFromAnchor, serviceOptions, timelineOptions } from "@/lib/contact";
import { site } from "@/lib/site";

type Status = {
  kind: "idle" | "sending" | "done" | "error";
  message?: string;
  errors?: Record<string, string>;
};

function FieldError({ id, message }: { id: string; message?: string }) {
  return message ? (
    <p id={id} className="mt-1.5 text-xs font-medium text-[#B91C1C]">
      {message}
    </p>
  ) : null;
}

export function ContactForm() {
  const [services, setServices] = useState<string[]>(["Web app"]);
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  // Pre-select the service when arriving from a Services row (/contact?service=web-apps).
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("service");
    const pick = id ? serviceFromAnchor[id] : undefined;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reads the URL once on load
    if (pick) setServices([pick]);
  }, []);

  const toggle = (s: string) =>
    setServices((cur) => (cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s]));

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...Object.fromEntries(fd.entries()), services }),
      });
      const data = (await res.json().catch(() => ({}))) as Omit<Status, "kind">;
      if (res.ok) {
        form.reset();
        setStatus({ kind: "done", message: data.message });
      } else {
        setStatus({
          kind: "error",
          message: data.message ?? "Something went wrong. Please try again.",
          errors: data.errors,
        });
      }
    } catch {
      setStatus({
        kind: "error",
        message: `Couldn't reach the server. Please email us at ${site.email}.`,
      });
    }
  }

  const err = (field: string) => status.errors?.[field];
  const fieldProps = (field: string) => ({
    "aria-invalid": err(field) ? true : undefined,
    "aria-describedby": err(field) ? `${field}-error` : undefined,
  });

  return (
    <form
      onSubmit={onSubmit}
      className="box-border min-w-0 flex-[1_1_100%] rounded-[22px] border border-ink/10 bg-white p-6 shadow-[0_30px_80px_rgba(0,0,0,.08)] phone:p-9 tab:flex-[1_1_480px]"
    >
      <h2 className="disp text-[26px] font-extrabold tracking-[-0.03em]">Start a project</h2>
      <p className="muted mt-1.5 text-sm">Takes about two minutes.</p>

      {/* Spam trap: hidden from people, bots fill it in */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="c-website">Website</label>
        <input id="c-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-[26px] grid grid-cols-1 gap-4 phone:grid-cols-2">
        <div>
          <label className="lbl" htmlFor="c-name">
            Your name
          </label>
          <input
            className="fld"
            id="c-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Full name"
            {...fieldProps("name")}
          />
          <FieldError id="name-error" message={err("name")} />
        </div>
        <div>
          <label className="lbl" htmlFor="c-email">
            Email
          </label>
          <input
            className="fld"
            id="c-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            {...fieldProps("email")}
          />
          <FieldError id="email-error" message={err("email")} />
        </div>
      </div>

      <div className="mt-4">
        <label className="lbl" htmlFor="c-co">
          Company or project <span className="muted font-normal">(optional)</span>
        </label>
        <input
          className="fld"
          id="c-co"
          name="company"
          type="text"
          autoComplete="organization"
          placeholder="What's it called?"
        />
      </div>

      <fieldset className="m-0 mt-5 border-0 p-0">
        <legend className="lbl">What do you need?</legend>
        <div className="flex flex-wrap gap-2">
          {serviceOptions.map((s) => (
            <button
              key={s}
              type="button"
              className="pick"
              aria-pressed={services.includes(s)}
              onClick={() => toggle(s)}
            >
              {s}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-5 grid grid-cols-1 gap-4 phone:grid-cols-2">
        <div>
          <label className="lbl" htmlFor="c-budget">
            Budget range
          </label>
          <select className="fld" id="c-budget" name="budget" defaultValue="">
            <option value="" disabled>
              Select a range
            </option>
            {budgetOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="lbl" htmlFor="c-time">
            Timeline
          </label>
          <select className="fld" id="c-time" name="timeline" defaultValue="">
            <option value="" disabled>
              Select a timeline
            </option>
            {timelineOptions.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label className="lbl" htmlFor="c-msg">
          Tell us about it
        </label>
        <textarea
          className="fld resize-y"
          // Overrides .fld's fixed single-line height and padding, as in the design
          style={{ height: "auto", padding: "14px 16px", lineHeight: 1.5 }}
          id="c-msg"
          name="message"
          rows={5}
          required
          minLength={10}
          placeholder="What problem are you trying to solve, and who for?"
          {...fieldProps("message")}
        />
        <FieldError id="message-error" message={err("message")} />
      </div>

      <button
        type="submit"
        disabled={status.kind === "sending"}
        className="btn btn-g mt-[22px] h-[52px] w-full text-[15px] disabled:opacity-60"
      >
        {status.kind === "sending" ? "Sending…" : "Send message →"}
      </button>

      <p
        role="status"
        aria-live="polite"
        className={`text-center text-sm font-medium ${status.message ? "mt-3.5" : ""} ${
          status.kind === "error" ? "text-[#B91C1C]" : "text-green-dark"
        }`}
      >
        {status.message}
      </p>

      <p className="muted mt-3.5 text-center text-xs">
        Or book a call directly:{" "}
        {site.calendarUrl ? (
          <a
            href={site.calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-green-dark"
          >
            pick a time
          </a>
        ) : (
          <span className="font-semibold text-green-dark">[calendar link]</span>
        )}
      </p>
    </form>
  );
}
