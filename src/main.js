// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuebar from 'vuebar'
import ElementUI from 'element-ui'
import 'normalize.css/normalize.css'
import 'nprogress/nprogress.css'
import '@/assets/styles/index.less'
import '@/assets/styles/element-ui.less'
import App from './App'
import '@/assets/iconfont-default'
import router from './router/'
import store from './store/'

// 设置反向代理，前端请求默认发送到 http://localhost:8080/api
var axios = require('axios')
axios.defaults.baseURL = 'http://localhost:8080'
// 全局注册，之后可在其他组件中通过 this.$axios 发送数据
Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.use(Vuebar)
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
