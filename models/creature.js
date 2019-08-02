var mongoose = require("mongoose");

var CreatureSchema = new mongoose.Schema({
    name: String,
});

module.exports = mongoose.model("Creature", CreatureSchema);