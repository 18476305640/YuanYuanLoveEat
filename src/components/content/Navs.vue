<template>
    <div class="left-total">
        <div class="nav-item" v-for="(nat_value,nav_key) in currentMapper"
             :key="nav_key"
             @click="toPage(nat_value[1])" >
           <span>{{nat_value[0]}}</span>     
        </div>
    </div>
</template>
<script>
export default {
    name: "Navs",
    data(){
        return {
            pageMapper:{
                "base":["Point管理","/base"],
                "good":["用户管理","/good"]
            },
            currentMapper: {}
               
        }
    },
    props: {
       navitem: {
           type:Array,
           default: []
       } 
    },
    created() {
        //根据传入的映射要显示导航信息到currentMapper
        for(var i=0; i<this.navitem.length; i++) {
            for(var key in this.pageMapper) {
                if(this.navitem[i] == key ) {
                    this.currentMapper[key] = this.pageMapper[key];
                }
            }
        }
    },
    methods: {
        toPage(path) {
            this.$router.replace(path)
        }
    }

    
    

    
}
</script>
<style scoped>

    .nav-item {
        width: 100%;
        height: 40px;
        text-align: center;
        line-height: 40px;
        border-bottom: 1px solid #c1c1c1;
        cursor: pointer;
    } 
    .left-total {
        width: 188px;
        height: calc(100vh - 51px);
        background-color: #ffffff;
        border-right: 1px solid #dbd8d8;
    }
</style>