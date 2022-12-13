<template>
  <h1>Drag & Drop</h1>
  <div class="app">
    <div
      class="drop_zone"
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
    <div
      class="drop_zone"
      @drop="onDrop($event, 2)"
      @dragenter.prevent
      @dragover.prevent
    >
      <div
        v-for="item in getList(2)"
        :key="item.id"
        class="drag_el"
        draggable="true"
        @dragstart="startDrag($event, item)"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 0, title: "Item A", list: 1 },
        { id: 1, title: "Item B", list: 1 },
        { id: 2, title: "Item C", list: 2 },
      ],
    }
  },
  methods: {
    getList(list) {
      const item = this.items.filter((item) => item.list == list)
      return item
    },
    startDrag(event, item) {
      console.log(item)
      event.dataTransfer.dropEffect = "move"
      event.dataTransfer.effectAllowed = "move"
      event.dataTransfer.setData("itemID", item.id)
    },
    onDrop(event, list) {
      const itemID = event.dataTransfer.getData("itemID")
      const item = this.items.find((item) => item.id == itemID)
      item.list = list
    },
  },
}
</script>

<style scoped>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.drop_zone {
  width: 50%;
  margin: 50px auto;
  background-color: #ecf0f1;
  padding: 10px;
  min-height: 10px;
}
.drag_el {
  background-color: #3498db;
  color: white;
  padding: 5px;
  margin-bottom: 10px;
}
.drag_el:nth-last-of-type(1) {
  margin-bottom: 0;
}
</style>
