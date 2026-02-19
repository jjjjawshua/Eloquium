const freePlanFeatures = [
  "Unlimited blog posts",
  "Unlimited vlogs",
  "Threaded discussions",
  "Set your own subscription price",
  "Keep 90% of subscriber revenue",
  "Tips from readers",
  "Basic analytics",
  "Community support",
];

const plusFeatures = [
  "Everything in Free",
  "Advanced analytics & read-time heatmaps",
  "Custom domain",
  "Custom branding",
  "Priority support (< 24hr response)",
  "Collaboration tools",
  "API access",
  "Early access to new features",
];

export default function PricingPage(): React.ReactNode {
  return (
    <main className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-serif font-normal mb-3">How Eloquium works</h1>
          <p className="text-brand-muted text-lg max-w-lg mx-auto">
            Free to create. Free to read. Creators set their own price and keep 90% of everything.
          </p>
        </div>

        {/* For Creators */}
        <div className="mb-16">
          <h2 className="text-2xl font-serif font-normal mb-2">For Creators</h2>
          <p className="text-brand-muted mb-8">
            The platform is free. Set your own subscription price. Keep 90% of everything you earn.
          </p>

          {/* Two Cards: Free vs Eloquium Plus */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Free Card */}
            <div className="rounded-2xl p-6 bg-white border border-brand-border">
              <div className="mb-6">
                <p className="text-xs font-semibold text-brand-muted uppercase tracking-wider mb-2">Free</p>
                <p className="text-4xl font-bold mb-1">$0</p>
                <p className="text-brand-muted text-sm">Everything you need to create</p>
              </div>
              <button className="w-full py-3 rounded-full text-sm font-semibold transition mb-6 border border-brand-border text-brand-dark hover:border-brand-accent/30">
                Get Started
              </button>
              <ul className="space-y-3">
                {freePlanFeatures.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm">
                    <svg className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Eloquium Plus Card */}
            <div className="relative rounded-2xl p-6 bg-[rgba(45,106,79,0.03)] border-2 border-brand-accent">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Plus
              </span>
              <div className="mb-6">
                <p className="text-xs font-semibold text-brand-muted uppercase tracking-wider mb-2">Eloquium Plus</p>
                <p className="text-4xl font-bold mb-1">
                  $5<span className="text-lg font-normal text-brand-muted">/mo</span>
                </p>
                <p className="text-brand-muted text-sm">Advanced tools for serious creators</p>
              </div>
              <button className="w-full py-3 rounded-full text-sm font-semibold transition mb-6 bg-brand-accent text-white hover:bg-brand-accent-light">
                Upgrade to Plus
              </button>
              <ul className="space-y-3">
                {plusFeatures.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm">
                    <svg className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Revenue Explainer */}
          <div className="bg-brand-light rounded-2xl p-6 text-center">
            <p className="text-sm text-brand-muted">
              You set the price. Readers subscribe. You keep <strong className="text-brand-dark">90%</strong>. Eloquium takes <strong className="text-brand-dark">10%</strong> to keep the platform running. That&rsquo;s it.
            </p>
          </div>
        </div>

        {/* For Readers */}
        <div className="bg-brand-yellow rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-serif font-normal mb-3">For Readers</h3>
          <p className="text-brand-muted max-w-lg mx-auto mb-4">
            Browsing and reading free content is always free. When you find a creator you love,
            subscribe at their price to unlock all their premium content.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-brand-muted mb-4">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-brand-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Free to browse
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-brand-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Subscribe to creators you love
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-brand-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Tip from $0.50
            </span>
          </div>
          <p className="text-sm text-brand-muted">
            No ads. No tracking. Just great writing, video, and conversation.
          </p>
        </div>
      </div>
    </main>
  );
}
