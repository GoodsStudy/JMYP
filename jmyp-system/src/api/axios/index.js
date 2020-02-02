import axios from 'axios'

const service = axios.create({
    timeout: 5000,   //请求超时
})

//拦截器
service.interceptors.request.use(
    
)