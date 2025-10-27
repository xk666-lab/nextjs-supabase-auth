'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import { User } from '@supabase/supabase-js'
import styles from './dashboard.module.css'

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    checkUser()
  }, [])

  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession()
    
    if (!session) {
      router.push('/login')
    } else {
      setUser(session.user)
    }
    setLoading(false)
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>加载中...</div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h1 className={styles.title}>欢迎来到控制台</h1>
          <button onClick={handleLogout} className={styles.logoutButton}>
            退出登录
          </button>
        </div>

        <div className={styles.content}>
          <div className={styles.infoSection}>
            <h2>用户信息</h2>
            <div className={styles.infoItem}>
              <span className={styles.label}>邮箱:</span>
              <span className={styles.value}>{user.email}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.label}>用户ID:</span>
              <span className={styles.value}>{user.id}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.label}>创建时间:</span>
              <span className={styles.value}>
                {new Date(user.created_at).toLocaleString('zh-CN')}
              </span>
            </div>
          </div>

          <div className={styles.successMessage}>
            ✅ 您已成功登录！这是一个受保护的页面，只有登录用户才能访问。
          </div>
        </div>
      </div>
    </div>
  )
}






