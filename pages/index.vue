<template>
  <b-container fluid>
    <banner v-bind="$store.state.banner"></banner>
    <about-me v-bind="$store.state.about"></about-me>
    <resume v-bind="$store.state.resume"></resume>
  </b-container>
</template>
  
<script>
  import Banner from '~/components/banner.vue'
  import AboutMe from '~/components/about-me.vue'
  import Resume from '~/components/resume.vue'

  export default {
    components: {
      Banner,
      AboutMe,
      Resume
    },
    async fetch ({ store, params }) {
      await store.dispatch('GET_BANNER')
      await store.dispatch('GET_ABOUT')
      await store.dispatch('GET_RESUME')
    }
  }
</script>
