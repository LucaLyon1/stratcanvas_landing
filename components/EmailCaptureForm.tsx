"use client";

import { useId, useState } from "react";
import { Icon } from "@/components/site/Icon";

type Source = "waitlist" | "lead_magnet";

type Props = {
  source: Source;
  className?: string;
  buttonLabel?: string;
  placeholder?: string;
  label?: string;
};

export function EmailCaptureForm({
  source,
  className = "",
  buttonLabel = "Join",
  placeholder = "you@email.com",
  label = "Email address",
}: Props) {
  const inputId = useId();
  const msgId = useId();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
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

  const isLoading = status === "loading";

  return (
    <div className={className}>
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-3 sm:flex-row sm:items-stretch"
        noValidate
      >
        <label htmlFor={inputId} className="sr-only">
          {label}
        </label>
        <input
          id={inputId}
          type="email"
          name="email"
          required
          autoComplete="email"
          inputMode="email"
          aria-invalid={status === "error"}
          aria-describedby={message ? msgId : undefined}
          placeholder={placeholder}
          value={email}
          disabled={isLoading}
          onChange={(e) => setEmail(e.target.value)}
          className="min-w-0 flex-1 rounded-lg border border-white/[0.13] bg-strat-bg2 px-4 py-3 font-sans text-sm text-strat-text outline-none ring-strat-accent/40 transition placeholder:text-strat-muted hover:border-white/25 focus:border-strat-accent/60 focus:ring-2 disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="inline-flex shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-lg bg-strat-accent px-6 py-3 font-sans text-sm font-semibold text-strat-bg transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-strat-accent focus-visible:ring-offset-2 focus-visible:ring-offset-strat-bg2 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoading ? (
            <>
              <span
                aria-hidden
                className="size-4 animate-spin rounded-full border-2 border-strat-bg/30 border-t-strat-bg"
              />
              Sending…
            </>
          ) : (
            <>
              {buttonLabel}
              <Icon name="arrow-right" className="size-4" />
            </>
          )}
        </button>
      </form>
      {message ? (
        <p
          id={msgId}
          role={status === "error" ? "alert" : "status"}
          className={`mt-3 inline-flex items-center gap-1.5 font-mono text-xs ${
            status === "success" ? "text-strat-accent" : "text-red-400"
          }`}
        >
          {status === "success" ? (
            <Icon name="check" className="size-3.5" />
          ) : null}
          {message}
        </p>
      ) : null}
    </div>
  );
}
