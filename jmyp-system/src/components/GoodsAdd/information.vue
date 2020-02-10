<template>
  <div>
    <Steps :active="active" />
    <el-form ref="form" :model="form" label-width="110px" class="form">
      <StepOne :form="this.form" :active="this.active" @next="onSubmit" />
      <StepTwo :form="this.form" :active="this.active" @next="onSubmit" @previous="previous" />
      <StepThree :form="this.form" :active="this.active" @next="onSubmit" @previous="previous" />
    </el-form>
  </div>
</template>

<script>
import Steps from "../Content/steps";
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import StepThree from "./stepThree";
export default {
  data() {
    return {
      active: 1,
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
    Steps,
    StepOne,
    StepTwo,
    StepThree
  },
  methods: {
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

<style lang="scss">
.form {
  margin-top: 20px;
  .el-form-item {
    width: 700px;
    margin: 10px auto;
  }

  .el-row,
  .el-col-8 {
    width: 590px;
    height: auto;
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