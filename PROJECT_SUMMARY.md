# 🚀 Next.js + Supabase + Web3 钱包认证系统

## 📝 项目概述

这是一个现代化的全栈认证系统，支持**双登录模式**：
- 📧 **传统登录**：邮箱密码 + 社交登录（Facebook、Google、Apple）
- 👛 **Web3 钱包登录**：通过 RainbowKit 连接 MetaMask 等钱包

---

## 🌐 在线访问

### 生产环境地址

| 类型 | URL |
|------|-----|
| 主域名 | [https://demo1-dddd-1ac6bf38.vercel.app](https://demo1-dddd-1ac6bf38.vercel.app) |
| 备用域名 1 | [https://demo1-fawn-six.vercel.app](https://demo1-fawn-six.vercel.app) |
| 备用域名 2 | [https://demo1-xk666-lab-dddd-1ac6bf38.vercel.app](https://demo1-xk666-lab-dddd-1ac6bf38.vercel.app) |

### 代码仓库

- **GitHub**: [https://github.com/xk666-lab/nextjs-supabase-auth](https://github.com/xk666-lab/nextjs-supabase-auth)
- **Vercel 控制台**: [https://vercel.com/dddd-1ac6bf38/demo1](https://vercel.com/dddd-1ac6bf38/demo1)

---

## ✨ 核心功能

### 1. 双登录模式

用户可以自由选择登录方式：

#### 📧 传统登录
- ✅ 邮箱 + 密码注册/登录
- ✅ Facebook 社交登录
- ✅ Google 社交登录
- ✅ Apple 社交登录
- ✅ 邮箱验证
- ✅ 密码强度验证

#### 👛 Web3 钱包登录
- ✅ MetaMask 钱包
- ✅ WalletConnect
- ✅ Coinbase Wallet
- ✅ Rainbow Wallet
- ✅ Ledger
- ✅ Brave Wallet
- ✅ 支持多链（Ethereum、Polygon、Optimism、Arbitrum、Base）

### 2. 用户界面

- ✅ 现代化的登录选择界面
- ✅ 响应式设计（支持移动端）
- ✅ 流畅的动画效果
- ✅ 美观的 UI 设计
- ✅ 直观的用户体验

### 3. Dashboard 功能

- ✅ 显示登录方式（传统 or 钱包）
- ✅ 显示用户信息
- ✅ 显示钱包地址（钱包登录时）
- ✅ 统一的退出登录
- ✅ 受保护的路由

---

## 🛠️ 技术栈

### 前端框架
- **Next.js 14.0.4** - React 框架
- **React 18.2.0** - UI 库
- **TypeScript 5.3.3** - 类型安全

### 认证系统
- **Supabase Auth** - 传统认证
  - `@supabase/supabase-js: ^2.39.0`
  - `@supabase/auth-helpers-nextjs: ^0.8.7`
- **RainbowKit 2.x** - Web3 钱包连接
  - `@rainbow-me/rainbowkit: latest`
  - `wagmi: latest`
  - `viem: 2.x`

### 状态管理
- **@tanstack/react-query** - 服务器状态管理

### 样式
- **CSS Modules** - 组件级样式
- **原生 CSS** - 全局样式

### 部署
- **Vercel** - 生产部署
- **GitHub** - 代码托管

---

## 📂 项目结构

```
demo1/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # 根布局（集成 Providers）
│   ├── page.tsx                 # 首页
│   ├── providers.tsx            # Web3 Providers（新增）
│   ├── login/                   # 登录页面
│   │   ├── page.tsx            # 双登录模式界面
│   │   └── login.module.css    # 登录样式
│   └── dashboard/               # 用户控制台
│       ├── page.tsx            # Dashboard 页面
│       └── dashboard.module.css
│
├── lib/                         # 工具库
│   ├── supabase.ts             # Supabase 客户端
│   └── rainbowkit.ts           # RainbowKit 配置（新增）
│
├── public/                      # 静态资源
│   └── images/                 # 社交登录图标
│       ├── facebook-logo.svg
│       ├── google-logo.svg
│       └── apple-logo.svg
│
├── package.json                 # 依赖配置
├── tsconfig.json               # TypeScript 配置
├── next.config.js              # Next.js 配置
├── vercel.json                 # Vercel 配置
└── README.md                   # 项目说明
```

---

## 🚀 快速开始

### 1. 克隆项目

```bash
git clone https://github.com/xk666-lab/nextjs-supabase-auth.git
cd nextjs-supabase-auth
```

### 2. 安装依赖

```bash
npm install
```

### 3. 配置环境变量

创建 `.env.local` 文件：

```env
# Supabase 配置
NEXT_PUBLIC_SUPABASE_URL=https://wrwtvcbjpnwmsajkxnjs.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=你的_SUPABASE_密钥

# WalletConnect 配置（可选）
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=你的_PROJECT_ID
```

### 4. 运行开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000)

### 5. 构建生产版本

```bash
npm run build
npm start
```

---

## 🔧 配置指南

### Supabase 配置

1. **创建 Supabase 项目**
   - 访问 [https://supabase.com](https://supabase.com)
   - 创建新项目
   - 获取项目 URL 和 anon key

2. **配置认证提供商**
   - 在 Supabase 控制台启用 Email 认证
   - 配置社交登录（Facebook、Google、Apple）
   - 详见 [SOCIAL_LOGIN_SETUP.md](SOCIAL_LOGIN_SETUP.md)

3. **配置重定向 URL**
   ```
   https://demo1-dddd-1ac6bf38.vercel.app/**
   https://demo1-dddd-1ac6bf38.vercel.app/dashboard
   ```

### WalletConnect 配置

1. **获取 Project ID**
   - 访问 [https://cloud.walletconnect.com](https://cloud.walletconnect.com)
   - 创建新项目
   - 复制 Project ID

2. **更新配置文件**
   
   编辑 `lib/rainbowkit.ts`:
   ```typescript
   export const config = getDefaultConfig({
     appName: 'Next.js Supabase Auth',
     projectId: '你的_WALLETCONNECT_PROJECT_ID', // 更新这里
     chains: [mainnet, polygon, optimism, arbitrum, base],
     ssr: true,
   })
   ```

---

## 💡 使用指南

### 用户登录流程

#### 方式一：传统登录

1. 访问登录页面
2. 点击 **📧 传统登录**
3. 选择登录方式：
   - 使用邮箱密码
   - 使用社交账号（Facebook/Google/Apple）
4. 登录成功后跳转到 Dashboard

#### 方式二：Web3 钱包登录

1. 访问登录页面
2. 点击 **👛 Web3 钱包登录**
3. 点击 "Connect Wallet" 按钮
4. 在弹出窗口中选择钱包
5. 批准连接请求
6. 自动跳转到 Dashboard

### Dashboard 功能

- **查看用户信息**
  - 传统登录：显示邮箱、用户 ID、创建时间
  - 钱包登录：显示钱包地址

- **退出登录**
  - 点击 "退出登录" 按钮
  - 自动清除会话并断开钱包
  - 返回登录页面

---

## 📊 部署信息

### 当前部署

| 项目 | 信息 |
|------|------|
| **部署平台** | Vercel |
| **部署状态** | ✅ Ready |
| **部署 ID** | dpl_94F5wnfe1c4hyKsrMz3gTUK4u1nF |
| **构建时间** | ~30 秒 |
| **部署区域** | hkg1 (香港) |
| **最后部署** | 2025-10-27 17:29:23 |

### 环境变量（Vercel）

已配置的环境变量：
- ✅ `NEXT_PUBLIC_SUPABASE_URL`
- ✅ `NEXT_PUBLIC_SUPABASE_ANON_KEY`

---

## 📈 项目统计

### 代码统计

- **总文件数**: 22+
- **代码行数**: 9,000+
- **组件数量**: 3 个主要页面
- **依赖包数量**: 462 个

### Git 提交历史

```bash
# 最新提交
commit 0b5f2a1
feat: add Web3 wallet login - integrate RainbowKit, support dual login modes

# 初始提交
commit d0000bb
Initial commit: Next.js + Supabase auth with social login, deployed to Vercel
```

---

## 🎨 UI/UX 特性

### 设计亮点

1. **登录方式选择**
   - 两个大卡片式按钮
   - 清晰的图标和描述
   - 悬停动画效果

2. **传统登录页面**
   - 社交登录按钮（基于 Figma 设计）
   - 表单验证
   - 错误/成功提示

3. **钱包登录页面**
   - RainbowKit 原生组件
   - 支持多种钱包
   - 连接状态提示

4. **响应式设计**
   - 桌面端：双列布局
   - 移动端：单列布局
   - 流畅的动画过渡

---

## 🔒 安全特性

### 已实现

- ✅ 环境变量保护敏感信息
- ✅ HTTPS 加密传输
- ✅ Supabase RLS（行级安全）
- ✅ 客户端路由保护
- ✅ 表单输入验证
- ✅ 密码强度要求（最小 6 字符）

### 建议改进

- ⚠️ 增加密码强度到 12+ 字符
- ⚠️ 添加 CSRF 保护
- ⚠️ 实施速率限制
- ⚠️ 添加内容安全策略（CSP）
- ⚠️ 启用双因素认证（2FA）

---

## 🧪 测试

### 手动测试清单

- [x] 传统登录注册流程
- [x] 传统登录登录流程
- [x] 社交登录按钮
- [x] 钱包连接流程
- [x] Dashboard 页面访问
- [x] 退出登录功能
- [x] 响应式布局
- [x] 生产环境部署

### 构建测试

```bash
npm run build
# ✅ 构建成功
# ⚠️ 有一些可选依赖的警告（不影响功能）
```

---

## 📚 相关文档

### 项目文档
- [README.md](README.md) - 项目基本说明
- [SOCIAL_LOGIN_SETUP.md](SOCIAL_LOGIN_SETUP.md) - 社交登录配置
- [DEPLOY_NOW.md](DEPLOY_NOW.md) - 部署指南
- [VERCEL_DEPLOYMENT.md](VERCEL_DEPLOYMENT.md) - Vercel 部署详细说明

### 外部文档
- [Next.js 文档](https://nextjs.org/docs)
- [Supabase 文档](https://supabase.com/docs)
- [RainbowKit 文档](https://rainbowkit.com/zh-CN/docs/introduction)
- [Wagmi 文档](https://wagmi.sh)
- [Viem 文档](https://viem.sh)

---

## 🤝 贡献

欢迎贡献！请遵循以下步骤：

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

---

## 📝 更新日志

### v0.2.0 (2025-10-27)
- ✨ 新增 Web3 钱包登录功能
- ✨ 集成 RainbowKit
- ✨ 双登录模式选择界面
- 🎨 改进 UI/UX 设计
- 📝 更新文档

### v0.1.0 (2025-10-27)
- 🎉 初始版本
- ✨ Supabase 邮箱认证
- ✨ 社交登录（Facebook、Google、Apple）
- 🚀 部署到 Vercel

---

## 📞 联系方式

- **GitHub**: [xk666-lab](https://github.com/xk666-lab)
- **项目仓库**: [nextjs-supabase-auth](https://github.com/xk666-lab/nextjs-supabase-auth)

---

## 📄 许可证

MIT License

---

## 🙏 致谢

- [Next.js](https://nextjs.org) - React 框架
- [Supabase](https://supabase.com) - 后端服务
- [RainbowKit](https://rainbowkit.com) - Web3 钱包连接
- [Vercel](https://vercel.com) - 部署平台
- [Figma](https://figma.com) - UI 设计资源

---

**Made with ❤️ using Next.js, Supabase, and RainbowKit**

