# Next.js + Supabase 用户认证系统

这是一个使用 Next.js 14 和 Supabase 构建的简单用户登录认证系统。

## 功能特性

✅ 用户注册  
✅ 用户登录  
✅ 邮箱验证  
✅ **社交登录（Facebook、Google、Apple）** 🆕  
✅ 受保护的路由  
✅ 用户退出登录  
✅ 现代化的 UI 设计（基于 Figma）

## 技术栈

- **Next.js 14** - React 框架（使用 App Router）
- **TypeScript** - 类型安全
- **Supabase** - 后端即服务（BaaS）用于认证
- **CSS Modules** - 样式管理

## 开始使用

### 1. 安装依赖

```bash
npm install
```

### 2. 配置 Supabase

1. 访问 [Supabase](https://supabase.com/) 并创建一个新项目
2. 在项目设置中找到 API 密钥
3. 复制 `.env.local.example` 为 `.env.local`
4. 填入你的 Supabase 凭据：

```env
NEXT_PUBLIC_SUPABASE_URL=你的项目URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=你的匿名密钥
```

### 3. 运行开发服务器

```bash
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看结果。

## 项目结构

```
├── app/
│   ├── login/              # 登录页面
│   ├── dashboard/          # 用户控制台（受保护页面）
│   ├── page.tsx           # 首页
│   ├── layout.tsx         # 根布局
│   └── globals.css        # 全局样式
├── lib/
│   └── supabase.ts        # Supabase 客户端配置
├── package.json
├── tsconfig.json
└── next.config.js
```

## 使用说明

### 社交登录（推荐）🆕
1. **选择登录方式**：点击 Facebook、Google 或 Apple 按钮
2. **授权**：在弹出窗口中完成授权
3. **自动登录**：授权成功后自动跳转到控制台

### 邮箱登录
1. **注册新用户**：在登录页面点击"没有账户？点击注册"，输入邮箱和密码（至少6位）
2. **验证邮箱**：查看你的邮箱并点击验证链接（Supabase 会自动发送）
3. **登录**：使用已注册的邮箱和密码登录
4. **访问控制台**：登录成功后自动跳转到受保护的控制台页面
5. **退出登录**：在控制台页面点击"退出登录"按钮

> 💡 **提示**：社交登录需要在 Supabase 中配置相应的 OAuth 提供商。查看 [SOCIAL_LOGIN_SETUP.md](./SOCIAL_LOGIN_SETUP.md) 了解详细配置步骤。

## Supabase 设置说明

在 Supabase 项目中，认证功能已经默认启用。你可以在 Supabase 控制台的 **Authentication** 选项卡中：

- 查看已注册的用户
- 配置邮箱模板
- 设置认证提供商（Facebook、Google、Apple 等）
- 配置密码策略
- 设置回调 URL

### 启用社交登录 🆕

本项目支持通过 Facebook、Google 和 Apple 登录。登录界面设计来自 [Figma](https://www.figma.com/design/lhcAp1foE1zA22rXe4ZQAF/Social-Login-Buttons--Community-)，通过 **MCP (Model Context Protocol)** 自动提取并实现。

详细配置步骤请参考：**[SOCIAL_LOGIN_SETUP.md](./SOCIAL_LOGIN_SETUP.md)**

## 生产部署

### 部署到 Vercel

最简单的方式是使用 [Vercel Platform](https://vercel.com/new)：

1. 推送代码到 GitHub
2. 在 Vercel 中导入项目
3. 添加环境变量（`NEXT_PUBLIC_SUPABASE_URL` 和 `NEXT_PUBLIC_SUPABASE_ANON_KEY`）
4. 点击部署

## 注意事项

- 确保在 Supabase 项目设置中配置正确的网站 URL
- 生产环境中记得更新邮箱验证模板
- 建议启用 Supabase 的 RLS（Row Level Security）来保护数据

## License

MIT

