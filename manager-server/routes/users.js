/**
 * 用户管理模块
 */
const router = require("koa-router")();
const User = require("../models/userSchema");
const util = require("../utils/util");
router.prefix("/users");

router.post("/login", async (ctx, next) => {
  const { userName, userPwd } = ctx.request.body;
  console.log(`${userName} - ${userPwd}`);
  try {
    // 查询数据库
    const user = await User.findOne({
      userName,
      userPwd,
    });
    console.log("user", user);
    if (user) {
      ctx.body = util.success(user);
    } else {
      ctx.body = util.fail("账号或密码不正确");
    }
  } catch (error) {
    console.log("error", error);
    ctx.body = util.fail(error.msg);
  }
});

module.exports = router;
