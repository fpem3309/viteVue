<template>
  <div>
    <div>
      <p>배너</p>
    </div>
    <div>취향 맞춤 펀딩 프로젝트</div>

    <div class="gallery" v-for="item in 10" :key="item">
      <img src="#"/>
      <div class="desc">게시물 제목</div>
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