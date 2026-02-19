import Link from "next/link";

const featuredPosts = [
  {
    title: "The Attention Economy Is Collapsing. Here's What Comes Next.",
    author: "Maya Torres",
    initials: "MT",
    color: "#2D6A4F",
    date: "Feb 18, 2026",
    readTime: "8 min read",
    likes: 2431,
    comments: 189,
    type: "blog" as const,
    premium: true,
    preview:
      "We've built an entire digital infrastructure around capturing attention. But what happens when people stop giving it away for free?",
  },
  {
    title: "60 Seconds on Arctic Ice Loss",
    author: "James Chen",
    initials: "JC",
    color: "#52796F",
    date: "Feb 17, 2026",
    readTime: "0:47 vlog",
    likes: 5102,
    comments: 312,
    type: "vlog" as const,
    premium: false,
    preview:
      "New satellite data shows acceleration beyond all models. Here's what you need to know in under a minute.",
  },
  {
    title: "Is Free Will Compatible With Neuroscience?",
    author: "Aisha Patel",
    initials: "AP",
    color: "#74A67A",
    date: "Feb 16, 2026",
    readTime: "12 min read",
    likes: 3890,
    comments: 567,
    type: "blog" as const,
    premium: true,
    preview:
      "The latest findings in neuroscience are reopening a question philosophers thought they'd settled.",
  },
];

const badgeStyles = {
  blog: "bg-[rgba(45,106,79,0.06)] text-brand-accent",
  vlog: "bg-brand-yellow text-brand-yellow-dark",
  discussion: "bg-gray-100 text-brand-dark",
};

function formatCount(n: number) {
  return n >= 1000 ? (n / 1000).toFixed(1).replace(/\.0$/, "") + "K" : String(n);
}

export default function HomePage(): React.ReactNode {
  return (
    <main>
      {/* Hero */}
      <section className="pt-24 pb-20 px-6 text-center bg-gradient-to-b from-brand-bg via-brand-yellow to-brand-bg">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white border border-brand-border px-4 py-1.5 rounded-full mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
            <span className="text-sm text-brand-accent font-semibold">Blog &middot; Vlog &middot; Discuss</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-normal leading-tight mb-5">
            A calmer space for
            <br />
            independent <em className="text-brand-accent">creators</em>
          </h1>
          <p className="text-lg text-brand-muted leading-relaxed mb-10 max-w-lg mx-auto">
            Write, record, discuss. Own your audience. Set your price, keep 90%. No noise, no algorithms gaming you.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-3.5 bg-brand-accent text-white text-base font-semibold rounded-full shadow-lg shadow-brand-accent/25 hover:bg-brand-accent-light transition">
              Start Creating &rarr;
            </button>
            <Link
              href="/explore"
              className="px-8 py-3.5 border-2 border-brand-border bg-white text-brand-dark text-base font-medium rounded-full hover:border-brand-accent/30 transition"
            >
              Explore Creators
            </Link>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {/* Blog */}
          <div className="bg-white border border-brand-border rounded-2xl p-6">
            <div className="w-12 h-12 rounded-xl bg-[rgba(45,106,79,0.08)] flex items-center justify-center mb-5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2D6A4F" strokeWidth="1.5">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-normal mb-2">Blog</h3>
            <p className="text-brand-muted leading-relaxed">
              Long-form writing with rich formatting, embeds, and footnotes. Your words, beautifully presented.
            </p>
          </div>

          {/* Vlog */}
          <div className="bg-white border border-brand-border rounded-2xl p-6">
            <div className="w-12 h-12 rounded-xl bg-brand-yellow flex items-center justify-center mb-5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4A017" strokeWidth="1.5">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-normal mb-2">Vlog</h3>
            <p className="text-brand-muted leading-relaxed">
              Record and share sub-60-second videos. Quick, personal, and impactful micro-vlogs.
            </p>
          </div>

          {/* Discuss */}
          <div className="bg-white border border-brand-border rounded-2xl p-6">
            <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="1.5">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-normal mb-2">Discuss</h3>
            <p className="text-brand-muted leading-relaxed">
              Host threaded group conversations. Deeper dialogue with your community, not just comments.
            </p>
          </div>
        </div>
      </section>

      {/* Trending Now */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-serif font-normal">Trending now</h2>
            <Link href="/explore" className="text-sm text-brand-accent font-semibold hover:underline">
              See all &rarr;
            </Link>
          </div>
          <div className="bg-white border border-brand-border rounded-2xl divide-y divide-brand-border">
            {featuredPosts.map((post, i) => (
              <Link href="/post" key={i} className="flex items-start gap-6 p-6 hover:bg-brand-light/40 transition">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`rounded-full text-xs font-semibold px-3 py-1 ${badgeStyles[post.type]}`}>
                      {post.type.charAt(0).toUpperCase() + post.type.slice(1)}
                    </span>
                    {post.premium && (
                      <span className="rounded-full text-xs font-semibold px-3 py-1 bg-brand-yellow text-brand-yellow-dark">
                        Premium
                      </span>
                    )}
                    <span className="text-sm text-brand-muted">
                      {post.author} &middot; {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1.5 leading-snug">{post.title}</h3>
                  <p className="text-brand-muted leading-relaxed mb-3">{post.preview}</p>
                  <div className="flex items-center gap-4 text-sm text-brand-muted">
                    <span className="flex items-center gap-1.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                      {formatCount(post.likes)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                      {post.comments}
                    </span>
                    <span className="text-brand-muted">{post.readTime}</span>
                  </div>
                </div>
                {post.type === "vlog" && (
                  <div className="hidden sm:flex w-40 h-28 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 items-center justify-center flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="none">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Built Different */}
      <section className="py-20 px-6 bg-brand-dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-normal text-white mb-12 text-center">
            Built different. On purpose.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "You Own Your Audience", desc: "Export your full subscriber list anytime. No lock-in, ever." },
              { title: "Transparent Earnings", desc: "See exactly how much you earn, where it comes from, in real time." },
              { title: "Keep 90% of Everything", desc: "Flat 90/10 split on all creator subscriptions. Simple, transparent, always." },
              { title: "Real Human Support", desc: "Talk to actual people who care. 24-hour response guaranteed." },
              { title: "New Creator Spotlight", desc: "Algorithmic boosts for emerging voices. The playing field, leveled." },
              { title: "Tips & Support", desc: "Readers can tip creators from $0.50. Direct appreciation, no middleman." },
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-accent mt-2 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto bg-brand-yellow rounded-2xl py-16 px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-normal mb-4">
            Ready to create <em className="text-brand-accent">eloquently</em>?
          </h2>
          <p className="text-brand-muted mb-8">Join thousands of creators who chose a calmer, fairer platform.</p>
          <Link
            href="/explore"
            className="inline-block px-8 py-3.5 bg-brand-accent text-white text-base font-semibold rounded-full shadow-lg shadow-brand-accent/25 hover:bg-brand-accent-light transition"
          >
            Get Started Free &rarr;
          </Link>
        </div>
      </section>
    </main>
  );
}
