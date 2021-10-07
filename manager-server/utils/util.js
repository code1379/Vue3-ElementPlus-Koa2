const log4js = require("./log4j");
/**
 * 通用工具函数
 */

const CODE = {
  SUCCESS: 200,
  PARAM_ERROR: 10001, // 参数不正确
  USER_ACCOUNT_ERROR: 20001, // 用户账号或密码错误
  USER_LOGIN_ERROR: 20002, // 用户未登录
  BUSINESS_ERROR: 30001, // 业务请求失败
  AUTH_ERROR: 40001, // 认证失败或 token 过期
  TOKEN_INVALID: 50001, // token 认证失败
};

module.exports = {
  /**
   * 分页结构封装
   * @param {numner} pageNum
   * @param {numner} pageSize
   * @returns
   */
  // 对 ctx.request.query 中的数据进行提取
  pager({ pageNum = 1, pageSize = 10 }) {
    // 防止传递过来字符串，
    pageNum *= 1;
    pageSize *= 1;
    const skipIndex = (pageNum - 1) * pageSize;
    return { page: { pageNum, pageSize, skipIndex } };
  },
  success(data = "", msg = "", code = CODE.SUCCESS) {
    log4js.debug(data);
    return {
      code,
      data,
      msg,
    };
  },
  fail(msg = "", code = CODE.BUSINESS_ERROR, data = "") {
    log4js.debug(msg);
    return {
      code,
      data,
      msg,
    };
  },
};
