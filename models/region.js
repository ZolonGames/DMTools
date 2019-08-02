var mongoose = require("mongoose");
var Encounter = require("../models/encounter");
var Subregion = require("../models/subregion");

var RegionSchema = new mongoose.Schema({
    name: String,
    imagePath: String,
    biome: String,
    description: String,
    encounters: [{type: mongoose.Schema.Types.ObjectId,  ref: 'Encounter'}],
    subregions: [{type: mongoose.Schema.Types.ObjectId,  ref: 'Subregion'}],
});

var autoPopulateSubregions = function(next) {
    this.populate('subregions');
    next();
  };

var autoPopulateEncounters = function(next) {
    this.populate('encounters');
    next();
  };
  
RegionSchema.
    pre('findOne', autoPopulateSubregions, autoPopulateEncounters).
    pre('find', autoPopulateSubregions, autoPopulateEncounters);

module.exports = mongoose.model("Region", RegionSchema);