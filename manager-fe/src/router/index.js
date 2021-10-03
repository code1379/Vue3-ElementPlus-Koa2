import { createRouter, createWebHashHistory } from "vue-router";
// hash 路由的优点，我们在访问的时候是 # 号，不需要服务器 nginx去做配置
/**
 * history 的话，是 /xxx，那么你在上线的时候，需要在 nginx 那边做一些配置，
 * 当你访问 /a /b 的时候，需要重新 / 回来。
 * 因为 /a /b 会变成一个请求，如果不配置的话，它会按照这个请求方式去发送，这样是有问题的
 *  */

import Home from "../components/Home.vue";
import Welcome from "../components/Welcome.vue";
import Login from "../components/Login.vue";
const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
    // meta 定义元数据，方便我们更改浏览器的标题。我们也可以增加一些权限
    meta: {
      title: "首页",
    },
    redirect: "/welcome",
    children: [
      {
        path: "/welcome",
        name: "welcome",
        meta: {
          title: "欢迎页",
        },
        component: Welcome,
      },
      {
        path: "/login",
        name: "login",
        meta: {
          title: "登录页",
        },
        component: Login,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
