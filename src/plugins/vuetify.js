import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.config.devtools = false
export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  }
})
