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
.allContainer {
  user-select: none;
}
.section_Container {
  text-align: center;
  list-style: none;
}

@media screen and (max-width: 700px) {
  .allContainer {
    width: 700px;
    position: absolute;
    transform-origin: 0% 0%;
  }
}
</style>
