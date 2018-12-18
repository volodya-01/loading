import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
     isShow: false,
     sShow: false,
     mShow:false,
     status:0,
     err:""
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,
   gbstatus(state,a) {
        state.status= a
   },
   errstatus(state, b) {
state.err=b
   }
  }
}) 