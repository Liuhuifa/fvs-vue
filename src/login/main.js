import Vue from 'vue'
import '../plugins/oauth';
import App from './App.vue'
import router from './router'
import store from '../store'
import '../plugins/element'
import qs from 'qs'
import '@/theme/style'
import '../plugins/cookie'


Vue.config.productionTip = false


new Vue({
    router,
    store,
    qs,
    render: h => h(App)
}).$mount('#login')