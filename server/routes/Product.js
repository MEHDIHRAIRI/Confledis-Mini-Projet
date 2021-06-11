const express = require("express");
const ProductController = require("../controllers/Product");

const router = express.Router();

router.route("/").get(ProductController.getProduct);
router.post("/add", ProductController.createProduct);
//router.patch("/:id", updateProduct);
router.delete("/:id", ProductController.DeleteProduct);

module.exports = router;
