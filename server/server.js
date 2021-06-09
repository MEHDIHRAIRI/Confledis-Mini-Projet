require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
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

dialogflowRoutes = require("./routes/Product")(app);
