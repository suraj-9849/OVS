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

router.get('/maps/:stateName/', function(req, res, next) {
  var stateName = req.params.stateName.toLocaleUpperCase().replace('-'," ");
  res.render('map', { state: stateName });
});

router.get('/upcoming/:coming/', function(req, res, next) {
  var coming = req.params.coming.toLocaleUpperCase().replace('-'," ");
  res.render('upcoming', { coming: coming });
});

router.get('/upcoming/search/:state',function(req,res,next){
  var state = req.params;
  res.render('voting',{state : state});
});

module.exports = router;
