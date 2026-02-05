const FAQ = [
  {
    q: "Do you travel for weddings and events?",
    a: "Yes. Travel availability depends on date and location. Travel fees may apply.",
  },
  {
    q: "Do you require a deposit?",
    a: "Yes — a non-refundable deposit is required to reserve your date.",
  },
  {
    q: "Should I book a bridal trial?",
    a: "Strongly recommended. Trials let us confirm your look, longevity, and comfort ahead of the wedding.",
  },
  {
    q: "How long does bridal makeup take?",
    a: "Typically 60–90 minutes depending on the look. Bridal party services are usually 45–60 minutes each.",
  },
  {
    q: "What should I do to prep my skin?",
    a: "Hydrate, gentle exfoliation (not day-of), and avoid trying new products right before your event. I’ll send a prep guide after booking.",
  },
];

export default function FAQPage() {
  return (
    <main className="container-pad pt-12">
      <div className="card p-7 md:p-10">
        <span className="badge">FAQ</span>
        <h1 className="h1 mt-4">Questions, answered.</h1>
        <p className="p-muted mt-4">
          If you don’t see your question here, send a message — I’m happy to help.
        </p>

        <div className="mt-8 space-y-4">
          {FAQ.map((item) => (
            <div key={item.q} className="rounded-2xl border border-rose-200 bg-white/60 p-6">
              <div className="font-semibold text-neutral-900">{item.q}</div>
              <div className="mt-2 text-sm text-neutral-700 leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
