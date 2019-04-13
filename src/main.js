import Vue from 'vue'
import LaMa from './components/LaMa'

Vue.config.productionTip = false

new Vue({
  render: h => h(LaMa),
}).$mount('LaMa')
