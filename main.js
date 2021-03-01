import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
import faker from 'faker'

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
