import type { Metadata } from "next";
import { DM_Mono, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "StratCanvas — Build & Backtest Trading Strategies Visually",
  description:
    "Design automated trading strategies on a drag-and-drop canvas — no code required.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmMono.variable}`}>
      <body className="relative min-h-screen overflow-x-hidden bg-strat-bg font-sans">
        {/* Grid + glow orbs */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-0 opacity-100"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 229, 160, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 229, 160, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none fixed -right-[200px] -top-[200px] z-0 size-[600px] rounded-full bg-strat-accent opacity-[0.08] blur-[100px]"
        />
        <div
          aria-hidden
          className="pointer-events-none fixed bottom-[20%] -left-[150px] z-0 size-[400px] rounded-full bg-strat-accent2 opacity-[0.08] blur-[100px]"
        />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
