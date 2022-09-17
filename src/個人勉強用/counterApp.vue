<template>
  <div class="allContainer">
    <h1>カウンターアプリ</h1>

    <!-- created+mountedカウンターアプリ 始まり-->
    <section class="createdmounted">
      <h3>
        createdとmountedの違いを知りながら<br />カウンターアプリを作成する
      </h3>
      <div id="app">
        <p>{{ message }}</p>
        <hr />
        <button @click="doAction()">Stop</button>
      </div>
    </section>
    <!-- created+mountedカウンターアプリ 終わり -->
  </div>
</template>

<script>
let timer = null
export default {
  data() {
    return {
      message: "",
    }
  },
  created() {
    this.message = "Hello Vue!"
    this.count = 0
  },
  mounted() {
    timer = setInterval(() => {
      this.count++
      this.message = "Count: " + this.count
    }, 1000)
  },
  methods: {
    doAction() {
      clearInterval(timer)
    },
  },
}
</script>

<style scoped>
.allContainer {
  text-align: center;
}
</style>
