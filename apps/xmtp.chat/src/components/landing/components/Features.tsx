
const Features = () => {
  const features = [
    {
      icon: "💰",
      title: "Vaults in Chat",
      description: "Deploy Gnosis Safe-style contracts with a simple command. Members deposit via chat (ETH, ERC-20)."
    },
    {
      icon: "🤖",
      title: "AI Trade Signals",
      description: "AgentKit scans Dune/CoinGecko for trending memecoins and yield opportunities."
    },
    {
      icon: "🔒",
      title: "Trustless Execution",
      description: "Votes trigger smart contract swaps. Profits split pro-rata to contributors."
    },
    {
      icon: "📊",
      title: "Mini-App Dashboard",
      description: "Embedded XMTP dashboard with portfolio performance, leaderboards, and trade history."
    },
    {
      icon: "⚡",
      title: "Instant Trading",
      description: "Execute trades instantly through Uniswap and 1inch integrations."
    },
    {
      icon: "🏆",
      title: "Social Mining",
      description: "Earn XP for creating vaults and winning trades. Unlock NFT badges and rewards."
    }
  ];

  return (
    <section id="features" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful <span className="text-emerald-400">Features</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Everything you need to trade trustlessly with your group, powered by cutting-edge blockchain technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-slate-900/50 border border-slate-700/50 rounded-2xl p-8 hover:border-emerald-500/30 transition-all duration-500 hover:bg-slate-800/50 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-emerald-300 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
