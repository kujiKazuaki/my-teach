<template>
  <h1>Vue パレット</h1>
  <div class="app">
    <!-- メインパレット -->
    <div class="mb-2">
      <p class="h4">ミッション</p>
      <p>パレットの謎を解け！</p>
      <p class="h4">ヒント</p>
      <p>green = 10 + 30* 4 + 20</p>
    </div>
    <div class="m-2">
      <input type="text" v-model="answer" @keydown.enter="answerBtn()" />
      <button @click="answerBtn()" class="answerBtn">回答</button>
      <div class="feedback">
        <p>{{ answerTxt }}</p>
      </div>
      <div>
        <button @click="nextPage" v-if="isCorrect" class="nextBtn mt-1">
          回答へ進む
        </button>
      </div>
    </div>

    <!-- 表示部分 -->
    <div class="border-primary">
      <strong>alpha</strong>
      <input type="range" min="0" max="1" step="0.1" v-model="alpha" /><br />
      <p class="text-white bg-dark">
        rangeタイプだとv-modelがうまく作動しない。
      </p>
      <strong>green</strong>
      <input type="number" min="0" max="255" v-model="greenNum" />
      <hr />
    </div>
    <p>rgba( {{ red }}, {{ greenNum }}, {{ blue }}, {{ alpha }} )</p>

    <div
      class="palette"
      v-on:mousemove="changeColor"
      v-on:click="selectColor"
      v-bind:style="{
        backgroundColor: `rgba(${red}, ${greenNum}, ${blue}, ${alpha})`,
      }"
    >
      <p
        class="password"
        v-if="passDisplay"
        @mousemove="changeAlpha"
        :style="{
          color: `rgba(200, 150, 0, ${alphaNum})`,
        }"
      >
        password
      </p>
    </div>

    <!-- パレットライブラリ -->
    <div class="colors-container">
      <div
        class="mini-palette"
        v-for="(miniPalette, index) in miniPalettes"
        :key="index"
        v-bind:style="{
          backgroundColor: `rgba(${miniPalette.red}, ${miniPalette.green}, ${miniPalette.blue}, ${miniPalette.alpha})`,
        }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      red: 0,
      blue: 0,
      greenNum: 50,
      alpha: 0.5,
      miniPalettes: [],
      alphaNum: 0,
      answer: "",
      answerTxt: "",
      nextMsg: "",
      isCorrect: false,
    }
  },
  computed: {
    passDisplay() {
      if (this.greenNum === 150) {
        return true
      } else {
        return false
      }
    },
  },
  methods: {
    changeColor(e) {
      this.red = e.offsetX
      this.blue = e.offsetY
      this.alphaNum = e.offsetY * 0.00392
    },
    changeAlpha(f) {
      this.alphaNum = f.offsetY
    },
    answerBtn() {
      const answer = this.answer
      if (answer === "password") {
        this.answerTxt = "正解！"
        this.isCorrect = true
      } else {
        this.answerTxt = "不正解((´；ω；`)"
      }
    },
    nextPage() {
      this.$router.push("/memoAppSetup")
    },
    selectColor() {
      this.miniPalettes.push({
        red: this.red,
        green: this.greenNum,
        blue: this.blue,
        alpha: this.alpha,
      })
    },
  },
}
</script>

<style scoped>
.app {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
}

.palette {
  width: 255px;
  height: 255px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mini-palette {
  min-width: 60px;
  height: 60px;
}

.colors-container {
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  padding-top: 8px;
  /* background-color: rgba(106, 168, 73, 0.686); */
}

.password {
  font-size: 20px;
  font-weight: bold;
  /* color: rgba(51, 112, 121, 0.4); */
}

.answerBtn {
  margin-left: 5px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
}
.answerBtn:hover {
  filter: brightness(0.9);
  cursor: pointer;
}
.answerBtn:active {
  transform: scale(0.98);
}
.feedback {
  margin-top: 5px;
  border: 2px solid black;
  height: 30px;
  background-color: rgb(240, 239, 239);
}
.nextBtn {
  border-radius: 5px;
  font-size: 20px;
  font-weight: bold;
}
</style>
