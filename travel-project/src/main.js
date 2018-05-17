// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// vuex
import store from './store'
// 轮播插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
// 移动端点击事件300ms延迟问题
import fastClick from 'fastclick'
// 重置样式表, @css在webpack.base.conf.js中有配置
import '@css/reset.css'
// 移动端的1像素边框问题css(在分辨率高的手机上)
import '@css/border.css'
// iconfont
import '@css/iconfont.css'

Vue.config.productionTip = false
// use fastClick
fastClick.attach(document.body)
// use VueAwesomeSwiper
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
