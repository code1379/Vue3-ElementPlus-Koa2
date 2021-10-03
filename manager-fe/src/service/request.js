/**
 * axios 二次封装
 */

import axios from "axios";
import config from "../config";

// 引入 Element 的 ElMessage
import { ElMessage } from "element-plus";
// 导入 router
import router from "../router";

// * 定义自己的错误信息
const TOKEN_INVALID = "Token 认证失败，请重新登录";
const NETWORK_ERROR = "网络请求异常，请稍后重试";
// 创建 axios 实例对象，添加全局配置
const service = axios.create({
  baseURL: config.baseApi,
  timeout: 8000,
});

// 请求拦截
service.interceptors.request.use((config) => {
  // TODO
  // 权限校验、时间戳处理等
  const headers = config.headers;
  if (!headers.Authorization) {
    headers.Authorization = "Bearer Jack";
  }
  return config;
});

// 响应拦截
service.interceptors.response.use((res) => {
  // TODO
  const { code, data, msg } = res.data;

  if (code === 200) {
    return data;
  } else if (code === 40001) {
    // 我们这里可以用后端返回回来的 msg 错误信息，也可以自己定义
    ElMessage.error(TOKEN_INVALID);
    // ! 不提倡直接跳转，因为有可能 ElMessage 还没看完，直接就跳走了
    setTimeout(() => {
      router.push("/login");
    }, 15000);
    // * 抛出异常 抛到控制台
    return Promise.reject(TOKEN_INVALID);
  } else {
    // * 常规业务报错就用 服务器返回的 msg 就好了
    ElMessage.error(msg || NETWORK_ERROR);
    return Promise.reject(msg || NETWORK_ERROR);
  }
});

/**
 * 请求核心函数
 * @param {*} options 请求配置
 * @returns
 */
// 定义封装函数
function request(options) {
  // 默认值
  options.method = options.method || "get";
  if (options.method.toLowerCase() === "get") {
    // * 不管调用 get 还是 调用 post 我们统一传递 data，在请求内部进行转换，减少开发的成本。
    // * 我们不需要自己去区分是 get 还是 post 了。
    options.params = options.data;
  }
  // TODO Mock
  if (config.env === "prod") {
    // 只要你是生产，不管你怎么设置，我都会把它指向 baseApi
    service.defaults.baseURL = config.baseApi;
  } else {
    service.defaults.baseURL = config.mock ? config.mockApi : config.baseApi;
  }
  return service(options);
}

// * 如果想要通过 get post 等方法直接调用的话

["get", "post", "put", "delete", "patch"].forEach((method) => {
  request[method] = (url, data, options) => {
    return request({
      url,
      data,
      ...options,
      method,
    });
  };
});

export default request;
