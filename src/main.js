import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 按需加载
import { Button, NavBar, Field, Toast, Cell, CellGroup } from 'vant'

import '@/style/index.less'
Vue.use(Button)
  .use(NavBar)
  .use(Field)
  .use(Toast)
  .use(Cell)
  .use(CellGroup)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
