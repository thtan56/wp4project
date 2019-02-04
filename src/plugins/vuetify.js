import Vue from 'vue'
import Vuetify, { VLayout } from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: { VLayout },
  iconfont: 'md',  // 'md' || 'mdi' || 'fa' || 'fa4'
})

import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
