const PLACEHOLDERS = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  title: `Look ${i + 1}`,
}));

export default function GalleryPage() {
  return (
    <main className="container-pad pt-12">
      <div className="card p-7 md:p-10">
        <span className="badge">Gallery</span>
        <h1 className="h1 mt-4">Soft glam, timeless bridal, elevated beauty.</h1>
        <p className="p-muted mt-4">
          Add your photos here (Instagram-ready). When you’re ready, you can upload images
          to <code className="px-2 py-1 rounded bg-white/60 border border-rose-200">/public/gallery</code>.
        </p>
      </div>

      <section className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
        {PLACEHOLDERS.map((p) => (
          <div key={p.id} className="card overflow-hidden">
            <div className="aspect-[4/5] bg-gradient-to-br from-white/70 via-rose-100/60 to-amber-100/60" />
            <div className="p-3 text-sm text-neutral-700">{p.title}</div>
          </div>
        ))}
      </section>
    </main>
  );
}
