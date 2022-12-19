<template>
  <p class="h4 text-primary">Vue.Draggable</p>
  <div>
    <section>
      <div id="box1" class="box">
        <draggable v-model="items" item-key="no" tag="ul" group="ITEMS">
          <template #item="{ element }">
            <li>{{ element.name }}-(No.{{ element.no }})</li>
          </template>
        </draggable>
      </div>
      <div id="box2" class="box">
        <draggable v-model="items2" item-key="no" tag="ul" group="ITEMS">
          <template #item="{ element }">
            <li>{{ element.name }}-(No.{{ element.no }})</li>
          </template>
        </draggable>
      </div>
    </section>

    <section class="donyu">
      <p class="h4 mt-2 text-danger">
        導入方法
        <a class="h5 ms-2" href="https://www.kabanoki.net/9532/" target="_blank"
          >参考URL</a
        >
        <a
          class="h5 ms-2"
          href="https://github.com/SortableJS/vue.draggable.next?ref=kabanoki.net"
          target="_blank"
          >GitHub</a
        >
      </p>
      <p>①ターミナルで「npm i -S vuedraggable@next」</p>
      <p>
        ②script内で 「import draggable from 'vuedraggable'」<br />
        export default { components: { draggable,},}
      </p>
    </section>
  </div>
</template>

<script>
import draggable from "vuedraggable"

export default {
  components: {
    draggable,
  },
  data() {
    return {
      items: [
        { no: 1, name: "キャベツ", categoryNo: "1" },
        { no: 2, name: "ステーキ", categoryNo: "2" },
      ],
      items2: [
        { no: 5, name: "きゅうり", categoryNo: "1" },
        { no: 6, name: "ハンバーグ", categoryNo: "2" },
      ],
    }
  },
}
</script>

<style>
.box {
  width: 50%;
  float: left;
  padding: 20px 0;
}
#box1 {
  background-color: #fdd;
}
#box2 {
  background-color: #ddf;
}
ul {
  list-style-type: none;
  padding-right: 2rem;
}
li {
  cursor: pointer;
  padding: 10px;
  border: solid #ddd 1px;
  background-color: #fff;
}
.kaisetsu {
  border: 2px solid red;
  position: relative;
  /* top: 50px; */
}
.donyu {
  /* border: 2px solid blue; */
}
</style>
