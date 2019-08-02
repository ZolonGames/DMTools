var mongoose = require("mongoose");

var WarpCharacterSchema = new mongoose.Schema({
    name: String,
    playerName: String,
    currentWarp: Number,
    class: String
});

module.exports = mongoose.model("WarpCharacter", WarpCharacterSchema);