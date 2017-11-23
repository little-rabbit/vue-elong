<template>
  <div id="app">
    <router-view class='view one'></router-view>   <!--显示的盒子-->
  </div>
</template>

<script>
import Vue from 'vue';
import router from './router';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Element);
export default {
  name: 'app'
}
</script>

<style lang="scss" scope>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>