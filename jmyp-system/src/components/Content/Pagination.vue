<template>
  <!-- 传入参数
    :total="20"                     总页数
    :page="[5,10, 15]"              当前页面多少页显示
    @pagination="toPagination"      上一页的方法
    @number="toNumber"              下一页的方法
  -->
  <div class="pagination">
    <el-pagination
      class="pagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="page"
      :page-size="5"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  props: ["total", "page"],
  data() {
    return {
      currentPage4: 1
    };
  },
  methods: {
    handleSizeChange(val) {
      //但前一页显示的条数
      console.log(`每页 ${val} 条`);
      this.$emit("number", val);
    },
    handleCurrentChange(val) {
      //当前页数
      console.log(`当前页: ${val}`);
      this.$emit("pagination", val);
    }
  }
};
</script>
<style lang="scss" >
.pagination {
  float: right;
  margin-right: 10px;
}
</style>