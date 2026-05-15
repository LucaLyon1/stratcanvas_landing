import type { CSSProperties, ReactNode } from "react";

export function CanvasMockup() {
  return (
    <div className="relative z-[1] mx-auto max-w-[1100px] px-6 pb-24 sm:px-8">
      <div className="overflow-hidden rounded-2xl border border-white/[0.13] bg-strat-bg3 shadow-[0_40px_120px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.04)]">
        <div className="flex items-center gap-3 border-b border-white/[0.07] bg-strat-bg2 px-5 py-[0.7rem]">
          <div className="flex gap-1.5">
            <div className="size-2.5 rounded-full bg-[#ff5f56]" />
            <div className="size-2.5 rounded-full bg-[#ffbd2e]" />
            <div className="size-2.5 rounded-full bg-[#27c93f]" />
          </div>
          <div className="mx-auto font-mono text-[0.75rem] text-strat-muted">
            Strategy_001.strat — StratCanvas
          </div>
        </div>
        <div className="grid min-h-[440px] grid-cols-1 md:grid-cols-[220px_minmax(0,1fr)_200px]">
          {/* Left panel */}
          <div className="hidden border-r border-white/[0.07] p-4 md:block">
            <div className="mb-2 mt-3 px-1 text-[0.65rem] uppercase tracking-[0.1em] text-strat-muted first:mt-0">
              Indicators
            </div>
            <div className="flex flex-col gap-1">
              {[
                { icon: "📈", label: "EMA Crossover", c: "bg-strat-accent/12 text-strat-accent" },
                { icon: "〰️", label: "RSI", c: "bg-strat-accent/12 text-strat-accent" },
                { icon: "🔻", label: "Bollinger Bands", c: "bg-strat-accent/12 text-strat-accent" },
                { icon: "📊", label: "MACD", c: "bg-strat-accent2/12 text-strat-accent2" },
                { icon: "⚡", label: "ATR", c: "bg-strat-accent2/12 text-strat-accent2" },
              ].map((b) => (
                <button
                  type="button"
                  key={b.label}
                  className="flex items-center gap-2 rounded-md px-2 py-[0.45rem] text-left text-[0.78rem] text-strat-muted transition hover:bg-strat-surface hover:text-strat-text"
                >
                  <span className={`flex size-[22px] shrink-0 items-center justify-center rounded text-[11px] ${b.c}`}>
                    {b.icon}
                  </span>
                  {b.label}
                </button>
              ))}
            </div>
            <div className="mb-2 mt-3 px-1 text-[0.65rem] uppercase tracking-[0.1em] text-strat-muted">Logic</div>
            <div className="flex flex-col gap-1">
              {[
                { icon: "🔀", label: "Condition", c: "bg-strat-accent3/12 text-strat-accent3" },
                { icon: "⚙️", label: "Filter", c: "bg-strat-accent3/12 text-strat-accent3" },
                { icon: "💰", label: "Order", c: "bg-strat-gold/12 text-strat-gold" },
                { icon: "🛡", label: "Stop Loss", c: "bg-strat-gold/12 text-strat-gold" },
              ].map((b) => (
                <button
                  type="button"
                  key={b.label}
                  className="flex items-center gap-2 rounded-md px-2 py-[0.45rem] text-left text-[0.78rem] text-strat-muted transition hover:bg-strat-surface hover:text-strat-text"
                >
                  <span className={`flex size-[22px] shrink-0 items-center justify-center rounded text-[11px] ${b.c}`}>
                    {b.icon}
                  </span>
                  {b.label}
                </button>
              ))}
            </div>
            <div className="mb-2 mt-3 px-1 text-[0.65rem] uppercase tracking-[0.1em] text-strat-muted">Data</div>
            <div className="flex flex-col gap-1">
              {[
                { icon: "💹", label: "Market Feed" },
                { icon: "📰", label: "News Signal" },
              ].map((b) => (
                <button
                  type="button"
                  key={b.label}
                  className="flex items-center gap-2 rounded-md px-2 py-[0.45rem] text-left text-[0.78rem] text-strat-muted transition hover:bg-strat-surface hover:text-strat-text"
                >
                  <span className="flex size-[22px] shrink-0 items-center justify-center rounded bg-strat-accent2/12 text-[11px] text-strat-accent2">
                    {b.icon}
                  </span>
                  {b.label}
                </button>
              ))}
            </div>
          </div>

          {/* Canvas */}
          <div className="relative min-h-[360px] overflow-hidden bg-strat-bg md:min-h-0">
            <svg
              viewBox="0 0 660 440"
              preserveAspectRatio="none"
              className="absolute inset-0 size-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 195 100 C 240 100 240 155 285 155"
                fill="none"
                stroke="rgba(0,229,160,0.3)"
                strokeWidth="1.5"
                strokeDasharray="4,3"
              />
              <path
                d="M 430 155 C 465 155 465 230 390 230"
                fill="none"
                stroke="rgba(0,229,160,0.3)"
                strokeWidth="1.5"
              />
              <path
                d="M 430 285 C 450 285 450 260 455 250 C 460 240 460 240 455 240"
                fill="none"
                stroke="rgba(0,170,255,0.3)"
                strokeWidth="1.5"
                strokeDasharray="4,3"
              />
              <path
                d="M 530 237 C 560 237 565 310 540 320"
                fill="none"
                stroke="rgba(244,200,66,0.35)"
                strokeWidth="2"
              />
              <path
                d="M 540 355 C 540 380 450 385 400 385"
                fill="none"
                stroke="rgba(255,107,53,0.3)"
                strokeWidth="1.5"
                strokeDasharray="3,3"
              />
            </svg>
            <div className="absolute inset-0">
              <NodeCard style={{ left: 40, top: 68 }} title="Market Feed" dot="bg-strat-accent2">
                <Row k="Symbol" v="BTCUSDT" highlighted />
                <Row k="Timeframe" v="1H" highlighted />
                <Row k="OHLCV" v="live" highlighted />
              </NodeCard>
              <NodeCard
                style={{ left: 280, top: 110 }}
                title="EMA Crossover"
                dot="bg-strat-accent"
                active
              >
                <Row k="Fast" v="9" highlighted />
                <Row k="Slow" v="21" highlighted />
                <Row k="Signal" v="CROSS↑" highlighted />
              </NodeCard>
              <NodeCard style={{ left: 280, top: 250 }} title="RSI Filter" dot="bg-strat-accent2">
                <Row k="Period" v="14" highlighted />
                <Row k="Oversold" v="< 35" highlighted />
              </NodeCard>
              <NodeCard style={{ left: 440, top: 195 }} title="AND Gate" dot="bg-strat-accent3">
                <Row k="Inputs" v="2 / 2" highlighted />
                <Row k="Output" v="BUY" highlighted />
              </NodeCard>
              <NodeCard style={{ left: 420, top: 305 }} title="Market Order" dot="bg-strat-gold">
                <Row k="Side" v="LONG" highlighted />
                <Row k="Size" v="2% equity" highlighted />
              </NodeCard>
            </div>
          </div>

          {/* Right panel */}
          <div className="hidden border-l border-white/[0.07] p-4 md:block">
            <div className="mb-2 text-[0.65rem] uppercase tracking-[0.1em] text-strat-muted">Backtest</div>
            {[
              ["Total return", "+147.3%", false],
              ["Sharpe ratio", "2.14", false],
              ["Max drawdown", "-12.8%", true],
              ["Win rate", "68.4%", false],
              ["Profit factor", "2.87", false],
            ].map(([label, val, neg]) => (
              <div key={String(label)} className="mb-1.5 rounded-md bg-strat-surface px-3 py-[0.6rem]">
                <div className="mb-0.5 text-[0.63rem] uppercase tracking-[0.08em] text-strat-muted">
                  {label}
                </div>
                <div
                  className={`font-mono text-base font-medium ${neg ? "text-red-400" : "text-strat-accent"}`}
                >
                  {val}
                </div>
              </div>
            ))}
            <div className="mb-1 mt-4 text-[0.65rem] uppercase tracking-[0.1em] text-strat-muted">
              Equity curve
            </div>
            <svg viewBox="0 0 170 55" className="mt-2 h-9 w-full" xmlns="http://www.w3.org/2000/svg">
              <polyline
                points="0,50 15,46 25,42 35,44 50,36 60,30 70,28 80,22 95,18 105,20 115,14 130,8 145,6 160,3 170,1"
                fill="none"
                stroke="#00e5a0"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <polyline
                points="0,50 15,46 25,42 35,44 50,36 60,30 70,28 80,22 95,18 105,20 115,14 130,8 145,6 160,3 170,1 170,55 0,55"
                fill="rgba(0,229,160,0.07)"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({
  k,
  v,
  highlighted,
}: {
  k: string;
  v: string;
  highlighted?: boolean;
}) {
  return (
    <div className="flex justify-between font-mono text-[0.68rem] leading-relaxed text-strat-muted">
      <span>{k}</span>
      <span className={highlighted ? "text-strat-accent2" : undefined}>{v}</span>
    </div>
  );
}

function NodeCard({
  title,
  dot,
  active,
  style,
  children,
}: {
  title: string;
  dot: string;
  active?: boolean;
  style: CSSProperties;
  children: ReactNode;
}) {
  return (
    <div
      style={style}
      className={`absolute rounded-[10px] border bg-strat-bg3 px-[14px] py-2.5 text-[0.73rem] shadow-[0_4px_20px_rgba(0,0,0,0.4)] ${
        active
          ? "border-strat-accent/40 shadow-[0_0_0_2px_rgba(0,229,160,0.12),0_4px_20px_rgba(0,0,0,0.4)]"
          : "border-white/[0.13]"
      } min-w-[130px]`}
    >
      <div className="mb-1.5 flex items-center gap-1.5 text-[0.75rem] font-medium text-strat-text">
        <span className={`size-[7px] shrink-0 rounded-full ${dot}`} />
        {title}
      </div>
      {children}
    </div>
  );
}
