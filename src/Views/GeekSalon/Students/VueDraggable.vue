<template>
  <h1>Drag & Drop(Mission)</h1>
  <section class="quiz_section">
    <p class="h4 text-danger mt-2">各番号に入るコードを選択肢から選択せよ</p>
    <img src="./images/DragAndDrop.png" alt="image" class="img" />
  </section>

  <section class="app_section">
    <draggable
      class="item_Area"
      v-model="items"
      item-key="no"
      tag="div"
      group="ITEMS"
    >
      <template #item="{ element }">
        <div class="drag_el">{{ element.title }}</div>
      </template>
    </draggable>

    <div class="answer_button">
      <button @click="answer()" class="btn btn-danger">回答</button>
    </div>
  </section>

  <section class="finalAnswer_section">
    <div class="finalAnswer">
      <p>{{ finalAnswer }}</p>
    </div>
  </section>

  <section>
    <div class="answer_zones">
      <div class="answer_section">
        <p class="answer_number">１：</p>
        <draggable
          class="answer_zone"
          v-model="item1"
          item-key="no"
          tag="div"
          group="ITEMS"
        >
          <template #item="{ element }">
            <div class="drog_el">{{ element.title }}</div>
          </template>
        </draggable>
      </div>

      <div class="answer_section">
        <p class="answer_number">２：</p>
        <draggable
          class="answer_zone"
          v-model="item2"
          item-key="no"
          tag="div"
          group="ITEMS"
        >
          <template #item="{ element }">
            <div class="drog_el">{{ element.title }}</div>
          </template>
        </draggable>
      </div>

      <div class="answer_section">
        <p class="answer_number">３：</p>
        <draggable
          class="answer_zone"
          v-model="item3"
          item-key="no"
          tag="div"
          group="ITEMS"
        >
          <template #item="{ element }">
            <div class="drog_el">{{ element.title }}</div>
          </template>
        </draggable>
      </div>
    </div>
  </section>
</template>

<script>
import draggable from "vuedraggable"

export default {
  components: {
    draggable,
  },
  data() {
    return {
      finalAnswer: "",
      items: [
        { id: 0, title: "#app", list: 1 },
        { id: 1, title: "$event", list: 1 },
        { id: 2, title: "methods", list: 1 },
      ],
      item1: [],
      item2: [],
      item3: [],
    }
  },
  computed: {},
  methods: {
    answer() {
      // 下記3行を行わず直接if文に書くと、if文参照時にそもそもthis.item1[0]が存在しない場合、
      // エラーが起きてelseのほうが起こらない
      let item1_correct = this.item1.filter((item) => item.title === "$event")
      let item2_correct = this.item2.filter((item) => item.title === "methods")
      let item3_correct = this.item3.filter((item) => item.title === "#app")

      if (item1_correct && item2_correct && item3_correct) {
        this.finalAnswer = "正解！"
        console.log("正解")
      } else {
        this.finalAnswer = "ちがう😊"
      }
    },
  },
}
</script>

<style scoped>
.quiz_section {
  border: 2px solid blue;
  min-height: 200px;
}
.app_section {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img {
  width: 50%;
  margin: 5px 0 5px 0;
}
.item_Area {
  border: 2px solid rgb(255, 186, 58);
  background-color: rgb(255, 216, 145);
  width: 60%;
  max-width: 600px;
  min-height: 50px;
  /* margin: 0 auto; */
  display: flex;
  justify-content: center;
}
.answer_button {
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
}
.answer_button:active {
  transform: scale(0.98);
}
.finalAnswer_section {
  display: flex;
  justify-content: center;
}
.finalAnswer {
  border: 2px solid rgb(201, 200, 200);
  background-color: rgb(231, 231, 231);
  width: 50%;
  min-height: 50px;
  margin: 7px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.finalAnswer p {
  font-size: 20px;
  font-weight: bold;
}
.drag_el {
  background-color: #3498db;
  color: white;
  width: 100px;
  height: 100%;
  font-size: 20px;
  font-weight: bold;
  margin: 3px 5px 3px 5px;
  padding: 5px;
}
.drag_el:nth-last-of-type(1) {
  margin-bottom: 0;
}
.answer_zones {
  border: 2px solid black;
  max-width: 250px;
  margin: 0 auto;
  margin-bottom: 30px;
}
.answer_zone {
  border: 2px solid rgb(255, 49, 49);
  background-color: rgba(255, 176, 176, 0.918);
  margin: 5px;
  display: flex;
  align-items: center;
  min-height: 50px;
  width: 100%;
}
.answer_section {
  display: flex;
  align-items: center;
}
.answer_number {
  /* border: 2px solid green; */
  font-size: 20px;
  font-weight: bold;
  margin: 3px 5px 3px 5px;
}
.drog_el {
  background-color: #3498db;
  color: white;
  width: 100px;
  height: 100%;
  font-size: 20px;
  font-weight: bold;
  margin: 3px 0;
  margin-left: 20px;
  padding: 5px;
}
.drog_el:nth-last-of-type(1) {
  margin-bottom: 0;
}
</style>
