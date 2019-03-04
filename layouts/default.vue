<template>
  <div class="bg-lt">
    <main-header></main-header>
    <nuxt/>
    <main-footer></main-footer>
  </div>
</template>

<script>
  import MainHeader from '~/components/main-header.vue'
  import MainFooter from '~/components/main-footer.vue'
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  
  export default {
    components: {
      MainHeader,
      MainFooter
    }
  }
</script>