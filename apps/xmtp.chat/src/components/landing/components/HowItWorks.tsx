
const HowItWorks = () => {
  const steps = [
    {
      step: "1",
      title: "Create Vault",
      description: "Use /vault create [name] command in any XMTP chat to deploy a smart contract vault.",
      code: "/vault create MemeBets"
    },
    {
      step: "2", 
      title: "Pool Funds",
      description: "Group members deposit ETH or Base tokens directly through chat commands.",
      code: "/deposit 0.1 ETH"
    },
    {
      step: "3",
      title: "AI Signals",
      description: "AgentKit analyzes market data and suggests profitable trading opportunities.",
      code: "🤖 Signal: $DEGEN +30% momentum"
    },
    {
      step: "4",
      title: "Vote & Execute",
      description: "Members vote with reactions. Smart contracts auto-execute approved trades.",
      code: "👍 8 votes → Execute trade"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 bg-slate-800/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How It <span className="text-cyan-400">Works</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Four simple steps to start trading with your group
          </p>
        </div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1 space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-emerald-500/25">
                    {step.step}
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white">{step.title}</h3>
                </div>
                <p className="text-xl text-slate-300 leading-relaxed">
                  {step.description}
                </p>
                <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 font-mono text-emerald-400 text-lg">
                  {step.code}
                </div>
              </div>
              
              <div className="flex-1">
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 rounded-3xl p-8 backdrop-blur-sm">
                  <div className="w-full h-64 bg-slate-800/50 rounded-2xl flex items-center justify-center text-slate-400 text-lg border border-slate-700/30">
                    Step {step.step} Visualization
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
