"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon, type IconName } from "@/components/site/Icon";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-strat-accent before:inline-block before:h-px before:w-5 before:bg-strat-accent">
      {children}
    </div>
  );
}

export function SocialProof() {
  const stats = [
    { value: "2,400+", label: "Traders on the waitlist" },
    { value: "20+ yrs", label: "Tick-level market data" },
    { value: "40+", label: "Built-in indicators" },
    { value: "12+", label: "Broker integrations" },
  ];
  return (
    <section
      aria-label="By the numbers"
      className="relative z-[1] mx-auto max-w-[1100px] px-6 pt-16 sm:px-8 lg:pt-24"
    >
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] md:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="flex flex-col items-center gap-1 bg-strat-bg px-6 py-7 text-center"
          >
            <div className="font-serif font-semibold text-2xl tracking-tight text-strat-text md:text-3xl">
              {s.value}
            </div>
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.08em] text-strat-muted">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps: { n: string; title: string; body: string }[] = [
    {
      n: "01",
      title: "Build on the canvas",
      body: "Drag indicators, conditions, and order blocks onto an infinite canvas and wire them together visually.",
    },
    {
      n: "02",
      title: "Configure parameters",
      body: "Click any node to set values. Period lengths, thresholds, position sizing — all in plain forms.",
    },
    {
      n: "03",
      title: "Backtest instantly",
      body: "Run your strategy against 20+ years of historical OHLCV data across equities, crypto, and forex. Results in seconds.",
    },
    {
      n: "04",
      title: "Deploy live",
      body: "Connect your broker API and flip the switch. StratCanvas handles execution, monitoring, and alerting.",
    },
  ];
  return (
    <section
      id="how"
      className="relative z-[1] mx-auto max-w-[1100px] px-6 py-24 sm:px-8"
    >
      <SectionLabel>How it works</SectionLabel>
      <h2 className="mb-4 font-serif font-bold text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight md:max-w-[20ch]">
        From idea to{" "}
        <em className="italic text-strat-muted">live strategy</em> in four steps
      </h2>
      <p className="mb-12 max-w-[45ch] text-[1.05rem] font-light leading-relaxed text-strat-muted">
        No Python. No pinescript. No guessing. Just drag, connect, test, deploy.
      </p>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10">
        {steps.map((s, i) => (
          <div key={s.n} className="relative pr-4">
            <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-md border border-strat-accent/25 bg-strat-accent/10 font-mono text-[0.72rem] text-strat-accent">
              {s.n}
            </div>
            <h3 className="mb-2 text-[0.98rem] font-medium text-strat-text">
              {s.title}
            </h3>
            <p className="text-[0.85rem] leading-relaxed text-strat-muted">
              {s.body}
            </p>
            {i < steps.length - 1 ? (
              <div
                aria-hidden
                className="absolute right-0 top-3 hidden h-px w-6 bg-gradient-to-r from-strat-accent/30 to-transparent lg:block"
              />
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}

export function Features() {
  const items: {
    icon: IconName;
    title: string;
    body: string;
    hue: string;
  }[] = [
      {
        icon: "layout-grid",
        title: "Visual strategy builder",
        body: "An infinite canvas with 40+ built-in indicators and logic blocks. Wire conditions, filters, and orders like drawing a flowchart.",
        hue: "bg-strat-accent/12 text-strat-accent",
      },
      {
        icon: "zap",
        title: "Instant backtesting",
        body: "Sub-second backtests across decades of tick-level data. Walk-forward analysis, Monte Carlo simulation, and out-of-sample splits built in.",
        hue: "bg-strat-accent2/12 text-strat-accent2",
      },
      {
        icon: "shield",
        title: "Risk management",
        body: "Add stop-loss, take-profit, trailing stops, and position sizing blocks. Visualise max drawdown and risk-adjusted returns in real time.",
        hue: "bg-strat-gold/12 text-strat-gold",
      },
      {
        icon: "plug",
        title: "Broker integrations",
        body: "Connect to Interactive Brokers, Alpaca, Binance, Kraken, and 12+ others via OAuth. Execute trades without leaving the canvas.",
        hue: "bg-strat-accent3/12 text-strat-accent3",
      },
      {
        icon: "refresh",
        title: "Auto-optimisation",
        body: "Grid search or Bayesian optimisation over your parameter space. Find the best configuration without overfitting — CAGR, Sharpe, Calmar.",
        hue: "bg-strat-accent/12 text-strat-accent",
      },
      {
        icon: "users",
        title: "Strategy marketplace",
        body: "Publish your strategies and earn passive income. Buy proven strategies from top performers — full transparency on live track records.",
        hue: "bg-strat-accent2/12 text-strat-accent2",
      },
    ];
  return (
    <section
      id="features"
      className="relative z-[1] mx-auto max-w-[1100px] px-6 py-24 sm:px-8"
    >
      <SectionLabel>Features</SectionLabel>
      <h2 className="mb-4 font-serif font-bold text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight md:max-w-[20ch]">
        Everything you need,{" "}
        <em className="italic text-strat-muted">nothing you don&apos;t</em>
      </h2>
      <p className="mb-12 max-w-[45ch] text-[1.05rem] font-light leading-relaxed text-strat-muted">
        Purpose-built for quants, independent traders, and algo enthusiasts who
        want results — not complexity.
      </p>
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] md:grid-cols-2 lg:grid-cols-3">
        {items.map((f) => (
          <div
            key={f.title}
            className="group bg-strat-bg p-7 transition-colors hover:bg-strat-bg3"
          >
            <div
              className={`mb-4 flex size-10 items-center justify-center rounded-lg ${f.hue}`}
            >
              <Icon name={f.icon} className="size-5" />
            </div>
            <h3 className="mb-2 text-base font-medium text-strat-text">
              {f.title}
            </h3>
            <p className="text-sm leading-relaxed text-strat-muted">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "$0",
      period: "Forever free",
      featured: false,
      features: [
        "Up to 3 strategies",
        "5 years of backtest data",
        "Basic indicators (12)",
        "Paper trading mode",
        "Community access",
      ],
      cta: "Get started",
    },
    {
      name: "Pro",
      price: "$49",
      period: "per month, billed annually",
      featured: true,
      features: [
        "Unlimited strategies",
        "20+ years of data (all assets)",
        "All 40+ indicators + custom",
        "Live trading (1 broker)",
        "Optimisation engine",
        "Priority support",
      ],
      cta: "Join waitlist",
    },
    {
      name: "Quant",
      price: "$199",
      period: "per month, billed annually",
      featured: false,
      features: [
        "Everything in Pro",
        "Multi-broker execution",
        "Portfolio-level backtesting",
        "API & webhook access",
        "White-label for your clients",
        "Dedicated success manager",
      ],
      cta: "Join waitlist",
    },
  ];

  return (
    <section
      id="pricing"
      className="relative z-[1] mx-auto max-w-[1100px] px-6 py-24 sm:px-8"
    >
      <SectionLabel>Pricing</SectionLabel>
      <h2 className="mb-4 font-serif font-bold text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight md:max-w-[20ch]">
        Simple pricing,{" "}
        <em className="italic text-strat-muted">no surprises</em>
      </h2>
      <p className="mb-12 max-w-[45ch] text-[1.05rem] font-light leading-relaxed text-strat-muted">
        Start free. Pay only when you&apos;re ready to go live. Cancel any time.
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={
              t.featured
                ? "relative rounded-2xl border border-strat-accent bg-strat-bg3 p-8 shadow-[0_0_0_1px_rgba(0,229,160,0.18),0_20px_60px_-30px_rgba(0,229,160,0.4)]"
                : "rounded-2xl border border-white/[0.13] bg-strat-bg3 p-8 transition-colors hover:border-white/25"
            }
          >
            {t.featured ? (
              <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-lg bg-strat-accent px-3.5 py-1 font-mono text-[0.68rem] font-bold uppercase tracking-[0.08em] text-strat-bg">
                Most popular
              </div>
            ) : null}
            <div
              className={`${t.featured ? "mt-2" : ""
                } mb-3 font-mono text-[0.8rem] uppercase tracking-[0.1em] text-strat-muted`}
            >
              {t.name}
            </div>
            <div className="font-serif font-semibold text-[2.8rem] leading-none">
              {t.price}
            </div>
            <div className="mb-6 text-[0.8rem] text-strat-muted">
              {t.period}
            </div>
            <ul className="mb-6 list-none space-y-2.5">
              {t.features.map((li) => (
                <li
                  key={li}
                  className="flex gap-2 text-[0.88rem] leading-snug text-strat-muted"
                >
                  <Icon
                    name="check"
                    className="mt-0.5 size-4 shrink-0 text-strat-accent"
                  />
                  {li}
                </li>
              ))}
            </ul>
            <Link
              href="/waitlist"
              className={
                t.featured
                  ? "flex w-full items-center justify-center gap-1.5 rounded-lg bg-strat-accent px-4 py-3 text-center text-sm font-semibold text-strat-bg no-underline transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-strat-accent focus-visible:ring-offset-2 focus-visible:ring-offset-strat-bg"
                  : "flex w-full items-center justify-center gap-1.5 rounded-lg border border-white/[0.13] px-4 py-3 text-center text-sm font-medium text-strat-text no-underline transition hover:border-strat-accent hover:text-strat-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-strat-accent focus-visible:ring-offset-2 focus-visible:ring-offset-strat-bg"
              }
            >
              {t.cta}
              {t.featured ? <Icon name="arrow-right" className="size-4" /> : null}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "Do I need to know how to code?",
    a: "No. Every strategy is built visually by dragging indicator, condition, and order blocks onto the canvas. If you can sketch a flowchart, you can build a strategy.",
  },
  {
    q: "How accurate are the backtests?",
    a: "We use tick-level OHLCV data going back 20+ years with realistic slippage, commission, and partial-fill models. Walk-forward and Monte Carlo are built in to catch overfitting before you go live.",
  },
  {
    q: "Which brokers and exchanges do you support?",
    a: "At launch: Interactive Brokers, Alpaca, Binance, Kraken, Coinbase, OANDA, plus six more. All connect via OAuth — no API keys floating around.",
  },
  {
    q: "What does it cost to get started?",
    a: "Nothing. The Starter plan is free forever with paper trading and five years of data. You only pay when you flip the switch to live trading.",
  },
  {
    q: "When is StratCanvas launching?",
    a: "Private beta is rolling out to the waitlist in cohorts. Public launch follows once the broker integrations are battle-tested. Waitlist members get launch pricing locked in.",
  },
  {
    q: "Is my strategy code private?",
    a: "Yes. Your strategies live in your workspace and are never used to train models or shared with other users. The marketplace is opt-in only.",
  },
];

function FaqItem({ q, a, defaultOpen }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className="border-b border-white/[0.07] last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 py-5 text-left transition hover:text-strat-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-strat-accent focus-visible:ring-offset-2 focus-visible:ring-offset-strat-bg"
      >
        <span className="text-[0.98rem] font-medium text-strat-text">{q}</span>
        <Icon
          name={open ? "minus" : "plus"}
          className="size-4 shrink-0 text-strat-accent"
        />
      </button>
      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
      >
        <div className="min-h-0">
          <p className="pb-5 pr-12 text-[0.9rem] leading-relaxed text-strat-muted">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  return (
    <section
      id="faq"
      className="relative z-[1] mx-auto max-w-[820px] px-6 py-24 sm:px-8"
    >
      <SectionLabel>FAQ</SectionLabel>
      <h2 className="mb-4 font-serif font-bold text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight">
        Questions, <em className="italic text-strat-muted">answered</em>
      </h2>
      <p className="mb-10 max-w-[55ch] text-[1.05rem] font-light leading-relaxed text-strat-muted">
        Everything we get asked most. Still curious? Reply to any of our launch
        emails and a human will get back to you.
      </p>
      <div className="rounded-2xl border border-white/[0.07] bg-strat-bg3/40 px-6 sm:px-8">
        {faqs.map((f, i) => (
          <FaqItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
        ))}
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="relative z-[1] mx-auto max-w-[1100px] px-6 pb-24 sm:px-8">
      <div className="relative overflow-hidden rounded-[28px] border border-strat-accent/30 bg-gradient-to-br from-strat-accent/12 via-strat-bg3 to-strat-bg3 p-10 sm:p-14">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-strat-accent opacity-20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-16 size-72 rounded-full bg-strat-accent2 opacity-20 blur-3xl"
        />
        <div className="relative mx-auto max-w-[640px] text-center">
          <div className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-strat-accent/25 bg-strat-accent/10 px-3 py-1 font-mono text-[0.72rem] uppercase tracking-[0.08em] text-strat-accent">
            <span className="size-1.5 animate-pulse rounded-full bg-strat-accent" />
            Limited beta cohort
          </div>
          <h2 className="mb-4 font-serif font-bold text-[clamp(2rem,4.4vw,3.25rem)] leading-tight tracking-tight">
            Stop coding strategies.{" "}
            <em className="italic text-strat-accent">Start drawing them.</em>
          </h2>
          <p className="mx-auto mb-8 max-w-[50ch] text-[1.05rem] font-light leading-relaxed text-strat-muted">
            Join 2,400+ traders waiting on early access. Launch pricing locked
            in for everyone on the list — no credit card now, no surprises
            later.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/waitlist"
              className="inline-flex items-center gap-2 rounded-lg bg-strat-accent px-7 py-3.5 text-[0.95rem] font-semibold text-strat-bg no-underline transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-strat-accent focus-visible:ring-offset-2 focus-visible:ring-offset-strat-bg"
            >
              Reserve my spot
              <Icon name="arrow-right" className="size-4" />
            </Link>
            <Link
              href="/lead-magnet"
              className="inline-flex items-center gap-2 rounded-lg border border-white/[0.13] px-7 py-3.5 text-[0.95rem] font-medium text-strat-text no-underline transition hover:border-strat-accent hover:text-strat-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-strat-accent focus-visible:ring-offset-2 focus-visible:ring-offset-strat-bg"
            >
              Grab the free guide
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Divider() {
  return <div className="relative z-[1] h-px w-full bg-white/[0.07]" />;
}
