var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('login');
});

router.get('/home', function(req, res, next) {
  res.render('index');
});
router.get('/vote', function(req, res, next) {
  res.render('vote');
});

router.get('/map/:stateName/', function(req, res, next) {
  var stateName = req.params.stateName;
  res.render('map', { state: stateName });
});
router.get('/upcoming/:coming/', function(req, res, next) {
  var coming = req.params.coming.toLocaleUpperCase().replace('-'," ");
  res.render('upcoming', { coming: coming });
});

module.exports = router;
