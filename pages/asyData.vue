<template>
    <div>
      <h1>{{info.name}}</h1>
      <h1>{{info.age}}</h1>
      <h1>{{info.interest}}</h1>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "asyData",
  data() {
      return{
        name: "helloworld"
      }
  },
  // 组件创建之前执行
  // 获得数据方法一
  // asyncData() {
  //   return axios.get('https://api.myjson.com/bins/1du3d3')
  //     .then((res)=>{
  //       return {
  //         info:res.data
  //       }
  //     })
  // }

  // 获得数据方法二
  async asyncData() {
    let {data} =  await axios.get('https://api.myjson.com/bins/1du3d3')
    return {info:data}
  }
}
</script>

<style scoped>

</style>
