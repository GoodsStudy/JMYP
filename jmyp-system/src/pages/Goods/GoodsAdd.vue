<template>
  <div class="goodsAdd">
    <Information />
  </div>
</template>
<script>
import Information from "../../components/GoodsAdd/information";
export default {
  components: {
    Information
  }
};
</script>

<style lang="scss" scoped>
.goodsAdd {
  border-radius: 0px;
  border: 1px solid #ebeef5;
  width: 800px;
  margin: 20px auto;
  padding: 20px 35px;
}
</style>