
import { Shield, Lock, CheckCircle, Zap } from 'lucide-react';

const SecurityTrust = () => {
  const features = [
    {
      icon: Shield,
      title: "Battle-Tested Security",
      description: "Multi-signature smart contracts audited by top security firms. Your funds, your keys.",
      highlight: "Audited by Consensys Diligence"
    },
    {
      icon: Lock,
      title: "Non-Custodial Always",
      description: "We never touch your funds. Everything happens on-chain with full transparency.",
      highlight: "100% Trustless"
    },
    {
      icon: CheckCircle,
      title: "Proven Track Record",
      description: "Zero hacks, zero downtime. Built by ex-Coinbase engineers with years of DeFi experience.",
      highlight: "99.9% Uptime"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Sub-second trade execution on Base L2. No MEV, no frontrunning, no bullshit.",
      highlight: "< 1s Execution"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Built for <span className="text-emerald-400">Degens</span>, Secured for <span className="text-cyan-400">Institutions</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We know you're here for the alpha, but we're not fucking around with security.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="group bg-slate-900/80 border border-slate-700/50 rounded-2xl p-8 hover:border-emerald-500/30 transition-all duration-500 hover:bg-slate-800/80"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                      <span className="text-emerald-400 text-sm font-medium">{feature.highlight}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SecurityTrust;
