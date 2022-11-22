<template>
  <div>
    <h1>Font Awesome</h1>
    <p class="h3">やり方</p>
    <p>
      参考URL：<a
        href="https://www.youtube.com/watch?v=E6rtMf7woYk"
        target="_blank"
        >Youtube(一連の流れ)</a
      >
    </p>
    <p>1.サイトの手順どおりにインストールする</p>
    <p>
      参考URL：<a
        href="https://fontawesome.com/docs/web/use-with/vue/"
        target="_blank"
        >setup</a
      >
    </p>
    <p>①「npm i --save @fortawesome/fontawesome-svg-core 」</p>
    <p>
      ②「npm i --save @fortawesome/free-solid-svg-icons<br />
      npm i --save @fortawesome/free-regular-svg-icons<br />
      npm i --save @fortawesome/free-brands-svg-icons 」
    </p>
    <p>「npm i --save @fortawesome/vue-fontawesome@latest-3」</p>
    <p>2.ライブラリをセットアップする</p>
    <p>
      参考URL：<a
        href="https://fontawesome.com/docs/web/use-with/vue/add-icons"
        target="_blank"
        >ライブラリsetup</a
      >
    </p>
    <p>main.jsで下記のように書く</p>
    <p class="border border-3 border-warning">
      import { library } from "@fortawesome/fontawesome-svg-core"<br />
      import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"<br />
      import { faHeart } from "@fortawesome/free-solid-svg-icons"<br /><br />
      library.add(faHeart)<br /><br />
      createApp(App).component("font-awesome-icon",
      FontAwesomeIcon).mount("#app")
    </p>
    <p>終わったら「npm run serve」で正常に機能するかを確認する</p>
    <p>3.アイコンを呼び出す</p>
    <p>
      参考URL：<a
        href="https://fontawesome.com/search?f=sharp&o=r"
        target="_blank"
        >アイコン一覧</a
      >
    </p>
    <p>例：<font-awesome-icon icon="fa-solid fa-user-secret" /></p>
    <p>書き方</p>
    <p>好きなアイコンにアクセスし、vue.jsのアイコンを選択->ペースト</p>
    <p>
      iconに書かれている「fa-○○(アイコンの意味を指すもの)」をmain.jsで貼り付ける
    </p>
    <div class="border">
      <p class="h3">テストスペース</p>
      <div>
        <font-awesome-icon icon="fa-solid fa-user" />
        <font-awesome-icon icon="fa-cart-shopping" />
        <font-awesome-icon icon="fa-heart" />
        <font-awesome-icon icon="fa-check" />
      </div>
    </div>
    <div class="testSpaceZone">
      <section class="testSpaceSection">
        <div class="Section">
          <div>
            <font-awesome-icon icon="fa-solid fa-user" class="testspaceIcon" />
            <font-awesome-icon icon="fa-cart-shopping" class="testspaceIcon" />
            <font-awesome-icon icon="fa-heart" class="testspaceIcon" />
            <font-awesome-icon icon="fa-check" class="testspaceIcon" />
            <font-awesome-icon icon="fa-arrow-right" class="testspaceIcon" />
            <font-awesome-icon icon="fa-hippo" class="testspaceIcon" />
            <font-awesome-icon icon="fa-bell" class="testspaceIcon" />
            <font-awesome-icon icon="fa-gift" class="testspaceIcon" />
            <font-awesome-icon icon="fa-phone-volume" class="testspaceIcon" />
            <font-awesome-icon
              icon="fa-brands fa-twitter"
              class="testspaceIcon"
            />
          </div>
          <div>
            <font-awesome-icon icon="fa-solid fa-user" class="testspaceIcon" />
            <font-awesome-icon icon="fa-cart-shopping" class="testspaceIcon" />
            <font-awesome-icon icon="fa-heart" class="testspaceIcon" />
            <font-awesome-icon icon="fa-check" class="testspaceIcon" />
            <font-awesome-icon icon="fa-arrow-right" class="testspaceIcon" />
            <font-awesome-icon icon="fa-hippo" class="testspaceIcon" />
            <font-awesome-icon icon="fa-bell" class="testspaceIcon" />
            <font-awesome-icon icon="fa-gift" class="testspaceIcon" />
            <font-awesome-icon icon="fa-phone-volume" class="testspaceIcon" />
            <font-awesome-icon
              icon="fa-brands fa-twitter"
              class="testspaceIcon"
            />
          </div>
        </div>
        <div class="Section">
          <font-awesome-icon icon="fa-solid fa-user" class="testspaceIcon" />
          <font-awesome-icon icon="fa-cart-shopping" class="testspaceIcon" />
          <font-awesome-icon icon="fa-heart" class="testspaceIcon" />
          <font-awesome-icon icon="fa-check" class="testspaceIcon" />
          <font-awesome-icon icon="fa-arrow-right" class="testspaceIcon" />
          <font-awesome-icon icon="fa-hippo" class="testspaceIcon" />
          <font-awesome-icon icon="fa-bell" class="testspaceIcon" />
          <font-awesome-icon icon="fa-gift" class="testspaceIcon" />
          <font-awesome-icon icon="fa-phone-volume" class="testspaceIcon" />
          <font-awesome-icon
            icon="fa-brands fa-twitter"
            class="testspaceIcon"
          />
          <font-awesome-icon icon="fa-solid fa-user" class="testspaceIcon" />
          <font-awesome-icon icon="fa-cart-shopping" class="testspaceIcon" />
          <font-awesome-icon icon="fa-heart" class="testspaceIcon" />
          <font-awesome-icon icon="fa-check" class="testspaceIcon" />
          <font-awesome-icon icon="fa-arrow-right" class="testspaceIcon" />
          <font-awesome-icon icon="fa-hippo" class="testspaceIcon" />
          <font-awesome-icon icon="fa-bell" class="testspaceIcon" />
          <font-awesome-icon icon="fa-gift" class="testspaceIcon" />
          <font-awesome-icon icon="fa-phone-volume" class="testspaceIcon" />
          <font-awesome-icon
            icon="fa-brands fa-twitter"
            class="testspaceIcon"
          />
        </div>
        <div class="Section">
          <font-awesome-icon icon="fa-solid fa-user" class="testspaceIcon" />
          <font-awesome-icon icon="fa-cart-shopping" class="testspaceIcon" />
          <font-awesome-icon icon="fa-heart" class="testspaceIcon" />
          <font-awesome-icon icon="fa-check" class="testspaceIcon" />
          <font-awesome-icon icon="fa-arrow-right" class="testspaceIcon" />
          <font-awesome-icon icon="fa-hippo" class="testspaceIcon" />
          <font-awesome-icon icon="fa-bell" class="testspaceIcon" />
          <font-awesome-icon icon="fa-gift" class="testspaceIcon" />
          <font-awesome-icon icon="fa-phone-volume" class="testspaceIcon" />
          <font-awesome-icon
            icon="fa-brands fa-twitter"
            class="testspaceIcon"
          />
          <font-awesome-icon icon="fa-solid fa-user" class="testspaceIcon" />
          <font-awesome-icon icon="fa-cart-shopping" class="testspaceIcon" />
          <font-awesome-icon icon="fa-heart" class="testspaceIcon" />
          <font-awesome-icon icon="fa-check" class="testspaceIcon" />
          <font-awesome-icon icon="fa-arrow-right" class="testspaceIcon" />
          <font-awesome-icon icon="fa-hippo" class="testspaceIcon" />
          <font-awesome-icon icon="fa-bell" class="testspaceIcon" />
          <font-awesome-icon icon="fa-gift" class="testspaceIcon" />
          <font-awesome-icon icon="fa-phone-volume" class="testspaceIcon" />
          <font-awesome-icon
            icon="fa-brands fa-twitter"
            class="testspaceIcon"
          />
        </div>
        <div class="Section">
          <font-awesome-icon icon="fa-solid fa-user" class="testspaceIcon" />
          <font-awesome-icon icon="fa-cart-shopping" class="testspaceIcon" />
          <font-awesome-icon icon="fa-heart" class="testspaceIcon" />
          <font-awesome-icon icon="fa-check" class="testspaceIcon" />
          <font-awesome-icon icon="fa-arrow-right" class="testspaceIcon" />
          <font-awesome-icon icon="fa-hippo" class="testspaceIcon" />
          <font-awesome-icon icon="fa-bell" class="testspaceIcon" />
          <font-awesome-icon icon="fa-gift" class="testspaceIcon" />
          <font-awesome-icon icon="fa-phone-volume" class="testspaceIcon" />
          <font-awesome-icon
            icon="fa-brands fa-twitter"
            class="testspaceIcon"
          />
          <font-awesome-icon icon="fa-solid fa-user" class="testspaceIcon" />
          <font-awesome-icon icon="fa-cart-shopping" class="testspaceIcon" />
          <font-awesome-icon icon="fa-heart" class="testspaceIcon" />
          <font-awesome-icon icon="fa-check" class="testspaceIcon" />
          <font-awesome-icon icon="fa-arrow-right" class="testspaceIcon" />
          <font-awesome-icon icon="fa-hippo" class="testspaceIcon" />
          <font-awesome-icon icon="fa-bell" class="testspaceIcon" />
          <font-awesome-icon icon="fa-gift" class="testspaceIcon" />
          <font-awesome-icon icon="fa-phone-volume" class="testspaceIcon" />
          <font-awesome-icon
            icon="fa-brands fa-twitter"
            class="testspaceIcon"
          />
        </div>
        <div class="Section">
          <font-awesome-icon icon="fa-solid fa-user" class="testspaceIcon" />
          <font-awesome-icon icon="fa-cart-shopping" class="testspaceIcon" />
          <font-awesome-icon icon="fa-heart" class="testspaceIcon" />
          <font-awesome-icon icon="fa-check" class="testspaceIcon" />
          <font-awesome-icon icon="fa-arrow-right" class="testspaceIcon" />
          <font-awesome-icon icon="fa-hippo" class="testspaceIcon" />
          <font-awesome-icon icon="fa-bell" class="testspaceIcon" />
          <font-awesome-icon icon="fa-gift" class="testspaceIcon" />
          <font-awesome-icon icon="fa-phone-volume" class="testspaceIcon" />
          <font-awesome-icon
            icon="fa-brands fa-twitter"
            class="testspaceIcon"
          />
          <font-awesome-icon icon="fa-solid fa-user" class="testspaceIcon" />
          <font-awesome-icon icon="fa-cart-shopping" class="testspaceIcon" />
          <font-awesome-icon icon="fa-heart" class="testspaceIcon" />
          <font-awesome-icon icon="fa-check" class="testspaceIcon" />
          <font-awesome-icon icon="fa-arrow-right" class="testspaceIcon" />
          <font-awesome-icon icon="fa-hippo" class="testspaceIcon" />
          <font-awesome-icon icon="fa-bell" class="testspaceIcon" />
          <font-awesome-icon icon="fa-gift" class="testspaceIcon" />
          <font-awesome-icon icon="fa-phone-volume" class="testspaceIcon" />
          <font-awesome-icon
            icon="fa-brands fa-twitter"
            class="testspaceIcon"
          />
        </div>
        <div class="Section">
          <font-awesome-icon icon="fa-solid fa-user" class="testspaceIcon" />
          <font-awesome-icon icon="fa-cart-shopping" class="testspaceIcon" />
          <font-awesome-icon icon="fa-heart" class="testspaceIcon" />
          <font-awesome-icon icon="fa-check" class="testspaceIcon" />
          <font-awesome-icon icon="fa-arrow-right" class="testspaceIcon" />
          <font-awesome-icon icon="fa-hippo" class="testspaceIcon" />
          <font-awesome-icon icon="fa-bell" class="testspaceIcon" />
          <font-awesome-icon icon="fa-gift" class="testspaceIcon" />
          <font-awesome-icon icon="fa-phone-volume" class="testspaceIcon" />
          <font-awesome-icon
            icon="fa-brands fa-twitter"
            class="testspaceIcon"
          />
          <font-awesome-icon icon="fa-solid fa-user" class="testspaceIcon" />
          <font-awesome-icon icon="fa-cart-shopping" class="testspaceIcon" />
          <font-awesome-icon icon="fa-heart" class="testspaceIcon" />
          <font-awesome-icon icon="fa-check" class="testspaceIcon" />
          <font-awesome-icon icon="fa-arrow-right" class="testspaceIcon" />
          <font-awesome-icon icon="fa-hippo" class="testspaceIcon" />
          <font-awesome-icon icon="fa-bell" class="testspaceIcon" />
          <font-awesome-icon icon="fa-gift" class="testspaceIcon" />
          <font-awesome-icon icon="fa-phone-volume" class="testspaceIcon" />
          <font-awesome-icon
            icon="fa-brands fa-twitter"
            class="testspaceIcon"
          />
        </div>
        <div class="Section">
          <font-awesome-icon icon="fa-solid fa-user" class="testspaceIcon" />
          <font-awesome-icon icon="fa-cart-shopping" class="testspaceIcon" />
          <font-awesome-icon icon="fa-heart" class="testspaceIcon" />
          <font-awesome-icon icon="fa-check" class="testspaceIcon" />
          <font-awesome-icon icon="fa-arrow-right" class="testspaceIcon" />
          <font-awesome-icon icon="fa-hippo" class="testspaceIcon" />
          <font-awesome-icon icon="fa-bell" class="testspaceIcon" />
          <font-awesome-icon icon="fa-gift" class="testspaceIcon" />
          <font-awesome-icon icon="fa-phone-volume" class="testspaceIcon" />
          <font-awesome-icon
            icon="fa-brands fa-twitter"
            class="testspaceIcon"
          />
          <font-awesome-icon icon="fa-solid fa-user" class="testspaceIcon" />
          <font-awesome-icon icon="fa-cart-shopping" class="testspaceIcon" />
          <font-awesome-icon icon="fa-heart" class="testspaceIcon" />
          <font-awesome-icon icon="fa-check" class="testspaceIcon" />
          <font-awesome-icon icon="fa-arrow-right" class="testspaceIcon" />
          <font-awesome-icon icon="fa-hippo" class="testspaceIcon" />
          <font-awesome-icon icon="fa-bell" class="testspaceIcon" />
          <font-awesome-icon icon="fa-gift" class="testspaceIcon" />
          <font-awesome-icon icon="fa-phone-volume" class="testspaceIcon" />
          <font-awesome-icon
            icon="fa-brands fa-twitter"
            class="testspaceIcon"
          />
        </div>
        <div class="Section">
          <font-awesome-icon icon="fa-solid fa-user" class="testspaceIcon" />
          <font-awesome-icon icon="fa-cart-shopping" class="testspaceIcon" />
          <font-awesome-icon icon="fa-heart" class="testspaceIcon" />
          <font-awesome-icon icon="fa-check" class="testspaceIcon" />
          <font-awesome-icon icon="fa-arrow-right" class="testspaceIcon" />
          <font-awesome-icon icon="fa-hippo" class="testspaceIcon" />
          <font-awesome-icon icon="fa-bell" class="testspaceIcon" />
          <font-awesome-icon icon="fa-gift" class="testspaceIcon" />
          <font-awesome-icon icon="fa-phone-volume" class="testspaceIcon" />
          <font-awesome-icon
            icon="fa-brands fa-twitter"
            class="testspaceIcon"
          />
          <font-awesome-icon icon="fa-solid fa-user" class="testspaceIcon" />
          <font-awesome-icon icon="fa-cart-shopping" class="testspaceIcon" />
          <font-awesome-icon icon="fa-heart" class="testspaceIcon" />
          <font-awesome-icon icon="fa-check" class="testspaceIcon" />
          <font-awesome-icon icon="fa-arrow-right" class="testspaceIcon" />
          <font-awesome-icon icon="fa-hippo" class="testspaceIcon" />
          <font-awesome-icon icon="fa-bell" class="testspaceIcon" />
          <font-awesome-icon icon="fa-gift" class="testspaceIcon" />
          <font-awesome-icon icon="fa-phone-volume" class="testspaceIcon" />
          <font-awesome-icon
            icon="fa-brands fa-twitter"
            class="testspaceIcon"
          />
        </div>
        <div class="Section">
          <font-awesome-icon icon="fa-solid fa-user" class="testspaceIcon" />
          <font-awesome-icon icon="fa-cart-shopping" class="testspaceIcon" />
          <font-awesome-icon icon="fa-heart" class="testspaceIcon" />
          <font-awesome-icon icon="fa-check" class="testspaceIcon" />
          <font-awesome-icon icon="fa-arrow-right" class="testspaceIcon" />
          <font-awesome-icon icon="fa-hippo" class="testspaceIcon" />
          <font-awesome-icon icon="fa-bell" class="testspaceIcon" />
          <font-awesome-icon icon="fa-gift" class="testspaceIcon" />
          <font-awesome-icon icon="fa-phone-volume" class="testspaceIcon" />
          <font-awesome-icon
            icon="fa-brands fa-twitter"
            class="testspaceIcon"
          />
          <font-awesome-icon icon="fa-solid fa-user" class="testspaceIcon" />
          <font-awesome-icon icon="fa-cart-shopping" class="testspaceIcon" />
          <font-awesome-icon icon="fa-heart" class="testspaceIcon" />
          <font-awesome-icon icon="fa-check" class="testspaceIcon" />
          <font-awesome-icon icon="fa-arrow-right" class="testspaceIcon" />
          <font-awesome-icon icon="fa-hippo" class="testspaceIcon" />
          <font-awesome-icon icon="fa-bell" class="testspaceIcon" />
          <font-awesome-icon icon="fa-gift" class="testspaceIcon" />
          <font-awesome-icon icon="fa-phone-volume" class="testspaceIcon" />
          <font-awesome-icon
            icon="fa-brands fa-twitter"
            class="testspaceIcon"
          />
        </div>
        <div class="Section">
          <font-awesome-icon icon="fa-solid fa-user" class="testspaceIcon" />
          <font-awesome-icon icon="fa-cart-shopping" class="testspaceIcon" />
          <font-awesome-icon icon="fa-heart" class="testspaceIcon" />
          <font-awesome-icon icon="fa-check" class="testspaceIcon" />
          <font-awesome-icon icon="fa-arrow-right" class="testspaceIcon" />
          <font-awesome-icon icon="fa-hippo" class="testspaceIcon" />
          <font-awesome-icon icon="fa-bell" class="testspaceIcon" />
          <font-awesome-icon icon="fa-gift" class="testspaceIcon" />
          <font-awesome-icon icon="fa-phone-volume" class="testspaceIcon" />
          <font-awesome-icon
            icon="fa-brands fa-twitter"
            class="testspaceIcon"
          />
          <font-awesome-icon icon="fa-solid fa-user" class="testspaceIcon" />
          <font-awesome-icon icon="fa-cart-shopping" class="testspaceIcon" />
          <font-awesome-icon icon="fa-heart" class="testspaceIcon" />
          <font-awesome-icon icon="fa-check" class="testspaceIcon" />
          <font-awesome-icon icon="fa-arrow-right" class="testspaceIcon" />
          <font-awesome-icon icon="fa-hippo" class="testspaceIcon" />
          <font-awesome-icon icon="fa-bell" class="testspaceIcon" />
          <font-awesome-icon icon="fa-gift" class="testspaceIcon" />
          <font-awesome-icon icon="fa-phone-volume" class="testspaceIcon" />
          <font-awesome-icon
            icon="fa-brands fa-twitter"
            class="testspaceIcon"
          />
        </div>
        <div class="Section">
          <font-awesome-icon icon="fa-solid fa-user" class="testspaceIcon" />
          <font-awesome-icon icon="fa-cart-shopping" class="testspaceIcon" />
          <font-awesome-icon icon="fa-heart" class="testspaceIcon" />
          <font-awesome-icon icon="fa-check" class="testspaceIcon" />
          <font-awesome-icon icon="fa-arrow-right" class="testspaceIcon" />
          <font-awesome-icon icon="fa-hippo" class="testspaceIcon" />
          <font-awesome-icon icon="fa-bell" class="testspaceIcon" />
          <font-awesome-icon icon="fa-gift" class="testspaceIcon" />
          <font-awesome-icon icon="fa-phone-volume" class="testspaceIcon" />
          <font-awesome-icon
            icon="fa-brands fa-twitter"
            class="testspaceIcon"
          />
          <font-awesome-icon icon="fa-solid fa-user" class="testspaceIcon" />
          <font-awesome-icon icon="fa-cart-shopping" class="testspaceIcon" />
          <font-awesome-icon icon="fa-heart" class="testspaceIcon" />
          <font-awesome-icon icon="fa-check" class="testspaceIcon" />
          <font-awesome-icon icon="fa-arrow-right" class="testspaceIcon" />
          <font-awesome-icon icon="fa-hippo" class="testspaceIcon" />
          <font-awesome-icon icon="fa-bell" class="testspaceIcon" />
          <font-awesome-icon icon="fa-gift" class="testspaceIcon" />
          <font-awesome-icon icon="fa-phone-volume" class="testspaceIcon" />
          <font-awesome-icon
            icon="fa-brands fa-twitter"
            class="testspaceIcon"
          />
        </div>
        <div class="Section">
          <font-awesome-icon icon="fa-solid fa-user" class="testspaceIcon" />
          <font-awesome-icon icon="fa-cart-shopping" class="testspaceIcon" />
          <font-awesome-icon icon="fa-heart" class="testspaceIcon" />
          <font-awesome-icon icon="fa-check" class="testspaceIcon" />
          <font-awesome-icon icon="fa-arrow-right" class="testspaceIcon" />
          <font-awesome-icon icon="fa-hippo" class="testspaceIcon" />
          <font-awesome-icon icon="fa-bell" class="testspaceIcon" />
          <font-awesome-icon icon="fa-gift" class="testspaceIcon" />
          <font-awesome-icon icon="fa-phone-volume" class="testspaceIcon" />
          <font-awesome-icon
            icon="fa-brands fa-twitter"
            class="testspaceIcon"
          />
          <font-awesome-icon icon="fa-solid fa-user" class="testspaceIcon" />
          <font-awesome-icon icon="fa-cart-shopping" class="testspaceIcon" />
          <font-awesome-icon icon="fa-heart" class="testspaceIcon" />
          <font-awesome-icon icon="fa-check" class="testspaceIcon" />
          <font-awesome-icon icon="fa-arrow-right" class="testspaceIcon" />
          <font-awesome-icon icon="fa-hippo" class="testspaceIcon" />
          <font-awesome-icon icon="fa-bell" class="testspaceIcon" />
          <font-awesome-icon icon="fa-gift" class="testspaceIcon" />
          <font-awesome-icon icon="fa-phone-volume" class="testspaceIcon" />
          <font-awesome-icon
            icon="fa-brands fa-twitter"
            class="testspaceIcon"
          />
        </div>
        <div class="Section">
          <font-awesome-icon icon="fa-solid fa-user" class="testspaceIcon" />
          <font-awesome-icon icon="fa-cart-shopping" class="testspaceIcon" />
          <font-awesome-icon icon="fa-heart" class="testspaceIcon" />
          <font-awesome-icon icon="fa-check" class="testspaceIcon" />
          <font-awesome-icon icon="fa-arrow-right" class="testspaceIcon" />
          <font-awesome-icon icon="fa-hippo" class="testspaceIcon" />
          <font-awesome-icon icon="fa-bell" class="testspaceIcon" />
          <font-awesome-icon icon="fa-gift" class="testspaceIcon" />
          <font-awesome-icon icon="fa-phone-volume" class="testspaceIcon" />
          <font-awesome-icon
            icon="fa-brands fa-twitter"
            class="testspaceIcon"
          />
          <font-awesome-icon icon="fa-solid fa-user" class="testspaceIcon" />
          <font-awesome-icon icon="fa-cart-shopping" class="testspaceIcon" />
          <font-awesome-icon icon="fa-heart" class="testspaceIcon" />
          <font-awesome-icon icon="fa-check" class="testspaceIcon" />
          <font-awesome-icon icon="fa-arrow-right" class="testspaceIcon" />
          <font-awesome-icon icon="fa-hippo" class="testspaceIcon" />
          <font-awesome-icon icon="fa-bell" class="testspaceIcon" />
          <font-awesome-icon icon="fa-gift" class="testspaceIcon" />
          <font-awesome-icon icon="fa-phone-volume" class="testspaceIcon" />
          <font-awesome-icon
            icon="fa-brands fa-twitter"
            class="testspaceIcon"
          />
        </div>
        <div class="Section">
          <font-awesome-icon icon="fa-solid fa-user" class="testspaceIcon" />
          <font-awesome-icon icon="fa-cart-shopping" class="testspaceIcon" />
          <font-awesome-icon icon="fa-heart" class="testspaceIcon" />
          <font-awesome-icon icon="fa-check" class="testspaceIcon" />
          <font-awesome-icon icon="fa-arrow-right" class="testspaceIcon" />
          <font-awesome-icon icon="fa-hippo" class="testspaceIcon" />
          <font-awesome-icon icon="fa-bell" class="testspaceIcon" />
          <font-awesome-icon icon="fa-gift" class="testspaceIcon" />
          <font-awesome-icon icon="fa-phone-volume" class="testspaceIcon" />
          <font-awesome-icon
            icon="fa-brands fa-twitter"
            class="testspaceIcon"
          />
          <font-awesome-icon icon="fa-solid fa-user" class="testspaceIcon" />
          <font-awesome-icon icon="fa-cart-shopping" class="testspaceIcon" />
          <font-awesome-icon icon="fa-heart" class="testspaceIcon" />
          <font-awesome-icon icon="fa-check" class="testspaceIcon" />
          <font-awesome-icon icon="fa-arrow-right" class="testspaceIcon" />
          <font-awesome-icon icon="fa-hippo" class="testspaceIcon" />
          <font-awesome-icon icon="fa-bell" class="testspaceIcon" />
          <font-awesome-icon icon="fa-gift" class="testspaceIcon" />
          <font-awesome-icon icon="fa-phone-volume" class="testspaceIcon" />
          <font-awesome-icon
            icon="fa-brands fa-twitter"
            class="testspaceIcon"
          />
        </div>
      </section>
    </div>
    <p>4.アニメーション</p>
    <p>
      参考URL：<a
        href="https://github.com/l-lin/font-awesome-animation"
        target="_blank"
        >アニメーション</a
      >
    </p>
    <p>①public/index.htmlの「title」タグの上に下記のコードを入れる</p>
    <p class="border border-3 border-warning">{{ data.animationCDN }}</p>
    <p>
      ②fontawesomeタグの中にclassを入れ、その中に既定の文章を入れると起動する
    </p>
    <p>
      参考URL：<a
        href="https://l-lin.github.io/font-awesome-animation/"
        target="_blank"
        >動き一覧(一部動かないのもある)</a
      >
    </p>
    <p>
      参考URL：<a
        href="https://fontawesome.com/v6/docs/web/style/animate"
        target="_blank"
        >動き一覧(公式)</a
      >
    </p>
    <p class="text-danger h5">※「faa-」と書いてあるが、「fa-」に修正する</p>
    <div>
      <font-awesome-icon
        icon="fa-solid fa-heart"
        class="fa-spin iconSize"
        style="--fa-animation-direction: reverse"
      />
    </div>
  </div>
</template>

<script>
import { reactive } from "vue"
export default {
  setup() {
    const data = reactive({
      animationCDN:
        "<link rel='stylesheet' href='font-awesome-animation.min.css'>",
    })
    return { data }
  },
}
</script>

<style scoped>
.iconSize {
  width: 100px;
  height: 100px;
}
.testSpaceZone {
  margin: 0;
  padding: 0;
}
.testSpaceSection {
  position: relative;
  width: 100%;
  height: 100vh;
  background: #111;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.testSpaceSection .Section {
  position: relative;
  top: -50%;
  width: 100%;
  display: flex;
  padding: 10px 0;
  white-space: nowrap;
  font-size: 64px;
  transform: rotate(-30deg);
}
.testspaceIcon {
  color: rgba(0, 0, 0, 0 0.5);
  transition: 1s;
  padding: 0.5px;
  user-select: none;
  cursor: default;
}
.testspaceIcon:hover {
  transition: 0s;
  color: #0f0;
  text-shadow: 0 0 120px #0f0;
}
.testSpaceSection .Section div {
  animation: animate1 80s linear infinite;
  animation-delay: -80s;
}
.testSpaceSection .Section div:ntb-child(2) {
  animation: animate2 80s linear infinite;
  animation-delay: -40s;
}
@keyframes animate1 {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
@keyframes animate2 {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-200%);
  }
}
</style>
