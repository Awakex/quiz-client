import axios from "axios"

export const Request = (() => {
    const CancelToken = axios.CancelToken
    const source = CancelToken.source()

    const instance = axios.create({
        baseURL: "http://localhost:5000",
        timeout: 30000,
        cancelToken: source.token
    })

    instance.interceptors.request.use(config => {
        let token = 'asd'
        config.headers.Authorization = `Baerer ${token}`
        config.headers.Accept = "application/json";
        return config
    }, error => {
        return Promise.reject()
    })

    instance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            return Promise.reject(error);
        },
    );

    Object.defineProperty(instance, "cancel", {
        value: source.cancel,
    });

    return instance
})()
