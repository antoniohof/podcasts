import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import * as VueGoogleMaps from 'super-maps'
import AlloyFinger from 'alloyfinger'
import AlloyFingerPlugin from 'alloyfinger/vue/alloy_finger.vue'
import i18n from './assets/js/i18n'
import VueClipboard from 'vue-clipboard2'
import VTooltip from 'v-tooltip'
import VTolltipOptions from './assets/js/vTooltipOptions'
import Vuex from 'vuex'

// podcasts version
var pjson = require('./../package.json')
console.log('podcasts version:', pjson.version)
// require('./assets/js/bufferGeometry/BufferGeometryUtils.js')
require('./assets/js/branch/branch.js')

Vue.router = router
Vue.use(Vuex)

Vue.use(VueClipboard)

Vue.use(AlloyFingerPlugin, {
  AlloyFinger
})

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.MAPS_KEY,
    libraries: 'places'
  }
})

Vue.use(VTooltip, VTolltipOptions)

Vue.config.productionTip = true
Vue.config.debug = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
