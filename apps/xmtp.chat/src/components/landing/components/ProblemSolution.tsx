const ProblemSolution = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900"></div>
      <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.96/build/spline-viewer.js"></script>
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-32 w-80 h-80 rounded-full bg-gradient-to-br from-emerald-400/20 to-cyan-600/20 blur-3xl"></div>
        <div className="absolute -bottom-40 -right-32 w-80 h-80 rounded-full bg-gradient-to-br from-cyan-400/20 to-emerald-600/20 blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Challenge We're <span className="text-emerald-400">Solving</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Trading groups face coordination and trust issues that prevent them from maximizing opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Problem */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-2xl font-bold text-red-400">The Problem</h3>
            </div>
            
            <div className="space-y-6">
              <div className="bg-slate-900/50 border border-red-500/20 rounded-2xl p-6 hover:border-red-500/40 transition-all duration-300">
                <h4 className="text-xl font-semibold mb-3 text-red-300">Manual Trade Execution</h4>
                <p className="text-slate-300 leading-relaxed">Telegram/Discord groups can't execute trades without manual steps and coordination delays.</p>
              </div>
              <div className="bg-slate-900/50 border border-red-500/20 rounded-2xl p-6 hover:border-red-500/40 transition-all duration-300">
                <h4 className="text-xl font-semibold mb-3 text-red-300">Trust Issues</h4>
                <p className="text-slate-300 leading-relaxed">No way to pool funds trustlessly for meme coins or yield strategies.</p>
              </div>
              <div className="bg-slate-900/50 border border-red-500/20 rounded-2xl p-6 hover:border-red-500/40 transition-all duration-300">
                <h4 className="text-xl font-semibold mb-3 text-red-300">Missed Alpha</h4>
                <p className="text-slate-300 leading-relaxed">Missed opportunities due to delayed voting and slow payouts.</p>
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-2xl font-bold text-emerald-400">The Solution</h3>
            </div>
            
            <div className="space-y-6">
              <div className="bg-slate-900/50 border border-emerald-500/20 rounded-2xl p-6 hover:border-emerald-500/40 transition-all duration-300">
                <h4 className="text-xl font-semibold mb-3 text-emerald-300">Create Vaults</h4>
                <p className="text-slate-300 leading-relaxed">
                  <code className="bg-slate-800 px-2 py-1 rounded text-emerald-400">/vault create MemeBets</code> - Deploy smart contracts instantly.
                </p>
              </div>
              <div className="bg-slate-900/50 border border-emerald-500/20 rounded-2xl p-6 hover:border-emerald-500/40 transition-all duration-300">
                <h4 className="text-xl font-semibold mb-3 text-emerald-300">Pool Funds</h4>
                <p className="text-slate-300 leading-relaxed">Trustlessly pool ETH or Base tokens with your trading group.</p>
              </div>
              <div className="bg-slate-900/50 border border-emerald-500/20 rounded-2xl p-6 hover:border-emerald-500/40 transition-all duration-300">
                <h4 className="text-xl font-semibold mb-3 text-emerald-300">Vote & Execute</h4>
                <p className="text-slate-300 leading-relaxed">Vote with 👍/👎 reactions and auto-execute via smart contracts.</p>
              </div>
              <div className="bg-slate-900/50 border border-emerald-500/20 rounded-2xl p-6 hover:border-emerald-500/40 transition-all duration-300">
                <h4 className="text-xl font-semibold mb-3 text-emerald-300">Track Performance</h4>
                <p className="text-slate-300 leading-relaxed">Monitor profits in real-time mini-app leaderboards.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;