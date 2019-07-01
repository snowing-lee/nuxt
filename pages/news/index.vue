<template>
  <div>
    <h2>
      News Index Page
    </h2>

    <ul>
      <li> <nuxt-link :to="{name:'index'}">Home</nuxt-link> </li>
      <li> <a href="/">Home</a></li>
      <li> <a href="/news/1">News1</a></li>
      <li> <a href="/news/2">News2</a></li>
      <li> <a href="/news/s">News3</a></li>
    </ul>


    <p>
      NewsId: {{$route.params.newsId}}
    </p>

  </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>

</style>
