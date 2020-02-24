<template>
  <div class="update">
    <el-form ref="form" :model="form" label-width="150px">
      <el-form-item label="* 分类名称:">
        <el-input v-model="form.name" style="width:538px"></el-input>
      </el-form-item>
      <el-form-item label="上级分类:">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="数量单位:">
        <el-input v-model="form.number" style="width:538px"></el-input>
      </el-form-item>
      <el-form-item label="排序:">
        <el-input v-model="form.sort" style="width:538px"></el-input>
      </el-form-item>
      <el-form-item label="是否显示:">
        <el-radio v-model="form.radio" label="1">是</el-radio>
        <el-radio v-model="form.radio" label="2">否</el-radio>
      </el-form-item>
      <el-form-item label="是否显示在导航栏:">
        <el-radio v-model="form.radio2" label="1">是</el-radio>
        <el-radio v-model="form.radio2" label="2">否</el-radio>
      </el-form-item>
      <el-form-item label="筛选属性:">
        <div v-for="(item,index) in form.screen" :key="index" style="margin-bottom:10px">
          <el-cascader v-model="string" :options="options" clearable @change="screen(index)"></el-cascader>
          <el-button style="margin-left:20px" @click="dele(index)">删除</el-button>
        </div>
        <el-button type="primary" @click="add()">新增</el-button>
      </el-form-item>
      <el-form-item label="关键词:">
        <el-input v-model="form.keyword" style="width:538px"></el-input>
      </el-form-item>
      <el-form-item label="分类描述:">
        <el-input
          type="textarea"
          style="width:538px"
          :rows="1"
          placeholder="请输入内容"
          v-model="form.describe"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      string: [],
      form: {
        name: "",
        number: "",
        sort: 1,
        radio: "1",
        radio2: "1",
        screen: [[]],
        keyword: "服装",
        describe: "服装分类"
      },
      options: [
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
      ],
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
      value: ""
    };
  },
  methods: {
    screen(index) {
      this.form.screen.splice(index, 1, this.string);
      console.log(this.form.screen);
    },
    dele(index) {
      //删除筛选属性
      this.form.screen.length > 1
        ? this.form.screen.splice(index, 1)
        : this.$message({
            message: "至少留有一个",
            type: "warning"
          });
    },
    add() {
      //添加筛选属性
      this.form.screen.length < 3
        ? this.form.screen.push([])
        : this.$message({
            message: "最多添加三个",
            type: "warning"
          });
    },
    submit() {
      //提交
      console.log(this.form);
      this.$router.push({path:'/manage/classify'})
    }
  }
};
</script>
<style lang="scss" scoped>
.update {
  width: 800px;
  padding: 40px 20px;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  margin: 20px auto;
}
</style>