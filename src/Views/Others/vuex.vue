<template>
  <div class="alert alert-primary">{{ $store.state.message }}</div>
  <div @click="$store.dispatch('doit')" @dblclick="$store.commit('reset')">
    <a>clicked: {{ $store.state.counter }}</a>
  </div>
  <div>
    <hr />
    <h1>解説</h1>
    <div>
      「clicked」を1回押すと0~100までの数字が加算される<br />
      ダブルクリックで数字がリセットされる
    </div>
    <hr />
    <div>
      state,mutations,actionsの利用<br />
      またcreatePersistedStateにより、データの更新時にlocalstrageに保存されるようにした<br />
      ※リロード時に保存情報を表示するようにした
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.alert {
  text-align: center;
  user-select: none;
}
</style>
