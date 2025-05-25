
const Roadmap = () => {
  const roadmapItems = [
    {
      phase: "Phase 1",
      title: "MVP Launch",
      status: "current",
      items: [
        "XMTP chat integration",
        "Basic vault creation",
        "Simple voting mechanism",
        "Testnet deployment"
      ]
    },
    {
      phase: "Phase 2", 
      title: "Advanced Features",
      status: "upcoming",
      items: [
        "AI trading signals",
        "DEX aggregator integration",
        "Mini-app dashboard",
        "XP reward system"
      ]
    },
    {
      phase: "Phase 3",
      title: "Scale & Govern",
      status: "future",
      items: [
        "$PUMP token launch",
        "DAO governance",
        "Cross-chain expansion",
        "Enterprise features"
      ]
    },
    {
      phase: "Phase 4",
      title: "Ecosystem",
      status: "future", 
      items: [
        "Third-party integrations",
        "Mobile app",
        "Advanced analytics",
        "Institutional tools"
      ]
    }
  ];

  return (
    <section id="roadmap" className="py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            🗺️ Roadmap
          </h2>
          <p className="text-xl text-gray-300">
            Our journey to revolutionize social trading
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {roadmapItems.map((item, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-xl border transition-all duration-300 hover:scale-105 ${
                item.status === 'current' 
                  ? 'bg-purple-900/30 border-purple-500/50 shadow-lg shadow-purple-500/20' 
                  : item.status === 'upcoming'
                  ? 'bg-cyan-900/20 border-cyan-500/30'
                  : 'bg-gray-800/30 border-gray-600/30'
              }`}
            >
              {item.status === 'current' && (
                <div className="absolute -top-3 -right-3 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Current
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{item.phase}</h3>
                <h4 className="text-xl text-purple-300">{item.title}</h4>
              </div>
              
              <ul className="space-y-3">
                {item.items.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300">
                    <div className={`w-2 h-2 rounded-full ${
                      item.status === 'current' ? 'bg-purple-400' :
                      item.status === 'upcoming' ? 'bg-cyan-400' : 'bg-gray-500'
                    }`}></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mini-App Flows */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-purple-300">📱 Mini-App Flows</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 border border-purple-500/30 rounded-xl p-6">
              <h4 className="text-xl font-semibold mb-4 text-purple-300">Vault Creation Flow</h4>
              <div className="space-y-3 text-gray-300">
                <p>1. User types <code className="bg-gray-700 px-2 py-1 rounded">/vault create</code></p>
                <p>2. Mini-app opens with vault configuration</p>
                <p>3. Set trading parameters and deposit limits</p>
                <p>4. Deploy contract and invite members</p>
              </div>
            </div>
            
            <div className="bg-gray-800/50 border border-cyan-500/30 rounded-xl p-6">
              <h4 className="text-xl font-semibold mb-4 text-cyan-300">Trading Flow</h4>
              <div className="space-y-3 text-gray-300">
                <p>1. AI suggests trading opportunity</p>
                <p>2. Members vote with emoji reactions</p>
                <p>3. Smart contract executes approved trades</p>
                <p>4. Profits distributed to vault members</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
