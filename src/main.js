import Vue from 'vue'
import './plugins/vuetify'
import './plugins/gmaps'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

document.addEventListener("deviceready", () => {
  screen.orientation.lock('portrait');
  Vue.config.productionTip = false
  
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}, false);



