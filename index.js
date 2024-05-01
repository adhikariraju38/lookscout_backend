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
app.get("/", async (req, res) => {res.send("Express on Vercel")});

//routing
app.use("/", contact_routes);
//app.use("/", )

app.listen(3000, () => console.log("Server ready on port 3000."));
app.use(bodyParser.json());