/**
 * Storage 二次封装
 * @author 夏洛
 */
import config from "../config";
export default {
  getStorage() {
    const { namespace } = config;
    const namespaceObj = window.localStorage.getItem(namespace)
      ? JSON.parse(window.localStorage.getItem(namespace))
      : {};
    return [namespace, namespaceObj];
  },
  setItem(key, value) {
    // localStorage.setItem(key, JSON.stringify(value));
    // 我们需要定义命名空间
    // * 我们可以把命名空间定义到 config 中
    const [namespace, namespaceObj] = this.getStorage();
    // ! 不能使用 .的方式，这样 key 就是一个字符串，而不是一个变量了
    // namespaceObj.key = "xxx"
    namespaceObj[key] = value;
    window.localStorage.setItem(namespace, JSON.stringify(namespaceObj));
  },
  getItem(key) {
    const [namespace, namespaceObj] = this.getStorage();
    return namespaceObj[key];
  },
  clearItem(key) {
    const [namespace, namespaceObj] = this.getStorage();
    delete namespaceObj[key];
    window.localStorage.setItem(namespace, JSON.stringify(namespaceObj));
  },
  clearAll() {
    window.localStorage.clear();
  },
};
