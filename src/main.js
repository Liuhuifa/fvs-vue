import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element'
import qs from 'qs'
import '@/theme/style'
Vue.config.productionTip = false

new Vue({
    router,
    store,
    qs,
    render: h => h(App)
}).$mount('#app')
