import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// @ts-ignore
import KemUI from '../packages'
import 'element-ui/lib/theme-chalk/index.css'
import '../packages/theme/index.scss'
// import "../../packages/theme-default/lib/index.css";
Vue.config.productionTip = false
import Umytable from 'umy-table'

Vue.use(KemUI, {
  size: 'mini',
  Button: {
    size: 'mini',
  },
  Table:{
    align: "left",

    indexLabel: "序 号",
    mergeOption: {
      indexWidth: 100,
     },
    pageOption: {
      pageSizes: [5, 10, 20, 50],
      pageSize: 10,
      layout: "total,pager,prev, next",
    },
  }
 })
Vue.use(Umytable)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')