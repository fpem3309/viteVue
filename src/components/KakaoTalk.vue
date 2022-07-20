<template>
  <b-button class="mt-2" variant="warning" style=" width:100%"><b-icon-chat-fill class="mr-2"/>카카오톡 로그인</b-button>

  
  <b-button @click="signWhithKakao" class="mt-2" variant="warning" style=" width:100%">
    <b-icon-chat-fill class="mr-2" />카카오톡 로그인
  </b-button>

  <button @click="signWhithKakao">gd</button>
</template>

<script>
export default {
  methods: {
    signWhithKakao() {
      const params={
        //redirectUri: this.$router.push('/KakaoLogin')
        redirectUri: 'http://localhost:5173/KakaoLogin'
      }
      //카카오 인증코드 요청
      Kakao.Auth.authorize(params);
    },
  },
}
</script>


<style>
</style> 