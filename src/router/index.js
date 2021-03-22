//1、引入
import Vue from  'vue'
import VueRouter from 'vue-router'

//2、安装插件
Vue.use(VueRouter)
//3、注册路由
const routes = [
    
]
//4、创建router 
const router = new VueRouter({
    routes,
    mode: 'history'
})

//5、导出
export default router