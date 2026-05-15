"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon } from "@/components/site/Icon";

type Props = {
  ctaHref?: string;
  ctaLabel?: string;
};

const links = [
  { href: "/#features", label: "Features" },
  { href: "/#how", label: "How it works" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
  { href: "/lead-magnet", label: "Free guide" },
];

export function Nav({
  ctaHref = "/waitlist",
  ctaLabel = "Join waitlist",
}: Props) {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed inset-x-0 top-0 z-[100] border-b border-white/[0.07] bg-strat-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-[1rem] sm:px-10">
        <Link
          href="/"
          className="flex items-center gap-2 font-serif text-[1.35rem] tracking-tight text-strat-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-strat-accent focus-visible:ring-offset-2 focus-visible:ring-offset-strat-bg"
        >
          <span
            aria-hidden
            className="inline-block size-2 rounded-full bg-strat-accent shadow-[0_0_12px_#00e5a0]"
          />
          StratCanvas
        </Link>
        <ul className="hidden list-none items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="rounded text-[0.88rem] font-normal text-strat-muted transition hover:text-strat-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-strat-accent focus-visible:ring-offset-2 focus-visible:ring-offset-strat-bg"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-1.5 rounded-md bg-strat-accent px-4 py-2 font-sans text-sm font-semibold text-strat-bg no-underline transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-strat-accent focus-visible:ring-offset-2 focus-visible:ring-offset-strat-bg sm:px-5"
          >
            {ctaLabel}
            <Icon name="arrow-right" className="size-3.5" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex size-10 items-center justify-center rounded-md border border-white/[0.13] text-strat-text transition hover:border-strat-accent hover:text-strat-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-strat-accent focus-visible:ring-offset-2 focus-visible:ring-offset-strat-bg md:hidden"
          >
            <span
              aria-hidden
              className={`relative block h-[14px] w-[18px] transition-transform ${
                open ? "rotate-180" : ""
              }`}
            >
              <span
                className={`absolute left-0 top-0 h-[1.5px] w-full bg-current transition-transform ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[6px] h-[1.5px] w-full bg-current transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-[1.5px] w-full bg-current transition-transform ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-white/[0.07] bg-strat-bg/95 backdrop-blur-xl transition-[max-height] duration-300 ease-out md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 py-3">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2.5 text-[0.95rem] text-strat-muted transition hover:bg-strat-bg3 hover:text-strat-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-strat-accent"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
