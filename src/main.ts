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
