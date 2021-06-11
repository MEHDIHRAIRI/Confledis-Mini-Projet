require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/Product");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/Product", router);
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const db = mongoose.connection;
app.use(express.json());
app.listen(process.env.PORT || 5000, () => console.log("Server Started !"));

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database !"));
