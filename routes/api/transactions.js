const express = require("express");
const router = express.Router();
const passport = require("passport");
const JWT = require("jsonwebtoken");
const Transaction = require("../../models/Transaction");
const User = require("../../models/Transaction");

// @desc    Add transaction
// @route   POST /api/transactions
// @access  Private

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { text, amount } = req.body;
      const creator = { id: req.user._id };
      const transaction = await Transaction.create({
        text: req.body.text,
        amount: req.body.amount,
        creator: creator,
      });

      return res.status(201).json({
        success: true,
        data: transaction,
      });
    } catch (err) {
      if (err.name === "ValidationError") {
        const messages = Object.values(err.errors).map((val) => val.message);

        return res.status(400).json({
          success: false,
          error: messages,
        });
      } else {
        return res.status(500).json({
          success: false,
          error: "Server Error",
        });
      }
    }
  }
);

// @desc    Get all transactions
// @route   GET /api/transactions
// @access  Private

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const transactions = await Transaction.find({
        "creator.id": req.user._id,
      });

      return res.status(200).json({
        success: true,
        count: transactions.length,
        data: transactions,
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
);

// @desc    Delete transaction
// @route   DELETE /api/transactions/:id
// @access  Private

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const transaction = await Transaction.findById(req.params.id);

      if (!transaction) {
        return res.status(404).json({
          success: false,
          error: "No transaction found",
        });
      }

      await transaction.remove();

      return res.status(200).json({
        success: true,
        data: {},
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
);

module.exports = router;
