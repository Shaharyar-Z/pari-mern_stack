const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");

const User = require("../models/User");
const Bet = require("../models/Bet");

// @route  GET api/bets
// @desc   Get all the Bets
// @access Private
router.get("/:name", async (req, res) => {
  // console.log("in bet", req.params.name);
  try {
    const bets = await Bet.find({
      streamer: req.params.name,
    }).sort({
      date: -1,
    });
    res.json(bets);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route  POST api/bets
// @desc   Add a new Bet
// @access Private
router.post(
  "/",
  [
    check("streamerName", "Streamer is required").not().isEmpty(),
    check("gameName", "Streamer Game Name is required").not().isEmpty(),
    check("pick", "Pick is required").not().isEmpty(),
    check("value", "Value is required").not().isEmpty(),
    check("side", "Side is required").not().isEmpty(),
    check("verification", "Verification is required").not().isEmpty(),
    check("amount", "Amount is required").not().isEmpty(),
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { streamerName, gameName, pick, value, side, verification, amount } =
      req.body;

    try {
      const newContect = new Bet({
        streamer: streamerName,
        streamerGame: gameName,
        pick,
        value,
        side,
        verification,
        amount,
      });

      const Contact = await newContect.save();
      res.json(Contact);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
