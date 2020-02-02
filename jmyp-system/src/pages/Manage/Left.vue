<template>
  <div class="menuItem">
    <el-menu
      :default-active="active"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      background-color="#304156"
      text-color="#fff"
      active-text-color="#409EFF"
      menu-trigger="hover"
      :router="true"
    >
      <el-menu-item index="/manage">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-goods"></i>
          <span slot="title">商品</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/manage/goods">
            <i class="el-icon-picture-outline-round"></i>
            商品列表
          </el-menu-item>
          <el-menu-item index="/manage/add">
            <i class="el-icon-picture-outline-round"></i>
            添加商品
          </el-menu-item>
          <el-menu-item index="/manage/classify">
            <i class="el-icon-picture-outline-round"></i>
            商品分类
          </el-menu-item>
          <el-menu-item index="/manage/type">
            <i class="el-icon-picture-outline-round"></i>
            商品类型
          </el-menu-item>
          <el-menu-item index="/manage/comodity">
            <i class="el-icon-picture-outline-round"></i>
            品牌管理
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-s-order"></i>
          <span slot="title">订单</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">订单列表</el-menu-item>
          <el-menu-item index="3-2">订单设置</el-menu-item>
          <el-menu-item index="3-3">退货申请处理</el-menu-item>
          <el-menu-item index="3-3">退货原因设置</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-coin"></i>
          <span slot="title">销售</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1">秒杀活动列表</el-menu-item>
          <el-menu-item index="4-2">优惠卷列表</el-menu-item>
          <el-menu-item index="4-3">品牌推荐</el-menu-item>
          <el-menu-item index="4-4">新品推荐</el-menu-item>
          <el-menu-item index="4-5">人气推荐</el-menu-item>
          <el-menu-item index="4-6">专题推荐</el-menu-item>
          <el-menu-item index="4-7">广告推荐</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
    
      isCollapse: false,
      index: 1, //导航栏选中的index
      isok: true //是否展开
    };
  },
  methods: {
    btn() {
      this.isok = !this.isok;
      window.console.log(666);
      window.console.log(666);
    }
  },
  computed:{
    /** 导航栏的路由 */
    active(){
      return this.$store.state.active
    }
  }
};
</script>

<style lang="scss" >
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.menuItem {
  height: 100%;
  .el-menu {
    height: 100%;
  }
  .el-menu {
    border-right: none;
  }
}
</style>