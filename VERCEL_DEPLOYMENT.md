# 🚀 Vercel 部署指南

这是将 Next.js + Supabase 项目部署到 Vercel 的完整指南。

---

## 📋 部署前准备

### 1. 确保项目文件完整

✅ 已完成：
- `package.json` - 项目依赖
- `next.config.js` - Next.js 配置
- `tsconfig.json` - TypeScript 配置
- `.gitignore` - Git 忽略文件
- `README.md` - 项目说明

### 2. 环境变量

需要在 Vercel 中配置以下环境变量：
```
NEXT_PUBLIC_SUPABASE_URL=https://wrwtvcbjpnwmsajkxnjs.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

## 🎯 方法 1: 通过 Vercel 网站部署（推荐）

### 步骤 1: 上传代码到 GitHub

1. **创建 GitHub 仓库**
   - 访问 https://github.com/new
   - 仓库名称：`nextjs-supabase-auth` (或你喜欢的名字)
   - 选择 **Public** 或 **Private**
   - 点击 **Create repository**

2. **初始化 Git 并推送代码**

打开命令行，在项目目录下运行：

```bash
# 初始化 Git
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: Next.js + Supabase auth app"

# 添加远程仓库（替换为你的 GitHub 用户名和仓库名）
git remote add origin https://github.com/你的用户名/nextjs-supabase-auth.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

### 步骤 2: 连接 Vercel

1. **访问 Vercel**
   - 打开 https://vercel.com
   - 点击 **Sign Up** 或 **Log In**
   - 使用 GitHub 账号登录

2. **导入项目**
   - 点击 **Add New...** → **Project**
   - 选择你刚才创建的 GitHub 仓库
   - 点击 **Import**

3. **配置项目**
   - **Framework Preset**: Next.js（应该自动检测）
   - **Root Directory**: `./` (默认)
   - **Build Command**: `npm run build`（默认）
   - **Output Directory**: `.next`（默认）

4. **添加环境变量**
   
   点击 **Environment Variables**，添加：
   
   | Name | Value |
   |------|-------|
   | `NEXT_PUBLIC_SUPABASE_URL` | `https://wrwtvcbjpnwmsajkxnjs.supabase.co` |
   | `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` (你的完整密钥) |

5. **部署**
   - 点击 **Deploy**
   - 等待 2-3 分钟，部署完成！

6. **获取域名**
   - 部署成功后，Vercel 会给你一个域名
   - 格式类似：`https://your-project-name.vercel.app`

---

## 🎯 方法 2: 使用 Vercel CLI 部署

### 步骤 1: 安装并登录

```bash
# 安装 Vercel CLI（全局）
npm install -g vercel

# 或者每次使用 npx（无需安装）
npx vercel
```

### 步骤 2: 登录

```bash
# 登录 Vercel
npx vercel login
```

浏览器会打开，完成登录授权。

### 步骤 3: 部署

在项目目录运行：

```bash
# 第一次部署（会询问配置）
npx vercel

# 按照提示回答：
# Set up and deploy? [Y/n] → 输入 Y
# Which scope? → 选择你的账号
# Link to existing project? [y/N] → 输入 N
# What's your project's name? → 输入项目名称
# In which directory is your code located? → 按回车（使用当前目录）
```

### 步骤 4: 添加环境变量

```bash
# 添加 Supabase URL
npx vercel env add NEXT_PUBLIC_SUPABASE_URL production

# 添加 Supabase Key
npx vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production
```

### 步骤 5: 生产环境部署

```bash
# 部署到生产环境
npx vercel --prod
```

---

## ⚙️ 配置 Supabase 回调 URL

部署完成后，需要在 Supabase 中添加 Vercel 域名：

1. 访问 https://app.supabase.com
2. 选择你的项目
3. 前往 **Authentication** → **URL Configuration**
4. 在 **Site URL** 中添加你的 Vercel 域名：
   ```
   https://your-project-name.vercel.app
   ```
5. 在 **Redirect URLs** 中添加：
   ```
   https://your-project-name.vercel.app/dashboard
   https://your-project-name.vercel.app/**
   ```

### 社交登录配置

如果使用了社交登录（Facebook、Google、Apple），需要在各平台添加 Vercel 域名：

**Facebook：**
- 在 Facebook Developer Console 的 Valid OAuth Redirect URIs 中添加：
  ```
  https://wrwtvcbjpnwmsajkxnjs.supabase.co/auth/v1/callback
  ```

**Google：**
- 在 Google Cloud Console 的授权重定向 URI 中添加相同 URL

**Apple：**
- 在 Apple Developer 的 Return URLs 中添加相同 URL

---

## 🔄 自动部署

配置完成后，每次推送到 GitHub 的 `main` 分支，Vercel 会自动部署！

```bash
# 修改代码后
git add .
git commit -m "更新描述"
git push origin main

# Vercel 会自动检测并部署
```

---

## ✅ 验证部署

1. 访问你的 Vercel 域名
2. 测试功能：
   - ✅ 首页加载
   - ✅ 登录页面
   - ✅ 邮箱登录
   - ✅ 社交登录（如果配置）
   - ✅ 控制台页面

---

## 🐛 常见问题

### 问题 1: 环境变量未生效

**解决方案：**
- 确保环境变量名称以 `NEXT_PUBLIC_` 开头
- 重新部署：`npx vercel --prod`

### 问题 2: Supabase 连接失败

**解决方案：**
- 检查 Supabase URL 和 Key 是否正确
- 确认在 Supabase 中添加了 Vercel 域名

### 问题 3: 社交登录不工作

**解决方案：**
- 在各社交平台添加 Supabase 回调 URL
- 确认 Redirect URLs 配置正确

### 问题 4: 构建失败

**解决方案：**
- 检查 `package.json` 中的依赖
- 查看 Vercel 构建日志
- 确保本地 `npm run build` 成功

---

## 📊 部署后监控

在 Vercel 控制台可以查看：
- 📈 **Analytics**: 访问统计
- 🚀 **Deployments**: 部署历史
- 📝 **Logs**: 运行日志
- ⚙️ **Settings**: 项目设置

---

## 🎉 完成！

你的 Next.js + Supabase 应用已成功部署到 Vercel！

**下一步：**
- 绑定自定义域名（在 Vercel Settings → Domains）
- 配置 Analytics
- 设置监控和告警
- 优化性能

---

## 🔗 有用的链接

- [Vercel 文档](https://vercel.com/docs)
- [Next.js 部署文档](https://nextjs.org/docs/deployment)
- [Supabase 文档](https://supabase.com/docs)

---

**需要帮助？** 查看完整文档或在项目中创建 issue。

Made with ❤️ using MCP

