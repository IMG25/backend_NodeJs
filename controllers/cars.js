const express = require("express");
var mysql = require("mysql");
var con = require("../models/index");

const router = express.Router();

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

module.exports = router;
