<template>
  <div style="text-align: center">
    <!-- v-on:click 始まり -->
    <section class="v-on:click">
      <h1>v-on:click</h1>
      <button v-on:click="showMessage">ボタン</button>
      <p>私の名前は{{ profile.name }}です</p>
      <p>年齢は{{ profile.age }}です</p>
    </section>
    <!-- v-on:click 終わり -->

    <!-- v-if or v-else-if or v-else 始まり -->
    <seciton>
      <h1>v-if</h1>
      <button v-on:click="hyoujiOne">１番目</button>
      <button v-on:click="hyoujiTwo">２番目</button>
      <button v-on:click="hyoujiThree">３番目</button>
      <div v-if="number === 'one'">１番目</div>
      <div v-if="number === 'two'">２番目</div>
      <div v-if="number === 'three'">３番目</div>
    </seciton>
    <!-- v-if or v-else-if or v-else 終わり -->

    <!-- v-for 始まり -->
    <section>
      <h1>v-for</h1>
      <div>
        <button v-on:click="vforButton">一覧化</button>
        <div v-if="animalSeen">
          <p v-for="(animal, index) in animals" :key="index">
            {{ animal }}
          </p>
        </div>
      </div>
    </section>
    <!-- v-for 終わり -->

    <!-- v-bind 始まり -->
    <section>
      <div class="v-bind-one">
        <h2>v-bind：１</h2>
        <button v-on:click="TextButton">Text</button>
        <button v-on:click="CheckboxButton">Checkbox</button><br />
        <input v-bind:type="inputText" />
      </div>
      <div class="v-bind-two">
        <h2>v-bind：２</h2>
        <div>
          <input type="number" v-model="imageWidth" />
        </div>
        <div>
          <img
            :width="imageWidth"
            src="https://codelikes.com/wp-content/uploads/2019/10/MIYA157092731_TP_V-e1601052110285.png"
          />
        </div>
      </div>
      <div class="v-bind-three">
        <h2>v-bind：３</h2>
        <ul style="list-style-type: none">
          <li>
            <label>
              <input type="checkbox" v-model="checked" />
              <span v-bind:class="{ done: checked }" style="user-select: none"
                >Style変更</span
              >
            </label>
          </li>
        </ul>
        <h3 style="color: red">「done」はStyle(183行目)と連動している！</h3>
      </div>
    </section>
    <!-- v-bind 終わり -->

    <!-- computed 始まり -->
    <section>
      <h1>computed1</h1>
      <div v-for="(item, i) in items" :key="i">
        <span>
          {{ item.price }}円の{{ item.name }}か {{ item.amount }}個あります。
        </span>
        <button v-on:click="addItem(item)">＋１個</button>
      </div>
      <div>全部で{{ totalPrice }}円です。</div>
      <h2>computed2</h2>
      <div>
        <ol class="use-computed" style="list-style-type: none">
          <li>{{ computedNumber }}</li>
          <li>{{ computedNumber }}</li>
          <li>{{ computedNumber }}</li>
        </ol>
        <ol class="use-methods" style="list-style-type: none">
          <li>{{ methodsNumber() }}</li>
          <li>{{ methodsNumber() }}</li>
          <li>{{ methodsNumber() }}</li>
        </ol>
      </div>
    </section>

    <!-- computed 終わり -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      profile: "",
      number: "one",
      animals: ["ライオン", "犬", "猫"],
      animalSeen: false,
      inputText: "text",
      imageWidth: 200,
      checked: false,
      items: [
        {
          name: "リンゴ",
          price: 150,
          amount: 0,
        },
        {
          name: "みかん",
          price: 100,
          amount: 0,
        },
        {
          name: "ぶどう",
          price: 400,
          amount: 0,
        },
      ],
    }
  },
  methods: {
    showMessage: function () {
      this.profile = {
        name: "田中太郎",
        age: "20歳",
      }
    },
    hyoujiOne() {
      this.number = "one"
    },
    hyoujiTwo() {
      this.number = "two"
    },
    hyoujiThree() {
      this.number = "three"
    },
    vforButton() {
      this.animalSeen = true
    },
    TextButton() {
      this.inputText = "text"
    },
    CheckboxButton() {
      this.inputText = "checkbox"
    },
    addItem(item) {
      item.amount += 1
    },
    methodsNumber() {
      return Math.random()
    },
  },
  computed: {
    totalPrice() {
      let price = 0
      for (let i = 0; i < this.items.length; i++) {
        price += this.items[i].price * this.items[i].amount
      }
      return price
    },
    computedNumber() {
      return Math.random()
    },
  },
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
