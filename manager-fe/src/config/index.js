// ! 之前 webpack 获取环境变量的方式，会报错Uncaught ReferenceError: process is not defined
// console.log("webpack 环境变量 => ", process.env);

// * 在 vite 中这样获取，通过 import.meta.env
// {BASE_URL: '/', MODE: 'development', DEV: true, PROD: false, SSR: false}
// 如果使用 .env.xxx 我们需要在 scripts 中添加对应的 --mode xxx
console.log("vite 环境变量 => ", import.meta.env);
/**
 * 环境配置封装
 * @date 2021-10-02
 * 开发/测试/线上
 */
const env = import.meta.env.MODE || "prod";

const EnvConfig = {
  dev: {
    baseApi: "/api",
    // 开发环境访问 mockApi
    mockApi:
      "https://www.fastmock.site/mock/aeb5e5bde2aab3659a3e7e372739feec/api",
  },
  test: {
    baseApi: "//test.futurefe.com/api",
    mockApi:
      "https://www.fastmock.site/mock/aeb5e5bde2aab3659a3e7e372739feec/api",
  },
  prod: {
    baseApi: "//futurefe.com/api",
    // 线上环境写不写 mockApi 都可以
    mockApi: "",
  },
};

export default {
  env,
  // * 手动设置，新项目刚开始后端都没有做，我们使用模拟假数据的方式
  mock: true,
  namespace: "manager",
  // baseURL
  // 线上 www.baidu.com/api
  // 测试 test-www.baidu.com/api
  ...EnvConfig[env],
};
