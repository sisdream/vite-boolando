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
      <div class="card">
        <div class="card-img">
          <img src="./img/1.webp" alt="webp1">
        </div>
      </div>
      <div class="card">
        <div class="card-img">
          <img src="./img/2.webp" alt="webp2">
        </div>
      </div>
      <div class="card">
        <div class="card-img">
          <img src="./img/3.webp" alt="webp3">
        </div>
      </div>
      <div class="card">
        <div class="card-img">
          <img src="./img/4.webp" alt="webp4">
        </div>
      </div>
      <div class="card">
        <div class="card-img">
          <img src="./img/5.webp" alt="webp5">
        </div>
      </div>
      <div class="card">
        <div class="card-img">
          <img src="./img/6.webp" alt="webp6">
        </div>
      </div>
    </section>
  </main>
  <footer></footer>
</template>

<style lang="scss">
  @use './styles/general.scss'
</style>
