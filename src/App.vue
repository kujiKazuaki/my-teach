<template>
  <div class="allContainer m-1">
    <HeaderLink />
    <div class="section_Container">
      <router-view />
    </div>
  </div>
</template>

<script>
import HeaderLink from "@/components/HeaderLink.vue"

export default {
  components: {
    HeaderLink,
  },
}
</script>

<style>
.section_Container {
  text-align: center;
  list-style: none;
}
</style>
