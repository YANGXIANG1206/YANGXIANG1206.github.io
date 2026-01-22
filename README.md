# SimpleShop - 简单购物网站

这是一个简单的独立电商网站模板，使用React、TypeScript、Tailwind CSS构建。

## 项目特点

- 响应式设计，适配各种屏幕尺寸
- 现代化UI设计，包含明亮/暗黑模式切换
- 完整的电商基础功能（商品展示、导航、购物车、登录等）
- 清晰的代码结构和组件化设计

## 技术栈

- React 18+
- TypeScript
- Tailwind CSS 3
- Vite 6
- React Router DOM 7
- 其他依赖：framer-motion、recharts、sonner等

## 快速开始

### 前提条件

确保您的系统已安装以下软件：

- Node.js 16+
- pnpm 8+（推荐，也可以使用npm或yarn）

### 安装步骤

1. **克隆项目**（或直接下载项目文件）

```bash
git clone <项目地址>
cd simpleshop
```

2. **安装依赖**

```bash
# 使用pnpm（推荐）
pnpm install

# 或使用npm
npm install

# 或使用yarn
yarn install
```

3. **运行开发服务器**

```bash
# 使用pnpm
pnpm dev

# 或使用npm
npm run dev

# 或使用yarn
yarn dev
```

开发服务器启动后，您可以在浏览器中访问 http://localhost:3000 查看网站。

### 构建生产版本

```bash
# 使用pnpm
pnpm build

# 或使用npm
npm run build

# 或使用yarn
yarn build
```

构建后的文件将位于 `dist/static` 目录中。

## 项目结构

```
src/
├── components/     # 可复用组件
├── contexts/       # React上下文
├── hooks/          # 自定义React hooks
├── lib/            # 工具函数
├── pages/          # 页面组件
├── App.tsx         # 应用入口组件
├── index.css       # 全局样式
└── main.tsx        # 应用挂载点
```

## 常见问题解决

### 主页打不开怎么办？

1. 确保已正确安装所有依赖：`pnpm install` 或 `npm install`
2. 检查端口是否被占用，如果3000端口被占用，可以修改 `package.json` 中的端口设置
3. 检查浏览器控制台是否有错误信息
4. 尝试使用不同的浏览器

### 图片不显示怎么办？

项目中使用的图片URL都是示例地址，如果图片不显示，可以替换为您自己的图片URL。

### 如何添加新页面？

1. 在 `src/pages/` 目录下创建新的组件文件
2. 在 `src/App.tsx` 中添加新的路由配置

## 开发提示

- 项目使用Tailwind CSS进行样式设计，可以通过修改 `src/index.css` 中的全局样式
- 支持明亮/暗黑模式切换，可以在 `src/hooks/useTheme.ts` 中修改主题相关设置
- 可以根据需要扩展 `src/contexts/authContext.ts` 来完善用户认证功能

## 许可证

MIT