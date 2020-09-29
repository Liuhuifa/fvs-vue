import Vue from 'vue'
import Cookie from 'js-cookie'


const CookiePlugin = {

    install(Vue) {
        Object.defineProperties(Vue.prototype, {
            Cookie: {
                get() {
                    return Cookie;
                }
            },
            $Cookie: {
                get() {
                    return Cookie;
                }
            },
        });
    }


}

Vue.use(CookiePlugin)

export default CookiePlugin;