<!-- 页头组件 -->
<template>
   <el-header height="120px">
      <div class="logo">
        <img src="@/assets/img/logo.png" class="logoImg">
        <a class="logoText">盼盼交友<br>管理系统</a>
      </div>
      <div class="userInfo">
        <a class="userName">管理员</a>
        <img src="@/assets/img/portrait.png" class="userPortrait">
      </div>
    </el-header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.el-header { background: #ffffff; display: flex; align-items: center; margin-bottom: 1px;}
.logo { flex: 1; align-items: center; margin-left: 50px;}
.logoImg { width: 60px; height: 60px; float: left;}
.logoText { font-family: appleRoutine; font-size: 16px; display: block; float: left; margin: 8px 0 0 16px;}
.userInfo { flex: 1;  margin-right: 50px;}
.userPortrait { width: 60px; height: 60px; float: right;}
.userName { font-family: appleBlack; line-height: 60px; float: right; margin-left: 30px;}
</style>