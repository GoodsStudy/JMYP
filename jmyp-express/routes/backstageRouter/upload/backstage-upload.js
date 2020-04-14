var express = require('express');
var router = express.Router();
var fs = require('fs');
// 初始化Client
var co = require('co');
var OSS = require('ali-oss');
var client = new OSS({
  region: 'oss-cn-beijing.aliyuncs.com',
  accessKeyId: 'LTAI4FqzQVY3LPfpuHk2dyfh',
  accessKeySecret: 'WjvHlzFE4Zd14o57kxjnh5OnlFPinj'
});

var ali_oss = {
    bucket: 'imagepath',
    endPoint: 'oss-cn-shanghai.aliyuncs.com',
}

/* GET home page. */
router.all('/', function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*')
  const body = req.body
  res.json(body)
});

module.exports = router;