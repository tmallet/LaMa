import Vue from 'vue'
import LaMa from './components/LaMa'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMobileAlt, faTabletAlt, faLaptop, faDesktop, faTv, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueHighlightJS from 'vue-highlightjs'

import 'highlight.js/styles/atom-one-dark.css';

library.add(faMobileAlt, faTabletAlt, faLaptop, faDesktop, faTv, faTimes)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueHighlightJS)

Vue.config.productionTip = false

new Vue({
  render: h => h(LaMa),
}).$mount('LaMa')
