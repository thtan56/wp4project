// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'           //                             src
import App from './App'         //                     main.js--!--styles
import router from './router'   //
import './styles/app.css';      
import './style.scss';

import './plugins/vuetify';
import './plugins/vue-axios';
//import './plugins/vue-table2'
import * as Vuetable from 'vuetable-2'
Vue.component("vuetable", Vuetable.Vuetable)
Vue.component("vuetable-pagination", Vuetable.VuetablePagination)
//======================================================
import moment from 'moment';      
import VueMomentLib from 'vue-moment-lib';
Vue.use(VueMomentLib);
Vue.filter('myDate', function (date) { return moment(date).format('YYYY-MM-DD') }); 
//===========================================
// global filters
import './filters/myGlobalFilters.js';
import _ from 'lodash';

Vue.config.productionTip = false
/* eslint-disable no-new */
const webstore = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
