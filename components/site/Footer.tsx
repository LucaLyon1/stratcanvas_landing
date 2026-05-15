import Link from "next/link";
import { Icon, type IconName } from "@/components/site/Icon";

const productLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#how", label: "How it works" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
];

const resourceLinks = [
  { href: "/lead-magnet", label: "Free guide" },
  { href: "/waitlist", label: "Waitlist" },
  { href: "#", label: "Docs" },
  { href: "#", label: "Status" },
];

const legalLinks = [
  { href: "#", label: "Privacy" },
  { href: "#", label: "Terms" },
  { href: "#", label: "Security" },
];

const socials: { href: string; label: string; icon: IconName }[] = [
  { href: "#", label: "Twitter", icon: "twitter" },
  { href: "#", label: "GitHub", icon: "github" },
  { href: "#", label: "LinkedIn", icon: "linkedin" },
];

function Column({
  title,
  items,
}: {
  title: string;
  items: { href: string; label: string }[];
}) {
  return (
    <div>
      <div className="mb-3 font-mono text-[0.7rem] uppercase tracking-[0.1em] text-strat-muted">
        {title}
      </div>
      <ul className="space-y-2">
        {items.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="text-[0.85rem] text-strat-muted no-underline transition hover:text-strat-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-strat-accent focus-visible:ring-offset-2 focus-visible:ring-offset-strat-bg"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative z-[1] border-t border-white/[0.07] px-6 pb-10 pt-16 sm:px-12">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="mb-4 flex items-center gap-2 font-serif text-[1.25rem] text-strat-text">
            <span
              aria-hidden
              className="inline-block size-2 rounded-full bg-strat-accent shadow-[0_0_12px_#00e5a0]"
            />
            StratCanvas
          </div>
          <p className="mb-6 max-w-[34ch] text-[0.85rem] leading-relaxed text-strat-muted">
            Visual strategy builder for traders who&apos;d rather draw than
            code. Build, backtest, and deploy from a single canvas.
          </p>
          <ul className="flex items-center gap-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  className="inline-flex size-9 items-center justify-center rounded-md border border-white/[0.13] text-strat-muted transition hover:border-strat-accent hover:text-strat-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-strat-accent focus-visible:ring-offset-2 focus-visible:ring-offset-strat-bg"
                >
                  <Icon name={s.icon} className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <Column title="Product" items={productLinks} />
        <Column title="Resources" items={resourceLinks} />
        <Column title="Legal" items={legalLinks} />
      </div>
      <div className="mx-auto mt-12 flex max-w-[1200px] flex-wrap items-center justify-between gap-3 border-t border-white/[0.07] pt-6">
        <p className="font-mono text-[0.75rem] text-strat-muted">
          © {new Date().getFullYear()} StratCanvas, Inc. All rights reserved.
        </p>
        <p className="font-mono text-[0.72rem] text-strat-muted">
          Trading involves risk. Backtests are not guarantees of future
          performance.
        </p>
      </div>
    </footer>
  );
}
