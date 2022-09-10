<!-- <template>
  <div class="allContainer">
    <h1>ログイン認証</h1>
    <button>Google認証</button>
  </div>
</template>

<style scoped>
.allContainer {
  text-align: center;
}
</style> -->

<template>
  <div class="app">
    <button v-on:click="postTweet">ツイート</button>
    <!-- 変更点１ -->
    <div>
      <p v-for="tweet in tweets" :key="tweet.id">
        {{ tweet.text }}
      </p>
    </div>
  </div>
</template>

<script>
import { collection, addDoc } from "firebase/firestore"
import { db } from "./firebase"

export default {
  /* 変更点２ */
  data() {
    return {
      tweets: [
        // こんな感じのデータが入る予定
        {
          id: "0GwoGZuhTNhqHQDBeiVW",
          text: "こんにちは、ツイートの本文です。",
        },
      ],
    }
  },
  methods: {
    postTweet() {
      addDoc(collection(db, "tweets"), {
        text: "こんにちは、ツイートの本文です。",
      })
    },
  },
}
</script>
