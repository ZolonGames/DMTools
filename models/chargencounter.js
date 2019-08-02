var mongoose = require("mongoose");

var CharGenCounterSchema = new mongoose.Schema({
    counterID: Number,
    chars: Number
});

module.exports = mongoose.model("CharGenCounter", CharGenCounterSchema);