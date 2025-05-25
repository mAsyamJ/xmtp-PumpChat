import "@mantine/core/styles.css";
import "./globals.css";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import pkg from "@xmtp/browser-sdk/package.json";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { createConfig, http, WagmiProvider } from "wagmi";
import {
  arbitrum,
  arbitrumSepolia,
  base,
  baseSepolia,
  linea,
  lineaSepolia,
  mainnet,
  optimism,
  optimismSepolia,
  polygon,
  polygonAmoy,
  sepolia,
  worldchain,
  worldchainSepolia,
  zksync,
  zksyncSepoliaTestnet,
} from "wagmi/chains";
import {
  coinbaseWallet,
  injected,
  metaMask,
  walletConnect,
} from "wagmi/connectors";
import { App } from "@/components/App/App";
import { XMTPProvider } from "@/contexts/XMTPContext";

const queryClient = new QueryClient();

export const config = createConfig({
  connectors: [
    injected(),
    coinbaseWallet({ appName: "xmtp.chat" }),
    metaMask(),
    walletConnect({ projectId: import.meta.env.VITE_PROJECT_ID }),
  ],
  chains: [
    arbitrum,
    arbitrumSepolia,
    base,
    baseSepolia,
    linea,
    lineaSepolia,
    mainnet,
    optimism,
    optimismSepolia,
    polygon,
    polygonAmoy,
    sepolia,
    worldchain,
    worldchainSepolia,
    zksync,
    zksyncSepoliaTestnet,
  ],
  transports: {
    [arbitrum.id]: http(),
    [arbitrumSepolia.id]: http(),
    [base.id]: http(),
    [baseSepolia.id]: http(),
    [linea.id]: http(),
    [lineaSepolia.id]: http(),
    [mainnet.id]: http(),
    [optimism.id]: http(),
    [optimismSepolia.id]: http(),
    [polygon.id]: http(),
    [polygonAmoy.id]: http(),
    [sepolia.id]: http(),
    [worldchain.id]: http(),
    [worldchainSepolia.id]: http(),
    [zksync.id]: http(),
    [zksyncSepoliaTestnet.id]: http(),
  },
});

// ...existing imports and code...

createRoot(document.getElementById("root") as HTMLElement).render(
  <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <MantineProvider
        defaultColorScheme="light"
        theme={{
          primaryColor: "brand",
          colors: {
            brand: [
              "#e3f2fd", // 0
              "#bbdefb", // 1
              "#90caf9", // 2
              "#64b5f6", // 3
              "#42a5f5", // 4
              "#2196f3", // 5
              "#1e88e5", // 6
              "#1976d2", // 7
              "#1565c0", // 8
              "#0d47a1", // 9
            ],
          },
          fontFamily: "Inter, sans-serif",
          defaultRadius: "md",
        }}
        children={
          <XMTPProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </XMTPProvider>
        }
      />
    </QueryClientProvider>
  </WagmiProvider>,
);

console.log("[xmtp.chat] XMTP Browser SDK version:", pkg.version);
