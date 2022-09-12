<template>
  <div class="allContainer">
    <h1>ログイン認証</h1>
    <button v-on:click="GoogleButton">Google認証</button>
  </div>
</template>

<script>
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"

export default {
  data() {},
  methods: {
    GoogleButton() {
      const provider = new GoogleAuthProvider()
      const auth = getAuth()
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user
          console.log(user)
          this.$router.push("/")
        })
        .catch((error) => {
          window.alert(error)
        })
    },
  },
}
</script>

<style scoped>
.allContainer {
  text-align: center;
}
</style>
