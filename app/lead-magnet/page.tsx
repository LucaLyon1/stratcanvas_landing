import type { Metadata } from "next";
import Link from "next/link";
import { EmailCaptureForm } from "@/components/EmailCaptureForm";
import { Footer } from "@/components/site/Footer";
import { Icon } from "@/components/site/Icon";
import { Nav } from "@/components/site/Nav";

export const metadata: Metadata = {
  title: "Free guide — StratCanvas Visual Algo Checklist",
  description:
    "A practical checklist for designing your first profitable rules on a canvas — indicators, exits, sizing, and backtest pitfalls.",
};

const bullets = [
  "Translate a vague thesis into discrete rules you can drag onto a canvas.",
  "Pick indicators that actually map to regime, momentum, mean reversion, or volatility.",
  "Design exits that protect capital without chopping you out of winners.",
  "Size positions with simple risk caps before you optimise anything.",
  "Run out-of-sample tests that catch false positives from overfitting.",
];

export default function LeadMagnetPage() {
  return (
    <>
      <Nav ctaHref="/waitlist" ctaLabel="Join waitlist" />
      <div className="h-[88px] sm:h-[100px]" aria-hidden />

      <main
        id="main"
        className="relative z-[1] mx-auto max-w-[760px] px-6 py-16 sm:px-8 lg:py-24"
      >
        <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-strat-accent/20 bg-strat-accent/10 px-3.5 py-1.5 font-mono text-[0.72rem] font-medium uppercase tracking-[0.08em] text-strat-accent">
          Free download · PDF
        </div>
        <h1 className="mb-4 font-serif font-bold text-[clamp(2rem,5vw,3.25rem)] leading-tight tracking-tight">
          The{" "}
          <em className="italic text-strat-accent">Visual Algo Starter</em>{" "}
          Checklist
        </h1>
        <p className="mb-12 max-w-[55ch] text-[1.05rem] font-light leading-relaxed text-strat-muted">
          A single-page playbook for building your first sane, testable
          automation — before touching code or paying for data you don&apos;t
          need yet.
        </p>

        <div className="mb-12 rounded-2xl border border-white/[0.13] bg-strat-bg3 p-7 sm:p-8">
          <h2 className="mb-6 text-base font-medium text-strat-text">
            What you&apos;ll get
          </h2>
          <ul className="space-y-4">
            {bullets.map((b) => (
              <li
                key={b}
                className="flex gap-3 text-[0.95rem] leading-relaxed text-strat-muted"
              >
                <Icon
                  name="check"
                  className="mt-1 size-4 shrink-0 text-strat-accent"
                />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-strat-accent/25 bg-gradient-to-br from-strat-accent/12 to-strat-bg3 p-7 sm:p-8">
          <h2 className="mb-2 font-serif font-semibold text-2xl tracking-tight text-strat-text">
            Send me the checklist
          </h2>
          <p className="mb-6 text-sm text-strat-muted">
            We&apos;ll email the guide and occasional product notes.{" "}
            <Link
              href="/waitlist"
              className="text-strat-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-strat-accent focus-visible:ring-offset-2 focus-visible:ring-offset-strat-bg3"
            >
              Prefer just the launch list?
            </Link>
          </p>
          <EmailCaptureForm
            source="lead_magnet"
            buttonLabel="Email me the guide"
            placeholder="Your best email"
            label="Your email address for the guide"
          />
        </div>
      </main>

      <Footer />
    </>
  );
}
