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
            <div class="modal-price">
                <p class="modal-sale">{{ store.modal.sales }} €</p>
            </div>
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

    h3{
        border-bottom: 1px solid gray;
        width: 100%;
        margin-bottom: 1rem ;
    }
    .modal-img{
        width: 100%;
        display: flex;
        gap: 2rem;
        margin-bottom: 1rem;

        img{
            display: block;
            width: 100%;
            border-radius: 15px;
        }
    }

    .modal-price{
        display: flex;
        gap: 2rem    
    }

    .modal-sale{
        color: crimson;
    }
</style>