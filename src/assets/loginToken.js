import axios from "axios";

const kakaoHeader = {
    'Authorization': ' KakaoAK 8bc276f430a1baeccc4e933ce4e07819',
    'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
};

var result = '';

const getKakaoToken = async (code) => {
    console.log('loginWithKakao');
    try {
        const data = {
            grant_type: 'authorization_code',
            client_id: '8bc276f430a1baeccc4e933ce4e07819',
            redirect_uri: 'http://localhost:3000/KakaoLogin',
            code: code,
        };
        const queryString = Object.keys(data)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
            .join('&');

        console.log(queryString)
        console.log(('https://kauth.kakao.com/oauth/token', queryString, { headers: kakaoHeader }))
        result = await axios.post(`https://kauth.kakao.com/oauth/token`, queryString, { headers: kakaoHeader });

        console.log('카카오 토큰', queryString);
        console.log(result)

        return result;
    } catch (e) {
        return e;
    }
};

const getKakaoUserInfo = async (data) => {
    // console.log(result.data.access_token)
    // await Kakao.API.request({
    //     url: '/v2/user/me',
    //     success: function (response) {
    //         data = response;
    //     },
    //     fail: function (error) {
    //         console.log(error);
    //     },
    // });
    // console.log('카카오 계정 정보', data);
    // return data;
}

const refreshToken = async () => {
    // try {
    //     const { result } = (await axios.get('/refreshToken')).data;
    //     VueCookies.set('access-token', result.access_token);
    //     console.log('Refresh API 성공', result);
    //     return result;
    // } catch (e) {
    //     console.log(e);
    // }
}

export {
    getKakaoToken,
    getKakaoUserInfo,
    refreshToken,
}; 