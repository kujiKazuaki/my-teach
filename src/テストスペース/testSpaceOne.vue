<template>
  <div class="all_Container">
    <section class="console_Area">
      <p>{{ message.message }}</p>
      <button v-on:click="testBtn">test</button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "asdf",
    }
  },
  methods: {
    testBtn() {
      if (window.prompt("数字を入力してください", "42")) {
        let remain = { message: this.message }
        console.dir(remain)
        let remains = [{ message: this.message }]
        // console.dir(remains)
        // console.log(remains)
        console.log(typeof remains)
      }
    },
  },
}
</script>

<style scoped>
.all_Container {
  text-align: center;
}
</style>
