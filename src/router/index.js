import Vue from 'vue'
import VueRouter from 'vue-router'



// 1、安装插件
Vue.use(VueRouter);

const routes = [

]

// 2、创建router
const router = new VueRouter({
  routes,
  mode: 'history'
});

// 3、导出
export default router