var mongoose = require("mongoose");

var SubregionSchema = new mongoose.Schema({
    name: String,
    imagePath: String,
    biome: String,
    description: String,
    encounters: [{type: mongoose.Schema.Types.ObjectId,  ref: 'Encounter'}],
    travelLinks:[{type: mongoose.Schema.Types.ObjectId,  ref: 'Travel'}],
    pois:[{type: mongoose.Schema.Types.ObjectId,  ref: 'POI'}]
});

module.exports = mongoose.model("Subregion", SubregionSchema);