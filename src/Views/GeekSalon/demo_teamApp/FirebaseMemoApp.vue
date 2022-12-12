<template>
  <div class="all_Area">
    <h1>Todoリスト(Firebase)</h1>
    <div>
      <input
        type="text"
        @keydown.enter="addBtn()"
        v-model="inputMemo"
        placeholder="買うものを書いてね"
      />
      <div>
        <button type="button" @click="addBtn()" class="btn btn-primary">
          アイテムを追加
        </button>
        <button type="button" @click="selectBtn()" class="btn btn-success">
          選択削除
        </button>
        <button type="button" @click="allDeleteBtn()" class="btn btn-danger">
          すべて消す
        </button>
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
import { setDoc, doc, Timestamp } from "@firebase/firestore"
import { db } from "@/firebase"
export default {
  data() {
    return {
      inputMemo: "",
      items: [],
    }
  },
  created() {},
  methods: {
    async addBtn() {
      if (this.inputMemo !== "") {
        await setDoc(doc(db, "memoAppFirebase", "memos"), {
          memos: this.inputMemo,
          createTime: Timestamp,
          updataTime: Timestamp,
        })
      }
    },
    selectBtn() {},
    allDeleteBtn() {},
    deleteBtn() {},
  },
}
</script>

<style scoped>
button {
  margin: 3px 5px;
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
