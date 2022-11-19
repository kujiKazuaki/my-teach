<template>
  <div @mousemove="updateMouse" class="all_Container m-5 bg-dark text-light">
    <div class="count">
      Count is {{ count }}, count * {{ times }} is {{ multiplicationResult }}
      <button @click="increment">+</button>
    </div>
    <div>Mouse is at {{ mousePosition.x }}, {{ mousePosition.y }}</div>
  </div>
</template>

<script>
export default {
  props: {
    times: {
      type: Number,
      default: 2,
    },
  },
  data() {
    return {
      mousePosition: {
        x: 0,
        y: 0,
      },
      count: 0,
    }
  },
  computed: {
    multiplicationResult() {
      return this.count * this.times
    },
  },
  watch: {
    count() {
      setTimeout(() => {
        alert("3 seconds have passed since the value change")
      }, 3000)
    },
  },
  methods: {
    increment() {
      this.count += 1
    },
    updateMouse(event) {
      this.mousePosition.x = event.clientX
      this.mousePosition.y = event.clientY
    },
  },
}
</script>

<style scoped>
.all_Container {
  text-align: center;
  border: 2px solid red;
  height: 200px;
}
</style>
