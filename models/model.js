const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const UserData = new Schema({
    firstname:{ type : String},
    lastname:{ type : String},
    email:{ type : String},
   aadhar:{ type : Number},

    
})