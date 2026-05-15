import Link from "next/link";
import { CanvasMockup } from "@/components/landing/CanvasMockup";
import {
  Divider,
  Faq,
  Features,
  FinalCta,
  HowItWorks,
  Pricing,
  SocialProof,
} from "@/components/landing/MarketingSections";
import { Footer } from "@/components/site/Footer";
import { Icon } from "@/components/site/Icon";
import { Nav } from "@/components/site/Nav";
import { Ticker } from "@/components/site/Ticker";

export default function HomePage() {
  return (
    <>
      <Nav />
      <div className="h-[88px] sm:h-[100px]" aria-hidden />

      <div className="relative z-[1]">
        <Ticker />
      </div>

      {/* Hero */}
      <header
        id="main"
        className="relative z-[1] flex min-h-[calc(100vh-160px)] flex-col items-center justify-center px-6 pb-16 pt-14 text-center sm:px-8 sm:pt-20"
      >
        <div className="mb-7 inline-flex items-center gap-1.5 rounded-full border border-strat-accent/20 bg-strat-accent/10 px-3.5 py-1.5 font-mono text-[0.74rem] font-medium uppercase tracking-[0.06em] text-strat-accent">
          <span
            aria-hidden
            className="size-1.5 animate-pulse rounded-full bg-strat-accent"
          />
          Visual strategy builder
        </div>
        <h1 className="mx-auto mb-6 max-w-[16ch] font-serif font-bold text-[clamp(2.6rem,6vw,5.5rem)] leading-[1.05] tracking-tight text-strat-text">
          Build. <em className="italic text-strat-accent">Backtest.</em>{" "}
          Deploy.
        </h1>
        <p className="mx-auto mb-10 max-w-[50ch] text-[1.05rem] font-light leading-relaxed text-strat-muted sm:text-[1.15rem]">
          Design automated trading strategies on a drag-and-drop canvas — no
          code required. Backtest on decades of market data and go live in
          minutes.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/waitlist"
            className="inline-flex items-center gap-2 rounded-lg bg-strat-accent px-7 py-3.5 text-[0.95rem] font-semibold text-strat-bg no-underline transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-strat-accent focus-visible:ring-offset-2 focus-visible:ring-offset-strat-bg sm:px-8"
          >
            Join the waitlist
            <Icon name="arrow-right" className="size-4" />
          </Link>
          <Link
            href="/lead-magnet"
            className="inline-flex items-center gap-2 rounded-lg border border-white/[0.13] px-7 py-3.5 text-[0.95rem] font-medium text-strat-text no-underline transition hover:border-strat-accent hover:text-strat-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-strat-accent focus-visible:ring-offset-2 focus-visible:ring-offset-strat-bg sm:px-8"
          >
            Grab the free guide
          </Link>
        </div>
        <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[0.82rem] text-strat-muted">
          {[
            "No credit card required",
            "20+ years of market data",
            "Live in minutes",
          ].map((label) => (
            <li key={label} className="inline-flex items-center gap-1.5">
              <Icon
                name="check"
                className="size-3.5 text-strat-accent"
                aria-hidden
              />
              {label}
            </li>
          ))}
        </ul>
      </header>

      <div className="mt-4 sm:mt-8">
        <CanvasMockup />
      </div>

      <SocialProof />

      <HowItWorks />
      <Divider />
      <Features />
      <Divider />
      <Divider />
      <Pricing />
      <Divider />
      <Faq />
      <FinalCta />
      <Footer />
    </>
  );
}
