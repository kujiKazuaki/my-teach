<template>
  <div class="all">
    <h4>やりたいこと</h4>
    <div class="items_want">
      <ul>
        <li>
          ランダム出現(配列の要素,オブジェクト,オブジェクト内のプロパティ)
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.items_want {
  display: flex;
  justify-content: center;
}
.items_want ul {
  max-width: 50%;
}
.items_want ul li {
  border: 1.5px solid black;
  padding: 5px 10px;
}
</style>
