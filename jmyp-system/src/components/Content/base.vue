<template>
  <div class="base">
    <el-select v-model="value" placeholder="批量操作" size="small" @change="btn">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <el-button class="button" type="primary" size="small">确定</el-button>
    <Pagination :total="20" :page="[5,10, 15]" @pagination="toPagination" @number="toNumber" />
  </div>
</template>
<script>
import Pagination from "./Pagination";
export default {
  props: ["options"],
  data() {
    return {
      value: ""
    };
  },
  methods: {
    btn() {
      //选择批量的操作
      console.log(this.value);
    },
    toPagination(val) {
      //子组件返回的页数
      console.log(val);
    },
    toNumber(val) {
      //返回当前一页多少条数据
      console.log(val);
    }
  },
  components: {
    Pagination
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