import { createRouter, createWebHistory } from "vue-router"
import VueDirective from "@/教材/VueDirective.vue"
import slot from "@/教材/slot-props/slot/slot.vue"
import slotpropsApp from "@/教材/slot-props/Slot-propsApp.vue"
import GoogleLogin from "@/教材/ログイン認証/GoogleLogin.vue"
import classHenkou from "@/個人勉強用/classHenkou.vue"
import calendarApp from "@/個人勉強用/calendarApp.vue"
import ColorApp from "@/個人勉強用/ColorApp.vue"
import vuex from "@/個人勉強用/vuex.vue"
import counterApp from "@/個人勉強用/counterApp.vue"
import testSpaceOne from "@/テストスペース/testSpaceOne.vue"
import testSpace from "@/test.vue"
import VueDirectiveLevelUp from "@/教材/VueDirectiveLevelUp.vue"

const routes = [
  {
    path: "/App",
    name: "App",
    component: () => import("@/App.vue"),
  },
  {
    path: "/slotpropsApp",
    name: "slotpropsApp",
    component: slotpropsApp,
  },
  {
    path: "/testSpace",
    name: "testSpace",
    component: testSpace,
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
  {
    path: "/vuex",
    name: "vuex",
    component: vuex,
  },
  {
    path: "/counterApp",
    name: "counterApp",
    component: counterApp,
  },
  {
    path: "/testSpaceOne",
    name: "testSpaceOne",
    component: testSpaceOne,
  },
  {
    path: "/VueDirectiveLevelUp",
    name: "VueDirectiveLevelUp",
    component: VueDirectiveLevelUp,
  },
  {
    path: "/testPlay",
    name: "testPlay",
    component: () => import("@/個人勉強用/Vue超入門/testPlay.vue"),
  },
  {
    path: "/CountDown",
    name: "CountDown",
    component: () => import("@/個人勉強用/CountDown.vue"),
  },
  {
    path: "/ComApp",
    name: "ComApp",
    component: () => import("@/個人勉強用/Vue超入門/CompotisionAPI/ComApp.vue"),
  },
  {
    path: "/Router",
    name: "Router",
    component: () => import("@/個人勉強用/Vue超入門/Router.vue"),
  },
  {
    path: "/axios",
    name: "axios",
    component: () => import("@/個人勉強用/Vue超入門/axios.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
