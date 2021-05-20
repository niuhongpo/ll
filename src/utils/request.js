import Axios from "axios";

const service = Axios.create({
  baseURL: "/api",
  timeout: 10000
});

service.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/json'
  return config;
}, error => {
  console.log(error);
});

service.interceptors.response.use(response => {
  if (response.status == "200") {
    return response.data;
  } else {
    console.log("出错了！status不是200");
  };
}, error => {
  console.log(error);
});

export default service;