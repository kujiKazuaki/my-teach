<template>
  <h1>Sort()成功した！</h1>
  <div class="app">
    <input type="text" v-model="tweetContent" />
    <button v-on:click="postTweet">ツイート</button>
    <select class="ms-1" @change="selectChanger()" v-model="selectChange">
      <option value="new">新しい順</option>
      <option value="old">古い順</option>
    </select>
    <!-- 変更点１ -->
    <div>
      <p v-for="tweet in tweets" :key="tweet.id">
        {{ tweet.id }}： {{ tweet.text }}：{{ tweet.createdAt }}
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
import { db } from "@/firebase"

export default {
  data() {
    return {
      tweetContent: "",
      /* 変更点２ */
      tweets: [],
      array: [
        { id: 0, test: 1 },
        { id: 1, test: 2 },
      ],
      selectChange: "new",
    }
  },
  methods: {
    postTweet() {
      const tweet = {
        text: this.tweetContent,
        createdAt: serverTimestamp(),
      }
      addDoc(collection(db, "Sorttweets"), tweet).then((ref) => {
        this.tweets.push({
          id: ref.id,
          ...tweet,
        })
      })
      this.tweetContent = ""
    },
    selectChanger() {
      const changeMsg = this.selectChange
      if (changeMsg === "new") {
        this.tweets.sort(
          (firstItem, secondItem) => firstItem.createdAt - secondItem.createdAt
        )
      } else if (changeMsg === "old") {
        this.tweets.sort(
          (firstItem, secondItem) => secondItem.createdAt - firstItem.createdAt
        )
      }
    },
  },

  /* 変更点３ */
  async created() {
    const querySnapshot = await getDocs(collection(db, "Sorttweets"))
    querySnapshot.forEach((doc) => {
      this.tweets.push({
        id: doc.id,
        ...doc.data(),
      })
    })

    this.tweets.sort(
      (firstItem, secondItem) => firstItem.createdAt - secondItem.createdAt
    )
  },
}
</script>
