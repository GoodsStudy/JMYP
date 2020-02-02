const express = require('express');
const router = express.Router();
const mysql = require('../api/mysql');
const admin = require('../api/router/admin')
const user = require('../api/router/user')


/* GET home page. */
router.post('/', async function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  const body = req.body   //接受post参数

  const data = {}   //返回的data数据

  let list = await mysql(`SELECT * FROM user WHERE name=${body.name} AND pass ='${body.pass}'`)

  if (list.length) {
    data.code = true
    data.msg = "成功"
    list[0].title === 2 ? data.path = user : data.path = admin

  } else {
    data.code = false
    data.msg = "失败"
  }

  console.log(admin,user)
  res.json(data)

});

module.exports = router;
