'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import styles from './page.module.css'

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    checkUser()
  }, [])

  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession()
    setIsLoggedIn(!!session)
    setLoading(false)
  }

  const handleNavigation = () => {
    if (isLoggedIn) {
      router.push('/dashboard')
    } else {
      router.push('/login')
    }
  }

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>加载中...</div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>
          Next.js + Supabase
        </h1>
        <p className={styles.subtitle}>
          用户认证系统示例
        </p>
        <p className={styles.description}>
          这是一个使用 Next.js 14 和 Supabase 构建的用户登录系统。
          <br />
          支持用户注册、登录和受保护的路由访问。
        </p>
        <button onClick={handleNavigation} className={styles.button}>
          {isLoggedIn ? '进入控制台' : '开始使用'}
        </button>

        <div className={styles.features}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🔐</div>
            <h3>安全认证</h3>
            <p>基于 Supabase 的安全用户认证系统</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>⚡</div>
            <h3>快速开发</h3>
            <p>Next.js 14 App Router 现代化架构</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>🎨</div>
            <h3>美观界面</h3>
            <p>简洁现代的用户界面设计</p>
          </div>
        </div>
      </div>
    </div>
  )
}






