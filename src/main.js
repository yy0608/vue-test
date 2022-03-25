import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$http = {
  // get: () => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       console.log(22222222222222)
  //       resolve()
  //       console.log(33333333333333)
  //     }, 1000)
  //   })
  // }
  get: () => {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(2)
        resolve()
      }, 1000)
    })
  }
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
