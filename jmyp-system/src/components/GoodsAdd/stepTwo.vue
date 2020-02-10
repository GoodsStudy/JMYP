<template>
  <div v-show="active === 1">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="赠送积分：">
        <el-input v-model="form.integral" size="small"></el-input>
      </el-form-item>
      <el-form-item label="赠送成长值：">
        <el-input v-model="form.growthIntegral" size="small"></el-input>
      </el-form-item>
      <el-form-item label="购买积分限制：">
        <el-input v-model="form.astrict" size="small"></el-input>
      </el-form-item>
      <el-form-item label="预告商品：">
        <el-switch v-model="form.foreshow" active-color="#dcdfe6" inactive-color="#409eff"></el-switch>
      </el-form-item>
      <el-form-item label="商品上架：">
        <el-switch v-model="form.putaway" active-color="#dcdfe6" inactive-color="#409eff"></el-switch>
      </el-form-item>
      <el-form-item label="商品推荐：">
        新品
        <el-switch
          style="margin:0 10px"
          v-model="form.newProduct"
          active-color="#dcdfe6"
          inactive-color="#409eff"
        ></el-switch>推荐
        <el-switch
          style="margin:0 10px"
          v-model="form.recommends"
          active-color="#dcdfe6"
          inactive-color="#409eff"
        ></el-switch>
      </el-form-item>
      <el-form-item label="服务保证：">
        <el-checkbox v-model="form.salesReturn">无忧退货</el-checkbox>
        <el-checkbox v-model="form.celerityReturn">快速退货</el-checkbox>
        <el-checkbox v-model="form.exemption">免费包邮</el-checkbox>
      </el-form-item>
      <el-form-item label="详情页标题：">
        <el-input v-model="form.dataTitle" size="small"></el-input>
      </el-form-item>
      <el-form-item label="详情页描述：">
        <el-input v-model="form.Describe" size="small"></el-input>
      </el-form-item>
      <el-form-item label="商品关键字：">
        <el-input v-model="form.keyword" size="small"></el-input>
      </el-form-item>
      <el-form-item label="商品备注：">
        <el-input type="textarea" v-model="form.remark" size="small"></el-input>
      </el-form-item>
      <el-form-item class="next">
        <el-button @click="previous">上一步，填写商品信息</el-button>
        <el-button type="primary" @click="onSubmit">下一步，填写商品属性</el-button>
        <!-- <el-button>取消</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  props: ["form", "active"],
  methods: {
    previous() {
      this.$emit("previous");
    },
    onSubmit() {
      this.$emit("next");
    }
  }
};
</script>