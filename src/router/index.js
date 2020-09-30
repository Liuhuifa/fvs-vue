import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '@/components/Home'
import SysUser from '../views/sys/SysUser'
import Cookies from 'js-cookie';
import SysRole from "@/views/sys/SysRole";
import SysPer from "@/views/sys/SysPer";

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
    },
    {
        path: '/role',
        name: '角色管理',
        component: SysRole,
    },
    {
        path: '/per',
        name: '权限管理',
        component: SysPer
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
