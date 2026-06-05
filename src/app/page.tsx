// TEMPORARY Phase 1–2 checkpoint stub.
// The full home page (hero, stats, featured trails, events, social) is ported in Phase 3.
export default function Home() {
  return (
    <div className="pt-32 pb-24 px-5 text-center">
      <h1 className="font-bold uppercase tracking-tight text-4xl text-brand-purple">
        Shell is live
      </h1>
      <p className="mt-4 text-black/70 max-w-xl mx-auto">
        Next.js App Router layout, fonts, brand colours, nav and footer are wired up. The
        real page content is ported in Phase 3.
      </p>
      <div className="mt-8 inline-flex gap-2">
        <span className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-tight bg-brand-amber text-black">
          brand-amber
        </span>
        <span className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-tight bg-brand-purple text-white">
          brand-purple
        </span>
        <span className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-tight bg-brand-muted-amber text-black">
          brand-muted-amber
        </span>
      </div>
    </div>
  );
}
