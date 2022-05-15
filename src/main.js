import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import moment from 'moment'
var axios =require('axios');
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)


Vue.prototype.$axios = axios;
axios.defaults.baseURL="http://127.0.0.1:3000/api/"
//token
axios.interceptors.request.use(function (res){
  let token=localStorage.getItem('token');
  res.headers.Authorization=token;
  return res;
});
//过滤时间
Vue.filter("create_time", function(value) {
  return moment(value).format("yyyy-MM-DD HH:mm:ss");
});
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
