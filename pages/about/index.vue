<template>
  <div>
    <h2>
      About Index Page
    </h2>

    <ul>
      <li> <nuxt-link :to="{name:'index'}">Home</nuxt-link> </li>
      <li> <a href="/">Home</a></li>
    </ul>
    
  </div>
</template>

<script>
    export default {
      name: "index",
    }
</script>

<style scoped>

</style>
