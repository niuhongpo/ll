<!-- 侧边导航栏组件 -->
<template>
  <el-aside width="300px">
    <el-menu class="el-menu-vertical-demo" background-color="#ffffff" text-color="#666666" @select="select">
      <el-submenu v-for="(items, indexs) in navList" :index="items.path" :key="indexs">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{ items.name }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item v-for="(sonItem, index) in items.child" :index="sonItem.path" :key="index"><a>{{ sonItem.name }}</a></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>
<script>
export default {
  name: "Aside",
  data () {
    return {
      navList: [
        {"name": "数据统计", "path": "1", "child": [
          {"name": "1-1", "path": "1-1"},
          {"name": "1-2", "path": "1-2"},
          {"name": "1-3", "path": "1-3"}
          ]
        },
        {"name": "系统管理", "path": "2", "child": [
          {"name": "2-1", "path": "2-1"},
          {"name": "2-2", "path": "2-2"},
          {"name": "2-3", "path": "2-3"}
          ]
        },
        {"name": "用户管理", "path": "3", "child": [
          {"name": "3-1", "path": "3-1"},
          {"name": "3-2", "path": "3-2"},
          {"name": "3-3", "path": "3-3"}
          ]
        },
        {"name": "审核管理", "path": "4", "child": [
          {"name": "审核列表", "path": "examined"},
          {"name": "历史记录", "path": "history"}
          ]
        }
      ]
    }
  },
  methods: {
    select (key) {
      this.$router.push(key);
    }
  }
};
</script>

<style scoped>
.el-aside { height: calc(100vh - 121px); background: #ffffff;}
.el-menu { border: none;}
.el-submenu__title span { font-size: 15px;}
.el-menu-item>a { font-family: appleRoutine; font-size: 14px; color: #666666;}
.el-menu-item.is-active>a { background-image: linear-gradient(#EE9BF2, #B36FFD); color: transparent; -webkit-background-clip: text;}
.el-submenu__title span { font-family: appleBlack;}
</style>