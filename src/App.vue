<template>
  <div class="allContainer">
    <nav>
      <router-link to="VueDirective">VueDirective</router-link>｜
      <!-- <router-link to="slot">slot</router-link>｜ -->
      <router-link to="/GoogleLogin">GoogleLogin</router-link>｜
      <router-link to="/classHenkou">classHenkou</router-link>｜
      <router-link to="/slotpropsApp">slot-propsApp</router-link>｜
      <router-link to="/calendarApp">calendarApp</router-link>｜
      <router-link to="/ColorApp">ColorApp</router-link>
    </nav>
    <router-view />
  </div>
  <!-- slot 始まり -->
  <slot />
  <!-- slot 終わり -->
</template>

<style></style>
