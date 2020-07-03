import Vue from 'vue'
import PopupPage from './components/popup/index.vue'

Vue.config.devtools = false

new Vue({
  el: '#popup',
  components: {
    PopupPage
  },
  template: '<PopupPage />'
})
