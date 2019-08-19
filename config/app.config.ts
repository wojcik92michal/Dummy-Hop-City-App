import Axios from "axios";

const initErrorFromResponseInterceptor = () => {
    Axios.interceptors.response.use(config => {
        const { status, data } = config;
        if (status === 200 && data.responseType === "ERROR") {
            return Promise.reject(data);
        }
        return config;
    });
};

export const initAppConfig = () => {
    initErrorFromResponseInterceptor();
};
