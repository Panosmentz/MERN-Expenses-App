const express = require("express");
const passport = require("passport");
const JWT = require("jsonwebtoken");

const router = express.Router();

require("../../middleware/passport");

// @desc    logout
// @route   GET /api/logout
// @access  Private

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.clearCookie("access_token");
    res.json({ user: { email: "" }, success: true });
  }
);

module.exports = router;
