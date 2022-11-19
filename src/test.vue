<template>
  <div class="all_Container">
    <section class="coadingTest_1">
      <p>
        問1．147026800の正の約数のうち、10000以上99999以下の範囲にあるものを<br />全て足し合わせた時の和を求めてください
      </p>
      <p>答え</p>
      <div v-html="Qone"></div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Qone: "",
    }
  },
  mounted: function () {
    this.loadHtml()
  },
  methods: {
    loadHtml() {
      fetch("@/assets/コーディングテスト/question1.html").then((res) => {
        res.text().then((html) => {
          this.Qone = html
        })
      })
    },
  },
}
</script>
