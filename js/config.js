/**
 * 运行时配置（客户站可改 telemetryUrl；勿把密钥写进客户页）
 */
window.GAOKAO_CONFIG = {
  appName: "高考数学练习",
  version: "1.1.1",
  // 遥测上报地址：同域 /api/events，或 Cloudflare Worker / 自建服务完整 URL
  telemetryUrl: "/api/events",
  // 若静态托管无法同域 API，可改为例如：
  // telemetryUrl: "https://gaokao-math-api.your-subdomain.workers.dev/api/events",
  telemetryEnabled: true,
  // 本地/自建管理台口令（生产请改掉；仅用于自建 server）
  adminKeyHint: "请在自建服务环境变量 ADMIN_KEY 中设置",
  evolutionMinEvents: 5
};
