<script>
   import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';
  import AppFooter from './components/AppFooter.vue';

  export default {
    components: { AppHeader, AppMain, AppFooter },
  }
</script>


<template>
  

  <!-- <main>
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

  <footer>
      <div class="jumbo-footer">
        <div class="left">
          <h3>Boolando srl</h3>
          <ul>
            <li><a href="#">Informazioni legali</a></li>
            <li><a href="#">Informativa sulla privacy</a></li>
            <li><a href="#">Diritto di recesso</a></li>
          </ul>
        </div>
        <div class="right">
          <p>Trovaci anche su</p>
          <div class="icon">
            <i class="fa-brands fa-square-twitter"></i>
            <i class="fa-brands fa-square-facebook"></i>
            <i class="fa-brands fa-square-instagram"></i>
            <i class="fa-brands fa-square-pinterest"></i>
            <i class="fa-brands fa-square-youtube"></i>
          </div>
        </div>
      </div>
  </footer>  -->
  <app-header />

  <app-main />

  <app-footer />
</template>

<style lang="scss">
  @use './styles/general.scss'
</style>
