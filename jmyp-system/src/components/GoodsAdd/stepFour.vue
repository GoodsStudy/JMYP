<template>
  <div v-show="active===3">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="关联专题">
        <div style="text-align: center">
          <el-transfer
            style="text-align: left; display: inline-block"
            v-model="value4"
            filterable
            :left-default-checked="[2, 3]"
            :right-default-checked="[1]"
            :titles="['待选择', '已选择']"
            :button-texts="['', '']"
            :format="{
        noChecked: '${total}',
        hasChecked: '${checked}/${total}'
      }"
            @change="handleChange"
            :data="data"
          >
            <span slot-scope="{ option }">{{ option.key }} - {{ option.label }}</span>
          </el-transfer>
        </div>
      </el-form-item>
      <el-form-item label="关联优选">
        <div style="text-align: center">
          <el-transfer
            style="text-align: left; display: inline-block"
            v-model="value4"
            filterable
            :left-default-checked="[2, 3]"
            :right-default-checked="[1]"
            :titles="['待选择', '已选择']"
            :button-texts="['', '']"
            :format="{
        noChecked: '${total}',
        hasChecked: '${checked}/${total}'
      }"
            @change="handleChange"
            :data="data"
          >
            <span slot-scope="{ option }">{{ option.key }} - {{ option.label }}</span>
          </el-transfer>
        </div>
      </el-form-item>
      <el-form-item class="next">
        <el-button @click="previous">上一步，填写商品属性</el-button>
        <el-button type="primary" @click="submit">完成，提交商品</el-button>
        <!-- <el-button>取消</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  props: ["form", "active"],
  data() {
    const generateData = _ => {
      const data = [];
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项 ${i}`
        });
      }
      return data;
    };
    return {
      data: generateData(),
      value: [],
      value4: [],
      renderFunc(h, option) {
        return (
          <span>
            {option.key} - {option.label}
          </span>
        );
      }
    };
  },
  methods: {
    previous() {
      //上一步
      this.$emit("previous");
    },
    submit() {
      //提交
      console.log(this.form);
    },
    handleChange(value, direction, movedKeys) {
      console.log(value, direction, movedKeys);
    }
  }
};
</script>
<style lang="scss" >
.transfer-footer {
  margin-left: 20px;
  padding: 6px 5px;
}
.el-transfer-panel__filter {
  width: auto;
}
.el-transfer__buttons {
  // display: flex;
  // flex-direction: column;
}
</style>