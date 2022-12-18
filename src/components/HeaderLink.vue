<template>
  <div>
    <section class="other_section">
      <div class="title_header_other">
        <h4>Others</h4>
        <font-awesome-icon
          icon="fa-plus"
          class="iconSize"
          @click="other_open()"
          v-if="other_icon_open"
        />
        <font-awesome-icon
          icon="fa-minus"
          v-if="other_icon_close"
          class="iconSize"
          @click="other_close()"
        />
      </div>
      <nav v-if="other_nav">
        <router-link to="/test">テスト</router-link>｜
        <router-link to="/VueDirective">VueDirective</router-link>｜
        <router-link to="/VueDirectiveLevelUp">VueDirectiveLevelUp</router-link
        >｜ <router-link to="/classHenkou">classHenkou</router-link>｜
        <router-link to="/slotpropsApp">slot-propsApp</router-link>｜
        <router-link to="/calendarApp">calendarApp</router-link>｜
        <router-link to="/ColorApp">ColorApp</router-link>｜
        <router-link to="/vuex">vuex</router-link>｜
        <router-link to="/counterApp">counterApp</router-link>｜
        <router-link to="/CountDown">CountDown</router-link>｜
        <router-link to="/DragAndDrop_other">DragAndDrop</router-link>｜
        <router-link to="/calculation">calculation</router-link>｜
      </nav>
    </section>

    <section class="VueChonyumon_section">
      <div class="title_header_VueChonyumon">
        <h4>Vue.js超入門</h4>
        <font-awesome-icon
          icon="fa-plus"
          class="iconSize"
          v-if="VueChonyumon_icon_open"
          @click="VueChonyumon_open()"
        />
        <font-awesome-icon
          icon="fa-minus"
          class="iconSize"
          v-if="VueChonyumon_icon_close"
          @click="VueChonyumon_close()"
        />
      </div>
      <nav v-if="VueChonyumon_nav">
        <router-link to="/">testPlay</router-link>｜
        <router-link to="/ComApp">ComApp</router-link>｜
        <router-link to="/Router">Router</router-link>｜
        <router-link to="/axios">Axios</router-link>｜
        <router-link to="/Bootstrap">Bootstrap</router-link>｜
        <router-link to="/awesome">awesome</router-link>｜
        <router-link to="/Tailwind">Tailwind</router-link>｜
      </nav>
    </section>

    <section class="GeekSalon_section">
      <div class="title_header_GeekSalon">
        <h4>GeekSalon</h4>
        <font-awesome-icon
          icon="fa-plus"
          class="iconSize"
          v-if="GeekSalon_icon_open"
          @click="GeekSalon_open()"
        />
        <font-awesome-icon
          icon="fa-minus"
          class="iconSize"
          v-if="GeekSalon_icon_close"
          @click="GeekSalon_close()"
        />
      </div>
      <nav v-if="GeekSalon_nav">
        <router-link to="/sortMethods">sortMethods</router-link>｜
        <router-link to="/JSONmemoApp">JSONmemoApp</router-link>｜
        <router-link to="/FirebaseMemoApp">FirebaseMemoApp</router-link>｜
        <router-link to="/memoAppSetup">memoAppSetup</router-link>｜
        <router-link to="/paletteApp">paletteApp</router-link>｜
        <router-link to="/DragAndDrop">DragAndDrop</router-link>｜
      </nav>
    </section>
    <section class="Firebase_section">
      <div class="title_header_Firebase">
        <h4>Firebase</h4>
        <p class="h4 ms-2 mt-1">
          <a
            href="https://console.firebase.google.com/u/0/project/my-teach-89179/firestore/data/~2FmemoAppSetup~2F1Y5uqR9zDgjjl2WZQSae?hl=ja"
            target="_blank"
            >リンク</a
          >
        </p>
        <font-awesome-icon
          icon="fa-plus"
          class="iconSize"
          v-if="Firebase_icon_open"
          @click="Firebase_open()"
        />
        <font-awesome-icon
          icon="fa-minus"
          class="iconSize"
          v-if="Firebase_icon_close"
          @click="Firebase_close()"
        />
      </div>
      <div>
        <nav v-if="Firebase_nav">
          <router-link to="/GoogleLogin">GoogleLogin</router-link>｜
          <router-link to="/sortMethods">sortMethods</router-link>｜
          <router-link to="/GoodMemos">GoodMemos</router-link>｜
        </nav>
      </div>
    </section>
  </div>
</template>

<script>
import { db } from "@/firebase"
import { setDoc, doc, getDoc } from "@firebase/firestore"

export default {
  data() {
    return {
      other_icon_open: true,
      other_icon_close: false,
      other_nav: false,
      VueChonyumon_icon_open: true,
      VueChonyumon_icon_close: false,
      VueChonyumon_nav: false,
      GeekSalon_icon_open: true,
      GeekSalon_icon_close: false,
      GeekSalon_nav: false,
      Firebase_icon_open: true,
      Firebase_icon_close: false,
      Firebase_nav: false,
    }
  },
  async created() {
    // otherの情報をもとに表示方法を変える
    const other_docRef = doc(db, "Header", "other")
    const other_docSnap = await getDoc(other_docRef)

    if (other_docSnap.exists()) {
      if (other_docSnap.data().open === true) {
        this.other_icon_open = false
        this.other_icon_close = true
        this.other_nav = true
      } else {
        this.other_icon_open = true
        this.other_icon_close = false
        this.other_nav = false
      }
    }

    // VueChonyumonの情報をもとに表示方法を変える
    const VueChonyumon_docRef = doc(db, "Header", "VueChonyumon")
    const VueChonyumon_docSnap = await getDoc(VueChonyumon_docRef)

    if (VueChonyumon_docSnap.exists()) {
      if (VueChonyumon_docSnap.data().open === true) {
        this.VueChonyumon_icon_open = false
        this.VueChonyumon_icon_close = true
        this.VueChonyumon_nav = true
      } else {
        this.VueChonyumon_icon_open = true
        this.VueChonyumon_icon_close = false
        this.VueChonyumon_nav = false
      }
    }

    // GeekSalonの情報をもとに表示方法を変える
    const GeekSalon_docRef = doc(db, "Header", "GeekSalon")
    const GeekSalon_docSnap = await getDoc(GeekSalon_docRef)

    if (GeekSalon_docSnap.exists()) {
      if (GeekSalon_docSnap.data().open === true) {
        this.GeekSalon_icon_open = false
        this.GeekSalon_icon_close = true
        this.GeekSalon_nav = true
      } else {
        this.GeekSalon_icon_open = true
        this.GeekSalon_icon_close = false
        this.GeekSalon_nav = false
      }
    }

    // Firebaseの情報をもとに表示方法を変える
    const Firebase_docRef = doc(db, "Header", "Firebase")
    const Firebase_docSnap = await getDoc(Firebase_docRef)

    if (Firebase_docSnap.exists()) {
      if (Firebase_docSnap.data().open === true) {
        this.Firebase_icon_open = false
        this.Firebase_icon_close = true
        this.Firebase_nav = true
      } else {
        this.Firebase_icon_open = true
        this.Firebase_icon_close = false
        this.Firebase_nav = false
      }
    }
  },
  methods: {
    async other_open() {
      this.other_icon_open = false
      this.other_icon_close = true
      this.other_nav = true

      await setDoc(doc(db, "Header", "other"), {
        open: true,
      })
    },
    async other_close() {
      this.other_icon_open = true
      this.other_icon_close = false
      this.other_nav = false

      await setDoc(doc(db, "Header", "other"), {
        open: false,
      })
    },
    async VueChonyumon_open() {
      this.VueChonyumon_icon_open = false
      this.VueChonyumon_icon_close = true
      this.VueChonyumon_nav = true

      await setDoc(doc(db, "Header", "VueChonyumon"), {
        open: true,
      })
    },
    async VueChonyumon_close() {
      this.VueChonyumon_icon_open = true
      this.VueChonyumon_icon_close = false
      this.VueChonyumon_nav = false

      await setDoc(doc(db, "Header", "VueChonyumon"), {
        open: false,
      })
    },
    async GeekSalon_open() {
      this.GeekSalon_icon_open = false
      this.GeekSalon_icon_close = true
      this.GeekSalon_nav = true

      await setDoc(doc(db, "Header", "GeekSalon"), {
        open: true,
      })
    },
    async GeekSalon_close() {
      this.GeekSalon_icon_open = true
      this.GeekSalon_icon_close = false
      this.GeekSalon_nav = false

      await setDoc(doc(db, "Header", "GeekSalon"), {
        open: false,
      })
    },
    async Firebase_open() {
      this.Firebase_icon_open = false
      this.Firebase_icon_close = true
      this.Firebase_nav = true

      await setDoc(doc(db, "Header", "Firebase"), {
        open: true,
      })
    },
    async Firebase_close() {
      this.Firebase_icon_open = true
      this.Firebase_icon_close = false
      this.Firebase_nav = false

      await setDoc(doc(db, "Header", "Firebase"), {
        open: false,
      })
    },
  },
}
</script>

<style scoped>
section {
  margin-bottom: 5px;
}
/* .other_section {
  border: 1px solid orange;
}
.VueChonyumon_section {
  border: 1px solid green;
}
.GeekSalon_section {
  border: 1px solid rgb(253, 57, 22);
} */
.title_header_other {
  border-bottom: 2px solid orange;
  display: flex;
  align-items: center;
}
.title_header_VueChonyumon {
  border-bottom: 2px solid green;
  display: flex;
  align-items: center;
}
.title_header_GeekSalon {
  border-bottom: 2px solid rgb(253, 57, 22);
  display: flex;
  align-items: center;
}
.title_header_Firebase {
  border-bottom: 2px solid blue;
  display: flex;
  align-items: center;
}
.iconSize {
  /* border: 2px solid red; */
  padding: 5px;
  padding-right: 70%;
  font-size: 20px;
  margin-left: 10px;
}
.iconSize:hover {
  cursor: pointer;
  color: red;
}
</style>
