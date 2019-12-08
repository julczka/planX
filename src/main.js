import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '@desislavsd/vue-select/dist/vue-select.css'
import VueSelect from '@desislavsd/vue-select'




Vue.config.productionTip = false


Vue.use(VueSelect, { /* options */ } ) 

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
