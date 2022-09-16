<template>
  <div class="allContainer">
    <section class="vuex-basic">
      <h1>{{ $store.state.message }}</h1>
    </section>
    <section class="vuex-mutation">
      <h1>mutation</h1>
      <div
        @click.exact="
          $store.commit({ type: 'count', message: 'add 1!', add: 1 })
        "
        @click.ctrl="$store.commit('count', 2)"
        @click.shift.exact="
          $store.commit({ type: 'count', message: 'add 10!', add: 10 })
        "
      >
        <a>clicked: {{ $store.state.counter }}</a>
      </div>
    </section>
    <section class="vuex-action">
      <h1>action</h1>
      <div class="alert alert-secondary" @click="$store.dispatch('doit')">
        <a class="h5"> clicked: {{ $store.state.counter }} </a>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.allContainer {
  text-align: center;
  user-select: none;
}
</style>
