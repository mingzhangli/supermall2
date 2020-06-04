import axios from 'axios'
export function request (config){
  //创造一个axios实例
  const instance1=axios.create({
    baseURL:'http://152.136.185.210:8000/api/n3',
    timeout:5000

  })
  instance1.interceptors.request.use(config=>{
   // console.log(config);
    return config
  }),err => {
    console.log(err)
  },
  instance1.interceptors.response.use(config=>{

    return config.data
    
  }),err=>{
    console.log(err)
  }
  //发送真正的网络请求
  return instance1(config)

}