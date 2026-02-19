import Link from "next/link";

const discussions = [
  { title: "Should AI-generated art be eligible for awards?", starter: "Rico Valdez", participants: 234, replies: 891, hot: true, topic: "Art & Tech" },
  { title: "The best climate policy no one talks about", starter: "James Chen", participants: 178, replies: 423, hot: true, topic: "Climate" },
  { title: "Weekly philosophy reading circle: Simone Weil", starter: "Aisha Patel", participants: 89, replies: 312, hot: false, topic: "Philosophy" },
  { title: "Indie music that defined your 2025", starter: "Rico Valdez", participants: 456, replies: 1203, hot: true, topic: "Music" },
];

function formatCount(n: number) {
  return n >= 1000 ? (n / 1000).toFixed(1).replace(/\.0$/, "") + "K" : String(n);
}

export default function DiscussionsPage(): React.ReactNode {
  return (
    <main className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-4xl font-serif font-normal mb-2">Discussions</h1>
            <p className="text-brand-muted text-lg">Join the conversation. Thoughtful threads on topics that matter.</p>
          </div>
          <button className="px-6 py-2.5 bg-brand-accent text-white text-sm font-semibold rounded-full hover:bg-brand-accent-light transition self-start">
            + New Discussion
          </button>
        </div>

        {/* Discussion List */}
        <div className="space-y-4">
          {discussions.map((d, i) => (
            <Link
              href="/post"
              key={i}
              className="block bg-white border border-brand-border rounded-2xl p-6 hover:shadow-sm transition"
            >
              <div className="flex items-start gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    {d.hot && (
                      <span className="rounded-full text-xs font-semibold px-3 py-1 bg-brand-yellow text-brand-yellow-dark">
                        HOT
                      </span>
                    )}
                    <span className="rounded-full text-xs font-semibold px-3 py-1 bg-brand-light text-brand-dark">
                      {d.topic}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1.5 leading-snug">{d.title}</h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-brand-muted">
                    <span>by {d.starter}</span>
                    <span>&middot;</span>
                    <span className="flex items-center gap-1">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                      {d.participants} participants
                    </span>
                    <span>&middot;</span>
                    <span className="flex items-center gap-1">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                      {formatCount(d.replies)} replies
                    </span>
                  </div>
                </div>
                <svg className="text-brand-muted flex-shrink-0 mt-2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
