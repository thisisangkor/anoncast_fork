"use client";

import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { base } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";

const config = getDefaultConfig({
	appName: "My RainbowKit App",
	projectId: "YOUR_PROJECT_ID",
	chains: [base],
	ssr: true,
});

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="dark"
			disableTransitionOnChange
		>
			<WagmiProvider config={config}>
				<QueryClientProvider client={queryClient}>
					<RainbowKitProvider>{children}</RainbowKitProvider>
				</QueryClientProvider>
			</WagmiProvider>
		</ThemeProvider>
	);
}