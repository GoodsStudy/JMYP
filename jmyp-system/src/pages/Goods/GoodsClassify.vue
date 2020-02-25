<template>
  <div>
    <List />
    <Table />
    <Pagination :total="20" :page="[5,10, 15]" @pagination="toPagination" @number="toNumber" />
  </div>
</template>

<script>
import List from "../../components/Content/list";
import Table from "../../components/GoodsClassify/Table";
import Pagination from "../../components/Content/Pagination";
export default {
  components: {
    List,
    Table,
    Pagination
  },
  methods: {
    toPagination(val) {
      //子组件返回的页数
      console.log(val);
    },
    toNumber(val) {
      //返回当前一页多少条数据
      console.log(val);
    }
  }
};
</script>