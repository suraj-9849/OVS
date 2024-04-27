const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/OVS');

  const userSchema = new mongoose.Schema({
    
  });
 module.exports = mongoose.model('User', userSchema);