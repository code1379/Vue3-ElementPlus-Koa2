/**
 * vuex 状态管理
 */

import { createStore } from "vuex";
import storage from "../utils/storage";

const store = createStore({
  state: () => ({
    // ! 获取用户信息， coderwhy 老师不建议这么做。
    // ! 当我们修改的时候，我们就应该走 mutation 或者走 action
    userInfo: "" || storage.getItem("userInfo"),
  }),
  /**
   * 业务层数据提交
   */
  mutations: {
    saveUserInfo(state, userInfo) {
      storage.setItem("userInfo", userInfo);
      state.userInfo = userInfo;
    },
  },
  actions: {},
  getters: {},
  modules: {},
});

export default store;
