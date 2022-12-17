<template>
  <div v-for="item in items" :key="item.id">
    <div v-if="item.isGood">
      {{ item.name }}
      <button @click="toggleGood(item)">good</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 0, name: "apple", isGood: true },
        { id: 1, name: "banana", isGood: true },
      ],
    }
  },
  methods: {
    toggleGood(item) {
      item.isGood = !item.isGood
    },
  },
}
</script>
