import axios from "axios";

export const Request = (() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const instance = axios.create({
        baseURL:
            process.env.NODE_ENV === "production"
                ? "https://enigmatic-hamlet-75905.herokuapp.com/"
                : "http://localhost:5000",
        timeout: 30000,
        cancelToken: source.token,
    });

    instance.interceptors.request.use(
        (config) => {
            let token = localStorage.getItem("token");
            config.headers.Authorization = `Baerer ${token}`;
            config.headers.Accept = "application/json";
            return config;
        },
        (error) => {
            return Promise.reject();
        },
    );

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

    return instance;
})();
