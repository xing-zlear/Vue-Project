// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 移动端点击事件300ms延迟问题
import fastClick from 'fastclick'
// 重置样式表
import './assets/css/reset.css'
// 移动端的1像素边框问题css(在分辨率高的手机上)
import './assets/css/border.css'

Vue.config.productionTip = false
// use fastClick
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
