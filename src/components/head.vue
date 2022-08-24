<template>
    <div>
        <ul>
            <li><a class="active" href="#home">펀딩예정</a></li>
            <li><a href="#news">펀딩</a></li>
            <li><a href="#contact">스토어</a></li>
            <li><a href="#about">투자</a></li>
            <li><a href="#about">더보기</a></li>

            <li><input type="search" /></li>
            <li><a href="#about">로그인</a></li>
            <li><a href="#about">회원가입</a></li>
            <li><a href="#about">프로젝트 오픈 신청</a></li>
        </ul>

    </div>
</template>

<script>
export default {

}
</script>

<style>
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

li {
    float: left;
}

li a,
input {
    display: block;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

li a:hover {
    background-color: white;
}
</style>