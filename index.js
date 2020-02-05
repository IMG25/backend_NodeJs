var express = require("express");
var app = express();
var router = express.Router();

const CarsController = require("./controllers/cars");
const bodyparser = require("body-parser");

//DB Conection
require("./database/connection");

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.use("/cars", CarsController);

app.listen(3000, function() {
  console.log("Server listening on port 3000!");
});

module.exports = router;
