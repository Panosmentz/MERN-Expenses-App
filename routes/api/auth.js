const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../../models/User");
require("../../middleware/passport");
require("dotenv").config({ path: "./config/config.env" });

//sign the token with iss(issuer), sub(subject)userID from db
const signToken = (userID) => {
  return jwt.sign(
    {
      iss: "pmentz",
      sub: userID,
    },
    process.env.SECRET_OR_KEY,
    { expiresIn: "1h" }
  );
};

// @desc    login
// @route   GET /api/auth
// @access  Public

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { email } = req.user;
    const { id } = req.user;
    res
      .status(200)
      .json({ isAuthenticated: true, user: { email }, id: { id } });
  }
);

// @desc    login
// @route   POST /api/auth
// @access  Public

router.post(
  "/",
  passport.authenticate("local", { session: false }),
  (req, res) => {
    if (req.isAuthenticated()) {
      const { _id, email } = req.user;
      const token = signToken(_id); //sign the token with _id
      res.cookie("access_token", token, {
        httpOnly: true,
        sameSite: true,
      }); //set access_token cookie to the response
      res.status(200).json({ isAuthenticated: true, user: { email } });
    }
  }
);
//httpOnly -> cannot edit the cookie from client using JS - prevent Cross site scripting attacks
//sameSite -> prevent Cross site forgery attacks
module.exports = router;
