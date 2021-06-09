module.exports = (app) => {
  const express = require("express");

  const {
    getProduct,
    createProduct,
    updateProduct,
    DeleteProduct,
  } = require("../controllers/Product");

  const router = express.Router();

  router.get("/", getProduct);
  router.post("/", createProduct);
  router.patch("/:id", updateProduct);
  router.delete("/:id", DeleteProduct);
};
