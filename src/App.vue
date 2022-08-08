<template>
<div>
  <div id="area">

    <div v-for="(a,i) in $store.state.more" :key="i">
      <img :src="`${$store.state.more[i].urls.small_s3}`">
    </div>

    <input @input="searchWord" type="search" placeholder="프랍 검색" >
    <button @click="test"> test </button>

  <div>
    <table>
        <tr>
          <th>Title</th>
          <th>Content</th>
          <th>Date</th>
          <th>Views</th>
        </tr>
        <tr v-for="(item,index) in findElement" :key="index">
          <td>{{item.title}}</td>
          <td>{{item.content}}</td>
          <td>2022-08-08</td>
          <td>0</td>
        </tr>
    </table>
  </div>

<router-view></router-view>
</div>
</div>
</template>

<script>
import Board from './components/Board.vue'
export default {
  components :{
    Board,
},
data(){
  return{
    findWord:'',
    arr : [
      {'title': '백', 'content' : '백임'},
      {'title': '프론트', 'content' : '프론트임'}
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
              return (value.title.indexOf(this.findWord) > -1);
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
</style>