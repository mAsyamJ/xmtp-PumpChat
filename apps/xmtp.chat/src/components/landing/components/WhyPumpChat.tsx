
import { TrendingUp, Users, Brain, Rocket } from 'lucide-react';

const WhyPumpChat = () => {
  const advantages = [
    {
      icon: TrendingUp,
      title: "First Mover Advantage",
      description: "Be early to the first chat-native trading platform. Early adopters get exclusive NFT badges and reduced fees.",
      metrics: "Join 10K+ early adopters"
    },
    {
      icon: Users,
      title: "Network Effects",
      description: "The more degens join your vault, the more alpha you get. Social trading amplifies everyone's gains.",
      metrics: "Average vault size: 25 members"
    },
    {
      icon: Brain,
      title: "AI-Powered Alpha",
      description: "Our AI scans 1000+ tokens per second to find trending opportunities before they moon.",
      metrics: "87% win rate on AI signals"
    },
    {
      icon: Rocket,
      title: "Built for Speed",
      description: "From chat message to executed trade in under 3 seconds. Don't miss the next 100x.",
      metrics: "< 3s execution time"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why <span className="text-emerald-400">PumpChat</span> Will Dominate
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We're not just another trading app. We're building the future of social finance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div 
                key={index}
                className="group text-center p-8 rounded-2xl bg-slate-900/50 border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-500 hover:bg-slate-800/50 hover:-translate-y-2"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-emerald-300 transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-slate-400 mb-4 leading-relaxed">
                  {advantage.description}
                </p>
                <div className="text-emerald-400 font-medium text-sm">
                  {advantage.metrics}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="relative group inline-block">
            <button className="relative inline-block p-px font-semibold leading-6 text-white bg-neutral-900 shadow-2xl cursor-pointer rounded-2xl shadow-emerald-900 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-emerald-600">
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-600 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              <span className="relative z-10 block px-8 py-4 rounded-2xl bg-neutral-950">
                <div className="relative z-10 flex items-center space-x-3">
                  <span className="transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300 text-lg">Join the Alpha</span>
                  <Rocket className="w-5 h-5 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300" />
                </div>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPumpChat;
