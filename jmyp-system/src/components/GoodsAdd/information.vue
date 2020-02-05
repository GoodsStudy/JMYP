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
          <el-button @click="previous">上一步，填写商品促销</el-button>
          <el-button type="primary" @click="onSubmit">下一步，填写商品促销</el-button>
          <!-- <el-button>取消</el-button> -->
        </el-form-item>
      </div>
      <div v-show="active === 2">
        <el-form-item label="属性类型：">
          <el-select v-model="form.propertyType" placeholder="请选择">
            <el-option
              v-for="item in form.options2"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品规格：">
          <el-input v-model="form.marketPrice" size="small"></el-input>
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
            value: "选项1",
            label: "黄金糕"
          },
          {
            value: "选项2",
            label: "双皮奶"
          },
          {
            value: "选项3",
            label: "蚵仔煎"
          },
          {
            value: "选项4",
            label: "龙须面"
          },
          {
            value: "选项5",
            label: "北京烤鸭"
          }
        ]
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
}
</style>