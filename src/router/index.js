import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '@/components/Home'
import SysUser from "../views/sys/SysUser";
import Login from "@/views/Login";


Vue.use(VueRouter)

const routes = [

    {
        path: '/user',
        name: '用户管理',
        component: SysUser,
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
    console.log(to)
    if (to.name === '登录') {
        next();
    } else {
        next();
    }
})
export default router
