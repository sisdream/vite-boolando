<script>
import { store } from '../store';

    export default{
        data(){
            return{ store }
        },
        methods: {
            closeModal() {
                store.modal.show = false;
            }
        }
    }

</script>
<template>
    <div class="layover">
        <div class="modal">
            <div class="modal-header">
                <h3>{{ store.modal.brand }}</h3>
                <div class="icon">
                    <i @click="closeModal()" class="fa-solid fa-xmark "></i>
                </div> 
            </div>
            <div class="modal-img">
                <img :src="store.modal.img" alt="">
                <img :src="store.modal.hover" alt="">
            </div>
            <p>{{ store.modal.name }}</p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .layover{
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 3;
        color: #000;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 15px;
    }

    .modal{
        width: 500px;
        background-color: #fff;
        padding: 1rem;

        .modal-header{
            display: flex;
            justify-content: space-between;
        }
    }

    .modal-img{
        width: 100%;
        display: flex;
        gap: 2rem;

        img{
            display: block;
            width: 100%;
        }
    }

</style>