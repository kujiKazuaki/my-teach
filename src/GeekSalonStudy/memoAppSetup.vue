<template>
  <div class="all_Area">
    <h1>Todoリスト(setup)</h1>
    <div>
      <input
        type="text"
        @keydown.enter="addMemo"
        v-model="inputMemo"
        placeholder="買うものを書いてね"
      />
      <div>
        <button @click="addBtn">アイテムを追加</button>
        <button @click="selectBtn" class="m-2">選択削除</button>
        <button @click="allDeleteBtn">すべて消す</button>
      </div>
    </div>
    <ul>
      <li class="memo" v-for="(item, itemId) in items" :key="itemId">
        <label>
          <input type="checkbox" v-model="item.done" />
          <span :class="{ done: item.done }" class="message">
            {{ item.text }}
          </span>
          <button class="deleteBtn" @click="deleteBtn(itemId)">削除</button>
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from "vue"
import { collection, addDoc } from "firebase/firestore"
import { db } from "@/firebase"
export default {
  setup() {
    const dataReac = reactive({ inputMemo: "", items: [] })
    let count = ref(0)

    const addMemo = async () => {
      if (dataReac.inputMemo !== "") {
        dataReac.items.push({ text: dataReac.inputMemo })
        const docRef = await addDoc(collection(db, "memoAppSetup"), {
          text: dataReac.inputMemo,
        })
        console.log(docRef)
        dataReac.inputMemo = ""
      }
    }
    const addBtn = () => {
      if (dataReac.inputMemo !== "") {
        dataReac.items.push({ text: dataReac.inputMemo })
        dataReac.inputMemo = ""
      }
    }
    const selectBtn = () => {
      let remains = []
      for (let i = 0; i < dataReac.items.length; i++) {
        if (!dataReac.items[i].done) {
          remains.push(dataReac.items[i])
        }
      }
      dataReac.items = remains
    }
    const allDeleteBtn = () => {
      dataReac.items = []
    }
    const deleteBtn = (index) => {
      dataReac.items.splice(index, 1)
      console.log()
    }

    let { inputMemo, items } = toRefs(dataReac)
    return {
      dataReac,
      count,
      inputMemo,
      items,
      addMemo,
      addBtn,
      selectBtn,
      allDeleteBtn,
      deleteBtn,
    }
  },
}
</script>

<style scoped>
button {
  background-color: pink;
  border: 1px solid orange;
  border-radius: 5%;
  font-size: 15px;
  font-weight: bold;
}
ul {
  list-style: none;
  border: 2px solid black;
  min-height: 450px;
  min-width: 80%;
  overflow: auto;
}
.memo {
  border: 2px solid black;
  margin: 5px auto;
  max-width: 90%;
  min-height: 30px;
  overflow: y;
  overflow-wrap: break-word;
  word-wrap: break-word;
  display: flex;
}
input[type="checkbox"] {
  margin: 5px;
  margin-right: 10px;
}
.message {
  font-size: large;
  font-weight: bold;
}
.deleteBtn {
  position: relative;
  left: 200px;
}
</style>
