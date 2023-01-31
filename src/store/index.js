import { createStore } from "vuex"
import createPersistedState from "vuex-persistedstate"

export default createStore({
  state() {
    return {
      message: "this is store data.",
      counter: 0,
    }
  },
  mutations: {
    count: (state, n) => {
      state.counter += n
    },
    say: (state, msg) => {
      state.message = msg
    },
    reset: (state) => {
      state.counter = 0
    },
  },
  actions: {
    doit: (context) => {
      let n = Math.floor(Math.random() * 100)
      context.commit("count", n)
      context.commit("say", "add" + n + "!")
    },
  },
  plugins: [createPersistedState()],
})
