import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import App from './App'

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router: new VueRouter({routes}),
  render: h => h(App)
}).$mount('#app')
