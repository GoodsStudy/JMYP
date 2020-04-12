var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log(req.body)
  res.append('Access-Control-Allow-Origin', '*')
  res.json('heoll word')
});

module.exports = router;
