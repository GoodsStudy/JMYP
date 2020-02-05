<template>
  <div class="base">
    <el-select v-model="value" placeholder="批量操作" size="small" @change="btn">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <el-button class="button" type="primary" size="small">确定</el-button>

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
  props: ["options", "total", "page"],
  data() {
    return {
      value: "",
      currentPage4: 1
    };
  },
  methods: {
    btn() {
      //选择批量的操作
      console.log(this.value);
    },
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

<style lang="scss" scoped>
.base {
  margin: 20px 0;
  .button {
    margin-left: 20px;
  }
  .pagination {
    float: right;
  }
}
</style>