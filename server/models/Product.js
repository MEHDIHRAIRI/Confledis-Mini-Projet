const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema({
  name: { type: String },
  price: {
    type: Number,
  },
  quantity: { type: Number },
});
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
