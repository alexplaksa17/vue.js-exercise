<template>
  <div>
    <header-component></header-component>
    <router-view></router-view>
    <footer-component></footer-component>

  </div>
</template>
<script>

import Router from 'vue-router'

import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'



export default {
  components: {HeaderComponent,FooterComponent}
}
</script>
