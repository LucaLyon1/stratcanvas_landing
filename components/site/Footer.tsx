import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-[1] mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 border-t border-white/[0.07] px-6 py-12 sm:px-12">
      <div className="flex items-center gap-2 font-serif text-[1.1rem] text-strat-text">
        <span
          aria-hidden
          className="inline-block size-2 rounded-full bg-strat-accent shadow-[0_0_12px_#00e5a0]"
        />
        StratCanvas
      </div>
      <ul className="flex list-none gap-8">
        <li>
          <a href="#" className="text-[0.82rem] text-strat-muted no-underline hover:text-strat-text">
            Privacy
          </a>
        </li>
        <li>
          <a href="#" className="text-[0.82rem] text-strat-muted no-underline hover:text-strat-text">
            Terms
          </a>
        </li>
        <li>
          <a href="#" className="text-[0.82rem] text-strat-muted no-underline hover:text-strat-text">
            Docs
          </a>
        </li>
        <li>
          <a href="#" className="text-[0.82rem] text-strat-muted no-underline hover:text-strat-text">
            Status
          </a>
        </li>
      </ul>
      <p className="font-mono text-[0.78rem] text-strat-muted">
        © {new Date().getFullYear()} StratCanvas, Inc.
      </p>
    </footer>
  );
}
