<script>
    export default {
        data () {
            return {
                links: [
                    'Informazioni legali',
                    'Informativa sulla privacy',
                    'Diritto di recesso',
                ],
                icons: [
                    "fa-brands fa-square-twitter",
                    "fa-brands fa-square-facebook",
                    "fa-brands fa-square-instagram",
                    "fa-brands fa-square-pinterest",
                    "fa-brands fa-square-youtube",
                ]
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
                    <li v-for="link in links">
                        <a href="#">{{ link  }}</a>
                    </li>
                </ul>
              </div>
              <div class="right">
                <p>Trovaci anche su</p>
                <div class="icon">
                    <i v-for="icon in icons" :class="icon"></i>
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