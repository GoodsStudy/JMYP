<template>
  <div v-show="active === 2">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="属性类型：">
        <el-select
          v-model="form.propertyType"
          size="small"
          placeholder="请选择"
          @change="changeType(form.propertyType)"
        >
          <el-option
            v-for="item in form.options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品规格：">
        <el-row :gutter="12" :body-style="{margin:0}">
          <el-col :span="8">
            <el-card
              shadow="never"
              :body-style="{ background: '#f8f9fc',  width: '649px',margin:0}"
            >
              <div
                v-show="form.propertyType === '服装-T恤' || form.propertyType === '服装-裤装' || form.propertyTyp==='手机数码-手机通讯'"
              >
                <p>颜色：</p>
                <el-form ref="form" label-width="80px" v-show="form.Colors.length">
                  <el-checkbox
                    v-for="(item,index) in form.Colors"
                    :key="index"
                    v-model="item.checked"
                  >
                    {{item.color}}
                    <el-button type="text" size="small" @click="deldete(index)">删除</el-button>
                  </el-checkbox>
                </el-form>
                <div>
                  <el-input
                    class="color"
                    size="small"
                    v-model="form.color"
                    clearable
                    placeholder="请输入内容"
                  ></el-input>
                  <el-button size="small" @click="addColor">增加</el-button>
                </div>
              </div>

              <div v-show="form.propertyType === '服装-T恤'">
                <p>尺寸：</p>
                <el-form ref="form" label-width="80px">
                  <el-checkbox @change="change($event,'M')">M</el-checkbox>
                  <el-checkbox @change="change($event,'X')">X</el-checkbox>
                  <el-checkbox @change="change($event,'XL')">XL</el-checkbox>
                  <el-checkbox @change="change($event,'2XL')">2XL</el-checkbox>
                  <el-checkbox @change="change($event,'3XL')">3XL</el-checkbox>
                  <el-checkbox @change="change($event,'4XL')">4XL</el-checkbox>
                </el-form>
              </div>
              <div v-show="form.propertyType === '服装-裤装'">
                <p>尺寸：</p>
                <el-form ref="form" label-width="80px">
                  <el-checkbox @change="change($event,'29')">29</el-checkbox>
                  <el-checkbox @change="change($event,'30')">30</el-checkbox>
                  <el-checkbox @change="change($event,'31')">31</el-checkbox>
                  <el-checkbox @change="change($event,'32')">32</el-checkbox>
                  <el-checkbox @change="change($event,'33')">33</el-checkbox>
                  <el-checkbox @change="change($event,'34')">34</el-checkbox>
                </el-form>
              </div>
              <div v-show="form.propertyType === '手机数码-手机通讯'">
                <p>容量：</p>
                <el-form ref="form" label-width="80px">
                  <el-checkbox @change="change($event,'16G')">16G</el-checkbox>
                  <el-checkbox @change="change($event,'32G')">32G</el-checkbox>
                  <el-checkbox @change="change($event,'64G')">64G</el-checkbox>
                  <el-checkbox @change="change($event,'128G')">128G</el-checkbox>
                </el-form>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-table :data="form.tableData" border style="width: 100%;margin: 20px 0">
          <el-table-column
            v-show="form.tableData.length"
            prop="color"
            label="颜色"
            width="93"
            align="center"
          ></el-table-column>
          <el-table-column
            v-show="form.tableData.length"
            prop="size"
            label="尺寸"
            width="93"
            align="center"
          ></el-table-column>
          <el-table-column prop="date" label="销售价格" width="80" align="center">
            <template slot-scope="scope">
              <el-input v-model="scope.row.price"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="商品库存" width="80" align="center">
            <template slot-scope="scope">
              <el-input v-model="scope.row.kc"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="warningKC" label="库存预警" width="80" align="center">
            <template slot-scope="scope">
              <el-input v-model="scope.row.warningKC"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="SKUId" label="SKU编号" align="center">
            <template slot-scope="scope">
              <el-input v-model="scope.row.SKUId"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="deldete" label="操作" width="80" align="center">
            <template slot-scope="scope">
              <el-button type="text" @click="stripDelete(scope.row.deldete)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-button size="small" type="primary" @click="refresh">刷新列表</el-button>
        <el-button size="small" type="primary">同步价格</el-button>
        <el-form-item class="next">
          <el-button @click="previous">上一步，填写商品促销</el-button>
          <el-button type="primary" @click="onSubmit">下一步，填写商品促销</el-button>
          <!-- <el-button>取消</el-button> -->
        </el-form-item>
      </el-form-item>

      <!-- 商品参数 -->
      <el-form-item label="商品参数：">
        <el-row :gutter="12" :body-style="{margin:0}">
          <el-col :span="8">
            <el-card
              shadow="never"
              :body-style="{ background: '#f8f9fc',  width: '649px',margin:0}"
            >
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="活动名称:">
                  <el-input class="parameter" v-model="form.name" size="small"></el-input>
                </el-form-item>
                <el-form-item label="适用季节:">
                  <el-select v-model="name" placeholder="请选择">
                    <el-option
                      v-for="item in form.options2"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-form>
            </el-card>
          </el-col>
        </el-row>
      </el-form-item>

      <!-- 商品相册 -->
      <el-form-item label="商品相册：">
        <el-upload
          action="#"
          list-type="picture-card"
          :auto-upload="false"
          @before-upload="success(file)"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
        >
          <i slot="default" class="el-icon-plus"></i>
          <div slot="file" slot-scope="{file}">
            <img class="el-upload-list__item-thumbnail" :src="file.url" alt />
            <span class="el-upload-list__item-actions">
              <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                <i class="el-icon-zoom-in"></i>
              </span>
              <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleDownload(file)"
              >
                <i class="el-icon-download"></i>
              </span>
              <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleRemove(file)"
              >
                <i class="el-icon-delete"></i>
              </span>
            </span>
          </div>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="form.dialogImageUrl" alt />
        </el-dialog>
      </el-form-item>
      <el-form-item class="next">
        <el-button @click="previous">上一步，填写商品属性</el-button>
        <el-button type="primary" @click="onSubmit">下一步，选择商品关联</el-button>
        <!-- <el-button>取消</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  props: ["form", "active"],
<<<<<<< HEAD
  data() {
    return {
      name: "",
      dialogVisible: false,
      disabled: false
    };
  },
=======
>>>>>>> c85c4e4b32df7b290d79898b3aaa2f4cd9c493ae
  methods: {
    previous() {
      this.$emit("previous");
    },
    onSubmit() {
      this.$emit("next");
    },
<<<<<<< HEAD
    changeType(value) {
      //属性类型回调
      console.log(value);
    },
=======
>>>>>>> c85c4e4b32df7b290d79898b3aaa2f4cd9c493ae
    addColor() {
      //添加商品颜色
      if (this.form.color.trim() && this.form.size.length) {
        this.form.Colors.push({
          color: this.form.color,
          checked: false,
          size: JSON.parse(JSON.stringify(this.form.size))
        });
        this.form.color = "";
      } else {
        this.$message({
          message: "属性值不能为空",
          type: "warning"
        });
      }
    },
    change(event, value) {
      event
        ? this.form.size.push(value)
        : this.form.size.splice(this.form.size.indexOf(value), 1);
    },
    deldete(number) {
      //删除添加的颜色类型
      let arr = [];
      if (this.form.Colors[number].checked) {
        this.form.tableData.map((item, index) => {
          if (item.color != this.form.Colors[number].color) {
            arr.push(item);
          }
        });
        this.form.tableData = arr;
      }
      this.form.Colors.splice(number, 1);
    },
    refresh() {
      //将选中的颜色刷新到table中
      let arr = [];
      this.form.Colors.map(item => {
        item.checked
          ? item.size.map((data, index) => {
              arr.push({
                color: item.color, //table颜色
                size: data, //尺寸
                price: "", //价格
                kc: "", //库存量
                warningKC: "", //预警库存
                SKUId: "", //SKU编号
                deldete: { color: item.color, size: data } //数据顺序
              });
            })
          : null;
      });
      this.form.tableData = arr;
    },
    stripDelete(data) {
      //table数据单条删除
      this.form.tableData.map((item, index) => {
        item.color == data.color && item.size == data.size
          ? this.form.tableData.splice(index, 1)
          : null;
      });
<<<<<<< HEAD
    },
    handlePictureCardPreview(file) {
      //图片放大
      this.form.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      //图片下载
      console.log(file);
    },
    handleRemove(file, fileList) {
      //删除图片
      console.log(this.form);
    },
    success(file) {
      console.log(file);
    },
    handlePreview(file) {
      console.log(file);
    },
    previous() {
      //上一步
      this.$emit("previous");
    },
    onSubmit() {
      //下一步
      this.$emit("next");
=======
>>>>>>> c85c4e4b32df7b290d79898b3aaa2f4cd9c493ae
    }
  }
};
</script>

<style lang="scss" scoped>
<<<<<<< HEAD
</style>
<style lang="scss" scoped>
.parameter {
  width: 250px;
}
=======

>>>>>>> c85c4e4b32df7b290d79898b3aaa2f4cd9c493ae
</style>