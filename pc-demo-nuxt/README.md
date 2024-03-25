# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.


## 🍃目录结构

```bash
Nuxt3
├── .husky                        # Git hooks 工具配置
├── src
│   ├── api                       # 接口请求服务管理
│   ├── assets                    # 工程化处理的静态资源
│   ├── components                # 项目组件
│   ├── composables               # 响应式共享状态
│   ├── layouts                   # 布局组件
│   ├── middleware                # 路由中间件
│   ├── pages                     # 页面视图
│   ├── plugins                   # 项目公共插件
│   ├── store                     # 状态管理
│   ├── utils                     # 静态工具函数
│   └── app.vue                   # 入口页面
├── .env                          # 环境变量(默认/开发环境)
├── .eslintignore                 # eslint忽略文件检查的配置
├── .eslintrc.js                  # eslint代码规范检查配置
├── .gitignore                    # git仓库提交忽略配置
├── .prettierignore               # prettier忽略格式化的配置
├── .prettierrc.js                # prettier格式化配置
├── nuxt.config.ts                # Vite 构建配置入口
├── package.json                  # 项目包管理文件
├── pnpm-lock.yaml                # pnpm包版本管理锁定
├── README.md                     # 项目说明
└── tsconfig.json                 # TS编译的配置
```
