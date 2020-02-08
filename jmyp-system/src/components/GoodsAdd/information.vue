<template>
  <div>
    <Steps :active="active" />
    <el-form ref="form" :model="form" label-width="110px" class="form">
      <div v-show="active === 0">
        <el-form-item label="* 商品分类：">
          <el-cascader
            v-model="form.type"
            size="small"
            :options="form.options"
            @change="handleChange"
          ></el-cascader>
        </el-form-item>
        <el-form-item label="* 商品名称：">
          <el-input v-model="form.name" size="small"></el-input>
        </el-form-item>
        <el-form-item label="* 副标题：">
          <el-input v-model="form.title" size="small"></el-input>
        </el-form-item>
        <el-form-item label="* 商品品牌：">
          <el-select v-model="form.brand" placeholder="请选择">
            <el-option
              v-for="item in form.options2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品介绍：">
          <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="form.recommend"></el-input>
        </el-form-item>
        <el-form-item label="商品货号：">
          <el-input v-model="form.id" size="small"></el-input>
        </el-form-item>
        <el-form-item label="商品售价：">
          <el-input v-model="form.price" size="small"></el-input>
        </el-form-item>
        <el-form-item label="市场价：">
          <el-input v-model="form.marketPrice" size="small"></el-input>
        </el-form-item>
        <el-form-item label="商品库存：">
          <el-input v-model="form.kc" size="small"></el-input>
        </el-form-item>
        <el-form-item label="计量单位：">
          <el-input v-model="form.unit" size="small"></el-input>
        </el-form-item>
        <el-form-item label="商品重量：">
          <el-input v-model="form.weight" size="small"></el-input>
        </el-form-item>
        <el-form-item label="排序：">
          <el-input v-model="form.sort" size="small"></el-input>
        </el-form-item>

        <el-form-item class="next">
          <el-button type="primary" @click="onSubmit">下一步，填写商品促销</el-button>
          <!-- <el-button>取消</el-button> -->
        </el-form-item>
      </div>
      <div v-show="active === 1">
        <el-form-item label="赠送积分：">
          <el-input v-model="form.integral" size="small"></el-input>
        </el-form-item>
        <el-form-item label="赠送成长值：">
          <el-input v-model="form.growthIntegral" size="small"></el-input>
        </el-form-item>
        <el-form-item label="购买积分限制：">
          <el-input v-model="form.astrict" size="small"></el-input>
        </el-form-item>
        <el-form-item label="预告商品：">
          <el-switch v-model="form.foreshow" active-color="#dcdfe6" inactive-color="#409eff"></el-switch>
        </el-form-item>
        <el-form-item label="商品上架：">
          <el-switch v-model="form.putaway" active-color="#dcdfe6" inactive-color="#409eff"></el-switch>
        </el-form-item>
        <el-form-item label="商品推荐：">
          新品
          <el-switch
            style="margin:0 10px"
            v-model="form.newProduct"
            active-color="#dcdfe6"
            inactive-color="#409eff"
          ></el-switch>推荐
          <el-switch
            style="margin:0 10px"
            v-model="form.recommends"
            active-color="#dcdfe6"
            inactive-color="#409eff"
          ></el-switch>
        </el-form-item>
        <el-form-item label="服务保证：">
          <el-checkbox v-model="form.salesReturn">无忧退货</el-checkbox>
          <el-checkbox v-model="form.celerityReturn">快速退货</el-checkbox>
          <el-checkbox v-model="form.exemption">免费包邮</el-checkbox>
        </el-form-item>
        <el-form-item label="详情页标题：">
          <el-input v-model="form.dataTitle" size="small"></el-input>
        </el-form-item>
        <el-form-item label="详情页描述：">
          <el-input v-model="form.Describe" size="small"></el-input>
        </el-form-item>
        <el-form-item label="商品关键字：">
          <el-input v-model="form.keyword" size="small"></el-input>
        </el-form-item>
        <el-form-item label="商品备注：">
          <el-input type="textarea" v-model="form.remark" size="small"></el-input>
        </el-form-item>
        <el-form-item class="next">
          <el-button @click="previous">上一步，填写商品信息</el-button>
          <el-button type="primary" @click="onSubmit">下一步，填写商品属性</el-button>
          <!-- <el-button>取消</el-button> -->
        </el-form-item>
      </div>
      <div v-show="active === 2">
        <el-form-item label="属性类型：">
          <el-select v-model="form.propertyType" size="small" placeholder="请选择">
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
                :body-style="{ background: '#f8f9fc',  width: '600px',margin:0}"
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
          <el-table :data="form.tableData" border style="width: 100%">
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
      </div>
    </el-form>
  </div>
</template>

<script>
import Steps from "../Content/steps";
export default {
  data() {
    return {
      active: 2,
      form: {
        type: "", //商品分类
        name: "", //商品名称
        title: "", //副标题
        brand: "", //商品品牌
        recommend: "", //商品介绍
        id: "", //商品货号
        price: "0", //商品售价
        marketPrice: "0", //市场价
        kc: "0", //库存
        unit: "", //计量单位
        weight: "0", //商品重量
        sort: "0", //排序
        integral: 0, //增送积分
        growthIntegral: 0, //增送成长值
        astrict: 0, //积分购买限制
        foreshow: true, //预告商品
        putaway: false, //商品上架
        newProduct: false, //是否新品
        recommends: true, //推荐
        salesReturn: true, //无忧退货
        celerityReturn: false, //快速退款
        exemption: false, //免费包邮
        dataTitle: "", //详情页标题
        Describe: "", //详情页描述
        keyword: "", //商品关键字
        remark: "", //商品备注
        propertyType: "", //属性类型
        color: "", //商品颜色
        size: [], //商品尺码、尺寸、容量
        Colors: [], //颜色集合
        tableData: [], //要添加的商品颜色和尺码
        options: [
          {
            value: "zhinan",
            label: "指南",
            children: [
              {
                value: "shejiyuanze",
                label: "设计原则",
                children: [
                  {
                    value: "yizhi",
                    label: "一致"
                  },
                  {
                    value: "fankui",
                    label: "反馈"
                  },
                  {
                    value: "xiaolv",
                    label: "效率"
                  },
                  {
                    value: "kekong",
                    label: "可控"
                  }
                ]
              },
              {
                value: "daohang",
                label: "导航",
                children: [
                  {
                    value: "cexiangdaohang",
                    label: "侧向导航"
                  },
                  {
                    value: "dingbudaohang",
                    label: "顶部导航"
                  }
                ]
              }
            ]
          },
          {
            value: "zujian",
            label: "组件",
            children: [
              {
                value: "basic",
                label: "Basic",
                children: [
                  {
                    value: "layout",
                    label: "Layout 布局"
                  },
                  {
                    value: "color",
                    label: "Color 色彩"
                  },
                  {
                    value: "typography",
                    label: "Typography 字体"
                  },
                  {
                    value: "icon",
                    label: "Icon 图标"
                  },
                  {
                    value: "button",
                    label: "Button 按钮"
                  }
                ]
              },
              {
                value: "form",
                label: "Form",
                children: [
                  {
                    value: "radio",
                    label: "Radio 单选框"
                  },
                  {
                    value: "checkbox",
                    label: "Checkbox 多选框"
                  },
                  {
                    value: "input",
                    label: "Input 输入框"
                  },
                  {
                    value: "input-number",
                    label: "InputNumber 计数器"
                  },
                  {
                    value: "select",
                    label: "Select 选择器"
                  },
                  {
                    value: "cascader",
                    label: "Cascader 级联选择器"
                  },
                  {
                    value: "switch",
                    label: "Switch 开关"
                  },
                  {
                    value: "slider",
                    label: "Slider 滑块"
                  },
                  {
                    value: "time-picker",
                    label: "TimePicker 时间选择器"
                  },
                  {
                    value: "date-picker",
                    label: "DatePicker 日期选择器"
                  },
                  {
                    value: "datetime-picker",
                    label: "DateTimePicker 日期时间选择器"
                  },
                  {
                    value: "upload",
                    label: "Upload 上传"
                  },
                  {
                    value: "rate",
                    label: "Rate 评分"
                  },
                  {
                    value: "form",
                    label: "Form 表单"
                  }
                ]
              },
              {
                value: "data",
                label: "Data",
                children: [
                  {
                    value: "table",
                    label: "Table 表格"
                  },
                  {
                    value: "tag",
                    label: "Tag 标签"
                  },
                  {
                    value: "progress",
                    label: "Progress 进度条"
                  },
                  {
                    value: "tree",
                    label: "Tree 树形控件"
                  },
                  {
                    value: "pagination",
                    label: "Pagination 分页"
                  },
                  {
                    value: "badge",
                    label: "Badge 标记"
                  }
                ]
              },
              {
                value: "notice",
                label: "Notice",
                children: [
                  {
                    value: "alert",
                    label: "Alert 警告"
                  },
                  {
                    value: "loading",
                    label: "Loading 加载"
                  },
                  {
                    value: "message",
                    label: "Message 消息提示"
                  },
                  {
                    value: "message-box",
                    label: "MessageBox 弹框"
                  },
                  {
                    value: "notification",
                    label: "Notification 通知"
                  }
                ]
              },
              {
                value: "navigation",
                label: "Navigation",
                children: [
                  {
                    value: "menu",
                    label: "NavMenu 导航菜单"
                  },
                  {
                    value: "tabs",
                    label: "Tabs 标签页"
                  },
                  {
                    value: "breadcrumb",
                    label: "Breadcrumb 面包屑"
                  },
                  {
                    value: "dropdown",
                    label: "Dropdown 下拉菜单"
                  },
                  {
                    value: "steps",
                    label: "Steps 步骤条"
                  }
                ]
              },
              {
                value: "others",
                label: "Others",
                children: [
                  {
                    value: "dialog",
                    label: "Dialog 对话框"
                  },
                  {
                    value: "tooltip",
                    label: "Tooltip 文字提示"
                  },
                  {
                    value: "popover",
                    label: "Popover 弹出框"
                  },
                  {
                    value: "card",
                    label: "Card 卡片"
                  },
                  {
                    value: "carousel",
                    label: "Carousel 走马灯"
                  },
                  {
                    value: "collapse",
                    label: "Collapse 折叠面板"
                  }
                ]
              }
            ]
          },
          {
            value: "ziyuan",
            label: "资源",
            children: [
              {
                value: "axure",
                label: "Axure Components"
              },
              {
                value: "sketch",
                label: "Sketch Templates"
              },
              {
                value: "jiaohu",
                label: "组件交互文档"
              }
            ]
          }
        ],
        options2: [
          {
            value: "服装-T恤",
            label: "服装-T恤"
          },
          {
            value: "服装-裤装",
            label: "服装-裤装"
          },
          {
            value: "手机数码-手机通讯",
            label: "手机数码-手机通讯"
          },
          {
            value: "配件",
            label: "配件"
          },
          {
            value: "居家",
            label: "居家"
          },
          {
            value: "洗护",
            label: "洗护"
          }
        ],
        tableData: []
      }
    };
  },
  components: {
    Steps
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    onSubmit() {
      //下一步
      console.log(this.active);
      this.active = this.active + 1;
    },
    previous() {
      //上一步
      this.active = this.active - 1;
    },
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
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  margin-top: 20px;
  .el-form-item {
    width: 700px;
    margin: 10px auto;
  }
  .next {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .el-row,
  .el-col-8 {
    width: 590px;
    border: 0px;
    margin: 0 !important;
    padding: 0 !important;
  }
  .color {
    width: 160px;
    margin-right: 15px;
  }
}
</style>