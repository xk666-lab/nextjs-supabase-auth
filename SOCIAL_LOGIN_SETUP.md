# 🔐 社交登录配置指南

本页面使用 MCP 从 Figma 设计中自动提取并实现了社交登录按钮。

## 🎨 设计来源

设计来自 Figma：[Social Login Buttons (Community)](https://www.figma.com/design/lhcAp1foE1zA22rXe4ZQAF/Social-Login-Buttons--Community-)

通过 MCP 自动提取的设计规格：
- ✅ Facebook 按钮：蓝色背景 (#1877F2)
- ✅ Google 按钮：白色背景，灰色文字
- ✅ Apple 按钮：黑色背景，白色文字
- ✅ 圆角：21px
- ✅ 阴影效果
- ✅ 响应式设计

## 🚀 启用社交登录

### 1. Facebook 登录

1. 访问 [Facebook Developers](https://developers.facebook.com/)
2. 创建新应用 → 选择 "Consumer"
3. 在左侧菜单选择 **Settings** → **Basic**
4. 复制 **App ID** 和 **App Secret**
5. 在 Supabase 控制台：
   - 前往 **Authentication** → **Providers**
   - 启用 **Facebook**
   - 粘贴 App ID 和 App Secret
   - 复制 Callback URL：`https://你的项目ID.supabase.co/auth/v1/callback`
6. 回到 Facebook 开发者控制台：
   - 添加 **Facebook Login** 产品
   - 在 Valid OAuth Redirect URIs 中添加 Callback URL

### 2. Google 登录

1. 访问 [Google Cloud Console](https://console.cloud.google.com/)
2. 创建新项目或选择现有项目
3. 启用 **Google+ API**
4. 前往 **APIs & Services** → **Credentials**
5. 创建 OAuth 2.0 Client ID：
   - 应用类型：Web application
   - 授权重定向 URI：`https://你的项目ID.supabase.co/auth/v1/callback`
6. 复制 **Client ID** 和 **Client Secret**
7. 在 Supabase 控制台：
   - 前往 **Authentication** → **Providers**
   - 启用 **Google**
   - 粘贴 Client ID 和 Client Secret

### 3. Apple 登录

1. 访问 [Apple Developer](https://developer.apple.com/)
2. 前往 **Certificates, Identifiers & Profiles**
3. 创建新的 **App ID** 并启用 Sign in with Apple
4. 创建 **Service ID**：
   - 配置 Return URLs：`https://你的项目ID.supabase.co/auth/v1/callback`
5. 创建 **Private Key** 用于 Sign in with Apple
6. 在 Supabase 控制台：
   - 前往 **Authentication** → **Providers**
   - 启用 **Apple**
   - 填入 Service ID、Team ID、Key ID 和 Private Key

## 📝 Supabase 配置

在你的 Supabase 项目中：

1. 前往 **Authentication** → **URL Configuration**
2. 添加重定向 URL：
   - `http://localhost:3000/dashboard` (开发环境)
   - `https://你的域名.com/dashboard` (生产环境)
3. 在 **Settings** → **General** 中设置 Site URL

## 🔧 代码说明

### 社交登录处理函数

```typescript
const handleSocialLogin = async (provider: 'facebook' | 'google' | 'apple') => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: provider,
    options: {
      redirectTo: `${window.location.origin}/dashboard`,
    },
  })
}
```

### 按钮样式

所有按钮样式严格遵循 Figma 设计规格：
- 圆角：21px（与设计中的 20.99683952331543px 一致）
- 阴影：`0px 4px 12px rgba(0, 0, 0, 0.07)`
- 颜色完全匹配 Figma 设计

## ⚠️ 注意事项

1. **开发环境测试**：某些提供商（如 Apple）要求使用 HTTPS
2. **域名验证**：生产环境需要验证域名所有权
3. **隐私政策**：大多数提供商要求你提供隐私政策链接
4. **回调 URL**：确保在各个平台都正确配置了回调 URL

## 🎯 测试流程

1. 启动开发服务器：`npm run dev`
2. 访问 http://localhost:3000/login
3. 点击社交登录按钮
4. 完成授权后会自动重定向到 dashboard

## 📚 参考链接

- [Supabase Auth 文档](https://supabase.com/docs/guides/auth)
- [Supabase OAuth 设置](https://supabase.com/docs/guides/auth/social-login)
- [Facebook Login 文档](https://developers.facebook.com/docs/facebook-login)
- [Google Sign-In 文档](https://developers.google.com/identity/sign-in/web/sign-in)
- [Sign in with Apple 文档](https://developer.apple.com/sign-in-with-apple/)

---

✨ **使用 MCP 自动化**：这个登录页面完全通过 MCP (Model Context Protocol) 从 Figma 设计中提取并实现，包括：
- 自动获取设计规格
- 下载社交媒体图标
- 生成符合设计的 CSS 样式






