import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    sailings: [],
    cruises: []
  },
  actions: {
    loadSailings({commit}) {
      axios
        .get('https://api.myjson.com/bins/2gr36')
        .then(r => r.data)
        .then(results => {
          console.log(results)
           commit('SET_RESULTS', results)
        })
    }
  },
  mutations: {
    SET_RESULTS (state, results){
      state.sailings = results["sailings"]
      state.cruises = results["cruise_lines"]
    },
  },
  
}
)