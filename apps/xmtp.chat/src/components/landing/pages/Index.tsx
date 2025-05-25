
import Hero from '@/components/Hero';
import ProblemSolution from '@/components/ProblemSolution';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import SecurityTrust from '@/components/SecurityTrust';
import WhyPumpChat from '@/components/WhyPumpChat';
import Tokenomics from '@/components/Tokenomics';
import Roadmap from '@/components/Roadmap';
import CTAFooter from '@/components/CTAFooter';
import Navigation from '@/components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden page-transition">
      <Navigation />
      <Hero />
      <ProblemSolution />
      <Features />
      <HowItWorks />
      <SecurityTrust />
      <WhyPumpChat />
      <Tokenomics />
      <Roadmap />
      <CTAFooter />
    </div>
  );
};

export default Index;
