import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import * as VueGoogleMaps from 'vue2-google-maps'
import AlloyFinger from 'alloyfinger'
import AlloyFingerPlugin from 'alloyfinger/vue/alloy_finger.vue'
import i18n from './assets/js/i18n'
import VueClipboard from 'vue-clipboard2'
import VTooltip from 'v-tooltip'
import VTolltipOptions from './assets/js/vTooltipOptions'
import Vuex from 'vuex'

import {
  Col,
  Row,
  Menu,
  Input,
  Container,
  Header,
  Main,
  Footer,
  ButtonGroup,
  Button,
  Loading,
  MessageBox,
  Notification,
  Message,
  Slider,
  Card
} from 'element-ui'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faHeart,
  faPlay,
  faComment,
  faUsers,
  faMapMarkerAlt,
  faGlobe,
  faPlayCircle,
  faStopCircle,
  faStop,
  faPause
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faHeart,
  faPlay,
  faComment,
  faUsers,
  faMapMarkerAlt,
  faGlobe,
  faPlayCircle,
  faStopCircle,
  faPause,
  faStop
)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Col)
Vue.use(Row)
Vue.use(Menu)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)
Vue.use(ButtonGroup)
Vue.use(Button)
Vue.use(Slider)
Vue.use(Card)
Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
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
