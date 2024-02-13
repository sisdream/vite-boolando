<script>
    import axios from 'axios';
    import AppCard from './AppCard.vue';
    import { store } from '../store';

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
        },
        methods: {
            handleCardOpen(productIndex){
                store.modal.show = true;
                const cardSelected = this.products[productIndex];
                store.modal.brand = cardSelected.brand;
                store.modal.name = cardSelected.name;
                store.modal.img = cardSelected.src;
                store.modal.hover = cardSelected.hover;
            }
        }
    }
</script>

<template>
    <div class="container">
        <AppCard v-for="(product, index) in products"
            @card-open="handleCardOpen"
            :img="product.src"
            :brand="product.brand"
            :name="product.name"
            :price="product.price"
            :sales="product.sales"
            :hover="product.hover"
            :isInFavorites="product.isInFavorites"
            :badges="product.badges"
            :index="index"
        />
    </div>
</template>

<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;

    .container {
        position: relative;
        width: min(90%, 1000px);
        margin: 2.5rem auto;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 1.5rem;
    }
</style>