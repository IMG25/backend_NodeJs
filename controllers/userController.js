const express = require("express");
const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
// const checkAuth = require("../middleware/check-auth");

const router = express.Router();

router.post("/register", (req, res) => {
  // return res.send(req.body.password)

  //   user.save((err, result) => {
  //     if (err) {
  //       return res.status(400).json({
  //         message: "Something went wrong"
  //       });
  //     } else {
  //       return res.status(200).json({
  //         message: "Succesfully registered",
  //         user: user
  //       });
  //     }
  //   });
  console.log(bcrypt.hashSync(req.body.password, 10));
  return UserModel.create({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
  })
    .then(response => {
      res.send(response);
    })
    .catch(errHandler => {
      res.send(errHandler.errors);
    });
});

router.post("/login", (req, res) => {
  // return res.send(req.body);
  return UserModel.findOne({ where: { email: req.body.email } })
    .then(response => {
      console.log(response.dataValues);
      if (!response.dataValues) return res.status(404).send("No user found.");
      const user = response.dataValues;
      var passwordIsValid = bcrypt.compare(req.body.password, user.password);

      if (!passwordIsValid)
        return res.status(401).send({ auth: false, token: null });

      var token = jwt.sign({ user: req.body }, "secret", {
        expiresIn: 86400 // expires in 24 hours
      });

      res.status(200).send({ auth: true, user: user, token: token });
    })
    .catch(err => {
      return res.status(500).send({ msg: "Error on the server.", error: err });
    });
});

module.exports = router;
