
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const CTAFooter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <footer className="py-24 px-6 bg-gradient-to-t from-slate-950 via-slate-900 to-slate-800">
      <div className="container mx-auto max-w-7xl">
        {/* CTA Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start <span className="text-emerald-400">Trading?</span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of degens already using PumpChat to trade smarter, faster, and more profitably.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-12">
            <div className="flex gap-4">
              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-slate-800 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 transition-colors text-lg"
                required
              />
              <div className="relative group">
                <button 
                  type="submit"
                  className="relative inline-block p-px font-semibold leading-6 text-white bg-neutral-900 shadow-lg cursor-pointer rounded-xl shadow-emerald-900/50 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
                >
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-600 p-[1px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                  <span className="relative z-10 block px-6 py-4 rounded-xl bg-neutral-950">
                    <span className="transition-all duration-500 group-hover:text-emerald-300 text-lg">Get Access</span>
                  </span>
                </button>
              </div>
            </div>
          </form>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Primary CTA button */}
            <div className="relative group">
              <button className="relative inline-block p-px font-semibold leading-6 text-white bg-neutral-900 shadow-2xl cursor-pointer rounded-2xl shadow-emerald-900 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-emerald-600">
                <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-600 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                <span className="relative z-10 block px-8 py-4 rounded-2xl bg-neutral-950">
                  <div className="relative z-10 flex items-center space-x-3">
                    <span className="transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300 text-lg">Launch App</span>
                    <ArrowRight className="w-5 h-5 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300" />
                  </div>
                </span>
              </button>
            </div>
            
            <button className="px-8 py-4 rounded-2xl border border-slate-600 text-slate-300 hover:border-emerald-500/50 hover:text-white transition-all duration-300 text-lg font-semibold">
              Join Discord
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="border-t border-slate-700 pt-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                <span className="text-white">Pump</span>
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Chat</span>
              </h3>
              <p className="text-slate-400 leading-relaxed">
                The first chat-native trading platform for Web3 communities.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-white text-lg">Product</h4>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#features" className="hover:text-emerald-400 transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-emerald-400 transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-white text-lg">Community</h4>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Telegram</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">GitHub</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-6 text-white text-lg">Company</h4>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-slate-400 border-t border-slate-800 pt-8">
            <p>&copy; 2024 PumpChat. All rights reserved.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CTAFooter;
