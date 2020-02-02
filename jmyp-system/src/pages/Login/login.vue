<template>
  <div id="loginbox">
    <div class="top">
      <h1>信息管理系统平台</h1>
      <p>版权所有 © xxxx科技有限公司</p>
    </div>
    <div class="from">
      <el-form>
        <el-form-item label="账号">
          <el-input type="text" v-model="name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="pass"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import qs from "qs";
import { Button, Form, Input } from "element-ui";
import md5 from '../../api/md5'

// import http from '@/api/http'

Vue.use(Button, Form, Input);
export default {
  data() {
    return {
      name: "", //账号
      pass: "" //密码
    };
  },
  methods: {
    login() {
      //登录
      if (this.name && this.pass) {
        axios.post(
            "http://localhost:3000/login",
            qs.stringify({
              name: this.name,
              pass: md5(this.pass)
            })
          )
          .then(({data}) => {
            if(data.code){
              this.$router.push({path:'manage'})
              window.console.log( data.path)
            }else{
              this.$alert("账号或密码不正确，请重新输入!", "提示");
            }
          });
      } else {
        this.$alert("账号密码不能为空", "提示");
      }
    }
  }
};
</script>
<style lang="scss" >
#loginbox {
  width: 100%;
  min-height: 100%;
  padding-top: 10%;
  box-sizing: border-box;
  text-align: left;
  position: relative;
  font-family: "Microsoft Yahei", sans-serif;
  font-size: 12px;
  color: #666;
  background-color: #2e363f;
  display: flex;
  flex-direction: column;
  align-items: center;
  .top {
    width: 450px;
    padding: 10px 10px;
    text-align: center;
    font-size: 14px;
    line-height: 30px;
    background: #2e363f;
    color: #b2dfee;
    p {
      width: 100%;
      height: 100%;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      position: relative;
      font-size: 14px;
      color: gray;
      background-color: #2e363f;
    }
  }
  .from {
    width: 450px;
    .el-form-item {
      display: flex;
    }
    //label
    .el-form-item__label {
      width: 50px;
      text-align: center;
    }
    //输入框
    .el-form-item__content {
      flex: 1;
    }
    //按钮
    .el-button {
      width: 400px;
      float: right;
    }
  }
}
</style>