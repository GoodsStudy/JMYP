<template>
  <div>
    <Top :list="list" />
    <router-view />
  </div>
</template>
<script>
import Top from "./Top";
import TopList from "../../api/config";
export default {
  data() {
    return {
      list: [] //TOP列表
    };
  },
  components: {
    Top
  },
  methods: {
    ToList() {
      TopList.map(item => {
        if (item.path == this.$router.app._route.path) {
          this.list = item.list;
        }
      });
    }
  },
  created() {
    this.ToList();
  },
  updated() {
    this.ToList();
  }
};
</script>