<template>
<div>
  <div id="area">
    <button @click="$store.dispatch('getData')">버튼</button>
    <button @click="$store.dispatch('getData')">버튼</button>
    <button @click="$store.dispatch('getData')">버튼</button>
    <div v-for="(a,i) in $store.state.more" :key="i">
      <img :src="`${$store.state.more[i].urls.small_s3}`">
    </div>
    </div>


  <div id="area2">
    <Board/>
  </div>
  </div>



</template>

<script>
import Board from './components/Board.vue'
export default {
  components :{
    Board
  }

}
</script>

<style>
body{
  margin: 0;
}
  #app {
    
    width : 100vw;
    height : 100vh;

  }

#area{
  width:30%;
  float:left;
}
#area2{
  width:30%;
  float:right;
}
</style>>