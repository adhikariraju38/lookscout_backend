const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const contact_routes = require("./routes/contact");
var cors = require("cors");
app.use(express.json());

app.use(cors());
//body-parser

mongoose.connect(process.env.MONGO_DB).then(() => {
  console.log("mongo db connected");
});

app.use(bodyParser.json());

//routing
app.use("/", contact_routes);
//app.use("/", )

//database connecting to mongo db

app.listen(8000, () => {
  console.log("Running");
  console.log("admin Running at /admin");
});
