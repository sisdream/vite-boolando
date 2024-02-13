<script>
  import { store } from './store'
  import axios from 'axios';


  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';
  import AppFooter from './components/AppFooter.vue';
  import AppModal from './components/AppModal.vue';

  export default {
    data(){
      return{
        store,
      }
    },
    components: { AppHeader, AppMain, AppFooter, AppModal },
  }
</script>


<template>
  <app-header />

  <app-modal v-if="store.modal.show" />

  <app-main />

  <app-footer />
</template>

<style lang="scss">
  @use './styles/general.scss'
</style>
