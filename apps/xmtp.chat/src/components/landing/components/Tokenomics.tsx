
const Tokenomics = () => {
  return (
    <section id="tokenomics" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            🪙 Tokenomics & XP System
          </h2>
          <p className="text-xl text-gray-300">
            Earn rewards for successful trading and community participation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* XP System */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-yellow-400 mb-6">Social Mining</h3>
            
            <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-6">
              <h4 className="text-xl font-semibold mb-4 text-yellow-300">Earn Vault XP</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Creating vaults</span>
                  <span className="text-yellow-400 font-bold">+100 XP</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Winning trades (per 1% profit)</span>
                  <span className="text-yellow-400 font-bold">+50 XP</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Community participation</span>
                  <span className="text-yellow-400 font-bold">+25 XP</span>
                </div>
              </div>
            </div>

            <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6">
              <h4 className="text-xl font-semibold mb-4 text-purple-300">Rewards</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🏆</span>
                  <span>NFT Badges (e.g., "Top Degen")</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">⛽</span>
                  <span>Gas subsidies for high-XP users</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎁</span>
                  <span>Exclusive vault access</span>
                </div>
              </div>
            </div>
          </div>

          {/* Monetization */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-green-400 mb-6">Growth Strategy</h3>
            
            <div className="space-y-6">
              <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
                <h4 className="text-xl font-semibold mb-3 text-green-300">Phase 1 (MVP)</h4>
                <p className="text-gray-300">Free to use (testnet-only) to build community and gather feedback.</p>
              </div>

              <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
                <h4 className="text-xl font-semibold mb-3 text-blue-300">Phase 2 (Launch)</h4>
                <div className="space-y-2 text-gray-300">
                  <p>• Premium Vaults: 1% fee on profits</p>
                  <p>• $PUMP governance token launch</p>
                  <p>• NFT-based rewards and competitions</p>
                </div>
              </div>

              <div className="bg-pink-900/20 border border-pink-500/30 rounded-xl p-6">
                <h4 className="text-xl font-semibold mb-3 text-pink-300">Growth Loop</h4>
                <div className="space-y-2 text-gray-300">
                  <p>1. Users share vault links → invite friends</p>
                  <p>2. Top vaults rank on leaderboard → organic growth</p>
                  <p>3. XP rewards → sticky engagement</p>
                  <p>4. Crypto competitions drive retention</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
