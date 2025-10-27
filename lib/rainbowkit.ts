'use client'

import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { mainnet, polygon, optimism, arbitrum, base } from 'wagmi/chains'

export const config = getDefaultConfig({
  appName: 'Next.js Supabase Auth',
  projectId: 'c9f2c0a334d5ef938dc6e868ab18df46',
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true,
})

