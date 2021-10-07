/**
 * 数据库连接
 */
// 引入配置
const config = require("./index");
const mongoose = require("mongoose");
const log4js = require("../utils/log4j");

mongoose.connect(config.URL, {
  // 配置主要是针对新版本需要用新的方式解析
  // v5 版本需要添加
  // v6 版本不需要添加了
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", () => {
  // * 这里使用 log4js 进行打印，用 console 也可以
  log4js.error("****数据库连接失败****");
});
db.on("open", () => {
  // * 这里使用 log4js 进行打印，用 console 也可以
  log4js.info("****数据库连接成功****");
});
