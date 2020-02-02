<template>
  <div class="table">
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="60" align="center"></el-table-column>
      <el-table-column prop="name" label="编号"></el-table-column>
      <el-table-column prop="address" label="商品图片" height="auto"></el-table-column>
      <el-table-column prop="address" label="商品名称"></el-table-column>
      <el-table-column prop="address" label="价格/货号"></el-table-column>
      <el-table-column prop="address" label="标签"></el-table-column>
      <el-table-column prop="address" label="推荐"></el-table-column>
      <el-table-column prop="address" label="SKU库存"></el-table-column>
      <el-table-column prop="address" label="销量"></el-table-column>
      <el-table-column prop="address" label="审核状态"></el-table-column>
      <el-table-column prop="address" label="操作"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
       multipleSelection: []
    };
  },
  methods: {
    handleSelectionChange(val) {
        //table 选中的的返回到multipleSelection
      this.multipleSelection = val;
    }
  }
};
</script>

<style lang="scss">
.table {
  width: 97%;
  margin: auto;
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
}
</style>