<template>
  <div class="allContainer" style="text-align: center">
    <h1>「text-size」or「text-color」</h1>
    <input v-model="inputclass" />
    <div>
      <p v-bind:class="inputText">変化</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputclass: "",
    }
  },
  computed: {
    inputText() {
      if (this.inputclass === "text-size") {
        return "text-size"
      } else if (this.inputclass === "text-color") {
        return "text-color"
      } else {
        return console.error("エラー")
      }
    },
  },
}
</script>

<style scoped>
.text-size {
  font-size: 50px;
}

.text-color {
  color: red;
}
</style>

<!-- <template>
  <div class="allContainer" style="text-align: center">
    <h1>「text-size」or「text-color」</h1>
    <input v-model="inputclass" />
    <div>
      <p v-bind:class="inputclass">変化</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputclass: "",
    }
  },
}
</script>

<style scoped>
.text-size {
  font-size: 50px;
}

.text-color {
  color: red;
}
</style> -->
