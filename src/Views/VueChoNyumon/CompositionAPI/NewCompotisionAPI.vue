<template>
  <div @mousemove="updateMouse" class="all_Container m-5 bg-dark text-light">
    <div class="count">
      Count is {{ count }}, count * {{ times }} is {{ multiplicationResult }}
      <button @click="increment">+</button>
    </div>
    <div>Mouse is at {{ mousePosition.x }}, {{ mousePosition.y }}</div>

    <section class="study_Container">
      <div class="margin">
        <p class="h5 text-warning">Q.なぜsetup内ではthisを使わないのか</p>
        <p>A.Vueインスタンスが生成される前だから</p>
        <p>setupはbeforecreateが実行される前に実行される</p>
      </div>
      <p class="h5 text-warning">Q.リアクティブとは</p>
      <p>A.例：countが変更されたときtemplateのcountも変わること</p>
      <p>setupでの変更がともにDomの変更につながること</p>

      <p class="h5 text-warning">Q.reactiveメソッドについて</p>
      <p>A.()内にはオブジェクトのみ入る</p>

      <p class="h5 text-warning">Q.refについて</p>
      <p>A.オブジェクトじゃないものに対して使われる</p>
      <p>※refを使ったものは再度使う際は.valueを入れる</p>
      <p>※template(this)は省く</p>

      <p class="h5 text-warning">Q.setupのreturnについて</p>
      <p>A.templateに表示させる部分に入れる</p>

      <p class="h5 text-warning">Q.setupの引数について</p>
      <p>A.propsをsetupに使いたい場合、引数に「props」と入れる</p>

      <p class="h5 text-warning">Q.setupのメリット</p>
      <p>
        A.①見やすくなる(機能ごとにロジックを分けることができる)今まではオプションごとに分けられた
      </p>
      <p>②名前のコンフリクトが起こりにくい</p>
    </section>
  </div>
</template>

<script>
import { reactive, ref, computed, watch } from "vue"
export default {
  props: {
    times: {
      type: Number,
      default: 2,
    },
  },
  setup(props) {
    const mousePosition = reactive({ x: 0, y: 0 })
    let count = ref(0)

    const increment = () => {
      count.value += 1
    }
    const updateMouse = (event) => {
      mousePosition.x = event.clientX
      mousePosition.y = event.clientY
    }

    const multiplicationResult = computed(() => {
      return count.value * props.times
    })

    watch(
      count,
      () => {
        setTimeout(() => {
          alert("3 seconds have passed since the value change")
        }, 3000)
      },
      { lazy: true }
    )

    return {
      mousePosition,
      count,
      increment,
      updateMouse,
      multiplicationResult,
    }
  },
}
</script>

<style scoped>
.all_Container {
  text-align: center;
  border: 2px solid red;
}
.margin {
  margin-top: 10px;
}
</style>
