<template>
  <div class="allContainer">
    <section class="containerArea">
      <div
        v-for="(container, containerIndex) in containers"
        :key="containerIndex"
        @click="commentContainerBtn(container.id)"
      >
        <label>
          <div class="container">{{ container.text }}</div>
        </label>
      </div>
    </section>
    <section class="commentArea" v-if="commentAreaId !== null">
      <textarea
        v-model="inputComment"
        @keydown.enter.shift.exact="keyDownEnterShift"
        class="textarea"
      />
      <div>
        <button v-on:click="commentBtn(commentAreaId)">コメント</button>
        <button v-on:click="cancelBtn">キャンセル</button>
        <button v-on:click="allDeletBtn(commentAreaId)">すべて消す</button>
      </div>
      <ul v-if="commentAreaId !== null">
        <li
          class="show_return"
          v-for="(comment, index) in containers[commentAreaId].comments"
          :key="index"
        >
          <span>{{ comment }}</span>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      containers: [
        { id: 0, text: "日付１", comments: [] },
        { id: 1, text: "日付２", comments: [] },
        { id: 2, text: "日付３", comments: [] },
      ],
      inputComment: "",
      commentAreaId: null,
    }
  },
  methods: {
    commentContainerBtn(containerId) {
      if (this.commentAreaId !== null) {
        this.commentAreaId = null
      }
      this.commentAreaId = containerId
    },
    commentBtn(containerId) {
      const targetContainerIndex = this.containers.findIndex(
        (container) => container.id === containerId
      )
      this.containers[targetContainerIndex].comments.push(this.inputComment)
      this.inputComment = ""
    },
    cancelBtn() {
      this.inputComment = ""
    },
    allDeletBtn(containerId) {
      console.log("test")
      const targetContainerIndex = this.containers.findIndex(
        (container) => container.id === containerId
      )
      this.containers[targetContainerIndex].comments = []
    },
  },
}
</script>
<style scoped>
.show_return {
  list-style: none;
}

.container {
  width: 100%;
  height: 50px;
  background-color: orange;
  margin: 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.commentArea {
  text-align: center;
}
</style>
