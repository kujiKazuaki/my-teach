<template>
  <div class="app">
    <input type="text" v-model="tweetContent" />
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
/* 変更点１ */
import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore"
import { db } from "./firebase"

export default {
  data() {
    return {
      tweetContent: "",
      /* 変更点２ */
      tweets: [
        // {
        //   id: "0GwoGZuhTNhqHQDBeiVW",
        //   text: "こんにちは、ツイートの本文です。"
        // }
      ],
    }
  },
  methods: {
    postTweet() {
      const tweet = {
        text: this.tweetContent,
        createdAt: serverTimestamp(),
      }
      addDoc(collection(db, "tweets"), tweet).then((ref) => {
        this.tweets.push({
          id: ref.id,
          ...tweet,
        })
      })
      this.tweetContent = ""
    },
  },

  /* 変更点３ */
  created() {
    getDocs(collection(db, "tweets")).then((snapshot) => {
      snapshot.forEach((doc) => {
        this.tweets.push({
          id: doc.id,
          ...doc.data(),
        })
        this.tweets.orderBy(this.createdAt, "asc")
      })
    })
  },
}
</script>
