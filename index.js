var express = require("express");
var app = express();
var router = express.Router();
var multer = require("multer");
var upload = multer();

const CarController = require("./controllers/carController");
const UserController = require("./controllers/userController");
const bodyparser = require("body-parser");

app.use(upload.array());
app.use(express.static("public"));

//DB Conection
require("./database/connection");

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.use("/cars", CarController);
app.use("/user", UserController);

app.listen(3000, function() {
  console.log("Server listening on port 3000!");
});

module.exports = router;
