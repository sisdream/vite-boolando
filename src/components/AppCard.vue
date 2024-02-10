<script>
export default {
    props: {
        img: String,
        title: String,
    },
};
</script>

<template>
    <div class="card">
        <div class="img-container">
            <img :src="img" :alt="title" />
        </div>
        <h3 class="title">{{ title ?? 'sto cazzo' }}</h3>
    </div>
</template>

<style lang="scss" scoped>
.card {
    border: 3px solid black;
    width: calc(100% / 3 - 2rem);
}
.img-container {
    width: 100%;
    // debug
    background-color: red;
}

.img-container img {
    display: block;
    width: 100%;
}
</style>
