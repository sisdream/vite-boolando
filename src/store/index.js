import { reactive } from 'vue';

export const store = reactive({
    apiUri: 'http://localhost:3000/',

    modal: {
        show: false,
        brand: "",
        name: "",
        img: "",
        hover: "",
        sales: "",
        prices: "",
    }
})