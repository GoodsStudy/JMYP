<template>
  <div class="avert">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="typeId" label="编号" width="100" align="center"></el-table-column>
      <el-table-column prop="typeName" label="类型名称" align="center"></el-table-column>
      <el-table-column prop="typeNumber" label="属性数量" width="200" align="center"></el-table-column>
      <el-table-column prop="typeParameter" label="参数数量" width="200" align="center"></el-table-column>
      <el-table-column label="设置" width="200" align="center">
        <template>
          <el-button size="mini" @click="attribute">属性列表</el-button>
          <el-button size="mini">参数列表</el-button>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200" align="center">
        <template>
          <el-button size="mini">编辑</el-button>
          <el-button type="danger" size="mini">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          typeId: 1,
          typeName: "服装-T恤",
          typeNumber: 2,
          typeParameter: 5
        },
        {
          typeId: 1,
          typeName: "服装-T恤",
          typeNumber: 2,
          typeParameter: 5
        },
        {
          typeId: 1,
          typeName: "服装-T恤",
          typeNumber: 2,
          typeParameter: 5
        },
        {
          typeId: 1,
          typeName: "服装-T恤",
          typeNumber: 2,
          typeParameter: 5
        }
      ]
    };
  },
  methods: {
    attribute() {
      //商品属性列表
      this.$router.push({ path: "/manage/attribute" });
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