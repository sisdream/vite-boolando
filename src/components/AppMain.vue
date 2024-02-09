<script>
    import AppCard from './AppCard.vue';
    export default {
        data () {
            return {
                products: [
                    {
                        src: '1.webp',
                        hover: '1b.webp',
                        brand: 'Levis',
                        name: 'Relaxed Fit',
                        price: 29.99,
                        sales: 14.99,
                        isInFavorites: true,
                        badges: [
                           {
                                type: 'tag',
                                value: 'Sostenibilità',
                           },
                           {
                                type: 'discount',
                                value: '-50%',
                            },
                        ],
                    },
                    {
                        src: '2.webp',
                        hover: '2b.webp',
                        brand: 'Guess',
                        name: 'Roses tee',
                        price: 29.99,
                        sales: 20.99,
                        isInFavorites: true,
                        badges: [
                            {
                                type: 'discount',
                                value: '-30%',
                            },
                        ],
                    },
                    {
                        src: '3.webp',
                        hover: '3b.webp',
                        brand: 'Come Zucchero Filato',
                        name: 'Voglia di colri pastello',
                        price: 164.99,
                        sales: 129.99,
                        isInFavorites: false,
                        badges: [
                            {
                                type: 'discount',
                                value: '-30%',
                            },
                        ],
                    },
                    {
                        src: '4.webp',
                        hover: '4b.webp',
                        brand: 'Levis',
                        name: 'Tee Unisex',
                        price: 29.99,
                        sales: 14.99,
                        isInFavorites: false,
                        badges: [
                           {
                                type: 'tag',
                                value: 'Sostenibilità',
                           },
                           {
                                type: 'discount',
                                value: '-50%',
                            },
                        ],
                    },
                    {
                        src: '5.webp',
                        hover: '5b.webp',
                        brand: 'Maya Deluxe',
                        name: 'Stripe Bodice',
                        price: 99.99,
                        isInFavorites: true,  
                    },
                    {
                        src: '6.webp',
                        hover: '6b.webp',
                        brand: 'Esprit',
                        name: 'Maglione-Black',
                        price: 29.99,
                        isInFavorites: true,
                        badges: [
                           {
                                type: 'tag',
                                value: 'Sostenibilità',
                           },
                        ],
                    },
                ]
            }
        },
        components: { AppCard },
    }
</script>

<template>
    <div class="container">
        <AppCard 
           
        />
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