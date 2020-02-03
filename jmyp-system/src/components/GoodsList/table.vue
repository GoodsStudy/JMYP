<template>
  <div class="table">
    <el-table :data="tableData" border @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="60" align="center"></el-table-column>
      <el-table-column prop="id" label="编号" width="100" align="center"></el-table-column>
      <el-table-column prop="img" label="商品图片" width="120" align="center">
        <template slot-scope="scope">
          <el-image style="width: 80px; height: 80px" :src="scope.row.img"></el-image>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="商品名称" align="center">
        <template slot-scope="scope" class="conten">
          <p>{{scope.row.name.name}}</p>
          <p>品牌:{{scope.row.name.classify}}</p>
        </template>
      </el-table-column>
      <el-table-column prop="price" label="价格/货号" width="120" align="center">
        <template slot-scope="scope">
          <p>价格:￥{{scope.row.price.price}}</p>
          <p>货号:{{scope.row.price.goodsID}}</p>
        </template>
      </el-table-column>
      <el-table-column prop="label" label="标签" width="140" align="center">
        <template slot-scope="scope">
          <div class="label">
            <label>
              上架:
              <el-switch
                v-model="scope.row.label.putaway"
                active-color="#409eff"
                inactive-color="#dcdfe6"
              ></el-switch>
            </label>
            <label>
              新品:
              <el-switch
                v-model="scope.row.label.newProduct"
                active-color="#409eff"
                inactive-color="#dcdfe6"
              ></el-switch>
            </label>
            <label>
              推荐:
              <el-switch
                v-model="scope.row.label.recommend"
                active-color="#409eff"
                inactive-color="#dcdfe6"
              ></el-switch>
            </label>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="sort" label="排序" width="100" align="center"></el-table-column>
      <el-table-column prop="address" label="SKU库存" width="100" align="center">
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
      </el-table-column>
      <el-table-column prop="sales" label="销量" width="100" align="center"></el-table-column>
      <el-table-column prop="audit" label="审核状态" width="100" align="center">
        <template slot-scope="scope">
          <el-link :underline="false" target="_blank">{{scope.row.audit}}</el-link>
          <el-link :underline="false" type="primary">审核详情</el-link>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="160" align="center">
        <template>
          <label class="operation">
            <el-button size="small">查看</el-button>
          </label>
          <label class="operation">
            <el-button size="small">编辑</el-button>
          </label>
          <label class="operation">
            <el-button size="small">日志</el-button>
          </label>
          <label class="operation">
            <el-button size="small" type="danger">删除</el-button>
          </label>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import xiaomi from "../../assets/xiaomi.jpg";
export default {
  data() {
    return {
      tableData: [
        {
          id: "20200203",
          img: xiaomi,
          name: { name: "华为 HUAWEI P20", classify: "华为" },
          price: { price: "3788", goodsID: "6946605" },
          label: { putaway: true, newProduct: true, recommend: false },
          sort: 100,
          sales: 0,
          audit: "未审核"
        },
        {
          id: "20200203",
          img: xiaomi,
          name: { name: "华为 HUAWEI P20", classify: "华为" },
          price: { price: "3788", goodsID: "6946605" },
          label: { putaway: true, newProduct: true, recommend: false },
          sort: 100,
          sales: 0,
          audit: "未审核"
        }
      ],
      multipleSelection: []
    };
  },
  methods: {
    handleSelectionChange(val) {
      //table 选中的的返回到multipleSelection
      this.multipleSelection = val;
    }
  }
};
</script>

<style lang="scss">
.table {
  width: 97%;
  margin: auto;
  .label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    label {
      padding: 5px;
    }
  }
  .conten {
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-size: 14px;
      color: #606266;
      line-height: 14px;
    }
  }
  .sort {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #409eff;
    line-height: 40px;
    color: #fff;
  }
  .operation {
    display: inline-block;
    margin-top: 10px;
    margin-left: 10px;
  }
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
}
</style>