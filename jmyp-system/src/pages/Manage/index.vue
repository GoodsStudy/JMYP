<template>
  <div class="manage">
    <Left/>
    <Right class="right"/>
  </div>
</template>
<script>
import Left from './Left'
import Right from './Right'
export default {
  components:{
    Left,
    Right
  },
  watch:{
    /**监听路由的变化，当点击top组件的跳转时，导航栏的index也随着改变 */
    $route(to,from){
       this.$store.commit('active',to.path)
    }
  }

}
</script>
<style lang="scss" scoped>
    .manage{
      display: flex;
      height: 100%;
    }
    .left{
      height: 100%;
    }
    .right{
      flex: 1;
    }
</style>