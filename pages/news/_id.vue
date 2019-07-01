<template>
  <div>
    <h2>News-content</h2>

    <p>NewsId:{{$route.params.id}}</p>
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
    </ul>
  </div>
</template>

<script>
  //  _xxx.vue   (以下划线开始)为动态路由固定写法
export default {
    name: "_id",
    validate({params}){
      // 效验参数是数字,返回true正常进入动态页面,返回false进入nuxt准备的404页面
      return  /^\d+$/.test(params.id);
    }
};
</script>

<style scoped>

</style>
