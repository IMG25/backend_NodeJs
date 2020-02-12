const express = require("express");

const Car = require("../models/car.model");
const router = express.Router();
const checkAuth = require("../middleware/check-auth");
const errHandler = err => {
  console.log("Error : ", err);
};

router.get("/", (req, res) => {
  res.send("Cars");
});

router.get("/all", checkAuth, (req, res) => {
  return Car.findAll().then(response => {
    res.send(response);
  });
});

router.get("/allAvailable", checkAuth, (req, res) => {
  return Car.findAll({
    where: {
      status: 1
    }
  }).then(response => {
    res.send(response);
  });
});

router.post("/add", (req, res) => {
  return Car.create({
    name: req.body.name,
    type: req.body.type,
    vehicleNo: req.body.vehicleNo,
    pricePerHour: req.body.pricePerHour,
    contactNo: req.body.contactNo,
    address: req.body.address,
    photo: req.body.photo
  })
    .then(response => {
      res.send(response);
    })
    .catch(errHandler);
});

router.post("/delete/:id", (req, res) => {
  return Car.findByPk(req.params.id)
    .then(response => {
      res.send("Succesfully deleted " + response.name);
      res.send(response.destroy());
    })
    .catch(errHandler);
});

module.exports = router;
