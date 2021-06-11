import React, { useEffect, useState } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

function ProductForm() {
  const [data, setData] = useState({
    name: String,
    price: Number,
    quantity: Number,
  });
  const Postdata = async () => {
    await axios
      .post("http://localhost:5000/Product/add", data)
      .then((response) => console.log(response));
  };
  return (
    <div>
      <div style={{ paddingLeft: "50px", paddingTop: "50px" }}>
        <TextField
          id="product-name"
          name="Product Name"
          label="Product Name"
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <br />
        <TextField
          id="product-Price"
          name="Product Price"
          label="Product Price"
          onChange={(e) => setData({ ...data, price: e.target.value })}
        />
        <br />
        <TextField
          id="product-Quantity"
          name="Product Quantity"
          label="Product Quantity"
          onChange={(e) => setData({ ...data, quantity: e.target.value })}
        />
        <br />
        <br />
        <Button variant="outlined" color="primary" onClick={Postdata}>
          Add product
        </Button>
      </div>
    </div>
  );
}

export default ProductForm;
