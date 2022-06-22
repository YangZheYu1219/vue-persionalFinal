import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state: {
    cart: []
  },
  getters: {
  },
  //  更改state資料用的函式
  mutations: {
    addCart(state, data) {
      return state.cart.push(data)
    },
    remove(state, data) {
      return state.cart.splice(data, 1)
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
