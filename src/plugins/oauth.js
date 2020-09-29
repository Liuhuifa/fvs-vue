"use strict";

import Vue from 'vue';
import axios from "axios";

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.get['Content-Type'] = 'application/json';

let oauth = {

    baseURL: 'http://e5170418-8560-460b-9296-d7bd95a06a5e:123@192.168.157.131/auth',
    // baseURL: 'http://192.168.157.131/auth',
    timeout: 60 * 1000,
    withCredentials: true,
}

const _oauth = axios.create(oauth);
_oauth.interceptors.request.use(
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
_oauth.interceptors.response.use(
    function (response) {
        // Do something with response data
        // console.log(response)
        // if (response.data.code === 480) {
        //     router.push('/login').then(r => console.log(r))
        //     return;
        // }
        return response;
    },
    function (error) {
        // Do something with response error
        return Promise.reject(error);
    }
);

const MyPlugin = {
    install(Vue) {
        Vue.oauth = _oauth;
        window.oauth = _oauth;
        Object.defineProperties(Vue.prototype, {
            oauth: {
                get() {
                    return _oauth;
                }
            },
            $oauth: {
                get() {
                    return _oauth;
                }
            },
        });
    }
}


Vue.use(MyPlugin)

export default MyPlugin;