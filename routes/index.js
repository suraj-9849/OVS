var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('login');
});

router.get('/home', function(req, res, next) {
  res.render('index');
});

module.exports = router;
