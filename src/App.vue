<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="jumbo">
      <ul>
        <li><a href="#">Donna</a></li>
        <li><a href="#">Uomo</a></li>
        <li><a href="#">Bambino</a></li>
      </ul>
      <div class="logo">
        <img src="../public/boolean-logo.png" alt="logo">
      </div>
      <div class="icon">
        <i class="fa-solid fa-user"></i>
        <i class="fa-solid fa-heart"></i>
        <i class="fa-solid fa-bag-shopping"></i>
      </div>
    </div>
  </header>
  <main>
    <section>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </section>
  </main>
  <footer></footer>
</template>

<style lang="scss">
  @use './styles/general.scss'
</style>
