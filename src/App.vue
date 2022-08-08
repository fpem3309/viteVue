<template>
<div>
  <div id="area">
    <button @click="$store.dispatch('getData')">버튼</button>
    <div v-for="(a,i) in $store.state.more" :key="i">
      <img :src="`${$store.state.more[i].urls.small_s3}`">
    </div>

<input @input="searchWord" type="search" placeholder="프랍 검색" >
<button @click="test"> test </button>
    </div>


  <div id="area2">
    <Board/>
    <KakaoTalk/>
  </div>


  <div  v-for="(item,index) in findElement" :key="index">
  {{item.url}}
   </div>

  </div>



</template>

<script>
import Board from './components/Board.vue'
import KakaoTalk from './components/KakaoTalk.vue'
export default {
  components :{
    Board,
    KakaoTalk
},
data(){
  return{
    findWord:'',
    arr : [
      {'url': 'test.img', 'prop' : '백'},
      {'url': 'test2.img', 'prop' : '프론트'}
      ],
      
  }
},
methods : {
  searchWord(e) {
            this.findWord = e.target.value
        },
},
    computed: {
        // this.findWord 가 변하면 그 문자가 포함된 리스트를 계산한다.
        findElement: function () {
          if(this.findWord){
                return this.arr.filter((value) => {
              return (value.prop.indexOf(this.findWord) > -1);
            }, this)
          }else{
            return this.arr
          }

        }
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
</style>