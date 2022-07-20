<template>
    <div>
        <p style="color: white">{{ code }}</p>
        <p style="color: white">{{$store.state.token}}</p>
        <button @click="getUserInfo">user</button>
    </div>
</template>

<script>
import { getKakaoToken, getKakaoUserInfo } from './../loginToken.js';
const params = new URLSearchParams(location.search);
// 인가 코드
var code = params.get('code');
export default {
    data() {
        return {
            code,
        }
    },
    created() {
        this.setKakaoToken();
    },
    methods: {
        getUserInfo() {
            this.setUserInfo()
        },
        async setKakaoToken() {
            console.log('카카오 인증 코드', code);
            const { data } = await getKakaoToken(code);
            if (data.error) {
                alert('카카오톡 로그인 오류입니다.');
                return;
            }
            //console.log("setKakaoToken 결과",data)
            console.log("setKakaoToken 으로 access_token = ",data.access_token)
            this.$store.commit('setUserToken',data.access_token);
            await this.setUserInfo();
        },
        async setUserInfo(){
            //const res = await getKakaoUserInfo();
            //await getKakaoUserInfo();
            getKakaoUserInfo();
        }
    }
}
</script>

<style>
</style> 