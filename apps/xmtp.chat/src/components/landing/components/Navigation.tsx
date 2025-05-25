
import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span className="text-white">Pump</span>
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Chat</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-300 hover:text-emerald-400 transition-colors font-medium">Features</a>
            <a href="#how-it-works" className="text-slate-300 hover:text-emerald-400 transition-colors font-medium">How It Works</a>
            <a href="#tokenomics" className="text-slate-300 hover:text-emerald-400 transition-colors font-medium">Tokenomics</a>
            <a href="#roadmap" className="text-slate-300 hover:text-emerald-400 transition-colors font-medium">Roadmap</a>
          </div>
          
          <div className="relative group">
            <button className="relative inline-block p-px font-semibold leading-6 text-white bg-neutral-900 shadow-lg cursor-pointer rounded-xl shadow-emerald-900/50 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95">
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-600 p-[1px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              <span className="relative z-10 block px-6 py-2 rounded-xl bg-neutral-950">
                <span className="transition-all duration-500 group-hover:text-emerald-300">Get Started</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
