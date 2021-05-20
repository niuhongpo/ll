<!-- 历史记录 -->
<template>
  <div class="history">
    <Title title="历史记录"></Title>
    <div class="search">
      <el-input v-model="inputVal" placeholder="请输入要查询的信息" prefix-icon="el-icon-search" class="elInput"></el-input>
      <el-date-picker v-model="dateVal" type="daterange" start-placeholder="开始日期" end-placeholder="结束日期" range-separator="至" class="elData"></el-date-picker>
      <el-select v-model="selectVal" class="elSelect">
        <el-option v-for="(item, index) in selectDate" :key="index" :value="item.value" :label="item.label">{{item.label}}</el-option>
      </el-select>
    </div>
    <el-table :data="tableData" :height="tableHeight">
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
    </el-table>
    <el-pagination layout="sizes, prev, pager, next" :total="500" background :page-sizes="pa" :pager-count="coun" popper-class="aaaaa"></el-pagination>
  </div>
</template>

<script>
export default {
  name: "History",
  data () {
    return {
      inputVal: "",
      selectDate: [
        {"value": "", "label": "全部"},
        {"value": "11", "label": "昵称"},
        {"value": "22", "label": "相册"},
        {"value": "33", "label": "签名"},
        {"value": "33", "label": "动态"},
        {"value": "33", "label": "头像"},
        {"value": "33", "label": "语音签名"}
      ],
      selectVal: "",
      dateVal: "", // 时间
      tableHeight: "0px",
      tableData: [
        {"id": "1", "name": "张三", "age": "15"},
        {"id": "2", "name": "李四", "age": "15"},
        {"id": "3", "name": "王五", "age": "15"},
        {"id": "4", "name": "赵六", "age": "15"},
        {"id": "1", "name": "张三", "age": "15"},
        {"id": "2", "name": "李四", "age": "15"},
        {"id": "3", "name": "王五", "age": "15"},
        {"id": "4", "name": "赵六", "age": "15"},
        {"id": "1", "name": "张三", "age": "15"},
        {"id": "2", "name": "李四", "age": "15"},
        {"id": "3", "name": "王五", "age": "15"},
        {"id": "4", "name": "赵六", "age": "15"},
        {"id": "1", "name": "张三", "age": "15"},
        {"id": "2", "name": "李四", "age": "15"},
        {"id": "3", "name": "王五", "age": "15"},
        {"id": "4", "name": "赵六", "age": "15"},
        {"id": "1", "name": "张三", "age": "15"},
        {"id": "2", "name": "李四", "age": "15"},
        {"id": "3", "name": "王五", "age": "15"},
        {"id": "4", "name": "赵六", "age": "15"},
        {"id": "1", "name": "张三", "age": "15"},
        {"id": "2", "name": "李四", "age": "15"},
        {"id": "3", "name": "王五", "age": "15"},
      ],
      pa: [2,5], // 分页总条数
      coun: 11  // 显示几个分页
    }
  },
  created() {
    this.tableHeight = document.documentElement.clientHeight - 120 - 62 - 123;
  }
};
</script>

<style scoped>
.history {}

.search { display: flex; justify-content: flex-end; margin-top: 20px;}
/deep/ .el-input__inner { height: 32px; line-height: 32px; border: none;}
/deep/ .el-input__icon { line-height: 32px;}

.search .elInput { width: 320px; height: 32px;}
.search .elSelect { width: 120px;}
.search .elData { width: 300px; margin: 0 10px;}
/deep/ .el-range-editor.el-input__inner { padding: 0 0 0 10px;}

/deep/ .el-table { background: #f5f6fa; margin-top: 30px; border-spacing:0px 10px;}
/deep/ .el-table__header-wrapper, /deep/ .el-table__body-wrapper { width: calc(100% - 20px); padding: 0 10px;}
/deep/ .el-table__header-wrapper table, /deep/ .el-table__body-wrapper table { width: auto !important;}
/deep/ .el-table__header-wrapper th { text-align: center; color: #AEBAC7; background: #f5f6fa; border: none;}
/deep/ .el-table__body { border-spacing: 0 16px; border-collapse:separate;}
/deep/ .el-table__body-wrapper { overflow: auto;}
/deep/ .el-table--enable-row-hover .el-table__body tr:hover { box-shadow: 0 0 8px #B36FFD;}

/deep/ .el-pagination { text-align: center; margin-top: 20px;}
/deep/ .el-pagination.is-background .btn-prev,
/deep/ .el-pagination.is-background .btn-next,
/deep/ .el-pagination.is-background .el-pager li { font-family: appleRoutine; background: #ffffff;}
/deep/ .el-pagination.is-background .el-pager li:hover {color: #B36FFD;}
/deep/ .el-pagination.is-background .el-pager li.active { background-image: linear-gradient(#EE9BF2, #B36FFD);}
</style>