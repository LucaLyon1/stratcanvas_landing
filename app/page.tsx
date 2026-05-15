import Link from "next/link";
import { CanvasMockup } from "@/components/landing/CanvasMockup";
import {
  Divider,
  Features,
  HowItWorks,
  NameProposals,
  Pricing,
} from "@/components/landing/MarketingSections";
import { Footer } from "@/components/site/Footer";
import { Nav } from "@/components/site/Nav";
import { Ticker } from "@/components/site/Ticker";

export default function HomePage() {
  return (
    <>
      <Nav />
      <div className="h-[100px]" aria-hidden />

      <div className="relative z-[1]">
        <Ticker />
      </div>

      {/* Hero */}
      <div className="relative z-[1] flex min-h-[calc(100vh-100px)] flex-col items-center justify-center px-6 pb-16 pt-[4rem] text-center sm:px-8">
        <div className="mb-8 inline-flex items-center gap-1.5 rounded-full border border-strat-accent/20 bg-strat-accent/10 px-[0.9rem] py-[0.35rem] font-mono text-[0.78rem] font-medium uppercase tracking-[0.04em] text-strat-accent">
          <span
            aria-hidden
            className="size-1.5 animate-pulse rounded-full bg-strat-accent"
          />
          Visual strategy builder
        </div>
        <h1 className="mx-auto mb-6 max-w-[14ch] font-serif text-[clamp(3rem,6vw,5.5rem)] leading-[1.05] tracking-tight text-strat-text">
          Build. <em className="italic text-strat-accent">Backtest.</em> Deploy.
        </h1>
        <p className="mx-auto mb-10 max-w-[48ch] text-[1.15rem] font-light leading-relaxed text-strat-muted">
          Design automated trading strategies on a drag-and-drop canvas — no code required. Backtest on decades of market
          data and go live in minutes.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/waitlist"
            className="inline-flex items-center gap-2 rounded-lg bg-strat-accent px-8 py-3.5 text-[0.95rem] font-semibold text-strat-bg no-underline transition hover:-translate-y-px hover:shadow-[0_8px_30px_rgba(0,229,160,0.25)]"
          >
            Join the waitlist →
          </Link>
          <Link
            href="/lead-magnet"
            className="inline-flex items-center gap-2 rounded-lg border border-white/[0.13] px-8 py-3.5 text-[0.95rem] font-medium text-strat-text no-underline transition hover:border-strat-accent hover:text-strat-accent"
          >
            Grab the free guide
          </Link>
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-[0.82rem] text-strat-muted">
          <span className="inline-flex items-center gap-1.5">
            ✦ No credit card required
          </span>
          <span className="inline-flex items-center gap-1.5">✦ 20+ years of market data</span>
          <span className="inline-flex items-center gap-1.5">✦ Live in minutes</span>
        </div>
      </div>

      <CanvasMockup />

      <HowItWorks />
      <Divider />
      <Features />
      <Divider />
      <NameProposals />
      <Divider />
      <Pricing />
      <Footer />
    </>
  );
}
