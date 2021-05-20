<template>
  <h2>{{title}}</h2>
</template>

<script>
export default {
  name: "Title",
  props: ["title"]
};
</script>

<style scoped>
  h2 {
    font-family: appleBlack;
    font-size: 17px;
    line-height: 32px;
    background-image: linear-gradient(to right, #B36FFD, #EE9BF2);
    color: transparent;
    float: left;
    -webkit-background-clip: text;
    display: inline-block;
    margin: 0 0 0 40px;
  }
</style>