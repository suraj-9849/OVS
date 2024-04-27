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
router.get('/RealVoting', function(req, res, next) {
  const random = parseInt(req.query.random);
  const stateName = req.query.stateName;
  console.log(stateName);
  console.log(random);
  res.render('RealVoting', { random: random, stateName: stateName });
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
  var state = req.params.state;
  res.render('voting',{state : state});
});


router.get('/CandDetails', (req, res) => {
  let name = req.query.details; 
  // console.log(name);
  res.render('CandDetails', { name: name });
});

module.exports = router;
