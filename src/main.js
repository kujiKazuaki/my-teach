import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "./firebase.js" // これを追加

// import { BootstrapVue, IconsPlugin } from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"

// tailwind
// import "@/assets/CSS/tailwind.css"

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText,
} from "@fortawesome/vue-fontawesome"

import {
  faArrowRight,
  faBell,
  faCartShopping,
  faCheck,
  faGift,
  faHeart,
  faHippo,
  faMinus,
  faPen,
  faPhoneVolume,
  faPlus,
  faTrash,
  faUser,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
// import {} from "font-awesome-animation"

/* add icons to the library */
library.add(
  faUserSecret,
  faUser,
  faCartShopping,
  faHeart,
  faCheck,
  faArrowRight,
  faHippo,
  faBell,
  faGift,
  faPhoneVolume,
  faTwitter,
  faTrash,
  faPen,
  faPlus,
  faMinus
)

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .component("FALayers", FontAwesomeLayers)
  .component("FAText", FontAwesomeLayersText)
  .use(store)
  .use(router)
  .mount("#app")
