import { createRouter, createWebHistory } from "vue-router"
import VueDirective from "@/教材/VueDirective.vue"
import slot from "@/教材/slot-props/slot/slot.vue"
import slotpropsApp from "@/教材/slot-props/Slot-propsApp.vue"
import GoogleLogin from "@/教材/ログイン認証/GoogleLogin.vue"
import classHenkou from "@/個人勉強用/classHenkou.vue"
import calendarApp from "@/個人勉強用/calendarApp.vue"
import ColorApp from "@/個人勉強用/ColorApp.vue"

const routes = [
  {
    path: "/slotpropsApp",
    name: "slotpropsApp",
    component: slotpropsApp,
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
  {
    path: "/classHenkou",
    name: "classHenkou",
    component: classHenkou,
  },
  {
    path: "/calendarApp",
    name: "calendarApp",
    component: calendarApp,
  },
  {
    path: "/ColorApp",
    name: "ColorApp",
    component: ColorApp,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
