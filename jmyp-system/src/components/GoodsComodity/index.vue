
<template>
  <el-form ref="form" :model="form" :rules="rules" label-width="80px">
    <el-form-item label="活动名称" prop="name">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="看这个" prop="test[0].tt">
      <el-input v-model="form.test[0].tt"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        test: [
          {
            tt: "123"
          }
        ]
      },
      rules: {
        name: [{ required: true, message: "请输入活动名称", trigger: "blur" }],
        "test[0].tt": [
          { required: true, message: "请输入活动名称", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    onSubmit() {
      window.console.log("submit!");
    }
  }
};
</script>