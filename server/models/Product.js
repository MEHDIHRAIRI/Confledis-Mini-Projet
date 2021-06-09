const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var Course = new Schema({
  name: String,
  price: Number,
  quality: String,
});
module.exports = mongoose.model("Course", Course);
