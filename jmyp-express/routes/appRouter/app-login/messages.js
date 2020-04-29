var express = require('express');
var router = express.Router();
var http = require('http')

const { randomNumber, generateSHA1SignatureByHex } = require('../../../api/const/random-number')

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.append('Access-Control-Allow-Origin', '*');
    //6位随机验证码
    // const Nonce = randomNumber()

    // const appSecret = '4b82335f4235'
    // const CurTime = 6
    // const SHA1 = generateSHA1SignatureByHex(appSecret, Nonce, CurTime)
    // const options = {
    //     hostname: 'https://api.netease.im/sms/sendcode.action',
    //     method: 'POST',
    //     headers: {
    //         "Content-Type": "application/json; charset=utf-8",
    //         'AppKey': '4be7c9a5abd4bc68412680b23fc4ee83', //开发者平台分配的appkey 别写错了
    //         'Nonce': Nonce,
    //         'CurTime': '6',
    //         'CheckSum': SHA1
    //     }
    // };

    // res.json(SHA1)



    const options = {
        hostname: 'nodejs.cn',
        port: 80,
        path: '/upload',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            // 'Content-Length': Buffer.byteLength(postData),
            "Host": "zwp.market.alicloudapi.com",
            "X-Ca-Timestamp": "1587632352994",
            "gateway_channel": "http",
            "X-Ca-Request-Mode": "debug",
            "X-Ca-Key": "203804563",
            "X-Ca-Stage": "RELEASE",
            "x-ca-nonce": "f5a344d8-e443-4f44-ac0d-7b9dd12f0762",
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "APPCODE 7b4c891a54034e29a604cc617cb04ef8"
        }
    };


    http.get('http://zwp.market.alicloudapi.com/sms/sendv2?content=%E3%80%90%E4%BA%91%E9%80%9A%E7%9F%A5%E3%80%91%E6%82%A8%E7%9A%84%E9%AA%8C%E8%AF%81%E7%A0%81%E6%98%AF123456%E3%80%82%E5%A6%82%E9%9D%9E%E6%9C%AC%E4%BA%BA%E6%93%8D%E4%BD%9C%EF%BC%8C%E8%AF%B7%E5%BF%BD%E7%95%A5%E6%9C%AC%E7%9F%AD%E4%BF%A1&mobile=18777718237', options,(res) => {
        res.setEncoding('utf8')
        let str = '';
        res.on('data', (chunk) => {
            str += chunk;
        })
        console.log(str)
        res.json(str)
    })
});

module.exports = router;

