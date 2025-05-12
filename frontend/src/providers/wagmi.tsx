"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { cookieToInitialState, WagmiProvider, type Config } from "wagmi";
import { wagmiConfig } from "@/lib/wagmi";

// Create query client for React Query
const queryClient = new QueryClient();

// WagmiProvider component
interface CustomWagmiProviderProps {
  children: React.ReactNode;
  cookies: string | null;
}

export const CustomWagmiProvider = ({
  children,
  cookies,
}: CustomWagmiProviderProps) => {
  const initialState = cookieToInitialState(wagmiConfig as Config, cookies);

  return (
    <WagmiProvider config={wagmiConfig as Config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
};
