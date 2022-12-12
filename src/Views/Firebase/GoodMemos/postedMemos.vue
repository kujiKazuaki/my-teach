<template>
  <div class="all_Container">
    <section class="memo_header">
      <p>タイトル</p>
      <p>本文</p>
    </section>
    <section class="memo_buttons">
      <div class="box">
        <button
          class="bubbly-button"
          @click="likeBtn = !likeBtn"
          :class="{ change: likeBtn }"
        >
          <font-awesome-icon icon="fa-heart" class="iconSize" />
        </button>
      </div>
      <div class="box">
        <button
          class="bubbly-button"
          @click="editBtn = !editBtn"
          :class="{ change: editBtn }"
        >
          <font-awesome-icon icon="fa-pen" class="iconSize" />
        </button>
      </div>
      <div class="box">
        <button
          class="bubbly-button"
          @click="deleteBtn = !deleteBtn"
          :class="{ change: deleteBtn }"
        >
          <font-awesome-icon icon="fa-trash" class="iconSize" />
        </button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "postedMemos",
  data() {
    return {
      likeBtn: false,
      editBtn: false,
      deleteBtn: false,
    }
  },
}
</script>

<style scoped>
@import "./likeIcon.scss";
.all_Container {
  border: 2px solid black;
  width: 80%;
  height: 50%;
  display: flex;
}
.memo_header {
  display: flex;
}
.memo_header p {
  padding-left: 5px;
  text-decoration: underline;
  font-weight: bold;
}
.memo_buttons {
  /* border: 2px solid rgb(255, 87, 247); */
  margin-left: 5rem;
  width: 50%;
  display: flex;
  justify-content: space-around;
}
.iconSize {
  font-size: 2em;
}
</style>
