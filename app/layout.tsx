import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ever After Beauty by Taschia | Bridal & Event Makeup",
  description:
    "Ever After Beauty by Taschia — bridal & event makeup artistry. Soft glam, long-wear, photo-ready beauty. On-location services & travel available.",
};

const NAV = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="rose-gold-shimmer">
        <header className="sticky top-0 z-50 border-b border-rose-200/60 bg-white/50 backdrop-blur-md">
          <div className="container-pad py-4 flex items-center justify-between gap-4">
            <Link href="/" className="font-semibold tracking-wide">
              Ever After Beauty <span className="text-neutral-600">by Taschia</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-700">
              {NAV.map((n) => (
                <Link key={n.href} href={n.href} className="hover:text-neutral-950">
                  {n.label}
                </Link>
              ))}
            </nav>

            <a
              className="btn-primary whitespace-nowrap"
              href="https://calendly.com/"
              target="_blank"
              rel="noreferrer"
            >
              Book
            </a>
          </div>

          <div className="md:hidden border-t border-rose-200/60">
            <div className="container-pad py-2 flex gap-4 overflow-x-auto text-sm text-neutral-700">
              {NAV.map((n) => (
                <Link key={n.href} href={n.href} className="hover:text-neutral-950 whitespace-nowrap">
                  {n.label}
                </Link>
              ))}
            </div>
          </div>
        </header>

        {children}

        <footer className="mt-16 border-t border-rose-200/60 bg-white/40 backdrop-blur-md">
          <div className="container-pad py-10 text-sm text-neutral-700 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              © {new Date().getFullYear()} Ever After Beauty by Taschia
            </div>
            <div className="flex flex-wrap gap-4">
              <a className="link" href="mailto:hello@everafterbeauty.com">
                hello@everafterbeauty.com
              </a>
              <span className="text-neutral-400">•</span>
              <a className="link" href="https://instagram.com" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <span className="text-neutral-400">•</span>
              <a className="link" href="https://facebook.com" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
