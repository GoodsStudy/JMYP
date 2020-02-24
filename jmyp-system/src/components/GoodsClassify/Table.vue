<template>
  <div class="avert">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" align="center" label="编号" width="100"></el-table-column>
      <el-table-column prop="type" align="center" label="分类级别"></el-table-column>
      <el-table-column prop="rank" align="center" label="级别" width="100"></el-table-column>
      <el-table-column prop="number" align="center" label="商品数量" width="100"></el-table-column>
      <el-table-column prop="unit" align="center" label="商品单位" width="100"></el-table-column>
      <el-table-column prop="navigation" align="center" label="导航栏" width="100">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.navigation" active-color="#409eff" inactive-color="#dcdfe6"></el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="show" align="center" label="是否显示" width="100">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.show" active-color="#409eff" inactive-color="#dcdfe6"></el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="sort" align="center" label="排序" width="100"></el-table-column>
      <el-table-column prop="address" align="center" label="设置" width="200">
        <template>
          <el-button size="mini" @click="subordinate">查看下级</el-button>
          <el-button size="mini" @click="transfer">转移商品</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="id" align="center" label="操作" width="200">
        <template slot-scope="scope">
          <el-button size="mini" @click="compile">编辑</el-button>
          <el-button type="danger" size="mini" @click="deletes(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: 1,
          type: "服装",
          rank: "1级",
          number: 1000,
          unit: "件",
          navigation: true,
          show: true,
          sort: 1
        },
        {
          id: 2,
          type: "服装",
          rank: "1级",
          number: 1000,
          unit: "件",
          navigation: true,
          show: true,
          sort: 1
        }
      ]
    };
  },
  methods: {
    subordinate() {
      //查看下级
      console.log("下级");
    },
    transfer() {
      //转移商品
      console.log("转移");
    },
    compile() {
      //编辑
      this.$router.push({ path: "/manage/update" });
    },
    deletes(id) {
      //删除
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    toPagination(val) {
      //子组件返回的页数
      console.log(val);
    },
    toNumber(val) {
      //返回当前一页多少条数据
      console.log(val);
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
</style>