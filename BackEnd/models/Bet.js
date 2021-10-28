const mongoose = require("mongoose");

const betSchema = mongoose.Schema({
  streamer: {
    type: String,
    required: true,
  },
  streamerGame: {
    type: String,
    required: true,
  },
  pick: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  side: {
    type: String,
    required: true,
  },
  verification: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("bet", betSchema);
