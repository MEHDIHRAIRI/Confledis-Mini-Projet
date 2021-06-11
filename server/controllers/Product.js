var Product = require("../models/Product");
const mongoose = require("mongoose");
const express = require("express");

const getProduct = async (req, res) => {
  try {
    const allProducts = await Product.find();

    console.log(allProducts);
    res.status(200).json(allProducts);
  } catch (error) {
    res.status(404).json({ message: error.message() });
  }
};

const createProduct = async (req, res) => {
  var newproduct = new Product();
  newproduct.name = req.body.name;
  newproduct.price = req.body.price;
  newproduct.quantity = req.body.quantity;
  console.log("hello", req.body);
  try {
    await newproduct.save();
    res.status(200).json(newproduct);
  } catch (err) {
    console.log(err);
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, quantity } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No Product Found ! ");

  const updatedProduct = { name, price, quantity, _id: id };

  await Product.findByIdAndUpdate(id, updatedProduct, { new: true });
  res.json(updatedProduct);
};

const DeleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No Product Found with id : ${id} ");

  await Product.findByIdAndRemove(id);
  res.json({ message: "Product deleted successfully." });
};

module.exports = { getProduct, createProduct, updateProduct, DeleteProduct };
