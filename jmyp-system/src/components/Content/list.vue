<template>
  <div class="list avert berter">
    <i class="el-icon-s-order"></i>
    <span>数据列表</span>
    <el-button class="buttom" size="small" @click="goodadd">添加</el-button>
  </div>
</template>

<script>
export default {
    methods:{
        goodadd(){
            window.console.log(666)
            this.$router.push({path:'/manage/add'})
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
.berter::after {
  content: "";
  height: 0;
  clear: both;
  overflow: hidden;
  display: block;
  visibility: hidden;
}
.list {
  border: 1px solid #ebeef5;
  margin-top: 20px;
  padding: 15px 25px;
  box-sizing: border-box;
  color: #303133;
  margin-bottom: 20px;

  i {
    display: inline-block;
    margin-right: 2px;
  }
  .buttom {
    float: right;
  }
}
</style>