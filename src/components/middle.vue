<template>
  <div>
    <div>
      <p>배너</p>
    </div>
    <div>개인 블로그 만들어보자!!</div>

    <div class="gallery" v-for="item in 10" :key="item">
      <img src="#"/>
      <div class="desc">게시물 제목!!!</div>
      <p>게시물 날짜!!</p>
    </div>

  </div>
</template>

<script>
import './../css/main.css'
export default {};
</script>

<style>

</style>