// app/page.tsx
import Link from "next/link";

const services = [
  {
    title: "Bridal Makeup",
    desc: "Soft glam to full glam with long-wear skin and photo-ready finish.",
  },
  {
    title: "Bridal Party",
    desc: "A calm, organized beauty schedule for your whole crew.",
  },
  {
    title: "Events + Photoshoots",
    desc: "Polished, camera-friendly makeup for any occasion.",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-50">
      <header className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
        <div className="font-semibold tracking-wide">
          <span className="text-neutral-50">Be.You.Tiful</span>{" "}
          <span className="text-neutral-300">Artistry</span>
        </div>
        <nav className="flex gap-5 text-sm text-neutral-300">
          <Link className="hover:text-white" href="/services">Services</Link>
          <Link className="hover:text-white" href="/gallery">Gallery</Link>
          <Link className="hover:text-white" href="/about">About</Link>
          <Link className="hover:text-white" href="/contact">Contact</Link>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-neutral-300 text-sm tracking-widest uppercase">
            Wedding + Event Makeup Artist
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight">
            Feel like <span className="text-neutral-200">you</span> —
            <span className="text-neutral-200"> beautifully elevated</span>.
          </h1>
          <p className="mt-5 text-neutral-300 leading-relaxed">
            Long-wear, photo-ready makeup with a calm, confidence-building experience.
            Bridal, bridal parties, and special events.
          </p>

          <div className="mt-7 flex gap-3">
            <a
              className="rounded-xl bg-white text-neutral-950 px-5 py-3 text-sm font-medium hover:opacity-90"
              href="https://calendly.com/"
              target="_blank"
              rel="noreferrer"
            >
              Book a Consultation
            </a>
            <Link
              className="rounded-xl border border-neutral-700 px-5 py-3 text-sm font-medium text-neutral-100 hover:bg-neutral-900"
              href="/gallery"
            >
              View Gallery
            </Link>
          </div>

          <p className="mt-4 text-xs text-neutral-400">
            *Based in your area • Travel available • Bridal trials offered
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
          <div className="text-sm text-neutral-300">Quick Info</div>
          <ul className="mt-4 space-y-3 text-neutral-200">
            <li>✔ Bridal • Events • Photoshoots</li>
            <li>✔ Skin-focused, long-wear products</li>
            <li>✔ Timeline planning for wedding mornings</li>
            <li>✔ Licensed (if applicable) • Makeup Artist</li>
          </ul>

          <div className="mt-6 rounded-xl bg-neutral-950/60 border border-neutral-800 p-4">
            <div className="text-sm font-medium">Now booking</div>
            <div className="text-neutral-300 text-sm mt-1">
              2026 weddings + upcoming events
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-14">
        <h2 className="text-2xl font-semibold">Services</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-neutral-800 bg-neutral-900/30 p-6">
              <div className="font-semibold">{s.title}</div>
              <p className="mt-2 text-sm text-neutral-300">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link className="text-sm text-neutral-200 underline underline-offset-4" href="/services">
            See packages & details →
          </Link>
        </div>
      </section>

      <footer className="border-t border-neutral-900">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-neutral-400">
          © {new Date().getFullYear()} Be.You.Tiful Artistry •{" "}
          <a className="underline underline-offset-4 hover:text-white" href="mailto:hello@yourdomain.com">
            hello@yourdomain.com
          </a>
        </div>
      </footer>
    </main>
  );
}
