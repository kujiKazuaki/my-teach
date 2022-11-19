<template>
  <div class="all_Container">
    <button @click="componentTrue = !componentTrue">変更</button>
    <p class="h3 m-2">{{ display }}</p>
    <CompilationAPI id="app" v-if="componentTrue" />
    <NewCompotisionAPI v-else />
  </div>
</template>

<script>
import CompilationAPI from "@/個人勉強用/Vue超入門/CompotisionAPI/CompotisionAPI.vue"
import NewCompotisionAPI from "./NewCompotisionAPI.vue"

export default {
  name: "ComApp",
  components: {
    CompilationAPI,
    NewCompotisionAPI,
  },
  data() {
    return {
      componentTrue: false,
    }
  },
  computed: {
    display() {
      let Tdisplay = ""
      if (!this.componentTrue) {
        Tdisplay = "serupバージョン"
        return Tdisplay
      } else {
        Tdisplay = "従来バージョン"
        return Tdisplay
      }
    },
  },
}
</script>
