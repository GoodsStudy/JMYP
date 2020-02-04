<template>
  <div>
    <Steps :active="0" />
    <el-form ref="form" :model="form" label-width="100px" class="form">
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
    </el-form>
  </div>
</template>

<script>
import Steps from "../Content/steps";
export default {
  data() {
    return {
      form: {
        type: "",
        name: "",
        title: "",
        brand: "",
        recommend: "",
        id: "",
        price: "0",
        marketPrice: "0",
        kc: "0",
        unit: "",
        weight: "0",
        sort: "0",
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
      console.log(this.form);
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