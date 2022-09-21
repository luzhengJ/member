// 引入axios
import axios from "axios";

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
});

// 请求拦截器
service.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 响应拦截器

service.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const request = (options) => {
  options.method = options.method || "get";
  if (options.method.toLowerCase() === "get") {
    options.params = options.data || options.params;
    delete options.data
  }
  return service(options);
};

//   导出实例对象
export default request;

// request({
//   url: "https://baidu.com",
//   method: "GET",
//   data: {
//     name: "jack",
//   },
// });
