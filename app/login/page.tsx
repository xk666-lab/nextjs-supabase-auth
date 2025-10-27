'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import styles from './login.module.css'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)
  const router = useRouter()

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      if (isSignUp) {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
        })
        
        if (error) throw error
        
        if (data.user) {
          setMessage('注册成功！请检查您的邮箱以验证账户。')
        }
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })
        
        if (error) throw error
        
        if (data.session) {
          setMessage('登录成功！')
          router.push('/dashboard')
        }
      }
    } catch (error: any) {
      setMessage(error.message || '操作失败，请重试')
    } finally {
      setLoading(false)
    }
  }

  const handleSocialLogin = async (provider: 'facebook' | 'google' | 'apple') => {
    setLoading(true)
    setMessage('')

    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: provider as any,
        options: {
          redirectTo: `${window.location.origin}/dashboard`,
        },
      })
      
      if (error) throw error
    } catch (error: any) {
      setMessage(error.message || '登录失败，请重试')
      setLoading(false)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>
          {isSignUp ? '创建账户' : '欢迎回来'}
        </h1>
        <p className={styles.subtitle}>
          {isSignUp ? '注册以开始使用' : '选择一种方式继续'}
        </p>

        {/* 社交登录按钮 - 来自 Figma 设计 */}
        <div className={styles.socialButtons}>
          <button 
            onClick={() => handleSocialLogin('facebook')}
            className={styles.socialButton}
            data-provider="facebook"
            disabled={loading}
          >
            <div className={styles.socialIcon}>
              <Image 
                src="/images/facebook-logo.svg" 
                alt="Facebook" 
                width={24}
                height={24}
              />
            </div>
            <span>Continue with Facebook</span>
          </button>

          <button 
            onClick={() => handleSocialLogin('google')}
            className={styles.socialButton}
            data-provider="google"
            disabled={loading}
          >
            <div className={styles.socialIcon}>
              <Image 
                src="/images/google-logo.svg" 
                alt="Google" 
                width={24}
                height={24}
              />
            </div>
            <span>Continue with Google</span>
          </button>

          <button 
            onClick={() => handleSocialLogin('apple')}
            className={styles.socialButton}
            data-provider="apple"
            disabled={loading}
          >
            <div className={styles.socialIcon}>
              <Image 
                src="/images/apple-logo.svg" 
                alt="Apple" 
                width={24}
                height={24}
              />
            </div>
            <span>Continue with Apple</span>
          </button>
        </div>

        <div className={styles.divider}>
          <span>或使用邮箱登录</span>
        </div>
        
        <form onSubmit={handleAuth} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">邮箱</label>
            <input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">密码</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
              minLength={6}
            />
          </div>

          {message && (
            <div className={message.includes('成功') ? styles.success : styles.error}>
              {message}
            </div>
          )}

          <button 
            type="submit" 
            className={styles.button}
            disabled={loading}
          >
            {loading ? '处理中...' : isSignUp ? '注册' : '登录'}
          </button>
        </form>

        <div className={styles.toggle}>
          <button
            type="button"
            onClick={() => {
              setIsSignUp(!isSignUp)
              setMessage('')
            }}
            className={styles.toggleButton}
          >
            {isSignUp ? '已有账户？点击登录' : '没有账户？点击注册'}
          </button>
        </div>
      </div>
    </div>
  )
}

