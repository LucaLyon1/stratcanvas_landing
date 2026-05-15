import Link from "next/link";

export function HowItWorks() {
  return (
    <section id="how" className="relative z-[1] mx-auto max-w-[1100px] px-6 py-24 sm:px-8">
      <div className="mb-4 inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-strat-accent before:inline-block before:h-px before:w-5 before:bg-strat-accent">
        How it works
      </div>
      <h2 className="mb-4 font-serif text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight md:max-w-[20ch]">
        From idea to <em className="italic text-strat-muted">live strategy</em> in four steps
      </h2>
      <p className="mb-12 max-w-[45ch] text-[1.05rem] font-light leading-relaxed text-strat-muted">
        No Python. No pinescript. No guessing. Just drag, connect, test, deploy.
      </p>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {[
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
        ].map((s) => (
          <div key={s.n} className="pr-8 pb-8">
            <div className="mb-4 flex h-7 w-7 items-center justify-center rounded-md border border-strat-accent/20 bg-strat-accent/10 font-mono text-[0.7rem] text-strat-accent">
              {s.n}
            </div>
            <h3 className="mb-2 text-[0.95rem] font-medium text-strat-text">{s.title}</h3>
            <p className="text-[0.82rem] leading-relaxed text-strat-muted">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Features() {
  const items = [
    {
      icon: "📐",
      title: "Visual strategy builder",
      body: "An infinite canvas with 40+ built-in indicators and logic blocks. Wire conditions, filters, and orders like drawing a flowchart.",
      hue: "bg-strat-accent/12 text-strat-accent",
    },
    {
      icon: "⚡",
      title: "Instant backtesting",
      body: "Sub-second backtests across decades of tick-level data. Walk-forward analysis, Monte Carlo simulation, and out-of-sample splits built in.",
      hue: "bg-strat-accent2/12 text-strat-accent2",
    },
    {
      icon: "🛡",
      title: "Risk management",
      body: "Add stop-loss, take-profit, trailing stops, and position sizing blocks. Visualize max drawdown and risk-adjusted returns in real time.",
      hue: "bg-strat-gold/12 text-strat-gold",
    },
    {
      icon: "🔌",
      title: "Broker integrations",
      body: "Connect to Interactive Brokers, Alpaca, Binance, Kraken, and 12+ others via OAuth. Execute trades without leaving the canvas.",
      hue: "bg-strat-accent3/12 text-strat-accent3",
    },
    {
      icon: "🔁",
      title: "Auto-optimisation",
      body: "Grid search or Bayesian optimisation over your parameter space. Find the best configuration without overfitting — CAGR, Sharpe, Calmar.",
      hue: "bg-strat-accent/12 text-strat-accent",
    },
    {
      icon: "👥",
      title: "Strategy marketplace",
      body: "Publish your strategies and earn passive income. Buy proven strategies from top performers — full transparency on live track records.",
      hue: "bg-strat-accent2/12 text-strat-accent2",
    },
  ];
  return (
    <section id="features" className="relative z-[1] mx-auto max-w-[1100px] px-6 py-24 sm:px-8">
      <div className="mb-4 inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-strat-accent before:inline-block before:h-px before:w-5 before:bg-strat-accent">
        Features
      </div>
      <h2 className="mb-4 font-serif text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight md:max-w-[20ch]">
        Everything you need, <em className="italic text-strat-muted">nothing you don&apos;t</em>
      </h2>
      <p className="mb-12 max-w-[45ch] text-[1.05rem] font-light leading-relaxed text-strat-muted">
        Purpose-built for quants, independent traders, and algo enthusiasts who want results — not complexity.
      </p>
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[14px] border border-white/[0.07] bg-white/[0.07] md:grid-cols-2 lg:grid-cols-3">
        {items.map((f) => (
          <div
            key={f.title}
            className="bg-strat-bg p-8 transition-colors hover:bg-strat-bg3"
          >
            <div
              className={`mb-4 flex size-[38px] items-center justify-center rounded-lg text-lg ${f.hue}`}
            >
              {f.icon}
            </div>
            <h3 className="mb-2 text-base font-medium text-strat-text">{f.title}</h3>
            <p className="text-sm leading-relaxed text-strat-muted">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function NameProposals() {
  return (
    <section id="names" className="relative z-[1] mx-auto max-w-[1100px] px-6 py-24 sm:px-8">
      <div className="mb-4 inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-strat-accent before:inline-block before:h-px before:w-5 before:bg-strat-accent">
        Brand
      </div>
      <h2 className="mb-4 font-serif text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight">
        Built for clarity
      </h2>
      <p className="mb-12 max-w-[45ch] text-[1.05rem] font-light leading-relaxed text-strat-muted">
        StratCanvas merges <em className="italic text-strat-text">strategy</em> and{" "}
        <em className="italic text-strat-text">canvas</em> — the product story is in the name.
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-[14px] border border-strat-accent/35 bg-gradient-to-br from-strat-accent/10 to-strat-bg3 p-7">
          <span className="mb-4 inline-block rounded px-2 py-0.5 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-strat-accent bg-strat-accent/10">
            ★ Top pick
          </span>
          <h3 className="mb-1 font-serif text-3xl tracking-tight">StratCanvas</h3>
          <div className="mb-3 font-mono text-[0.8rem] text-strat-accent">stratcanvas.io</div>
          <p className="mb-4 text-sm leading-relaxed text-strat-muted">
            Clean, memorable, brandable — and it explains the builder instantly to a technical audience.
          </p>
          <span className="inline-flex items-center gap-1 rounded border border-strat-accent/20 bg-strat-accent/10 px-2 py-1 text-[0.73rem] text-strat-accent">
            ● Founder&apos;s choice
          </span>
        </div>
        <div className="rounded-[14px] border border-white/[0.13] bg-strat-bg3 p-7 transition-all hover:border-strat-accent hover:shadow-[0_0_0_1px_rgba(0,229,160,0.15)]">
          <span className="mb-4 inline-block rounded bg-white/[0.05] px-2 py-0.5 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-strat-muted">
            Alternative vibe
          </span>
          <h3 className="mb-1 font-serif text-3xl tracking-tight">AlgoFlow</h3>
          <div className="mb-3 font-mono text-[0.8rem] text-strat-accent">algoflow.io</div>
          <p className="mb-4 text-sm leading-relaxed text-strat-muted">
            Emphasises flow-based visual programming — strong positioning against code-first tools.
          </p>
        </div>
        <div className="rounded-[14px] border border-white/[0.13] bg-strat-bg3 p-7 transition-all hover:border-strat-accent hover:shadow-[0_0_0_1px_rgba(0,229,160,0.15)]">
          <span className="mb-4 inline-block rounded bg-white/[0.05] px-2 py-0.5 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-strat-muted">
            Craft positioning
          </span>
          <h3 className="mb-1 font-serif text-3xl tracking-tight">SignalForge</h3>
          <div className="mb-3 font-mono text-[0.8rem] text-strat-accent">signalforge.io</div>
          <p className="mb-4 text-sm leading-relaxed text-strat-muted">
            A maker-of-signals story — professional, craft-oriented, great for serious independent traders.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="relative z-[1] mx-auto max-w-[1100px] px-6 py-24 sm:px-8">
      <div className="mb-4 inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-strat-accent before:inline-block before:h-px before:w-5 before:bg-strat-accent">
        Pricing
      </div>
      <h2 className="mb-4 font-serif text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight md:max-w-[20ch]">
        Simple pricing, <em className="italic text-strat-muted">no surprises</em>
      </h2>
      <p className="mb-12 max-w-[45ch] text-[1.05rem] font-light leading-relaxed text-strat-muted">
        Start free. Pay only when you&apos;re ready to go live. Cancel any time.
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-[14px] border border-white/[0.13] bg-strat-bg3 p-8">
          <div className="mb-3 font-mono text-[0.8rem] uppercase tracking-[0.1em] text-strat-muted">
            Starter
          </div>
          <div className="font-serif text-[2.8rem] leading-none">$0</div>
          <div className="mb-6 text-[0.8rem] text-strat-muted">Forever free</div>
          <ul className="mb-6 list-none space-y-2.5">
            {[
              "Up to 3 strategies",
              "5 years of backtest data",
              "Basic indicators (12)",
              "Paper trading mode",
              "Community access",
            ].map((li) => (
              <li key={li} className="flex gap-2 text-[0.85rem] leading-snug text-strat-muted">
                <span className="mt-0.5 shrink-0 text-strat-accent">✓</span>
                {li}
              </li>
            ))}
          </ul>
          <Link
            href="/waitlist"
            className="flex w-full items-center justify-center rounded-lg border border-white/[0.13] px-4 py-3 text-center text-sm font-medium text-strat-text no-underline transition hover:border-strat-accent hover:text-strat-accent"
          >
            Get started
          </Link>
        </div>

        <div className="relative rounded-[14px] border border-strat-accent bg-strat-bg3 p-8">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-lg bg-strat-accent px-3.5 py-1 font-mono text-[0.68rem] font-bold uppercase tracking-[0.08em] text-strat-bg">
            Most popular
          </div>
          <div className="mb-3 mt-2 font-mono text-[0.8rem] uppercase tracking-[0.1em] text-strat-muted">
            Pro
          </div>
          <div className="font-serif text-[2.8rem] leading-none">$49</div>
          <div className="mb-6 text-[0.8rem] text-strat-muted">per month, billed annually</div>
          <ul className="mb-6 list-none space-y-2.5">
            {[
              "Unlimited strategies",
              "20+ years of data (all assets)",
              "All 40+ indicators + custom",
              "Live trading (1 broker)",
              "Optimisation engine",
              "Priority support",
            ].map((li) => (
              <li key={li} className="flex gap-2 text-[0.85rem] leading-snug text-strat-muted">
                <span className="mt-0.5 shrink-0 text-strat-accent">✓</span>
                {li}
              </li>
            ))}
          </ul>
          <Link
            href="/waitlist"
            className="flex w-full items-center justify-center rounded-lg bg-strat-accent px-4 py-3 text-center text-sm font-semibold text-strat-bg no-underline transition hover:opacity-90"
          >
            Join waitlist →
          </Link>
        </div>

        <div className="rounded-[14px] border border-white/[0.13] bg-strat-bg3 p-8">
          <div className="mb-3 font-mono text-[0.8rem] uppercase tracking-[0.1em] text-strat-muted">
            Quant
          </div>
          <div className="font-serif text-[2.8rem] leading-none">$199</div>
          <div className="mb-6 text-[0.8rem] text-strat-muted">per month, billed annually</div>
          <ul className="mb-6 list-none space-y-2.5">
            {[
              "Everything in Pro",
              "Multi-broker execution",
              "Portfolio-level backtesting",
              "API & webhook access",
              "White-label for your clients",
              "Dedicated success manager",
            ].map((li) => (
              <li key={li} className="flex gap-2 text-[0.85rem] leading-snug text-strat-muted">
                <span className="mt-0.5 shrink-0 text-strat-accent">✓</span>
                {li}
              </li>
            ))}
          </ul>
          <Link
            href="/waitlist"
            className="flex w-full items-center justify-center rounded-lg border border-white/[0.13] px-4 py-3 text-center text-sm font-medium text-strat-text no-underline transition hover:border-strat-accent hover:text-strat-accent"
          >
            Join waitlist
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Divider() {
  return <div className="relative z-[1] h-px w-full bg-white/[0.07]" />;
}
