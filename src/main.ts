import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import VueAnalytics from 'vue-analytics';

Vue.config.productionTip = false;

Vue.use(Vuetify, {
  theme: {
    primary: '#6190E8',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF4949',
    info: '#78A4FA',
    success: '#13CE66',
    warning: '#FFC82C',
  },
  iconfont: 'mdi',
});


Vue.use(VueAnalytics, {
  id: process.env.VUE_APP_GA,
});


new Vue({
  render: (h) => h(App),
}).$mount('#app');
