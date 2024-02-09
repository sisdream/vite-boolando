<script> 
    export default{
        props: {
            img: String,
            title: String,
        }
    }
</script>

<template>
    <div class="card debug">
        <img :src="img"  :alt="title">
        <h3 class="title">{{ title }}</h3>
    </div>
</template>

<style lang="scss" scoped>
.debug {
    border: 6px solid aqua;
    height: 400px;
    width: 300px;
}

</style>