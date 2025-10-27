# 🚀 一键部署到 Vercel

## 方式 1: 通过 Vercel 网站（最简单）

### 📝 准备工作

你的项目已完全准备好部署！只需 3 个步骤：

---

## 🎯 快速部署步骤

### 第 1 步：上传到 GitHub

在项目目录打开命令行，运行：

```bash
# 如果还没有 Git 仓库，初始化
git init

# 添加所有文件
git add .

# 提交
git commit -m "Ready to deploy: Next.js + Supabase auth app"

# 在 GitHub 创建新仓库后，添加远程地址并推送
git remote add origin https://github.com/你的用户名/你的仓库名.git
git branch -M main
git push -u origin main
```

### 第 2 步：在 Vercel 导入

1. **访问**: https://vercel.com/new
2. **登录**: 使用你的 GitHub 账号
3. **导入仓库**: 选择你刚才推送的仓库
4. **配置项目**:
   - Framework Preset: Next.js ✅ (自动检测)
   - Root Directory: ./ ✅
   - Build Command: npm run build ✅

5. **添加环境变量** (重要！):

   点击 "Environment Variables"，添加以下两个变量：

   ```
   Name: NEXT_PUBLIC_SUPABASE_URL
   Value: https://wrwtvcbjpnwmsajkxnjs.supabase.co
   
   Name: NEXT_PUBLIC_SUPABASE_ANON_KEY  
   Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indyd3R2Y2JqcG53bXNhamt4bmpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE0Njc4NjgsImV4cCI6MjA3NzA0Mzg2OH0.qwF9WFvgFXaUf3HE4T-ghQA4I2Gm9cZMqRniH3IOuRU
   ```

6. **点击 Deploy** 🚀

等待 2-3 分钟，完成！

### 第 3 步：配置 Supabase

部署成功后，Vercel 会给你一个域名（例如：`https://your-app.vercel.app`）

在 Supabase 中添加这个域名：

1. 访问 https://app.supabase.com/project/wrwtvcbjpnwmsajkxnjs
2. 前往 **Authentication** → **URL Configuration**
3. 在 **Redirect URLs** 添加：
   ```
   https://your-app.vercel.app/**
   https://your-app.vercel.app/dashboard
   ```

---

## 🎉 完成！

你的应用已成功部署！访问 Vercel 给你的域名查看效果。

---

## 方式 2: 命令行部署

如果你想使用命令行：

```bash
# 1. 登录 Vercel（会打开浏览器）
npx vercel login

# 2. 部署（开发环境）
npx vercel

# 3. 添加环境变量
# 在 Vercel 网站的项目设置中添加环境变量

# 4. 部署到生产环境
npx vercel --prod
```

---

## 🔗 有用的链接

- **你的 Vercel 团队**: dddd (team_CtH3ySiPq2sJbuyz5dE1s3Lb)
- **Supabase 项目**: https://app.supabase.com/project/wrwtvcbjpnwmsajkxnjs
- **Vercel 控制台**: https://vercel.com/dddd-1ac6bf38

---

## 📊 部署后

- ✅ 访问你的应用
- ✅ 测试登录功能
- ✅ 测试社交登录
- ✅ 查看 Vercel Analytics
- ✅ 绑定自定义域名（可选）

---

Made with ❤️ using Vercel MCP

