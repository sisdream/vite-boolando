<script>
    import AppCard from './AppCard.vue';
    export default {
        data () {
            return {
                
            }
        },
        components: { AppCard },
    }
</script>

<template>
    <div class="container">
        <AppCard />
    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;

    .container {
        margin: calc($grid-spacing * 4) 100px;
        height: 100%;

        .row {
            height: 100%;
            flex-wrap: wrap;
            display: flex;
            gap: 8rem;
        }
    }
</style>