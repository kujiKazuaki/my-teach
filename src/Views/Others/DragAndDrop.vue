<template>
  <h1>Drag & Drop</h1>
  <div class="app">
    <div
      class="drop_zone"
      @drop="onDrop($event, 1)"
      @dragenter.prevent
      @dragover.prevent
    >
      <div
        v-for="item in getList(1)"
        :key="item.id"
        class="drag_el"
        draggable="true"
        @dragstart="startDrag($event, item)"
      >
        {{ item.title }}
      </div>
    </div>
    <div
      class="drop_zone"
      @drop="onDrop($event, 2)"
      @dragenter.prevent
      @dragover.prevent
    >
      <!-- ロード時、3番目のidのitemのみ表示させる -->
      <div
        v-for="item in getList(2)"
        :key="item.id"
        class="drag_el"
        draggable="true"
        @dragstart="startDrag($event, item)"
      >
        {{ item.title }}
      </div>
    </div>
  </div>

  <div>
    <h4>解説</h4>
    <section>
      <h5 class="text-danger">用語説明</h5>
      <div>
        <div class="border border-primary">
          <h5>$event変数</h5>
          <p>メソッドに対し、DOMイベントを渡すことができる</p>
          <p>イベントハンドラー以外の引数を使用する場合につかう</p>

          <h5>@dragenter</h5>
          <p>
            ドラッグ中に対象要素に入った時<br />
            dragenter.prevent：Event.preventDefaultメソッドを呼び出す。<br />
            ※「デフォルトの動作を発生させない」の略。
          </p>

          <h5>@dragstart</h5>
          <p>ドラッグの開始</p>

          <h5>@dragover</h5>
          <p>要素の上でドラッグしている時</p>

          <h5>@drop</h5>
          <p>ドラッグ中のボタンを離した時</p>
        </div>

        <h5>draggable</h5>
        <p>ドラッグ機能を入れる際に必要になるもの</p>
        <p>
          1)ドラッグできるようにしたい要素に「draggable="true"」と書く<br />
          2)dragstartイベントリスナーを設定し、その中にドラッグデータを設定する<br />
          3)定義したリスナーの中でドラッグデータを設定する
        </p>

        <h5>
          <a
            href="https://developer.mozilla.org/ja/docs/Web/API/DataTransfer"
            target="_blank"
            >dataTransfer</a
          >
        </h5>
        <p>
          ドラッグ＆ドロップ操作中にドラッグされているデータを保持するために使用されるオブジェクト
        </p>

        <h5>DataTransfer.getData(format)</h5>
        <p>
          指定した型のドラッグデータを（文字列として）受け取る。<br />
          ドラッグ操作がデータを含んでいない場合、このメソッドは空文字列を返しす。<br />

          format：formatで指定した型のドラッグデータを表す。ないなら空文字列
        </p>

        <h5>dataTransfer.setData(format, data)</h5>
        <p>
          ドラッグデータにデータと型を指定する<br />
          format:ドラッグオブジェクトに追加するデータの型を表す。<br />
          data:DataTransfer(ドラッグオブジェクト)に追加するデータを表す
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 0, title: "Item A", list: 1 },
        { id: 1, title: "Item B", list: 1 },
        { id: 2, title: "Item C", list: 2 },
      ],
    }
  },
  methods: {
    getList(list) {
      // this.itemsの中の各オブジェクトの番号を特定する処理を描いている。
      // このコードを描くことで、v-for内のitemsに番号を振るだけで表示場所の特定が可能になる
      const item = this.items.filter((item) => item.list == list)
      return item
    },
    startDrag(event, item) {
      console.log(item.id)
      event.dataTransfer.dropEffect = "move"
      event.dataTransfer.effectAllowed = "move"
      // ドラッグする際に入れ込むデータを設定している。入れ込んでいるデータはitem番号
      event.dataTransfer.setData("itemID", item.id)
    },
    onDrop(event, list) {
      // ドロップしたアイテムを番号順に並べ替えする処理
      const itemID = event.dataTransfer.getData("itemID")
      const item = this.items.find((item) => item.id == itemID)
      item.list = list
    },
  },
}
</script>

<style scoped>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.drop_zone {
  width: 50%;
  margin: 50px auto;
  background-color: #ecf0f1;
  padding: 10px;
  min-height: 10px;
}
.drag_el {
  background-color: #3498db;
  color: white;
  padding: 5px;
  margin-bottom: 10px;
}
.drag_el:nth-last-of-type(1) {
  margin-bottom: 0;
}
</style>
