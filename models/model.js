const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VoterSchema = new Schema({
  firstname: { type: String },
  lastname: { type: String },
  email: { type: String },
  aadhar: { type: Number },
  pancard: { type: Number },
  password:{type:Number}
});

module.exports = mongoose.model("Vote", VoterSchema);