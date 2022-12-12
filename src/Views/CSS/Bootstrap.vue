<template>
  <div>
    <h1>Bootstrap</h1>
    <section class="rule">
      <h4>やり方</h4>
      <p class="h4">
        参考URL:<a
          href="https://www.youtube.com/watch?v=x2uZMU7r0Ew"
          target="_blank"
          >Youtube</a
        >
      </p>
      <p>1.「npm install bootstrap@5.2.1」「npm i bootstrap-icons」</p>
      <p>2.main.jsで下記のように書く</p>
      <p style="border: 2px solid orange">
        import "bootstrap/dist/css/bootstrap.min.css"<br />
        import "bootstrap"<br />
        import "bootstrap-icons/font/bootstrap-icons.css"
      </p>
      <p>3.「npm run serve」で正常に機能しているかをテストする</p>
      <p>4.①bootstrapのサイトから好きなコードをコピペする</p>
      <p>
        参考URL：<a
          href="https://getbootstrap.jp/docs/5.0/components/buttons/"
          target="_blank"
          >Bootstrap</a
        >
      </p>
      <h3>テストスペース</h3>
      <div class="testSpace">
        <button type="button" @click="testBtnOne" class="btn btn-primary">
          Primary
        </button>
        <button type="button" class="btn btn-secondary">Secondary</button>
        <button type="button" class="btn btn-success">Success</button>
        <button type="button" class="btn btn-danger">Danger</button>
        <button type="button" class="btn btn-warning">Warning</button>
        <button type="button" class="btn btn-info">Info</button>
        <button type="button" class="btn btn-light">Light</button>
        <button
          type="button"
          @click="testBtnJudge = !testBtnJudge"
          class="btn btn-dark"
        >
          Dark
        </button>

        <button type="button" class="btn btn-link">Link</button>
        <h1>{{ data.text }}</h1>
      </div>

      <p>5.②bootstrapのサイトからCSSの基本操作を学ぶ</p>
      <p>
        参考URL：<a
          href="https://www.limosuki.com/2022/02/bootstrap5-class.html"
          target="_blank"
          >Bootstrap</a
        >
      </p>
      <p>
        参考URL：<a href="https://corecolors.net/bootstrap5/" target="_blank"
          >文字の色</a
        >
      </p>
      <p class="h3">使い方</p>
      <p>class=""の中に既定の文字を入れると自動的にCSSが変更される</p>
      <p>例：m-1, border, text-primary</p>
      <p class="text-primary m1 border h1">testSpace</p>
      <p
        class="text-start fw-bold fst-italic text-decoration-underline mt-2 bg-warning text-primary"
      >
        テスト１
      </p>
    </section>
  </div>
</template>

<script>
import { reactive } from "vue"
export default {
  setup() {
    const data = reactive({
      text: "testSpace",
      testBtnJudge: false,
    })

    const testBtnOne = () => {
      if (!data.testBtnJudge) {
        data.text = "ボタンが正常に押されました！"
        data.testBtnJudge = true
      } else {
        data.text = "testSpace"
        data.testBtnJudge = false
      }
    }
    return { data, testBtnOne }
  },
}
</script>
