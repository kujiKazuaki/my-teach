<template>
  <div class="all__Container">
    <section class="vonclick__Area">
      <h1>v-on:click</h1>
      <h2>1:書き方</h2>
      <div class="section__Area">
        <button @click="counter += 1">addBtn</button>
        <p>{{ counter }}</p>
        <div>
          <h4>解説</h4>
          <p>@click="処理内容 or メソッド名"</p>
          <p>今回は「処理内容」</p>
        </div>
      </div>
      <h2>2:応用(インラインメソッドハンドラ)</h2>
      <div class="section__Area">
        <button v-on:click="say('hi')">Say hi</button>
        <button v-on:click="say('what')">Say what</button>
        <div>
          <h4>解説</h4>
          <p>()内に入るのは引数になる</p>
          <p>インラインJavaScript式という</p>
        </div>
      </div>
      <h2>
        3:インラインステートメントハンドラのオリジナルのDOMイベントを参照する
      </h2>
      <div>
        <button v-on:click="warn('Form cannot be submitted yet.', $event)">
          Submit
        </button>
        <div>
          <h4>解説</h4>
          <p>$event 変数を使うことでメソッドに DOM イベントを渡せる</p>
          <p>DOMイベント：DOM内にあるイベントハンドラ</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    say: function (message) {
      alert(message)
    },
    warn: function (message, event) {
      // ネイティブイベントを参照しています
      if (event) {
        event.preventDefault()
      }
      alert(message)
    },
  },
}
</script>

<style>
.all__Container {
  text-align: center;
}
.section__Area {
  border: 2px solid black;
  margin-bottom: 3rem;
  padding: 1rem;
}
</style>
