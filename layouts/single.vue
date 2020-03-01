<template>
  <div>
    <span>single layouts</span>
    <AppNavigation />
    <hr>
    <nuxt />
    <nuxt-link to="/">トップへ戻る</nuxt-link>
    <hr>
    <footer>footer</footer> 
  </div>
</template>

<script>
import AppNavigation from '~/components/AppNavigation.vue';

export default {
  components: {
    AppNavigation,
  }
}
</script>

<style>

</style>