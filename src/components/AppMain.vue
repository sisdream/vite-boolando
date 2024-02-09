<script>
    export default {
        data () {
            return {

            }
        },
    }
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="card debug"></div>
            <div class="card debug"></div>
            <div class="card debug"></div>
            <div class="card debug"></div>
            <div class="card debug"></div>
            <div class="card debug"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;

    .container {
       
        margin: calc($grid-spacing * 4);;
        height: 100%;

        .row {
            height: 100%;
            flex-wrap: wrap;
            display: flex;
            gap: 8rem;
        }
    }
</style>