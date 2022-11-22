<template>
  <div class="all_Area">
    <h1>Todoリスト(従来)</h1>
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
export default {
  data() {
    return {
      inputMemo: "",
      items: [],
    }
  },
  created() {
    this.items = JSON.parse(localStorage["memoitems"] || "")
  },
  methods: {
    addMemo() {
      if (this.inputMemo !== "") {
        this.items.push({ text: this.inputMemo })
        localStorage.setItem("memoitems", JSON.stringify(this.items))
        this.inputMemo = ""
      }
    },
    addBtn() {
      if (this.inputMemo !== "") {
        this.items.push({ text: this.inputMemo })
        localStorage.setItem("memoitems", JSON.stringify(this.items))
        this.inputMemo = ""
      }
    },
    selectBtn() {
      if (window.confirm("本当に削除しますか？")) {
        let remains = []
        for (let i = 0; i < this.items.length; i++) {
          if (!this.items[i].done) {
            remains.push(this.items[i])
          }
        }
        this.items = remains
        localStorage.setItem("memoitems", JSON.stringify(this.items))
      }
    },
    allDeleteBtn() {
      if (window.confirm("本当に削除しますか？")) {
        this.items = []
        localStorage.clear()
      }
    },
    deleteBtn(index) {
      if (window.confirm("本当に削除しますか？")) {
        this.items.splice(index, 1)
        localStorage.setItem("memoitems", JSON.stringify(this.items))
      }
    },
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
