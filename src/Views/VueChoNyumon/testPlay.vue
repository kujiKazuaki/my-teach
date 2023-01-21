<template>
  <div>test</div>
</template>

<script>
import axios from "axios"

const date = { firstName: "Taro", lastName: "Yamada" }
const url = "http://localhost:3000/user/123"

export default {
  data() {
    return {
      firstName: "Taro",
      lastName: "Yamada",
    }
  },
  created() {
    axios
      .post(url, date)
      .then(() => {
        console.log(url)
      })

      .catch((err) => {
        console.log("err:", err)
      })
  },
}
</script>
