import Link from "next/link";

const SERVICES = [
  {
    title: "Bridal Makeup",
    desc: "Soft glam to full glam — customized to your features, your dress, your photos, your vibe.",
  },
  {
    title: "Bridal Party",
    desc: "A calm, organized wedding morning with a clear schedule for everyone.",
  },
  {
    title: "Special Events",
    desc: "Engagements, photoshoots, prom, celebrations — polished and camera-ready.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Taschia made me feel like myself — just elevated. My makeup lasted through tears, hugs, and dancing.",
    name: "Bride",
  },
  {
    quote:
      "So calming on wedding morning. Everyone looked amazing and the timeline ran smoothly.",
    name: "Bridal Party",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="container-pad pt-12 md:pt-16">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="card p-7 md:p-10">
            <span className="badge">Bridal & Event Makeup Artist</span>
            <h1 className="h1 mt-4">
              Timeless beauty for your <span className="text-neutral-700">ever after</span>.
            </h1>
            <p className="p-muted mt-4">
              Ever After Beauty by Taschia specializes in long-wear, photo-ready makeup with a
              calm, confidence-building experience. On-location bridal services, bridal parties,
              and special events.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                className="btn-primary"
                href="https://calendly.com/"
                target="_blank"
                rel="noreferrer"
              >
                Book a Consultation
              </a>
              <Link className="btn-secondary" href="/gallery">
                View Gallery
              </Link>
            </div>

            <div className="mt-6 text-sm text-neutral-700">
              <div className="font-medium">Now booking</div>
              <div className="text-neutral-600">2026 weddings & upcoming events</div>
            </div>
          </div>

          <div className="card p-7 md:p-10">
            <h2 className="h2">What you can expect</h2>
            <ul className="mt-5 space-y-3 text-neutral-700">
              <li>✔ Skin-focused makeup that looks beautiful in real life and in photos</li>
              <li>✔ Long-wear products + techniques that last all day</li>
              <li>✔ A peaceful, organized experience (especially wedding mornings)</li>
              <li>✔ Bridal trials available</li>
              <li>✔ Travel available for weddings and events</li>
            </ul>

            <div className="mt-7">
              <Link className="link text-neutral-800" href="/services">
                View services & packages →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-pad mt-12">
        <h2 className="h2">Services</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.title} className="card p-6">
              <div className="font-semibold text-neutral-900">{s.title}</div>
              <p className="p-muted mt-2 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-pad mt-12">
        <div className="card p-7 md:p-10">
          <h2 className="h2">Kind words</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="rounded-2xl border border-rose-200 bg-white/60 p-6">
                <p className="text-neutral-800 leading-relaxed">“{t.quote}”</p>
                <div className="mt-3 text-sm text-neutral-600">— {t.name}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-neutral-600">
            Want your testimonial featured here? Send a quick note after your event 💗
          </p>
        </div>
      </section>

      <section className="container-pad mt-12">
        <div className="card p-7 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="h2">Ready to book?</h2>
            <p className="p-muted mt-2">
              Let’s talk date, location, and the look you’re dreaming of.
            </p>
          </div>
          <div className="flex gap-3">
            <a className="btn-primary" href="https://calendly.com/" target="_blank" rel="noreferrer">
              Book Now
            </a>
            <Link className="btn-secondary" href="/contact">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
