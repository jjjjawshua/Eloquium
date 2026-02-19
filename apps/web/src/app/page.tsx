import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-brand-bg/95 backdrop-blur border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-brand-accent flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
            </div>
            <span className="text-xl font-extrabold font-serif tracking-tight">Openly</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/explore" className="px-4 py-2 text-sm text-brand-muted hover:text-brand-dark rounded-lg">Explore</Link>
            <Link href="/discussions" className="px-4 py-2 text-sm text-brand-muted hover:text-brand-dark rounded-lg">Discussions</Link>
            <Link href="/pricing" className="px-4 py-2 text-sm text-brand-muted hover:text-brand-dark rounded-lg">Pricing</Link>
            <button className="px-5 py-2 bg-brand-accent text-white text-sm font-semibold rounded-full hover:bg-brand-accent-light transition">
              Start Writing
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-20 px-6 text-center bg-gradient-to-b from-brand-bg via-brand-yellow to-brand-bg">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white border border-brand-border px-4 py-1.5 rounded-full mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
            <span className="text-sm text-brand-accent font-semibold">Blog · Vlog · Discuss</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-normal leading-tight mb-5">
            A calmer space for<br />independent <em className="text-brand-accent">creators</em>
          </h1>
          <p className="text-lg text-brand-muted leading-relaxed mb-10 max-w-lg mx-auto">
            Write, record, discuss. Own your audience. Get paid fairly. No noise, no algorithms gaming you.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-3.5 bg-brand-accent text-white text-base font-semibold rounded-full shadow-lg shadow-brand-accent/25 hover:bg-brand-accent-light transition">
              Start Creating →
            </button>
            <Link href="/explore" className="px-8 py-3.5 border-2 border-brand-border bg-white text-brand-dark text-base font-medium rounded-full hover:border-brand-accent/30 transition">
              Explore Creators
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-brand-border py-10 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="text-sm font-serif font-bold">Openly</span>
          <span className="text-sm text-brand-muted">© 2026 Openly</span>
        </div>
      </footer>
    </main>
  );
}
