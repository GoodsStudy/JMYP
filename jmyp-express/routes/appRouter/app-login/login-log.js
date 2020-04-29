const express = require('express');
const router = express.Router();
const mysql = require('../../../api/mysql');

/* GET home page. */
router.post('/', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  const body = req.body   //接受post参数
  console.log(body)

  const data = {}   //返回的data数据
  let select = await mysql(`SELECT * FROM app_user WHERE name = '${body.name}' AND pass ='${body.pass}'`)

  if (select.length) {
    data.code = 0
    data.msg = "登录成功"

  } else {
    data.code = 400
    data.msg = "账号或密码不正确"
  }

  res.json(data)

});

module.exports = router;
