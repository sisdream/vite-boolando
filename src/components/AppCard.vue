<script>
export default {
    props: {
        img: String,
        hover: String,
        brand: String,
        name: String,
        price: Number,
        sales: Number,
        isInFavorites: Boolean,
        badges: Array,
    },
};
</script>

<template>
    <div class="card">
        <div class="img-container">
            <img :src="img" :alt="brand" />
            <img class="hover-img" :src="hover" :alt="brand">

            <div class="badges">
                <span v-for="badge in badges" :class="badge.type === 'tag' ? 'sustainability' : 'discount'"    class="badge">
                    {{ badge.value }}
                </span>
            </div>
        </div>

        <div class="heart">
            <i v-if="isInFavorites" class="fa-solid fa-heart"></i>
            <i v-else class="fa-regular fa-heart"></i>
        </div>

        <div class="text">
            <p class="title">{{ brand }}</p>
            <h5>{{ name }}</h5>
            <div class="prices">
                <span v-if="sales" class="sale">{{ sales }}€</span>
                <span class="full-price">{{ price }}€</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    width: calc(100% / 3 - 2rem);
    position: relative;
    cursor: pointer;
    &:hover .img-container img{
        display: none;
    }
    &:hover .img-container .hover-img{
        display: block;
    }
}

.img-container {
    width: 100%;
    position: relative;
    img {
        display: block;
        width: 100%;
    }

    .hover-img{
        display: none;
    }
}

.heart{
    font-size: 1.3rem;
    position: absolute;
    top: 10px;
    right: 0;
    background-color: #fff;
    width: 40px;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.badges{
    position: absolute;
    bottom: 40px;
    left: 0;
    display: flex;
    flex-direction: row-reverse;
    gap: 0.3rem;
}

.badge{
    padding: .25rem .5rem;
    color: #fff;
    font-size: .7rem;
    &.sustainability {
        background-color: #008000;
    }

    &.discount{
        background-color: #ff0000;
    }
}


.title{
    color: #888888;
    font-size: 0.8rem;
}

.prices {
    display: flex;
    gap: 0.5rem;
    font-size: 0.8rem;
    font-weight: 600;

    .sale {
        color: #ff0000;
    }
    
    .full-price{
        text-decoration: line-through;
    }
}
</style>
