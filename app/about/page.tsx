export default function AboutPage() {
  return (
    <main className="container-pad pt-12">
      <div className="card p-7 md:p-10">
        <span className="badge">About</span>
        <h1 className="h1 mt-4">Hi, I’m Taschia.</h1>
        <p className="p-muted mt-4">
          Ever After Beauty was created for brides and clients who want to feel like themselves —
          just beautifully elevated. My style is soft glam and timeless bridal, with a focus on
          skin that looks amazing in person and in photos.
        </p>

        <div className="mt-7 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-rose-200 bg-white/60 p-6">
            <div className="font-semibold">My approach</div>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              <li>• Listen first: your vibe, comfort, and preferences matter.</li>
              <li>• Build a long-wear base that looks natural and lasts.</li>
              <li>• Enhance your features — never “mask” them.</li>
              <li>• Keep the experience calm, organized, and fun.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-rose-200 bg-white/60 p-6">
            <div className="font-semibold">What I love</div>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              <li>• Soft glam + glowing skin</li>
              <li>• Bridal looks that feel timeless</li>
              <li>• Helping clients feel confident</li>
              <li>• Wedding mornings that run smoothly</li>
            </ul>
          </div>
        </div>

        <p className="mt-6 text-sm text-neutral-600">
          Want to add licensing details, experience, brands you use, and your service area?
          Tell me and I’ll personalize this page.
        </p>
      </div>
    </main>
  );
}
