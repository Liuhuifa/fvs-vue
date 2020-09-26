import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '@/components/Home'
import SysUser from '../views/sys/SysUser'
import Cookies from 'js-cookie';

Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        redirect: '/user'
    },
    {
        path: '/user',
        name: '用户管理',
        component: SysUser,
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
