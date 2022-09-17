import { createStore } from "vuex"
import createPersistedState from "vuex-persistedstate"

export default createStore({
  state() {},
  mutations: {},
  plugins: [createPersistedState()],
})
