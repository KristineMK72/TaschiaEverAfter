import Link from "next/link";

const PACKAGES = [
  {
    title: "Bridal Makeup",
    price: "Starting at $—",
    bullets: [
      "Customized bridal look",
      "Long-wear, photo-ready finish",
      "Lash application (optional)",
      "Touch-up tips + mini plan for the day",
    ],
  },
  {
    title: "Bridal Trial",
    price: "Starting at $—",
    bullets: [
      "1:1 trial session before the wedding",
      "We test the look, longevity, and products",
      "Adjustments based on your photos + comfort",
    ],
  },
  {
    title: "Bridal Party / Guests",
    price: "Starting at $— per person",
    bullets: [
      "Bridesmaids, moms, friends",
      "Soft glam to full glam",
      "Timeline-friendly application",
    ],
  },
  {
    title: "Special Events / Photos",
    price: "Starting at $—",
    bullets: [
      "Engagements, photoshoots, prom, events",
      "Camera-ready complexion",
      "Optional lashes",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="container-pad pt-12">
      <div className="card p-7 md:p-10">
        <span className="badge">Services & Packages</span>
        <h1 className="h1 mt-4">Services designed for calm, confident beauty.</h1>
        <p className="p-muted mt-4">
          Every face is different — so every service is tailored. Use these as starting points,
          and we’ll customize based on your timeline, location, and desired look.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a className="btn-primary" href="https://calendly.com/" target="_blank" rel="noreferrer">
            Book a Consultation
          </a>
          <Link className="btn-secondary" href="/contact">
            Ask a Question
          </Link>
        </div>
      </div>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        {PACKAGES.map((p) => (
          <div key={p.title} className="card p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="font-semibold text-neutral-900">{p.title}</div>
              <div className="text-sm text-neutral-600 whitespace-nowrap">{p.price}</div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              {p.bullets.map((b) => (
                <li key={b}>• {b}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mt-10 card p-7 md:p-10">
        <h2 className="h2">Travel & booking notes</h2>
        <ul className="mt-5 space-y-2 text-neutral-700">
          <li>• Travel fees may apply depending on location.</li>
          <li>• A deposit is required to reserve your date.</li>
          <li>• Bridal trials are strongly recommended.</li>
          <li>• Early start times may have an additional fee.</li>
        </ul>
        <p className="mt-6 text-sm text-neutral-600">
          Tip: If you prefer not to list prices publicly, we can switch all prices to “Inquire for quote.”
        </p>
      </section>
    </main>
  );
}
