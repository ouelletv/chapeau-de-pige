<template>
  <div id="app">
    <div style="display: none;">
      <svg xmlns="http://www.w3.org/2000/svg"><symbol id="arrow-enter" viewBox="0 0 128 62"><title>arrow-enter</title><path d="M112.456.564v32.251h-80.97V18.953L16.012 29.636.541 40.316 16.013 51l15.472 10.68V47.82h80.971v.015h15.003V.66z" fill-rule="nonzero" stroke-width="0"/></symbol></svg>
    </div>
    <div class="container">
      <main class="main-content">
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script>

  import "@/assets/css/global.sass"

  export default {

  }

</script>

<style lang="scss">

</style>
