<template>
  <div class="container">
    <header>
      <slot name="header">
        <h2>始まり</h2>
      </slot>
    </header>

    <main>
      <slot>
        <h2>中身</h2>
      </slot>
    </main>

    <footer>
      <slot name="footer">
        <h2>終わり</h2>
      </slot>
    </footer>
  </div>
</template>
