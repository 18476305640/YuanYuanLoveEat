import axios from "axios";
//axios框架可简写为，因为axios本身就返回Promise，上面的方式只不过多穿了件相同的衣服罢了
export function request(config){
  //axios封装
  const instance=axios.create({
    //baseConfig
    baseURL: 'http://jcmxpf.natappfree.cc',
    timeout: 5000
    
  })
  //拦截器
  instance.interceptors.request.use(config => {
    // console.log("[[[-->请求处理");
    // console.log(config);
    // console.log("-->给请求");
    return config;
  },error => {
    console.log(error)
  })

  instance.interceptors.response.use(config => {
    // console.log("-->得到响应");
    // console.log(config);
    // console.log("-->给响应]]]");
    return config.data;
  },error => {
    console.log(error)
  })
  return instance(config)

}
