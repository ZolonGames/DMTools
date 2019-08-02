var mongoose = require("mongoose");

var EncounterSchema = new mongoose.Schema({
    name: String,
    rarity: String,
    description: String,
    avoidDC: String,
    findDC: String
});

module.exports = mongoose.model("Encounter", EncounterSchema);