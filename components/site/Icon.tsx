import type { SVGProps } from "react";

type IconName =
  | "layout-grid"
  | "zap"
  | "shield"
  | "plug"
  | "refresh"
  | "users"
  | "candlestick"
  | "wave"
  | "bands"
  | "bars"
  | "bolt"
  | "split"
  | "settings"
  | "wallet"
  | "shield-alt"
  | "activity"
  | "newspaper"
  | "check"
  | "arrow-right"
  | "sparkles"
  | "minus"
  | "plus"
  | "twitter"
  | "github"
  | "linkedin";

type Props = SVGProps<SVGSVGElement> & { name: IconName };

const paths: Record<IconName, JSX.Element> = {
  "layout-grid": (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </>
  ),
  zap: <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />,
  shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  "shield-alt": (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  plug: (
    <>
      <path d="M9 2v6" />
      <path d="M15 2v6" />
      <path d="M6 8h12v3a6 6 0 1 1-12 0V8z" />
      <path d="M12 17v5" />
    </>
  ),
  refresh: (
    <>
      <path d="M21 12a9 9 0 1 1-3-6.7" />
      <path d="M21 4v5h-5" />
    </>
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  candlestick: (
    <>
      <path d="M9 5v3" />
      <rect x="7" y="8" width="4" height="9" rx="0.5" />
      <path d="M9 17v3" />
      <path d="M17 3v4" />
      <rect x="15" y="7" width="4" height="11" rx="0.5" />
      <path d="M17 18v3" />
    </>
  ),
  wave: <path d="M3 12c2 0 2-4 4-4s2 8 4 8 2-8 4-8 2 4 4 4 2-2 2-2" />,
  bands: (
    <>
      <path d="M3 6h18" />
      <path d="M3 18h18" />
      <path d="M3 12c2 0 2-3 4-3s2 6 4 6 2-6 4-6 2 3 4 3" />
    </>
  ),
  bars: (
    <>
      <rect x="3" y="12" width="3" height="8" />
      <rect x="9" y="8" width="3" height="12" />
      <rect x="15" y="4" width="3" height="16" />
    </>
  ),
  bolt: <path d="M13 3 4 14h7l-1 7 9-12h-7l1-6z" />,
  split: (
    <>
      <path d="M6 3v6a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" />
      <path d="M12 15v6" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1c0 .7.4 1.3 1 1.5a1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8c.2.6.8 1 1.5 1H21a2 2 0 0 1 0 4h-.1c-.7 0-1.3.4-1.5 1z" />
    </>
  ),
  wallet: (
    <>
      <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M17 12h2" />
      <path d="M3 9h18" />
    </>
  ),
  activity: <path d="M3 12h4l3-9 4 18 3-9h4" />,
  newspaper: (
    <>
      <path d="M4 5h13v15H4z" />
      <path d="M17 8h3v9a3 3 0 0 1-3 3" />
      <path d="M7 9h7" />
      <path d="M7 13h7" />
      <path d="M7 17h4" />
    </>
  ),
  check: <path d="M20 6 9 17l-5-5" />,
  "arrow-right": (
    <>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3v4" />
      <path d="M12 17v4" />
      <path d="M3 12h4" />
      <path d="M17 12h4" />
      <path d="m5.6 5.6 2.8 2.8" />
      <path d="m15.6 15.6 2.8 2.8" />
      <path d="m18.4 5.6-2.8 2.8" />
      <path d="m8.4 15.6-2.8 2.8" />
    </>
  ),
  minus: <path d="M5 12h14" />,
  plus: (
    <>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </>
  ),
  twitter: (
    <path d="M18 4h3l-7.5 8.6L22 22h-6.8l-5.3-7-6.1 7H1l8-9.2L1 4h7l4.8 6.4L18 4z" />
  ),
  github: (
    <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2z" />
  ),
  linkedin: (
    <>
      <path d="M4 4h4v16H4z" />
      <circle cx="6" cy="3.5" r="1.5" />
      <path d="M10 8h4v2c.6-1 2-2 4-2 3 0 4 2 4 5v7h-4v-6c0-1.5-.5-2.5-2-2.5s-2 1-2 2.5V20h-4z" />
    </>
  ),
};

const filled = new Set<IconName>(["zap", "shield", "bars", "bolt", "twitter", "github", "linkedin"]);

export function Icon({ name, className, ...rest }: Props) {
  const useFill = filled.has(name);
  return (
    <svg
      viewBox="0 0 24 24"
      width={24}
      height={24}
      fill={useFill ? "currentColor" : "none"}
      stroke={useFill ? "none" : "currentColor"}
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      focusable={false}
      className={className}
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}

export type { IconName };
