<template>
  <div class="avert">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="selection" width="60" align="center"></el-table-column>
      <el-table-column prop="attributeId" label="编号" width="100" align="center"></el-table-column>
      <el-table-column prop="attributeName" label="属性名称" width="140" align="center"></el-table-column>
      <el-table-column prop="attributeType" label="商品类型" width="140" align="center"></el-table-column>
      <el-table-column prop="attributeMuch" label="属性是否可选" width="120" align="center"></el-table-column>
      <el-table-column prop="attributeMuch" label="属性值的录入方式" width="150" align="center"></el-table-column>
      <el-table-column prop="attributeLsit" label="可选值列表" align="center"></el-table-column>
      <el-table-column prop="attributeSort" label="排序" align="center" width="100"></el-table-column>
      <el-table-column label="操作" align="center" width="200">
        <template>
          <el-button size="mini" @click="upadteattribute">编辑</el-button>
          <el-button type="danger" size="mini">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <Base :options="options" />
  </div>
</template>
<script>
import Base from "../../components/Content/base";
export default {
  data() {
    return {
      tableData: [
        {
          attributeId: 7,
          attributeName: "颜色",
          attributeType: "服装-T恤",
          attributeMuch: "多选",
          attributeWay: "从列表中获取",
          attributeLsit: "黑色，红色，白色，粉色",
          attributeSort: 100
        },
        {
          attributeId: 7,
          attributeName: "颜色",
          attributeType: "服装-T恤",
          attributeMuch: "多选",
          attributeWay: "从列表中获取",
          attributeLsit: "黑色，红色，白色，粉色",
          attributeSort: 100
        },
        {
          attributeId: 7,
          attributeName: "颜色",
          attributeType: "服装-T恤",
          attributeMuch: "多选",
          attributeWay: "从列表中获取",
          attributeLsit: "黑色，红色，白色，粉色",
          attributeSort: 100
        }
      ],
      options: [
        {
          value: "删除",
          label: "删除"
        }
      ]
    };
  },
  components: {
    Base
  },
  methods: {
    toPagination(val) {
      //子组件返回的页数
      console.log(val);
    },
    toNumber(val) {
      //返回当前一页多少条数据
      console.log(val);
    },
    upadteattribute() {
      this.$router.push({ path: "/manage/upadteattribute" });
    }
  }
};
</script>
<style lang="scss" scoped>
.avert {
  width: 97%;
  height: auto;
  margin: auto;
}
</style>