// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store/store'
//实例化 store
//引入axios
import Axios from 'axios'
import iView from 'iview';
import 'iview/dist/styles/iview.css';


//修改原型链，全局使用axios,这样之后可在每个组件的methods中调用$axios命令完成数据请求
Vue.prototype.$axios = Axios
Axios.defaults.headers.post['Content-Type'] = 'application/application/json';
Vue.use(Vuex)
Vue.use(iView);
Vue.config.productionTip = false


//定义一个请求拦截器
Axios.interceptors.request.use(function (config) {
  setTimeout(function(){
    if (store.state.err == "") {
      store.state.isShow = true;
    } else if (store.state.err != "") {
       setTimeout(function () {
          store.state.isShow = false;
          alert(store.state.err)
          store.state.mShow = true;
       }, 1000)
    }
  },100)

  return config
})
//定义一个响应拦截器
Axios.interceptors.response.use(function (config) {
  store.state.isShow = false; //在这里对返回的数据进行处理
  setTimeout(function () {
    /* alert(store.state.status) */
    if (store.state.status == 200) {
      store.state.sShow = true;
      setTimeout(function () {
        store.state.sShow = false;
      }, 1000)
    }

  }, 100)

  return config
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
