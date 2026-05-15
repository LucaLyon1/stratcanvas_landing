import type { Metadata } from "next";
import Link from "next/link";
import { EmailCaptureForm } from "@/components/EmailCaptureForm";
import { Footer } from "@/components/site/Footer";
import { Nav } from "@/components/site/Nav";

export const metadata: Metadata = {
  title: "Waitlist — StratCanvas early access",
  description:
    "Join the StratCanvas waitlist for early invites, changelog updates, and launch pricing.",
};

export default function WaitlistPage() {
  return (
    <>
      <Nav ctaHref="/lead-magnet" ctaLabel="Free guide" />
      <div className="h-[100px]" aria-hidden />

      <main className="relative z-[1] mx-auto max-w-[640px] px-6 py-16 text-center sm:px-8 lg:py-24">
        <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-strat-accent/20 bg-strat-accent/10 px-[0.9rem] py-[0.35rem] font-mono text-[0.72rem] font-medium uppercase tracking-[0.08em] text-strat-accent">
          Early access
        </div>
        <h1 className="mb-6 font-serif text-[clamp(2.25rem,5vw,3.75rem)] leading-tight tracking-tight">
          Join the StratCanvas waitlist
        </h1>
        <p className="mx-auto mb-10 max-w-[48ch] text-[1.1rem] font-light leading-relaxed text-strat-muted">
          Be first in line for private previews, onboarding help, and launch discounts. Zero spam — just real progress reports
          as we ship the builder, backtests, and connections.
        </p>

        <div className="rounded-2xl border border-white/[0.13] bg-strat-bg3 p-8 text-left">
          <EmailCaptureForm
            source="waitlist"
            buttonLabel="Reserve my spot"
            placeholder="you@email.com"
          />
          <p className="mt-6 text-center text-[0.8rem] text-strat-muted">
            Want trading ideas you can steal today?{" "}
            <Link href="/lead-magnet" className="text-strat-accent underline-offset-4 hover:underline">
              Download the starter checklist →
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
