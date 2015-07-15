var config = {
  name: 'DailyPlan',
  description: 'DailyPlan 是一个使用Node.js开发的管理待办的网站。',
  // mongodb 配置
  db: 'mongodb://localhost/plan',
  db_name: 'plan',
  session_secret: 'plan',
  // 程序运行的端口
  port: process.env.VCAP_APP_PORT || 3000
};
module.exports = config;