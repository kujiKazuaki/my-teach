import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "./firebase.js" // これを追加

// import { BootstrapVue, IconsPlugin } from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"

createApp(App).use(store).use(router).mount("#app")
