import Vue from 'vue'
import App from '../client/view/App.vue'
import '../client/asset/iconfont/iconfont.css'
import ElementUI from 'element-ui'

Vue.config.productionTip = false

const vueBoot = () => {
  Vue.use(ElementUI)
  new Vue({
    render: h => h(App)
  }).$mount('#app')
}

vueBoot()
