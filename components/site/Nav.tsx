import Link from "next/link";

type Props = {
  ctaHref?: string;
  ctaLabel?: string;
};

export function Nav({ ctaHref = "/waitlist", ctaLabel = "Join waitlist" }: Props) {
  return (
    <nav className="fixed left-0 right-0 top-0 z-[100] flex items-center justify-between border-b border-white/[0.07] bg-strat-bg/80 px-6 py-[1.1rem] backdrop-blur-xl sm:px-12">
      <Link href="/" className="flex items-center gap-2 font-serif text-[1.4rem] tracking-tight text-strat-text">
        <span
          aria-hidden
          className="inline-block size-2 rounded-full bg-strat-accent shadow-[0_0_12px_#00e5a0]"
        />
        StratCanvas
      </Link>
      <ul className="hidden list-none gap-10 md:flex">
        <li>
          <a href="/#features" className="text-sm font-normal text-strat-muted transition hover:text-strat-text">
            Features
          </a>
        </li>
        <li>
          <a href="/#how" className="text-sm font-normal text-strat-muted transition hover:text-strat-text">
            How it works
          </a>
        </li>
        <li>
          <a href="/#pricing" className="text-sm font-normal text-strat-muted transition hover:text-strat-text">
            Pricing
          </a>
        </li>
        <li>
          <Link href="/lead-magnet" className="text-sm font-normal text-strat-muted transition hover:text-strat-text">
            Free guide
          </Link>
        </li>
      </ul>
      <Link
        href={ctaHref}
        className="rounded-md bg-strat-accent px-5 py-2 font-sans text-sm font-semibold text-strat-bg no-underline transition hover:opacity-90"
      >
        {ctaLabel} →
      </Link>
    </nav>
  );
}
