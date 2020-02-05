const express = require("express");
var mysql = require("mysql");
var con = require("../models/index");

const Car = require("../models/car.model");
const router = express.Router();

const errHandler = err => {
  console.log("Error : ", err);
};

router.get("/", (req, res) => {
  res.send("Cars");
});

router.get("/all", (req, res) => {
  let query = "SELECT * FROM `cars` ORDER BY id ASC"; // query database to get all the players

  // execute query
  con.query(query, (err, result) => {
    if (err) {
      res.redirect("/");
    }
    res.send(result);
  });
});

router.post("/add", (req, res) => {
  const car = Car.create({ name: "Corolla" }).catch(errHandler);
  res.send(car);
});

module.exports = router;
