const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const router = express.Router();

require("../../middleware/passport");
const User = require("../../models/User");

// @desc    register
// @route   POST /api/users
// @access  Public

router.post("/", (req, res) => {
  const { name, email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    //check if email exists
    if (err)
      //error searching user in the database
      res
        .status(500)
        .json({ message: { msgBody: "Error has occured", msgError: true } });
    if (user)
      //already exists
      res.status(400).json({
        message: { msgBody: "email is already taken", msgError: true },
      });
    else {
      // can create
      const newUser = new User({ name, email, password }); //create an instance of Mongoose Model - register the user
      newUser.save((err) => {
        //save the user to the db
        if (err)
          res.status(500).json({
            message: { msgBody: "Error has occured", msgError: true },
          });
        else
          res.status(201).json({
            message: {
              msgBody: "Account succesfully created",
              msgError: false,
            },
          });
      });
    }
  });
});

module.exports = router;
