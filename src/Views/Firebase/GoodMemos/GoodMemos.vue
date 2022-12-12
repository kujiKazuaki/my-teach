<template>
  <div class="mt-2">
    <section class="border border-2 border-dark py-1">
      <h1>「いいね」「編集」「削除」</h1>
    </section>

    <section>
      <p class="h3">メモ記入</p>
      <div>
        <button
          type="button"
          @click="memoFormatBtn"
          class="btn btn-warning text-white"
        >
          Warning
        </button>
      </div>
    </section>
    <section>
      <p class="h3">選択</p>
      <div>
        <button type="button" @click="home" class="btn btn-primary">
          全体
        </button>
        <button type="button" @click="good" class="btn btn-danger ms-1 fw-bold">
          いいね
        </button>
      </div>
    </section>

    <section class="border border-2 border-dark mt-2">
      <p class="h3">メモ内容</p>
      <div class="memo_Container">
        <div>
          <postedMemo class="postedMemo" />
          <postedMemo class="postedMemo" />
          <postedMemo class="postedMemo" />
          <postedMemo class="postedMemo" />
          <postedMemo class="postedMemo" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import postedMemo from "@/Views/Firebase/GoodMemos/postedMemos.vue"

export default {
  components: {
    postedMemo,
  },
  data() {
    return {
      memos: [],
    }
  },
  computed: {},
  methods: {
    home() {
      console.log("home")
    },
    good() {
      console.log("good")
    },
    memoFormatBtn() {},
  },
}
</script>

<style scoped>
.memo_Container {
  margin-left: 10%;
}
.postedMemo {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
</style>
