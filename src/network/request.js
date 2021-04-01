import axios from 'axios'

/**
 * 首页数据（轮播图，推荐）
 **/
export function request(config) {
  return getInstance('http://123.207.32.32:8000', 5000, config)
}

/**
 * 首页商品接口网址
 **/
export function request2(config) {
  return getInstance('http://152.136.185.210:7878/api/m5', 5000, config)
}

function getInstance(url, timeout, config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: url,
    timeout: timeout
  })

  // 2.axios的拦截器m
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    // console.log(err);
  })

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  // 3.发送真正的网络请求
  return instance(config)
}