"use client";

import { useState } from "react";
import Link from "next/link";

const creators = [
  { name: "Maya Torres", initials: "MT", subs: "24.3K", color: "#2D6A4F", tagline: "Making sense of AI, one essay at a time", posts: 312, type: "blog" as const, subscriptionPrice: 5 as number | null },
  { name: "James Chen", initials: "JC", subs: "18.7K", color: "#52796F", tagline: "Climate research, explained for everyone", posts: 198, type: "vlog" as const, subscriptionPrice: null as number | null },
  { name: "Aisha Patel", initials: "AP", subs: "31.1K", color: "#74A67A", tagline: "Big questions, small essays", posts: 427, type: "blog" as const, subscriptionPrice: 8 as number | null },
  { name: "Rico Valdez", initials: "RV", subs: "12.9K", color: "#6B705C", tagline: "Where sound meets meaning", posts: 156, type: "discussion" as const, subscriptionPrice: null as number | null },
  { name: "Elena Novak", initials: "EN", subs: "42.5K", color: "#3A5A40", tagline: "Stories that need telling", posts: 89, type: "blog" as const, subscriptionPrice: 12 as number | null },
  { name: "Sam Okafor", initials: "SO", subs: "9.2K", color: "#588157", tagline: "Movement as medicine", posts: 245, type: "vlog" as const, subscriptionPrice: 3 as number | null },
];

const topics = ["Technology", "Culture", "Science", "Politics", "Health", "Business", "Art", "Philosophy"];
const tabs = ["All", "Blogs", "Vlogs", "Discussions", "New Creators"];

const badgeStyles: Record<string, string> = {
  blog: "bg-[rgba(45,106,79,0.06)] text-brand-accent",
  vlog: "bg-brand-yellow text-brand-yellow-dark",
  discussion: "bg-gray-100 text-brand-dark",
};

export default function ExplorePage(): React.ReactNode {
  const [activeTab, setActiveTab] = useState("All");
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  const filtered = creators.filter((c) => {
    if (activeTab === "All") return true;
    if (activeTab === "Blogs") return c.type === "blog";
    if (activeTab === "Vlogs") return c.type === "vlog";
    if (activeTab === "Discussions") return c.type === "discussion";
    return true;
  });

  return (
    <main className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-serif font-normal mb-2">Explore</h1>
          <p className="text-brand-muted text-lg">Discover creators and ideas worth your time.</p>
        </div>

        {/* Topic Chips */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
          {topics.map((topic) => (
            <button
              key={topic}
              onClick={() => setActiveTopic(activeTopic === topic ? null : topic)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm border transition ${
                activeTopic === topic
                  ? "bg-brand-accent text-white border-brand-accent"
                  : "bg-white text-brand-dark border-brand-border hover:border-brand-accent/30"
              }`}
            >
              {topic}
            </button>
          ))}
        </div>

        {/* Tab Bar */}
        <div className="flex gap-6 border-b border-brand-border mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-sm font-medium transition relative ${
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

        {/* Creator Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {filtered.map((creator, i) => (
            <Link
              href="/creator"
              key={i}
              className="bg-white border border-brand-border rounded-2xl p-6 flex items-start gap-4 hover:shadow-sm transition"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                style={{ backgroundColor: creator.color }}
              >
                {creator.initials}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-semibold">{creator.name}</span>
                  <span className={`rounded-full text-xs font-semibold px-3 py-0.5 ${badgeStyles[creator.type]}`}>
                    {creator.type.charAt(0).toUpperCase() + creator.type.slice(1)}
                  </span>
                </div>
                <p className="text-brand-muted text-sm mb-2">{creator.tagline}</p>
                <div className="flex items-center gap-3 text-xs text-brand-muted">
                  <span>{creator.subs} subscribers</span>
                  <span>&middot;</span>
                  <span>{creator.posts} posts</span>
                  <span>&middot;</span>
                  <span className={creator.subscriptionPrice ? "text-brand-accent font-semibold" : ""}>
                    {creator.subscriptionPrice ? `$${creator.subscriptionPrice}/mo` : "Free"}
                  </span>
                </div>
              </div>
              <button
                onClick={(e) => e.preventDefault()}
                className={`flex-shrink-0 px-4 py-1.5 text-sm font-semibold rounded-full transition ${
                  creator.subscriptionPrice
                    ? "bg-brand-accent text-white hover:bg-brand-accent-light"
                    : "border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white"
                }`}
              >
                {creator.subscriptionPrice ? `Subscribe \u2014 $${creator.subscriptionPrice}/mo` : "Follow"}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
