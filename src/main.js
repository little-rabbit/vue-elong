// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Header from '@/components/common/header'
import Content from '@/components/common/content'
import Footer from '@/components/common/footer'
Vue.use(VueAwesomeSwiper)
//vue 中原生的页面跳转 :window.loaction.href = index.html
Vue.config.productionTip = false  //来关闭生产模糊下给出的提示
//axios 必须要修改原型链 也就是vue 实例下的prototype的修改
Vue.prototype.$http = axios
Vue.component(Header.name,Header)
Vue.component(Content.name,Content)
Vue.component(Footer.name,Footer)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,		// http 请求
  // template: '<App/>',    //模板
  // components: { App }    //组件
  axios,	//状态管理
  render: h => h(App)
  //render: h => h(App), es6的写法  公司一般用这种方法
})
