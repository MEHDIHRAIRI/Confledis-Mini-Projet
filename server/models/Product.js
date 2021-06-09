const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var Product = new Schema({
  name: String,
  price: Number,
  quality: String,
});
module.exports = mongoose.model("Product", Product);
