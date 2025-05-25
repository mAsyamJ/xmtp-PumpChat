
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 rounded-full bg-gradient-to-br from-emerald-400/20 to-cyan-600/20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 rounded-full bg-gradient-to-br from-cyan-400/20 to-emerald-600/20 blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-8 animate-fade-in">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          A Social Trading Agent Built on XMTP + Base
        </div>
        
        {/* Main heading */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 animate-fade-in delay-300">
          <span className="text-white">Pump</span>
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Chat</span>
        </h1>
        
        {/* Tagline */}
        <p className="text-xl md:text-2xl text-slate-300 mb-4 animate-fade-in delay-500">
          "Trustless group trading, powered by chat."
        </p>
        
        {/* Description */}
        <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-700">
          Pool funds, vote on trades, and auto-execute via smart contracts. All within your favorite messaging app.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in delay-1000">
          {/* Primary button with enhanced hover */}
          <div className="relative group">
            <button className="relative inline-block p-px font-semibold leading-6 text-white bg-neutral-900 shadow-2xl cursor-pointer rounded-2xl shadow-emerald-900 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-emerald-600">
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-600 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              <span className="relative z-10 block px-8 py-4 rounded-2xl bg-neutral-950">
                <div className="relative z-10 flex items-center space-x-3">
                  <span className="transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300 text-lg">Start Trading Now</span>
                  <ArrowRight className="w-5 h-5 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300" />
                </div>
              </span>
            </button>
          </div>
          
          {/* Secondary button */}
          <button className="px-8 py-4 rounded-2xl border border-slate-700 text-slate-300 hover:border-emerald-500/50 hover:text-white transition-all duration-300 text-lg font-semibold">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
