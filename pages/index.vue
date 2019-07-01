<template>
  <div>
    <ul>
      <li> <nuxt-link :to="{name:'index'}">Home</nuxt-link> </li>
      <li> <a href="/">Home</a> </li>

      <li> <nuxt-link :to="{name:'about'}" >About</nuxt-link> </li>
      <li> <a href="/about">About</a> </li>

      <li> <nuxt-link :to="{name:'news',params:{newsId:'220'}}">News</nuxt-link> </li>
      <li> <a href="/news">News</a> </li>

      <li> <nuxt-link :to="{name:'asyData'}">AsyData</nuxt-link> </li>


      <div class="pageImage">
        <!--<img src="~static/work.jpg" />-->
      </div>
    </ul>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style>
.pageImage {
  height: 76rem;
  width: 67rem;
  background-image:url("~static/work.jpg");
}
</style>

