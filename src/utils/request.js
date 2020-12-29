import axios from "axios";

const instance = axios.create({
    baseURL: '/api',
    timeout: 6000,
})

// http request 拦截器
instance.interceptors.request.use()
// http response 拦截器
instance.interceptors.response.use(response => {
    if (response.status === 200) {
        if (response.data.code === 200) {
            return response.data
        }

    }

})

export default instance
