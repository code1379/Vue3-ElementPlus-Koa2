import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
// 引入路由
import router from "./router";
// 引入环境变量
import config from "./config";

// 使用环境变量
import axios from "axios";

axios.post(config.mockApi + "/login").then((res) => {
  console.log("登录", res);
});

const app = createApp(App);

app.use(router);
app.use(ElementPlus);
app.mount("#app");
