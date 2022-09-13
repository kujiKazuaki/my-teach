<template>
  <div class="allContainer">
    <section>
      <h1>ログイン認証</h1>
      <button v-on:click="GoogleButton">
        <p v-if="loginName">ログイン</p>
        <p v-else>ログアウト</p>
      </button>
    </section>
    <section class="display">
      <img :src="userImg" />
      <div>
        <p>{{ userName }}</p>
        <p>{{ userEmail }}</p>
      </div>
    </section>
  </div>
</template>

<script>
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth"
import { setDoc, doc } from "firebase/firestore"
import { db } from "@/firebase.js"

export default {
  data() {
    return {
      userImg: "",
      userName: "",
      userEmail: "",
      loginName: true,
    }
  },
  methods: {
    GoogleButton() {
      if (this.loginName === true) {
        const provider = new GoogleAuthProvider()
        provider.addScope("")
        const auth = getAuth()
        signInWithPopup(auth, provider)
          .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result)
            credential.accessToken
            result.user
            onAuthStateChanged(auth, async (user) => {
              if (!user.exists) {
                const displayName = user.displayName
                const email = user.email
                const photoURL = user.photoURL
                console.log(displayName)
                console.log(email)
                console.log(photoURL)
                await setDoc(doc(db, "users", user.uid), {
                  userName: displayName,
                  userEmail: email,
                  userImg: photoURL,
                })
                this.userImg = photoURL
                this.userEmail = email
                this.userName = displayName
              }
            })
            alert("ログイン成功")
            this.loginName = false
          })
          .catch((error) => {
            GoogleAuthProvider.credentialFromError(error)
            console.log(error)
          })
      } else {
        const auth = getAuth()
        signOut(auth)
          .then(() => {
            // Sign-out successful.
            console.log("ログアウトしました")
            this.userImg = ""
            this.userEmail = ""
            this.userName = ""
          })
          .catch((error) => {
            // An error happened.
            console.log(error)
          })
        this.loginName = true
      }
    },
  },
}
</script>

<style scoped>
.allContainer {
  text-align: center;
}
</style>
