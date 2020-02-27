import Vue from 'vue'
import App from './App'
import waterfall from "vue-waterfall2"
Vue.use(waterfall)


Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
