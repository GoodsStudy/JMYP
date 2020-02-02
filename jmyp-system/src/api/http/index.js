import axios from 'axios'
import qs from 'qs'

/**
 * 根据环境变量区分接口的默认地址
 */

switch (process.env.NODE_ENV) {
    case 'production':
        axios.defaults.baseURL = 'http://192.168.1.187:8080'
        break;
    case 'test':
        axios.defaults.baseURL = 'http://192.168.1.187:8080'
        break;
    default:
        axios.defaults.baseURL = 'http://192.168.1.187:8080/'
}

/**
 * 设置超时时间和跨域是否允许携带凭证
 */
axios.defaults.timeout = 5000;
axios.defaults.withCredentials = true;

/**
 * 设置请求传递数据的格式
 */

axios.defaults.headers['Content-Type'] = 'application/json; charset=UTF-8';

axios.defaults.transformRequest = data => {
    qs.stringify(data)
}

/**
 * 设置请求拦截器
 */

axios.interceptors.request.use(config => {
    let tiken = localStorage.getItem('token')
    token && (config.headers.Authorization = token)
    return config
}, error => {
    return Promise.reject(error);
});

/**
 * 设置响应拦截
 */

// axios.defaults.validateStatus = status => {
//     return /^(2|3)$/
// }

axios.interceptors.response.use(response => {
    return response.data
}, error => {
    if (error.response) {
        //至少服务器返回结果
        //返回服务器返回的错误码
    } else {
        //没有返回结果
        if (!window.navigator.onLine) {
            //断网处理，跨域跳转到断网页面
            return
        }
        return Promise.reject(error)
    }
})

export default axios