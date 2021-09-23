import Vue from 'vue'
import Vuex from 'vuex'
import category from './modules/category'
import newList from './modules/newList'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    category,
    newList
  }
})
