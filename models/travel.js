var mongoose = require("mongoose");
var Subregion = require("../models/subregion");

var TravelSchema = new mongoose.Schema({
    from: {type: mongoose.Schema.Types.ObjectId, ref: 'Subregion'},
    to: {type: mongoose.Schema.Types.ObjectId, ref: 'Subregion'},
    method: String,
    duration: Number
});

var autoPopulateTo = function(next) {
    this.populate('to');
    next();
  };

var autoPopulateFrom = function(next) {
    this.populate('from');
    next();
  };
  
  TravelSchema.
    pre('findOne', autoPopulateTo, autoPopulateFrom).
    pre('find', autoPopulateTo, autoPopulateFrom);

module.exports = mongoose.model("Travel", TravelSchema);