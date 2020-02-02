<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item
            v-for="(item,index) in list"
            :key="index"
            :to="{ path: item.path }"
            style="cursor: pointer;"
          >{{item.name}}</el-breadcrumb-item>
        </el-breadcrumb>

        <div class="grid-content bg-purple-dark" @click="exit">
          <div class="demo-fit">
            <div class="block">
              <el-avatar shape="square" :size="40" :src="url"></el-avatar>
              <i class="el-icon-caret-bottom"></i>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: ["list"],
  data() {
    return {
      url:
        "http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/banner/macrozheng_small_icon.png"
    };
  },
  methods: {
    exit() {
      window.console.log(666);
    }
  }
};
</script>
<style lang="scss" >
.el-row {
  border-bottom: 1px solid #e6e6e6;
  height: 50px;
}

.grid-content {
  float: right;
  margin-top: 5px;
  .block {
    display: flex;
    i {
      margin-top: 25px;
      color: #606266;
      margin-left: 5px;
    }
  }
  img {
    width: 40px;
    margin-right: 5px;
  }
}

.el-col {
  display: flex;
  justify-content: space-between;
  .el-breadcrumb {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
}
.el-breadcrumb {
  width: auto;
  height: 50px;
}
</style>