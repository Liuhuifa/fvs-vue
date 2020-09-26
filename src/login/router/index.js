import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '@/components/Home'
import Login from "@/views/Login";
import Cookies from 'js-cookie';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: '登录',
        component: Login
    }
]


const router = new VueRouter({
    routes
})

//导航守卫
router.beforeEach((to, from, next) => {
    // let authorization = Cookies.get("Authorization");

    let authorization = Cookies.get("Authorization");
    if (authorization) {
        console.log(authorization)
    }
    if (to.name === '登录') {
        next();
    } else {
        next();
    }
})
export default router
