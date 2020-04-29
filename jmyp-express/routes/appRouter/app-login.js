var express = require('express');
var router = express.Router();
const SMSClient = require('@alicloud/sms-sdk')

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log(req.body)
  res.append('Access-Control-Allow-Origin', '*')

  // ACCESS_KEY_ID/ACCESS_KEY_SECRET 根据实际申请的账号信息进行替换
  const accessKeyId = '203804563'
  const secretAccessKey = 'q398z14u4aybuv4knem5448gdq39h3f4'
  //初始化sms_client
  let smsClient = new SMSClient({ accessKeyId, secretAccessKey })
  //发送短信
  smsClient.sendSMS({
    PhoneNumbers: '18777718237',//手机号码
    SignName: '聚美',//短信签名
    TemplateCode: 'SMS_187745347',//短信模板
    TemplateParam: '{"code":"12345"}'///您的验证码为${code}"
  }).then(function (res) {
    let { Code } = res
    if (Code === 'OK') {
      //处理返回参数
      console.log(res)
    }
  }, function (err) {
    console.log(err)
  })
  res.json('heoll word')
});

module.exports = router;
