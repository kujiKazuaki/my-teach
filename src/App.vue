<template>
  <div class="allContainer m-1">
    <nav>
      <router-link to="/testSpace">受講生対応</router-link>｜
      <router-link to="VueDirective">VueDirective</router-link>｜
      <router-link to="/VueDirectiveLevelUp">VueDirectiveLevelUp</router-link>｜
      <router-link to="/classHenkou">classHenkou</router-link>｜
      <router-link to="/slotpropsApp">slot-propsApp</router-link>｜
      <router-link to="/calendarApp">calendarApp</router-link>｜
      <router-link to="/ColorApp">ColorApp</router-link>｜
      <router-link to="/vuex">vuex</router-link>｜
      <router-link to="/counterApp">counterApp</router-link>｜
      <router-link to="/CountDown">CountDown</router-link>
    </nav>
    <section class="VueChonyumon">
      <h1>Vue.js超入門</h1>
      <nav>
        <router-link to="/">testPlay</router-link>｜
        <router-link to="/ComApp">ComApp</router-link>｜
        <router-link to="/Router">Router</router-link>｜
        <router-link to="/axios">Axios</router-link>｜
        <router-link to="/Bootstrap">Bootstrap</router-link>｜
        <router-link to="/awesome">awesome</router-link>｜
      </nav>
    </section>
    <section class="GeekSalon">
      <h1>GeekSalon</h1>
      <nav>
        <router-link to="/memoApp">memoApp</router-link>｜
        <router-link to="/memoAppSetup">memoAppSetup</router-link>｜
        <router-link to="/paletteApp">paletteApp</router-link>｜
      </nav>
    </section>
    <section class="border border-2 border-warning">
      <div style="display: flex">
        <p class="h1">Firebase</p>
        <p class="h2 ms-2 mt-1">
          <a
            href="https://console.firebase.google.com/u/0/project/my-teach-89179/firestore/data/~2FmemoAppSetup~2F1Y5uqR9zDgjjl2WZQSae?hl=ja"
            target="_blank"
            >リンク</a
          >
        </p>
      </div>
      <div>
        <nav>
          <router-link to="/GoogleLogin">GoogleLogin</router-link>｜
          <router-link to="/sortMethods">sortMethods</router-link>｜
          <router-link to="/GoodMemos">GoodMemos</router-link>｜
        </nav>
      </div>
    </section>

    <!-- 「router-view」はリンク先を表示させる場所を指定できる -->
    <div class="section_Container">
      <router-view />
    </div>
  </div>
  <!-- slot 始まり -->
  <slot />
  <!-- slot 終わり -->
</template>

<style>
.section_Container {
  text-align: center;
  list-style: none;
}
</style>
