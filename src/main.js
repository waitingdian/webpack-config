import Vue from "vue";

import App from "./App.vue";

import router from "./routers/router.js"


//组件化开发,
var vm =new Vue({
    el:"#app",
    router,
    template:"<App/>",
    components:{App}
})

