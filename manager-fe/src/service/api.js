/**
 * api 管理
 */
import request from "./request";
export default {
  login(data) {
    return request({
      url: "/users/login",
      method: "POST",
      data,
      // mock: false,
    });
  },
};
