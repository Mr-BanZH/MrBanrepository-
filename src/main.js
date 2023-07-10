import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

// axios 组件引入-----开始
import axios from 'axios'
//配置axios的全局基本路径
axios.defaults.baseURL='http://localhost:8001';
//全局属性配置，在任意组件内可以使用this.$http获取axios对象
Vue.prototype.$http = axios;
// axios 组件引入-----结束

// echarts 组件引入-----开始
import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts
// echarts 组件引入-----结束


// vue-router 组件引入-----开始
import VueRouter from "vue-router";
Vue.use(VueRouter)

// 导入需要跳转的 Vue 组件
import VueTest from './components/VueTest.vue';
import HelloWorld from './components/HelloWorld.vue';
import menu1 from './components/menu1.vue';
import menu2 from './components/menu2.vue';
//定义路由规则
const router = new VueRouter({
  // 配置路由表
  routes: [
    {
      path: '/',
      name: 'menu1',
      component: menu1
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/VueTest',
      name: 'VueTest',
      component: VueTest
    },
    {
      path: '/menu1',
      name: 'menu1',
      component: menu1
    },
    {
      path: '/menu2',
      name: 'menu2',
      component: menu2
    },
  ]
});
// vue-router 组件引入-----结束

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')