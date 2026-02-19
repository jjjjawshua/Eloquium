"use client";

import { useState } from "react";
import Link from "next/link";

const creator = {
  name: "Maya Torres",
  initials: "MT",
  subs: "24.3K",
  color: "#2D6A4F",
  tagline: "Making sense of AI, one essay at a time",
  posts: 312,
  type: "blog" as const,
  subscriptionPrice: 5 as number | null,
};

const creatorPosts = [
  {
    title: "The Attention Economy Is Collapsing. Here's What Comes Next.",
    date: "Feb 18, 2026",
    readTime: "8 min read",
    likes: 2431,
    comments: 189,
    type: "blog" as const,
    premium: true,
    preview: "We've built an entire digital infrastructure around capturing attention. But what happens when people stop giving it away for free?",
  },
  {
    title: "Why I Left Big Tech to Write Full-Time",
    date: "Feb 12, 2026",
    readTime: "6 min read",
    likes: 1893,
    comments: 94,
    type: "blog" as const,
    premium: false,
    preview: "After 8 years building products for millions, I realized I was building someone else's dream. Here's what happened when I chose my own.",
  },
  {
    title: "The Creator Middle Class Is Real",
    date: "Feb 5, 2026",
    readTime: "10 min read",
    likes: 3201,
    comments: 267,
    type: "blog" as const,
    premium: true,
    preview: "Not every creator needs a million followers. The sustainable path is quieter than you think.",
  },
];

const badgeStyles: Record<string, string> = {
  blog: "bg-[rgba(45,106,79,0.06)] text-brand-accent",
  vlog: "bg-brand-yellow text-brand-yellow-dark",
  discussion: "bg-gray-100 text-brand-dark",
};

const tabs = ["Posts", "Vlogs", "Discussions", "About"];

function formatCount(n: number) {
  return n >= 1000 ? (n / 1000).toFixed(1).replace(/\.0$/, "") + "K" : String(n);
}

export default function CreatorPage(): React.ReactNode {
  const [activeTab, setActiveTab] = useState("Posts");

  return (
    <main>
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-[rgba(45,106,79,0.08)] to-[rgba(254,249,231,0.5)] py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0"
            style={{ backgroundColor: creator.color }}
          >
            {creator.initials}
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3 mb-2">
              <h1 className="text-3xl font-serif font-normal">{creator.name}</h1>
              <div className="flex items-center gap-2">
                <span className={`rounded-full text-xs font-semibold px-3 py-1 ${badgeStyles[creator.type]}`}>
                  {creator.type.charAt(0).toUpperCase() + creator.type.slice(1)}
                </span>
                {creator.subscriptionPrice ? (
                  <span className="rounded-full text-xs font-semibold px-3 py-1 bg-brand-yellow text-brand-yellow-dark">
                    Premium &middot; ${creator.subscriptionPrice}/mo
                  </span>
                ) : (
                  <span className="rounded-full text-xs font-semibold px-3 py-1 bg-brand-light text-brand-muted">
                    Free
                  </span>
                )}
              </div>
            </div>
            <p className="text-brand-muted text-lg mb-4">{creator.tagline}</p>
            <div className="flex items-center justify-center md:justify-start gap-6 text-sm text-brand-muted mb-6">
              <span>
                <strong className="text-brand-dark">{creator.subs}</strong> subscribers
              </span>
              <span>
                <strong className="text-brand-dark">{creator.posts}</strong> posts
              </span>
            </div>
            <div className="flex gap-3 justify-center md:justify-start">
              <button className="px-6 py-2.5 bg-brand-accent text-white text-sm font-semibold rounded-full hover:bg-brand-accent-light transition">
                {creator.subscriptionPrice
                  ? `Subscribe \u2014 $${creator.subscriptionPrice}/mo`
                  : "Follow"}
              </button>
              <button className="px-6 py-2.5 border border-brand-border text-brand-dark text-sm font-semibold rounded-full hover:border-brand-accent/30 transition flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                Tip
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Bar */}
      <div className="border-b border-brand-border px-6">
        <div className="max-w-6xl mx-auto flex gap-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-4 text-sm font-medium transition relative ${
                activeTab === tab ? "text-brand-accent" : "text-brand-muted hover:text-brand-dark"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-accent rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Post List */}
      <div className="py-8 px-6">
        <div className="max-w-6xl mx-auto space-y-4">
          {creatorPosts.map((post, i) => (
            <Link
              href="/post"
              key={i}
              className="block bg-white border border-brand-border rounded-2xl p-6 hover:shadow-sm transition"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className={`rounded-full text-xs font-semibold px-3 py-1 ${badgeStyles[post.type]}`}>
                  {post.type.charAt(0).toUpperCase() + post.type.slice(1)}
                </span>
                {post.premium && (
                  <span className="rounded-full text-xs font-semibold px-3 py-1 bg-brand-yellow text-brand-yellow-dark">
                    Premium
                  </span>
                )}
                <span className="text-sm text-brand-muted">{post.date}</span>
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
                <span>{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
