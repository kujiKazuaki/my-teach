<template>
  <section>
    <h1>{{ data.title }}</h1>
    <p>{{ data.message }}</p>
    <div>
      <input type="number" v-model="data.id" />
      <button @click="doClick()">Click</button>
    </div>
    <table>
      <tbody>
        <tr>
          <th>User ID</th>
          <td>
            {{ data.json_data ? data.json_data.userID : "-" }}
          </td>
        </tr>
        <tr>
          <th>Title</th>
          <td>{{ data.json_data ? data.json_data.title : "-" }}</td>
        </tr>
        <tr>
          <th>Body</th>
          <td>{{ data.json_data ? data.json_data.body : "-" }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import axios from "axios"
import { reactive, onMounted } from "vue"

const url = "https://jsonplaceholder.typicode.com/posts/"

export default {
  setup() {
    const data = reactive({
      title: "Axios",
      message: "This is axios sample.",
      id: 1,
      json_data: null,
    })
    const doClick = () => {
      axios
        .get(url + data.id)
        .then((result) => {
          data.json_data = result.data
        })
        .catch((error) => {
          data.message = "ERROR!"
          data.json_data = null
          console.error(error)
        })
    }
    onMounted(() => {
      doClick()
    })
    return { data, doClick }
  },
}
</script>
