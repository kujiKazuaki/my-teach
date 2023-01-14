<template>
  <h3>DOM</h3>
  <p>
    <a
      href="https://scrapbox.io/webex-template/20xx%E5%B9%B4xx%E6%9C%88xx%E6%97%A5_(%E5%9C%9F%2F%E6%97%A5)_Week1_%E3%82%BC%E3%83%9F"
      target="_blank"
      >scrapbox</a
    >
  </p>
  <div class="border border-2 border-danger dom_text">
    <p class="q">Q.DOMとは(簡潔)</p>
    <p class="a">
      A.プログラムからHTMLやXMLを自由に操作するための仕組み<br />
      DOMはWebページとJavaScriptなどのプログラムをつなぐ<br />
      JavaScriptからHTMLを動的に変更することが可能になる技術のこと
    </p>
    <p class="q">Q.DOMの特徴</p>
    <p class="a">
      A.プログラムからHTMLやXMLの構造やスタイル、内容などを容易に制御できます
    </p>
    <p class="q">DOMツリーとは</p>
    <p class="a">
      対象となる文書の各要素を抽出し、それらを階層構造として扱う。この機構造のことを指す<br />
      各要素を「ノード」。特定のノードを基準とし、上にあるノードを「親ノード」。下にあるノードを「子ノード」と表現する。
    </p>
    <p class="q">document.○○</p>
    <p class="a">「ノードを操作する」という</p>
    <p class="q">DOMの技術の例</p>
    <p class="a">
      Gmailでメールが来たら再読み込みなくリアルタイムでメールの表示が増える<br />
      チャットワークでピョコンとチャットが出てくる<br />
      ブラウザに表示される文字の色を変更したり大きくする
    </p>
    <p class="q"></p>
    <p class="a"></p>
  </div>

  <div class="border border-2 border-danger dom_img">
    <p>DOM では次のような階層構造のドキュメントツリーとして認識する</p>
    <img src="./image/dom_1.png" class="img" />
  </div>
</template>

<style scoped>
.dom_text {
  text-align: left;
}
.q {
  font-weight: bold;
  font-size: 20px;
}
.a {
  font-weight: bold;
  font-size: 20px;
  color: red;
  border-bottom: 2px solid black;
}
.img {
  width: 40%;
  border: 2px solid black;
  margin-bottom: 2px;
}
</style>
