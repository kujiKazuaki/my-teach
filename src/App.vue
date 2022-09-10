<template>
  <div class="allContainer">
    <nav>
      <router-link to="VueDirective">VueDirective</router-link>｜
      <!-- <router-link to="slot">slot</router-link>｜ -->
      <router-link to="/GoogleLogin">GoogleLogin</router-link>
    </nav>
    <router-view />
  </div>
  <!-- slot 始まり -->
  <slot />
  <!-- slot 終わり -->
</template>

<style></style>
