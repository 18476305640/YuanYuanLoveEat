<template>
    <div class="login-page-total" v-if="showLogin">

        <form class="loginBox">
            <p>GoPoint后台管理系统</p>
            <input type="text" name="username" v-model="username" placeholder="请输入帐号..."/>
            <input type="password" name="password" v-model="password" placeholder="请输入密码..."/>
            <button @click="submitx" type="button">登录</button>
            <span class="msg" v-show="{showSuccess}">{{msg}}</span>
        </form>
    </div>
</template>
<script>
import {login} from 'network/api/bash'
export default {
    
    name: "Login",
    data() {
        return {
            showLogin:true, //true
            msg: '',
            username:'',
            password:'',
            showSuccess:false

        }
    },
    components: {

    },
    methods: {
        submitx() {
            
            login(this.username,this.password).then(res => {
                var that = this;
                if(res.code == 20000) {
                    this.msg = '登录成功~'
                    that.showSuccess=true;
                    setTimeout(function(){
                        that.showLogin = false;
                    },900)
                }else {
                    this.msg = "登录失败"
                }
            }).catch(error => {
                console.log("请求失败",error);
            })


        }
    }
}
</script>
<style scoped>
    p{
        margin-top: 30px;
        padding: 0px;
        font-size: 20px;
    }
    .login-page-total {
        position: fixed;
        width: 100%;
        height: 100%;
        background-image: url("~assets/baseImgs/login.png") ;
        background-size:100% 100% ;
        z-index: 1000;

 
    }
    .loginBox {
        display: flex;
        
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-content: flex-start;
        
    }
     
    .loginBox input {
        width: 90%;
        height: 35px;
        border-radius: 6px;
        margin: 15px 0px;
        border: none;
        box-sizing: border-box;
        padding-left: 40px;
        font-size: 18px;
        background:#e8f0fe ;
        outline: none;

    }
    .loginBox button {
        width: 50%;
        height: 30px;
        border: none;
        margin-top: 10px;
        background: rgba(255, 255, 255,0.8);
        outline: none;

    }
    .loginBox button:hover{
        background: rgba(0, 122, 204,0.8);
        color: #ffffff;
    }
    .loginBox {
        width: 400px;
        height: 300px;
        background: rgba(255, 255, 255,0.4);
        position: absolute;
        right: 50px;
        top: calc((100vh - 300px)/2);
        border-radius: 15px;

    }
    .msg {
        width:100% ;
        color: #00ff01;
        display: block;
        text-align: center;
        line-height: 30px;
        font-weight: 700;
        
    }
</style>