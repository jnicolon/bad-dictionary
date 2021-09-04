const mongoose = require("mongoose");

const schema = mongoose.Schema({
  word: String,
  type: String,
  definition: String,
  related: [String],
});

module.exports = mongoose.model("Word", schema);
