"use client";

const tickers = [
  { sym: "BTC/USDT", val: "67,420", chg: "+2.4%", up: true },
  { sym: "ETH/USDT", val: "3,580", chg: "+1.8%", up: true },
  { sym: "AAPL", val: "214.30", chg: "-0.3%", up: false },
  { sym: "TSLA", val: "182.50", chg: "+4.1%", up: true },
  { sym: "SPY", val: "530.10", chg: "+0.7%", up: true },
  { sym: "GLD", val: "218.70", chg: "+0.2%", up: true },
  { sym: "EUR/USD", val: "1.0842", chg: "-0.1%", up: false },
  { sym: "SOL/USDT", val: "158.20", chg: "+5.2%", up: true },
  { sym: "NVDA", val: "875.40", chg: "+3.3%", up: true },
  { sym: "GBP/USD", val: "1.2640", chg: "-0.4%", up: false },
];

export function Ticker() {
  const doubled = [...tickers, ...tickers];
  return (
    <div
      aria-hidden
      className="relative z-[1] overflow-hidden border-y border-white/[0.07] bg-strat-bg2 py-[0.9rem]"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
      }}
    >
      <div className="flex animate-ticker gap-12 whitespace-nowrap">
        {doubled.map((t, i) => (
          <span
            key={`${t.sym}-${i}`}
            className="inline-flex shrink-0 items-center gap-2 font-mono text-[0.78rem] text-strat-muted"
          >
            <span className="text-strat-text/80">{t.sym}</span>
            <span>{t.val}</span>
            <span className={t.up ? "text-strat-accent" : "text-red-400"}>
              {t.chg}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
