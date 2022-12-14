<template>
  <div class="all_Container">
    <h1>Calculation</h1>
    <div v-if="answer">
      <h2>正解!</h2>
      <button v-on:click="Page5commentaryView">次へ</button>
    </div>
    <p class="h3 text-danger">
      {{ num }}
    </p>
  </div>
  <div class="calculation_Area">
    <button class="mx-1 btn btn-primary" @click="plusbutton">+2</button>
    <button class="mx-1 btn btn-danger" @click="minusbutton">-2</button>
    <button class="mx-1 btn btn-warning" @click="multipliedbutton">×2</button>
    <button class="mx-1 btn btn-info" @click="division()">÷2</button>
  </div>
  <div class="SpecialCalculation_Area m-2">
    <button
      class="mx-1 btn btn-danger"
      @click="kaijoBtn()"
      :disabled="disabled"
    >
      !
    </button>
    <button class="mx-1 btn btn-info" @click="rootBtn()">√</button>
    <button class="mx-1 btn btn-secondary" @click="shosuten()">
      小数点消す
    </button>
  </div>
  <div class="mt-4">
    <button class="fs-3 fw-bold btn btn-success" @click="resetbutton">
      リセット
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "count",
      count: 0,
      nextpage: true,
    }
  },
  computed: {
    num() {
      let count = this.count
      return count
    },
    answer() {
      if (this.count === 255) {
        return true
      } else {
        return false
      }
    },
    disabled() {
      if (this.count <= 0 || this.count > 10) {
        return true
      } else {
        return false
      }
    },
  },
  methods: {
    plusbutton: function () {
      this.count += 2
    },
    multipliedbutton: function () {
      this.count *= 2
    },
    minusbutton: function () {
      this.count -= 2
    },
    resetbutton: function () {
      this.count *= 0
    },
    division() {
      this.count /= 2
    },
    kaijoBtn() {
      let n = this.count
      let set = n
      for (let i = set - 1; i > 0; i--) {
        set *= i
      }
      console.log(set)
      return (this.count = set)
    },
    rootBtn() {
      this.count = Math.sqrt(this.count)
    },
    shosuten() {
      this.count = parseInt(this.count, 10)
    },
    Page5commentaryView() {
      this.$router.push("/")
    },
  },
}
</script>
