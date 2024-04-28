const mongoose = require('mongoose');
const Vote = require('../models/model')
var express = require('express');
var router = express.Router();

let connect = mongoose.connect('mongodb+srv://suraj:suraj123@cluster0.cbu73ke.mongodb.net/votes');

router.get('/', function(req, res, next) {
  const vote = new Vote({ 
     firstname: 'Suraj',
    lastname: 'Lohit',
    email: 'suraj123@cluster0.c',
    aadhar: 12345,})
    vote.save()
    console.log('Connected Bhai');
});

module.exports = router;