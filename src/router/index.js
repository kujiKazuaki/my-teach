import { createRouter, createWebHistory } from "vue-router"
import VueDirective from "@/Views/GeekSalon/Teaching/VueDirective.vue"
import slot from "@/Views/GeekSalon/Teaching/slot_props/slot/slot.vue"
import slotpropsApp from "@/Views/GeekSalon/Teaching/slot_props/Slot-propsApp.vue"
import GoogleLogin from "@/Views/Firebase/Login/GoogleLogin.vue"
import classHenkou from "@/Views/Others/classHenkou.vue"
import calendarApp from "@/Views/Others/calendarApp.vue"
import ColorApp from "@/Views/Others/ColorApp.vue"
import vuex from "@/Views/Others/vuex.vue"
import counterApp from "@/Views/Others/counterApp.vue"
import sortMethods from "@/Views/GeekSalon/Students/sortMethods.vue"
import VueDirectiveLevelUp from "@/Views/GeekSalon/Teaching/VueDirectiveLevelUp.vue"

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
    path: "/sortMethods",
    name: "sortMethods",
    component: sortMethods,
  },
  {
    path: "/VueDirectiveLevelUp",
    name: "VueDirectiveLevelUp",
    component: VueDirectiveLevelUp,
  },
  {
    path: "/",
    name: "testPlay",
    component: () => import("@/Views/VueChoNyumon/testPlay.vue"),
  },
  {
    path: "/CountDown",
    name: "CountDown",
    component: () => import("@/Views/Others/CountDown.vue"),
  },
  {
    path: "/ComApp",
    name: "ComApp",
    component: () => import("@/Views/VueChoNyumon/CompositionAPI/ComApp.vue"),
  },
  {
    path: "/Router",
    name: "Router",
    component: () => import("@/Views/VueChoNyumon/Router.vue"),
  },
  {
    path: "/axios",
    name: "axios",
    component: () => import("@/Views/VueChoNyumon/axios.vue"),
  },
  {
    path: "/JSONmemoApp",
    name: "JSONmemoApp",
    component: () => import("@/Views/GeekSalon/demo_teamApp/JSONmemoApp.vue"),
  },
  {
    path: "/FirebaseMemoApp",
    name: "FirebaseMemoApp",
    component: () =>
      import("@/Views/GeekSalon/demo_teamApp/FirebaseMemoApp.vue"),
  },
  {
    path: "/memoAppSetup",
    name: "memoAppSetup",
    component: () => import("@/Views/GeekSalon/demo_teamApp/memoAppSetup.vue"),
  },
  {
    path: "/Bootstrap",
    name: "Bootstrap",
    component: () => import("@/Views/CSS/Bootstrap.vue"),
  },
  {
    path: "/awesome",
    name: "awesome",
    component: () => import("@/Views/CSS/awesome.vue"),
  },
  {
    path: "/paletteApp",
    name: "paletteApp",
    component: () => import("@/Views/GeekSalon/demo_teamApp/paletteApp.vue"),
  },
  {
    path: "/GoodMemos",
    name: "GoodMemos",
    component: () => import("@/Views/Firebase/GoodMemos/GoodMemos.vue"),
  },
  {
    path: "/Tailwind",
    name: "Tailwind",
    component: () => import("@/Views/CSS/Tailwind.vue"),
  },
  {
    path: "/DrugAndDrop_setup",
    name: "DrugAndDrop_setup",
    component: () => import("@/Views/GeekSalon/Students/DragAndDrop.vue"),
  },
  {
    path: "/DragAndDrop_other",
    name: "DragAndDrop_other",
    component: () => import("@/Views/Others/DragAndDrop.vue"),
  },
  {
    path: "/calculation",
    name: "calculation",
    component: () => import("@/Views/Others/calculation.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: () => import("@/Views/test.vue"),
  },
  {
    path: "/DragAndDrop",
    name: "DragAndDrop",
    component: () => import("@/Views/GeekSalon/Students/DragAndDrop.vue"),
  },
  {
    path: "/VueDraggable",
    name: "VueDraggable",
    component: () => import("@/Views/Others/VueDraggable.vue"),
  },
  {
    path: "/Geek_VueDraggable",
    name: "Geek_VueDraggable",
    component: () => import("@/Views/GeekSalon/Students/VueDraggable.vue"),
  },
  {
    path: "/ThingIWantToDo",
    name: "ThingIWantToDo",
    component: () => import("@/Views/Others/ThingIWantToDo.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
