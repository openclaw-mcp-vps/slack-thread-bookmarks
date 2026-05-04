export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Browser Extension
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Never Lose a Slack Thread Again
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Bookmark, tag, and search Slack threads across all your workspaces. AI summaries surface what matters — instantly.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get ThreadMark — $12/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Works with Chrome & Firefox · Cancel anytime</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-3">🔖</div>
            <h3 className="text-white font-semibold mb-1">One-Click Bookmarks</h3>
            <p className="text-sm text-[#8b949e]">Save any Slack thread instantly from the browser extension popup without leaving Slack.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-3">🤖</div>
            <h3 className="text-white font-semibold mb-1">AI Summaries</h3>
            <p className="text-sm text-[#8b949e]">Get a concise AI-generated summary of every thread so you remember context at a glance.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-3">🔍</div>
            <h3 className="text-white font-semibold mb-1">Cross-Workspace Search</h3>
            <p className="text-sm text-[#8b949e]">Search all saved threads across every workspace from one unified dashboard.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$12</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited bookmarks</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> AI thread summaries</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Tags &amp; full-text search</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited workspaces</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Chrome &amp; Firefox support</li>
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Start Now
          </a>
          <p className="mt-3 text-xs text-[#6e7681]">Secure checkout via Lemon Squeezy</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Which browsers are supported?</h3>
            <p className="text-sm text-[#8b949e]">ThreadMark works with Chrome (and Chromium-based browsers like Edge, Brave) and Firefox.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Does it work with multiple Slack workspaces?</h3>
            <p className="text-sm text-[#8b949e]">Yes — ThreadMark is built for consultants and agency workers juggling many client workspaces. All threads sync to one dashboard.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Can I cancel anytime?</h3>
            <p className="text-sm text-[#8b949e]">Absolutely. Cancel your subscription at any time from your account settings — no questions asked.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} ThreadMark. All rights reserved.
      </footer>
    </main>
  );
}
