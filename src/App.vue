<template>
  <div>
    <headmenu></headmenu>
    <middlemenu></middlemenu>
    <lankmenu></lankmenu>
  </div>
</template>

<script>
import headmenu from './components/head.vue'
import middlemenu from './components/middle.vue'
import lankmenu from './components/lank.vue'
export default {
  components: {
    headmenu,
    middlemenu,
    lankmenu
  },
  data() {

  }
}
</script>

<style>
#app {
  height: 100vh;
}
</style>