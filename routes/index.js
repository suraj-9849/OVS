const mongoose = require('mongoose');
const Vote = require('../models/model')
var express = require('express');
var router = express.Router();

let connect = mongoose.connect('mongodb+srv://suraj:suraj123@cluster0.cbu73ke.mongodb.net/votes');

router.get('/', function (req, res, next) {
  res.render('login');
})
router.get('/save', async function (req, res) {
  const data = { firstname: req.query.firstname, lastname: req.query.lastname, email: req.query.email, password: req.query.password, aadhar: req.query.password, pancard: req.query.pancard };

  const vote = new Vote(data);

  const savedVote = await vote.save();
  console.log(savedVote);

  res.redirect('/home');
});

router.get('/home', function (req, res, next) {
  res.render('index');
});


router.get('/vote', function (req, res, next) {
  res.render('vote');
});
router.get('/Reverification', function (req, res, next) {
  const random = parseInt(req.query.random);
  const stateName = req.query.stateName;
  console.log(stateName);
  console.log(random);
  res.render('Reverification', { random: random, stateName: stateName });
});


router.get('/maps/:stateName/', function (req, res, next) {
  var stateName = req.params.stateName.toLocaleUpperCase().replace('-', " ");
  res.render('map', { state: stateName });
});

router.get('/upcoming/:coming/', function (req, res, next) {
  var coming = req.params.coming.toLocaleUpperCase().replace('-', " ");
  res.render('upcoming', { coming: coming });
});

router.get('/upcoming/search/:state', function (req, res, next) {
  var state = req.params.state;
  res.render('voting', { state: state });
});


router.get('/CandDetails', (req, res) => {
  let name = req.query.details;
  res.render('CandDetails', { name: name });
});

router.get('/LastVoting', function (req, res, next) {
  res.render('LastVoting');
});

module.exports = router;
