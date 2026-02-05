export default function ContactPage() {
  return (
    <main className="container-pad pt-12">
      <div className="card p-7 md:p-10">
        <span className="badge">Contact</span>
        <h1 className="h1 mt-4">Let’s talk details.</h1>
        <p className="p-muted mt-4">
          For availability, pricing, and bookings — send your date, location, and event type.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-rose-200 bg-white/60 p-6">
            <div className="font-semibold">Quick booking</div>
            <p className="mt-2 text-sm text-neutral-700">
              Prefer to schedule right away? Use the booking link.
            </p>
            <a
              className="btn-primary mt-4 inline-flex"
              href="https://calendly.com/"
              target="_blank"
              rel="noreferrer"
            >
              Book a Consultation
            </a>
          </div>

          <div className="rounded-2xl border border-rose-200 bg-white/60 p-6">
            <div className="font-semibold">Email</div>
            <p className="mt-2 text-sm text-neutral-700">
              Send a message with:
              <br />• Date
              <br />• Location
              <br />• Number of people
              <br />• Desired look (soft glam / full glam)
            </p>
            <a
              className="btn-secondary mt-4 inline-flex"
              href="mailto:hello@everafterbeauty.com?subject=Booking%20Inquiry%20-%20Ever%20After%20Beauty&body=Hi%20Taschia!%0A%0ADate:%0ALocation:%0AEvent%20type:%0ANumber%20of%20people:%0AGetting%20ready%20time:%0ADesired%20look:%0A%0AThank%20you!"
            >
              Email Taschia
            </a>
          </div>
        </div>

        <p className="mt-6 text-sm text-neutral-600">
          Want a real contact form that sends to email (no server)? Say the word and I’ll wire up Formspree.
        </p>
      </div>
    </main>
  );
}
