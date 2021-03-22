<template>
    <div class="left-total">
        <div class="nav-item" v-for="(item,index) in navitem" :key="index" >
           <span>{{item}}</span>     
        </div>
    </div>
</template>
<script>
export default {
    name: "Navs",
    
    props: {
       navitem: {
           type:Array,
           default: []
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
    }
</style>