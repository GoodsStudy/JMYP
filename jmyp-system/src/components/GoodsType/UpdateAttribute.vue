<template>
  <div class="update">
    <el-form ref="form" :model="form" label-width="150px">
      <el-form-item label="* 属性名称:">
        <el-input v-model="form.name" style="width:538px"></el-input>
      </el-form-item>
      <el-form-item label="商品类型:">
        <el-select v-model="form.type" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="分类筛选样式:">
        <el-radio v-model="form.classify" label="1">普通</el-radio>
        <el-radio v-model="form.classify" label="2">颜色</el-radio>
      </el-form-item>
      <el-form-item label="能否显示在导航栏:">
        <el-radio v-model="form.navigation" label="1">不需要检索</el-radio>
        <el-radio v-model="form.navigation" label="2">关键字检索</el-radio>
        <el-radio v-model="form.navigation" label="3">范围检索</el-radio>
      </el-form-item>
      <el-form-item label="能否进行检索:">
        <el-radio v-model="form.retrieve" label="1">是</el-radio>
        <el-radio v-model="form.retrieve" label="2">否</el-radio>
      </el-form-item>
      <el-form-item label="商品属性关联:">
        <el-radio v-model="form.relevance" label="1">是</el-radio>
        <el-radio v-model="form.relevance" label="2">否</el-radio>
      </el-form-item>
      <el-form-item label="属性是否可选:">
        <el-radio v-model="form.attribute" label="1">唯一</el-radio>
        <el-radio v-model="form.attribute" label="2">单选</el-radio>
        <el-radio v-model="form.attribute" label="3">复选</el-radio>
      </el-form-item>
      <el-form-item label="属性的录入方式:">
        <el-radio v-model="form.way" label="1">手工录入</el-radio>
        <el-radio v-model="form.way" label="2">从下面列表中选择</el-radio>
      </el-form-item>
      <el-form-item label="属性值可选值:">
        <el-input
          type="textarea"
          style="width:538px"
          :rows="1"
          placeholder="请输入内容"
          v-model="form.describe"
        ></el-input>
      </el-form-item>
      <el-form-item label="属性的录入方式:">
        <el-radio v-model="form.add" label="1">是</el-radio>
        <el-radio v-model="form.add" label="2">否</el-radio>
      </el-form-item>
      <el-form-item label="排序属性:">
        <el-input v-model="form.sort" style="width:538px"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        classify: "1",
        navigation: "1",
        retrieve: "1",
        relevance: "1",
        attribute: "1",
        type:'',
        add: "1",
        way: "1",
        sort: 100,
        describe: ["黑色", "红色", "白色", "粉色"]
      },
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ]
    };
  },
  methods: {
    submit() {
      //提交
      console.log(this.form);
      //   this.$router.push({ path: "/manage/classify" });
    }
  }
};
</script>
<style lang="scss" scoped>
.update {
  width: 800px;
  padding: 40px 20px;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  margin: 20px auto;
}
</style>