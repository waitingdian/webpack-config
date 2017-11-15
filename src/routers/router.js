
import VueRouter from "vue-router";

import Vue from "vue"
//使用vue.use 方法加载vuerouter模块
Vue.use(VueRouter)

import HelloVue from "../components/HelloVue.vue"

export default new VueRouter({
    routes:[
       {
           path:"/",
           component:HelloVue
        }
    ]
})