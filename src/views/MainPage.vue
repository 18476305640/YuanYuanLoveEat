<template>
    <div class="total">
        <login />
        <div>
            <div class="title">
                <span>GoPoint后台管理</span>
            </div>
            <div class="content">
                <navs :navitem="['good','base']" />
                <router-view  class="showStyle"/>
            </div>
        </div>
    </div>
</template>
<script>
import Navs from 'components/content/Navs'
import Login from 'components/content/Login'
export default {
    name:"MainPage",
    components: {
        Navs,
        Login
    }
}
</script>
<style scoped>
    .total {
        position:fixed;
        left: 0px;
        right: 0px;
        top: 0px;
        bottom: 0px;
        background-color:#f5f5f5;
    }
    .title {
        width: 100%;
        height: 50px;
        background: #ffffff;
        border-bottom: 1px solid #c1c1c1 ;
        background: #0681BA;
        
    }
    .title>span {
        font-size: 25px;
        line-height: 50px;
        color: #ffffff;
        padding-left:27px ;

    }
    .content {
        width: 100%;
        height: calc(100vh - 51px); /*知识点 lalc */
    }
    .showStyle { /*路由页面   */
        position: absolute;
        right: 0px;
        top: 52px;
        bottom: 0px;
        left: 200px;
        background: #ffffff;
        border-left: 1px solid #dbd8d8;
    }
</style>