<script>
    import axios from 'axios';
    import AppCard from './AppCard.vue';
    export default {
        data () {
            return {
               products: [],
            }
        },
        components: { AppCard },
        created(){
            axios.get('http://localhost:3000/products').then((res) =>{
                console.log(res);
                this.products = res.data;
            })
        }
    }
</script>

<template>
    <div class="container">
        <AppCard v-for="product in products"
            :img="product.src"
            :brand="product.brand"
            :name="product.name"
            :price="product.price"
            :sales="product.sales"
            :hover="product.hover"
            :isInFavorites="product.isInFavorites"
            :badges="product.badges"
        />
    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;

    .container {
        width: min(90%, 1000px);
        margin: 2.5rem auto;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 1.5rem;
    }
</style>