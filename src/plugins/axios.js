"use strict";

import Vue from 'vue';
import axios from "axios";
import Cookies from 'js-cookie'
// import router from "@/login/router";


// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';
// axios.defaults.headers.get['Content-Type'] = 'application/json';
// axios.defaults.headers.delete['Content-Type'] = 'application/json';
axios.defaults.baseURL = 'http://192.168.157.131/api';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + Cookies.get("token");


let config = {
    // baseURL: process.env.baseURL || process.env.apiUrl || ""
    timeout: 60 * 1000, // Timeout
    withCredentials: true, // Check cross-site Access-Control
};


const _axios = axios.create(config);

_axios.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
_axios.interceptors.response.use(
    function (response) {
        // Do something with response data
        // console.log(response)
        if (response.data.code === 480) {
            window.location.href='/auth/oauth/authorize?client_id=e5170418-8560-460b-9296-d7bd95a06a5e&response_type=code&scope=all&redirect_uri=http://192.168.157.131/security'
            return;
        }
        return response;
    },
    function (error) {
        // Do something with response error
        return Promise.reject(error);
    }
);

// Plugin.install = function (Vue, options) {
Plugin.install = function (Vue) {
    Vue.axios = _axios;
    window.axios = _axios;
    Object.defineProperties(Vue.prototype, {
        axios: {
            get() {
                return _axios;
            }
        },
        $axios: {
            get() {
                return _axios;
            }
        },
    });
};


Vue.use(Plugin)

export default Plugin;
