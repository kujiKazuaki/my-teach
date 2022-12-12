<template>
  <div class="all_Container">
    <h1>router学び</h1>
    <section>
      <nav>
        <router-link to="/ComApp">ComApp</router-link>
      </nav>
      <router-view name="GoogleLogin" />
    </section>
  </div>
</template>
