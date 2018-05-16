<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市景点，游玩主题</div>
    <router-link to="/city">
      <div class="header-right">{{this.city}}
        <span class="iconfont city-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<!-- scoped只对当前组件有效 -->
<style lang="stylus" scoped>
// 样式里引入样式，不能直接用import,需要加@
// css路径中的@表示src，如果在css中引入其他css，想用此@符号，@前面必须加波浪号～
// @import '~@/assets/css/varibles.styl'
// 再简化，将assets下的css重配置为@css，便可直接引用(@css在webpack.base.conf.js中有配置)
@import '~@css/varibles.styl'
// 1rem = html font-size = 50px
// 实际43px，设计图上是86px, 43/50 = 86/100
.header
  display: flex;
  line-height: 0.86rem;
  background-color: $bgcolor;
  color: #fff;
  .header-left
    width: 0.64rem;
    float: left;
    .back-icon
      text-align: center;
      font-size: 0.4rem;
  .header-input
    flex: 1;
    color: #ccc;
    height: 0.62rem;
    line-height: 0.62rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    padding-left: 0.2rem;
    background: #fff;
    border-radius: 0.1rem;
  .header-right
    color: #fff
    width: 1.24rem;
    float: right;
    text-align: center;
    .city-icon
      font-size: 0.24rem;
      margin-left: -.04rem;
</style>
