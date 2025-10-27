import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Supabase 用户登录 + Web3 钱包',
  description: 'Next.js + Supabase 用户认证示例，支持邮箱登录和 Web3 钱包登录',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}






