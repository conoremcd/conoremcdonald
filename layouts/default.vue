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

<style type="text/css">
  /* Common Page Elements */
  /*_______________*/

  .logo{
    height: 50px !important;
    width: 50px !important;
  }

  .portrait{
    border: 2px solid #dddddd;
    max-width: 200px;
  }

  .about-info{
    font:  18px Source Sans Pro;
    word-spacing: 3px;
  }

  .social-link{
    padding-bottom: 2em;
    margin-bottom: 2em;
  }

  .stats{
    background-color: #eeeeee;
  }

  .items{
    text-align: center;
    max-width: 100%;
  }

  .item{
    height: 100%;
  }

  .cap{
    margin: auto;
    text-align: center;
  }

  /* ID Elements */
  /*_____________*/


  /* Style Details */
  /*_______________*/

  .lt-t{
    font-family: Source Sans Pro, sans-serif;
    color: #e6f5f5 !important;
  }

  .md-t{
    font-family: Source Sans Pro, sans-serif;
    color: #879191 !important;
  }

  .drk-t{
    font-family: Source Sans Pro, sans-serif;
    color: #232d2d !important;
  }

  .clr-t{
    font-family: Source Sans Pro, sans-serif;
    color: #26a883;
  }

  .lnk-t{
    color: #3aa6dd;
  }

  .bg-wt {
    background-color: #ffffff !important;
  }

  .bg-lt{
    background-color: #faffff !important;
  }

  .bg-md{
    background-color: #879191 !important;
  }

  .bg-drk{
    background-color: #232d2d !important;
  }

  .bg-clr{
    background-color: #26a883; 
  }

  .bg-drk-trnsp{
    background-color: rgba(35, 45, 45, 0.6) !important;
  }

  .brdr-top{
    border-top: 2px solid #ebf5f5; 
  }

  .md-brdr-top{
    border-top: 2px solid #dce6e6; 
  }

  .drk-brdr-top{
    border-top: 2px solid #232d2d;
  }

  .clr-brdr-top{
    border-top: 3px solid #26a883;  
  }

  .brdr-btm{
    border-bottom: 2px solid #ebf5f5; 
  }

  .md-brdr-btm{
    border-bottom: 2px solid #dce6e6; 
  }

  .drk-brdr-btm{
    border-bottom: 2px solid #232d2d;
  }

  .clr-brdr-btm{
    border-bottom: 3px solid #26a883; 
  }
</style>