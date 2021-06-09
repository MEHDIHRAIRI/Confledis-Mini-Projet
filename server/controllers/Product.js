module.exports = (app) => {
  const Product = require("../models/Product");

  app.get("/allProduct", async function (req, res, next) {
    await Product.find(function (err, data) {
      if (err) {
        console.log(err);
      }
      res.json(data);
    });
  });

  app.post("/Product/add", async function (req, res) {
    var Product = new Product();
    Product.name = req.body.name;
    Product.price = req.body.price;
    Product.quality = req.body.quality;
    //res.send(req.body);
    try {
      var Productlog = await Product.save();
      console.log(Productlog);
      res.send("Product added");
    } catch (err) {
      console.log(err);
    }
  });

  app.delete("/Product/delete/:id", async function (req, res) {
    var id = req.params.id;
    await Product.findByIdAndRemove(id, function (err, doc) {
      if (err) {
        console.log(err);
      }
      res.send("Product removed");
    });
  });

  // modify Product
  app.put("/Product/modify/:id", async function (req, res) {
    var id = req.params.id;
    await Product.findByIdAndUpdate(
      id,
      { $set: req.body },
      function (err, doc) {
        if (err) {
          console.log(err);
        }
        res.send("Product updated");
        console.log(doc);
      }
    );
  });
};
