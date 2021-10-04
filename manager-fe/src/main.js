import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
// 引入路由
import router from "./router";
// 全局挂载 axios 实例
import request from "./service/request";
// 全局挂载 storage 实例
import storage from "./utils/storage";

// main.js 中引入样式
// import "./assets/style/reset.css";
// import "./assets/style/index.scss";

// 引入 icon
import * as icon from "@element-plus/icons";

const app = createApp(App);

app.use(icon);
// console.log("request => ", request);
app.config.globalProperties.$request = request;
app.config.globalProperties.$storage = storage;

app.use(router);
app.use(ElementPlus);
app.mount("#app");
