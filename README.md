# 供应商健康智能体 · 3D 浅蓝总览前端代码库

基于 **React 19 + TypeScript 5.7 + Vite 8 + Tailwind CSS v4** 实现的「供应商健康智能体」前端工程。所有设计稿插画、3D 警示灯、勋章、品牌 Logo、矢量图标与字体均已完整本地化收敛在仓库内，无任何外部临时链接或平台耦合依赖，可在任意本地或服务器环境独立安装与启动。

---

## 一、在本地或其他环境打开与运行

### 1. 环境要求
- **Node.js**：建议 `>= 18.18`（推荐 Node 20 / 22 LTS）
- **包管理器**：`pnpm`、`npm` 或 `yarn` 均可

### 2. 安装依赖并启动开发服务器

使用 **npm**：
```bash
npm install
npm run dev
```

或使用 **pnpm**：
```bash
pnpm install
pnpm dev
```

启动后在浏览器访问终端提示的地址（默认 `http://localhost:5173`）即可查看完整页面。

### 3. 类型检查与生产环境打包
```bash
# TypeScript 类型检查
npm run typecheck

# 构建生产静态产物（输出至 dist/ 目录）
npm run build

# 本地预览构建产物
npm run preview
```

> 如需部署到二级子目录（例如 `/supplier-health/`），可执行：
> `npx vite build --base=/supplier-health/`，所有静态图片与 SVG 路径会自动适配 `BASE_URL`。

---

## 二、目录结构说明

```text
.
├── index.html                           # 页面入口模板
├── package.json                         # 项目依赖与脚本命令
├── tsconfig.json                        # TypeScript 配置（支持 @/* 别名）
├── vite.config.ts                       # Vite 构建配置（支持独立运行）
├── public/
│   ├── favicon.png                      # 站点图标
│   ├── assets/                          # 全部 24 个本地化 PNG 插画与 SVG 矢量图标
│   └── fonts/                           # PingFang SC Regular / Medium / Semibold 字体文件
└── src/
    ├── main.tsx                         # React 挂载入口
    ├── App.tsx                          # 页面主布局与全局筛选状态联动
    ├── index.css                        # Tailwind CSS v4 导入、@font-face 与基础排版样式
    ├── assets/
    │   └── index.ts                     # 全部静态素材统一导出与注释映射
    ├── types/
    │   └── supplier.ts                  # 供应商、灯态、历史状态、图表数据结构类型定义
    ├── data/
    │   ├── suppliers.ts                 # 重点关注供应商列表数据与筛选项枚举
    │   └── chartData.ts                 # 健康状态趋势（黑红黄灯/绿灯）与五大/十五子维度柱状图数据
    └── components/
        ├── ProductHeader.tsx            # 顶部导航栏与双层六边形智能体 Logo
        ├── RiskWarningBanner.tsx        # 风险预警总览横幅（含 3D 浅蓝插画背景与 AI 助手入口）
        ├── AssessmentFilters.tsx        # 顶部全局评估筛选栏
        ├── FilterControls.tsx           # 通用下拉选择框与关键词搜索框组件
        ├── LampIllustration.tsx         # 四类 3D 警示灯（黑/红/黄/绿）精确比例裁切组件
        ├── StatusMetricCards.tsx        # 四类灯态核心指标卡（≥1280px 四卡同行，<1280px 折为两行）
        ├── ChartsSection.tsx            # 趋势折线图 & 五大/十五子维度双X轴柱状图（含 Hover 详情与 Populated/All Data）
        └── PrioritySuppliersSection.tsx # 重点关注供应商卡片列表（支持展开/收起、历史灯态与十五子维度判定）
```

---

## 三、静态素材清单（`public/assets/` & `public/fonts/`）

| 文件路径 | 类型 | 对应导出变量 (`src/assets/index.ts`) | 页面用途 |
| --- | --- | --- | --- |
| `public/assets/3df40.svg` | SVG | `imgProtectiveLoop` | 顶部 Header 产品 Logo 外环六边形 |
| `public/assets/32d2c.svg` | SVG | `imgIntelligentCore` | 顶部 Header 产品 Logo 内核立方体 |
| `public/assets/88193.png` | PNG | `imgImage336` | 风险预警卡片右侧浅蓝 3D 科技背景插画 |
| `public/assets/8ed4c.png` | PNG | `imgImage342` | 右上角「AI 助手」3D 胶囊按钮底图 |
| `public/assets/28874.svg` | SVG | `imgVector674` | 风险预警「环比下降」红色向下箭头 |
| `public/assets/6f6dc.svg` | SVG | `imgVector675` | 风险预警三栏竖向分隔线 |
| `public/assets/4aa43.png` | PNG | `imgImage338` | 建议优先关注 / 预警类信息 3D 蓝色铃铛图标 |
| `public/assets/f809d.png` | PNG | `imgImage339` | 黑灯 3D 警示灯插画（预警栏小尺寸 & 指标卡大尺寸） |
| `public/assets/44861.png` | PNG | `imgImage340` | 红灯 3D 警示灯插画（预警栏小尺寸 & 指标卡大尺寸） |
| `public/assets/ea6a4.png` | PNG | `imgImage341` | 黄灯 3D 警示灯插画（预警栏小尺寸 & 指标卡大尺寸） |
| `public/assets/ea9f0.png` | PNG | `imgImage335` | 绿灯 3D 警示灯插画（绿灯指标卡） |
| `public/assets/331f2.png` | PNG | `imgImage343` | 绿灯指标卡右侧 3D 绿色盾牌丝带勋章插画 |
| `public/assets/a879c.svg` | SVG | `imgGroup1321315963` | 黄灯指标卡底部分页切换三角图标 |
| `public/assets/b9337.svg` | SVG | `imgControlIcon` | 下拉选择框箭头图标 |
| `public/assets/2cdd0.svg` | SVG | `imgControlIcon1` | 搜索输入框放大镜图标 |
| `public/assets/15ad1.svg` | SVG | `imgTrend` | 健康状态趋势：黑灯趋势线 |
| `public/assets/d129f.svg` | SVG | `imgTrend1` | 健康状态趋势：红灯趋势线 |
| `public/assets/03fb4.svg` | SVG | `imgTrend2` | 健康状态趋势：黄灯趋势线 |
| `public/assets/38b76.svg` | SVG | `imgEllipse2016` | 健康状态趋势：黄灯数据节点圆点 |
| `public/assets/7c520.svg` | SVG | `imgEllipse2022` | 健康状态趋势：红灯数据节点圆点 |
| `public/assets/1f668.svg` | SVG | `imgEllipse2028` | 健康状态趋势：黑灯数据节点圆点 |
| `public/assets/0debd.svg` | SVG | `img` | 供应商子维度判定卡片：绿色状态圆点 |
| `public/assets/f5ea2.svg` | SVG | `img1` | 供应商子维度判定卡片：黑色状态圆点 |
| `public/assets/a09cd.svg` | SVG | `img2` | 供应商子维度判定卡片：红色状态圆点 |
| `public/fonts/PingFang_SC-*.woff2` | Font | `@font-face` (`src/index.css`) | PingFang SC Regular (400) / Medium (500) / Semibold (600) |

---

## 四、后续对接真实后端接口指引

1. **替换数据源**：在 `src/data/suppliers.ts` 与 `src/data/chartData.ts` 中查看完整数据结构（类型集中定义于 `src/types/supplier.ts`），可直接替换为 `fetch` / `axios` 接口返回值。
2. **扩展业务事件**：
   - **AI 助手弹窗/抽屉**：在 `src/components/RiskWarningBanner.tsx` 的 `AI 助手` 按钮绑定打开事件。
   - **导出当前画像 / 判定与明细弹窗**：在 `src/components/PrioritySuppliersSection.tsx` 对应按钮挂载下载或抽屉详情回调。
