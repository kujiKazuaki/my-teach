import { createRouter, createWebHistory } from "vue-router"
import VueDirective from "@/教材/VueDirective.vue"
import slot from "@/教材/slot-props/slot/slot.vue"
import testApp from "@/教材/slot-props/testApp.vue"
import GoogleLogin from "@/教材/ログイン認証/GoogleLogin.vue"

const routes = [
  {
    path: "/",
    name: "testApp",
    component: testApp,
  },
  {
    path: "/VueDirective",
    name: "VueDirective",
    component: VueDirective,
  },
  {
    path: "/slot",
    name: "slot",
    component: slot,
  },
  {
    path: "/GoogleLogin",
    name: "GoogleLogin",
    component: GoogleLogin,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
