"use client";

import { useState } from "react";

type Source = "waitlist" | "lead_magnet";

type Props = {
  source: Source;
  className?: string;
  buttonLabel?: string;
  placeholder?: string;
};

export function EmailCaptureForm({
  source,
  className = "",
  buttonLabel = "Join",
  placeholder = "you@email.com",
}: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage(null);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), source }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
        return;
      }
      setStatus("success");
      setMessage("You’re on the list. Check your inbox.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network error. Try again.");
    }
  }

  return (
    <div className={className}>
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-3 sm:flex-row sm:items-stretch"
      >
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder={placeholder}
          value={email}
          disabled={status === "loading"}
          onChange={(e) => setEmail(e.target.value)}
          className="min-w-0 flex-1 rounded-lg border border-white/13 bg-strat-bg2 px-4 py-3 font-sans text-sm text-strat-text outline-none ring-strat-accent/30 placeholder:text-strat-muted focus:border-strat-accent/40 focus:ring-2 disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex shrink-0 items-center justify-center rounded-lg bg-strat-accent px-6 py-3 font-sans text-sm font-semibold text-strat-bg transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : buttonLabel}
        </button>
      </form>
      {message ? (
        <p
          className={`mt-2 font-mono text-xs ${
            status === "success" ? "text-strat-accent" : "text-red-400"
          }`}
        >
          {message}
        </p>
      ) : null}
    </div>
  );
}
