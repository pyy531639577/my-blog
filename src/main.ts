import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import config from '@/config/index'

// 引入element-ui组件
import { Button } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入gitalk评论模块
import 'gitalk/dist/gitalk.css'

// @ts-ignore
import vuetify from '@/utils/vuetify.js'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Button)
Vue.config.productionTip = false
Vue.prototype.$config = config
new Vue({
  // @ts-ignore
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

const labelStyle = 'color:#FFF;line-height:22px;background:#D68FE9;'
const siteUrl = 'http://juwairendian.gitee.io/blog/'
const bg = 'https://raw.githubusercontent.com/chanshiyucx/poi/master/2019/reimu.png'
console.info(`%c ${config.title} %c`, `${labelStyle}`, '', window.location.origin)
console.info('%c Theme %c', `${labelStyle}`, '', siteUrl)
console.info('┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓')
console.info('┃   发现控制台报错请务必联系博主     ┃')
console.info('┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛')
console.log(
  '%c ',
  `
  background:url(${bg}) no-repeat center;
  background-size:200px;
  margin:5px 0;
  padding:0 0 162px 200px;
  border-radius:10px;
  overflow:hidden;
  `
)
