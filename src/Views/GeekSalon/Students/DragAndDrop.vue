<template>
  <h1>Drag & Drop(Mission)</h1>
  <section class="quiz_section">
    <p class="h4 text-danger mt-2">各番号に入るコードを選択肢から選択せよ</p>
    <img src="./images/DragAndDrop.png" alt="image" class="img" />
  </section>

  <section class="app_section">
    <div
      class="item_Area"
      @drop="onDrop($event, 1)"
      @dragenter.prevent
      @dragover.prevent
    >
      <div
        v-for="item in getList(1)"
        :key="item.id"
        class="drag_el"
        draggable="true"
        @dragstart="startDrag($event, item)"
      >
        {{ item.title }}
      </div>
    </div>
  </section>

  <section>
    <h5>回答</h5>
    <div class="answer_zones">
      <div
        class="answer_zone"
        @drop="onDrop($event, 2)"
        @dragenter.prevent
        @dragover.prevent
      >
        <p class="answer_number">１：</p>
        <div
          v-for="item in CategoryA"
          :key="item.id"
          class="drog_el"
          draggable="true"
          @dragstart="startDrag($event, item)"
        >
          {{ item.title }}
        </div>
      </div>

      <div
        class="answer_zone"
        @drop="onDrop($event, 'B')"
        @dragenter.prevent
        @dragover.prevent
      >
        <p class="answer_number">２：</p>
        <div
          v-for="item in CategoryB"
          :key="item.id"
          class="drog_el"
          draggable="true"
          @dragstart="startDrag($event, item)"
        >
          {{ item.title }}
        </div>
      </div>

      <div
        class="answer_zone"
        @drop="onDrop($event, 'C')"
        @dragenter.prevent
        @dragover.prevent
      >
        <p class="answer_number">３：</p>
        <div
          v-for="item in CategoryC"
          :key="item.id"
          class="drog_el"
          draggable="true"
          @dragstart="startDrag($event, item)"
        >
          {{ item.title }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 0, title: "#app", list: 1 },
        { id: 1, title: "$event", list: 1 },
        { id: 2, title: "methods", list: 1 },
      ],
    }
  },
  computed: {
    CategoryA() {
      return this.items.filter((item) => item.category == "A")
    },
    CategoryB() {
      return this.items.filter((item) => item.category == "B")
    },
    CategoryC() {
      return this.items.filter((item) => item.category == "C")
    },
  },
  methods: {
    getList(list) {
      // this.itemsの中の各オブジェクトの番号を特定する処理を描いている。
      // このコードを描くことで、v-for内のitemsに番号を振るだけで表示場所の特定が可能になる
      const item = this.items.filter((item) => item.list == list)
      return item
    },
    startDrag(event, item) {
      console.log(item.id)
      event.dataTransfer.dropEffect = "move"
      event.dataTransfer.effectAllowed = "move"
      // ドラッグする際に入れ込むデータを設定している。入れ込んでいるデータはitem番号
      event.dataTransfer.setData("itemID", item)
    },
    onDrop(event, list) {
      // ドロップしたアイテムを番号順に並べ替えする処理
      const itemId = event.dataTransfer.getData("itemID")
      const item = this.items.find((item) => item.id == itemId)
      console.log(item)
      item.list = list
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
  margin: 0 auto;
  display: flex;
  justify-content: center;
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
