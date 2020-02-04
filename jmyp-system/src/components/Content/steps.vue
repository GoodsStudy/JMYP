<template>
  <div>
    <el-steps :space="200" :active="active" finish-status="success" :align-center="true">
      <el-step title="填写商品信息"></el-step>
      <el-step title="填写商品促销"></el-step>
      <el-step title="填写商品属性"></el-step>
      <el-step title="选择商品关联"></el-step>
    </el-steps>
  </div>
</template>
<script>
export default {
  props: ["active"]
};
</script>