import type { Metadata } from "next";
import Link from "next/link";
import { EmailCaptureForm } from "@/components/EmailCaptureForm";
import { Footer } from "@/components/site/Footer";
import { Icon } from "@/components/site/Icon";
import { Nav } from "@/components/site/Nav";

export const metadata: Metadata = {
  title: "Waitlist — StratCanvas early access",
  description:
    "Join the StratCanvas waitlist for early invites, changelog updates, and launch pricing.",
};

const perks = [
  "Private beta invite before public launch",
  "Launch pricing locked in for life",
  "Direct line to the founders during early access",
  "Zero spam — just progress reports as we ship",
];

export default function WaitlistPage() {
  return (
    <>
      <Nav ctaHref="/lead-magnet" ctaLabel="Free guide" />
      <div className="h-[88px] sm:h-[100px]" aria-hidden />

      <main
        id="main"
        className="relative z-[1] mx-auto max-w-[680px] px-6 py-16 sm:px-8 lg:py-24"
      >
        <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-strat-accent/20 bg-strat-accent/10 px-3.5 py-1.5 font-mono text-[0.72rem] font-medium uppercase tracking-[0.08em] text-strat-accent">
          <span
            aria-hidden
            className="size-1.5 animate-pulse rounded-full bg-strat-accent"
          />
          Early access · 2,400+ on the list
        </div>
        <h1 className="mb-5 font-serif font-bold text-[clamp(2.1rem,5vw,3.6rem)] leading-[1.08] tracking-tight">
          Join the{" "}
          <em className="italic text-strat-accent">StratCanvas</em> waitlist
        </h1>
        <p className="mb-10 max-w-[55ch] text-[1.05rem] font-light leading-relaxed text-strat-muted">
          Be first in line for private previews, onboarding help, and launch
          discounts. We&apos;ll only email you when we ship something worth
          your attention.
        </p>

        <div className="rounded-2xl border border-white/[0.13] bg-strat-bg3 p-7 sm:p-8">
          <EmailCaptureForm
            source="waitlist"
            buttonLabel="Reserve my spot"
            placeholder="you@email.com"
            label="Your email address for the waitlist"
          />
          <ul className="mt-7 space-y-2.5">
            {perks.map((p) => (
              <li
                key={p}
                className="flex gap-2 text-[0.88rem] leading-snug text-strat-muted"
              >
                <Icon
                  name="check"
                  className="mt-0.5 size-4 shrink-0 text-strat-accent"
                />
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-7 border-t border-white/[0.07] pt-5 text-[0.82rem] text-strat-muted">
            Want trading ideas you can steal today?{" "}
            <Link
              href="/lead-magnet"
              className="inline-flex items-center gap-1 text-strat-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-strat-accent focus-visible:ring-offset-2 focus-visible:ring-offset-strat-bg3"
            >
              Download the starter checklist
              <Icon name="arrow-right" className="size-3.5" />
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
