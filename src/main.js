import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
// 引入路由
import router from "./router";
// 全局挂载 axios 实例
import request from "./service/request";

const app = createApp(App);

// console.log("request => ", request);
app.config.globalProperties.$request = request;

app.use(router);
app.use(ElementPlus);
app.mount("#app");
