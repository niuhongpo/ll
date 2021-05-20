<!-- 首页入口组件 -->
<template>
  <el-container class="is-vertical">
    <Header/>
    <el-container>
      <Aside/>
      <Main/>
    </el-container>
  </el-container>
</template>

<script>
import Header from "./components/Header";
import Aside from "./components/Aside";
import Main from "./components/Main";
export default {
  name: "index",
  components: {
    Header,
    Aside,
    Main
  }
};
</script>

<style scoped>
</style>