<template>
  <div class="allContainer">
    <!-- slot：１ 始まり -->
    <section class="slot-one" style="margin-bottom: 50px">
      <h1>slot：１</h1>

      <MainBtn>
        <!-- 提出  -->
      </MainBtn>

      <h3 style="color: red">「提出」と書くとボタンの文字が変わる！</h3>
      <h3>
        slotの使い方１<br />
        <div style="border: 2px solid black">
          子コンポーネントのslot内に書かれたものがデフォルト設定<br />
          親コンポーネントのmainbtn内に書かれたものが上書き設定
        </div>
      </h3>
    </section>
    <!-- slot：１ 終わり -->

    <!-- slot：２ 始まり -->
    <section class="slot-one" style="margin-bottom: 50px">
      <h1>slot：２</h1>

      <MainLayout>
        <template v-slot:header>
          <h1>ページタイトル</h1>
        </template>
        <template #default>
          <h1>ページコンテンツ</h1>
        </template>
        <template #footer>
          <h1>フッターです</h1>
        </template>
      </MainLayout>

      <h3>
        slotの使い方２<br />
        <div style="border: 2px solid black">
          親・子コンポーネントのslotにnameをつけることで<br />
          一部の内容だけを受け渡すことができる
        </div>
      </h3>
    </section>
    <!-- slot：２ 終わり -->

    <!-- slot：３ 始まり -->
    <section></section>
    <!-- slot：３ 終わり -->
  </div>
</template>

<script>
import MainBtn from "@/個人勉強用/MainBtn.vue"
import MainLayout from "@/個人勉強用/MainLayout.vue"

export default {
  components: {
    MainBtn,
    MainLayout,
  },
}
</script>

<style scoped>
.allContainer {
  text-align: center;
}
</style>
