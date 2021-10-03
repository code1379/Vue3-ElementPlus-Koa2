const Koa = require("koa");
const app = new Koa();
const views = require("koa-views");
const json = require("koa-json");
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
// const logger = require("koa-logger");
const log4js = require("./utils/log4j");

const index = require("./routes/index");
const users = require("./routes/users");

// error handler
onerror(app);

// middlewares
app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"],
  })
);
app.use(json());
// app.use(logger());
app.use(require("koa-static")(__dirname + "/public"));

app.use(
  views(__dirname + "/views", {
    extension: "pug",
  })
);

// ! 制作错误，让 log4js 在 koa 处理错误的中间件中打印信息
// app.use(() => {
//   ctx.body = "hello";
// });

// logger
app.use(async (ctx, next) => {
  // const start = new Date();
  await next();
  // const ms = new Date() - start;
  // console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
  log4js.debug("测试信息");
});

// routes
app.use(index.routes(), index.allowedMethods());
app.use(users.routes(), users.allowedMethods());

// error-handling
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
  log4js.error(`${err.stack}`);
});

module.exports = app;
