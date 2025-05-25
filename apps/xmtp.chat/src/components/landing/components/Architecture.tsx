const Architecture = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Architecture Overview
          </h2>
          <p className="text-xl text-gray-300">
            Built on cutting-edge Web3 infrastructure
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-gray-800/50 border border-green-500/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-400">
                Tech Stack
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span>XMTP Protocol - Decentralized messaging</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span>Base Network - Fast, cheap transactions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                  <span>AgentKit - AI-powered trading signals</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span>Gnosis Safe - Secure multi-sig vaults</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 border border-purple-500/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">
                Smart Contracts
              </h3>
              <div className="space-y-3 text-gray-300">
                <p>• Vault Factory - Deploy new trading vaults</p>
                <p>• Trading Engine - Execute swaps via DEX aggregators</p>
                <p>• Governance - Handle voting and proposals</p>
                <p>• Rewards - Distribute profits and XP</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-cyan-500/30 rounded-xl p-6 font-mono text-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-cyan-400">vault-contract.sol</span>
            </div>
            <pre className="text-gray-300 overflow-x-auto">
              {`pragma solidity ^0.8.0;

contract TradingVault {
    mapping(address => uint256) public deposits;
    mapping(bytes32 => Proposal) public proposals;
    
    struct Proposal {
        address token;
        uint256 amount;
        uint256 votes;
        bool executed;
    }
    
    function deposit() external payable {
        deposits[msg.sender] += msg.value;
        emit Deposited(msg.sender, msg.value);
    }
    
    function vote(bytes32 proposalId) external {
        require(deposits[msg.sender] > 0);
        proposals[proposalId].votes++;
        
        if (shouldExecute(proposalId)) {
            executeSwap(proposalId);
        }
    }
}`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
