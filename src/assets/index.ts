/**
 * 统一静态素材清单（对应 public/assets/* 下的本地文件）
 * 自动兼容根路径（/）与任意部署子路径（import.meta.env.BASE_URL）
 */
const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, "");
const assetPathPrefix = `${baseUrl}/assets`;

// 3D 插画与视觉图形（PNG）
/** 风险预警横幅右侧 3D 科技背景插图 */
export const imgImage336 = `${assetPathPrefix}/88193.png`;
/** 建议优先关注 / 预警类信息 3D 蓝色铃铛图标 */
export const imgImage338 = `${assetPathPrefix}/4aa43.png`;
/** 黑灯 3D 警示灯插图 */
export const imgImage339 = `${assetPathPrefix}/f809d.png`;
/** 红灯 3D 警示灯插图 */
export const imgImage340 = `${assetPathPrefix}/44861.png`;
/** 黄灯 3D 警示灯插图 */
export const imgImage341 = `${assetPathPrefix}/ea6a4.png`;
/** AI 助手 3D 亮蓝胶囊按钮背景 */
export const imgImage342 = `${assetPathPrefix}/8ed4c.png`;
/** 绿灯 3D 警示灯插图 */
export const imgImage335 = `${assetPathPrefix}/ea9f0.png`;
/** 绿灯指标卡右侧 3D 绿色盾牌丝带勋章插图 */
export const imgImage343 = `${assetPathPrefix}/331f2.png`;

// 品牌 Logo 与界面图标（SVG）
/** 顶部导航栏 Logo 外层六边形环 */
export const imgProtectiveLoop = `${assetPathPrefix}/3df40.svg`;
/** 顶部导航栏 Logo 内核智能立方体 */
export const imgIntelligentCore = `${assetPathPrefix}/32d2c.svg`;
/** 风险预警标题右侧红色下降箭头 */
export const imgVector674 = `${assetPathPrefix}/28874.svg`;
/** 风险预警栏竖向分隔线 */
export const imgVector675 = `${assetPathPrefix}/6f6dc.svg`;
/** 筛选器下拉箭头图标 */
export const imgControlIcon = `${assetPathPrefix}/b9337.svg`;
/** 筛选器搜索放大镜图标 */
export const imgControlIcon1 = `${assetPathPrefix}/2cdd0.svg`;
/** 黄灯指标卡底部分页切换左右三角 */
export const imgGroup1321315963 = `${assetPathPrefix}/a879c.svg`;

// 图表与状态圆点矢量元素（SVG）
/** 健康状态趋势：黑灯折线路径 */
export const imgTrend = `${assetPathPrefix}/15ad1.svg`;
/** 健康状态趋势：红灯折线路径 */
export const imgTrend1 = `${assetPathPrefix}/d129f.svg`;
/** 健康状态趋势：黄灯折线路径 */
export const imgTrend2 = `${assetPathPrefix}/03fb4.svg`;
/** 健康状态趋势：黄灯数据节点圆点 */
export const imgEllipse2016 = `${assetPathPrefix}/38b76.svg`;
/** 健康状态趋势：红灯数据节点圆点 */
export const imgEllipse2022 = `${assetPathPrefix}/7c520.svg`;
/** 健康状态趋势：黑灯数据节点圆点 */
export const imgEllipse2028 = `${assetPathPrefix}/1f668.svg`;
/** 供应商子维度判定卡片：绿点 */
export const img = `${assetPathPrefix}/0debd.svg`;
/** 供应商子维度判定卡片：黑点 */
export const img1 = `${assetPathPrefix}/f5ea2.svg`;
/** 供应商子维度判定卡片：红点 */
export const img2 = `${assetPathPrefix}/a09cd.svg`;
