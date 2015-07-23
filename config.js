var config = {
  name: 'DailyPlan',
  description: 'DailyPlan 是一个使用Node.js开发的管理待办的网站。',
  // mongodb 配置
  db_ip: process.env.MONGO_IP,
  db_port: process.env.MONGO_PORT,
  db_user: process.env.MONGO_USER,
  db_password: process.env.MONGO_PASSWORD,
  db_name: process.env.MONGO_DATABASE,
  
  db: 'mongodb://'+process.env.MONGO_USER+':'+process.env.MONGO_PASSWORD+'@'+process.env.MONGO_IP+':'+process.env.MONGO_PORT+'/'+process.env.MONGO_DATABASE,

  // 程序运行的端口
  port: process.env.VCAP_APP_PORT || 3000
};
module.exports = config;