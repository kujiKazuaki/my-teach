<template>
  <div>
    <section class="other_section">
      <div class="title_header_other">
        <h4>Others</h4>
        <font-awesome-icon
          icon="fa-plus"
          class="iconSize"
          @click="other = !other"
          v-if="!other"
        />
        <font-awesome-icon
          icon="fa-minus"
          v-if="other"
          class="iconSize"
          @click="other = !other"
        />
      </div>
      <nav v-if="other">
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
        <router-link to="/DrugAndDrop_setup">DrugAndDrop_setup</router-link>｜
        <router-link to="/DragAndDrop">DragAndDrop</router-link>｜
        <router-link to="/calculation">calculation</router-link>｜
      </nav>
    </section>

    <section class="VueChonyumon_section">
      <div class="title_header_VueChonyumon">
        <h4>Vue.js超入門</h4>
        <font-awesome-icon
          icon="fa-plus"
          class="iconSize"
          @click="VueChonyumon = !VueChonyumon"
          v-if="!VueChonyumon"
        />
        <font-awesome-icon
          icon="fa-minus"
          v-if="VueChonyumon"
          class="iconSize"
          @click="VueChonyumon = !VueChonyumon"
        />
      </div>
      <nav v-if="VueChonyumon">
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
          @click="GeekSalon = !GeekSalon"
          v-if="!GeekSalon"
        />
        <font-awesome-icon
          icon="fa-minus"
          v-if="GeekSalon"
          class="iconSize"
          @click="GeekSalon = !GeekSalon"
        />
      </div>
      <nav v-if="GeekSalon">
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
          @click="Firebase = !Firebase"
          v-if="!Firebase"
        />
        <font-awesome-icon
          icon="fa-minus"
          v-if="Firebase"
          class="iconSize"
          @click="Firebase = !Firebase"
        />
      </div>
      <div>
        <nav v-if="Firebase">
          <router-link to="/GoogleLogin">GoogleLogin</router-link>｜
          <router-link to="/sortMethods">sortMethods</router-link>｜
          <router-link to="/GoodMemos">GoodMemos</router-link>｜
        </nav>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      other: false,
      VueChonyumon: false,
      GeekSalon: false,
      Firebase: false,
    }
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
