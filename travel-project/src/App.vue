<template>
  <div id="app">
    <!-- 路由的内容被加载过一次之后就把路由的内容放到内存之中，第二次切换路由的时候直接从内存读取，不对外请求，优化性能 -->
    <keep-alive>
      <!-- router-view显示当前路由地址所对应的内容 -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
