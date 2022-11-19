<template>
  <div class="all_Container">
    <button class="btn bg-warning text-light">button</button>
    <p class="alert alert-secondary">text</p>
    <p class="card card-title">title</p>
    <p class="card card-text">memo</p>

    <section>
      <p :style="style">text</p>
      <button class="btn bg-primary text-light" @click="changeBtn = !changeBtn">
        ボタン
      </button>
      <p :class="{ btnStyle: changeBtn }">ボタンスタイル</p>

      <p v-if="flag">{{ message }}</p>
      <p v-else>※現在、問題が発生中です・・・</p>
    </section>

    <section>
      <div v-for="(item, key) in items" :key="key">
        <div>{{ key }}</div>
        <div>{{ item.mail }}</div>
        <div>{{ item.tel }}</div>
      </div>
    </section>

    <section>
      <ul v-for="(list, listIdx) in lists" :key="listIdx">
        <li>{{ listIdx + "：" + lists[listIdx].name }}</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      style: "font-size: 20px; color:red;",
      changeBtn: false,
      message: "this is sample page.",
      flag: true,
      items: {
        taro: { mail: "ajmgdpwtmjdg@gmail.com", tel: "000-0000" },
        reo: { mail: "1981125@st.morioka-u.ac.jp", tel: "999-9999" },
      },
      lists: [
        { id: 0, name: "ore" },
        { id: 1, name: "taro" },
      ],
    }
  },
  mounted() {
    setInterval(() => {
      this.flag = !this.flag
    }, 1000)
  },
  methods: {},
}
</script>

<style scoped>
.btnStyle {
  text-decoration: line-through;
}
</style>
