<template>
  <div v-show="active === 0">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="* 商品分类：">
        <el-cascader
          v-model="form.type"
          size="small"
          :options="form.options"
          @change="handleChange"
        ></el-cascader>
      </el-form-item>
      <el-form-item label="* 商品名称：">
        <el-input v-model="form.name" size="small"></el-input>
      </el-form-item>
      <el-form-item label="* 副标题：">
        <el-input v-model="form.title" size="small"></el-input>
      </el-form-item>
      <el-form-item label="* 商品品牌：">
        <el-select v-model="form.brand" placeholder="请选择">
          <el-option
            v-for="item in form.options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品介绍：">
        <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="form.recommend"></el-input>
      </el-form-item>
      <el-form-item label="商品货号：">
        <el-input v-model="form.id" size="small"></el-input>
      </el-form-item>
      <el-form-item label="商品售价：">
        <el-input v-model="form.price" size="small"></el-input>
      </el-form-item>
      <el-form-item label="市场价：">
        <el-input v-model="form.marketPrice" size="small"></el-input>
      </el-form-item>
      <el-form-item label="商品库存：">
        <el-input v-model="form.kc" size="small"></el-input>
      </el-form-item>
      <el-form-item label="计量单位：">
        <el-input v-model="form.unit" size="small"></el-input>
      </el-form-item>
      <el-form-item label="商品重量：">
        <el-input v-model="form.weight" size="small"></el-input>
      </el-form-item>
      <el-form-item label="排序：">
        <el-input v-model="form.sort" size="small"></el-input>
      </el-form-item>

      <el-form-item class="next">
        <el-button type="primary" @click="onSubmit">下一步，填写商品促销</el-button>
        <!-- <el-button>取消</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  props: ["form", "active"],
  methods: {
    handleChange(value) {
      console.log(value);
    },
    onSubmit() {
      this.$emit("next");
    }
  }
};
</script>

<style lang="scss" scoped>
.next {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>