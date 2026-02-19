import Link from "next/link";

const article = {
  title: "The Attention Economy Is Collapsing. Here's What Comes Next.",
  author: "Maya Torres",
  initials: "MT",
  color: "#2D6A4F",
  date: "Feb 18, 2026",
  readTime: "8 min read",
  type: "blog" as const,
  premium: true,
  subscriptionPrice: 5,
  likes: 2431,
  comments: 189,
};

const sampleComments = [
  {
    name: "David Kim",
    initials: "DK",
    color: "#52796F",
    time: "2 hours ago",
    text: "This resonates deeply. I've been thinking about the shift from attention to intention for a while now. The creator economy needs this framing.",
  },
  {
    name: "Sarah Walsh",
    initials: "SW",
    color: "#74A67A",
    time: "4 hours ago",
    text: "Brilliant piece, Maya. The micropayments angle is especially interesting — I think we underestimate how willing people are to pay small amounts for genuine value.",
  },
];

function formatCount(n: number) {
  return n >= 1000 ? (n / 1000).toFixed(1).replace(/\.0$/, "") + "K" : String(n);
}

export default function PostPage(): React.ReactNode {
  return (
    <main className="py-8 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Back link */}
        <Link href="/creator" className="inline-flex items-center gap-1.5 text-sm text-brand-muted hover:text-brand-dark transition mb-8">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
          Back to {article.author}
        </Link>

        {/* Badges */}
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-block rounded-full text-xs font-semibold px-3 py-1 bg-[rgba(45,106,79,0.06)] text-brand-accent">
            Blog
          </span>
          {article.premium && (
            <span className="inline-block rounded-full text-xs font-semibold px-3 py-1 bg-brand-yellow text-brand-yellow-dark">
              Premium
            </span>
          )}
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-serif font-normal leading-tight mb-6">{article.title}</h1>

        {/* Author Row */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-10 pb-8 border-b border-brand-border">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
              style={{ backgroundColor: article.color }}
            >
              {article.initials}
            </div>
            <div>
              <Link href="/creator" className="font-semibold hover:underline">
                {article.author}
              </Link>
              <p className="text-sm text-brand-muted">
                {article.date} &middot; {article.readTime}
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="px-5 py-2 bg-brand-accent text-white text-sm font-semibold rounded-full hover:bg-brand-accent-light transition">
              Subscribe &mdash; ${article.subscriptionPrice}/mo
            </button>
            <button className="px-5 py-2 border border-brand-border text-brand-dark text-sm font-medium rounded-full hover:border-brand-accent/30 transition">
              Share
            </button>
          </div>
        </div>

        {/* Article Body */}
        <article className="font-serif text-[19px] leading-[1.8] text-[#2D2D2D] space-y-6 mb-12">
          <p>
            We&rsquo;ve built an entire digital infrastructure around capturing attention. Every notification, every infinite scroll, every autoplay video &mdash; engineered to keep you looking. But something is shifting. People are tired. Not just tired of the content, but tired of being the product.
          </p>
          <p>
            What comes next isn&rsquo;t the death of the creator economy. It&rsquo;s its maturation. Call it the <strong>intention economy</strong> &mdash; where people consciously choose what to pay attention to, and creators are rewarded for depth, not distraction. The platforms that survive will be the ones that respect this shift.
          </p>

          {/* Embedded Vlog */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 flex flex-col items-center justify-center text-center my-8">
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="none">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
            <p className="text-white/70 text-sm font-sans">Embedded Vlog &middot; 0:52</p>
          </div>

          <p>
            Trust is the new currency. When a reader subscribes to your work, they&rsquo;re not buying content &mdash; they&rsquo;re buying a relationship. They trust that you&rsquo;ll be honest, that you&rsquo;ll do the research, that you won&rsquo;t waste their time. That trust is worth more than any ad impression.
          </p>
          <p>
            The creators who thrive in this new era won&rsquo;t be the loudest. They&rsquo;ll be the most trusted. They&rsquo;ll own their audience, control their distribution, and build something that lasts. The attention economy is collapsing &mdash; and what&rsquo;s emerging is something far more human.
          </p>
        </article>

        {/* Engagement Bar */}
        <div className="flex items-center gap-4 py-6 border-t border-b border-brand-border mb-12">
          <button className="flex items-center gap-1.5 text-brand-accent font-medium">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#2D6A4F" stroke="#2D6A4F" strokeWidth="1.5">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            {formatCount(article.likes)}
          </button>
          <button className="flex items-center gap-1.5 text-brand-muted">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            {article.comments}
          </button>
          <div className="flex-1" />
          <button className="px-4 py-2 bg-brand-yellow text-brand-yellow-dark text-sm font-semibold rounded-full hover:bg-yellow-100 transition">
            Tip $2
          </button>
        </div>

        {/* Discussion */}
        <section>
          <h3 className="text-xl font-serif font-normal mb-6">Discussion</h3>

          {/* Reply textarea */}
          <div className="mb-8">
            <textarea
              placeholder="Share your thoughts..."
              className="w-full border border-brand-border rounded-xl p-4 text-sm resize-none h-24 focus:outline-none focus:ring-2 focus:ring-brand-accent/20 bg-white"
            />
            <div className="flex justify-end mt-2">
              <button className="px-5 py-2 bg-brand-accent text-white text-sm font-semibold rounded-full hover:bg-brand-accent-light transition">
                Reply
              </button>
            </div>
          </div>

          {/* Comments */}
          <div className="space-y-6">
            {sampleComments.map((comment, i) => (
              <div key={i} className="flex gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                  style={{ backgroundColor: comment.color }}
                >
                  {comment.initials}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-sm">{comment.name}</span>
                    <span className="text-xs text-brand-muted">{comment.time}</span>
                  </div>
                  <p className="text-sm text-[#2D2D2D] leading-relaxed">{comment.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
