import { createStore } from "vuex"

export default createStore({
  state: {
    // 使いたいデータを書く
    user: null,
    name: null,
    image: null,
  },
  getters: {},
  mutations: {
    // stateの中にある値を更新するコードを書く
    updateUserInfo(state, user) {
      state.user = user
    },
    updateUserName(state, userName) {
      state.name = userName
    },
    updateUserImage(state, userImage) {
      state.image = userImage
    },
  },
  actions: {},
  modules: {},
})
