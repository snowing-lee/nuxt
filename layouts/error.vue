<template>
  <div>

    <!-- 配置404页面: 在layouts/创建 error.vue  无需其他配置
          当发生错误时会自动加载此页面-->

    <h2 v-if="error.statusCode==404">
      404了.......
    </h2>
    <h2 v-else>
      500了.......
    </h2>
  </div>
</template>

<script>
export default {
  name: "error",
  props: ['error']
}
</script>

<style scoped>

</style>
