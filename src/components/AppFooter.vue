<script>
    export default {
        data () {
            return {

            }
        },
    }
</script>

<template>
   <section>
        <div class="container">
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
    </section>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;

    section {
        background-color: $secondary-color;
        color: $tertiary-color;
        height: calc($header-h * 1.5);

        .container {
            height: 100%;
            @include d-flex_between_center;

            ul {
                list-style: none;
                @include d-flex_between_center;
                gap: 8px;
            }
        }
    }
</style>