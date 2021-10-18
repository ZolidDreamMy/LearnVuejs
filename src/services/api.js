import axios from "axios";

const API_BASE_API = "http://35.247.158.49:30749/mfecinternship/";
// const API_BASE_API = "https://api.coindesk.com";
const TIMEOUT = 120000;
const HEADERS = {
    "Content-Type": "application/json"
};

export default class HttpRequest {
    constructor({
        baseURL = API_BASE_API,
        timeout = TIMEOUT,
        headers = HEADERS
    }) {
        this.axiosInstance = axios.create({
            baseURL,
            timeout,
            headers,
        });
        this.axiosInstance.interceptors.request.use(
            this.handleRequestSuccess,
            this.handleRequestError
        );
        this.axiosInstance.interceptors.response.use(
            this.handleResponseSuccess,
            this.handleResponseError
        );

    }

    handleRequestSuccess(request) {
        //dosomething
        return request;
    }

    handleRequestError(error) {
        //dosomething
        return Promise.reject(error)
    }

    handleResponseSuccess(response) {
        let data = null;
        if (response && !(response.data === null || response.data === undefined)) {
            data = response.data
        }
        return data;
    }

    handleResponseError(err) {
        //dosomething
        return Promise.reject(err);
    }

    get(path) {
        return this.axiosInstance.get(path);
    }

    post(path, payload) {
        return this.axiosInstance.post(path, payload);
    }

    put(path, payload) {
        return this.axiosInstance.put(path, payload);
    }

    patch(path, payload) {
        return this.axiosInstance.patch(path, payload);
    }

    delete(path) {
        return this.axiosInstance.delete(path);
    }
}