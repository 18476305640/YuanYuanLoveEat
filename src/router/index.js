//1、引入
import Vue from  'vue'
import VueRouter from 'vue-router'

//1、懒加载引入
const Home = () => import('views/home/Home')
const Good = () => import('views/good/Good')
//2、安装插件
Vue.use(VueRouter)
//3、注册路由
const routes = [
    {
        path:"",
        component: Home
    },
    {
        path:"/base",
        component: Home
    },
    {
        path:"/good",
        component: Good
    }
]
//4、创建router 
const router = new VueRouter({
    routes,
    mode: 'history'
})

//5、导出
export default router