'use client'

import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { mainnet, polygon, optimism, arbitrum, base } from 'wagmi/chains'

export const config = getDefaultConfig({
  appName: 'Next.js Supabase Auth',
  projectId: 'YOUR_WALLETCONNECT_PROJECT_ID', // 从 https://cloud.walletconnect.com 获取
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true, // 如果你的 dApp 使用服务器端渲染 (SSR)
})

