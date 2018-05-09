# travel-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 了解
- CommonJS规范：http://javascript.ruanyifeng.com/nodejs/module.html#toc7

## 实战项目用到的一些技术
- stylus：npm install stylus --save  &&   npm install stylus-loader --save (https://stylus.bootcss.com/)
- 图标集iconfont：下载之后，main.js引入字体和css文件（http://iconfont.cn/）
- 轮播插件：npm安装vue-awesome-swiper，main.js引入module+css文件，并添加使用，详见GitHub（https://github.com/surmon-china/vue-awesome-swiper，http://3.swiper.com.cn）
- 移动端点击事件300ms延迟问题：npm安装fastclick
- 移动端的1像素边框问题css + 重置样式表css

## 单页应用VS多页应用
![image](https://github.com/xingzhenli/Vue-Project/blob/master/travel-project/static/images/many-page.jpg)
![image](https://github.com/xingzhenli/Vue-Project/blob/master/travel-project/static/images/single-page.jpg)


- router-link是对a的封装，各种情况下如何使用a标签都封装在router-link中实现，能够同时兼容hashHistory和browserHistory
- 当我们修改了webpack的一些配置项的时候，我们一定要重启一下服务器