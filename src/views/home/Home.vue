<template>
    <div class="container">
        <div class="head" >
            <input placeholder="根据学号搜索..." v-model="search"  />
            <button @click="search_action">搜索</button>
        </div>
        <div class="point_list">
            <div class="float_box" v-show="float_box">
                <input placeholder="学号"  v-model="add_data.student_id" />
                <input placeholder="位置"  v-model="add_data.location"/>
                <button @click="addPoint" >上车</button>
            </div>
            <table class="tb">
                <tr class="t_head">
                    <td>学号</td>
                    <td>Point地址</td>
                    <td>用户</td>
                    <td>上车时间</td>
                    <td>走动时间</td>
                    <td><button class="down_btn" @click="showAddBox">添加</button></td>
                </tr>
                <tr v-for="item in point_arr" :key="item.student_id ">
                    <td>{{item.student_id}}</td>
                    <td>{{item.location}}</td>
                    <td>{{item.user_id}}</td>
                    <td>{{item.create_time}}</td>
                    <td>{{item.update_time}}</td>
                    <td @click="downCart(item.student_id)" ><button class="down_btn" >下车</button></td>
                </tr>
            </table>
             <div class="controller">
                <button @click="prev">上一页</button>
                <span>{{page_number}} / {{total_page}}</span>
                <button @click="next">下一页</button>
            </div>
        </div>
       
    </div>
</template>
<script>
import {selectPoint,downCart,upCart} from 'network/api/bash'
export default {
    name: "Home",
    data(){
        return {
            page_number: 0,
            item_number: 15,
            total_page: 0,
            point_arr: [],
            search:"",
            float_box: false,
            add_data: {
                student_id:"",
                location:""
            }
        }
    },
    components: {

    },
    methods: {

    },
    created(){
        this.nextPage(++this.page_number,this.item_number,this.search);
    },
    methods: {
        //被调用，会维护total_page变量，同时向point_arr加入新的数据
        nextPage(page_number,item_number,search) {
            console.log("nextPage方法");
            selectPoint(page_number,item_number,search).then(res => {
                console.log("数据",res);
                if(res.code == 20000) {
                    this.point_arr=res.data.points;
                    this.total_page = res.data.total_page
                }
                console.log( this.point_arr,this.total_page );
            }).catch(error => {
                console.log("数据请求失败");
            })
        },
        downCart(student_id) {
            if(confirm("确认让"+student_id+"下车吗？")==true) {
                var that = this;
                console.log(student_id+",被请下车！");
                downCart(student_id).then(res => {
                    console.log("下车成功！");
                    that.nextPage(that.page_number,that.item_number,that.search);
                }).catch(error => {
                    console.log("卡车了");
                })
            }
            
        },
        search_action() {
            this.page_number=0;
            this.nextPage(++this.page_number,this.item_number,this.search);
        },
        prev() {
             var that = this;
            if(this.page_number-1>0) {
                that.nextPage(--that.page_number,that.item_number,that.search);
            }
            
        },
        next() {
            var that = this;
            if(this.page_number+1<=this.total_page) {
                that.nextPage(++that.page_number,that.item_number,that.search);
            }
            
        },
        addPoint() {
            console.log("添加");
            var that = this;
            upCart(this.add_data.student_id, this.add_data.location).then(res => {
                if(res.code == 20000) {
                    alert("上车成功");
                    that.addPoint.student_id="";
                    that.addPoint.location="";
                }else {
                    alert("重复添加！");
                }
                
            },error => {
                alert("添加失败！");
            })
            this.float_box=(!this.float_box);
        },
        showAddBox() {
            this.float_box=(!this.float_box);
        }
    }
    

}
</script>
<style scoped>
    .head {
        width: 100%;
        height: 50px;
        border-bottom: 1px solid #C1C1C1;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .head>input {
        display: block;
        width: 300px;
        height: 60%;
        border-radius: 5px;
        margin-right: 10px;
        box-sizing: border-box;
        padding: 0px 10px;
    }
    .head>button {
        width: 100px;
        height: 70%;
        border-radius: 5px;
        border:none;
        margin-right: 20px;
        cursor: pointer;
    }
    .point_list {
        display: block;
        width: 100%;
        
    }
    .point_list>table{
        display: block;
        width: 100%;
        
    }
    .tb>tr {
        display: flex;
        flex: 1;
        width: 100%;
        text-align: center;
        box-sizing: border-box;
        padding: 0px 20px;
        
    }
    .tb>tr>td {
        display: inline-block;
        text-align: left;
        width: 15%;
        line-height: 50px;
        
    }
    .tb>tr>td:nth-child(2) {
        overflow: hidden;
        text-overflow:ellipsis; 
        white-space: nowrap;
        width: 35%;
    }
    .t_head {
        font-weight: 700;
        border-bottom: 1px solid #DDDDDD;
        
    }

    .down_btn {
        width: 50%;
        height: 30px;
        border-radius: 5px;
        border:none;
        cursor: pointer;
    }
    .controller {
        display: flex;
        width: 100%;
        height: 50px;
        justify-content: center;
        align-items: center;
        margin:0px 20px;
        
    }
    .controller>button {
        width: 100px;
        height: 80%;
        border-radius: 5px;
        border:none;
        cursor: pointer;
    }
    .controller>span {
        min-width: 50px;
        text-align: center;
    }
    .container {
        overflow: auto;
    }
    .float_box {
        position: fixed;
        top: 200px;
        left: calc(50% - 200px);
        width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #ffffff;
        border-radius: 15px;
        box-shadow: 3px 3px 10px #000000;
    }
    .float_box>input {
        width: 90%;
        height: 40px;
        margin-top: 30px;
    }
    .float_box>button {
        width: 30%;
        height: 30px;
         margin: 20px;
    }


</style> 